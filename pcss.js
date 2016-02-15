/* PowerCSS - pcss.js
 * Run-time generated and managed CSS
 * Michael S. Mikowski - mike.mikowski@gmail.com
*/
/*jslint       browser : true, continue : true,
 devel : true,  indent : 2,      maxerr : 50,
 newcap : true,  nomen : true, plusplus : true,
 regexp : true, sloppy : true,     vars : false,
 white : true,    todo : true,  unparam : true
*/
/*global pcss:true */

// # PowerCSS by Michael S. Mikowski
//
// ## Overview
// Unleash PowerCSS to create custom CSS for every user that visits your site.
// PowerCSS uses merging, caching, compression, and double-buffering to exceed
// the speed and flexibility of static CSS.
// https://www.youtube.com/watch?v=rnkMjzhxw4s
//
// See README.md for further documentation.

var pcss;
pcss = (function () {
  // BEGIN 1. MODULE SCOPE VARIABLES ========================
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

    __0  = 0,
    __1  = 1,
    __n1 = -1,
    __undef = window.undefined,

    vMap = {
      _array_          : 'array',
      _object_         : 'object',
      _string_         : 'string',
      _appendChild_    : 'appendChild',
      _createElement_  : 'createElement',
      _createTextNode_ : 'createTextNode',
      _cssText_        : 'cssText',
      _disabled_       : 'disabled',
      _getElById_      : 'getElementById',
      _hasOwnProp_     : 'hasOwnProperty',
      _head_           : 'head',
      _id_             : 'id',
      _indexOf_        : 'indexOf',
      _innerText_      : 'innerText',
      _innerHTML_      : 'innerHTML',
      _join_           : 'join',
      _length_         : 'length',
      _push_           : 'push',
      _setAttribute_   : 'setAttribute',
      _sheet_          : 'sheet',
      _shift_          : 'shift',
      _slice_          : 'slice',
      _splice_         : 'splice',
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
      _2rem_          : '2rem',
      _3rem_          : '3rem',
      _200_           : '400',
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
      _cascade_obj_map_ : {},
      _vsheet_list_map_ : {},
      _mixin_map_map_   : {
        _global_  : {
          _global_id_ : { _time_ms_ : __0, _mixin_map_ : {} }
        },
        // use: _cascade_id_ : { _time_ms_: 1455479409, _mixin_map_ : {...},
        _cascade_ : {},
        // use: _vsheet_id_ : { _time_ms_: 1455479409, _mixin_map_ : {...},
        _vsheet_  : {}
      },
      _style_el_prefix_ : __undef,
      _style_el_idx_    : __n1
    }
    ;
  // END   1. MODULE SCOPE VARIABLES ========================

  // BEGIN 2. PRIVATE METHODS ===============================
  function logIt () {
    console.log.apply( console, arguments );
  }
  function createStyleElId () {
    var style_el_id = topSmap._style_el_prefix_
      + __String( topSmap._style_el_idx_ + __1 );

    if ( !! __docRef[ vMap._getElById_ ]( style_el_id ) ) {
      throw '_sheet_id_is_already_in_use_ ' + style_el_id;
    }
    topSmap._style_el_idx_++;
    return style_el_id;
  }

  function addStyleEl ( style_id ) {
    var
      head_el = __docRef[ vMap._head_ ],
      style_el
      ;

    // Create element and set properties
    style_el = __docRef[ vMap._createElement_ ]( 'style' );
    style_el[ vMap._setAttribute_ ]( vMap._type_, vMap._text_css_ );
    style_el[ vMap._setAttribute_ ]( vMap._id_, style_id );

    // Add to head
    head_el[ vMap._appendChild_ ]( style_el );

    return style_el;
    // End find and return the sheet object
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

    if ( ( typeof arg_extend_map ) !== 'object' ){ return; }
    extend_map = cloneData( arg_extend_map );
    key_list   = __ObjKeys( extend_map );
    key_count  = key_list[ vMap._length_ ];

    for ( i = __0; i < key_count; i++ ) {
      key      = key_list[ i ];
      val_data = extend_map[ key ];
      base_map[ key ] = val_data;
    }
  }

  function mergeCascadeList ( cascade_id, cascade_list ) {
    var
      mixin_map_map      = topSmap._mixin_map_map_,
      vsheet_list_map    = topSmap._vsheet_list_map_,

      vsheet_count       = cascade_list[ vMap._length_ ],
      seen_select_map    = {},
      merged_vsheet_list = [],

      merged_mixin_map,
      global_mixin_map,
      cascade_mixin_map,

      i, vsheet_id,    vsheet_list,
      vsheet_mixin_map, select_map_count,
      j, select_map,    select_str,
      rule_lock_list,   rule_map,
      clone_select_map, merged_rpt_map,
      merged_select_map, merged_rule_map,
      merged_lock_list,  rule_key_list,
      rule_key_count,
      l, rule_key
      ;

    // TODO: cache this stuff per cascade
    global_mixin_map  = mixin_map_map._global_._global_id_._mixin_map_;
    cascade_mixin_map = mixin_map_map._cascade_[ cascade_id ]
      && mixin_map_map._cascade_[ cascade_id ]._mixin_map_;
    merged_mixin_map  = cloneData( global_mixin_map );
    extendMixinMap( merged_mixin_map, cascade_mixin_map );

    // Begin consider each vsheet_list in the cascade list
    for ( i = __0; i < vsheet_count; i++ ) {
      vsheet_id        = cascade_list[ i ];
      vsheet_list      = vsheet_list_map[ vsheet_id ] || {};
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
            merged_lock_list.push.apply( merged_lock_list, rule_lock_list );
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
          merged_vsheet_list.push( clone_select_map );
          merged_rpt_map = { _select_map_ : clone_select_map };
          // End clone data and place the **same map**

          // Begin init lock list
          if ( rule_lock_list ) {
            merged_rpt_map._rule_lock_list_ = cloneData( rule_lock_list );
            merged_rpt_map[ 'lock_on_' + __String( i ) ] = __j2str( rule_lock_list );
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

  function createCssStr ( merged_vsheet, merged_mixin_map ) {
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
        // val:   'some_string'   => lookup key
        // val: [ 'some_string' ] => literal
        // val: { _alt_list_ : [ 'some_string, [ 'some_string ] ] }
        //   => alternate list.  The first value is a lookup,
        //      the second is a literal.
        //
        outer_data = rule_map[ rule_key ];
        outer_data_type = __isArray( outer_data )
          ? vMap._array_ : typeof outer_data;

        inner_data_list = outer_data_type === vMap._object_
          ? outer_data._alt_list_ || [] : [ outer_data ];
        inner_data_count = inner_data_list[ vMap._length_ ];

        // Calc solve val
        for ( k = __0; k < inner_data_count; k++ ) {
          rule_data       = inner_data_list[ k ];
          solve_data_type = __isArray( rule_data )
            ? vMap._array_ : typeof rule_data;

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

  function writeToStyleEl ( style_el, css_str )  {
    var text_el;
    // Old Firefox and IE(?)
    if ( style_el[ vMap._hasOwnProp_ ]( vMap._cssText_ ) ) {
      style_el[ vMap._cssText_ ] = css_str;
    }
    // New Firefox
    else if ( style_el[ vMap._hasOwnProp_ ]( vMap._textContent_ ) ) {
      style_el[ vMap._textContent_ ] = css_str;
    }
    // Webkit
    else {
      text_el = __docRef[ vMap._createTextNode_ ]( css_str );
      style_el[ vMap._appendChild_ ]( text_el );
    }
  }

  function initCheck () {
    var target_fn = this;
    if ( ! topSmap._style_el_prefix_ ) {
      throw '_please_run_initmodule_first_';
    }
    return target_fn.apply( this, arguments );
  }
  // END   2. PRIVATE METHODS ===============================

  // BEGIN 3. MESSAGE EVENT HANDLERS ========================
  // END   3. MESSAGE EVENT HANDLERS ========================

  // BEGIN 4. PUBLIC METHODS ================================
  // BEGIN 4.1 Public method /setMixinMap/
  function setMixinMap( arg_opt_map ) {
    // BEGIN 4.1.1 Init and arguments
    var
      mixin_map_map = topSmap._mixin_map_map_,

      opt_map    = arg_opt_map || {},
      asset_type = opt_map._asset_type_,
      asset_id   = opt_map._asset_id_,
      mixin_map  = opt_map._mixin_map_
      ;
    if ( asset_type === '_global_' ) { asset_id = '_global_'; }
    // END 4.1.1 Init and arguments

    // BEGIN 4.1.2 Arg checks
    if ( ! ( asset_id && asset_type && mixin_map ) ) {
      logIt( '_asset_id_and_asset_type_and_mixin_map_required_',
        asset_id, asset_type, mixin_map
      );
      return __false;
    }
    if ( ! mixin_map_map[ asset_type ] ) {
      logIt( '_asset_type_not_supported_', asset_type );
      return;
    }
    // END 4.1.2 Arg checks

    // BEGIN 4.1.3 Set mixin map and timestamp
    if ( mixin_map_map[ asset_type][ asset_id ] ) {
      logIt( '_overwriting_existing_mixin_map_' );
    }
    mixin_map_map[ asset_type ][ asset_id ] = {
      _mixin_map_ : cloneData( mixin_map ),
      _time_ms_   : __timeStamp()
    };
    // END 4.1.3 Set mixin map and timestamp
    // TODO: search all cascade objects to update those affected
    // and run mergeCascadeList if needed.
  }
  // END 4.1 Public method /setMixinMap/

  // BEGIN 4.2 Public method /setVsheetList/
  function setVsheetList ( arg_opt_map ) {
    // BEGIN 4.2.1 Init and arguments
    var
      opt_map     = arg_opt_map                        || {},
      vsheet_id   = opt_map._vsheet_id_                || '_',
      vsheet_list = cloneData( opt_map._vsheet_list_ ) || [],
      mixin_map   = opt_map._mixin_map_,

      vsheet_list_map = topSmap._vsheet_list_map_
      ;
    // BEGIN 4.2.1 Init and arguments

    // BEGIN 4.2.2 Set mixin map if provided
    if ( mixin_map ) {
      setMixinMap({
        _asset_type_ : '_vsheet_',
        _asset_id_   : vsheet_id,
        _mixin_map_  : mixin_map
      });
    }
    // END 4.2.2 Set mixin map if provided

    if ( vsheet_list_map[ vsheet_id ] ) {
      console.warn( '_updating_vsheet_', vsheet_id );
      // TODO: search cascade objs and set the vsheet timestamp
      // to now for each objs that contains this vsheet.
    }
    vsheet_list_map[ vsheet_id ] = vsheet_list;
  }
  // END 4.2 Public method /setVsheetList/


  // BEGIN 4.3 Public method /setCascadeObj/
  function setCascadeObj ( arg_opt_map ) {
    // BEGIN 4.3.1 Init and arguments
    var
      opt_map           = arg_opt_map                         || {},
      cascade_id        = opt_map._cascade_id_                || [],
      cascade_list      = cloneData( opt_map._cascade_list_ ) || [],
      mixin_map         = opt_map._mixin_map_,

      cascade_obj_map = topSmap._cascade_obj_map_,
      style_el_id       = createStyleElId(),
      now_ms            = __timeStamp(),

      result_map, cascade_obj
      ;

    if ( cascade_obj_map[ cascade_id ] ) {
      throw '_cascade_obj_already_exists_' + cascade_id;
    }
    // END 4.3.1 Init and arguments

    // BEGIN 4.3.2 Set mixin map if provided
    if ( mixin_map ) {
      setMixinMap({
        _asset_type_ : '_cascade_',
        _asset_id_   : cascade_id,
        _mixin_map_  : mixin_map
      });
    }
    // END 4.3.2 Set mixin map if provided

    // BEGIN 4.3.3 Create and store cascade object
    result_map = mergeCascadeList( cascade_id, cascade_list );
    cascade_obj = {
      _cascade_id_         : cascade_id,
      _cascade_list_       : cascade_list,
      _merged_vsheet_list_ : result_map._vsheet_list_,
      _merged_mixin_map_   : result_map._mixin_map_,
      _style_el_           : __null,
      _style_el_id_        : style_el_id,
      _time_map_ : {
        _css_ms_    : __0,
        _merged_ms_ : now_ms
      }
    };

    cascade_obj_map[ cascade_id ] = cascade_obj;
    return cascade_obj;
    // END 4.3.3 Create and store cascade object
  }
  // END 4.3 Public method /setCascadeObj/

  // BEGIN 4.4 Public method /enableCascadeObj/
  function enableCascadeObj ( arg_opt_map ) {
    // BEGIN 4.4.1 Init and arguments
    var
      opt_map      = arg_opt_map || {},
      cascade_id   = opt_map._cascade_id_,

      cascade_obj_map = topSmap._cascade_obj_map_,
      style_el_idx    = topSmap._style_el_idx_,
      style_el_prefix = topSmap._style_el_prefix_,

      cascade_obj     = cascade_obj_map[ cascade_id ],

      time_map, last_css_ms, do_rewrite, css_str, style_el,
      i, disable_id, disable_el
      ;

    if ( ! cascade_obj ) {
      throw '_cascade_obj_id_not_found_' + cascade_id;
    }
    // END 4.4.1 Init and arguments

    // BEGIN 4.4.2 Calculate if CSS should be regenerated
    time_map = cascade_obj._time_map_;
    style_el = cascade_obj._style_el_;
    if ( style_el ) {
      // TODO this should always be false if we
      // adjust setMixinMap correctly
      last_css_ms = time_map._css_ms_;
      do_rewrite = ( time_map._merged_ms_ > last_css_ms );
    }
    // END 4.4.2 Calculate if CSS should be regenerated

    // BEGIN 4.4.3 Create new style elment
    else {
      style_el = addStyleEl( cascade_obj._style_el_id_ );
      cascade_obj._style_el_ = style_el;
      do_rewrite = __true;
    }
    // END 4.4.3 Create new style elment

    // BEGIN 4.4.4 Generate and set new CSS if required
    if ( do_rewrite ) {
      css_str = createCssStr(
        cascade_obj._merged_vsheet_list_,
        cascade_obj._merged_mixin_map_
      );
      writeToStyleEl( style_el, css_str );
      time_map._css_ms_ = __timeStamp();
    }
    // END 4.4.4 Generate and set new CSS if required

    // BEGIN 4.4.5 Disable all prior sheets and enable this one
    for ( i = __0; i <= style_el_idx; i++ ) {
      disable_id = style_el_prefix + __String( i );
      disable_el = __docRef[ vMap._getElById_ ]( disable_id );
      if ( disable_el ) {
        disable_el[ vMap._sheet_ ][ vMap._disabled_ ] = __true;
      }
    }
    style_el[ vMap._sheet_ ][ vMap._disabled_ ] = __false;
    // BEGIN 4.4.5 Disable all prior sheets and enable this one
  }
  // END 4.4 Public method /enableCascadeObj/

  // BEGIN 4.5 Public method /initModule/
  function initModule ( arg_opt_map ) {
    var opt_map = arg_opt_map || {};
    topSmap._style_el_prefix_ = ( !! opt_map._style_el_prefix_ )
      ? opt_map._style_el_prefix_ + '-' : 'pcss-';
  }
  // END 4.5 Public method /initModule/

  return {
    _initModule_       : initModule,

    _setVsheetList_    : initCheck.bind( setVsheetList    ),
    _setMixinMap_      : initCheck.bind( setMixinMap      ),
    _setCascadeObj_    : initCheck.bind( setCascadeObj    ),
    _enableCascadeObj_ : initCheck.bind( enableCascadeObj )
  };
}());
// END pcss
