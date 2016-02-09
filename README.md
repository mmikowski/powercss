# PowerCSS by Michael S. Mikowski
## THIS LIBRARY IS IN DEVELOPMENT!
## PLEASE DO NOT USE FOR ANY PURPOSE AT THIS TIME!

## Use libraries, not frameworks
This is a library that strives to be best-in-class.
If you are considering using an SPA framework, please read [Do you
really want an SPA framework?][0] first.

## Overview
Unleash PowerCSS to create custom CSS for every user that visits your site.
PowerCSS uses merging, caching, compression, and double-buffering to exceed
the speed and flexibility of static CSS.
https://www.youtube.com/watch?v=rnkMjzhxw4s

## Style
This plugin is written in the style presented in the book
book **Single Page Web Applications - JavaScript end-to-end**
which is available from [Amazon][1] and directly from [Manning][2].
It passes JSLint.  If you dislike K&R indentation, think that JSLint
is a waste of time, and want to make closures and line endings
impossible to find, go ahead and port it to CoffeeScript.  Just
don't expect any help from me :)

## The Goal
The greatest problem with static CSS - whether it is written by an
expert or someone using {less} or Sass - is that it is not generated
at run-time. That makes the use of application control of styling
complex at best, and impossible at worst.

PowerCSS provides application-controlled CSS and therefore it is
infinitely adjustable by our application logic. Do we want to change
styling based on every users' device orientation, ambient temperature,
ambient light, GPS location, heart rate, *and* time of day? Assuming
the user device has these sensors, this is *fairly easy and obvious* using
PowerCSS, and *virutally impossible* with with static CSS solutions.

We feel that PowerCSS has not only acheived its primary goal, but that
it is better than static CSS in almost every other respect as well.
It provides a simple and familiar API where experienced CSS authors
can use their existing skill to be up and running in minutes.
When properly implemented, a PowerCSS solution usually downloads
faster, renders faster after loading , and can speed up some CSS
operations by 10x or more. What's not to like?

Sound exciting? If so, read on! First we will implement a PowerCSS
solution, and then we will discuss how and why PowerCSS works.

## Example
### 1. Create a test HTML page
We will be placing a script inside an HTML page to illustrate the basic
use of PowerCSS. 

First, let's create an HTML file with the following content:

    <!DOCTYPE html>
    <html>
    <head>
      <title>Basic PowerCSS example</title>
      <script src="./pcss.js"></script>
      <script src="./pcss._exampleBasic.js"></script>
      <script>
      window.onload = pcss._exampleBasic_;
      </script>
    </head>
    <body>
      <p>Unleash PowerCSS to create custom CSS for every user that visits your
      site. PowerCSS uses merging, caching, compression, and double-buffering to
      exceed the speed and flexibility of static CSS.
      https://www.youtube.com/watch?v=rnkMjzhxw4s</p>
      <div class="pcss-_box_">PowerCSS 01</div>
      <div class="pcss-_box_">PowerCSS 02</div>
      <div class="pcss-_box_">PowerCSS 03
        <input title="example" type="text" value="example"/>
      </div>
    </body>
    </html>

We can find the `pcss._exampleBasic_.js` file in the root 
directory of the GitHub repository.

### 2. Define and add a Virtual StyleSheet List
A Virtual StyleSheet List (`VSheet`) contains the same information as a
traditional CSS file. An experienced CSS author should be able to
`VSheets` with little trouble. Let's create a file and add a `VSheet` to 
the PowerCSS data as shown below:

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
    /*global*/

    // BEGIN pcss._exampleBasic_
    pcss._exampleBasic_ = function () {
      var
        base_vsheet_list,
        box_vsheet_list,
        sheet_obj_idx
        ;
        
      pcss._initModule_();

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

Yes, Virginia, our code really *will* pass JSLint.

When we use `pcss._addVSheetList_`, we provide a `VSheet` name and then
a list data structure that defines this Virtual Stylesheet. PowerCSS
remembers records this definition, but it doesn't compile it to CSS yet.
That comes later.

Selectors are defined in an ordered list because selector order
*is important* and can change how CSS is intepreted by the browser
rendering engine.

### 2. Define and add another Virtual StyleSheet List
Let's define and add another `VSheet`.  This will use a few more
advanced features, but don't get lost in the details.  We will return to
them soon enough:

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
    
Now have two `VSheets` added to PowerCSS.  Let's use them!

### 3. Define and add a Sheet Object
Let's add a Sheet Object like so:

      sheet_obj = pcss._addSheetObj_({
        _cascade_list_   : [ '_base_css_', '_box_css_' ],
        _sheet_obj_name_ : '_basic_example_'
      });

The sheet object is returned and contains the attributes `_sheet_idx_`
and `stylesheet_obj` in addition to those provided ( `_cascade_list_`
and `_sheet_obj_name_`) . In this example, `_sheet_idx_` will be 0
since it will be the first pcss-controlled stylesheet claimed.
The `_cascade_list_` of virtual style sheets which will
be used later to write the CSS when we enable the Sheet Object.

### 4. Enable the Sheet Object
When we enable a Sheet Object, PowerCSS creates the CSS and populates 
the `sheet_obj._stylesheet_obj_` with the results. It will then disables 
all other PowerCSS-controled stylesheets and enables this 
StyleSheet Object (`_stylesheet_obj_`).  Let's do that now, and close out
our function<sup>[1](#footnote_01)<sup>.

      pcss._enableSheetObj_( '_basic_example_' );
    };
    // END pcss._exampleBasic_

We can find the `pcss._exampleBasic_.js` file in the root 
directory of the GitHub repository.

### 5. Marvel at the results
When we open `pcss._exampleBasic_.js` in a modern browser, we should see
three boxes that have been styled by according to our `VSheet` definitions
and our `_cascade_list_` we provided.  We can see the generated CSS
by requesting it in the JavaScript console like so: 
`pcss._getSheetObjCss_( 0 );`. It should look something like this, although 
I cleaned it up a little and added some comments:

    /* start _base_css_ */
    * { box-sizing : border-box;
        display    : block;
        float      : none;
        margin     : 0;
        padding    : 0;
    }
    input {
      border     : 2px solid #ccc;
      background : yellow;
    }
    /* end _base_css_ */

    /* start _box_css_ */
    .pcss-_box_ {
      background : #f85032;
      background : -moz-linear-gradient(left, #f85032 0%, #3b2c2b 100%);
      background : -webkit-linear-gradient(left, #f85032 0%, #3b2c2b 100%);
      background : linear-gradient(to right, #f85032 0%, #3b2c2b 100%);
      border     : 0.125rem solid #aaa;
      display    : block;
      font-size  : 16px;
      margin     : 1rem;
      opacity    : 1;
      position   : absolute;
      padding    : 5rem;
      text-align : center;
      transition : opacity .3s ease'
      z-index    : 5;
    /* end _box_css_ */

## Options
The default behavior of PowerCSS results in a number of benefits over
static CSS no matter what the preprocessor (e.g. {less} or Sass):

- It can be faster for initial load
- One can easily double buffer between stylesheets for much faster
  batch changes
- The code can compressed to be smaller than any compress CSS
- CSS can be adjusted at any time as directed by the application

However, there are more benefits available.

--- Continue here

This behavior can be modified.  For example, if we don't want to recompile
the CSS because none of our mixin maps have changed, we can do the following:

    pcss._enableSheetObj_( sheet_obj_idx, { _do_compile_ : false } );

The StyleSheet Object will contain the following CSS:



### What does this get us?
Assuming we use the default namespaces for powercss, `pcss`, the above code
will will cache the following CSS, which hopefull is not too surprising:


    input {
      display       : block;
      opacity       : 0;
      position      : absolute;
      background    : #fff;

      border        : 0.125rem solid #aaa;
      border-radius : .375rem .375rem 0 0;
      box-shadow    : rgba(0, 0, 0, .14) 0 0 .625rem .375rem;
      z-index       : 36;
      background    : blue;
      background    : linear-gradient(...);
      background    : -webkit-linear-gradient(...);
      background    : -moz-linear-gradient(...);
      font-size     : 16px;
      transition    : opacity .3s ease
    }

#### Alternate values
Sometimes we want to provide alternate rules for a style so that
our code will work across multiple browsers. In this case, wrap
all alternate values in a list. Example:

    _background_ : [
      '#f85032',
      '-moz-linear-gradient(left, #f85032 0%, #3b2c2b 100%)',
      '-webkit-linear-gradient(left, #f85032 0%, #3b2c2b 100%)',
      'linear-gradient(to right, #f85032 0%, #3b2c2b 100%)'
    ],


#### Locked values
Typically in a cascade, the last property value in "wins". However, it
is feasible to prevent overwriting critical properties with downstream `vsheets`
by using a value lock. This does **not** implement the dreaded and flawed
`!important` declaration in CSS, so don't freak out about that.

      _font_size_     : { _do_lock_ : true, _val_data_ : '16px' },

#### Alternative and locked values
Alternative and locked values may be combined.  Here is an example:

      _background_    : {
        _do_lock_ : true,
        _val_data_ : [
          '_blue_',
          'linear-gradient(...)',
          '-webkit-linear-gradient(...)',
          '-moz-linear-gradient(...)'
        ],

### Removing a Virtual StyleSheet
We can always remove a `VSheet` like so:

    pcss._delVSheetList( '_base_css_' );

### Selecting the active StyleSheet Object
The active StyleSheet Object is selected like so:

    pcss._selectActiveSheetObj_( 0 );

This will disable any previously enabled sheet object (if any) and enable
the first one. We can use this capability for double-buffering which can
dramatically increase some CSS operations.  For an explanation of the
benefits of this approach, see **How PowerCSS Works**, below.

### Mixins
PowerCSS supports mixins that can be reconsidered anytime. Set the map of
values using the `_setMixinMap_` method. This map applies across all VSheets.

Let's use mixins to simplify our first style sheet:

    var mixin_map, box_vsheet_list;
    mixin_map = {
      _border_red_str : '0.125rem solid #aaa'
      _grad_redblack_list_ : [
        '#f85032',
        '-moz-linear-gradient(left, #f85032 0%, #3b2c2b 100%)',
        '-webkit-linear-gradient(left, #f85032 0%, #3b2c2b 100%)',
        'linear-gradient(to right, #f85032 0%, #3b2c2b 100%)'
      ],
      _trans_opacity_str_   : 'opacity .3s ease',
      _font_16px_lock_map_ : { _do_lock_ : '_true_', _val_data_ : '_16px_' },
    };
    pcss._setMixinMap_( mixin_map );

    box_vsheet_list = [
      { _select_str_ : '.pcss-_box_',
        _rule_map_ : {
          _display_       : '_block_',
          _opacity_       : '_1_',
          _position_      : '_absolute_',
          _background_    : '_xfff_',
          _z_index_       : '_5_',
          _font_size_     : '_font_16px_lock_map_',
          _border_        : '_border_gray_str_',
          _background_    : '_grad_redblack_list_',
          _transition_    : '_trans_opacity_str_'
        }
      }
    ];




# How PowerCSS Works
PowerCSS uses a number of techniques to provide powerful and fast
programatic CSS control while leveraging the skills of existing CSS
authors. Below we discuss the key concepts employed to meet this
goal.

## PowerCSS uses only one StyleSheet Object at a time
Only one PowerCSS stylesheet is used at any time to style
the DOM. PowerCSS is intended to replace **all** other stylesheets for
a application, and external stylesheets are no longer needed.
While we can and may use external sheets during development,
we don't need them for production release. Don't worry,
this isn't as drastic as it sounds. Third-party web components will,
of course, still provide their own CSS, and that's OK, because PowerCSS
plays well with others.

Why use only one StyleSheet Object at a time? In a word, **speed**.

First, the browser rendering engine doesn't need to work loading
and merging sometimes dozens of external style sheets. Instead, it
creates a single stylesheet for the browser to use. This prevents
"document reflows" when a rendering engine must reorder and rerender
a layout because of styling changes. For example, if we have 12 external
stylesheets and load them at different times, that may require 12
document reflows instead of the one required with PowerCSS. Think about how
when you visit a site how the layout often stutters and jumps while
loading. That's often due to document reflows.

Second, our single active StyleSheet Object is calculated and optimized
by PowerCSS before it is ever applied, which means a large amount of
redundany is removed from the sheet compared to a typical cascade.
Third, we can cache these sheets and switch between them at will.
This "double-buffering" capability allow us to change almost
all styling with just one document reflow, which can be many, many
times faster than changing styles individually.

## PowerCSS is highly compressible
A PowerCSS app in its compressed state usually presents a styled DOM
on inital load *faster* than standard CSS and HTML. While there is
some initial overhead for PowerCSS, this is offset by the benefits
of much-smaller download size and HTTP requests and other optimizations.

You will notice many property names and values - along with error
messages and class names - in PowerCSS are consistently
named like so: '_color_'. These symbols can be easily found and
replaced by a compressor. As a result, the code to produce the
CSS for our StyleSheet Objects can be one quarter the size of the
native CSS after compression.

If you use the same naming convention on classes and ID's, the same
compression can take place. So a class name like
`.pcss-_xtable-inner-cell-selected_` can be compressed to something
like `pcss-qx`. This has numerous performance benefits as well.

We recommend using UglifyJS and then a tokenizer like the author's
SuperPack. The latter is not yet publicly released yet, but I've
used and improved it for 6 years now, and it further reduce compressed
JS files by around 30% and it works great with CSS symbols.

## PowerCSS can maintain multiple StyleSheet Objects
PowerCSS can maintain multiple StyleSheet Objects even though only one
is active at any time. These have, by default, the IDs of `pcss-0,
pcss-1, ... pcss-N.` If there is a conflict with other DOM IDs, we
can change the prefix using `pcss._setSheetIdPrefix_( 'myprefix-' );`.
This must be called *before* any other methods, or it will throw a nasty
exception.

Maintaining multiple defined stylesheets provides us with capability to
"double-buffer" styling, and limit document reflows to once for a batch
of styling changes. Consider, for example, if we have a night theme and
a day theme for a layout, and these layouts not only differed in colors, but
also in the size and shapes of DOM elements.  Both themes also adjusted
according to the device capabilities, the ambient temperature, and GPS
position, so static CSS isn't an option.

If we were to use JavaScript to make these changes one-by-one to the
currently active stylesheet, this would be ask the browser rendering
engine to consider every DOM element for each change. If we have 1,000
style changes and 1,000 elements, the rendering engine will need to
consider adjustising element properties one million times. Of course,
the engine will *try* to batch changes, but sometimes that
doesn't work well at all, especially if our adjustments take more than
a tiny fraction of a second. And so we will see our page stutter and jump
as multiple document reflows occur.

With PowerCSS, the active StyleSheet Object is rarely changed. Instead,
when we have a large change like described above, we write a new stylesheet
object and then switch to it only when its complete.  Now the browser engine
only needs to reflow the page once. Using this method, the rendering engine
only has to consider adjusting each of our 1,000 element only once.  That's
1,000 *times* fewer considerations than the above example.

## Virtual StyleSheets (`VSheets`)
A Virtual StyleSheet (`VSheet) contains the same information as a
traditional CSS file.  An experienced CSS author should be able to
convert an existing static stylesheet to a `VSheet` with little pain
or confusion.  The familiarity and power of the CSS cascade is retained,
because when we define a PowerCSS StyleSheet Object, we provide it a list
of Virtual StyleSheets in order, just as if we were including static
style sheet files to a static HTML document.


## Prerequisites
A modern browser like Chrome or Firefox. IE9+ is also supported for the
Luddite in your soul or your boardroom.

## Implementation
See powercss.html for example implementation.

## Error handling
PowerCSS will throw an exception if it cannot perform the requested
method.  It should be invoked within a `try-catch` block.

## Release Notes
### Copyright (c)
2016 Michael S. Mikowski (mike[dot]mikowski[at]gmail[dotcom])

### License
MIT

### Version 0.0.x
Set-up commits and testing.

## TODO
Add content.

## Similar Projects
[absurdjs][20], [responsive.j$][21]

## Contribute!
Any improvements or suggestions are welcome! You can reach me at
mike[dot]mikowski[at]gmail[dotcom].

Cheers, Mike

## Footnotes
<a id="footnote_01">01</a>: Alternately we could have provided the 
`_sheet_idx_` of `0` instead of using the `_sheet_obj_name_` (`_basic_example_`).  See, we're flexible!


## End
[0]:http://mmikowski.github.io/no-frameworks
[1]:http://www.amazon.com/dp/1617290750
[2]:http://manning.com/mikowski
