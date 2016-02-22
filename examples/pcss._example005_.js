/* pss._example005_.js
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

// BEGIN pcss._example005_
pcss._example005_ = function () {
  var
    global_mixin_map,     base_mixin_map,
    base_selector_list,   box_selector_list,
    switch_selector_list, box_rule_map,
    switch_el,            link_list,
    onclick_fn
    ;

  pcss._initModule_();

  global_mixin_map = {
    _global_d25_box_shadow_ : 'rgba( 0, 0, 0, .5) 0 0 .25rem 0',
    _global_d5_box_shadow_  : 'rgba( 64, 32, 32, .5) 0 0 .5rem 0',
    _global_red_grad_map_ : {
      _alt_list_ : [
        [ '#f85032' ],
        [ '-moz-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
        [ '-webkit-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
        [ 'linear-gradient(to bottom, #f85032 0%, #6d362d 100%)' ]
      ]
    },
    _global_green_grad_map_ : {
      _alt_list_ : [
        [ '#4f9831' ],
        [ '-moz-linear-gradient(left, #4f9831 0%, #eee 100%)' ],
        [ '-webkit-linear-gradient(left, #4f9831 0%, #eee 100%)' ],
        [ 'linear-gradient(to bottom, #4f9831 0%, #eee 100%)' ]
      ]
    },
    _global_blue_grad_map_ : {
      _alt_list_ : [
        [ '#314f98' ],
        [ '-moz-linear-gradient(left, #314f98 0%, #eee 100%)' ],
        [ '-webkit-linear-gradient(left, #314f98 0%, #eee 100%)' ],
        [ 'linear-gradient(to bottom, #314f98 0%, #eee 100%)' ]
      ]
    }
  };

  pcss._setGlobalMixinMap_({
    _mixin_map_ : global_mixin_map
  });

  // Begin add _base_vsheet_
  base_mixin_map = {
    _base_body_font_size_  : '16px',
    _base_body_font_color_ : '#a44',
    _base_input_width_     : '10rem',
    _base_input_border_    : [[ '_d125rem_','_solid_','_xddd_' ]]
  };
  base_selector_list = [
    { _selector_str_  : 'body',
      _rule_map_     : {
        _display_    : '_block_',
        _box_sizing_ : '_border_box_',
        _margin_     : '_0_',
        _padding_    : '_1rem_',
        _overflow_y_ : '_scroll_',
        _font_family_: '_font_sans_',
        _font_size_  : '_base_body_font_size_',
        _color_      : '_base_body_font_color_'
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
      _rule_map_   : {
        _border_color_ : '_xfff_',
        _background_   : '_x444_',
        _color_        : '_xfff_'
      }
    }
  ];

  pcss._setVsheet_({
    _vsheet_id_     : '_base_vsheet_',
    _mode_str_      : '_add_',
    _selector_list_ : base_selector_list,
    _mixin_map_     : base_mixin_map
  });
  // End add _base_vsheet_

  // Begin add _box01_vsheet_
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
        _border_         : [[ '_d125rem_','_solid_','_xeee_' ]],
        _border_radius_  : '_1rem_',
        _width_          : [ '16rem' ],
        _height_         : [ '8rem' ],
        _padding_top_    : '_1rem_',
        _background_     : '_global_red_grad_map_',
        _font_size_      : '_1d5rem_',
        _font_weight_    : '_800_',
        _color_          : '_xfff_',
        _text_align_     : '_center_'
      }
    }
  ];

  pcss._setVsheet_({
    _vsheet_id_     : '_box01_vsheet_',
    _mode_str_      : '_add_',
    _selector_list_ : box_selector_list
  });
  // End add _box01_vsheet_

  // Begin add _box02_vsheet by *revising* box_selector_list
  box_rule_map = box_selector_list[ 0 ]._rule_map_;
  box_rule_map._display_    = '_block_';
  box_rule_map._width_      = undefined;
  box_rule_map._max_width_  = [ '32rem' ];
  box_rule_map._font_size_  = '_2rem_';
  box_rule_map._box_shadow_ = '_global_d5_box_shadow_';
  box_rule_map._background_ = '_global_green_grad_map_';

  pcss._setVsheet_({
    _vsheet_id_     : '_box02_vsheet_',
    _mode_str_      : '_add_',
    _selector_list_ : box_selector_list,
    _mixin_map_     : { _base_body_font_color_ : '#080' }
  });
  // End add _box02_vsheet by *revising* box_selector_list

  // Begin add _box03_vsheet by *revising* box_selector_list
  box_rule_map = box_selector_list[ 0 ]._rule_map_;
  box_rule_map._display_       = '_inline_block_';
  box_rule_map._width_         = [ '18rem' ];
  box_rule_map._max_width_     = undefined;
  box_rule_map._box_shadow_    = '_global_d25_box_shadow_';
  box_rule_map._border_width_  = '_1rem_';
  box_rule_map._border_radius_ = '_0_';
  box_rule_map._padding_top_   = '_d5rem_';
  box_rule_map._font_family_   = '_font_fixed_';
  box_rule_map._font_size_     = '_1d75rem_';
  box_rule_map._background_    = '_global_blue_grad_map_';

  pcss._setVsheet_({
    _vsheet_id_     : '_box03_vsheet_',
    _mode_str_      : '_add_',
    _selector_list_ : box_selector_list,
    _mixin_map_     : { _base_body_font_color_ : '#008' }
  });
  // End add _box03_vsheet by *revising* box_selector_list

  // Begin add _switch_vsheet_
  switch_selector_list = [
    { _selector_str_ : '#pcss-_switch_',
      _rule_map_   : {
        _position_      : '_fixed_',
        _z_index_       : '_1_',
        _bottom_        : '_0_',
        _left_          : '_0_',
        _height_        : [ '16rem' ],
        _overflow_y_    : '_scroll_',
        _box_shadow_    : box_rule_map._box_shadow_,
        _border_color_  : '_xaaa_',
        _border_radius_ : [[ '_0_','_1rem_','_0_','_0_' ]],
        _border_style_  : '_solid_',
        _border_width_  : [[ '_d125rem_', '_d125rem_', '_0_', '_0_' ]],
        _padding_       : '_1rem_',
        _padding_top_   : '_d5rem_',
        _background_    : '_xeee_',
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
        _background_ : '_x888_',
        _color_      : '_xfff_'
      }
    }
  ];

  pcss._setVsheet_({
    _vsheet_id_     : '_switch_vsheet_',
    _mode_str_      : '_add_',
    _selector_list_ : switch_selector_list,
    _mixin_map_     : { _base_body_font_color_ : '#008' }
  });
  // End add _switch_vsheet_

  // Begin create cascade objects to toggle
  pcss._setCascade_({
    _cascade_id_     : '_ex01_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_base_vsheet_', '_switch_vsheet_', '_box01_vsheet_' ]
  });

  pcss._setCascade_({
    _cascade_id_ : '_ex02_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_base_vsheet_', '_switch_vsheet_', '_box02_vsheet_' ]
  });

  pcss._setCascade_({
    _cascade_id_ : '_ex03_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_base_vsheet_', '_switch_vsheet_', '_box03_vsheet_' ]
  });
  // End create cascade objects to toggle

  // Begin click handler
  onclick_fn = function ( event_obj ) {
    var
      target_el = event_obj.target,
      cascade_id
      ;

    if ( target_el === switch_el ) { return; }
    if ( target_el === link_list[ 0 ] ) {
      cascade_id = '_ex01_';
      link_list[ 0 ].className = 'pcss-_x_select_';
      link_list[ 1 ].className = '';
      link_list[ 2 ].className = '';
    }
    else if ( target_el === link_list[ 1 ] ) {
      cascade_id = '_ex02_';
      link_list[ 0 ].className = '';
      link_list[ 1 ].className = 'pcss-_x_select_';
      link_list[ 2 ].className = '';
    }
    else if ( target_el === link_list[ 2 ] ) {
      cascade_id = '_ex03_';
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
  // End click handler

  // Begin initialization
  switch_el = document.getElementById( 'pcss-_switch_' );
  link_list = switch_el.getElementsByTagName( 'div' );
  pcss._setCascade_({
    _cascade_id_ : '_ex01_',
    _mode_str_   : '_change_',
    _regen_type_ : '_use_'
  });
  switch_el.addEventListener( 'click', onclick_fn );
  // End initialization
};
// END pcss._example005_



/*
 * Call Us: 832-387-4693
 * DuoParadigms Public Relations & Design, Inc.
 * http://www.duoparadigms.com/2013/10/11/10-color-palettes-perfect-autumnfall-season/
 * 10 Color Palettes (and HEX Codes) Perfect for the Autumn/Fall Season
 * Posted by Aaress Lawless | Tags: Graphic Design
   
AutumnPalette  
#6d7696
#59484f
#455c4f
#cc5543
#edb579
#dbe6af

tomato_tones  
#d6cfc9
#c2c290
#4a572c
#803018
#e34819
#e87f60

canyon color  
#6e352c
#cf5230
#f59a44
#e3c598
#8a6e64
#6e612f

autumn tones  
#d1cec5
#997c67
#755330
#b0703c
#dba72e
#e3cca1

ColorBasket  
#e6e2df
#b2e3e8
#ccb8d1
#966c5d
#452b29
#8f8172

color_fresh  
#d9d9d9
#f5b3b4
#d15656
#94353c
#47322d
#996b42

MineralTones_2  
#694364
#b58bab
#e3d1e2
#e8e4e1
#c4c4c0
#cca772

AutumnSpice  
#ebe3d9
#e0cdaf
#c2bc74
#6e615a
#807e82
#b8b8b8

chili color  
#283811
#66492f
#b8997f
#a68887
#d94330
#5c0811

SpicedPalette_3  
#f7efd4
#faddaf
#eb712f
#91371b
#472c25
#d4c2b2

*/
