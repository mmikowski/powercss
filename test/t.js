/*
 * t.js
 * nodeunit-b suite for PowerCSS
 *
 * Please run using /nodeunit <this_file>/
*/

/*jslint              node : true,   continue : true,
 devel   : true,    indent : 2,       maxerr  : 50,
 newcap  : true,     nomen : true,   plusplus : true,
 regexp  : true,      vars : false,    white  : true
 unparam : true,      todo : true
*/

/*global global, pcss */

/* Test instructions
 * $ cd node_modules/powercss
 * $ npm install
 * $ cd test
 * $ ../node_modules/nodeunit/bin/nodeunit ./<this-file>
 *
 * Debug instructions
 * $ ../node_modules/node-inspector/bin/node-debug.js \
 *   node_modules/nodeunit/bin/nodeunit \
 *   ./<this-file>
 *
 * This should start your default browser with debugging tools.
 * Only FireFox and Chrome are supported.
 *
*/
  'use strict';
  var
    nubObj = require( 'nodeunit-b' ),
    onWinError
    ;

  onWinError = function ( error_data, url_str, line_idx ) {
    console.warn( error_data, url_str, line_idx );
    return false; // true - prevent default handler, false - allow
  };

  nubObj.setInjectRoot(__dirname, '../dist/');
  nubObj.inject([ 'pcss.js' ]);

  exports.t = nubObj({
    // make these properties of window conveniently available to tests
    provide: [ 'pcss' ],
    // html to bootstrap sandbox DOM
    html: '<!doctype html><html><head></head><body></body></html>',
    setUp: function( finish_fn, win_obj, nub_obj ) {
      console.log( 'setUp' );
      // finish_fn = callback fn to execute on complete
      // win_obj     = window object with a document attached
      // nub_obj     = nodeunit-b object

      // mock out jquery.ajax
      // win_obj.$.ajax = function() {};
      win_obj.onerror     = onWinError;
      global.pcss         = win_obj.pcss;
      finish_fn();
    },
    tearDown: function( finish_fn, win_obj, nub_obj ) {
      console.log( 'tearDown' );
      // another chance to mutate nub_obj, win_obj
      // (though win_obj will be reset in setUp)
      finish_fn();
    },

    test010Init : function ( test_obj, win_obj, pcss_obj ) {
      var
        method_list = [
          '_togglePcss_',     '_setGlobalMixinMap_',
          '_getAssetIdList_', '_getAssetJson_',
          '_setVsheet_',      '_setCascade_'
        ],
        method_count = method_list.length,
        i, method_key, expect_str, ret_val;

      test_obj.expect( 9 );
      expect_str = 'pcss_obj and pcss should point to same object';
      test_obj.ok( pcss_obj === pcss, expect_str );

      for ( i = 0; i < method_count; i++ ) {
        method_key = method_list[ i ];
        expect_str = 'method ' + method_key
          + ' should fail prior to _initModule_';
        try { ret_val = pcss_obj[ method_key ](); }
        catch( error ) { ret_val = error; }
        test_obj.ok(
          ret_val === '_please_run_initmodule_first_',
          expect_str
        );
      }

      expect_str = '_init_module_ should return "pcss-"';
      try { ret_val = pcss_obj._initModule_(); }
      catch( error ) { ret_val = error; }
      test_obj.ok( ret_val === 'pcss-', expect_str );

      expect_str = 'Initial toggle should return false';
      try { ret_val = pcss_obj._togglePcss_(); }
      catch( error ) { ret_val = error; }
      test_obj.ok( ret_val === false, expect_str );

      test_obj.done();
    },

    test020ExtendRuleMap : function ( test_obj, win_obj, pcss_obj ) {
      var 
        base_map, extend_map, check_map, expect_str, ret_val;

      test_obj.expect( 14 );

      expect_str = '_init_module_ should return "nu-"';
      try { ret_val = pcss_obj._initModule_({ _style_el_prefix_ : 'nu' }); }
      catch( error ) { ret_val = error; }
      test_obj.ok( ret_val === 'nu-', expect_str );

      expect_str = 'base_map should be empty';
      base_map   = {};
      extend_map = {};
      check_map  = {};
      try { ret_val = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_val = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_val === base_map, expect_str );

      expect_str = 'base_map should be empty as null keys delete'; 
      base_map   = {};
      extend_map = { foo : null };
      check_map  = {};
      try { ret_val = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_val = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_val === base_map, expect_str );

      expect_str = 'base_map should be empty as null keys delete'; 
      base_map   = { foo : 'fred' };
      extend_map = { foo : null };
      check_map  = {};
      try { ret_val = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_val = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_val === base_map, expect_str );

      expect_str = 'base_map should retain "red" key'; 
      base_map   = { foo : 'fred', red : '#f00' };
      extend_map = { foo : null };
      check_map  = { red : '#f00' };
      try { ret_val = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_val = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_val === base_map, expect_str );

      expect_str = 'base_map should be empty as null keys delete'; 
      base_map   = { foo : 'fred', red : '#f00' };
      extend_map = { foo : null,   red : null   };
      check_map  = {};
      try { ret_val = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_val = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_val === base_map, expect_str );

      expect_str = 'base_map should match complex results'; 
      base_map = {
        _display_        : '_inline_block_',
        _opacity_        : '_1_',
        _box_sizing_     : '_border_box_',
        _position_       : '_relative_',
        _vertical_align_ : '_top_',
        _margin_         : '_1rem_',
        _box_shadow_     : '_global_d25_box_shadow_',
        _border_         : [[ '_d25rem_', '_solid_', '_color_mid_' ]],
        _border_radius_  : '_1rem_',
        _width_          : [ '16rem' ],
        _height_         : [ '8rem' ],
        _padding_top_    : '_1rem_',
        _background_     : '_global_linear_grad_',
        _font_size_      : '_1d5rem_',
        _font_weight_    : '_800_',
        _color_          : '_xfff_',
        _text_align_     : '_center_'
      };
      extend_map = {
        _display_    : '_block_',
        _width_      : null,
        _margin_     : null,
        _max_width_  : [ '64rem' ],
        _font_size_  : '_2rem_',
        _box_shadow_ : '_global_d5_box_shadow_',
      };
      check_map = {
        _display_        : '_block_',
        _opacity_        : '_1_',
        _box_sizing_     : '_border_box_',
        _position_       : '_relative_',
        _vertical_align_ : '_top_',
        _max_width_      : [ '64rem' ],
        _box_shadow_     : '_global_d5_box_shadow_',
        _border_         : [[ '_d25rem_', '_solid_', '_color_mid_' ]],
        _border_radius_  : '_1rem_',
        _height_         : [ '8rem' ],
        _padding_top_    : '_1rem_',
        _background_     : '_global_linear_grad_',
        _font_size_      : '_2rem_',
        _font_weight_    : '_800_',
        _color_          : '_xfff_',
        _text_align_     : '_center_'
      };
      try { ret_val = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_val = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_val === base_map, expect_str );

      expect_str = '_init_module_ again should return "nu-" regardless of args';
      try { ret_val = pcss_obj._initModule_({ _style_el_prefix_ : 'foo' }); }
      catch( error ) { ret_val = error; }
      test_obj.ok( ret_val === 'nu-', expect_str );

      test_obj.done();
    },
  
    test030Vsheets : function ( test_obj, win_obj, pcss_obj ) {
      var 
        base_selector_list = [
          { _selector_str_  : 'body',
            _rule_map_      : { _margin_ : '_0_' }
          }
        ],
        expect_str, ret_val;
      test_obj.expect( 4 );

      expect_str = 'Stylesheet count should === 0';
      try { ret_val = win_obj.document.styleSheets.length; }
      catch( error ) { ret_val = error; }
      test_obj.ok( ret_val === 0, expect_str );
  
      expect_str = '_init_module_ should return "foo-"';
      try { ret_val = pcss_obj._initModule_({ _style_el_prefix_ : 'foo' }); }
      catch( error ) { ret_val = error; }
      test_obj.ok( ret_val === 'foo-', expect_str );

      expect_str = 'Stylesheet count should === 2';
      try { ret_val = win_obj.document.styleSheets.length; }
      catch( error ) { ret_val = error; }
      test_obj.ok( ret_val === 2, expect_str );

      expect_str = 'Add vsheet _base_';
      try {
        ret_val = pcss._setVsheet_({
          _vsheet_id_     : '_base_',
          _mode_str_      : '_add_',
          _selector_list_ : base_selector_list
        });
      }
      catch( error ) { ret_val = error; }
      test_obj.ok( ret_val === '_base_', expect_str );


      test_obj.done();
    }
  });
