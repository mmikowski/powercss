/*
 * pss._home_.js
 * PowerCSS - run-time generated and managed CSS
*/
/*jslint         browser : true, continue : true,
  devel  : true,  indent : 2,      maxerr : 50,
  newcap : true,   nomen : true, plusplus : true,
  regexp : true,  sloppy : true,     vars : false,
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

pcss._home_ = (function ( $ ) {
  // ================= BEGIN MODULE SCOPE VARIABLES ====================
  'use strict';
  var
    __null  = null,
    __blank = '',
    __0     = 0,
    __1     = 1,

    topSmap = {
      _cascade_id_      : '_c01_',
      _cascade_id_list_ : [],
      _palette_idx_     : __0,
      _palette_map_     : {}
    },
    jqueryMap = {},

    topCmap = {
      _font_list_list_ : [
        [ 'fa-4-5-mod-msm',    'font/'                  ],
        [ 'Sansation-Regular', 'font/vendor/Sansation/' ]
      ],

      _font_src_tmplt_ : "url('%!%_font_path_%!%.eot?iefix=1')"
        + " format('embedded-opentype'),"
        + "url('%!%_font_path_%!%.woff') format('woff'),"
        + "url('%!%_font_path_%!%.ttf') format('truetype'),"
        + "url('%!%_font_path_%!%.svg') format('svg')",

      _global_mixin_map_ : {
        _logo_url_     : 'url(img/pcss-25p-lt.png)',
        _shadow_d1875_ : [[
          '_hex_shadow_', '_0_', '_0_', '_d125rem_', '_d0625rem_'
        ]],
        _shadow_d625_  : [[
          '_hex_shadow_', '_0_', '_0_', '_d5rem_', '_0_'
        ]],
        _font_family_awesome_   : 'fa-4-5-mod-msm, sans-serif',
        _font_family_arial_     : 'arial, helvetica, sans-serif',
        _font_family_sansation_ : 'sansation-regular, sans-serif',
        _font_size_             : '16px',
        _trans_short_           : 'all .2s ease',
        _trans_mid_             : 'all .4s ease',
        _trans_long_            : 'all .5s ease',
        _linear_grad_01_        : [[
          [ 'linear-gradient(to bottom,' ],
         '_hex_gradtop_', [ '0%,' ], '_hex_gradbtm_', '_100p_', [')']
        ]]
      },
      _palette_list_ : [
        { _palette_name_  : 'Newspaper',
          _hex_bright_    : '#ececec',
          _hex_shadow_    : '#373737',
          _hex_font_      : '#373737',
          _hex_mid_       : '#666',
          _hex_link_      : '#046273',
          _hex_gradtop_   : '#046273',
          _hex_link_dk_   : '#02353e',
          _hex_gradbtm_   : '#02353e',
          _hex_bkgd_      : '#ececec',
          _hex_bkgd_dk_   : '#666',
          _logo_url_      : 'url(img/pcss-25p-np.png)'
        },
        { _palette_name_  : 'Basket',
          _hex_bright_    : '#452b29',
          _hex_shadow_    : '#e6e2df',
          _hex_font_      : '#e6e2df',
          _hex_mid_       : '#8f8172',
          _hex_link_      : '#98899c',
          _hex_gradtop_   : '#98899c',
          _hex_link_dk_   : '#736078',
          _hex_gradbtm_   : '#736078',
          _hex_bkgd_      : '#452b29',
          _hex_bkgd_dk_   : '#704643',
          _logo_url_      : 'url(img/pcss-25p-basket.png)',
        },
        { _palette_name_  : 'Invert',
          _hex_bright_    : '#131b22',
          _hex_shadow_    : '#c0c8d0',
          _hex_font_      : '#c0c8d8',
          _hex_mid_       : '#9199a1',
          _hex_link_      : '#8ccbfb',
          _hex_gradtop_   : '#8ccbfb',
          _hex_link_dk_   : '#c1e3fd',
          _hex_gradbtm_   : '#c1e3fd',
          _hex_bkgd_      : '#131b22',
          _hex_bkgd_dk_   : '#9199a1',
          _logo_url_      : 'url(img/pcss-25p-dk.png)',
        },
        { _palette_name_  : 'Autumn I',
          _hex_bright_    : '#fff',
          _hex_shadow_    : '#6d7696',
          _hex_font_      : '#59484f',
          _hex_mid_       : '#455c4f',
          _hex_link_      : '#cc5543',
          _hex_gradtop_   : '#cc5543',
          _hex_link_dk_   : '#b32914',
          _hex_gradbtm_   : '#edb579',
          _hex_bkgd_      : '#dbe6af',
          _hex_bkgd_dk_   : '#9aa278'
        },
        { _palette_name_  : 'Autumn II',
          _hex_bright_    : '#fff',
          _hex_shadow_    : '#d1cec5',
          _hex_font_lt_   : '#997c67',
          _hex_font_      : '#6a5647',
          _hex_mid_       : '#755330',
          _hex_link_      : '#b0703c',
          _hex_gradtop_   : '#b0703c',
          _hex_link_dk_   : '#96541e',
          _hex_gradbtm_   : '#dba72e',
          _hex_bkgd_      : '#e3cca1',
          _hex_bkgd_dk_   : '#bdaa86'
        },
        { _palette_name_  : 'Tomato',
          _hex_bright_    : '#fff',
          _hex_shadow_    : '#4a572c',
          _hex_font_      : '#803018',
          _hex_mid_       : '#c2c290',
          _hex_link_      : '#e87f60',
          _hex_gradtop_   : '#e87f60',
          _hex_link_dk_   : '#e34819',
          _hex_gradbtm_   : '#e34819',
          _hex_bkgd_      : '#d6cfc9',
          _hex_bkgd_dk_   : '#bab4af'
        },
        { _palette_name_  : 'Canyon',
          _hex_bright_    : '#fff',
          _hex_shadow_    : '#8a6e64',
          _hex_font_      : '#6e352c',
          _hex_mid_       : '#f59a44',
          _hex_link_      : '#cf5230',
          _hex_gradtop_   : '#cf5230',
          _hex_link_dk_   : '#af3210',
          _hex_gradbtm_   : '#96884f',
          _hex_bkgd_      : '#e3c598',
          _hex_bkgd_dk_   : '#c2a882'
        },
        { _palette_name_  : 'Fresh',
          _hex_bright_    : '#ffffdb',
          _hex_shadow_    : '#d9d9d9',
          _hex_font_      : '#ffe3c4',
          _hex_mid_       : '#d15656',
          _hex_link_      : '#94353c',
          _hex_gradtop_   : '#94353c',
          _hex_link_dk_   : '#47322d',
          _hex_gradbtm_   : '#47322d',
          _hex_bkgd_      : '#996b42',
          _hex_bkgd_dk_   : '#7a4c22'
        },
        { _palette_name_  : 'Mineral',
          _hex_bright_    : '#e8e4e1',
          _hex_shadow_    : '#694364',
          _hex_font_      : '#54384d',
          _hex_font_lt_   : '#b58bab',
          _hex_mid_       : '#e3d1e2',
          _hex_link_      : '#54384d',
          _hex_gradtop_   : '#54384d',
          _hex_link_dk_   : '#8b8b8f',
          _hex_gradbtm_   : '#8b8b8f',
          _hex_bkgd_      : '#cca772',
          _hex_bkgd_dk_   : '#a17f4f',
          _logo_url_      : 'url(img/pcss-25p-mineral.png)'
        },
        { _palette_name_  : 'Spice I',
          _hex_bright_    : '#fff6eb',
          _hex_shadow_    : '#ebe3d9',
          _hex_font_      : '#472c00',
          _hex_link_      : '#472c00',
          _hex_font_lt_   : '#e0cdaf',
          _hex_mid_       : '#c2bc74',
          _hex_gradtop_   : '#6e615a',
          _hex_link_dk_   : '#807e82', 
          _hex_gradbtm_   : '#807e82',
          _hex_bkgd_      : '#b8b8b8',
          _hex_bkgd_dk_   : '#9c9c9c'
        },
        { _palette_name_  : 'Spice III',
          _hex_bright_    : '#fff',
          _hex_shadow_    : '#f7efd4',
          _hex_font_      : '#472c25',
          _hex_link_      : '#472c25',
          _hex_font_lt_   : '#faddaf',
          _hex_mid_       : '#eb712f',
          _hex_gradtop_   : '#91371b',
          _hex_link_dk_   : '#baa18a',
          _hex_gradbtm_   : '#baa18a',
          _hex_bkgd_      : '#d4c2b2',
          _hex_bkgd_dk_   : '#baa18a'
        },
        { _palette_name_  : 'Chili',
          _hex_bright_    : '#fdfda8',
          _hex_shadow_    : '#eeffd5',
          _hex_shadow_dk_ : '#283811',
          _hex_font_      : '#ffd1a7',
          _hex_font_lt_   : '#66492f',
          _hex_mid_       : '#b8997f',
          _hex_gradtop_   : '#a68887',
          _hex_link_      : '#a68887',
          _hex_gradbtm_   : '#d94330',
          _hex_link_dk_   : '#d94330',  
          _hex_bkgd_      : '#5c0811',
          _hex_bkgd_dk_   : '#7a2d36',
          _logo_url_      : 'url(img/pcss-25p-dk.png)',
        }
      ],
      _base_selector_list_ : [
        { _selector_str_ : 'html',
          _rule_map_     : {
            _font_family_ : '_font_family_arial_',
            _font_size_   : '_font_size_',
            _color_       : '_hex_font_',
            _background_  : '_hex_bkgd_'
          }
        },
        { _selector_str_  : 'body',
          _rule_map_ : {
            _display_     : '_block_',
            _margin_      : '_0_',
            _background_  : '_hex_bkgd_dk_',
            _color_       : '_hex_font_',
            _overflow_x_  : '_hidden_'
          }
        },
        { _selector_str_ : '*',
          _rule_map_     : {
            __moz_box_sizing_  : '_border_box_',
            _box_sizing_       : '_border_box_',
            _float_            : '_none_',
            _margin_           : '_0_',
            _clip_             : '_auto_',
            _height_           : '_auto_',
            _width_            : '_auto_',
            _padding_          : '_0_',
            _line_height_      : '_inherit_',
            _vertical_align_   : '_inherit_',
            _font_family_      : '_inherit_',
            _font_size_        : '_inherit_',
            _font_weight_      : '_inherit_',
            _font_style_       : '_inherit_',
            _text_decoration_  : '_inherit_',
            _color_            : '_inherit_',
            _background_color_ : '_transparent_',
            _outline_          : '_transparent_',

            __webkit_user_select_ : '_inherit_',
            __moz_user_select_    : '_inherit_',
            __o_user_select_      : '_inherit_',
            _user_select_         : '_inherit_'
          }
        },

        { _selector_str_ : '::-webkit-input-placeholder',
          _rule_map_     : { _color_ : '_hex_mid_' }
        },
        { _selector_str_ : '::-moz-placeholder',
          _rule_map_     : {
            _color_   : '_hex_mid_',
            _opacity_ : '_1_'
          }
        },
        { _selector_str_ : '::-ms-input-placeholder',
          _rule_map_     : { _color_ : '_hex_mid_' }
        },
        { _selector_str_ : 'p',
          _rule_map_ : {
            _margin_top_    : '_d75rem_',
            _margin_bottom_ : '_d5rem_',
            _line_height_   : '_2rem_'
          }
        },
        { _selector_str_ : 'ul,ol',
          _rule_map_ : { _margin_left_ : '_4rem_' }
        },
        { _selector_str_ : 'li',
          _rule_map_ : {
            _line_height_ : '_1d75rem_',
           _margin_bottom_ : '_d5rem_'
          }
        },
        { _selector_str_ : 'a',
          _rule_map_ : {
            _display_         : '_inline_block_',
            _margin_          : [[ '_0_', '_d25rem_' ]],
            _height_          : '_1d5rem_',
            _line_height_     : '_1d5rem_',
            _border_radius_   : '_d25rem_',
            _padding_         : [[ '_0_', '_d375rem_' ]],
            _color_           : '_hex_link_',
            _background_      : '_hex_bright_',
            _text_decoration_ : '_none_',
            _box_shadow_      : '_shadow_d1875_'
          }
        },
        { _selector_str_ : 'a:hover',
          _rule_map_ : {
            _background_ : '_hex_link_dk_',
            _color_      : '_hex_bright_',
            _text_decoration_ : '_underline_'
          }
        },
        { _selector_str_ : 'code,pre',
          _rule_map_ : {
            _margin_          : [[ '_0_', '_d25rem_' ]],
            _line_height_   : '_1d5rem_',
            _border_radius_ : '_d25rem_',
            _padding_       : [[ '_0_', '_d375rem_' ]],
            _font_family_   : [ 'courier, fixed' ],
            _color_         : '_hex_bright_',
            _background_    : '_hex_bkgd_dk_',
            _font_weight_   : '_800_'
          }
        },
        { _selector_str_ : 'code', 
          _rule_map_ : { 
            _display_ : '_inline_block_'
          }
        },
        { _selector_str_ : 'pre',
          _rule_map_ : {
            _margin_ : [[ '_1rem_', '_4rem_' ]],
            _padding_ : [[ '_d5rem_', '_1rem_' ]],
            _overflow_x_ : '_auto_',
            _overflow_y_ : '_auto_'
          }
        },
        { _selector_str_ : 'strong',
          _rule_map_ : { _font_weight_ : '_800_' }
        },
        { _selector_str_ : 'i',
          _rule_map_ : { _font_style_ : '_italic_' }
        },

        /* Begin .pcss-_x_*_ selectors */
        { _selector_str_ : '.pcss-_x_noselect_',
          _rule_map_ : {
            __webkit_user_select_ : '_none_',
            __moz_user_select_    : '_none_',
            __o_user_select_      : '_none_',
            _user_select_         : '_none_'
          }
        },
        { _selector_str_ : '.pcss-_x_fa_icon_',
          _rule_map_ : {
            _font_family_    : '_font_family_awesome_',
            _font_weight_    : '_400_'
          }
        },
        { _selector_str_ : 'h1 .pcss-_x_fa_icon_, h2 .pcss-_x_fa_icon_',
          _rule_map_ : {
            _display_      : '_inline_block_',
            _margin_right_ : '_d625rem_',
            _width_        : '_2rem_',
            _text_align_   : '_center_',
            _font_size_    : '_1d75rem_',
            _line_height_  : '_1d75rem_'
          }
        },
        { _selector_str_ : '.pcss-_logo_',
          _rule_map_ : {
            _margin_           : [[ '_2rem_', '_auto_' ]],
            _background_image_ : '_logo_url_',
            _background_size_  : '_cover_',
            _width_            : [ '20.75rem' ],
            _height_           : [ '10.125rem' ]
          }
        },
        { _selector_str_ : '.pcss-_x_clearfloat_',
          _rule_map_     : {
            _visibility_ : '_hidden_',
            _float_      : '_none_',
            _height_     : '_0_',
            _clear_      : '_both_'
          }
        },
        { _selector_str_: '@keyframes spinIt {'
            + '100%{transform:rotate(360deg);}}'
        },
        { _selector_str_ : '.pcss-_x_spin_',
          _rule_map_     : {
            _display_      : '_none_',
            _position_     : '_absolute_',
            _top_          : '_50p_',
            _left_         : '_50p_',
            _margin_left_  : [ '-2rem' ],
            _margin_right_ : [ '-2rem' ],
            _height_       : '_4rem_',
            _line_height_  : '_4rem_',
            _font_size_    : '_4rem_',
            _width_        : '_4rem_',
            _text_align_   : '_center_',
            _font_family_  : '_font_family_awesome_',
            _animation_    : [ 'spinIt 1s linear infinite' ]
          }
        },
        { _selector_str_ : '.pcss-_x_spin_.pcss-_x_active_',
          _rule_map_     : { _display_ : '_block_' }
        }
        /* End .pcss-_x_*_ selectors */
      ],
      // end _base_selector_list_
      _head_selector_list_ : [
        { _selector_str_ : '.pcss-_head_',
          _rule_map_   : {
            _display_       : '_block_',
            _position_      : '_fixed_',
            _z_index_       : '_1_',
            _top_           : '_0_',
            _right_         : '_0_',
            _border_radius_ : [[ '_0_', '_0_', '_0_', '_d5rem_' ]],
            _height_        : '_2rem_',
            _box_shadow_    : '_shadow_d625_',
            _background_    :'_hex_gradtop_'
          }
        },

        { _selector_str_ : '.pcss-_head_float_',
          _rule_map_ : {
            _position_      : '_relative_',
            _float_         : '_right_',
            _border_radius_ : [[ '_0_', '_0_', '_d5rem_', '_d5rem_' ]],
            _padding_       : [[ '_0_', '_d75rem_', '_d75rem_' ]],
            _height_        : '_1d75rem_',
            _line_height_   : '_2rem_',
            _overflow_      : '_hidden_',
            _cursor_        : '_pointer_',
            _color_         : '_hex_bright_',
            _background_    : '_hex_gradtop_',
            _transition_    : [ 'all .5s ease' ]
          }
        },
        { _selector_str_ : '.pcss-_head_float_.pcss-_x_active_',
          _rule_map_ : {
            _height_        : '_auto_',
            _box_shadow_    : '_shadow_d625_',
          }
        },
        { _selector_str_ : '.pcss-_head_float_ > div',
          _rule_map_     : { 
            _border_radius_ : '_d25rem_',
            _padding_ : [['_0_','_d5rem_']]
          }
        },
        { _selector_str_ : '.pcss-_head_float_ > div:first-child',
          _rule_map_     : { _font_weight_ : '_800_' }
        },
        { _selector_str_ : '.pcss-_head_float_ > div.pcss-_x_select_',
          _rule_map_ : {
            _background_ : '_hex_gradbtm_',
          }
        },
        { _selector_str_ : '.pcss-_content_',
          _rule_map_ : {
            _position_    : '_relative_',
            _padding_     : [[ '_3rem_', '_3d5rem_' ]],
            _max_width_   : [ '72rem' ],
            _margin_      : [[ '_0_', '_auto_' ]],
            _background_  : '_hex_bkgd_',
            _box_shadow_  : '_shadow_d625_'
          }
        },
        { _selector_str_ : '.pcss-_alt_clearfloat_',
          _rule_map_     : {
            _visibility_ : '_hidden_',
            _float_      : '_none_',
            _height_     : '_0_'
          }
        },
        { _begin_cond_str_ : '@media all and (max-width: 650px)' },
        { _selector_str_ : '.pcss-_head_',
          _rule_map_ : {
            _left_ : '_0_',
            _border_radius_ : '_0_'
          }
        },
        { _selector_str_ : '.pcss-_content_',
          _rule_map_ : {
            _left_ : '_0_',
            _padding_     : [[ '_3rem_', '_1d5rem_' ]],
          }
        },
        { _selector_str_ : 'ul,ol',
          _rule_map_ : { _margin_left_ : '_2rem_' }
        },
        { _end_cond_str_ : __blank }
      ],
      // end _head_selector_list_
      _box_selector_list_ : [
        { _selector_str_ : 'h1,h2',
          _rule_lock_list_ : [ '_font_size_' ],
          _rule_map_ : {
            _display_        : '_inline_block_',
            _opacity_        : '_1_',
            _position_       : '_relative_',
            _margin_         : [[ '_1rem_', '_0_', '_d75rem_', [ '-5rem' ] ]],
            _padding_        : [[ '_d625rem_', '_3rem_' ]],
            _vertical_align_ : '_top_',
            _box_shadow_     : '_shadow_d625_',
            _border_         : '_0_',
            _border_radius_  : [[ '_0_', '_1rem_', '_1rem_', '_0_' ]],
            _line_height_    : '_2rem_',
            _background_     : '_linear_grad_01_',
            _font_family_    : '_font_family_sansation_',
            _font_size_      : '_1d5rem_',
            _font_weight_    : '_800_',
            _color_          : '_hex_bright_',
            _text_align_     : '_left_'
          }
        },
        { _selector_str_ : 'h1',
          _rule_map_ : {
            _margin_top_     : [ '-3rem' ],
            _border_radius_  : [[ '_0_', '_0_', '_1rem_', '_0_' ]]
          }
        },
        { _selector_str_ : 'h3',
          _rule_map_ : {
            _margin_top_    : '_d75rem_',
            _margin_bottom_ : '_d5rem_',
            _font_size_     : '_1d25rem_',
            _font_weight_   : '_800_'
          }
        },
        { _begin_cond_str_ : '@media all and (max-width: 650px)' },
        { _selector_str_ : 'h2,h2',
          _rule_map_ : {
            _margin_ : [[ '_1rem_', '_0_', '_d75rem_', [ '-3.25rem' ] ]],
          }
        },
        { _selector_str_ : 'h1',
          _rule_map_ : {
            _border_radius_  : [[ '_0_', '_1rem_', '_1rem_', '_0_' ]],
            _margin_ : [[ '_1rem_', '_0_', '_d75rem_', [ '-2.5rem' ] ]],
          }
        },
        { _end_cond_str_ : __blank }
      ]
      // end _box_selector_list_
    },
    // end topCmap
    fillTmplt
    ;
  // ================== END MODULE SCOPE VARIABLES =====================

  // ===================== BEGIN UTLILTY METHODS =======================
  fillTmplt = (function () {

    /*jslint unparam: true*/
    function lookupFn ( match_str, lookup_name ) {
      var 
        lookup_map  = this,
        return_data = lookup_name && lookup_map
        ;
      lookup_name.split('.').forEach(
        function ( key_name ) {
          return_data = return_data && return_data[ key_name ]; 
        }
      );
      return ( return_data === undefined ) ? __blank : return_data;
    }
    /*jslint unparam: false*/

    function mainFn ( arg_map ) {
      var
        input_str  = arg_map._input_str_,
        lookup_map = arg_map._lookup_map_,
        tmplt_rx   = /%!%([^%]+)%!%/g,
        bound_fn   = lookupFn.bind( lookup_map )
        ;
      return input_str.replace( tmplt_rx, bound_fn );
    }

    return mainFn;
  }());

  function makeFontSelectorList () {
    var
      font_list_list = topCmap._font_list_list_,
      font_count     = font_list_list.length,
      font_sel_list  = [],
      pad_str        = __blank,

      i, font_list, font_name,
      font_path,    src_str,
      selector_map
      ;

    for ( i = __0; i < font_count; i++ ) {
      font_list = font_list_list[ i ];
      font_name = font_list[ __0 ];
      font_path = font_list[ __1 ];

      src_str = fillTmplt({
        _input_str_  : topCmap._font_src_tmplt_,
        _lookup_map_ : {
          _font_name_ : font_name,
          _font_path_ : font_path + font_name
        }
      });

      // Adding white-space to the selector makes it unique, which
      // allows us to add multiple @font-face rules.
      selector_map = { _selector_str_ : pad_str + '@font-face',
        _rule_map_ : {
          _font_family_ : [ font_name ],
          _src_         : [ src_str ]
        }
      };
      font_sel_list.push( selector_map );
      pad_str += ' '; 
    }
    return font_sel_list;
  }
  // ====================== END UTLILTY METHODS ========================
 
  // ======================= BEGIN DOM METHODS =========================
  // Begin DOM method /setJqueryMap/
  function setJqueryMap () {
    var
      $head = $( '.pcss-_head_' ),
      $head_float_list = $head.find( '.pcss-_head_float_'  )
      ;

    jqueryMap = {
      _$head_            : $head,
      _$head_float_list_ : $head_float_list,
      _$head_cascade_    : $head_float_list.eq(__0),
      _$head_palette_    : $head_float_list.eq(__1)
    };
  }
  // End DOM method /setJqueryMap/

  // Begin DOM method /setStyle/
  function setStyle( arg_palette_map ) {
    var
      font_selector_list = makeFontSelectorList(),
      palette_list       = topCmap._palette_list_,
      box_selector_list  = topCmap._box_selector_list_,

      palette_map,
      h1h2_rule_map,   h1_rule_map,
      small_h1h2_map,  small_h1_map
      ;

    palette_map = ( typeof arg_palette_map === 'object' )
      ? arg_palette_map : palette_list[ __0 ];

    // Set global mixin map
    pcss._setGlobalMixinMap_({
      _mixin_map_  : topCmap._global_mixin_map_,
      _regen_type_ : '_none_'
    });

    // Add font vsheet
    pcss._setVsheet_({
      _vsheet_id_     : '_font_',
      _mode_str_      : '_add_',
      _selector_list_ : font_selector_list,
      _regen_type_    : '_none_'
    });

    // Add base vsheet
    pcss._setVsheet_({
      _vsheet_id_     : '_base_',
      _mode_str_      : '_add_',
      _selector_list_ : topCmap._base_selector_list_,
      _regen_type_    : '_none_'
    });

    // Add box01 vsheet
    pcss._setVsheet_({
      _vsheet_id_     : '_box01_',
      _mode_str_      : '_add_',
      _selector_list_ : box_selector_list,
      _regen_type_    : '_none_'
    });

    // Begin add _box02_ vsheet by *revising* box_selector_list
    h1h2_rule_map  = box_selector_list[ __0 ]._rule_map_;
    h1_rule_map    = box_selector_list[ __1 ]._rule_map_;
    small_h1h2_map = box_selector_list[ 4 ]._rule_map_;
    small_h1_map   = box_selector_list[ 5 ]._rule_map_;

    pcss._extendRuleMap_( h1h2_rule_map, {
      _left_          : '_50p_',
      _margin_        : [[ '_2rem_', '_0_', '_d5rem_', [ '-8rem' ] ]],
      _padding_       : '_d625rem_',
      _width_         : [ '16rem' ],
      _font_size_     : '_2rem_',
      _border_radius_ : '_d5rem_',
      _border_style_  : '_solid_',
      _border_width_  : '_d5rem_',
      _text_align_    : '_center_',
      _box_shadow_    : '_shadow_d625_'
    });
    pcss._extendRuleMap_( h1_rule_map, {
      _left_          : '_0_',
      _margin_left_   : '_0_',
      _border_radius_ : '_d5rem_',
      _margin_top_    : '_1rem_'
    });
    pcss._extendRuleMap_( small_h1h2_map, { _margin_ : __null, });
    pcss._extendRuleMap_( small_h1_map, {
      _display_       : '_block_',
      _left_          : '_auto_',
      _margin_        : [[ '_1rem_', '_auto_' ]],
      _border_radius_ : '_d5rem_'
    });
    pcss._setVsheet_({
      _vsheet_id_     : '_box02_',
      _mode_str_      : '_add_',
      _selector_list_ : box_selector_list,
      _regen_type_    : '_none_'
    });
    // End add _box02_ vsheet by *revising* box_selector_list

    // Begin add _box03_ vsheet by *revising* box_selector_list
    pcss._extendRuleMap_( h1h2_rule_map, {
      _left_          : __null,
      _width_         : __null,
      _display_       : '_block_',
      _float_         : '_right_',
      _margin_        : [[ '_2rem_', [ '-4.5rem' ], '_d5rem_', '_1rem_' ]],
      _max_width_     : [ '90%' ],
      _padding_       : [[ '_d625rem_', '_3rem_', '_d625rem_', '_1rem_' ]],
      _box_shadow_    : '_shadow_d1875_',
      _border_radius_ : '_1rem_',
      _font_family_   : '_font_fixed_',
      _font_size_     : '_1d75rem_',
      _text_align_    : '_right_'
    });
    pcss._extendRuleMap_( h1_rule_map, {
      _float_         : '_left_',
      _margin_        : [[ [ '-3.5rem'], '_0_', [ '-8rem' ], [ '-4.5rem' ] ]],
      _padding_       : [[ '_d625rem_', '_2rem_', '_d625rem_', '_2rem_' ]],
      _border_radius_ : [[ '_0_', '_0_', '_1rem_', '_1rem_' ]],
      _text_align_    : '_left_'
    });
    box_selector_list.push({
      _selector_str_ : '.pcss-_alt_clearfloat_',
      _rule_map_     : { _clear_  : '_right_' }
    });
    pcss._extendRuleMap_( small_h1_map, {
      _display_       : '_block_',
      _float_         : '_none_',
      _left_          : '_auto_',
      _max_width_     : [ '24rem' ],
      _margin_        : [[ '_1rem_', '_auto_' ]],
      _text_align_    : '_center_'
    });
    pcss._setVsheet_({
      _vsheet_id_     : '_box03_',
      _mode_str_      : '_add_',
      _selector_list_ : box_selector_list,
      _regen_type_    : '_none_'
    });
    // End add _box03_ vsheet by *revising* box_selector_list

    // Add head vsheet
    pcss._setVsheet_({
      _vsheet_id_     : '_head_',
      _mode_str_      : '_add_',
      _selector_list_ : topCmap._head_selector_list_,
      _regen_type_    : '_none_'
    });

    // Begin create cascades to toggle
    pcss._setCascade_({
      _cascade_id_     : '_c01_',
      _mode_str_       : '_add_',
      _vsheet_id_list_ : [ '_font_', '_base_', '_head_', '_box01_' ],
      _mixin_map_      : palette_map,
      _regen_type_     : '_none_'
    });

    pcss._setCascade_({
      _cascade_id_     : '_c02_',
      _mode_str_       : '_add_',
      _vsheet_id_list_ : [ '_font_', '_base_', '_head_', '_box02_' ],
      _mixin_map_      : palette_map,
      _regen_type_     : '_none_'
    });

    pcss._setCascade_({
      _cascade_id_     : '_c03_',
      _mode_str_       : '_add_',
      _vsheet_id_list_ : [ '_font_', '_base_', '_head_', '_box03_' ],
      _mixin_map_      : palette_map,
      _regen_type_     : '_none_'
    });
    // End create cascades to toggle

    topSmap._cascade_id_list_
      = pcss._getAssetIdList_({ '_asset_type_' : '_cascade_' });
  }
  // End DOM method /setStyle/

  // Begin DOM method /drawCascadeSelect/
  function drawCascadeSelect () {
    var
      cascade_id_list = topSmap._cascade_id_list_,
      cascade_count   = cascade_id_list.length,
      div_list = [],


      i, cascade_name, cascade_html
      ;

    for ( i = -1; i < cascade_count; i++ ) {
      cascade_name = ( i < __0 )
        ? 'Cascade '
          + '<span class="pcss-_x_fa_icon_">&#xf0d7;</span>'
        : 'cascade ' + String( i );
      div_list[ i + __1 ] = '<div>' + cascade_name + '</div>';
    }
    cascade_html = div_list.join( __blank );
    jqueryMap._$head_cascade_.html( cascade_html );

  }
  // End DOM method /drawCascadeSelect/

  // Begin DOM method /drawPaletteSelect/
  function drawPaletteSelect () {
    var
      palette_list  = topCmap._palette_list_,
      palette_count = palette_list.length,
      div_list      = [],

      i, palette_map, palette_name, palette_html
      ;
    for ( i = -1; i < palette_count; i++ ) {
      if ( i < __0 ) {
        palette_name = 'Palette '
          + '<span class="pcss-_x_fa_icon_">&#xf0d7;</span>';
      }
      else {
        palette_map  = palette_list[ i ];
        palette_name = palette_map._palette_name_;
      }
      div_list[ i + __1 ] = '<div>' + palette_name + '</div>';
    }
    palette_html = div_list.join( __blank );
    jqueryMap._$head_palette_.html( palette_html );
  }
  // End DOM method /drawPaletteSelect/

  // Begin DOM method /pickPaletteIdx/
  function pickPaletteIdx ( palette_idx ) {
    var
      palette_list = topCmap._palette_list_,
      palette_map  = palette_list[ palette_idx ],
      $child_list  = jqueryMap._$head_palette_.children()
      ;

    if ( ! palette_map ) { return; }
    topSmap._palette_idx_ = palette_idx;
    $child_list.removeClass( 'pcss-_x_select_' );
    $child_list.eq( palette_idx + __1 ).addClass( 'pcss-_x_select_');

    topSmap._palette_map_ = palette_map;
    // useCascade will take care of presenting the updated palette_map
  }
  // End DOM method /pickPaletteIdx/

  // Begin DOM method /pickCascadeIdx/
  function pickCascadeIdx ( cascade_idx ) {
    var
      cascade_id_list = topSmap._cascade_id_list_,
      cascade_id      = cascade_id_list[ cascade_idx],
      $child_list     = jqueryMap._$head_cascade_.children()
      ;

    if ( ! cascade_id ) { return; }
    $child_list.removeClass( 'pcss-_x_select_' );
    $child_list.eq( cascade_idx + __1 ).addClass( 'pcss-_x_select_');

    topSmap._cascade_id_ = cascade_id;
    // useCascade will take care of presenting the updated cascade_id
  }
  // End DOM method /pickCascadeIdx/

  // Being DOM method /useCascade/
  function useCascade () {
    var
      cascade_id  = topSmap._cascade_id_,
      palette_map = topSmap._palette_map_
      ;

    pcss._setCascade_({
      _cascade_id_ : cascade_id,
      _mode_str_   : '_change_',
      _mixin_map_  : palette_map,
      _regen_type_ : '_use_'
    });
  }
  // End DOM method /useCascade/
  // ======================== END DOM METHODS ==========================

  // ===================== BEGIN EVENT HANDLERS ========================
  // Begin event handler /onClickHead/
  function onClickHead ( event_obj ) {
    var
      target_el  = event_obj.target,
      $target    = $( target_el ),
      target_idx = $target.index(),
      $float_div = $target.closest( '.pcss-_head_float_' ),
      float_idx  = $float_div.index()
      ;

    if ( $float_div.length === __0 ) { return; }

    if ( ! $float_div.hasClass( 'pcss-_x_active_') ) {
      $float_div.addClass( 'pcss-_x_active_' );
      return;
    }

    if ( $target.hasClass( 'pcss-_head_float_') ) {
      return;
    }
    if ( target_idx > __0 ) {
      if ( float_idx === __1 ) {
        pickPaletteIdx( target_idx - __1 );
        useCascade();
      }
      else {
        pickCascadeIdx( target_idx - __1 );
        useCascade();
      }
    }

    setTimeout( function () {
      $float_div.removeClass( 'pcss-_x_active_' );
    }, 250 );
  }
  // End event handler /onClickHead/
  // ======================= END EVENT HANDLERS ========================

  // ====================== BEGIN PUBLIC METHODS =======================
  // Begin public method /initModule/
  function initModule () {
    pcss._initModule_();

    setJqueryMap();
    setStyle();
    drawCascadeSelect();
    drawPaletteSelect();

    pickPaletteIdx( __0 );
    pickCascadeIdx( __0 );

    useCascade();

    jqueryMap._$head_.on( 'click', onClickHead );
  }
  // End public method /initModule/

  return { _initModule_ : initModule };
  // ======================= END PUBLIC METHODS ========================
}( jQuery ));
// END pcss._home_

/** Color palettes thanks to:
 * DuoParadigms Public Relations & Design, Inc.
 * http://www.duoparadigms.com/2013/10/11/10-color-palettes-perfect-autumnfall-season/
 * 10 Color Palettes (and HEX Codes) Perfect for the Autumn/Fall Season
 * Posted by Aaress Lawless | Tags: Graphic Design
 * Call Us: 832-387-4693
*/

