# PowerCSS 0.1.x by Michael S. Mikowski
This 0.1.x library is in development and is intended for early
adopters.  It should be relatively stable and reliable, however,
many features, testing, and examples have yet to be completed.
Use with caution and check back often - the library is changing
at a rapid pace.

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
It passes JSLint. If you dislike K&R indentation, think that JSLint
is a waste of time, and want to make closures and line endings
impossible to find, go ahead and port it to CoffeeScript. Just
don't expect any help from me :)

## The Goal
The greatest problem with static CSS - whether it is written by an
expert or someone using {less} or Sass - is that it is not generated
at run-time. Application control of styling at best limited, and at
worst, simply not possible.

PowerCSS provides application-controlled CSS and therefore it is
infinitely adjustable by our application logic. Do we want to change
styling based on every users' device orientation, ambient temperature,
ambient light, GPS location, heart rate, *and* time of day? Assuming
the user device has these sensors, this is *fairly easy and obvious* using
PowerCSS, and *virutally impossible* with with static CSS solutions.

We feel that PowerCSS has not only acheived its primary goal, but that
it is better than static CSS in almost every other respect as well.
It provides a simple and familiar API where experienced CSS authors
can use their existing skills to be up and running in minutes.
When properly implemented, a PowerCSS solution usually downloads
faster, renders faster after loading, and can speed up some CSS
operations by 10x or more. What's not to like?

Sound exciting? If so, read on! First we will implement a PowerCSS
solution, and then we will discuss how and why PowerCSS works.

## Example
Let's review the workflow before we jump into the example.

1. Create an HTML document that includes the pcss.js library and the code
   necessary to use it.
2. In our JS library, create one or more virtual stylesheets (**vsheet**s).
   These look very much like traditional stylesheets in JSON syntax.
3. Create a **metasheet** which includes an ordered list (or *cascade*) of
   **vsheets**.  Again, this is very much like the workflow where we add
   static CSS files to an HTML document.
4. Enable the **metasheet** to apply the CSS.

We were careful to change as little of the existing CSS workflow as possible
while adding the Power of JS to CSS creation and management.  We hope you'll
be happy with the results.  Now let's get started.

### 1. Create `pcss._example001_.html` page
Let's create an HTML file to illustrate the basic capabilities
of PowerCSS. We will call the file `pcss._example001_.html` and
a complete copy can be found in the root directory of the GitHub
repository.

    <!DOCTYPE html>
    <html>
    <head>
      <title>PowerCSS Example001</title>
      <script src="./pcss.js"></script>
      <script src="./pcss._example001_.js"></script>
      <script>
      window.onload = pcss._example001_;
      </script>
    </head>
    <body>
      <h1>PowerCSS - Example 001</h1>
      <div class="pcss-_box_">PowerCSS 01</div>
      <div class="pcss-_box_">PowerCSS 02</div>
      <div class="pcss-_box_">PowerCSS 03
        <input title="example" type="text" placeholder="Your name here"/>
      </div>
    </body>
    </html>

### 2. Start the `pcss._example001_.js` file
Now let's start the JavaScript file to provide the example.
We will call the file `pcss._example001_.js` and a complete copy can
be found in the root directory of the GitHub repository.

    /* pss._example001_.js
     * First example of run-time generated and managed CSS
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
     *     10. css transition or animation definitions
    */

    // BEGIN pcss._example001_
    pcss._example001_ = function () {
      var
        base_vsheet_list,
        box_vsheet_list,
        metasheet_obj
        ;

      pcss._initModule_();

We start our module with identification, JSLint settings, and a reminder
about my preferred CSS attribute order. Then we declare our function
variables, and finally we initialize the PowerCSS module.
And, yes, Virginia, our code really *does* pass JSLint.

### 3. Define and add a Virtual Stylesheet List
A Virtual Stylesheet List (**vsheet**) contains the same information as a
traditional CSS file. An experienced CSS author should be able to
**vsheet** with little trouble. Let's create a file and add a **vsheet** to
the PowerCSS data as shown below.

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

      pcss._addVsheetList_({
        _vsheet_id_   : '_base_css_',
        _vsheet_list_ : base_vsheet_list
      });
      // End add _base_css_ vsheet

Selector order change how CSS is rendered. We use a list to represent the
**vsheet** for this reason.

PowerCSS records the **vsheet** definition, but it doesn't compile
it to CSS. That comes later.

### 4. Define and add another Virtual Stylesheet List
Let's define and add another **vsheet**. This will use a few more
advanced features, but don't get lost in the details. We will return to
them soon enough:

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

      pcss._addVsheetList_({
        _vsheet_id_   : '_box_css_',
        _vsheet_list_ : box_vsheet_list
      });
      // End add _box_css_ vsheet

Now we have two **vsheet**s. Let's use them!

### 5. Add a Metasheet Object
Let's add a Metasheet Object (**metasheet**) like so:

      metasheet_obj = pcss._addMetaSheetObj_({
        _cascade_list_ : [ '_base_css_', '_box_css_' ]
        _metasheet_id_ : '_example001_',
      });
      console.log( 'metasheet_obj', JSON.stringify( metasheet_obj ) );

The returned **metasheet** object contains the following attributes:

- `_cascade_list_` as provided.
- `_metasheet_id_` as provided.
- `_merge_vsheet_list_` is the merged stylesheet prepared from the
   `_cascade_list_`. It is an intermediary format that merges the
   cascade but doesn't resolve values like CSS symbols or **mixins**.
   *In this example it is calculated and saved*.
- `_mixin_map_` is the **mixin** map used only for this **metasheet**.
   *In this example it is an empty map.*
- `_style_el_` is the `style` DOM element used by the **metasheet**.
  *In this example, the value will be null because we haven't
  enabled this metasheet yet.*
- `_style_el_id_` is the DOM ID reserved for the browser style element
   we will create when we enable this **metasheet**.
   *In this example, it will be `pcss-0` because this is our
   first metasheet.*
- `_timesheet_map_` includes various timesheets that are used to only
  update the parts of the CSS generation process that need updating.
  *In this example, all times are set to the current timestamp, except
  for `_last_css_ms_` as the CSS has not yet been generated.*

We can verify these values by viewing the debugging output in the JavaScript
console.

### 6. Enable the MetaSheet Object
Let's now enable the **metasheet** and close our example function.

      pcss._enableMetasheetObj_({ _metasheet_id_ : '_example001_' });
      console.log( 'metasheet_obj', JSON.stringify( metasheet_obj ) );
    };
    // END pcss._example001_

When we enable the **metasheet**, PowerCSS creates a *disabled* browser
style element with an id of `pcss-0`, calculates the CSS, and then
writes it to the `pcss-0` style element. It then disables
all `pcss-*` CSS, and, finally, it enables the `pcss-0` style element.

### 7. Marvel at the results
When we open `pcss._example001_.html` in a modern browser, we should see
three boxes that have been styled by according to the **metasheet**
definition. We can view the generated CSS in the browser using the
development tools and modify it as if we had written it ourselves.
I formated it and added some comments below.

    /* Begin add _base_css_*/
    body {
      display     : block;
      box-sizing  : border-box;
      padding     : 2rem;
      margin      : 0;
      font-family : arial, helvetica, sans-serif;
      font-size   : 16px
    }

    input {
      margin        : .5rem;
      border        : .125rem solid #ddd;
      border-radius : .5rem;
      outline       : none;
      padding       : .5rem;
      background    : #888;
      font-size     : 1rem;
      color         : #ddd
    }

    input:focus {
      border-color : #fff;
      background   : #444;
      color        : #fff
    }
    /* End add _base_css_*/

    /* Begin add _box_css_*/
    .pcss-_box_ {
      display        : inline-block;
      opacity        : 1;
      box-sizing     : border-box;
      position       : relative;
      vertical-align : top;
      margin         : 1rem;
      box-shadow     : rgba(0, 0, 0, .5) 0 0 .25rem 0;
      border         : 0.25rem solid #eee;
      border-radius  : 1rem;
      width          : 16rem;
      height         : 8rem;
      padding-top    : 1rem;
      background     : #f85032;
      background     : -moz-linear-gradient(left, #f85032 0%, #6d362d 100%);
      background     : -webkit-linear-gradient(left, #f85032 0%, #6d362d 100%);
      background     : linear-gradient(to bottom, #f85032 0%, #6d362d 100%);
      font-size      : 24px;
      font-weight    : 800;
      color          : #fff;
      text-align     : center
    }
    /* End add _box_css_*/

Of course, if that was all that PowerCSS provided, why bother?  It
just seems like a more convoluted method to create CSS than a text editor.
The **Power** in PowerCSS is provided by the flexibility, speed, and
application control you can exercise using its features.

## The Allure of Options
Even the default behavior of compressed PowerCSS can results in benefits
over static CSS:

- It can be faster for initial load, depending on network speed.
- The code can compressed to be smaller than native CSS

There are many more benefits available, however. Let's explore how we can
adjust our example to take advantage of PowerCSS.

### CSS Keys
One may notice that all the keys for our CSS are look like `_this_`.
This format allows for a very high level of compression compared to regular
CSS.  If there is a CSS key you require, simply add it to the PowerCSS
key map, and it will be used accordingly.  We have compiled a pretty
exhaustive list, but are always more.  Alternately, if your application
only uses a small subset of these keys, you may prune this map.

We are considering how to best modularize the CSS key and CSS value
maps.  Suggestions are welcome :)

### Value subsitutions
There are three types of CSS values supported by PowerCSS. They are:

1. Mixin values : `_key_`
2. Literals     : `[ 'value' ]`
3. Alternates   : `{ _alt_list_ : [ ... ] }`

In addition, we can `lock` a value in a cascade.  
These are all discussed in detail below.

### Mixin values
**Important!** As of the 0.1.x release, only the **builtin** mixin values
are supported. We expect to add the additional levels in a few days.
All mixin maps will be settable through a `pcss._setMixinMap_()` method.
Details will follow as these are released.

Mixin values available at four levels in PowerCSS.  They are only
used at this time to set CSS values, not key names. These levels are
as follows:

1. At the **builtin** level. This is a set of common values that
   are available by default. Examples include `_fixed_`, which
   resolves to 'fixed' in the resulting CSS.  We use the `_name_`
   format because it allows for very high levels of compression.
2. At the **global** level. This mixin map will be used across all
   **metasheets** and, as a consequence, by all **vsheets** they use.
3. At the **metasheet** level. This mixin map is exclusive to one
   **metasheet** and will be used by all **vsheets** in cascade list.
4. At the **vsheet** level.  This mixin map is exclusive to one **vsheet**.

When resolving mixin symbols, the "closest" match "wins." Let's consider the
following PowerCSS rule definition as an example:

    rule_map : { background : _bcolor_, ... }

Now let's set a value at three levels.  The the available values would
then be:

    builtin._bcolor_   = undefined;
    global._bcolor_    = 'red';
    metasheet._bcolor_ = 'green';
    vsheet._bcolor_    = 'blue';

Here the **vsheet** level value, 'blue', will "win" and the CSS processor
will use that instead of any **metasheet**, **global**, or **builtin** value.
In other words, the resulting CSS will read `background:blue`.

What if we used a **vsheet** that didn't have a mixin\_map?  Then
the mixin value would be set at three levels:

    builtin._bcolor_   = undefined;
    global._bcolor_    = [ 'red'   ];
    metasheet._bcolor_ = [ 'green' ];
    vsheet._bcolor_    = undefined;

Here the **metasheet** level value, 'green', will "win" and the CSS processor
will use that instead of any **global**, or **builtin** value.
In other words, the resulting CSS will read `background:green`.
And so on.  If at the end of this cascade the value is undefined, a blank
string will be used as the value and a warning logged to the console.

An astute reader will notice that a **vsheet** can be used across many
**metasheets**.  This is a very powerful feature, but it is important to keep
that in mind when setting vsheet-specific mixin maps.

### Literal values
Literal values are just that: a string you want to use as-is.  Simply wrap any
string in an array to have it read as a literal, as illustrated below:

    rule_map : { background : [ 'blue' ], ... }

We use an array wrapper as a literal array wrapper so that the code will be
very compressor friendly.

### Alternate values
Sometimes we want to provide alternate rules for a style so that
our code will work across multiple browsers. In this case, we can
wrap all alternate values in an object with an `_alt_list_` property.

    _background_ : {
      _alt_list_ : [
        '_xfff_',
        [ '#f85032' ],
        [ '-moz-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
        [ '-webkit-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
        [ 'linear-gradient(to bottom, #f85032 0%, #6d362d 100%)' ]
      ]
    }

The resulting CSS will look like so:

      background : #fff;
      background : #f85032;
      background : -moz-linear-gradient(left, #f85032 0%, #6d362d 100%);
      background : -webkit-linear-gradient(left, #f85032 0%, #6d362d 100%);
      background : linear-gradient(to bottom, #f85032 0%, #6d362d 100%);

We are not limited literal values as the us of the builtin mixin key 
like `_xfff_` shows.  We could even define the `alt_map` as a mixin,
and replace the above declaration like so:

    _background_ : _bk_red_black_map_

Remember the order of alternatives in CSS is important: the last supported
declaration will be used in lieu of all others.

### Locked values
Typically in a cascade, the last property value in "wins". However, it
is feasible to prevent overwriting critical properties by **vsheet**s later
in the cascade. One just needs to specify rules to be locked for
the provided rule map in the **vsheet** definition:

    box_vsheet_list = [
      { _select_str_ : '.pcss-_box_',
        _locked_rule_list_ : [ '_font_size_' ],
        _rule_map_ : {
          _font_size_ : '16px'
          // ...
        }
      }
    ]

This prevents any later **vsheet** from overriding the value for
`_font_size_` for the `.pcss-_box_` selector in the cascade.

An astute reader will again notice that a **vsheet** can be used across many
**metasheets**.  Therefore, one must be careful when setting locks on a 
**vsheet** that will be reused in more than once.

### Compression
Not yet written.

### Double-buffering
Not yet written.

## Stay tuned...
There are lots of features and examples coming up soon.

## Release Notes
### Copyright (c)
2016 Michael S. Mikowski (mike[dot]mikowski[at]gmail[dotcom])

### License
MIT

### Version 0.1.x
This is the first "public release" versions of PowerCSS with a
single working example.

### Testing
I have yet to test across all platforms. Use with care.

## Similar Projects
[absurdjs][3], [responsive.j$][4]

## TODO
### Enhance implemented capabilities
- addVsheetList: consider renaming to setVsheetList; add mixin\_map opt
- addMetasheetObj: consider renaming to setMetasheetObj; add mixin\_map opt
- enableMetasheetObj

### Planned future capabilities
- nodejs support, especially with nodeunit-b
- CSS string output for debugging and regression testing
- timestamp-based minimal processing
- force full rerender on request (for debug purposes)
- getMixinMap( global or metasheet or vsheet, id )
- setMixinMap( global or metasheet or vsheet, id, mixin\_map )
- delVsheetList
- getVsheetList
- delMetasheetObj
- getMetasheetObj

## Contribute!
If you want to help out, like all jQuery plugins this is hosted at
GitHub. Any improvements or suggestions are welcome!
You can reach me at mike[dot]mikowski[at]gmail[dotcom].

## End
[0]:http://mmikowski.github.io/no-frameworks
[1]:http://www.amazon.com/dp/1617290750
[2]:http://manning.com/mikowski
[3]:http://absurdjs.com/
[4]:http://www.responsivejs.com/

