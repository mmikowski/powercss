/*
 * t.js
 * nodeunit-b suite for PowerCSS
 *
 * Test instructions
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
/*jslint              node : true,   continue : true,
 devel   : true,    indent : 2,       maxerr  : 50,
 newcap  : true,     nomen : true,   plusplus : true,
 regexp  : true,      vars : false,    white  : true
 unparam : true,      todo : true
*/
/*global global, pcss */

  'use strict';
  var
    nubObj  = require( 'nodeunit-b' ),
    topCmap = {
      _020_base_map_ : {
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
      },
      _020_extend_map_ : {
        _display_    : '_block_',
        _width_      : null,
        _margin_     : null,
        _max_width_  : [ '64rem' ],
        _font_size_  : '_2rem_',
        _box_shadow_ : '_global_d5_box_shadow_',
      },
      _020_check_map_ : {
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
      },
      _030_json01_ : '[{"_selector_str_":"body","_rule_lock_list_":'
        + '["_font_size_"],"_rule_map_":{"_margin_":"_0_",'
        + '"_font_size_":"_1d5rem_"}}]',
      _030_json02_ : '[{"_selector_str_":"body","_rule_map_":'
        + '{"_margin_":"_2rem_","_font_size_":"_2rem_"}}]',
      _030_merged_01_ : '[{"_selector_str_":"body","_rule_lock_list_"'
        + ':["_font_size_"],"_rule_map_":{"_margin_":"_2rem_",'
        + '"_font_size_":"_1d5rem_"}}]',
      _040_mixin_map_ : {
        _font_size_      : '16px',
        _color_font_     : '#888',
        _font_sans_      : 'sans',
        _background_grad_ : {
          _alt_list_ : [
            [ '#f85032' ],
            '_xfff_',
            [[ '_2d5rem_', '_2rem_' ]],
            [[ '_2d5rem_', '_2rem_', [ 'holy-cow' ], '_font_size_' ]]
          ]
        }
      },
      _040_expect_list_ : [
        'color:#888',

        'color:#888;font-family:sans;font-size:16px;margin:0;overflow-y:scroll',

        'padding:2.5rem 2rem',

        'color:#888;font-family:sans;font-size:16px;margin:0;overflow-y:scroll;padding:2.5rem 2rem',

        'padding:2.5rem 2rem;color:#888;font-family:sans;font-size:16px;margin:0;overflow-y:scroll',

        'color:#888;font-family:sans;font-size:16px;padding:2.5rem 2rem;margin:0;overflow-y:scroll',

        'background:#f85032;background:-moz-linear-gradient(left, #f85032 0%, #6d362d 100%)',

        'background:#f85032;background:#fff;background:2.5rem 2rem;background:2.5rem 2rem holy-cow',

        'background:#f85032;background:#fff;background:2.5rem 2rem;background:2.5rem 2rem holy-cow'
          + ';padding:2.5rem 2rem',

        'padding:2.5rem 2rem;background:#f85032;background:#fff;background:2.5rem 2rem;'
          + 'background:2.5rem 2rem holy-cow',

        'margin:0;padding:2.5rem 2rem;overflow-y:scroll;'
          + 'background:#f85032;background:#fff;background:2.5rem 2rem;'
          + 'background:2.5rem 2rem holy-cow 16px;'
          + 'font-family:sans;font-size:16px;color:#888',

        'margin:2.5rem 2rem 2rem 16px',

        'margin:0;padding:2.5rem 2rem;overflow-y:scroll;'
          + 'background:#f85032;background:#fff;background:2.5rem 2rem;'
          + 'background:2.5rem 2rem holy-cow 16px;'
          + 'font-family:sans;font-size:16px;color:#888'
      ],
      _040_rule_map_list_ : [
        { _color_       : '_color_font_' }, // ======= 0
        { _color_       : '_color_font_',   // ======= 1
          _font_family_ : '_font_sans_',
          _font_size_   : '_font_size_',
          _margin_      : '_0_',
          _overflow_y_  : '_scroll_'
        },
        { _padding_     : [[ '_2d5rem_', '_2rem_' ]] }, // 2
        { _color_       : '_color_font_',               // 3
          _font_family_ : '_font_sans_',
          _font_size_   : '_font_size_',
          _margin_      : '_0_',
          _overflow_y_  : '_scroll_',
          _padding_     : [[ '_2d5rem_', '_2rem_' ]]
        },
        { _padding_     : [[ '_2d5rem_', '_2rem_' ]],   // 4
          _color_       : '_color_font_',
          _font_family_ : '_font_sans_',
          _font_size_   : '_font_size_',
          _margin_      : '_0_',
          _overflow_y_  : '_scroll_'
        },
        { _color_       : '_color_font_', //========= 5
          _font_family_ : '_font_sans_',
          _font_size_   : '_font_size_',
          _padding_     : [[ '_2d5rem_', '_2rem_' ]],
          _margin_      : '_0_',
          _overflow_y_  : '_scroll_'
        },
        { _background_  : { //======================= 6
            _alt_list_ : [
              [ '#f85032' ],
              [ '-moz-linear-gradient(left, #f85032 0%, #6d362d 100%)' ]
            ]
          }
        },
        { _background_  : { //======================= 7
            _alt_list_ : [
              [ '#f85032' ],
              '_xfff_',
              [[ '_2d5rem_', '_2rem_' ]],
              [[ '_2d5rem_', '_2rem_', [ 'holy-cow' ] ]]
            ]
          }
        },
        { _background_  : { //======================= 8
            _alt_list_ : [
              [ '#f85032' ],
              '_xfff_',
              [[ '_2d5rem_', '_2rem_' ]],
              [[ '_2d5rem_', '_2rem_', [ 'holy-cow' ] ]]
            ]
          },
          _padding_ : [[ '_2d5rem_', '_2rem_' ]]
        },
        { _padding_ : [[ '_2d5rem_', '_2rem_' ]], // 9
          _background_  : {
            _alt_list_ : [
              [ '#f85032' ],
              '_xfff_',
              [[ '_2d5rem_', '_2rem_' ]],
              [[ '_2d5rem_', '_2rem_', [ 'holy-cow' ] ]]
            ]
          }
        },
        { _margin_      : '_0_', //================= 10
          _padding_     : [[ '_2d5rem_', '_2rem_' ]],
          _overflow_y_  : '_scroll_',
          _background_  : {
            _alt_list_ : [
              [ '#f85032' ],
              '_xfff_',
              [[ '_2d5rem_', '_2rem_' ]],
              [[ '_2d5rem_', '_2rem_', [ 'holy-cow' ], '_font_size_' ]]
            ]
          },
          _font_family_ : '_font_sans_',
          _font_size_   : '_font_size_',
          _color_       : '_color_font_'
        },
        { _margin_ : [[  //========================= 11
          '_2d5rem_', '_2rem_', [[ '_2rem_', '_font_size_' ]]
          ]]
        },
        { _margin_      : '_0_', //================= 12
          _padding_     : [[ '_2d5rem_', '_2rem_' ]],
          _overflow_y_  : '_scroll_',
          _background_  : '_background_grad_',
          _font_family_ : '_font_sans_',
          _font_size_   : '_font_size_',
          _color_       : '_color_font_'
        }
      ],
      _050_input_list_ : [
        // ==== test 0
        [
          [ { _selector_str_ : '@font-face',
              _rule_map_ : {
                _font_family_ : [ 'fa45_mod_p6' ],
                _src_  : [
                    "url('font/fa-4.5-mod-perspica.eot?') format('embedded-opentype'),"
                  + "url('font/fa-4.5-mod-perspica.woff') format('woff'),"
                  + "url('font/fa-4.5-mod-perspica.ttf') format('truetype')"
                ]
              }
            },

            { _begin_cond_str_ :
              '@media screen and (-webkit-min-device-pixel-ratio:0 )'
            },
            { _selector_str_ : '@font-face',
              _rule_map_ : {
                _font_family_ : [ 'fa45_mod_p6' ],
                _src_  : [ "url('font/fa-4.5-mod-perspica.svg') format('svg')" ]
              }
            },
            { _end_cond_str_ : '' },
          ]
        ],

        // ==== test 1
        [
          [
            { _begin_cond_str_ : '@media all and (max-width: 550px)' },
            { _selector_str_ : '.p6-_box_.p6-_x_open_',
              _rule_map_ : { _padding_left_ : '_0_' }
            },
            { _selector_str_ : '.p6-_shell_nav_.p6-_x_open_',
              _rule_map_ : { _width_ : '_100p_' }
            },
            { _end_cond_str_ : '' }
          ],
          [
            { _begin_cond_str_ : '@media all and (max-width: 550px)' },
            { _selector_str_ : '.p6-_box_.p6-_x_open_',
              _rule_map_ : { _padding_left_ : '_1rem_' }
            },
            { _selector_str_ : '.p6-_shell_nav_.p6-_x_open_',
              _rule_map_ : { _width_ : ['50rem'] }
            },
            { _end_cond_str_ : '' }
          ]
        ],

        // ==== test 2
        [
          [
            { _begin_cond_str_ : '.foo' },
            { _begin_cond_str_ : '.bar' },
            { _begin_cond_str_ : '.bing' },
            { _selector_str_ : '.baz',
              _rule_map_ : { _margin_ : '_0_' }
            },
            { _end_cond_str_ : '' },
            { _end_cond_str_ : '' },
            { _end_cond_str_ : '' },
          ]
        ],

        // ==== test 3
        [
          [
            { _begin_cond_str_ : '.foo' },
            { _selector_str_ : '.baz',
              _rule_map_ : {
                _top_     : '_0_',
                _margin_  : '_0_',
                _padding_ : '_1rem_'
              }
            },
            { _end_cond_str_ : 'foo' }
          ],
          [
            { _begin_cond_str_ : '.foo' },
            { _selector_str_ : '.baz',
              _rule_map_ : {
                _top_     : '_1rem_',
                _padding_ : '_0_'
              }
            },
            { _end_cond_str_ : 'foo' }
          ]
        ],

        // ==== test 4
        [
          [
            { _begin_cond_str_ : '.foo' },
            { _selector_str_ : '.baz',
              _rule_map_ : {
                _top_     : '_0_',
                _margin_  : '_0_',
                _padding_ : '_1rem_'
              }
            },
            { _end_cond_str_ : 'foo' },

            { _begin_cond_str_ : '.foo' },
            { _selector_str_ : '.baz',
              _rule_map_ : {
                _top_     : '_1rem_',
                _padding_ : '_0_'
              }
            },
            { _end_cond_str_ : 'foo' }
          ]
        ]
      ],

      _050_expect_list_ : [
        "@font-face{font-family:fa45_mod_p6;src:url('font/fa-4.5-mod-perspica.eot?') format('embedded-opentype'),url('font/fa-4.5-mod-perspica.woff') format('woff'),url('font/fa-4.5-mod-perspica.ttf') format('truetype')}@media screen and (-webkit-min-device-pixel-ratio:0 ){@font-face{font-family:fa45_mod_p6;src:url('font/fa-4.5-mod-perspica.svg') format('svg')}}",

        "@media all and (max-width: 550px){.p6-_box_.p6-_x_open_{padding-left:1rem}.p6-_shell_nav_.p6-_x_open_{width:50rem}}",

        ".foo{.bar{.bing{.baz{margin:0}}}}",

        ".foo{.baz{top:1rem;margin:0;padding:0}}",

        ".foo{.baz{top:1rem;margin:0;padding:0}}",
      ]
    }
    ;

  function nextRuleMap040 () {
    var
      smap          = this,
      test_obj      = smap._test_obj_,
      rule_map_list = smap._rule_map_list_,
      selector_map  = { _selector_str_ : 'body' },
      selector_list = [ selector_map ],

      expect_str, ret_data
      ;

    selector_map._rule_map_ = rule_map_list[ smap._rule_map_idx_ ];

    expect_str = 'Change vsheet _s02_';
    try {
      ret_data = pcss._setVsheet_({
        _vsheet_id_     : '_s02_',
        _mode_str_      : '_change_',
        _selector_list_ : selector_list,
        _regen_type_    : '_prepare_'
      });
    }
    catch( error ) { ret_data = error; }

    test_obj.ok( ret_data === '_s02_', expect_str );
    smap._rule_map_idx_++;
    if ( smap._rule_map_idx_ < rule_map_list.length ) {
      setTimeout( nextRuleMap040.bind( smap ), 100 );
    }
  }

  function onPrepared040 ( event_obj ) {
    var
      smap         = this,
      test_obj     = smap._test_obj_,
      expect_list  = smap._expect_list_,

      expect_str, css_str, ret_data;

    expect_str = 'Event object should provide cascade_id';
    test_obj.ok( event_obj._data_ === '_c02_', expect_str );

    css_str    = '"body{' + expect_list[ smap._prepared_idx_ ] + '}"';
    expect_str = 'css string matches expected';
    try {
      ret_data = pcss._getAssetJson_({
        _asset_id_      : '_c02_',
        _asset_type_    : '_cascade_',
        _asset_subtype_ : '_css_str_'
      });
    }
    catch( error ) { ret_data = error; }

    test_obj.ok( ret_data === css_str, expect_str );
    smap._prepared_idx_++;
    if ( smap._prepared_idx_ === smap._rule_map_list_.length ) {
      test_obj.done();
    }
  }

  function nextCascade050 () {
    var
      smap           = this,
      test_obj       = smap._test_obj_,
      input_list     = smap._input_list_,
      cascade_list   = input_list[ smap._input_idx_ ],
      cascade_id     = 'c' + String(smap._input_idx_),
      vsheet_id_list = [],

      i, selector_list, vsheet_id,
      expect_str, ret_data
      ;

    for ( i = 0; i < cascade_list.length; i++ ) {
      selector_list = cascade_list[ i ];
      vsheet_id     = 's' + String( i ) + cascade_id;
      expect_str    = 'Vsheet id is ' + vsheet_id;

      try {
        ret_data = pcss._setVsheet_({
          _vsheet_id_     : vsheet_id,
          _mode_str_      : '_add_',
          _selector_list_ : selector_list,
          _regen_type_    : '_prepare_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === vsheet_id, expect_str );
      vsheet_id_list.push( vsheet_id );
    }

    expect_str = 'Add cascade ' + cascade_id;
    try {
      ret_data = pcss._setCascade_({
        _cascade_id_     : cascade_id,
        _mode_str_       : '_add_',
        _vsheet_id_list_ : vsheet_id_list,
        _regen_type_     : '_prepare_'
      });
    }
    catch( error ) {
      ret_data = error;
    }
    test_obj.ok( ret_data === cascade_id, expect_str );

    smap._input_idx_++;
    if ( smap._input_idx_ < input_list.length ) {
      setTimeout( nextCascade050.bind( smap ), 100 );
    }
  }

  function onPrepared050 ( event_obj ) {
    var
      smap         = this,
      test_obj     = smap._test_obj_,
      expect_list  = smap._expect_list_,
      cascade_id   = 'c' + String(smap._prepared_idx_),

      expect_str, css_str, ret_data;

    expect_str = 'Event object should provide cascade_id ' + cascade_id;
    test_obj.ok( event_obj._data_ === cascade_id, expect_str );

    css_str    = '"' + expect_list[ smap._prepared_idx_ ] + '"';

    try {
      ret_data = pcss._getAssetJson_({
        _asset_id_      : cascade_id,
        _asset_type_    : '_cascade_',
        _asset_subtype_ : '_css_str_'
      });
    }
    catch( error ) { ret_data = error; }

    expect_str = 'return data |' + ret_data 
      + '| matches expected css_str |' + css_str + '|';
    test_obj.ok( ret_data === css_str, expect_str );
    smap._prepared_idx_++;
    if ( smap._prepared_idx_ === smap._input_list_.length ) {
      test_obj.done();
    }
  }

  function onWinError ( error_data, url_str, line_idx ) {
    console.warn( error_data, url_str, line_idx );
    return false; // true - prevent default handler, false - allow
  }

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
        i, method_key, expect_str, ret_data;

      test_obj.expect( 9 );
      expect_str = 'pcss_obj and pcss should point to same object';
      test_obj.ok( pcss_obj === pcss, expect_str );

      for ( i = 0; i < method_count; i++ ) {
        method_key = method_list[ i ];
        expect_str = 'method ' + method_key
          + ' should fail prior to _initModule_';
        try { ret_data = pcss_obj[ method_key ](); }
        catch( error ) { ret_data = error; }
        test_obj.ok(
          ret_data === '_please_run_initmodule_first_',
          expect_str
        );
      }

      expect_str = '_init_module_ should return "pcss-"';
      try { ret_data = pcss_obj._initModule_(); }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === 'pcss-', expect_str );

      expect_str = 'Initial toggle should return false';
      try { ret_data = pcss_obj._togglePcss_(); }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === false, expect_str );

      test_obj.done();
    },

    test020ExtendRuleMap : function ( test_obj, win_obj, pcss_obj ) {
      var
        base_map, extend_map, check_map, expect_str, ret_data;

      test_obj.expect( 14 );

      expect_str = '_init_module_ should return "nu-"';
      try { ret_data = pcss_obj._initModule_({ _style_el_prefix_ : 'nu' }); }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === 'nu-', expect_str );

      expect_str = 'base_map should be empty';
      base_map   = {};
      extend_map = {};
      check_map  = {};
      try { ret_data = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_data = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_data === base_map, expect_str );

      expect_str = 'base_map should be empty as null keys delete';
      base_map   = {};
      extend_map = { foo : null };
      check_map  = {};
      try { ret_data = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_data = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_data === base_map, expect_str );

      expect_str = 'base_map should be empty as null keys delete';
      base_map   = { foo : 'fred' };
      extend_map = { foo : null };
      check_map  = {};
      try { ret_data = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_data = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_data === base_map, expect_str );

      expect_str = 'base_map should retain "red" key';
      base_map   = { foo : 'fred', red : '#f00' };
      extend_map = { foo : null };
      check_map  = { red : '#f00' };
      try { ret_data = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_data = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_data === base_map, expect_str );

      expect_str = 'base_map should be empty as null keys delete';
      base_map   = { foo : 'fred', red : '#f00' };
      extend_map = { foo : null,   red : null   };
      check_map  = {};
      try { ret_data = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_data = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_data === base_map, expect_str );

      expect_str = 'base_map should match complex results';
      base_map   = topCmap._020_base_map_;
      extend_map = topCmap._020_extend_map_;
      check_map  = topCmap._020_check_map_;
      try { ret_data = pcss_obj._extendRuleMap_( base_map, extend_map ); }
      catch( error ) { ret_data = error; }
      test_obj.deepEqual( base_map, check_map, expect_str );
      test_obj.ok( ret_data === base_map, expect_str );

      expect_str = '_init_module_ again should return "nu-" regardless of args';
      try { ret_data = pcss_obj._initModule_({ _style_el_prefix_ : 'foo' }); }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === 'nu-', expect_str );

      test_obj.done();
    },

    test030Vsheets : function ( test_obj, win_obj, pcss_obj ) {
      var
        s00_selector_list = [
          { _selector_str_   : 'body',
            _rule_lock_list_ : [ '_font_size_' ],
            _rule_map_ : {
              _margin_    : '_0_',
              _font_size_ : '_1d5rem_'
           }
          }
        ],
        s01_selector_list = [
          { _selector_str_   : 'body',
            _rule_map_ : {
              _margin_    : '_2rem_',
              _font_size_ : '_2rem_'
           }
          }
        ],
        expect_str, ret_data;

      test_obj.expect( 17 );

      expect_str = 'Stylesheet count should === 0';
      try { ret_data = win_obj.document.styleSheets.length; }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === 0, expect_str );

      expect_str = '_init_module_ should return "foo-"';
      try { ret_data = pcss_obj._initModule_({ _style_el_prefix_ : 'foo' }); }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === 'foo-', expect_str );

      expect_str = 'Stylesheet count should === 2';
      try { ret_data = win_obj.document.styleSheets.length; }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === 2, expect_str );

      expect_str = 'Add vsheet _s00_';
      try {
        ret_data = pcss._setVsheet_({
          _vsheet_id_     : '_s00_',
          _mode_str_      : '_add_',
          _selector_list_ : s00_selector_list
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === '_s00_', expect_str );

      expect_str = 'Vsheet _s00_ JSON is as expected';
      try {
        ret_data = pcss._getAssetJson_({
          _asset_id_      : '_s00_',
          _asset_type_    : '_vsheet_',
          _asset_subtype_ : '_selector_list_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === topCmap._030_json01_, expect_str );

      expect_str = 'Add vsheet _s01_';
      try {
        ret_data = pcss._setVsheet_({
          _vsheet_id_     : '_s01_',
          _mode_str_      : '_add_',
          _selector_list_ : s01_selector_list
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === '_s01_', expect_str );

      expect_str = 'Vsheet _s01_ JSON is as expected';
      try {
        ret_data = pcss._getAssetJson_({
          _asset_id_      : '_s01_',
          _asset_type_    : '_vsheet_',
          _asset_subtype_ : '_selector_list_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === topCmap._030_json02_, expect_str );

      expect_str = 'Add cascade _c00_';
      try {
        ret_data = pcss._setCascade_({
          _cascade_id_     : '_c00_',
          _mode_str_       : '_add_',
          _vsheet_id_list_ : [ '_s00_', '_s01_' ],
          _regen_type_     : '_none_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === '_c00_', expect_str );

      expect_str = 'cascade css_str is empty before processing';
      try {
        ret_data = pcss._getAssetJson_({
          _asset_id_      : '_c00_',
          _asset_type_    : '_cascade_',
          _asset_subtype_ : '_css_str_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === '""', expect_str );

      expect_str = 'cascade merged_selector_list is empty before processing';
      try {
        ret_data = pcss._getAssetJson_({
          _asset_id_      : '_c00_',
          _asset_type_    : '_cascade_',
          _asset_subtype_ : '_merged_selector_list_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === undefined, expect_str );

      expect_str = 'Change cascade _c00_ _regen_type_ to _merge_';
      try {
        ret_data = pcss._setCascade_({
          _cascade_id_     : '_c00_',
          _mode_str_       : '_change_',
          _regen_type_     : '_merge_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === '_c00_', expect_str );

      expect_str = 'cascade css_str is empty after merge';
      try {
        ret_data = pcss._getAssetJson_({
          _asset_id_      : '_c00_',
          _asset_type_    : '_cascade_',
          _asset_subtype_ : '_css_str_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === '""', expect_str );

      expect_str = 'cascade merged_selector_list is populated after _merge_';
      try {
        ret_data = pcss._getAssetJson_({
          _asset_id_      : '_c00_',
          _asset_type_    : '_cascade_',
          _asset_subtype_ : '_merged_selector_list_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === topCmap._030_merged_01_, expect_str );

      expect_str = 'Change cascade _c00_ _regen_type_ to _prepare_';
      try {
        ret_data = pcss._setCascade_({
          _cascade_id_     : '_c00_',
          _mode_str_       : '_change_',
          _regen_type_     : '_prepare_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === '_c00_', expect_str );

      expect_str = 'cascade css_str is populated after _prepare_';
      try {
        ret_data = pcss._getAssetJson_({
          _asset_id_      : '_c00_',
          _asset_type_    : '_cascade_',
          _asset_subtype_ : '_css_str_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === '"body{margin:2rem;font-size:1.5rem}"', expect_str );
      win_obj.document.addEventListener( '_pcss_prepared_',
        function( event_obj ){
          expect_str = 'Event object should provide cascade_id';
          test_obj.ok( event_obj._data_ === '_c00_', expect_str );

          expect_str = 'Lock on font_size removed: ';
          try {
            ret_data = pcss._getAssetJson_({
              _asset_id_      : '_c00_',
              _asset_type_    : '_cascade_',
              _asset_subtype_ : '_css_str_'
            });
          }
          catch( error ) { ret_data = error; }

          test_obj.ok(
            ret_data === '"body{margin:2rem;font-size:2rem}"',
            expect_str + ret_data
          );
          test_obj.done();
        }
      );

      // setTimeout gives the event queue time to pause which fixes
      // sporadic errors in the event handler above
      setTimeout( function () {
        expect_str = 'Remove _rule_lock_list_ from s00';
        delete s00_selector_list[0]._rule_lock_list_;
        try {
          ret_data = pcss._setVsheet_({
            _vsheet_id_     : '_s00_',
            _mode_str_      : '_change_',
            _selector_list_ : s00_selector_list
          });
        }
        catch( error ) { ret_data = error; }
        test_obj.ok( ret_data === '_s00_', expect_str );
      }, 0 );
    },

    test040Resolver : function ( test_obj, win_obj, pcss_obj ) {
      var
        input_list  = topCmap._040_rule_map_list_,
        expect_list = topCmap._040_expect_list_,

        smap, expect_str, ret_data,
        fn_next_rule_map, fn_onprepared
        ;

      test_obj.expect( 41 );

      expect_str = '_init_module_ should return "bar-"';
      try { ret_data = pcss_obj._initModule_({ _style_el_prefix_ : 'bar' }); }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === 'bar-', expect_str );

      expect_str = 'Add vsheet _s02_';
      try {
        ret_data = pcss._setVsheet_({
          _vsheet_id_     : '_s02_',
          _mode_str_      : '_add_',
          _mixin_map_     : topCmap._040_mixin_map_
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === '_s02_', expect_str );

      expect_str = 'Add cascade _c02_';
      try {
        ret_data = pcss._setCascade_({
          _cascade_id_     : '_c02_',
          _mode_str_       : '_add_',
          _vsheet_id_list_ : [ '_s02_' ],
          _regen_type_     : '_none_'
        });
      }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === '_c02_', expect_str );

      smap = {
        _rule_map_list_ : input_list,
        _expect_list_   : expect_list,
        _test_obj_      : test_obj,

        _prepared_idx_  : 0,
        _rule_map_idx_  : 0,
      };

      fn_next_rule_map = nextRuleMap040.bind(   smap );
      fn_onprepared    = onPrepared040.bind(  smap );

      win_obj.document.addEventListener( '_pcss_prepared_', fn_onprepared );
      fn_next_rule_map();
    },

    test050Cascade : function ( test_obj, win_obj, pcss_obj ) {
      var
        input_list  = topCmap._050_input_list_,
        expect_list = topCmap._050_expect_list_,

        smap, expect_str, ret_data,
        fn_next_cascade, fn_onprepared
        ;

      test_obj.expect( 22 );

      expect_str = '_init_module_ should return "bar-"';
      try { ret_data = pcss_obj._initModule_({ _style_el_prefix_ : 'bar' }); }
      catch( error ) { ret_data = error; }
      test_obj.ok( ret_data === 'bar-', expect_str );

      smap = {
        _input_list_    : input_list,
        _expect_list_   : expect_list,
        _test_obj_      : test_obj,

        _prepared_idx_  : 0,
        _input_idx_     : 0,
      };

      fn_next_cascade = nextCascade050.bind( smap );
      fn_onprepared   = onPrepared050.bind(  smap );

      win_obj.document.addEventListener( '_pcss_prepared_', fn_onprepared );
      fn_next_cascade();
    }
  });
