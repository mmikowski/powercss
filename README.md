# PowerCSS 0.2.x by Michael S. Mikowski
This 0.2.x library is in development and is intended for early
adopters. It should be relatively stable and reliable and fast.
Quite a few features, testing, and examples have yet to be completed.
Use with caution and check back often - the library is changing
at a rapid pace.

## Use libraries, not frameworks
This is a library that strives to be best-in-class.
If you are considering using an SPA framework, please read [Do you
really want an SPA framework?][0] first.

## Overview
Unleash PowerCSS to create custom styling for every user that visits your
site. PowerCSS uses merging, caching, compression, and double-buffering
to exceed the speed and flexibility of static CSS.
See https://www.youtube.com/watch?v=rnkMjzhxw4s.

## Code Style
This plugin is written in the code style presented in the book
book **Single Page Web Applications - JavaScript end-to-end**
which is available from [Amazon][1] and directly from [Manning][2].
It passes JSLint. All object keys have an underdash prefix and suffix
like `_this_` which makes them easy targets for compression.

## The Goal
The greatest problem with static CSS - whether it is written by an
expert or someone using {less} or Sass - is that it is **not** created
at run-time. Application control of styling is at best limited, and at
worst, simply not possible.

PowerCSS provides application-controlled CSS and therefore it is
infinitely adjustable by run-time logic. Do we want to change
styling based on every users' device orientation, ambient temperature,
ambient light, GPS location, heart rate, *and* time of day? Assuming
the user device has these sensors, this is *fairly easy and obvious* using
PowerCSS, and *virtually impossible* with with static CSS solutions.

We feel that PowerCSS has not only achieved its primary goal, but that
it is better than static CSS in almost every other respect as well.
It provides a simple and familiar API where experienced CSS authors
can use their existing skills to be up and running in minutes.
When properly implemented, a PowerCSS solution usually downloads
faster, renders faster after loading, and can speed up some CSS
operations by 10x or more. What's not to like?

Sound exciting? If so, read on! First we implement a few PowerCSS
examples, and then we discuss how PowerCSS works.

## Example 001: The basics
Now let's review the work-flow before we jump into the example.

1. Create an HTML document that includes the pcss.js library and the code
   necessary to use it.
2. Add one or more virtual stylesheet lists (**vsheet**s) using PowerCSS.
   These look very much like traditional stylesheets in JSON syntax.
3. Define a **metasheet** which includes an ordered list of **vsheets**.
   This is very much like traditional CSS development where we link to
   static CSS files in an HTML document.
4. Enable the **metasheet** to apply the styling.


We were careful to change as little of the existing CSS work-flow as
possible. If you are comfortable with using static CSS, this should be
pretty familiar.

Also, keep in mind that **PowerCSS will never change your data.** This
means if you provide an array or object as an argument to a PowerCSS call,
it is **copied** and you can reuse your array or object without fear of
it being modified by PowerCSS at some later time.

### 1. Create `pcss._example001_.html` file
Let's create an HTML file named `pcss._example001_.html` to illustrate
the basic capabilities of PowerCSS. A complete copy of this file can
be found in the `examples` directory of the GitHub repository.

    <!DOCTYPE html>
    <html>
    <head>
      <title>PowerCSS Example 001</title>
      <script src="../pcss.js"></script>
      <script src="../pcss._example001_.js"></script>
      <script>
      window.onload = pcss._example001_;
      </script>
    </head>
    <body>
      <h1>PowerCSS - Example 001</h1>
      <div class="pcss-_box_">PowerCSS 01</div>
      <div class="pcss-_box_">PowerCSS 02</div>
      <div class="pcss-_box_">PowerCSS 03
        <input title="name" type="text" placeholder="your name here"/>
      </div>
    </body>
    </html>

### 2. Start the `pcss._example001_.js` file
Now let's start a JavaScript file named to `pcss._example001_.js` to
provide PowerCSS directives. A complete copy can of this file can
be found in the `examples` directory of the GitHub repository.
    /* pss._example001_.js
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
     *    10. css transition or animation definitions
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
of preferred CSS attribute order. Then we declare our function variables,
and finally we initialize the PowerCSS module.  And, yes, Virginia, our
code really *does* pass JSLint.

### 3. Add a 'base' virtual stylesheet list
A virtual stylesheet list (**vsheet**) contains the same information as a
traditional CSS file. An experienced CSS author should be able to adopt
the format with little trouble. Below we add a **vsheet** definition to
`pcss._example001_.js`:

      // Begin add _base_vsheet_
      base_vsheet_list = [
        { _select_str_  : 'body',
          _rule_map_     : {
            _display_    : '_block_',
            _box_sizing_ : '_border_box_',
            _padding_    : '_2rem_',
            _margin_     : '_0_',
            _font_family_: '_font_sans_',
            _font_size_  : [ '16px' ],
            _color_      : '_x888_'
          }
        },
        { _select_str_ : 'input',
          _rule_map_ : {
            _margin_        : '_d5rem_',
            _width_         : [ '10rem' ],
            _border_        : [ '.125rem solid #ddd' ],
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
        _vsheet_id_   : '_base_vsheet_',
        _vsheet_list_ : base_vsheet_list
      });
      // End add _base_vsheet_


We provide our selectors in a list because their order is important
in CSS.  PowerCSS records the **vsheet** definition, but it doesn't 
compile it to CSS yet - that comes later.

### 4. Add a 'box' virtual stylesheet list
Let's define and add another **vsheet**. Here we use a few
advanced features, but don't get lost in the details.
We will return to them soon enough:

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
      

Now we have two **vsheet**s. Let's use them!

### 5. Create a metasheet object
Let's a metasheet object (**metasheet**) like so:

      // Begin create a metasheet and enable it
      metasheet_obj = pcss._setMetasheetObj_({
        _cascade_list_ : [ '_base_vsheet_', '_box_vsheet_' ],
        _metasheet_id_ : '_example001_'
      });
      console.log( 
        'metasheet object BEFORE enable',
        JSON.stringify( metasheet_obj )
      );


The returned **metasheet** object contains the following attributes:

- `_cascade_list_` is as provided.
- `_metasheet_id_` as provided.
- `_merge_vsheet_list_` is a **vsheet** prepared by merging all
   the **vsheets** in the `_cascade_list_`. It is an intermediary
   format that resolves additions and redundancies, but it doesn't
   resolve values like CSS symbols or **mixins**.
   *In this example it is calculated and saved*.
- `_mixin_map_` is the **mixin** map used only for this **metasheet**.
   *In this example it is an empty map.*
- `_style_el_` is the `style` DOM element used by the **metasheet**.
  *In this example, the value is null because we haven't
  enabled this metasheet yet.*
- `_style_el_id_` is the DOM ID reserved for the browser style element
   created when we enable this **metasheet**.
   *In this example, the value is `pcss-0` because this is our
   first metasheet.*
- `_timesheet_map_` includes various timesheets that are used to only
  update the parts of the CSS generation process that need updating.
  *In this example, all times are set to the current timestamp, except
  for `_css_ms_` as the CSS has not yet been generated.*

We can verify these values by viewing the output in the JavaScript
console.

### 6. Enable the metasheet object
Let's now enable the **metasheet** and close our example function.

      pcss._enableMetasheetObj_({ _metasheet_id_ : '_example001_' });
      console.log( 
        'metasheet_obj AFTER enable',
        JSON.stringify( metasheet_obj )
      );
      // End create a metasheet and enable it
    };
    // END pcss._example001_


When we enable the **metasheet**, PowerCSS creates a *disabled* browser
style element with an id of `pcss-0`, calculates the CSS, and then
writes it to the `pcss-0` style element. It then disables
all `pcss-*` CSS, and, finally, it enables the `pcss-0` style element.

We can verify these changes by viewing the output in the JavaScript
console.  Can you see the difference in the **metasheet** object?  Both the
`_timestamp_map_._css_ms_` and the `_style_el_` attribute should have
changed.

### 7. Marvel at the results
When we open `pcss._example001_.html` in a modern browser, we should see
three boxes that have been styled according to the **metasheet**
definition. We can view the generated CSS in the browser using the
development tools and modify it as if we had written it ourselves.
Here it is formated with a few comments:

    /* Begin _base_ style */
    body {
      display     : block;
      box-sizing  : border-box;
      padding     : 2rem;
      margin      : 0;
      font-family : arial, helvetica, sans-serif;
      font-size   : 16px;
      color       : #888;
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
    /* End _base_ style */

    /* Begin _box_ style */
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
      font-size      : 1.5rem;
      font-weight    : 800;
      color          : #fff;
      text-align     : center
    }
    /* End _box_ style */


Of course, if that was all that PowerCSS provided, why bother?  It
would still be simpler to create static CSS a text editor. However,
when you need run-time powered, highly compressed, and high-performance
CSS techniques, PowerCSS really starts to shine.

## The Allure of Options
Even the default behavior of compressed PowerCSS can results in benefits
over static CSS:

- It can be faster for initial load, depending on network speed.
- The code can compressed to be smaller than native CSS

There are many more benefits available, however. Let's explore how we can
adjust our example to take advantage of PowerCSS.

### Rule key substitution.
A CSS rule declaration looks like the following:

    background-color : #fff;

The expression to the left of the color we refer to as the rule **key**.
The text after the colon but before the semicolon we refer to as the rule
**value**.  Here the key is 'color' and the value is '#ff0'.

Our **vsheets** are defined using *rule key substitution*. That is, we
use a symbol to indicate the actual key instead of the key itself.  For
example, to declare background-color, we use:

    _background_color_ : _xfff_,

At first glance, that might seem silly. However, rule key helps us greatly
reduce our file size when compressing our files.  In the example above,
our rule can be compressed to JavaScript symbols like so:

    nx:qr,

This is 22% of the size of the native CSS (5 vs 23 characters).
And some CSS keys and values can be especially verbose.  One downside to
this approach, of course, is we must declare the symbols initially.
The `cssKeyMap` defines our keyword meanings in the PowerCSS library
file, `pcss.js`.

We have compiled a pretty exhaustive list of commonly used keywords, but
the rule keys needed will vary from project to project.  We often prune
or expand this list, and suggest you do the same.  Currently if an
unknown key is encountered, a warning is logged to the console.

We are exploring how to best modularize the CSS key and value
mixin maps. Suggestions are welcome :)

### Rule value substitutions
There are three types of CSS values supported by PowerCSS. They are:

1. Mixin values : `_key_`
2. Literals     : `[ 'value' ]`
3. Alternates   : `{ _alt_list_ : [ ... ] }`

In addition, we can `lock` a value in a cascade.

### Mixin values
**Important!** As of the 0.2.x release, only the **builtin** mixin values
are supported. We expect to add the additional levels in the 0.3.x series
within a few days. All mixin maps will be settable through a 
`pcss._setMixinMap_()` method. Details will follow as these are released.

Mixin values come one of **four** sources:

1. The **builtin** value map, `cssValMap`. This is a set of common 
   CSS values that are available by default.  For example, the symbol
   `_fixed_` resolves to 'fixed' in the resulting CSS. This map is
   found in the the PowerCSS library file, `pcss.js`.
2. The **global** mixin map is used across all **metasheets** and, as 
   a consequence, by all **vsheets** they use.
3. **Metasheet** mixin maps are exclusive to one **metasheet** and 
   are used by all **vsheets** in their cascade list.
4. **Vsheet** mixin maps are exclusive to one **vsheet**.

The precidence of these mixin sources (also known as a 'scope chain')
is as follows:

    vsheet -> metasheet -> global -> builtin

This means that **vsheets** mixin values have priority over **metasheet**
mixin values which have priority over **global** mixin values which have 
priority over **builtin** values.  We think of this as "the closest match
wins." Consider the following PowerCSS rule definition:

    rule_map : { background : '_bcolor_', ... }

Now let's set a value at three levels. The the available values would
then be:

    builtin._bcolor_   = undefined;
    global._bcolor_    = 'red';
    metasheet._bcolor_ = 'green';
    vsheet._bcolor_    = 'blue';

Here the **vsheet** level value, 'blue', "wins" and the CSS processor
will use that instead of any **metasheet**, **global**, or **builtin** value.
In other words, the resulting CSS will read `background:blue`.

What if we used a **vsheet** that didn't have a mixin\_map?  Then
the mixin value would be set at three levels:

    builtin._bcolor_   = undefined;
    global._bcolor_    = 'red';
    metasheet._bcolor_ = 'green';
    vsheet._bcolor_    = undefined;

Here the **metasheet** level value, 'green', will "win" and the CSS generator
will use that instead of any **global**, or **builtin** value.
In other words, the resulting CSS will read `background:green`.
And so on. If the value is still undefined at the end of the scope chain,
a blank string will be used and a warning logged to the console.

An astute reader will notice that a **vsheet** can be used across many
**metasheets**. This is a very powerful feature, but it is important to keep
in mind when setting **vsheet** mixin maps.

### Literal values
Literal values are just that: a string you want to use as-is. Simply wrap any
string in an array to have it read as a literal, as illustrated below:

    rule_map : { background : [ 'blue' ], ... }

We use an array wrapper as a literal array wrapper so that PowerCSS does not
rely on symbol names to determine how to parse values. This makes it makes it
compressor friendly.

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

The resulting CSS:

      background : #fff;
      background : #f85032;
      background : -moz-linear-gradient(left, #f85032 0%, #6d362d 100%);
      background : -webkit-linear-gradient(left, #f85032 0%, #6d362d 100%);
      background : linear-gradient(to bottom, #f85032 0%, #6d362d 100%);

We are not limited literal values as the us of the builtin mixin key
like `_xfff_` shows. We could even define the `alt_map` as a mixin,
and replace the above declaration like so:

    _background_ : '_bk_redblack_map_',

Remember the order of alternatives in CSS is important: the last supported
declaration will always be used.

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
**metasheets**. Therefore, one must be careful when setting locks on a
**vsheet** that will be reused in more than once.

### Double-buffering
We illustrate "double-buffering" in `pcss._example002_.html` which
can be be found in the `examples` directory of the GitHub repository.
Here, we create two **metasheets** then switch between them at will.
PowerCSS never enables a **metasheet** until the CSS is completely
written. This "double-buffering" technique allow us to change all
styles on a page with just one document reflow, which can be insanely
fast compared to changing styles individually.

Only one **metasheet** is enabled at any time.
PowerCSS is intended to replace **all** other stylesheets for an
application, and external stylesheets are no longer needed. While
we can use external sheets during development, we don't need them
for production release. Don't worry, this isn't as drastic as it
sounds. Third-party web components work fine with PowerCSS, as it 
plays very nicely with others.

Why do we promote this?  There are numerous benefits.  First, the 
browser rendering engine doesn't need to work loading and merging 
sometimes dozens of external style sheets. We calculate the cascade
in software and only provide to the browser an optimized and complete
single stylesheet to use.  This also removes many HTTP requests for
external stylsheets.

We have numerous layers of caching as well.  The CSS is never
rewritten unless something has changed, and even a great deal of our
processing - the merging of **vsheets** - is cached well before we
normally need the CSS.  If we change a **mixin** map, we can be
confident that PowerCSS will identify and change the affected
**metasheets** when needed.

### Compression
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
- setVsheetList: add mixin\_map opt
- setMetasheetObj: add mixin\_map opt
- enableMetasheetObj: disable other pcss sheets

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

