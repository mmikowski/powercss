/* pss._example003_.js
 * Example 003 of run-time generated and managed CSS
 * using PowerCSS - mixins
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
 *    10. css transition or animation definitions
*/

// BEGIN pcss._example003_
pcss._example003_ = function () {
  var
    base_vsheet_list,   base_mixin_map,
    box_vsheet_list,    // box_mixin_map,
    switch_vsheet_list, box_rule_map,       
    switch_el,          link_list,
    onclick_fn
    ;

  pcss._initModule_();

  // Begin add _base_vsheet_
  base_mixin_map = {
    _body_font_size_  : '16px',
    _body_font_color_ : '#f88',
    _input_width_     : '10rem',
    _input_border_    : '.125rem solid #ddd'
  };
  base_vsheet_list = [
    { _select_str_  : 'body',
      _rule_map_     : {
        _display_    : '_block_',
        _box_sizing_ : '_border_box_',
        _margin_     : '_0_',
        _padding_    : '_2rem_',
        _overflow_y_ : '_scroll_',
        _font_family_: '_font_sans_',
        _font_size_  : '_body_font_size_',
        _color_      : '_body_font_color_'
      }
    },
    { _select_str_ : 'input',
      _rule_map_ : {
        _margin_        : '_d5rem_',
        _width_         : '_input_width_',
        _border_        : '_input_border_',
        _border_radius_ : '_d5rem_',
        _outline_       : '_none_',
        _padding_       : '_d5rem_',
        _background_    : '_x888_',
        _font_size_     : '_1rem_',
        _color_         : '_xddd_'
      }
    },
    { _select_str_ : 'input:focus',
      _rule_map_   : {
        _border_color_ : '_xfff_',
        _background_   : '_x444_',
        _color_        : '_xfff_'
      }
    }
  ];

  pcss._setVsheetList_({
    _mixin_map_   : base_mixin_map,
    _vsheet_id_   : '_base_vsheet_',
    _vsheet_list_ : base_vsheet_list
  });
  // End add _base_vsheet_

  // Begin add _box_vsheet_
  box_vsheet_list = [
    { _select_str_ : '.pcss-_box_',
      _rule_lock_list_ : [ '_font_size_' ],
      _rule_map_ : {
        _display_        : '_inline_block_',
        _opacity_        : '_1_',
        _box_sizing_     : '_border_box_',
        _position_       : '_relative_',
        _vertical_align_ : '_top_',
        _margin_         : '_1rem_',
        _box_shadow_     : [ 'rgba( 0, 0, 0, .5) 0 0 .25rem 0' ],
        _border_         : [ '0.25rem solid #eee' ],
        _border_radius_  : '_1rem_',
        _width_          : [ '16rem' ],
        _height_         : [ '8rem' ],
        _padding_top_    : '_1rem_',
        _background_     : {
          _alt_list_ : [
            [ '#f85032' ],
            [ '-moz-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
            [ '-webkit-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
            [ 'linear-gradient(to bottom, #f85032 0%, #6d362d 100%)' ]
          ]
        },
        _font_size_      : '_1d5rem_',
        _font_weight_    : '_800_',
        _color_          : '_xfff_',
        _text_align_     : '_center_'
      }
    }
  ];

  pcss._setVsheetList_({
    _vsheet_id_   : '_box_vsheet_',
    _vsheet_list_ : box_vsheet_list
  });
  // End add _box_vsheet_

  // Begin add _box_alt_vsheet
  box_rule_map = box_vsheet_list[ 0 ]._rule_map_;
  box_rule_map._display_    = '_block_';
  box_rule_map._width_      = undefined;
  box_rule_map._max_width_  = [ '32rem' ];
  box_rule_map._font_size_  = '_2rem_';
  box_rule_map._box_shadow_ = [ 'rgba( 64, 32, 32, .5) 0 0 .5rem 0' ];
  box_rule_map._background_ = {
    _alt_list_ : [
      [ '#4f9831' ],
      [ '-moz-linear-gradient(left, #4f9831 0%, #eee 100%)' ],
      [ '-webkit-linear-gradient(left, #4f9831 0%, #eee 100%)' ],
      [ 'linear-gradient(to bottom, #4f9831 0%, #eee 100%)' ]
    ]
  };
  pcss._setVsheetList_({
    _vsheet_id_   : '_box_alt_vsheet_',
    _vsheet_list_ : box_vsheet_list,
    _mixin_map_   : { _body_font_color_ : '#080' }
  });
  // End add _box_alt_vsheet_

  // Begin add _switch_vsheet_
  switch_vsheet_list = [
    { _select_str_ : '#pcss-_switch_',
      _rule_map_   : {
        _position_      : '_fixed_',
        _z_index_       : '_1_',
        _top_           : '_0_',
        _right_         : '_0_',
        _box_shadow_    : box_rule_map._box_shadow_,
        _border_color_  : '_xaaa_',
        _border_radius_ : [ '0 0 0 1rem' ],
        _border_style_  : '_solid_',
        _border_width_  : [ '0 0 0.125rem 0.125rem' ],
        _padding_       : '_1rem_',
        _padding_top_   : '_d5rem_',
        _background_    : '_xeee_',
        _line_height_   : '_1d5rem_'
      }
    },
    { _select_str_ : '#pcss-_switch_ div',
      _rule_map_ : {
        _margin_ : '_d25rem_',
        _padding_: '_d25rem_',
        _border_radius_ : '_d25rem_',
        _cursor_ : '_pointer_'
      }
    },
    { _select_str_ : '#pcss-_switch_ div.pcss-_x_select_',
      _rule_map_ : {
        _color_  : '_xfff_',
        _background_ : '_x888_'
      }
    }
  ];

  pcss._setVsheetList_({
    _vsheet_id_   : '_switch_vsheet_',
    _vsheet_list_ : switch_vsheet_list
  });
  // End add _switch_vsheet_

  // Begin create cascade objects to toggle
  pcss._setCascadeObj_({
    _cascade_id_ : '_example001_',
    _cascade_list_ : [
      '_base_vsheet_', '_switch_vsheet_', '_box_vsheet_'
    ]
  });

  pcss._setCascadeObj_({
    _cascade_id_ : '_example002_',
    _cascade_list_ : [
      '_base_vsheet_', '_switch_vsheet_', '_box_alt_vsheet_'
    ]
  });

  onclick_fn = function ( event_obj ) {
    var
      target_el = event_obj.target,
      cascade_id
      ;

    if ( target_el === switch_el ) { return; }
    if ( target_el === link_list[ 0 ] ) {
      cascade_id = '_example001_';
      link_list[ 0 ].className = 'pcss-_x_select_';
      link_list[ 1 ].className = '';
    }
    else if ( target_el === link_list[ 1 ] ) {
      cascade_id = '_example002_';
      link_list[ 0 ].className = '';
      link_list[ 1 ].className = 'pcss-_x_select_';
    }
    if ( cascade_id ) {
      pcss._enableCascadeObj_({ _cascade_id_ : cascade_id });
    }
  };

  switch_el = document.getElementById( 'pcss-_switch_' );
  link_list = switch_el.getElementsByTagName( 'div' );
  pcss._enableCascadeObj_({ _cascade_id_ : '_example001_' });
  switch_el.addEventListener( 'click', onclick_fn );
};
// END pcss._example002_
