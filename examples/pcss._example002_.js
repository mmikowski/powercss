/* pss._example002_.js
 * Second of run-time generated and managed CSS
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

// BEGIN pcss._example002_
pcss._example002_ = function () {
  var
    base_vsheet_list,
    box_vsheet_list,
    box_rule_map,
    metasheet_obj,
    box_switch_el,
    onclick_fn
    ;

  pcss._initModule_();

  // Begin add _base_css_ vsheet
  base_vsheet_list = [
    { _select_str_  : 'body',
      _rule_map_     : {
        _display_    : '_block_',
        _box_sizing_ : '_border_box_',
        _padding_    : '_2rem_',
        _margin_     : '_0_',
        _font_family_: '_font_sans_',
        _font_size_  : [ '16px' ]
      }
    },
    { _select_str_ : 'input',
      _rule_map_ : {
        _margin_        : [ '.5rem' ],
        _width_         : [ '10rem' ],
        _border_        : [ '.125rem solid #ddd' ],
        _border_radius_ : [ '.5rem' ],
        _outline_       : '_none_',
        _padding_       : [ '.5rem' ],
        _background_    : [ '#888' ],
        _font_size_     : '_1rem_',
        _color_         : '_xddd_'
      }
    },
    {
      _select_str_ : 'input:focus',
      _rule_map_   : {
        _border_color_ : '_xfff_',
        _background_   : [ '#444' ],
        _color_        : '_xfff_'
      }
    }
  ];

  pcss._setVsheetList_({
    _vsheet_id_   : '_base_css_',
    _vsheet_list_ : base_vsheet_list
  });
  // End add _base_css_ vsheet

  // Begin add _box_css_ vsheet
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
        _font_size_      : [ '24px' ],
        _font_weight_    : '_800_',
        _color_          : '_xfff_',
        _text_align_     : '_center_'
      }
    }
  ];

  pcss._setVsheetList_({
    _vsheet_id_   : '_box_css_',
    _vsheet_list_ : box_vsheet_list
  });
  // End add _box_css_ vsheet

  // Begin add _box2_css_ vsheet
  box_rule_map = box_vsheet_list[ 0 ]._rule_map_;
  box_rule_map._display_    = '_block_';
  box_rule_map._width_      = undefined;
  box_rule_map._font_size_  = [ '32px' ];
  box_rule_map._box_shadow_ = [ 'rgba( 64, 32, 32, .5) 0 0 .5rem 0' ];
  box_rule_map._background_ = {
    _alt_list_ : [
      [ '#4f9831' ],
      [ '-moz-linear-gradient(left, #4f9831 0%, #eee 100%)' ],
      [ '-webkit-linear-gradient(left, #4f9831 0%, #eee 100%)' ],
      [ 'linear-gradient(to bottom, #4f9831 0%, #eee 100%)' ]
    ]
  };
  box_vsheet_list.push({
    _select_str_ : '.pcss-_box_ input',
    _rule_map_ : { _background_ : [ '#884' ] }
  });
  box_vsheet_list.push({
    _select_str_ : '.pcss-_box_ input:focus',
    _rule_map_ : { _background_ : [ '#442' ] }
  });

  box_vsheet_list.push({
    _select_str_ : '#pcss-_box_switch_',
    _rule_map_ : {
      _position_ : '_absolute_',
      _z_index_ : '_1_',
      _top_ : '_0_',
      _right_ : '_0_',
      _box_shadow_ : box_rule_map._box_shadow_,
      _border_width_ : [ '0 0 0.125rem 0.125rem' ],
      _border_style_ : [ 'solid' ],
      _border_color_ : [ '#aaa' ],
      _padding_      : '_1rem_',
      _background_ : '_xeee_'
    }
  });

  pcss._setVsheetList_({
    _vsheet_id_   : '_box2_css_',
    _vsheet_list_ : box_vsheet_list
  });
  // End add _box2_css_ vsheet

  pcss._setMetasheetObj_({
    _cascade_list_ : [ '_base_css_', '_box_css_' ],
    _metasheet_id_ : '_example001_'
  });

  pcss._setMetasheetObj_({
    _cascade_list_ : [ '_base_css_', '_box2_css_' ],
    _metasheet_id_ : '_example002_'
  });

  onclick_fn = function ( event ) {
    var
      hash_str = event.target.hash,
      metasheet_id;

    event.preventDefault();
    event.stopPropagation();

    switch( hash_str ) {
      case '#one':
        metasheet_id = '_example001_';
        break;
      case '#two':
        metasheet_id = '_example002_';
        break;
      default:
        return false;
    }
    pcss._enableMetasheetObj_({ _metasheet_id_ : metasheet_id });
    console.log( 'metasheet_obj', JSON.stringify( metasheet_obj ) );

  };

  box_switch_el = document.getElementById( 'pcss-_box_switch_' );
  box_switch_el.addEventListener( 'click', onclick_fn );

};
// END pcss._example002_
