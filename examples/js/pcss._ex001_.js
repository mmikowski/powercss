/* pss._ex001_.js
 * Example 001 of run-time generated and managed CSS
 * using PowerCSS - the basics
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

// BEGIN pcss._ex001_
pcss._ex001_ = function () {
  var
    base_selector_list,
    box_selector_list
    ;

  pcss._initModule_();

  // Begin add _base_ vsheet
  base_selector_list = [
    { _selector_str_  : 'body',
      _rule_map_     : {
        _display_    : '_block_',
        _box_sizing_ : '_border_box_',
        _margin_     : '_0_',
        _padding_    : '_2rem_',
        _background_ : '_xddd_',
        _font_family_: '_font_sans_',
        _font_size_  : [ '16px' ],
        _color_      : '_x888_'
      }
    },
    { _selector_str_ : 'input',
      _rule_map_ : {
        _margin_        : '_d5rem_',
        _width_         : [ '10rem' ],
        _border_        : [[ '_d125rem_', '_solid_', '_xddd_' ]],
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
    },
    { _selector_str_ : '.pcss-_logo_',
      _rule_map_     : {
        _background_image_ : [
          'url(http://mmikowski.github.io/images/2016-02-22-pcss.png)'
        ],
        _background_size_ : '_cover_',
        _width_  : [ '20.75rem' ],
        _height_ : [ '10.125rem' ]
      }
    }
  ];

  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_add_',
    _selector_list_ : base_selector_list
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
        _box_shadow_     : [[ 
          [ 'rgba( 0, 0, 0, .5)' ], '_0_', '_0_', '_d25rem_', '_0_'
        ]],
        _border_         : [[ '_d25rem_', '_solid_', '_xeee_' ]],
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

  pcss._setVsheet_({
    _vsheet_id_     : '_box01_',
    _mode_str_      : '_add_',
    _selector_list_ : box_selector_list
  });
  // End add _box01_ vsheet

  // Begin add and use _c01_ cascade
  pcss._setCascade_({
    _cascade_id_     : '_c01_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_base_', '_box01_' ],
    _regen_type_     : '_use_'
  });
  // End add and use _c01_ cascade
};
// END pcss._ex001_
