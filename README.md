# PowerCSS 0.3.x by Michael S. Mikowski
This 0.3.x library is in development and is intended for early
adopters. It is relatively stable and fast. Some features, testing,
and examples have yet to be completed. Use with caution and check
back often - the library is changing at a rapid pace.

## Use libraries, not frameworks
This is a library that strives to be best-in-class.
If you are considering using an SPA framework, please read [Do you
really want an SPA framework?][0] first.

## Overview
Unleash PowerCSS to create custom styling for every user that visits your
site. PowerCSS uses merging, caching, compression, and double-buffering
to exceed the flexibility and often the speed of static CSS files.
Here is a [presentation](https://www.youtube.com/watch?v=rnkMjzhxw4s) of
some of the PowerCSS concepts in practice.

## Code Style
This library is written in the code style presented in the book
book **Single Page Web Applications - JavaScript end-to-end**
which is available from [Amazon][1] and directly from [Manning][2].
It passes JSLint. All object keys have an underscore prefix and suffix
like `_this_` which makes them easy targets for compression.

## The Goal
A significant problem with traditional CSS files - whether written by an
expert or someone using {less} or Sass - is that they are **not** created
at run-time. Application control of styling is at best limited, and at
worst, simply not possible.

PowerCSS provides our application the tools to write and apply infinitely
adjustable CSS based on almost any real-time data available to us.
For example, our application could use PowerCSS to adjust styling based on
device orientation, ambient temperature, ambient light, GPS location,
heart rate, or time of day. Traditional static CSS files can't compete with
this flexibility.

We feel that PowerCSS has not only achieved its primary goal, but that
it is often better than static CSS in many other respects as well.
It provides a simple and familiar API where experienced CSS authors
can use their existing skills to be up and running in minutes.
When properly implemented, a PowerCSS solution usually downloads
faster, renders faster after loading, and can speed up some CSS
operations by 10x or more. What's not to like?

Sound exciting? If so, read on! First we implement a few PowerCSS
examples, and then we discuss how PowerCSS works.

## Example 001: The basics
This example is illustrated by `pcss._example001_.html` which
can be be found in the `examples` directory of the GitHub repository.
Clone the repository and open the file with your browser to see the
results.

Let's review the work-flow of PowerCSS before we jump into the first
example.

1. Create an HTML document that includes the PowerCSS library and
   JavaScript example code which uses it.
2. Add one or more virtual stylesheet lists (**vsheet**s) using PowerCSS.
   These look very much like traditional stylesheets in JSON syntax.
3. Define a **cascade** which includes an ordered list of **vsheets**.
   This is very much like traditional CSS development where we link to
   static CSS files in an HTML document.
4. Enable the **cascade** to apply the styling.


We were careful to change as little of the existing CSS work-flow as
possible. If we are comfortable with using static CSS, this should be
pretty familiar.

**PowerCSS never changes our data.** This means if we provide an array or
object as an argument to a PowerCSS call, it is **copied** and we can use
it again *without fear of it being modified by PowerCSS at some later time*.
For the inverse reason, **PowerCSS does not return pointers to its
data**. Instead there are methods to get JSON snapshots of data for
debugging purposes. Do avoid using these methods for production
as they can be expensive and verbose.

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
        cascade_obj
        ;

      pcss._initModule_();


We start our module with identification, JSLint settings, and a reminder
of preferred CSS attribute order. Then we declare our function variables,
and finally we initialize the PowerCSS module. And, yes, Virginia, our
code really *does* pass JSLint.

The `pcss._initModule_()` creates two disabled `style` DOM elements. 
By default, these will have the IDs of `pcss-0` and `pcss-1`.  We can
change this by providing an alternate prefix, like so:

    pcss.initModule({ _style_el_prefix_ : 'foo' });

The above example results in the style elements of `foo-0` and `foo-1`. 

### 3. Add a 'base' virtual stylesheet list
A virtual stylesheet list (**vsheet**) contains the same information as a
traditional CSS file. An experienced CSS author should be able to adopt
the format with little trouble. Below we add a **vsheet** definition to
`pcss._example001_.js`:


      // Begin Add _base_vsheet_
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
      // End Add _base_vsheet_


We provide our selectors in a list because their order is important
in CSS. PowerCSS records the **vsheet** definition, but it doesn't
compile it to CSS yet - that comes later.

### 4. Add a 'box' virtual stylesheet list
Let's define and add another **vsheet**. Here we use a few
advanced features, but don't get lost in the details.
We will return to them soon enough:

      // Begin Add _box_vsheet_
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
      // End Add _box_vsheet_


Now we have two **vsheet**s. Let's use them!

### 5. Create a cascade object
Let's create a cascade object (**cascade**) like so:

      // Begin Create a cascade and enable it
      pcss._setCascadeObj_({
        _cascade_id_   : '_example001_',
        _cascade_list_ : [ '_base_vsheet_', '_box_vsheet_' ]
      });
      console.log(
        'cascade object BEFORE enable',
        pcss._getAssetJson({
          _asset_id_   : '_example001_',
          _asset_type_ : '_cascade_'
        })
      );


We use the `pcss._getAssetJson_()` method to get a look at the cascade object
created by PowerCSS. Here is the full list of attributes:

- `_cascade_id_` as provided.
- `_cascade_list_` is as provided.
- `_css_str_` is the CSS string generated for this **vsheet**.
  *In this example, the value is blank because we haven't
  enabled this cascade yet.*
- `_merged_vsheet_list_` is a **vsheet** prepared by merging all
  the **vsheets** in the `_cascade_list_`. It is an intermediary
  format that resolves additions and redundancies, but it doesn't
  resolve values like CSS symbols or **mixins**.
  *In this example it is calculated and saved*.
- `_merged_mixin_map_` is the **mixin** map used only for this **cascade**.
  *In this example it is an empty map.*
- `_style_el_` is the `style` DOM element used by the **cascade**.
  *In this example, the value is null because we haven't
  enabled this cascade yet.*
- `_time_map_` includes various timestamps that are used to minimize
  processing to update the CSS generation.
  *In this example, all times are set to 'now', except
  for `_css_ms_` as the CSS has not yet been generated.*

We can verify these values by viewing the output in the JavaScript
console.

### 6. Enable the cascade object
Let's now enable the **cascade** and close our example function.

      pcss._enableCascadeObj_({ _cascade_id_ : '_example001_' });
      console.log(
        'cascade_obj AFTER enable',
        pcss._getAssetJson({
          _asset_id_   : '_example001_',
          _asset_type_ : '_cascade_'
        })
      );
      // End Create a cascade and enable it
    };
    // END pcss._example001_


When we enable the **cascade**, PowerCSS calculates the CSS and
writes it to the first of two disabled `style` elements
created on initialization. Once this process is complete, the
element (`pcss-0`) is enabled and the CSS is applied by the browser
rendering engine.

We can verify these changes by viewing the output in the JavaScript
console. There are three changes after enabling the **cascade**:

1. `_css_str_`  is the the generated CSS string
2. `_style_el_` points to an actual style element
3. `_time_map_._css_ms_` is a recent timestamp

Of course, what is more imporant is what we see in the browser window.
Let's take a look at that next.

### 7. Marvel at the results
When we open `pcss._example001_.html` in a modern browser, we should
multiple boxes that have been styled according to the **cascade**.
We can view the generated CSS in the browser using the development
tools and modify it as if we had written it ourselves.
Here it is formated with a few comments:

    /* Begin _base_ style */
    body {
      display     : block;
      box-sizing  : border-box;
      padding     : 2rem;
      margin      : 0;
      font-family : arial, helvetica, sans-serif;
      font-size   : 16px;
      color       : #888
    }
    input {
      margin        : .5rem;
      width         : 10rem;
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
      box-shadow     : rgba( 0, 0, 0, .5) 0 0 .25rem 0;
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


Of course, if that was all that PowerCSS provided, why bother?
When we need static styling it is certainly simpler to create
traditional CSS files using a nice, comfortable text editor or IDE.
However, when we need our application to change styling based on user
device or any other environmental factor, that's where PowerCSS really
starts to shine.

## Example 002: Double-buffering
This example is illustrated by `pcss._example002_.html` which
can be be found in the `examples` directory of the GitHub repository.
Clone the repository and open the file with your browser to see the
results.

Double-buffering is an common technique to minimize processing and
flicker across many areas of computer graphics. PowerCSS creates two
`style` elements, and switches between them to apply CSS.
PowerCSS never enables a `style` element until the CSS is completely
written to it. This allows us to change all styles on a page with just
one document reflow, which can be insanely fast compared to changing
styles individually or updating multiple stylesheets.

PowerCSS is intended to replace **all** other stylesheets for an
application. While we can use external sheets for our CSS during
development, we shouldn't need them for production release.
Don't worry, this isn't as drastic as it sounds. PowerCSS
plays very nicely with others and is designed to avoid conflict
with third-party web components.

## Example 003: Mixin maps
This example is illustrated by `pcss._example003_.html` which
can be be found in the `examples` directory of the GitHub repository.
Clone the repository and open the file with your browser to see the
results.

### Rule key substitution.
A CSS rule declaration looks like the following:

    background-color : #fff;

The expression to the left of the color we refer to as the rule **key**.
The text after the colon but before the semicolon we refer to as the rule
**value**. Here the key is 'color' and the value is '#ff0'.

Our **vsheets** are defined using *rule key substitution*. That is, we
use a symbol to indicate the actual key instead of the key itself. For
example, to declare background-color, we use:

    _background_color_ : _xfff_,

At first glance, that might seem silly. However, rule key name and value
symbols help us greatly when compressing our files. In the example above,
our rule can be compressed to JavaScript like so:

    nx:qr,

This is 22% of the size of the native CSS (5 vs 23 characters).
And some CSS keys and values can be especially verbose. One downside to
this approach, of course, is we must declare the symbols initially.
The `cssKeyMap` defines our keyword meanings in the PowerCSS library
file, `pcss.js`.

We have compiled a pretty exhaustive list of commonly used keywords, but
the rule keys needed will vary from project to project. We often prune
or expand this list, and suggest you do the same. Currently if an
unknown key is encountered, a warning is logged to the console.

We are exploring how to best modularize the CSS key and value
mixin maps. Suggestions are welcome :)

### Rule value substitutions
There are four types of CSS values supported by PowerCSS. They are:

1. Mixin values : `_key_`
2. Literals     : `[ 'value' ]`
3. Alternates   : `{ _alt_list_ : [ ... ] }`
4. Concatenated : `[ [ 'key or value', ... ] ]` (pending implementation)

In addition, we can `lock` a value in a cascade.

### Setting a mixin map
Mixin maps are settable when creating a **vsheet** or
a **cascade** or later through a `pcss._setMixinMap_()` method,
as illustrated below:

      // Vsheet option
      pcss._setVsheetList_({
        _vsheet_id_   : '_base_vsheet_',
        _vsheet_list_ : base_vsheet_list,
        _mixin_map_   : base_mixin_map
      });

      // Cascade option
      pcss._setCascadeObj_({
        _cascade_id_ : '_example001_',
        _cascade_list_ : [
          '_base_vsheet_', '_switch_vsheet_', '_box_vsheet_',
        ],
        _mixin_map_   : base_mixin_map
      });

      // Generic solution
      pcss._setMixinMap_({
        _asset_id_   : '_base_vsheet_',
        _asset_type_ : '_vsheet_',
        _mixin_map_  : mixin_map
      });

When we use the generic `pcss._setMixinMap_()` method, the `_asset_type_`
may be `_vsheet_`, `_cascade_`, or `_global_`. The asset id, `_asset_id_`,
must be provided for `_vsheet_` and `_cascade_` asset types.
There is only one `_global_` mixin map, and any `_asset_id_` provided
will be ignored. The `_mixin_map_` is a simple key-value pair
object as illustrated below:

      // Example mixin map
      mixin_map = {
        _body_font_size_  : '16px',
        _body_font_color_ : '#a44',
        _input_width_     : '10rem',
        _input_border_    : '.125rem solid #ddd'
      };

Now let's see how we can retrieve a mixin map from PowerCSS.

### Getting mixin map JSON
We can get a copy of a mixin map data by using the `pcss._getMixinJson_()`
method:

      pcss._getMixinJson_({
        _asset_id_   : '_base_vsheet_',
        _asset_type_ : '_vsheet_',
      });

Now let's discuss when and where we can use mixin maps.

### The four type of mixin maps
PowerCSS uses values from **four** mixin map types:

1. The **builtin** value map, `cssValMap`. This is a set of common
   CSS values that are available by default. For example, the symbol
   `_fixed_` resolves to 'fixed' in the resulting CSS. This map is
   found in the the PowerCSS library file, `pcss.js`.
2. The **global** mixin map is used across all **cascades** and, as
   a consequence, by all **vsheets** they use.
3. **Cascade** mixin maps are exclusive to one **cascade** and
   are used by all **vsheets** in their cascade list.
4. **Vsheet** mixin maps are exclusive to one **vsheet**.

### Mixin map precidence
The precidence of these mixin maps (also known as a 'scope chain')
is as follows:

    vsheet > cascade > global > builtin

This means that **vsheets** mixin values have priority over **cascade**
mixin values which have priority over **global** mixin values which have
priority over **builtin** values. Think of this as "the closest match
wins." Consider the following PowerCSS rule definition:

    rule_map : { background : '_bcolor_', ... }

Now let's set mixin map value at three levels, in psuedo code:

    builtin._bcolor_   = undefined;
    global._bcolor_    = 'red';
    cascade._bcolor_   = 'green';
    vsheet._bcolor_    = 'blue';

Here the **vsheet** level value, 'blue', "wins" and the CSS processor
will use that instead of any **cascade**, **global**, or **builtin** value.
In other words, the resulting CSS will read `background:blue`.

What if we used a **vsheet** that didn't have a mixin\_map?  Then
the mixin value would be set at three levels:

    builtin._bcolor_   = undefined;
    global._bcolor_    = 'red';
    cascade._bcolor_   = 'green';
    vsheet._bcolor_    = undefined;

Here the **cascade** level value, 'green', will "win" and the CSS generator
will use that instead of any **global**, or **builtin** value.
In other words, the resulting CSS will read `background:green`.
And so on. If the value is still undefined at the end of the scope chain,
a warning is issued and the property (`background`, in this case) and the
property is not set.

An astute reader will notice that a **vsheet** can be used across many
**cascades**. This is a very powerful feature, but please keep this in
in mind when setting mixin maps at the **vsheet** level.

### Literal values
Literal values are just that: a string we want to use as-is. Simply wrap any
string in an array to have it read as a literal, as illustrated below:

    rule_map : { background : [ 'blue' ], ... }

We use an array wrapper as a literal array wrapper so that PowerCSS does not
rely on symbol names to determine how to parse values. This makes it makes it
compressor friendly.

### Alternate values
Sometimes we want to provide alternate rules for a style so that
our code will work across multiple browsers. In this case, we can
wrap all alternate values in an object with an `_alt_list_` property.

    rule_map : {
      _background_ : {
        _alt_list_ : [
          '_xfff_',
          [ '#f85032' ],
          [ '-moz-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
          [ '-webkit-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
          [ 'linear-gradient(to bottom, #f85032 0%, #6d362d 100%)' ]
        ]
      },
      ....
    }


The resulting CSS:

      background : #fff;
      background : #f85032;
      background : -moz-linear-gradient(left, #f85032 0%, #6d362d 100%);
      background : -webkit-linear-gradient(left, #f85032 0%, #6d362d 100%);
      background : linear-gradient(to bottom, #f85032 0%, #6d362d 100%);

We are not limited literal values as the us of the builtin mixin key
like `_xfff_` shows. We could even define the alternates map shown above
as a mixin, and replace the above declaration like so:

    _background_ : '_bkg_redblack_map_',

Remember the order of alternatives in CSS is important: the last supported
declaration will always be used.

### Concatenated values
**As of 0.3.x this feature is planned but not yet implemented.**

Sometimes we want to use multiple literal or key values as a single string,
usually separated by a space. For this we use a "double list" technique:

      rule_map : {
      _border_ : [[ '_d125rem_', '_solid_' [ '#f85032' ] ]],

This is very similar to alternate values. The resulting CSS should
look like this.

    border : .125rem solid #f85032


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

An astute reader will again notice that a **vsheet** can be used across
many **cascades**. Please keep this in mind when locking attrbitues.

## Performance
We have taken great care to ensure PowerCSS is as fast, or sometimes
even faster than static CSS. We calculate the cascades in
software and only provide to the browser a single optimized stylesheet
to render. The browser rendering engine doesn't need to work loading
and merging sometimes dozens of external style sheets. It also
removes the expensive associated HTTP requests for external stylsheets.

We have numerous layers of caching as well. We don't want to write
the CSS again unless something has changed, and even already keep
a great deal of our processing completed and cached before we *need*
the CSS, and we intend to add more. Examples include the merging of
**vsheets** and **mixins** and the creation of the style elements as well.
If we change a **mixin** map, we intend to have PowerCSS identify
only the affected **cascades** and update only them when needed.

## Compression
This example is illustrated by `pcss._example004_.html` which
can be be found in the `examples` directory of the GitHub repository.
Clone the repository and open the file with your browser to see the
results.

PowerCSS code and modules that use it can be highly compressed thanks to
the use of easily recognized symbols that start and end in an underscore like
`_css_str_`. After concatentating all JS files in our project, we can simply
the object key these patterns with unique tokens, using shorter tokens for the
most common symbols. We can often reduce file size to half again of UglifyJS
alone!

In our example, the PowerCSS library and the CSS directives where reduced to
30% of their original size, and to 15% when using the "SuperPack" key
technique.

## Regression tests
TODO

## Compatibility
Confirmed to work on Chrome 48, Safari 9, Firefox 44, IE 9+,
and Edge browsers. We expect it to work on much earlier versions of
Chrome, Safari, and Firefox, but have yet to determine how low we can go.

## Release Notes
### Copyright (c)
2016 Michael S. Mikowski (mike[dot]mikowski[at]gmail[dotcom])

### License
MIT

### Version 0.1.x
- First "public release" versions of PowerCSS with a working example.

### Version 0.2.x
- Added double-buffering support and example

### Version 0.3.x
Currently under development.
- API change from 0.2.x: **metasheet** becomes **cascade**
- Results-focused documentation updates
- Added mixin support at 4 levels
- Reverted to true double-buffering ( only 2 style elements )
- `setVsheetList`: added mixin\_map opt
- `setCascadeObj`: added mixin\_map opt
- `enableCascadeObj`: alternated pcss sheets
- `setMixinMap`: implemented and documented
- `delVsheetList`: damn-the-torpedos implementation
- `delMixinMap`: damn-the-torpedos implementation
- `delCascadeObj`: placeholder

WIP:
- `delVsheetList` update logic
- `delCascadeObj` update logic
- `delCascadeObj` update logic
- Add inline API docs to code

### Version 0.4.x
TODO:
- Time-based minimal processing
- pcss._prepareCascade_(): method to partially or completely compile
   a **cascade** at the developer's discretion
- Allow a complete (full-force) recompilation of the cascade for testing

### Version 0.5.x
TODO:
- nodejs support, especially with nodeunit-b
- Compatibility test to earlier versions of Chrome and firefox

### Version 0.6.x
TODO:
- regression tests
- error handling improvements as needed

### Version 1.x
TODO:
- Production-ready code

## Similar Projects
[absurdjs][3], [responsive.j$][4]

- force full rerender on request (for debug purposes)

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

