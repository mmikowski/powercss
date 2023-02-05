/*
 * t.js
 * Node unit test suite for PowerCSS
 *
 * Michael S. Mikowski - mike.mikowski@gmail.com
 *
*/
/*jslint              node : true,   continue : true,
 devel   : true,    indent : 2,       maxerr  : 50,
 newcap  : true,     nomen : true,   plusplus : true,
 regexp  : true,    sloppy : true,       vars : false,
  white  : true       todo : true     unparam : true,
*/
/*global global, document, window, pcss */

// == BEGIN MODULE SCOPE VARIABLES  ===================================
'use strict';
var
  __0            = 0,
  intervalMs     = 100,
  pathObj        = require( 'path' ),
  jsdomObj       = require( 'jsdom' ),
  fqTestDirname  = __dirname,
  fqProjDirname  = pathObj.dirname( fqTestDirname ),
  configMap = {
    _file_core_name_ : fqProjDirname + '/dist/pcss.js',
    _file_cfg_name_  : fqProjDirname + '/dist/pcss.cfg.js',
    _02_base_map_ : {
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
    _02_extend_map_ : {
      _display_    : '_block_',
      _width_      : null,
      _margin_     : null,
      _max_width_  : [ '64rem' ],
      _font_size_  : '_2rem_',
      _box_shadow_ : '_global_d5_box_shadow_'
    },
    _02_check_map_ : {
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
    _03_json_01_ : '[{"_selector_str_":"body","_rule_lock_list_":'
      + '["_font_size_"],"_rule_map_":{"_margin_":"_0_",'
      + '"_font_size_":"_1d5rem_"}}]',
    _03_json_02_ : '[{"_selector_str_":"body","_rule_map_":'
      + '{"_margin_":"_2rem_","_font_size_":"_2rem_"}}]',
    _03_merged_01_ : '[{"_selector_str_":"body","_rule_lock_list_"'
      + ':["_font_size_"],"_rule_map_":{"_margin_":"_2rem_",'
      + '"_font_size_":"_1d5rem_"}}]',
    _04_mixin_map_ : {
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
    _04_expect_list_ : [
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
    _04_rule_map_list_ : [
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
    _05_input_list_ : [
      // ==== test 00
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
          { _end_cond_str_ : '' }
        ]
      ],

      // ==== test 01
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

      // ==== test 02
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
          { _end_cond_str_ : '' }
        ]
      ],

      // ==== test 03
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
          { // Useless selector map
            _rule_map_ : {
              _top_     : '_0_',
              _margin_  : '_0_',
              _padding_ : '_1rem_'
            }
          },
          { _end_cond_str_ : 'purposely-mis-matched' }
        ],
        [
          { _begin_cond_str_ : '.foo' },
          { _selector_str_ : '.baz',
            _rule_map_ : {
              _top_     : '_1rem_',
              _padding_ : '_0_'
            }
          },
          { _end_cond_str_ : '.foo' }
        ]
      ],

      // ==== test 04
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
          { _end_cond_str_ : '.foo' },

          { _begin_cond_str_ : '.foo' },
          { _selector_str_ : '.baz',
            _rule_map_ : {
              _top_     : '_1rem_',
              _padding_ : '_0_',
              _size_    : '_dne_',
              _dne0_    : '_1rem_',
              _dne1_    : '_dne_'
            }
          },
          { _end_cond_str_ : '.foo' }
        ]
      ]
    ],

    _05_expect_list_ : [
      "@font-face{font-family:fa45_mod_p6;src:url('font/fa-4.5-mod-perspica.eot?') format('embedded-opentype'),url('font/fa-4.5-mod-perspica.woff') format('woff'),url('font/fa-4.5-mod-perspica.ttf') format('truetype')}@media screen and (-webkit-min-device-pixel-ratio:0 ){@font-face{font-family:fa45_mod_p6;src:url('font/fa-4.5-mod-perspica.svg') format('svg')}}",

      "@media all and (max-width: 550px){.p6-_box_.p6-_x_open_{padding-left:1rem}.p6-_shell_nav_.p6-_x_open_{width:50rem}}",

      ".foo{.bar{.bing{.baz{margin:0}}}}",

      ".foo{.baz{top:1rem;margin:0;padding:0}}",

      ".foo{.baz{top:1rem;margin:0;padding:0}}"
    ]
  },
  pcssObj
  ;
// == . END MODULE SCOPE VARIABLES  ===================================

// == BEGIN NODEUNIT TESTS ============================================
function nextRuleMap04 () {
  var
    context_map   = this,
    test_obj      = context_map._test_obj_,
    rule_map_list = context_map._rule_map_list_,
    selector_map  = { _selector_str_ : 'body' },
    selector_list = [ selector_map ],

    expect_str, ret_data
    ;

  selector_map._rule_map_ = rule_map_list[ context_map._rule_map_idx_ ];

  expect_str = 'Change vsheet _s02_';
  ret_data = pcss._setVsheet_({
    _vsheet_id_     : '_s02_',
    _mode_str_      : '_change_',
    _selector_list_ : selector_list,
    _regen_type_    : '_prepare_'
  });

  test_obj.ok( ret_data === '_s02_', expect_str );
  context_map._rule_map_idx_++;
  if ( context_map._rule_map_idx_ < rule_map_list.length ) {
    setTimeout( nextRuleMap04.bind( context_map ), intervalMs );
  }
}

function onPrepared04 ( event_obj ) {
  var
    context_map = this,
    test_obj    = context_map._test_obj_,
    expect_list = context_map._expect_list_,

    expect_str, css_str, ret_data;

  expect_str = 'Event object should provide cascade_id';
  test_obj.ok( event_obj._data_ === '_c02_', expect_str );

  css_str    = '"body{' + expect_list[ context_map._prepared_idx_ ] + '}"';
  expect_str = 'css string matches expected';
  ret_data = pcss._getAssetJson_({
    _asset_id_      : '_c02_',
    _asset_type_    : '_cascade_',
    _asset_subtype_ : '_css_str_'
  });

  test_obj.ok( ret_data === css_str, expect_str );
  context_map._prepared_idx_++;
  if ( context_map._prepared_idx_ === context_map._rule_map_list_.length ) {
    test_obj.done();
  }
}

function nextCascade05 () {
  var
    context_map    = this,
    test_obj       = context_map._test_obj_,
    input_list     = context_map._input_list_,
    cascade_list   = input_list[ context_map._input_idx_ ],
    cascade_id     = 'c' + String(context_map._input_idx_),
    vsheet_id_list = [],

    i, selector_list, vsheet_id,
    expect_str, ret_data
    ;

  for ( i = __0 ; i < cascade_list.length; i++ ) {
    selector_list = cascade_list[ i ];
    vsheet_id     = 's' + String( i ) + cascade_id;
    expect_str    = 'Vsheet id is ' + vsheet_id;

    ret_data = pcss._setVsheet_({
      _vsheet_id_     : vsheet_id,
      _mode_str_      : '_add_',
      _selector_list_ : selector_list,
      _regen_type_    : '_prepare_'
    });
    test_obj.ok( ret_data === vsheet_id, expect_str );
    vsheet_id_list.push( vsheet_id );
  }

  expect_str = 'Add cascade ' + cascade_id;
  ret_data = pcss._setCascade_({
    _cascade_id_     : cascade_id,
    _mode_str_       : '_add_',
    _vsheet_id_list_ : vsheet_id_list,
    _regen_type_     : '_use_'
  });
  test_obj.ok( ret_data === cascade_id, expect_str );

  // ret_data = pcss._setCascade_( {
  //   _cascade_id_ : cascade_id,
  //   _mode_str_ : '_change_',
  //   _regen_type_ : '_use_'
  // });
  // test_obj.ok( ret_data === cascade_id, expect_str );

  context_map._input_idx_++;
  if ( context_map._input_idx_ < input_list.length ) {
    setTimeout( nextCascade05.bind( context_map ), intervalMs );
  }
}

function onPrepared05 ( event_obj ) {
  var
    context_map  = this,
    test_obj     = context_map._test_obj_,
    expect_list  = context_map._expect_list_,
    cascade_id   = 'c' + String(context_map._prepared_idx_),

    expect_str, css_str, ret_data;

  expect_str = 'Event object should provide cascade_id ' + cascade_id;
  test_obj.ok( event_obj._data_ === cascade_id, expect_str );

  css_str    = '"' + expect_list[ context_map._prepared_idx_ ] + '"';

  ret_data = pcss._getAssetJson_({
    _asset_id_      : cascade_id,
    _asset_type_    : '_cascade_',
    _asset_subtype_ : '_css_str_'
  });

  expect_str = 'return data |' + ret_data
    + '| matches expected css_str |' + css_str + '|';
  test_obj.ok( ret_data === css_str, expect_str );
  context_map._prepared_idx_++;
  if ( context_map._prepared_idx_ === context_map._input_list_.length ) {
    test_obj.done();
  }
}

function loadFreshPcssObj () {
  var
    win_obj = new jsdomObj.JSDOM().window,
    doc_obj = win_obj.document
    ;

  pcssObj = null;
  delete require.cache[ configMap._file_core_name_ ];
  delete require.cache[ configMap._file_cfg_name_  ];

  global.window   = win_obj;
  global.document = doc_obj;

  pcssObj = require( configMap._file_core_name_ );
  global.pcss = pcssObj;
  require( configMap._file_cfg_name_ );

}

// == BEGIN test 010 testInit =========================================
function testInit ( test_obj ) {
  var
    method_list = [
      '_togglePcss_',     '_setGlobalMixinMap_',
      '_getAssetIdList_', '_getAssetJson_',
      '_setVsheet_',      '_setCascade_'
    ],
    method_count = method_list.length,

    i, method_key, expect_str, ret_data
    ;

  loadFreshPcssObj();
  test_obj.expect( 9 );

  expect_str = 'pcssObj and pcss should point to same object';
  test_obj.ok( pcssObj === pcss, expect_str );

  for ( i = __0; i < method_count; i++ ) {
    method_key = method_list[ i ];
    expect_str = 'method ' + method_key
      + ' should fail prior to _initModule_';
    try { ret_data = pcssObj[ method_key ](); }
    catch( error ) { ret_data = error; }
    test_obj.ok(
      ret_data === '_please_run_initmodule_first_',
      expect_str
    );
  }

  expect_str = '_init_module_ should return "pcss-"';
  try { ret_data = pcssObj._initModule_(); }
  catch( error ) { ret_data = error; }
  test_obj.ok( ret_data === 'pcss-', expect_str );

  expect_str = 'Initial toggle should return false';
  try { ret_data = pcssObj._togglePcss_(); }
  catch( error ) { ret_data = error; }
  test_obj.ok( ret_data === false, expect_str );

  test_obj.done();
}
// == . END test 010 testInit =========================================

// == BEGIN test 020 extendRuleMap ====================================
function extendRuleMap ( test_obj ) {
  var base_map, extend_map, check_map, expect_str, ret_data;

  loadFreshPcssObj();
  test_obj.expect( 14 );

  expect_str = '_init_module_ should return "nu-"';
  ret_data = pcssObj._initModule_({ _style_el_prefix_ : 'nu' });
  test_obj.ok( ret_data === 'nu-', expect_str );

  expect_str = 'base_map should be empty';
  base_map   = {};
  extend_map = {};
  check_map  = {};
  ret_data   = pcssObj._extendRuleMap_( base_map, extend_map );
  test_obj.deepEqual( base_map, check_map, expect_str );
  test_obj.ok( ret_data === base_map, expect_str );

  expect_str = 'base_map should be empty as null keys delete';
  base_map   = {};
  extend_map = { foo : null };
  check_map  = {};
  ret_data   = pcssObj._extendRuleMap_( base_map, extend_map );
  test_obj.deepEqual( base_map, check_map, expect_str );
  test_obj.ok( ret_data === base_map, expect_str );

  expect_str = 'base_map should be empty as null keys delete';
  base_map   = { foo : 'fred' };
  extend_map = { foo : null };
  check_map  = {};
  ret_data   = pcssObj._extendRuleMap_( base_map, extend_map );
  test_obj.deepEqual( base_map, check_map, expect_str );
  test_obj.ok( ret_data === base_map, expect_str );

  expect_str = 'base_map should retain "red" key';
  base_map   = { foo : 'fred', red : '#f00' };
  extend_map = { foo : null };
  check_map  = { red : '#f00' };
  ret_data   = pcssObj._extendRuleMap_( base_map, extend_map );
  test_obj.deepEqual( base_map, check_map, expect_str );
  test_obj.ok( ret_data === base_map, expect_str );

  expect_str = 'base_map should be empty as null keys delete';
  base_map   = { foo : 'fred', red : '#f00' };
  extend_map = { foo : null,   red : null   };
  check_map  = {};
  ret_data = pcssObj._extendRuleMap_( base_map, extend_map );
  test_obj.deepEqual( base_map, check_map, expect_str );
  test_obj.ok( ret_data === base_map, expect_str );

  expect_str = 'base_map should match complex results';
  base_map   = configMap._02_base_map_;
  extend_map = configMap._02_extend_map_;
  check_map  = configMap._02_check_map_;
  ret_data = pcssObj._extendRuleMap_( base_map, extend_map );
  test_obj.deepEqual( base_map, check_map, expect_str );
  test_obj.ok( ret_data === base_map, expect_str );

  expect_str = '_init_module_ again should return "nu-" regardless of args';
  ret_data = pcssObj._initModule_({ _style_el_prefix_ : 'foo' });
  test_obj.ok( ret_data === 'nu-', expect_str );

  test_obj.done();
}
// == . END test 020 extendRuleMap ====================================

// == BEGIN test 030 createVSheets ====================================
function createVSheets ( test_obj ) {
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

  loadFreshPcssObj();
  test_obj.expect( 17 );

  expect_str = 'Stylesheet count should === 0';
  ret_data = document.styleSheets.length;
  test_obj.ok( ret_data === __0, expect_str + ' NOT ' + ret_data );

  expect_str = '_init_module_ should return "foo-"';
  ret_data = pcssObj._initModule_({ _style_el_prefix_ : 'foo' });
  test_obj.ok( ret_data === 'foo-', expect_str );

  expect_str = 'Stylesheet count should === 2';
  ret_data = document.styleSheets.length;
  test_obj.ok( ret_data === 2, expect_str + ' NOT ' + ret_data );

  expect_str = 'Add vsheet _s00_';
  ret_data = pcss._setVsheet_({
    _vsheet_id_     : '_s00_',
    _mode_str_      : '_add_',
    _selector_list_ : s00_selector_list
  });
  test_obj.ok( ret_data === '_s00_', expect_str );

  expect_str = 'Vsheet _s00_ JSON is as expected';
  ret_data = pcss._getAssetJson_({
    _asset_id_      : '_s00_',
    _asset_type_    : '_vsheet_',
    _asset_subtype_ : '_selector_list_'
  });
  test_obj.ok( ret_data === configMap._03_json_01_, expect_str );

  expect_str = 'Add vsheet _s01_';
  ret_data = pcss._setVsheet_({
    _vsheet_id_     : '_s01_',
    _mode_str_      : '_add_',
    _selector_list_ : s01_selector_list
  });
  test_obj.ok( ret_data === '_s01_', expect_str );

  expect_str = 'Vsheet _s01_ JSON is as expected';
  ret_data = pcss._getAssetJson_({
    _asset_id_      : '_s01_',
    _asset_type_    : '_vsheet_',
    _asset_subtype_ : '_selector_list_'
  });
  test_obj.ok( ret_data === configMap._03_json_02_, expect_str );

  expect_str = 'Add cascade _c00_';
  ret_data = pcss._setCascade_({
    _cascade_id_     : '_c00_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_s00_', '_s01_' ],
    _regen_type_     : '_none_'
  });
  test_obj.ok( ret_data === '_c00_', expect_str );

  expect_str = 'cascade css_str is empty before processing';
  ret_data = pcss._getAssetJson_({
    _asset_id_      : '_c00_',
    _asset_type_    : '_cascade_',
    _asset_subtype_ : '_css_str_'
  });
  test_obj.ok( ret_data === '""', expect_str );

  expect_str = 'cascade merged_selector_list is empty before processing';
  ret_data = pcss._getAssetJson_({
    _asset_id_      : '_c00_',
    _asset_type_    : '_cascade_',
    _asset_subtype_ : '_merged_selector_list_'
  });
  test_obj.ok( ret_data === undefined, expect_str );

  expect_str = 'Change cascade _c00_ _regen_type_ to _merge_';
  ret_data = pcss._setCascade_({
    _cascade_id_     : '_c00_',
    _mode_str_       : '_change_',
    _regen_type_     : '_merge_'
  });
  test_obj.ok( ret_data === '_c00_', expect_str );

  expect_str = 'cascade css_str is empty after merge';
  ret_data = pcss._getAssetJson_({
    _asset_id_      : '_c00_',
    _asset_type_    : '_cascade_',
    _asset_subtype_ : '_css_str_'
  });
  test_obj.ok( ret_data === '""', expect_str );

  expect_str = 'cascade merged_selector_list is populated after _merge_';
  ret_data = pcss._getAssetJson_({
    _asset_id_      : '_c00_',
    _asset_type_    : '_cascade_',
    _asset_subtype_ : '_merged_selector_list_'
  });
  test_obj.ok( ret_data === configMap._03_merged_01_, expect_str );

  expect_str = 'Change cascade _c00_ _regen_type_ to _prepare_';
  ret_data = pcss._setCascade_({
    _cascade_id_     : '_c00_',
    _mode_str_       : '_change_',
    _regen_type_     : '_prepare_'
  });
  test_obj.ok( ret_data === '_c00_', expect_str );

  expect_str = 'cascade css_str is populated after _prepare_';
  ret_data = pcss._getAssetJson_({
    _asset_id_      : '_c00_',
    _asset_type_    : '_cascade_',
    _asset_subtype_ : '_css_str_'
  });
  test_obj.ok( ret_data === '"body{margin:2rem;font-size:1.5rem}"', expect_str );
  document.addEventListener( '_pcss_prepared_',
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
    delete s00_selector_list[__0]._rule_lock_list_;
    try {
      ret_data = pcss._setVsheet_({
        _vsheet_id_     : '_s00_',
        _mode_str_      : '_change_',
        _selector_list_ : s00_selector_list
      });
    }
    catch( error ) { ret_data = error; }
    test_obj.ok( ret_data === '_s00_', expect_str );
  }, intervalMs );
}
// == .END test 030 createVSheets =====================================

// == BEGIN test 040 checkResolver ====================================
function checkResolver ( test_obj ) {
  var
    input_list  = configMap._04_rule_map_list_,
    expect_list = configMap._04_expect_list_,

    context_map, expect_str, ret_data,
    fn_next_rule_map, fn_onprepared
    ;

  loadFreshPcssObj();
  test_obj.expect( 41 );

  context_map = {
    _rule_map_list_ : input_list,
    _expect_list_   : expect_list,
    _test_obj_      : test_obj,

    _prepared_idx_  : __0,
    _rule_map_idx_  : __0
  };

  fn_next_rule_map = nextRuleMap04.bind( context_map );
  fn_onprepared    = onPrepared04.bind(  context_map );
  document.addEventListener( '_pcss_prepared_', fn_onprepared );

  expect_str = '_init_module_ should return "bar-"';
  try { ret_data = pcssObj._initModule_({ _style_el_prefix_ : 'bar' }); }
  catch( error ) { ret_data = error; }
  test_obj.ok( ret_data === 'bar-', expect_str );

  expect_str = 'Add vsheet _s02_';
  try {
    ret_data = pcss._setVsheet_({
      _vsheet_id_     : '_s02_',
      _mode_str_      : '_add_',
      _mixin_map_     : configMap._04_mixin_map_
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

  fn_next_rule_map();
}
// == . END test 040 checkResolver ====================================

// == BEGIN test 050 makeCascades =====================================
function makeCascades ( test_obj ) {
  var
    input_list  = configMap._05_input_list_,
    expect_list = configMap._05_expect_list_,

    context_map, expect_str, ret_data,
    fn_next_cascade, fn_onprepared
    ;

  loadFreshPcssObj();
  test_obj.expect( 22 );

  context_map = {
    _input_list_    : input_list,
    _expect_list_   : expect_list,
    _test_obj_      : test_obj,

    _prepared_idx_  : __0,
    _input_idx_     : __0
  };

  fn_next_cascade = nextCascade05.bind( context_map );
  fn_onprepared   = onPrepared05.bind(  context_map );
  document.addEventListener( '_pcss_prepared_', fn_onprepared );

  expect_str = '_init_module_ should return "bar-"';
  try { ret_data = pcssObj._initModule_({ _style_el_prefix_ : 'bar' }); }
  catch( error ) { ret_data = error; }
  test_obj.ok( ret_data === 'bar-', expect_str );

  fn_next_cascade();
}
// == . END test 050 makeCascades =====================================

// == BEGIN test 060 getData ==========================================
function getData ( test_obj ) {
  var expect_str, ret_data, ret_map, key_list;

  test_obj.expect( 16 );

  // =======
  expect_str = 'global mixin map is empty';
  ret_data = pcssObj._getAssetJson_({
    _asset_type_    : '_global_mixin_map_'
  });
  test_obj.ok( ret_data === '{}', expect_str );

  // =======
  expect_str = 'global mixin map is set as expected';
  ret_data = pcssObj._setGlobalMixinMap_({
    _mixin_map_   : { foo : 'bar' },
    _change_type_ : '_replace_',
    _regen_type_  : '_all_'
  });
  ret_data = pcssObj._getAssetJson_({
    _asset_type_    : '_global_mixin_map_'
  });
  test_obj.ok( ret_data === '{"foo":"bar"}', expect_str );

  // =======
  expect_str = 'global mixin map is replaced as expected';
  ret_data = pcssObj._setGlobalMixinMap_({
    _mixin_map_   : { bing : 'bang' },
    _change_type_ : '_replace_',
    _regen_type_  : '_all_'
  });
  ret_data = pcssObj._getAssetJson_({
    _asset_type_ : '_global_mixin_map_'
  });
  test_obj.ok( ret_data === '{"bing":"bang"}', expect_str );

  // =======
  expect_str = 'global mixin map is merged as expected';
  ret_data = pcssObj._setGlobalMixinMap_({
    _mixin_map_   : { foo : 'bar' },
    _change_type_ : '_merge_',
    _regen_type_  : '_all_'
  });
  ret_data = pcssObj._getAssetJson_({
    _asset_type_ : '_global_mixin_map_'
  });
  ret_map = JSON.parse( ret_data );
  test_obj.deepEqual( ret_map, {bing:'bang',foo:'bar'}, expect_str );

  // =======
  // This is the list of cascade ids in-use in the two stylesheets.
  // It is normal to have the same id.
  expect_str = 'Element cascade list is ["c4","c4"]';
  ret_data = pcssObj._getAssetJson_({
    _asset_type_    : '_el_cascade_list_'
  });
  test_obj.ok( ret_data === '["c4","c4"]', expect_str );

  // =======
  expect_str = 'Element cascade list is ["c2","c4"]';
  ret_data = pcss._setCascade_({
    _cascade_id_     : 'c2',
    _mode_str_       : '_change_',
    _regen_type_     : '_use_'
  });

  ret_data = pcssObj._getAssetJson_({
    _asset_type_    : '_el_cascade_list_'
  });
  test_obj.ok( ret_data === '["c2","c4"]', expect_str );

  // =======
  expect_str = 'List of cascade ids';
  ret_data = pcssObj._getAssetIdList_({
    _asset_type_ : '_cascade_'
  });
  test_obj.deepEqual( ret_data, [ 'c0', 'c1', 'c2', 'c3', 'c4' ], expect_str );

  // =======
  expect_str = 'Try to add an existing cascade id';
  ret_data = pcssObj._setCascade_({
    _cascade_id_  : 'c2',
    _mode_str_    : '_add_',
    _vsheet_list_ : []
  });
  test_obj.ok( ret_data === undefined, expect_str );

// // =======
// expect_str = 'Try to add non-existing vsheet ids'
// ret_data = pcssObj._setCascade_({
//   _cascade_id_  : 'c2',
//   _mode_str_    : '_change_',
//   _vsheet_list_ : [ 'a', 'b', 'c' ]
// });
// console.warn( '>>>', ret_data );
// test_obj.ok( ret_data === undefined, expect_str );

  // =======
  // Delete active cascade?
  ret_data = pcss._setCascade_({
    _cascade_id_     : 'c2',
    _mode_str_       : '_delete_'
  });
  expect_str = 'Element cascade list is [null,"c4"]';
  ret_data = pcssObj._getAssetJson_({
    _asset_type_    : '_el_cascade_list_'
  });
  test_obj.ok( ret_data === '[null,"c4"]', expect_str );

  // =======
  expect_str = 'List of cascade ids with c2 deleted';
  ret_data = pcssObj._getAssetIdList_({
    _asset_type_ : '_cascade_'
  });
  test_obj.deepEqual( ret_data, [ 'c0', 'c1', 'c3', 'c4' ], expect_str );

  // =======
  // Mode not supported
  ret_data = pcss._setCascade_({
    _cascade_id_     : 'c0',
    _mode_str_       : '_foo_bar_'
  });
  expect_str = 'Mode not supported, returns undefined';
  test_obj.ok( ret_data === undefined, expect_str );

  // =======
  // No longer existant ID
  ret_data = pcss._setCascade_({
    _cascade_id_     : 'c2',
    _mode_str_       : '_change_',
    _regen_type_     : '_use_'
  });
  expect_str = 'Cascade removed, returns undefined';
  test_obj.ok( ret_data === undefined, expect_str );

  // =======
  expect_str = 'List of vsheet ids';
  ret_data = pcssObj._getAssetIdList_({
    _asset_type_ : '_vsheet_'
  });
  test_obj.deepEqual( ret_data, [
    's0c0', 's0c1', 's1c1', 's0c2', 's0c3', 's1c3', 's0c4'
    ], expect_str
  );

  // =======
  expect_str = 'Unsupported asset time';
  ret_data = pcssObj._getAssetIdList_({
    _asset_type_ : '_unsupported_'
  });
  test_obj.deepEqual( ret_data, [], expect_str );

  // =======
  expect_str = 'Set body font size';
  ret_data = pcssObj._setStyleAttr_({
    _selector_str_   : 'body',
    _attr_key_       : 'font-size',
    _attr_val_       : '16px'
  });

  // =======
  expect_str = 'cssKeyMap is not empty';
  ret_data = pcssObj._getCssKeyMap_();
  key_list = Object.keys( ret_data );
  test_obj.ok( key_list.length > 0, expect_str );

  // =======
  expect_str = 'cssValMap is not empty';
  ret_data = pcssObj._getCssValMap_();
  key_list = Object.keys( ret_data );
  test_obj.ok( key_list.length > 0, expect_str );

  test_obj.done();
}
// == . END test 060 getData ==========================================

module.exports = {
  testInit      : testInit,
  extendRuleMap : extendRuleMap,
  createVSheets : createVSheets,
  checkResolver : checkResolver,
  makeCascades  : makeCascades,
  getData       : getData
};

