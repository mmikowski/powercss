/* pss._ex005_.js
 * Example 005 of run-time generated and managed CSS
 * PowerCSS auto update of changes
 * Michael S. Mikowski - mike.mikowski@gmail.com
*/
/*jslint        browser : true, continue : true,
  devel : true,  indent : 2,      maxerr : 50,
  newcap : true,  nomen : true, plusplus : true,
  regexp : true, sloppy : true,     vars : false,
  white : true,    todo : true,  unparam : true
*/
/*global pcss */

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

// BEGIN pcss._ex005_
pcss._ex005_ = function ( display_html ) {
  var
    palette_list,         palette_idx,
    global_mixin_map,     base_mixin_map,
    base_selector_list,   box_selector_list,
    switch_selector_list, box_rule_map,
    switch_el,            link_list,
    onclick_fn
    ;

  pcss._initModule_();

  palette_list = [
    { _palette_name_   : 'Autumn I',
      _color_shadow_   : '#455c4f',
      _color_font_     : '#59484f',
      _color_mid_      : '#6d7696',
      _color_gradtop_  : '#cc5543',
      _color_gradbtm_  : '#edb579',
      _color_bkgd_     : '#dbe6af'
    },
    { _palette_name_  : 'Autumn II',
      _color_shadow_  : '#d1cec5',
      _color_font_    : '#997c67',
      _color_mid_     : '#755330',
      _color_gradtop_ : '#b0703c',
      _color_gradbtm_ : '#dba72e',
      _color_bkgd_    : '#e3cca1'
    },
    { _palette_name_  : 'Tomato',
      _color_shadow_  : '#4a572c',
      _color_font_    : '#803018',
      _color_mid_     : '#c2c290',
      _color_gradtop_ : '#e87f60',
      _color_gradbtm_ : '#e34819',
      _color_bkgd_    : '#d6cfc9'
    },
    { _palette_name_  : 'Canyon',
      _color_shadow_  : '#8a6e64',
      _color_font_    : '#6e352c',
      _color_mid_     : '#f59a44',
      _color_gradtop_ : '#cf5230',
      _color_gradbtm_ : '#6e612f',
      _color_bkgd_    : '#e3c598'
    },
    { _palette_name_  : 'Basket',
      _color_shadow_  : '#e6e2df',
      _color_font_    : '#b2e3e8',
      _color_mid_     : '#452b29',
      _color_gradtop_ : '#966c5d',
      _color_gradbtm_ : '#ccb8d1',
      _color_bkgd_    : '#8f8172'
    },
    { _palette_name_  : 'Fresh',
      _color_shadow_  : '#d9d9d9',
      _color_font_    : '#f5b3b4',
      _color_mid_     : '#d15656',
      _color_gradtop_ : '#94353c',
      _color_gradbtm_ : '#47322d',
      _color_bkgd_    : '#996b42'
    },
    { _palette_name_  : 'Mineral',
      _color_shadow_  : '#b58bab',
      _color_font_    : '#694364',
      _color_mid_     : '#e3d1e2',
      _color_gradtop_ : '#cca772',
      _color_gradbtm_ : '#c4c4c0',
      _color_bkgd_    : '#e8e4e1'
    },
    { _palette_name_  : 'Spice I',
      _color_shadow_  : '#c2bc74',
      _color_font_    : '#6e615a',
      _color_mid_     : '#b8b8b8',
      _color_gradtop_ : '#e0cdaf',
      _color_gradbtm_ : '#807e82',
      _color_bkgd_    : '#ebe3d9'
    },
    { _palette_name_  : 'Spice III',
      _color_shadow_  : '#f7efd4',
      _color_font_    : '#eb712f',
      _color_mid_     : '#faddaf',
      _color_gradtop_ : '#91371b',
      _color_gradbtm_ : '#472c25',
      _color_bkgd_    : '#d4c2b2'
    },
    { _palette_name_  : 'Chili',
      _color_shadow_  : '#283811',
      _color_font_    : '#5c0811',
      _color_mid_     : '#d94330',
      _color_gradtop_ : '#a68887',
      _color_gradbtm_ : '#66492f',
      _color_bkgd_    : '#b8997f'
    }
  ];

  palette_idx = 0;

  global_mixin_map = {
    _10rem_ : '10rem',
    _global_d25_box_shadow_ : [[
      ['rgba( 0, 0, 0, .5)'], '_0_', '_0_', '_d25rem_', '_0_'
    ]],
    _global_d5_box_shadow_  : [[
      ['rgba( 64, 32, 32, .5)'], '_0_', '_0_', '_d5rem_', '_0_'
    ]],
    _global_linear_grad_ : [[
      [ 'linear-gradient(to bottom,' ],
      '_color_gradtop_', [ '0%,'], '_color_gradbtm_', '_100p_', [')']
    ]]
  };

  pcss._setGlobalMixinMap_({
    _mixin_map_ : global_mixin_map
  });

  // Begin add _base_ vsheet
  base_mixin_map = {
    _base_body_font_size_  : '16px',
    _base_input_width_     : '10rem',
    _base_input_border_    : [[ '_d125rem_','_solid_','_color_bkgd_' ]]
  };
  base_selector_list = [
    { _selector_str_  : 'body',
      _rule_map_ : {
        _display_     : '_block_',
        _margin_      : '_0_',
        _padding_     : [[ '_2d5rem_', '_2rem_' ]],
        _background_  : '_color_bkgd_',
        _overflow_y_  : '_scroll_',
        _font_family_ : '_font_sans_',
        _font_size_   : '_base_body_font_size_',
        _color_       : '_color_font_'
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
        _background_    : '_color_mid_',
        _font_size_     : '_1rem_',
        _color_         : '_color_font_'
      }
    },
    { _selector_str_ : 'input:focus',
      _rule_map_     : {
        _border_color_ : '_xfff_',
        _background_   : '_color_bkgd_',
        _color_        : '_xfff_'
      },
    },
    { _selector_str_ : '.pcss-_logo_',
      _rule_map_     : {
        _width_  : [ '20.75rem'  ],
        _height_ : [ '10.125rem' ],
        _background_image_ : [ 'url(http://mmikowski.github.io/'
          + 'images/2016-02-22-pcss.png)' ],
        _background_size_  : '_cover_',
      }
    },
    { _selector_str_ : '#pcss-_head_',
      _rule_map_     : {
        _position_   : '_fixed_',
        _z_index_    : '_1_',
        _top_        : '_0_',
        _left_       : '_0_',
        _right_      : '_0_',
        _height_     : '_2rem_',
        _box_shadow_ : '_global_d5_box_shadow_',
        _padding_    : '_0_',
        _background_ : '_xeee_'
      }
    }
  ];

  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_add_',
    _selector_list_ : base_selector_list,
    _mixin_map_     : base_mixin_map
  });
  // End add _base_ vsheet

  // Begin add _box01_ vsheet
  box_selector_list = [
    { _selector_str_ : '.pcss-_box_',
      _rule_lock_list_ : [ '_font_size_' ],
      _rule_map_ : {
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
      }
    }
  ];

  pcss._setVsheet_({
    _vsheet_id_     : '_box01_',
    _mode_str_      : '_add_',
    _selector_list_ : box_selector_list
  });
  // End add _box01_ vsheet

  // Begin add _box02_ vsheet by *revising* box_selector_list
  box_rule_map = box_selector_list[ 0 ]._rule_map_;
  pcss._extendRuleMap_( box_rule_map, {
    _display_    : '_block_',
    _width_      : null,
    _max_width_  : [ '32rem' ],
    _font_size_  : '_2rem_',
    _box_shadow_ : '_global_d5_box_shadow_',
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
    _display_       : '_inline_block_',
    _width_         : [ '18rem' ],
    _max_width_     : null,
    _box_shadow_    : '_global_d25_box_shadow_',
    _border_width_  : '_1rem_',
    _border_radius_ : '_0_',
    _padding_top_   : '_d5rem_',
    _height_        : '_10rem_',
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

  // Begin add _switch_ vsheet
  switch_selector_list = [
    { _selector_str_ : '#pcss-_switch_',
      _rule_map_   : {
        _position_      : '_fixed_',
        _z_index_       : '_1_',
        _top_           : '_0_',
        _right_         : '_0_',
        _box_shadow_    : box_rule_map._box_shadow_,
        _border_color_  : '_color_bkgd_',
        _border_radius_ : [[ '_0_','_0_','_0_','_1rem_' ]],
        _border_style_  : '_solid_',
        _border_width_  : [[ '_0_', '_0_', '_d125rem_', '_d125rem_' ]],
        _padding_       : '_1rem_',
        _padding_top_   : '_d5rem_',
        _background_    : '_color_mid_',
        _line_height_   : '_1d5rem_'
      }
    },
    { _selector_str_ : '#pcss-_switch_ div',
      _rule_map_ : {
        _margin_        : '_d25rem_',
        _padding_       : '_d25rem_',
        _border_radius_ : '_d25rem_',
        _cursor_        : '_pointer_'
      }
    },
    { _selector_str_ : '#pcss-_switch_ div.pcss-_x_select_',
      _rule_map_ : {
        _background_ : '_color_bkgd_',
        _color_      : '_xfff_'
      }
    }
  ];

  pcss._setVsheet_({
    _vsheet_id_     : '_switch_',
    _mode_str_      : '_add_',
    _selector_list_ : switch_selector_list
  });
  // End add _switch_ vsheet

  // Begin create cascades to toggle
  pcss._setCascade_({
    _cascade_id_     : '_c01_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_base_', '_switch_', '_box01_' ]
  });

  pcss._setCascade_({
    _cascade_id_     : '_c02_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_base_', '_switch_', '_box02_' ]
  });

  pcss._setCascade_({
    _cascade_id_     : '_c03_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_base_', '_switch_', '_box03_' ]
  });
  // End create cascades to toggle

  // Begin onclick handler
  onclick_fn = function ( event_obj ) {
    var
      target_el = event_obj.target,
      cascade_id
      ;

    if ( target_el === switch_el ) { return; }
    if ( target_el === link_list[ 0 ] ) {
      cascade_id = '_c01_';
      link_list[ 0 ].className = 'pcss-_x_select_';
      link_list[ 1 ].className = '';
      link_list[ 2 ].className = '';
    }
    else if ( target_el === link_list[ 1 ] ) {
      cascade_id = '_c02_';
      link_list[ 0 ].className = '';
      link_list[ 1 ].className = 'pcss-_x_select_';
      link_list[ 2 ].className = '';
    }
    else if ( target_el === link_list[ 2 ] ) {
      cascade_id = '_c03_';
      link_list[ 0 ].className = '';
      link_list[ 1 ].className = '';
      link_list[ 2 ].className = 'pcss-_x_select_';
    }
    if ( cascade_id ) {
      pcss._setCascade_({
        _cascade_id_ : cascade_id,
        _mode_str_   : '_change_',
        _regen_type_ : '_use_'
      });
    }
  };
  // End onclick handler

  // Begin init
  function fn_set_palette () {
    if ( palette_idx >= palette_list.length ) {
      palette_idx = 0;
    }
    pcss._extendRuleMap_( base_mixin_map, palette_list[ palette_idx ] );
    pcss._setVsheet_({
      _vsheet_id_  : '_base_',
      _mode_str_   : '_change_',
      _mixin_map_  : base_mixin_map,
      _regen_type_ : '_all_'
    });
    palette_idx++;
  }

  fn_set_palette();
  pcss._setCascade_({
    _cascade_id_ : '_c01_',
    _mode_str_   : '_change_',
    _regen_type_ : '_use_'
  });

  switch_el = document.getElementById( 'pcss-_switch_' );
  link_list = switch_el.getElementsByTagName( 'div' );
  switch_el.addEventListener( 'click', onclick_fn );

  setInterval( fn_set_palette, 5000 );
  // End init
};
// END pcss._ex005_

/** Color palettes thanks to:
 * DuoParadigms Public Relations & Design, Inc.
 * http://www.duoparadigms.com/2013/10/11/10-color-palettes-perfect-autumnfall-season/
 * 10 Color Palettes (and HEX Codes) Perfect for the Autumn/Fall Season
 * Posted by Aaress Lawless | Tags: Graphic Design
 * Call Us: 832-387-4693
*/

