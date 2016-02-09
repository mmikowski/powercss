/* pss._exampleBasic_.js
 * Basic example of run-time generated and managed CSS
 * Michael S. Mikowski - mike.mikowski@gmail.com
 */
/*jslint       browser : true, continue : true,
 devel : true,  indent : 2,      maxerr : 50,
 newcap : true,  nomen : true, plusplus : true,
 regexp : true, sloppy : true,     vars : false,
 white : true,    todo : true,  unparam : true
 */
/*global pcss*/

// BEGIN pcss._exampleBasic_
pcss._exampleBasic_ = function () {
  var
    base_vsheet_list,
    box_vsheet_list,
    sheet_obj_idx
    ;

  // Begin add _base_css_ VSheet
  base_vsheet_list = [
    { _select_str_  : '*',
      _rule_map_     : {
        _box_sizing_ : '_border_box_',
        _display_    : '_block_',
        _float_      : '_none_',
        _font_size_  : '16px',
        _margin_     : '_0_',
        _padding_    : '_0_'
      }
    },
    { _select_str_ : 'input',
      _rule_map_ : {
        _border_     : '2px solid #ccc',
        _background_ : 'yellow'
      }
    }
  ];
  pcss._addVSheetList_( '_base_css_', base_vsheet_list );
  // End add _base_css_ VSheet

  // Begin add _box_css_ VSheet
  box_vsheet_list = [
    { _select_str_ : '.pcss-_box_',
      _rule_map_ : {
        _background_    : [
          '#f85032',
          '-moz-linear-gradient(left, #f85032 0%, #3b2c2b 100%)',
          '-webkit-linear-gradient(left, #f85032 0%, #3b2c2b 100%)',
          'linear-gradient(to right, #f85032 0%, #3b2c2b 100%)'
        ],
        _border_        : '0.125rem solid #aaa',
        _display_       : '_block_',
        _font_size_     : { _do_lock_ : '_true_', _val_data_ : '16px' },
        _margin_        : '1rem',
        _opacity_       : '_1_',
        _position_      : '_absolute_',
        _padding_       : '5rem',
        _text_align_    : '_center_',
        _transition_    : 'opacity .3s ease',
        _z_index_       : '_5_'
      }
    }
  ];
  pcss._addVSheetList_( '_box_css_', box_vsheet_list );
  // End add _box_css_ VSheet

  sheet_obj = pcss._addSheetObj_({
    _cascade_list_   : [ '_base_css_', '_box_css_' ],
    _sheet_obj_name_ : '_example_'
  });

  pcss._enableSheetObj_( '_example_' );
};
// END pcss._exampleBasic_
