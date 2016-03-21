/** resolve.js
 * Resolver development for PowerCSS
 * Michael S. Mikowski - mike.mikowski@gmail.com
*/
/*jslint        browser : true, continue : true,
  devel : true,  indent : 2,      maxerr : 1,
  newcap : true,  nomen : true, plusplus : true,
  regexp : true, sloppy : true,     vars : false,
  white : true,    todo : true,  unparam : true
*/
/*global */

( function () {
  var
    __0 = 0,
    __1 = 1,
    __blank = '',
    __console = console,
    __undef   = global.undefined,
    __getKeyList = Object.keys,
    expectList  = [
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
    ruleMapList = [
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

    cssKeyMap = {
      _margin_      : 'margin',
      _padding_     : 'padding',
      _background_  : 'background',
      _overflow_y_  : 'overflow-y',
      _font_family_ : 'font-family',
      _font_size_   : 'font-size',
      _color_       : 'color'
    },
    cssValMap = {
      _0_              : '0',
      _2d5rem_         : '2.5rem',
      _2rem_           : '2rem',
      _font_size_      : '16px',
      _color_font_     : '#888',
      _font_sans_      : 'sans',
      _scroll_         : 'scroll'
    },
    mixinMap = {
      _xfff_           : '#fff',
      _background_grad_ : {
        _alt_list_ : [
          [ '#f85032' ],
          '_xfff_',
          [[ '_2d5rem_', '_2rem_' ]],
          [[ '_2d5rem_', '_2rem_', [ 'holy-cow' ], '_font_size_' ]]
        ]
      }
    },
    vMap = {
      _apply_      : 'apply',
      _array_      : 'array',
      _hasOwnProp_ : 'hasOwnProperty',
      _join_       : 'join',
      _length_     : 'length',
      _object_     : 'object',
      _pop_        : 'pop',
      _push_       : 'push',
      _string_     : 'string'
    }
    ;

  function getVarType ( arg ) {
    return Array.isArray( arg ) ? vMap._array_ : ( typeof arg );
  }
  function getValList( map, key_list ) {
    var
      val_list  = [],
      key_count = key_list[ vMap._length_ ],
      i, key, val_data;

    for ( i = __0; i < key_count; i++ ) {
      key      = key_list[ i ];
      val_data = map[ key ];

      val_list[i] = val_data;
    }
    return val_list;
  }
  
  function logIt () {
    __console.log[ vMap._apply_ ]( __console, arguments );
  }
  // end 2.3

  function makeRuleMapStr ( rule_map, merged_mixin_map ) {
    var
      frame_stack = [],
      k = __0,

      key_list,  val_list, rule_key,
      frame_obj, orig_obj, prior_frame_obj,

      val_data, val_data_type,
      tmp_data, tmp_data_type,
      solve_data,

      alt_list, alt_type,
      first_data, first_type
      ;


    key_list = __getKeyList( rule_map );
    val_list = getValList( rule_map, key_list );
    rule_key = key_list[ __0 ];

    frame_obj = {
      _type_       : '_base_',
      _key_list_   : key_list,
      _rule_key_   : rule_key,
      _solve_key_  : cssKeyMap[ rule_key ],
      _val_idx_    : __0,
      _val_list_   : val_list,
      _val_count_  : key_list[ vMap._length_],
      _solve_list_ : [],
      _solve_str_  : __blank
    };
    orig_obj = frame_obj;

    _RESOLVE_: while ( k < 100000 ) { // avoid endless loop
      k++;
      if ( frame_obj._val_idx_ >= frame_obj._val_count_ ) {
        prior_frame_obj = frame_obj;
        if ( prior_frame_obj._type_ === '_concat_' ) {
          prior_frame_obj._solve_str_
            += prior_frame_obj._solve_list_[ vMap._join_ ](' ');
        }
        else {
          prior_frame_obj._solve_str_
            += frame_obj._solve_list_[ vMap._join_ ](';');
        }

        frame_obj = frame_stack[ vMap._pop_ ]();
        if ( ! frame_obj ) { break _RESOLVE_; }

        if ( prior_frame_obj._type_ === '_alt_list_'
          || frame_obj._solve_key_  === __undef
        ) {
          frame_obj._solve_list_[ vMap._push_ ]( prior_frame_obj._solve_str_ );
        }
        else {
          frame_obj._solve_list_[ vMap._push_ ](
            frame_obj._solve_key_ + ':' + prior_frame_obj._solve_str_
          );
        }
        frame_obj._val_idx_++;
        continue _RESOLVE_;
      }

      if ( frame_obj._type_ === '_base_' ) {
        rule_key  = frame_obj._key_list_[ frame_obj._val_idx_ ];
        frame_obj._rule_key_  = rule_key;
        frame_obj._solve_key_ = cssKeyMap[ rule_key ];
      }

      val_data      = frame_obj._val_list_[ frame_obj._val_idx_ ];
      val_data_type = getVarType( val_data );

      // support for complex data expansion
      if ( val_data_type === vMap._string_ ) {
        if ( merged_mixin_map[ vMap._hasOwnProp_ ]( val_data ) ) {
          tmp_data = merged_mixin_map[ val_data ];
        }
        else if ( cssValMap[ vMap._hasOwnProp_ ]( val_data ) ) {
          tmp_data = cssValMap[ val_data ];
        }
        if ( tmp_data !== __undef ) {
          tmp_data_type = getVarType( tmp_data );
          if ( tmp_data_type !== vMap._string_ ) {
            val_data      = tmp_data;
            val_data_type = tmp_data_type;
          }
        }
      }

      solve_data = __undef;
      _TYPE_: switch ( val_data_type ) {
        // Resolve alternate lists
        case vMap._object_ :
          alt_list = val_data._alt_list_;
          alt_type = getVarType( alt_list );

          if ( alt_type === vMap._array_ ) {
            frame_stack[ vMap._push_ ]( frame_obj );

            frame_obj = {
              _type_       : '_alt_list_',
              _solve_key_  : frame_obj._solve_key_,
              _val_idx_    : __0,
              _val_list_   : alt_list,
              _val_count_  : alt_list[ vMap._length_ ],
              _solve_list_ : [],
              _solve_str_  : __blank
            };
            continue _RESOLVE_;
          }
          logIt( '_unsupported_object_', val_data );
          break _TYPE_;

        // Resolve concat-lists and literals
        case vMap._array_ :
          if ( val_data[ vMap._length_ ] === __1 ) {
            first_data = val_data[ __0 ];
            first_type = getVarType( first_data );

            // Resolve concat-list
            if ( first_type === vMap._array_ ) {
              frame_stack[ vMap._push_ ]( frame_obj );
              frame_obj = {
                _type_       : '_concat_',
                _val_idx_    : __0,
                _val_list_   : first_data,
                _val_count_  : first_data[ vMap._length_ ],
                _solve_list_ : [],
                _solve_str_  : __blank
              };
              continue _RESOLVE_;
            }
            // Resolve literal
            solve_data = first_data;
          }
          else {
            logIt( '_unsupported_array_', val_data );
          }
          break _TYPE_;

        // Resolve value symbol subsitution
        default :
          if ( merged_mixin_map[ vMap._hasOwnProp_ ]( val_data ) ) {
            solve_data = merged_mixin_map[ val_data ];
          }
          else if ( cssValMap[ vMap._hasOwnProp_ ]( val_data ) ) {
            solve_data = cssValMap[ val_data ];
          }
          else {
            logIt( '_value_symbol_not_found_', val_data );
          }
          break _TYPE_;
      }

      if ( solve_data ) {
        if ( frame_obj._type_ === '_concat_'
          || frame_obj._solve_key_ === __undef
        ) {
          frame_obj._solve_list_[ vMap._push_ ]( solve_data );
        }
        else {
          frame_obj._solve_list_[ vMap._push_ ](
            frame_obj._solve_key_ + ':' + solve_data
          );
        }
      }
      frame_obj._val_idx_++;
    }
    return orig_obj._solve_str_;
  }

  function main () {
    var
      test_count = ruleMapList[ vMap._length_ ],
      i, resolve_str, expect_str;

    for ( i = 0; i < test_count; i++ ) {
      resolve_str = makeRuleMapStr( ruleMapList[ i ], mixinMap );
      expect_str  = expectList[ i ];
      if ( resolve_str === expect_str ) {
        logIt( 'test', i, 'pass' );
      }
      else {
        logIt( 'test', i, 'FAIL' );
        logIt( resolve_str );
        logIt( expect_str );
      }
    }
  }

  main();
}());
