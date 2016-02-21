/** PowerCSS - pcss.js
 * Run-time generated and managed CSS
 * Michael S. Mikowski - mike.mikowski@gmail.com
 * See README.md for further documentation.
*/
/*jslint        browser : true, continue : true,
  devel : true,  indent : 2,      maxerr : 50,
  newcap : true,  nomen : true, plusplus : true,
  regexp : true, sloppy : true,     vars : false,
  white : true,    todo : true,  unparam : true
*/
/*global pcss:true */

var pcss = (function () {
  // 1. MODULE SCOPE VARIABLES ============================
  var
    __String = String,
    __ObjKeys = Object.keys,

    __j2str = JSON.stringify,
    __str2j = JSON.parse,
    __blank = '',
    __docRef = document,
    __false = false,
    __isArray = Array.isArray,
    __true = true,
    __timeStamp = Date.now,

    __0 = 0,
    __1 = 1,
    __2 = 2,
    __n1 = -1,
    __undef = window.undefined,

    vMap = {
      _appendChild_    : 'appendChild',
      _apply_          : 'apply',
      _array_          : 'array',
      _bind_           : 'bind',
      _childNodes_     : 'childNodes',
      _createElement_  : 'createElement',
      _createTextNode_ : 'createTextNode',
      _cssText_        : 'cssText',
      _disabled_       : 'disabled',
      _getElById_      : 'getElementById',
      _hasOwnProp_     : 'hasOwnProperty',
      _head_           : 'head',
      _id_             : 'id',
      _indexOf_        : 'indexOf',
      _innerHTML_      : 'innerHTML',
      _innerText_      : 'innerText',
      _join_           : 'join',
      _length_         : 'length',
      _nodeValue_      : 'nodeValue',
      _object_         : 'object',
      _push_           : 'push',
      _setAttribute_   : 'setAttribute',
      _sheet_          : 'sheet',
      _shift_          : 'shift',
      _slice_          : 'slice',
      _splice_         : 'splice',
      _string_         : 'string',
      _styleSheets_    : 'styleSheets',
      _textContent_    : 'textContent',
      _text_           : 'text',
      _text_css_       : 'text/css',
      _type_           : 'type'
    },

    // CSS rule keys
    cssKeyMap = {
      __moz_box_sizing_            : '-moz-box-sizing',
      __webkit_font_smoothing_     : '-webkit-font-smoothing',
      __webkit_overflow_scrolling_ : '-webkit-overflow-scrolling',
      __webkit_user_select_        : '-webkit-user-select',
      __moz_user_select_           : '-moz-user-select',
      __o_user_select_             : '-o-user-select',

      _animation_              : 'animation',
      _background_             : 'background',
      _background_color_       : 'background-color',
      _background_image_       : 'background-image',
      _background_position_    : 'background-position',
      _background_repeat_      : 'background-repeat',
      _background_size_        : 'background-size',
      _baseline_               : 'baseline',
      _body_                   : 'body',
      _border_                 : 'border',
      _border_btm_             : 'border-bottom',
      _border_btm_color_       : 'border-bottom-color',
      _border_btm_width_       : 'border-bottom-width',
      _border_collapse_        : 'border-collapse',
      _border_color_           : 'border-color',
      _border_left_            : 'border-left',
      _border_left_color_      : 'border-left-color',
      _border_left_width_      : 'border-left-width',
      _border_radius_          : 'border-radius',
      _border_right_           : 'border-right',
      _border_right_color_     : 'border-right-color',
      _border_right_width_     : 'border-right-width',
      _border_spacing_         : 'border-spacing',
      _border_style_           : 'border-style',
      _border_top_             : 'border-top',
      _border_top_color_       : 'border-top-color',
      _border_top_left_radius_ : 'border-top-left-radius',
      _border_top_width_       : 'border-top-width',
      _border_width_           : 'border-width',
      _bottom_                 : 'bottom',
      _box_shadow_             : 'box-shadow',
      _box_sizing_             : 'box-sizing',
      _clear_                  : 'clear',
      _clip_                   : 'clip',
      _color_                  : 'color',
      _cursor_                 : 'cursor',
      _display_                : 'display',
      _empty_cells_            : 'empty_cells',
      _fill_                   : 'fill',
      _float_                  : 'float',
      _font_family_            : 'font-family',
      _font_size_              : 'font-size',
      _font_style_             : 'font-style',
      _font_weight_            : 'font-weight',
      _height_                 : 'height',
      _left_                   : 'left',
      _line_height_            : 'line-height',
      _list_style_position_    : 'list-style-position',
      _list_style_type_        : 'list-style-type',
      _margin_                 : 'margin',
      _margin_btm_             : 'margin-bottom',
      _margin_left_            : 'margin-left',
      _margin_right_           : 'margin-right',
      _margin_top_             : 'margin-top',
      _max_height_             : 'max-height',
      _max_width_              : 'max-width',
      _min_height_             : 'min-height',
      _min_width_              : 'min-width',
      _opacity_                : 'opacity',
      _outline_                : 'outline',
      _overflow_               : 'overflow',
      _overflow_x_             : 'overflow-x',
      _overflow_y_             : 'overflow-y',
      _padding_                : 'padding',
      _padding_btm_            : 'padding-bottom',
      _padding_left_           : 'padding-left',
      _padding_right_          : 'padding-right',
      _padding_top_            : 'padding-top',
      _position_               : 'position',
      _resize_                 : 'resize',
      _right_                  : 'right',
      _src_                    : 'src',
      _stroke_                 : 'stroke',
      _stroke_opacity_         : 'stroke-opacity',
      _stroke_width_           : 'stroke-width',
      _text_align_             : 'text-align',
      _text_decoration_        : 'text-decoration',
      _text_indent_            : 'text-indent',
      _text_overflow_          : 'text-overflow',
      _top_                    : 'top',
      _transition_             : 'transition',
      _user_select_            : 'user_select',
      _vertical_align_         : 'vertical-align',
      _visibility_             : 'visibility',
      _white_space_            : 'white-space',
      _width_                  : 'width',
      _z_index_                : 'z-index'
    },

    // Common CSS values
    cssValMap = {
      _0_             : '0',
      _1_             : '1',
      _0p_            : '0%',
      _12d5p_         : '12.5%',
      _25p_           : '25%',
      _36d5p_         : '37.5%',
      _50p_           : '50%',
      _62d5p_         : '62.5%',
      _75p_           : '75%',
      _87d5p_         : '87.5%',
      _100p_          : '100%',
      _d125rem_       : '.125rem',
      _d25rem_        : '.25rem',
      _d375rem_       : '.375rem',
      _d5rem_         : '.5rem',
      _d625rem_       : '.625rem',
      _d75rem_        : '.75rem',
      _d875rem_       : '.5rem',
      _1rem_          : '1rem',
      _1d5rem_        : '1.5rem',
      _1d75rem_       : '1.75rem',
      _2rem_          : '2rem',
      _3rem_          : '3rem',
      _200_           : '200',
      _400_           : '400',
      _800_           : '800',
      _x444_          : '#444',
      _x888_          : '#888',
      _xaaa_          : '#aaa',
      _xbbb_          : '#bbb',
      _xccc_          : '#ccc',
      _xddd_          : '#ddd',
      _xeee_          : '#eee',
      _xfff_          : '#fff',
      _absolute_      : 'absolute',
      _antialiased_   : 'antialiased',
      _auto_          : 'auto',
      _block_         : 'block',
      _border_box_    : 'border-box',
      _both_          : 'both',
      _center_        : 'center',
      _center_center_ : 'center center',
      _clip_          : 'clip',
      _collapse_      : 'collapse',
      _contain_       : 'contain',
      _content_box_   : 'content-box',
      _cover_         : 'cover',
      _default_       : 'default',
      _disc_          : 'disc',
      _ellipsis_      : 'ellipsis',
      _fixed_         : 'fixed',
      _font_fixed_    : 'courier, fixed',
      _font_sans_     : 'arial, helvetica, sans-serif',
      _hidden_        : 'hidden',
      _inherit_       : 'inherit',
      _inline_block_  : 'inline-block',
      _italic_        : 'italic',
      _left_          : 'left',
      _line_through_  : 'line-through',
      _middle_        : 'middle',
      _move_          : 'move',
      _no_repeat_     : 'no-repeat',
      _none_          : 'none',
      _normal_        : 'normal',
      _nowrap_        : 'nowrap',
      _outside_       : 'outside',
      _pointer_       : 'pointer',
      _relative_      : 'relative',
      _right_         : 'right',
      _scroll_        : 'scroll',
      _show_          : 'show',
      _solid_         : 'solid',
      _text_          : 'text',
      _top_           : 'top',
      _touch_         : 'touch',
      _transparent_   : 'transparent',
      _underline_     : 'underline',
      _uppercase_     : 'uppercase',
      _vertical_      : 'vertical'
    },

    topCmap = {
      _regen_type_list_ : [
        '_none_', '_merge_', '_prepare_', '_all_', '_use_'
      ]
    },

    //  _vsheet_map_map_
    //    +- `vsheet_id1`
    //       |- _vsheet_id_     : `vsheet_id1`
    //       |- _selector_list_ : `selector_list`
    //       |- _selector_ms_   : `timestamp`
    //       |- _mixin_map_     : `mixin_map`
    //       +- _mixin_ms_      : `timestamp`
    //
    // _cascade_map_
    //   |- `cascade_id1`
    //      |- _cascade_id_           : `cascade_id1`
    //      |- _vsheet_id_list_       : `vsheet_id_list`
    //      |- _vsheet_ms_            : `timestamp`
    //      |- _mixin_map_            : {...}
    //      |- _mixin_ms_             : `timestamp`
    //      |- _merged_selector_list_ : `merged_selector_list`
    //      |- _merged_mixin_map_     : `merged_mixin_map`
    //      |- _merged_selector_ms_   : `timestamp`
    //      |- _css_str_              : `cascade_css`
    //      +- _css_ms_               : `timestamp`
    topSmap = {
      _style_cascade_list_ : [],

      _global_mixin_map_   : {},
      _global_mixin_ms_    : __0,

      _vsheet_map_map_     : {},
      _cascade_map_map_    : {},
      _style_el_list_      : __undef,
      _style_el_prefix_    : __undef,
      _style_el_idx_       : __n1
    }
    ;
  // end 1. MODULE SCOPE VARIABLES ========================

  // 2. PRIVATE METHODS ===================================
  // 2.x Private method /cloneData/
  function cloneData ( data ) {
    if ( ! data ) { return data; }
    return __str2j( __j2str( data ) );
  }
  // end 2.x Private method /cloneData/

  // 2.x Private method /getVarType/
  function getVarType ( arg ) {
    return typeof arg;
  }
  // end 2.x

  // 2.x Private method /logIt/
  function logIt () {
    console.log[ vMap._apply_ ]( console, arguments );
  }
  // end 2.x

  // 2.x private method /writeToStyleEl/
  // TODO: Profile on major browsers
  // This function updates the css_str in the style element
  // ONLY if it appears changed.  This SHOULD be much faster
  // than blindly writing the css_str. However, browsers may already
  // do this check, so it may be redundant. Profile to determine answer.
  //
  function writeToStyleEl ( style_el, css_str ) {
    var text_el, childnode_list;
    // Old Firefox and IE(?)
    if ( style_el[ vMap._hasOwnProp_ ]( vMap._cssText_ ) ) {
      if ( style_el[ vMap._cssText_ ] !== css_str ) {
        style_el[ vMap._cssText_ ] = css_str;
      }
    }
    // New Firefox
    else if ( style_el[ vMap._hasOwnProp_ ]( vMap._textContent_ ) ) {
      if ( style_el[ vMap._textContent_ ] !== css_str ) {
        style_el[ vMap._textContent_ ] = css_str;
      }
    }
    // Webkit
    else {
      childnode_list = style_el[ vMap._childNodes_ ];
      if ( childnode_list && childnode_list[ vMap._length_ ] > __0 ) {
        text_el = childnode_list[ __0 ];
        if ( text_el[ vMap._nodeValue_ ] !== css_str ) {
          text_el[ vMap._nodeValue_ ] = css_str;
        }
      }
      else {
        text_el = __docRef[ vMap._createTextNode_ ]( css_str );
        style_el[ vMap._appendChild_ ]( text_el );
      }
    }
  }
  // end 2.x private method /writeToStyleEl/

  // 2.x Private method /initStyleEls/
  function initStyleEls () {
    var
      head_el         = __docRef[ vMap._head_ ],
      style_el_prefix = topSmap._style_el_prefix_,
      style_el_list   = [],

      i, style_el_id, style_el
      ;

    for ( i = __0; i < __2; i++ ) {
      style_el_id = style_el_prefix +  __String( i );
      if ( !! __docRef[ vMap._getElById_ ]( style_el_id ) ) {
        throw '_sheet_id_is_already_in_use_ ' + style_el_id;
      }
      // Create element and set properties
      style_el = __docRef[ vMap._createElement_ ]( 'style' );
      style_el[ vMap._setAttribute_ ]( vMap._type_, vMap._text_css_ );
      style_el[ vMap._setAttribute_ ]( vMap._id_, style_el_id );

      // Add to head
      head_el[ vMap._appendChild_ ]( style_el );
      style_el[ vMap._sheet_ ][ vMap._disabled_ ] = __true;
      style_el_list[ vMap._push_ ]( style_el );
    }
    topSmap._style_el_list_ = style_el_list;
  }
  // end 2.x Private method /initStyleEls/

  // 2.x Private method /extendMixinMap/
  function extendMixinMap ( base_map, arg_extend_map ) {
    var
      extend_map, key_list, key_count,
      i, key, val_data
      ;

    if ( getVarType( arg_extend_map ) !== 'object' ){ return; }
    extend_map = cloneData( arg_extend_map );
    key_list   = __ObjKeys( extend_map );
    key_count  = key_list[ vMap._length_ ];

    for ( i = __0; i < key_count; i++ ) {
      key      = key_list[ i ];
      val_data = extend_map[ key ];
      base_map[ key ] = val_data;
    }
  }
  // end 2.x Private method /extendMixinMap/

  // 2.x private method /checkVsheetIds/
  function checkVsheetIds( vsheet_id_list ) {
    var
      vsheet_map_map  = topSmap._vsheet_map_map_,
      vsheet_id_count = vsheet_id_list[ vMap._length_ ],
      unknown_id_list = [],

      i, vsheet_id
      ;

    for ( i = __0; i < vsheet_id_count; i++ ) {
      vsheet_id = vsheet_id_list[ i ];
      if ( vsheet_map_map[ vMap._hasOwnProp_ ]( vsheet_id ) ) {
        continue;
      }
      unknown_id_list[ vMap._push_ ]( vsheet_id );
    }
    return unknown_id_list;
  }
  // end 2.x

  // 2.x private method /mergeCascade/
  function mergeCascade ( arg_vsheet_id_list, arg_mixin_map ) {
    var
      vsheet_map_map = topSmap._vsheet_map_map_,

      vsheet_count         = arg_vsheet_id_list[ vMap._length_ ],
      seen_selector_map    = {},
      merged_selector_list = [],

      merged_mixin_map,
      global_mixin_map,

      i, vsheet_id,        vsheet_map,
      selector_list,
      vsheet_mixin_map,    selector_count,
      j, selector_map,     selector_str,
      rule_lock_list,      rule_map,
      clone_selector_map,  merged_rpt_map,
      merged_selector_map, merged_rule_map,
      merged_lock_list,    rule_key_list,
      rule_key_count,
      l, rule_key
      ;

    // TODO: cache this stuff per cascade
    global_mixin_map  = topSmap._global_mixin_map_ || {};
    merged_mixin_map  = cloneData( global_mixin_map );
    extendMixinMap( merged_mixin_map, arg_mixin_map );

    // Begin consider each vsheet in the cascade list
    _VSHEET_: for ( i = __0; i < vsheet_count; i++ ) {
      vsheet_id        = arg_vsheet_id_list[ i ];
      vsheet_map       = vsheet_map_map[ vsheet_id ];
      if ( ! vsheet_map ) { 
        logIt( '_cannot_find_vsheet_map_for_id_', vsheet_map );
        continue _VSHEET_;
      }
      selector_list    = vsheet_map._selector_list_ || [];
      selector_count   = selector_list[ vMap._length_ ];
      vsheet_mixin_map = vsheet_map._mixin_map_;
      extendMixinMap( merged_mixin_map, vsheet_mixin_map );

      // Begin consider each selector_map in the selector_list
      for ( j = __0; j < selector_count; j++ ) {
        selector_map     = selector_list[ j ];
        selector_str     = selector_map._selector_str_;
        rule_lock_list   = selector_map._rule_lock_list_;
        rule_map         = selector_map._rule_map_;

        merged_rpt_map = seen_selector_map[ selector_str ];
        if ( merged_rpt_map ) {
          merged_selector_map = merged_rpt_map._selector_map_;
          merged_rule_map   = merged_selector_map._rule_map_;

          // Begin merge in latest locks
          if ( rule_lock_list ) {
            merged_lock_list = merged_rpt_map._rule_lock_list_;
            merged_lock_list[ vMap._push_ ][ vMap._apply_
              ]( merged_lock_list, rule_lock_list );
            merged_rpt_map[ 'lock_on_' + __String( i ) ]
              = __j2str( rule_lock_list );
          }
          // End merge in latest locks

          // Begin merge rules unless they are locked
          //  unless that key is locked
          rule_key_list  = __ObjKeys( rule_map );
          rule_key_count = rule_key_list[ vMap._length_ ];
          _RULE_: for ( l = __0; l < rule_key_count; l++ ) {
            rule_key = rule_key_list[ l ];
            if ( rule_lock_list
              && rule_lock_list[ vMap._indexOf_ ]( rule_key ) > __n1
            ) {
              logIt(
                '_rule_key_locked_for_selector_', selector_str, rule_key
              );
              continue _RULE_;
            }
            merged_rule_map[ rule_key ] = rule_map[ rule_key ];
          }
          // End merge rules unless they are locked
        }
        else {
          // Begin clone data and place the **same map**
          // both into the merged_selector_list and the merged_rpt_map
          // as we want fast O(1) access to it.
          //
          clone_selector_map = cloneData( selector_map );
          merged_selector_list[ vMap._push_]( clone_selector_map );
          merged_rpt_map = { _selector_map_ : clone_selector_map };
          // End clone data and place the **same map**

          // Begin init lock list
          if ( rule_lock_list ) {
            merged_rpt_map._rule_lock_list_ = cloneData( rule_lock_list );
            merged_rpt_map[ 'lock_on_' + __String( i ) ]
              = __j2str( rule_lock_list );
          }
          else {
            merged_rpt_map._rule_lock_list_ = [];
          }
          // End init lock list
          seen_selector_map[ selector_str ] = merged_rpt_map;
        }
      }
      // End consider each selector_map in the selector_list
    }
    // End consider each vsheet in the cascade list
    return {
      _merged_selector_list_ : merged_selector_list,
      _merged_mixin_map_     : merged_mixin_map
    };
  }
  // end 2.x private method /mergeCascade/

  // 2.x private method /makeCssStr/
  function makeCssStr ( merged_selector_list, merged_mixin_map ) {
    var
      i, j, k,        selector_count,
      selector_map,   selector_str,
      rule_map,       close_str,
      rule_key_list,  rule_key_count,
      rule_key,       rule_data,

      outer_data, outer_data_type,
      inner_data_list, inner_data_count,

      solve_selector_list, solve_data_type,
      solve_rule_list,     solve_key,
      solve_val_str,       solve_selector_str
      ;

    selector_count = merged_selector_list[ vMap._length_ ];
    solve_selector_list = [];

    for ( i = __0; i < selector_count; i++ ) {
      selector_map = merged_selector_list[ i ];
      selector_str = selector_map._selector_str_;
      rule_map = selector_map._rule_map_;
      close_str = selector_map._close_str_ || __blank;

      if ( ! rule_map ) {
        solve_selector_list[ vMap._push_ ]( selector_str + close_str );
        continue;
      }

      rule_key_list = __ObjKeys( rule_map );
      rule_key_count = rule_key_list[ vMap._length_ ];

      // Calc solve_key
      solve_rule_list = [];
      for ( j = __0; j < rule_key_count; j++ ) {
        rule_key = rule_key_list[ j ];

        if ( cssKeyMap[ vMap._hasOwnProp_ ]( rule_key ) ) {
          solve_key = cssKeyMap[ rule_key ];
        }
        else {
          logIt( rule_key, '_css_rule_key_not_found_' );
          continue;
        }

        // val:   'string'   => lookup key
        // val: [ 'string' ] => literal
        // val: { _alt_list_ : [ 'string, [ 'string' ] ] }
        //   => CSS alternates list.  The first value is a lookup,
        //      the second is a literal.
        // TODO:
        // val: [[ 'string', [ 'string' ], 'string' ]]
        //   => CSS Concatenated value, space delimited.  Example:
        //   _border_ : [[ '_0d25rem_', '_solid_', [ '#8f93c0' ] ]]
        //   => border : .25rem solid #8f93c0;
        //
        // first some tap-dancing to handle mixin complex values
        outer_data = rule_map[ rule_key ];
        if ( vMap._string_ === getVarType( outer_data )
          && merged_mixin_map[ vMap._hasOwnProp_ ]( outer_data )
          && vMap._string_ !== getVarType( merged_mixin_map[ outer_data ] )
        ) {
          outer_data = merged_mixin_map[ outer_data ];
        }

        outer_data_type = __isArray( outer_data )
          ? vMap._array_ : getVarType( outer_data );
        inner_data_list = outer_data_type === vMap._object_
          ? outer_data._alt_list_ || [] : [ outer_data ];
        inner_data_count = inner_data_list[ vMap._length_ ];

        // Calc solve val
        INNER_RULE: for ( k = __0; k < inner_data_count; k++ ) {
          rule_data       = inner_data_list[ k ];
          solve_data_type = __isArray( rule_data )
            ? vMap._array_ : getVarType( rule_data );

          switch ( solve_data_type ) {
            case vMap._string_ :
              if ( merged_mixin_map[ vMap._hasOwnProp_ ]( rule_data ) ) {
                solve_val_str = merged_mixin_map[ rule_data ];
              }
              else if ( cssValMap[ vMap._hasOwnProp_ ]( rule_data ) ) {
                solve_val_str = cssValMap[ rule_data ];
              }
              else {
                logIt( '_css_rule_data_not_found_', rule_data );
                continue INNER_RULE;
              }
              break;
            case vMap._array_ :
              if ( rule_data[ vMap._length_ ] > __0 ) {
                solve_val_str = rule_data[ __0 ];
              }
              else {
                logIt( rule_data, '_empty_array_' );
              }
              break;
            default :
              logIt( '_css_values_must_be_str_or_ary_' );
              break;
          }
          // Store rule string
          solve_rule_list[ vMap._push_ ]( solve_key + ':' + solve_val_str );
        }
      }

      solve_selector_str = selector_str + '{';
      solve_selector_str += solve_rule_list[ vMap._length_ ] > __0
        ? solve_rule_list[ vMap._join_ ]( ';' ) : __blank;
      solve_selector_str += '}' + close_str;
      solve_selector_list[ vMap._push_ ]( solve_selector_str );
    }
    return solve_selector_list[ vMap._join_]( '\n' );
  }
  // end 2.x private method /makeCssStr/

  // 2.x private method /regenCascade/
  function regenCascade( cascade_map, regen_type ) {
    var 
      now_ms = __timeStamp(),
      result_map, style_el, write_idx, write_el;

    // 2.x.1 Bail on unrecognized regen type
    if ( topCmap._regen_type_list_[ vMap._indexOf_ ]( regen_type ) === __n1 ) {
      logIt( '_regen_type_not_supported_', regen_type );
      return;
    }

    // 2.x.2 _none_ level regen_type
    if ( regen_type === '_none_' ) { return regen_type; }

    // 2.x.3 _merge_ level regen_type
    if ( cascade_map._merged_selector_ms_ < cascade_map._vsheet_ms_
      || cascade_map._merged_selector_ms_ < cascade_map._mixin_ms_
      || cascade_map._merged_selector_ms_ < topSmap._global_mixin_ms_
    ) {
      result_map = mergeCascade(
        cascade_map._vsheet_id_list_, cascade_map._mixin_map_
      );
      cascade_map._merged_selector_list_ = result_map._merged_selector_list_;
      cascade_map._merged_mixin_map_     = result_map._merged_mixin_map_;
      cascade_map._merged_selector_ms_   = now_ms;
      cascade_map._mixin_ms_             = now_ms;
    }
    if ( regen_type === '_merge_' ) { return regen_type; }
    // end 2.x.3

    // 2.x.4 _prepare_ level regen_type
    if ( cascade_map._css_ms_ < cascade_map._merged_selector_ms_ ) {
      cascade_map._css_str_ = makeCssStr(
        cascade_map._merged_selector_list_,
        cascade_map._merged_mixin_map_
      );
      cascade_map._css_ms_ = now_ms;
    }
    if ( regen_type === '_prepare_' ) { return regen_type; }
    // end 2.x.4

    // 2.x.5 _all_ and _use_ level regen
    if ( regen_type === '_use_'
        || ( topSmap._style_cascade_list_[ topSmap._style_el_idx_ ]
      === cascade_map._cascade_id_ )
    ) {
      style_el  = topSmap._style_el_list_[ topSmap._style_el_idx_ ];
      write_idx = topSmap._style_el_idx_ === __1 ? __0 : __1;
      write_el  = topSmap._style_el_list_[ write_idx ];
      writeToStyleEl ( write_el, cascade_map._css_str_ );

      if ( style_el ) {
        style_el[ vMap._sheet_ ][ vMap._disabled_ ] = __true;
      }
      write_el[ vMap._sheet_ ][ vMap._disabled_ ] = __false;

      topSmap._style_el_idx = write_idx;
      topSmap._style_cascade_list_[ write_idx ] = cascade_map._cascade_id_;
    }
    // end 2.x.5
    return regen_type;
  }
  // end 2.x private method /regenCascade/

  function initCheck () {
    var target_fn = this;
    if ( ! topSmap._style_el_prefix_ ) {
      throw '_please_run_initmodule_first_';
    }
    return target_fn[ vMap._apply_ ]( this, arguments );
  }
  // end 2. PRIVATE METHODS ===================================

  // 4. PUBLIC METHODS ========================================
  // 4.x Public method /initModule/
  function initModule ( arg_opt_map ) {
    // 4.x.1 init and args
    var opt_map = arg_opt_map || {};

    // 4.x.2 initialize element prefix
    topSmap._style_el_prefix_ = ( !! opt_map._style_el_prefix_ )
      ? opt_map._style_el_prefix_ + '-' : 'pcss-';

    // 4.x.3 create two style elements '<prefix>-0' and '<prefix>-1'
    initStyleEls();
  }
  // end 4.x Public method /initModule/

  // 4.x Public method /setGlobalMixinMap/
  function setGlobalMixinMap ( arg_opt_map ) {
    // 4.x.1 Init and arguments
    var
      opt_map    = arg_opt_map || {},

      mixin_map  = opt_map._mixin_map_  || {},
      regen_type = opt_map._regen_type_ || '_all_',

      cascade_map_map = topSmap._cascade_map_map_,

      cascade_id_list, cascade_id_count,
      i, cascade_id,   cascade_map
      ;

    if ( regen_type === '_use_' ) {
      logIt( '_regen_type_use_not_supported_for_this_method_' );
      return;
    }
    // end 4.x.1

    // 4.x.2 Set mixin map
    topSmap._global_mixin_map_ = cloneData( mixin_map );
    topSmap._global_mixin_ms_  = __timeStamp();

    // 4.x.3 Regenerate cascade maps to regen_type level
    cascade_id_list  = __ObjKeys( cascade_map_map );
    cascade_id_count = cascade_id_list[ vMap._length_ ];
    for ( i = __0; i < cascade_id_count; i++ ) {
      cascade_id     = cascade_id_list[ i ];
      cascade_map    = cascade_map_map[ cascade_id ];
      regenCascade( cascade_map, regen_type );
    }
    return cascade_id_count;
  }
  // end 4.x Public method /setGlobalMixinMap/

  // 4.x Public method /togglePcss/
  function togglePcss( do_enable ) {
    var
      style_el = topSmap._style_el_list_[ topSmap._style_el_idx ];

    style_el[ vMap._sheet_ ][ vMap._disabled_ ] = !! do_enable;
  }
  // end 4.x Public method /togglePcss/

  // 4.x Public method /getAssetJson/
  function getAssetJson ( arg_opt_map ) {
    // 4.x.1 Init and arguments
    var
      opt_map    = arg_opt_map || {},
      asset_type    = opt_map._asset_type_,
      asset_subtype = opt_map._asset_subtype_,
      asset_id      = opt_map._asset_id_,
      asset_map
      ;
    // end 4.x.1 Init and arguments

    // 4.x.2 Set asset_map
    switch ( asset_type ) {
      case '_cascade_' :
        asset_map = topSmap._cascade_map_map_[ asset_id ];
        break;
      case '_vsheet_' :
        asset_map = topSmap._vsheet_map_map_[ asset_id ];
        break;
      case '_global_mixin_' :
        return __j2str( topSmap._global_mixin_map_ );
      case '_style_cascade_list_' :
        return __j2str( topSmap._style_cascade_list_ );
      default :
        logIt( '_asset_type_not_found_', asset_type );
        asset_map = {};
        break;
    }
    // end 4.x.2

    // 4.x.3 Return if no subtype
    if ( ! asset_subtype ) { return __j2str( asset_map ); }

    // 4.x.4 Handle subtype
    if ( asset_map && asset_map[ vMap._hasOwnProp_ ]( asset_subtype ) ) {
      return __j2str( asset_map[ asset_subtype ] );
    }
    return __undef;
  }
  // end 4.x Public method /getAssetJson/

  // 4.x Public method /setVsheet/
  //    _setVsheet_({
  //      _vsheet_id_     : '_base_',
  //      _mode_str_      : '_add_',
  //      _selector_list_ : [...],
  //      _mixin_map_     : {...},
  //      _regen_type_    : '_merge_'
  //         ('_all_|_prepare_|_merge_|_none_')
  //    });
  function setVsheet ( arg_opt_map ) {
    // 4.x.1 Init and arguments
    var
      vsheet_map_map  = topSmap._vsheet_map_map_,
      cascade_map_map = topSmap._vsheet_map_map_,

      opt_map         = arg_opt_map || {},
      vsheet_id       = opt_map._vsheet_id_,
      mode_str        = opt_map._mode_str_,
      selector_list   = opt_map._selector_list_,
      mixin_map       = opt_map._mixin_map_,
      regen_type      = opt_map._regen_type_,

      now_ms          = __timeStamp(),

      vsheet_map,       cascade_id_list,
      cascade_id_count, i,
      cascade_id,       cascade_map,
      vsheet_id_list,   vsheet_index
      ;

    if ( regen_type === '_use_' ) {
      logIt( '_regen_type_use_not_supported_for_this_method_' );
      return;
    }

    if ( ! regen_type ) {
      regen_type = mode_str === '_change_' ? '_all_' : '_merge_';
    }
    // end 4.x.1

    //  4.x.2 Get existing vsheet_map and stop forbidden action
    vsheet_map = vsheet_map_map[ vsheet_id ];
    switch ( mode_str ) {
      // If found log warning and return undef
      case '_add_' :
        if ( vsheet_map ) {
          logIt( '_vsheet_already_exists_for_id_', vsheet_id );
          return;
        }
        vsheet_map = { _vsheet_id_ : vsheet_id };
        vsheet_map_map[ vsheet_id ] = vsheet_map;
        break;
      // If not found log warning and return undef
      case '_change_' :
      case '_delete_' :
        if ( ! vsheet_map ) {
          logIt( '_no_vsheet_exists_for_id_', vsheet_id );
          return;
        }
        break;
      default :
        logIt( '_mode_not_supported_', mode_str );
        return;
    }
    // end 4.x.2

    // 4.x.3 Delete, change, or add data as provided
    if ( mode_str === '_delete_' ) {
      delete vsheet_map_map[ vsheet_id ];
    }
    else {
      if ( selector_list ) {
        vsheet_map._selector_list_ = cloneData( selector_list );
        vsheet_map._selector_ms_ = now_ms;
      }
      if ( mixin_map ) {
        vsheet_map._mixin_map_ = cloneData( mixin_map );
        vsheet_map._mixin_ms_ = now_ms;
      }
    }
    // regen has no effect for _add_ mode
    if ( mode_str === '_add_' ) { return vsheet_id; }
    // end 4.x.3

    // 4.x.4 Consider each cascade_map in _cascade_map_map
    cascade_id_list  = __ObjKeys( cascade_map_map );
    cascade_id_count = cascade_id_list[ vMap._length_ ];
    for ( i = __0; i < cascade_id_count; i++ ) {
      cascade_id     = cascade_id_list[ i ];
      cascade_map    = cascade_map_map[ cascade_id ];
      vsheet_id_list = cascade_map._vsheet_id_list_;

      // 4.x.4.1 Update _vsheet_ms_ if vsheet_id in vsheet_id_list
      vsheet_index = vsheet_id_list[ vMap._indexOf_ ]( vsheet_id );
      if ( vsheet_index > __n1 ) {
        cascade_map._vsheet_ms_ = now_ms;

        // 4.x.4.1.1 Remove vsheet id if _delete_
        if ( mode_str === '_delete_' ) {
          vsheet_id_list[ vMap._splice_ ]( vsheet_index, __1 );
        }
        // 4.x.4.1.2 Regenerate to specified level
        regenCascade( cascade_map, regen_type );
      }
      // end 4.x.4.1
    }
    // end 4.x.4
    return vsheet_id;
  }
  // end 4.x Public method /setVsheet/

  // 4.x Public method /setCascade/
  //  _setCascade_({
  //    _cascade_id_      : '_example001_',
  //    _mode_str_        : '_add_',
  //    _vsheet_id_list_  : [ '_base_', '_box_' ],
  //    _mixin_map_       : {...},
  //    _regen_type_      : '_merge_' // '_use_|_all_|_prepare_|_merge_|_none_'
  //  });
  function setCascade ( arg_opt_map ) {
    // 4.x.1 Init and arguments
    var
      opt_map         = arg_opt_map || {},
      cascade_id      = opt_map._cascade_id_,
      mode_str        = opt_map._mode_str_,
      vsheet_id_list  = opt_map._vsheet_id_list_,
      mixin_map       = opt_map._mixin_map_,
      regen_type      = opt_map._regen_type_,

      cascade_map_map = topSmap._cascade_map_map_,
      now_ms          = __timeStamp(),

      cascade_map, unknown_id_list,
      style_el,    style_el_idx
      ;

    if ( ! regen_type ) {
      regen_type = mode_str === '_change_' ? '_all_' : '_merge_';
    }
    // end 4.x.1

    //  4.x.2 Get existing cascade_map and stop forbidden action
    cascade_map = cascade_map_map[ cascade_id ];
    switch ( mode_str ) {
      // If found log warning and return undef
      case '_add_' :
        if ( cascade_map ) {
          logIt( '_cascade_already_exists_for_id_', cascade_id );
          return;
        }
        cascade_map = {
          _cascade_id_           : cascade_id,
          _vsheet_id_list_       : __undef,
          _vsheet_ms_            : __0,
          _mixin_map_            : __undef,
          _mixin_ms_             : __0,
          _merged_selector_list_ : __undef,
          _merged_mixin_map_     : __undef,
          _merged_selector_ms_   : __0,
          _css_str_              : __blank,
          _css_ms_               : __0
        };
        cascade_map_map[ cascade_id ] = cascade_map;
        break;
      // If not found log warning and return undef
      case '_change_' :
      case '_delete_' :
        if ( ! cascade_map ) {
          logIt( '_no_cascade_exists_for_id_', cascade_id );
          return;
        }
        break;
      default :
        logIt( '_mode_not_supported_', mode_str );
        return;
    }
    // end 4.x.2

    // 4.x.3 Delete, change, or add data as provided
    if ( mode_str === '_delete_' ) {
      delete cascade_map_map[ cascade_id ];
      style_el_idx = topSmap._style_el_idx_;
      if ( topSmap[ style_el_idx ] === cascade_id ) {
        style_el = topSmap._style_el_list_[ style_el_idx ];
        writeToStyleEl( style_el, __blank );
      }
      return cascade_id;
    }

    if ( vsheet_id_list ) {
      unknown_id_list = checkVsheetIds( vsheet_id_list );
      if ( unknown_id_list[ vMap._length_ ] > __0 ) {
        logIt( '_unknown_vsheet_id_provided_', unknown_id_list );
        return;
      }
      cascade_map._vsheet_id_list_ = cloneData( vsheet_id_list );
      cascade_map._vsheet_ms_      = now_ms;
    }
    if ( mixin_map ) {
      cascade_map._mixin_map_ = cloneData( mixin_map );
      cascade_map._mixin_ms_ = now_ms;
    }
    // end 4.x.3

    regenCascade( cascade_map, regen_type );
    return cascade_id;
  }
  // end 4.x Public method /setCascade/

  // end 4. PUBLIC METHODS ====================================
  return {
    // General
    _initModule_          : initModule,
    _setGlobalMixinMap_   : initCheck[ vMap._bind_ ]( setGlobalMixinMap   ),
    _togglePcss_          : initCheck[ vMap._bind_ ]( togglePcss          ),
    _getAssetJson_        : initCheck[ vMap._bind_ ]( getAssetJson        ),
    _setVsheet_           : initCheck[ vMap._bind_ ]( setVsheet           ),
    _setCascade_          : initCheck[ vMap._bind_ ]( setCascade          )
  };
}());
