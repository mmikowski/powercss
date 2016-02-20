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

var pcss;
pcss = (function () {
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
    __null = null,
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

    topSmap = {
      _cascade_map_ : {},
      _vsheet_map_ : {},
      _mixin_map_map_   : {
        _global_  : {
          _global_id_ : { _time_ms_ : __0, _mixin_map_ : {} }
        },
        // use: _cascade_id_ : { _time_ms_: 1455479409, _mixin_map_ : {...},
        _cascade_ : {},
        // use: _vsheet_id_ : { _time_ms_: 1455479409, _mixin_map_ : {...},
        _vsheet_  : {}
      },
      _style_el_list_   : __undef,
      _style_el_prefix_ : __undef,
      _style_el_idx_    : __n1
    }
    ;
  // end 1. MODULE SCOPE VARIABLES ========================

  // 2. PRIVATE METHODS ===================================
  function logIt () {
    console.log[ vMap._apply_ ]( console, arguments );
  }

  function getType ( arg ) {
    return typeof arg;
  }

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

  function cloneData ( data ) {
    if ( ! data ) { return data; }
    return __str2j( __j2str( data ) );
  }

  function extendMixinMap ( base_map, arg_extend_map ) {
    var
      extend_map, key_list, key_count,
      i, key, val_data
      ;

    if ( getType( arg_extend_map ) !== 'object' ){ return; }
    extend_map = cloneData( arg_extend_map );
    key_list   = __ObjKeys( extend_map );
    key_count  = key_list[ vMap._length_ ];

    for ( i = __0; i < key_count; i++ ) {
      key      = key_list[ i ];
      val_data = extend_map[ key ];
      base_map[ key ] = val_data;
    }
  }

  function mergeCascadeList ( cascade_id, cascade_vsheet_list, cascade_mixin_map ) {
    var
      mixin_map_map = topSmap._mixin_map_map_,
      vsheet_map    = topSmap._vsheet_map_,

      vsheet_count       = cascade_list[ vMap._length_ ],
      seen_select_map    = {},
      merged_vsheet_list = [],

      merged_mixin_map,
      global_mixin_map,

      i, vsheet_id,      selector_list,
      vsheet_mixin_map,  select_map_count,
      j, select_map,     select_str,
      rule_lock_list,    rule_map,
      clone_select_map,  merged_rpt_map,
      merged_select_map, merged_rule_map,
      merged_lock_list,  rule_key_list,
      rule_key_count,
      l, rule_key
      ;

    // TODO: cache this stuff per cascade
    global_mixin_map  = topSmap._global_mixin_map || {};
    merged_mixin_map  = cloneData( global_mixin_map );
    extendMixinMap( merged_mixin_map, cascade_mixin_map );

    // Begin consider each vsheet in the cascade list
    for ( i = __0; i < vsheet_count; i++ ) {
      vsheet_id        = cascade_list[ i ];
      vsheet_list      = vsheet_map[ vsheet_id ] || {};
      select_map_count = vsheet_list[ vMap._length_ ];
      vsheet_mixin_map = mixin_map_map._vsheet_[ vsheet_id ]
        && mixin_map_map._vsheet_[ vsheet_id ]._mixin_map_;
      extendMixinMap( merged_mixin_map, vsheet_mixin_map );

      // Begin consider each select_map in the vsheet_list
      for ( j = __0; j < select_map_count; j++ ) {
        select_map     = vsheet_list[ j ];
        select_str     = select_map._select_str_;
        rule_lock_list = select_map._rule_lock_list_;
        rule_map       = select_map._rule_map_;

        merged_rpt_map = seen_select_map[ select_str ];
        if ( merged_rpt_map ) {
          merged_select_map = merged_rpt_map._select_map_;
          merged_rule_map   = merged_select_map._rule_map_;

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
                '_rule_key_locked_for_selector_', select_str, rule_key
              );
              continue _RULE_;
            }
            merged_rule_map[ rule_key ] = rule_map[ rule_key ];
          }
          // End merge rules unless they are locked
        }
        else {
          // Begin clone data and place the **same map**
          // both into the merged_vsheet_list and the merged_rpt_map
          // as we want fast O(1) access to it.
          //
          clone_select_map = cloneData( select_map );
          merged_vsheet_list[ vMap._push_]( clone_select_map );
          merged_rpt_map = { _select_map_ : clone_select_map };
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
          seen_select_map[ select_str ] = merged_rpt_map;
        }
      }
      // End consider each select_map in the vsheet_list
    }
    // End loop through all vsheet_lists in cascade list
    return {
      _vsheet_list_ : merged_vsheet_list,
      _mixin_map_   : merged_mixin_map
    };
  }

  function makeCssStr ( merged_vsheet, merged_mixin_map ) {
    var
      i, j, k,        select_count,
      select_map,     select_str,
      rule_map,       close_str,
      rule_key_list,  rule_key_count,
      rule_key,       rule_data,

      outer_data, outer_data_type,
      inner_data_list, inner_data_count,

      solve_select_list, solve_data_type,
      solve_rule_list,   solve_key,
      solve_val_str,     solve_select_str
      ;

    select_count = merged_vsheet[ vMap._length_ ];
    solve_select_list = [];

    for ( i = __0; i < select_count; i++ ) {
      select_map = merged_vsheet[ i ];
      select_str = select_map._select_str_;
      rule_map = select_map._rule_map_;
      close_str = select_map._close_str_ || __blank;

      if ( ! rule_map ) {
        solve_select_list[ vMap._push_ ]( select_str + close_str );
        continue;
      }

      rule_key_list = __ObjKeys( rule_map );
      rule_key_count = rule_key_list[ vMap._length_ ];

      // Calc solve_key
      solve_rule_list = [];
      for ( j = __0; j < rule_key_count; j++ ) {
        rule_key = rule_key_list[ j ];

        // Vsheet Mixin
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
        outer_data = rule_map[ rule_key ];
        // first some tap-dancing to handle mixin complex values
        if ( vMap._string_ === getType( outer_data )
          && merged_mixin_map[ vMap._hasOwnProp_ ]( outer_data )
          && vMap._string_ !== getType( merged_mixin_map[ outer_data ] )
        ) {
          outer_data = merged_mixin_map[ outer_data ];
        }

        outer_data_type = __isArray( outer_data )
          ? vMap._array_ : getType( outer_data );
        inner_data_list = outer_data_type === vMap._object_
          ? outer_data._alt_list_ || [] : [ outer_data ];
        inner_data_count = inner_data_list[ vMap._length_ ];

        // Calc solve val
        INNER_RULE: for ( k = __0; k < inner_data_count; k++ ) {
          rule_data       = inner_data_list[ k ];
          solve_data_type = __isArray( rule_data )
            ? vMap._array_ : getType( rule_data );

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

      solve_select_str = select_str + '{';
      solve_select_str += solve_rule_list[ vMap._length_ ] > __0
        ? solve_rule_list[ vMap._join_ ]( ';' ) : __blank;
      solve_select_str += '}' + close_str;
      solve_select_list[ vMap._push_ ]( solve_select_str );
    }
    return solve_select_list[ vMap._join_]( '\n' );
  }

  // TODO: Profile on major browser
  // This function only updates the css_str in the style element
  // only if it appears changed.  The idea is should be much faster
  // than blindly writting the css_str. However, this may be redundant
  // with browsers optimizations.
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

  function initCheck () {
    var target_fn = this;
    if ( ! topSmap._style_el_prefix_ ) {
      throw '_please_run_initmodule_first_';
    }
    return target_fn[ vMap._apply_ ]( this, arguments );
  }
  // end 2. PRIVATE METHODS ===============================

/*
topSmap = {
  _vsheet_map_
    |- `vsheet_id1`
    |  |- _vsheet_id_     : `vsheet_id1`
    |  |- _selector_list_ : `selector_list`
    |  |- _selector_ms_   : `timestamp`
    |  |- _mixin_map_     : `mixin_map`
    |  +- _mixin_ms_      : `timestamp`
    |
    +- `vsheet_id2`
       |- _vsheet_id_     : `vsheet_id2`
       |- _selector_list_ : `selector_list`
       |- _selector_ms_   : `timestamp`
       |- _mixin_map_     : `mixin_map`
       +- _mixin_ms_      : `timestamp`

  _cascade_map_
    |- `cascade_id1`
    |  |- _cascade_id_         : `cascade_id1`
    |  |- _vsheet_list_        : `vsheet_list`
    |  |- _vsheet_ms_          : `timestamp`
    |  |- _mixin_map_          : {...}
    |  |- _mixin_ms_           : `timestamp`
    |  |- _merged_vsheet_list_ : `merged_vsheet_list`
    |  |- _merged_mixin_map_   : `merged_mixin_map`
    |  |- _merged_vsheet_ms_   : `timestamp`
    |  |- _css_str_            : `cascade_css`
    |  +- _css_ms_             : `timestamp`
    |
    +- `cascade_id2`
       |- _cascade_id_         : `cascade_id2`
       |- _vsheet_list_        : `vsheet_list`
       |- _vsheet_ms_          : `timestamp`
       |- _mixin_map_          : {...}
       |- _mixin_ms_           : `timestamp`
       |- _merged_vsheet_list_ : `merged_vsheet_list`
       |- _merged_mixin_map_   : `merged_mixin_map`
       |- _merged_vsheet_ms_   : `timestamp`
       |- _css_str_            : `cascade_css`
       +- _css_ms_             : `timestamp`

topCmap._regen_type_list_ = [ '_none_', '_merge_', '_prepare_', '_all_' ];

regen_cascade( cascade_obj, regen_type ) {
  if ( topCmap._regen_type_list_.indexOf( regen_type ) === -1 ) {
    lotIt( '_regen_type_not_supported_', regen_type );
    return;
  }
  if ( regen_type === '_none_' ) { return regen_type; }
  if ( cascade_obj._merged_vsheet_ms_ < cascade_obj._vsheet_ms_
    || cascade_obj._merged_vsheet_ms_ < cascade_obj._mixin_ms_
    || cascade_obj._merged_vsheet_ms_ < topSmap._global_mixin_ms_
  ) {
    result_map = mergeCascadeList( vsheet_list );
    cascade_obj._merged_vsheet_list_ = result_map._merged_vsheet_list_
    cascade_obj._merged_mixin_map_   = result_map._merged_mixin_map_
    cascade_obj._merged_vsheet_ms_   = NOW
  }
  if ( regen_type === '_merge_' ) { return regen_type; }
  if ( cascade_obj._css_ms_ < cascade_obj._merged_vsheet_ms_ ) {
    cascade_obj._css_str_ = makeCssStr(
      cascade_obj._merged_vsheet_list_,
      cascade_obj._merged_mixin_map_
    );
  }
  if ( regen_type === '_prepare_' ) { return regen_type; }

  if ( topSmap._style_el_idx_
    === topSmap._active_cascade_list_.indexOf( cascade_obj._cascade_id )
  ) {
    style_el = topSmap._style_el_list_[ topSmap._style_el_idx_ ];
    writeToStyleEl ( style_el, cascade_obj._css_str_ );
  }
  return regen_type;
}

General methods
- `_initModule_`
- `_getBufferJson_`       // e.g. [ cascade\_idX, cascade\_idY ]
- `_setGlobalMixinMap_`   // mode: add, change, delete

Vsheet methods
- `_getVsheetJson_` // get selector\_list or mixin\_map
                    //   selector\_list\_ms, mixin\_map\_ms
- `_setVsheet_`     // mode  : add, change, delete
                    // assets: selector\_list and/or mixin\_map

Cascade methods
- `_getCascadeJson_` // get cascade\_obj or mixin\_map
                     //     selector\_list\_ms, mixin\_map\_ms
- `_setCascade_`     // mode: add, change, delete
                     // assets: vsheet\_list, mixin\_map
                     // Also use for prepareCascade
- `_useCascade_`
- `_disablePcss_`    // Disables both stylesheets

# _vsheet_map_ use cases
## Add vsheet
  - Function call
    _setVsheet_({
      _vsheet_id_     : '_base_',
      _mode_str_      : '_add_',
      _selector_list_ : [...],
      _mixin_map_     : {...},
      _regen_type_    : '_merge_' // '_all_|_prepare_|_merge_|_none_'
    });

  - Get existing vsheet record from topSmap._vsheet_map_.`vsheet_id`
  - If found log warning and return undef
  topSmap._sheet_map_.`vsheet_id` = {
    _selector_list_ : [],
    selector_
  };
  - If provided
      topSmap._vsheet_map_.`vsheet_id`._selector_list_ = selector_list
      topSmap._vsheet_map_.`vsheet_id`._selector_ms_     = NOW
  - If provided
      vsheet_map.`vsheet_id`._mixin_map_ = mixin_map
      vsheet_map.`vsheet_id`._mixin_ms_  = NOW
  - An added vsheet list cannot affect cascades, so regen_type is ignored 

## Change vsheet (selector_list or mixin_map)
  - Function call
    _setVsheet_({
      _vsheet_id_     : '_base_',
      _mode_str_      : '_change_',
      _selector_list_ : [...],
      _mixin_map_     : {...}
      _regen_type_     : '_merge_' // '_all_|_prepare_|_merge_|_none_'
    });

  - Get existing vsheet record from vsheet_map
  - If not found log warning and return undef
  - If provided
      topSmap._vsheet_map_.`vsheet_id`._selector_list_ = selector_list
      topSmap._vsheet_map_.`vsheet_id`._selector_ms_     = NOW
      do_vsheet_regen = true;
  - If provided
      vsheet_map.`vsheet_id`._mixin_map_ = mixin_map
      vsheet_map.`vsheet_id`._mixin_ms_  = NOW
      do_vsheet_regen = true;
  - if ( ! do_vsheet_regen ) { return; }

  - Consider each cascade_obj in _cascade_map_
    - If vsheet_list contains vsheet_id
      - Set cascade_obj._selector_ms_ to NOW
  - End loop
  - regen_cascade( cascade_obj, regen_type )
  - return vsheet_id

## Delete only vsheet selector list
   Deleting a selector list independently is not supported.
   However, one may change the _selector_list_ to an empty array
   for a similar effect.

## Delete only vsheet mixin map
   Deleting a vsheet mixin map independently is not supported.
   However, one may change the _mixin_map_ to an empty object
   for a similar effect.

## Delete a vsheet
  - Function call
    _setVsheet_({
      _vsheet_id_  : '_base_',
      _mode_str_   : '_delete_',
      _regen_type_ : '_merge_' // '_all_|_prepare_|_merge_| _none_'
    });

  - Get existing vsheet record from vsheet_map
  - If not found log warning and return undef
  - Delete topSmap._vsheet_map_.`vsheet_id`
      do_vsheet_regen = true;
  - if ( ! do_vsheet_regen ) { return; }

  - Consider each cascade_obj in _cascade_map_
    - If vsheet_list contains `vsheet_id`
      - Remove `vsheet_id` from vsheet_list
      - Set cascade_obj._vsheet_ms_ to NOW
  - End
  - regen_cascade( cascade_obj, regen_type )
  - return `vsheet_id`

## Get vsheet snapshot
  - function call
    _getVsheetJson_({
      _vsheet_id_  : '_base_'
    });

  - Get existing vsheet record from vsheet_map
  - If not found log warning and return undef
  - JSON.stringify record

# _cascade_map_ use cases
## Add cascade
  - Function call
    _setCascade_({
      _cascade_id_    : '_example001_',
      _mode_str_      : '_add_',
      _vsheet_list_   : [ '_base_', '_box_' ],
      _mixin_map_     : {...},
      _regen_type_    : '_merge_' // '_all_|_prepare_|_merge_|_none_'
    });

  - Get existing cascade_obj from topSmap._cascade_map_.`cascade_id`
  - If found log warning and return undef
  - Ensure every provided key in the vsheet_list is defined in
    topSmap._vsheet_map.  If not, log warning and return undef

  - If provided
      topSmap._cascade_map_.`cascade_id`._vsheet_list_ = vsheet_list
      topSmap._cascade_map_.`cascade_id`._vsheet_ms_   = NOW
  - If provided
      cascade_map.`cascade_id`._mixin_map_ = mixin_map
      cascade_map.`cascade_id`._mixin_ms_  = NOW
  - An added cascade list cannot be effect cascades, so regen_type is ignored 

## Change cascade (vsheet_list or mixin_map)
  - Function call
    _setCascade_({
      _cascade_id_   : '_example001_',
      _mode_str_     : '_change_',
      _vsheet_list_  : [...],
      _mixin_map_    : {...}
      _regen_type_   : '_merge_' // '_all_|_prepare_|_merge_|_none_'
    });

  - Get existing cascade_obj from topSmap._cascade_map_.`cascade_id`
  - If not found log warning and return undef
  - If provided
      topSmap._cascade_map_.`cascade_id`._vsheet_list_ = vsheet_list
      topSmap._cascade_map_.`cascade_id`._vsheet_ms_   = NOW
      do_cascade_regen = true;
  - If provided
      topSmap._cascade_map_.`cascade_id`._mixin_map_ = mixin_map
      topSmap._cascade_map_.`cascade_id`._mixin_ms_  = NOW
      do_cascade_regen = true;
  - if ( ! do_cascade_regen ) { return; }
  - regen_cascade( cascade_obj, regen_type )
  - return vsheet_id

## Delete only cascade vsheet_list
   Deleting a cascade list independently is not supported.
   However, one may change the _selector_list_ to an empty array
   for a similar effect.

## Delete only cascade mixin map
   Deleting a cascade mixin map independently is not supported.
   However, one may change the _mixin_map_ to an empty object
   for a similar effect.

## Delete a cascade
  - Function call
    _setCascade_({
      _cascade_id_ : '_example001_',
      _mode_str_   : '_delete_'
    });

  - Get existing cascade_obj from topSmap._cascade_map_.`cascade_id`
  - If not found log warning and return undef
  - Delete topSmap._cascade_map_.`cascade_id`
  - If this is the active cascade, disable the stylesheet
  - return `cascade_id`

## Use a cascade
## Disable pcss

## Get cascade snapshot
  - function call
    _getCascadeJson_({
      _cascade_id_  : '_base_'
    });

  - Get existing cascade record from cascade_map
  - If not found log warning and return undef
  - JSON.stringify record

# _global_ use cases
## Change mixin_map
*/
