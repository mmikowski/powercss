/* pss._home_.js
 * PowerCSS - run-time generated and managed CSS
 * Homepage CSS
 * Michael S. Mikowski - mike.mikowski@gmail.com
*/
/*jslint        browser : true, continue : true,
  devel : true,  indent : 2,      maxerr : 50,
  newcap : true,  nomen : true, plusplus : true,
  regexp : true, sloppy : true,     vars : false,
  white : true,    todo : true,  unparam : true
*/
/*global pcss, jQuery */

/*  I. Recommended units: rem and %.
 * II. Recommended order: Outside-In
 *    1. display, visibility, opacity, z-index
 *    2. box-sizing, position, floats, clear
 *    3. top, right, bottom, left and vertical-align
 *    4. margin defs, box-shadow
 *    5. border, border-radius
 *    6. height, width
 *    7. padding, overflow, cursor
 *    8. background, text-align, white-space,
 *    9. content defs - font-size, line-height, font, color everything else
 *    -- break --
 *    10. transition or animation definitions
*/

// BEGIN pcss._home_
pcss._home_ = (function ( $ ) {
  'use strict';
  var
    topCmap = {
      _palette_list_ : [
        { _palette_name_  : 'Autumn I',
         _hex_shadow_  : '#6d7696',
         _hex_font_    : '#59484f',
         _hex_mid_     : '#455c4f',
         _hex_gradtop_ : '#cc5543',
         _hex_gradbtm_ : '#edb579',
         _hex_bkgd_    : '#dbe6af'
        },
        { _palette_name_  : 'Autumn II',
         _hex_shadow_  : '#d1cec5',
         _hex_font_    : '#997c67',
         _hex_mid_     : '#755330',
         _hex_gradtop_ : '#b0703c',
         _hex_gradbtm_ : '#dba72e',
         _hex_bkgd_    : '#e3cca1'
        },
        { _palette_name_  : 'Tomato',
         _hex_shadow_  : '#4a572c',
         _hex_font_    : '#803018',
         _hex_mid_     : '#c2c290',
         _hex_gradtop_ : '#e87f60',
         _hex_gradbtm_ : '#e34819',
         _hex_bkgd_    : '#d6cfc9'
        },
        { _palette_name_  : 'Canyon',
         _hex_shadow_  : '#8a6e64',
         _hex_font_    : '#6e352c',
         _hex_mid_     : '#f59a44',
         _hex_gradtop_ : '#cf5230',
         _hex_gradbtm_ : '#6e612f',
         _hex_bkgd_    : '#e3c598'
        },
        { _palette_name_  : 'Basket',
         _hex_shadow_  : '#e6e2df',
         _hex_font_    : '#b2e3e8',
         _hex_mid_     : '#8f8172',
         _hex_gradtop_ : '#966c5d',
         _hex_gradbtm_ : '#ccb8d1',
         _hex_bkgd_    : '#452b29'
        },
        { _palette_name_  : 'Fresh',
         _hex_shadow_  : '#d9d9d9',
         _hex_font_    : '#f5b3b4',
         _hex_mid_     : '#d15656',
         _hex_gradtop_ : '#94353c',
         _hex_gradbtm_ : '#47322d',
         _hex_bkgd_    : '#996b42'
        },
        { _palette_name_  : 'Mineral',
         _hex_shadow_  : '#694364',
         _hex_font_    : '#b58bab',
         _hex_mid_     : '#e3d1e2',
         _hex_gradtop_ : '#e8e4e1',
         _hex_gradbtm_ : '#c4c4c0',
         _hex_bkgd_    : '#cca772'
        },
        { _palette_name_  : 'Spice I',
         _hex_shadow_  : '#ebe3d9',
         _hex_font_    : '#e0cdaf',
         _hex_mid_     : '#c2bc74',
         _hex_gradtop_ : '#6e615a',
         _hex_gradbtm_ : '#807e82',
         _hex_bkgd_    : '#b8b8b8'
        },
        { _palette_name_  : 'Spice III',
         _hex_shadow_  : '#f7efd4',
         _hex_font_    : '#faddaf',
         _hex_mid_     : '#eb712f',
         _hex_gradtop_ : '#91371b',
         _hex_gradbtm_ : '#472c25',
         _hex_bkgd_    : '#d4c2b2'
        },
        { _palette_name_  : 'Chili',
         _hex_shadow_  : '#283811',
         _hex_font_    : '#66492f',
         _hex_mid_     : '#b8997f',
         _hex_gradtop_ : '#a68887',
         _hex_gradbtm_ : '#d94330',
         _hex_bkgd_    : '#5c0811'
        }
      ],
      _global_mixin_map_ : {
        _global_d25_box_shadow_ : [[
          ['rgba( 0, 0, 0, .5)'], '_0_', '_0_', '_d25rem_', '_0_'
        ]],
        _global_d5_box_shadow_  : [[
          ['rgba( 64, 32, 32, .5)'], '_0_', '_0_', '_d5rem_', '_0_'
        ]],
        _global_linear_grad_ : [[
          [ 'linear-gradient(to bottom,' ],
         '_hex_gradtop_', [ '0%,'],'_hex_gradbtm_', '_100p_', [')']
        ]]
      },
      _base_selector_list_ : [
        { _selector_str_ : 'html',
          _rule_map_ : {
            _font_size_ : '_base_body_font_size_'
          }
        },
        { _selector_str_  : 'body',
          _rule_map_ : {
            _display_     : '_block_',
            _margin_      : '_0_',
            _background_  : '_hex_bkgd_',
            _font_family_ : '_font_sans_',
            _line_height_ : '_1d25rem_',
            _color_       : '_hex_font_',
            _overflow_x_  : '_hidden_'
          }
        },
        { _selector_str_ : 'input',
          _rule_map_ : {
            _margin_        : '_d5rem_',
            _width_         : '_base_input_width_',
            _border_        : '_base_input_border_',
            _border_radius_ : '_d5rem_',
            _outline_       : '_none_',
            _padding_       : '_d5rem_',
            _background_    : '_x888_',
            _font_size_     : '_1rem_',
            _color_         : '_xddd_'
          }
        },
        { _selector_str_ : 'input:focus',
          _rule_map_ : {
            _border_color_ : '_xfff_',
            _background_   : '_x444_',
            _color_        : '_xfff_'
          }
        },
        { _selector_str_ : '.pcss-_content_',
          _rule_map_ : {
            _position_    : '_relative_',
            _padding_     : [[ '_2d5rem_', '_2rem_' ]],
            _max_width_   : [ '72rem' ],
            _margin_      : [[ '_0_', '_auto_' ]],
            _box_shadow_  : '_global_d5_box_shadow_'
          }
        },
        { _selector_str_ : '.pcss-_logo_',
          _rule_map_ : {
            _background_image_ : [ 'url(img/pcss_25percent.png)' ],
            _background_size_ : '_cover_',
            _width_  : [ '20.75rem' ],
            _height_ : [ '10.125rem' ]
          }
        },
        { _selector_str_ : 'li',
          _rule_map_ : { _margin_bottom_ : '_d25rem_' }
        },
        { _selector_str_ : '.pcss-_x_clear_',
          _rule_map_ : { _clear_ : '_both_' }
        }
      ],
      _base_mixin_map_ : {
        _base_body_font_size_  : '16px',
        _base_input_width_     : '10rem',
        _base_input_border_    : [[ '_d125rem_','_solid_','_xddd_' ]]
      },
      _box_selector_list_ : [
        { _selector_str_ : 'h2',
          _rule_lock_list_ : [ '_font_size_' ],
          _rule_map_ : {
            _display_       : '_block_',
            _opacity_        : '_1_',
            _position_       : '_relative_',
            _margin_         : [[ '_2rem_', '_0_', '_0_', [ '-3rem' ] ]],
            _width_          : [ '16rem' ],
            _height_         : '_3rem_',
            _vertical_align_ : '_top_',
            _box_shadow_     : '_global_d25_box_shadow_',
            _border_         : [[ '_0_', '_solid_', '_xeee_' ]],
            _border_radius_  : [[ '_0_', '_1rem_', '_1rem_', '_0_' ]],
            _line_height_    : '_3rem_',
            _background_     : '_global_linear_grad_',
            _font_size_      : '_1d5rem_',
            _font_weight_    : '_800_',
            _color_          : '_xfff_',
            _text_align_     : '_center_'
          }
        }
      ],
      _head_selector_list_ : [
        { _selector_str_ : '#pcss-_head_',
          _rule_map_   : {
            _display_       : '_block_',
            _position_      : '_fixed_',
            _z_index_       : '_1_',
            _top_           : '_0_',
            _left_          : '_0_',
            _right_         : '_0_',
            _height_        : '_2rem_',
            _box_shadow_    : '_global_d5_box_shadow_',
            _padding_       : '_0_',
            _background_    :'_hex_gradbtm_'
          }
        },
        { _selector_str_ : '.pcss-_head_float_',
          _rule_map_ : {
            _position_      : '_relative_',
            _float_         : '_right_',
            _margin_        : [[ '_0_', '_d25rem_' ]],
            _padding_       : [[ '_0_', '_d75rem_', '_d75rem_' ]],
            _height_        : '_1d25rem_',
            _line_height_   : '_2rem_',
            _overflow_      : '_hidden_',
            _cursor_        : '_pointer_',
            _transition_    : [ 'all .5s ease' ]
          }
        },
        { _selector_str_ : '.pcss-_head_float_:first-child',
          _rule_map_     : {_margin_right_ : '_d5rem_'}
        },
        { _selector_str_ : '.pcss-_head_float_.pcss-_x_active_',
          _rule_map_ : {
            _height_        : '_auto_',
            _box_shadow_    : '_global_d5_box_shadow_',
            _border_radius_ : [[ '_0_', '_0_', '_d5rem_', '_d5rem_' ]],
            _background_    : '_xfff_'
          }
        },
        { _selector_str_ : '.pcss-_head_float_ > div',
          _rule_map_     : { _padding_ : [['_0_','_d5rem_']] }
        },
        { _selector_str_ : '.pcss-_head_float_ > div:first-child',
          _rule_map_     : { _font_weight_ : '_800_' }
        },
        { _selector_str_ : '.pcss-_head_float_ > div.pcss-_x_select_',
          _rule_map_ : {
            _background_ :'_hex_bkgd_',
            _color_      : '_xfff_'
          }
        }
      ]
    },

    topSmap = {
      _cascade_idx_ : 0,
      _palette_idx_ : 0
    },
    jqueryMap = {}
    ;

  // Begin setJqueryMap
  function setJqueryMap () {
    var
      $head = $( '#pcss-_head_' ),
      $head_float_list = $head.find( '.pcss-_head_float_'  )
      ;

    jqueryMap = {
      _$head_            : $head,
      _$head_float_list_ : $head_float_list,
      _$head_cascade_    : $head_float_list.eq(0),
      _$head_palette_    : $head_float_list.eq(1)
    };
  }
  // End setJqueryMap

  // Begin setStyle
  function setStyle () {
    var
      box_selector_list = topCmap._box_selector_list_,
      box_rule_map
      ;

    // Set global mixin map
    pcss._setGlobalMixinMap_({
      _mixin_map_ : topCmap._global_mixin_map_
    });

    // Add _base_ vsheet
    pcss._setVsheet_({
      _vsheet_id_     : '_base_',
      _mode_str_      : '_add_',
      _selector_list_ : topCmap._base_selector_list_,
      _mixin_map_     : topCmap._base_mixin_map_
    });

    // Add _box01_ vsheet
    pcss._setVsheet_({
      _vsheet_id_     : '_box01_',
      _mode_str_      : '_add_',
      _selector_list_ : box_selector_list
    });

    // Begin add _box02_ vsheet by *revising* box_selector_list
    box_rule_map = box_selector_list[ 0 ]._rule_map_;
    pcss._extendRuleMap_( box_rule_map, {
      _left_       : '_50p_',
      _margin_     : [[ '_2rem_', '_0_', '_d5rem_', [ '-8rem' ] ]],
      _font_size_  : '_2rem_',
      _box_shadow_ : '_global_d5_box_shadow_',
      _border_radius_ : '_d5rem_',
      _border_width_ : '_d5rem_',
      _background_ : '_global_linear_grad_'
    });

    pcss._setVsheet_({
      _vsheet_id_     : '_box02_',
      _mode_str_      : '_add_',
      _selector_list_ : box_selector_list
    });
    // End add _box02_ vsheet by *revising* box_selector_list

    // Begin add _box03_ vsheet by *revising* box_selector_list
    pcss._extendRuleMap_( box_rule_map, {
      _width_         : [ '18rem' ],
      _left_          : '_100p_',
      _margin_        : [[ '_2rem_', '_0_', '_d5rem_', [ '-16rem' ] ]],
      _max_width_     : null,
      _box_shadow_    : '_global_d25_box_shadow_',
      _border_width_  : '_1rem_',
      _border_radius_ : '_0_',
      _font_family_   : '_font_fixed_',
      _font_size_     : '_1d75rem_',
      _background_    : '_global_linear_grad_'
    });

    pcss._setVsheet_({
      _vsheet_id_     : '_box03_',
      _mode_str_      : '_add_',
      _selector_list_ : box_selector_list
    });
    // End add _box03_ vsheet by *revising* box_selector_list

    // Add _head_ vsheet
    pcss._setVsheet_({
      _vsheet_id_     : '_head_',
      _mode_str_      : '_add_',
      _selector_list_ : topCmap._head_selector_list_
    });

    // Begin Create cascades to toggle
    pcss._setCascade_({
      _cascade_id_     : '_c01_',
      _mode_str_       : '_add_',
      _vsheet_id_list_ : [ '_base_', '_head_', '_box01_' ]
    });

    pcss._setCascade_({
      _cascade_id_     : '_c02_',
      _mode_str_       : '_add_',
      _vsheet_id_list_ : [ '_base_', '_head_', '_box02_' ]
    });

    pcss._setCascade_({
      _cascade_id_     : '_c03_',
      _mode_str_       : '_add_',
      _vsheet_id_list_ : [ '_base_', '_head_', '_box03_' ]
    });
    // End Create cascades to toggle

    topSmap._cascade_id_list_ = pcss._getAssetIdList_( {
      '_asset_type_' : '_cascade_'
    });
  }
  // End setStyle

  // Begin drawCascadeSelect
  function drawCascadeSelect () {
    var
      div_list = [],

      i, cascade_name, cascade_html
      ;

    for ( i = -1; i < 3; i++ ) {
      cascade_name = ( i < 0 )
        ? 'Cascade' : 'cascade ' + String( i );
      div_list[ i + 1 ] = '<div>' + cascade_name + '</div>';
    }
    cascade_html = div_list.join( '' );
    jqueryMap._$head_cascade_.html( cascade_html );

  }
  // End drawCascadeSelect

  // Begin drawPaletteSelect
  function drawPaletteSelect () {
    var
      palette_list  = topCmap._palette_list_,
      palette_count = palette_list.length,
      div_list      = [],

      i, palette_map, palette_name, palette_html
      ;
    for ( i = -1; i < palette_count; i++ ) {
      if ( i < 0 ) {
        palette_name = 'Palette';
      }
      else {
        palette_map  = palette_list[ i ];
        palette_name = palette_map._palette_name_;
      }
      div_list[ i + 1 ] = '<div>' + palette_name + '</div>';
    }
    palette_html = div_list.join( '' );
    jqueryMap._$head_palette_.html( palette_html );
  }
  // End drawPaletteSelect

  // Begin setPaletteIdx
  function setPaletteIdx () {
    var
      base_mixin_map = topCmap._base_mixin_map_,
      palette_list   = topCmap._palette_list_,
      palette_idx    = topSmap._palette_idx_,
      palette_map    = palette_list[ palette_idx],
      $child_list    = jqueryMap._$head_palette_.children()
      ;

    if ( ! palette_map ) { return; }
    $child_list.removeClass( 'pcss-_x_select_' );
    $child_list.eq( palette_idx + 1 ).addClass( 'pcss-_x_select_');

    pcss._extendRuleMap_( base_mixin_map, palette_map );

    pcss._setVsheet_({
      _vsheet_id_  : '_base_',
      _mode_str_   : '_change_',
      _mixin_map_  : base_mixin_map,
      _regen_type_ : '_all_'
    });
  }
  // End setPaletteIdx

  // Begin setCascade
  function setCascade () {
    var
      cascade_idx     = topSmap._cascade_idx_,
      cascade_id_list = topSmap._cascade_id_list_,
      cascade_id      = cascade_id_list[ cascade_idx],
      $child_list     = jqueryMap._$head_cascade_.children()
      ;
    if ( ! cascade_id ) { return; }
    $child_list.removeClass( 'pcss-_x_select_' );
    $child_list.eq( cascade_idx + 1 ).addClass( 'pcss-_x_select_');

    pcss._setCascade_({
      _cascade_id_ : cascade_id,
      _mode_str_   : '_change_',
      _regen_type_ : '_use_'
    });
  }
  // End setCascade

  // Begin onClickHead
  function onClickHead ( event_obj ) {
    var
      target_el  = event_obj.target,
      $target    = $( target_el ),
      target_idx = $target.index(),
      $float_div = $target.closest( '.pcss-_head_float_' ),
      float_idx  = $float_div.index()
      ;

    if ( $float_div.length === 0 ) { return; }

    if ( ! $float_div.hasClass( 'pcss-_x_active_') ) {
      $float_div.addClass( 'pcss-_x_active_' );
      return;
    }

    if ( $target.hasClass( 'pcss-_head_float_') ) {
      return;
    }
    if ( target_idx > 0 ) {
      if ( float_idx === 1 ) {
        topSmap._palette_idx_ = target_idx - 1;
        setPaletteIdx();
      }
      else {
        topSmap._cascade_idx_ = target_idx - 1;
        setCascade();
      }
    }
    setTimeout( function () {
      $float_div.removeClass( 'pcss-_x_active_' );
    }, 250 );
  }
  // End onClickHead

  // Begin initModule
  function initModule () {
    pcss._initModule_();

    setJqueryMap();
    setStyle();
    drawCascadeSelect();
    drawPaletteSelect();

    setPaletteIdx();
    setCascade();

    jqueryMap._$head_.on( 'click', onClickHead );
  }
  // End initModule

  return {
    _initModule_ : initModule
  };
}( jQuery ));
// END pcss._home_

/** Color palettes thanks to:
 * DuoParadigms Public Relations & Design, Inc.
 * http://www.duoparadigms.com/2013/10/11/10-color-palettes-perfect-autumnfall-season/
 * 10 Color Palettes (and HEX Codes) Perfect for the Autumn/Fall Season
 * Posted by Aaress Lawless | Tags: Graphic Design
 * Call Us: 832-387-4693
*/

