# PowerCSS - JavaScript-powered real-time CSS
## Overview
Unleash JavaScript to create custom styling for every person that uses
your web application. PowerCSS employs merging, caching, compression, and
double-buffering to exceed the flexibility - and often the speed - of
static CSS files. Here is a [presentation][1] of some of the PowerCSS
concepts in practice. The dedicated website is at [powercss.org][2].

## The Goal
A significant problem with traditional CSS files - whether written by an
expert or someone using {less} or Sass - is that they are **not** written
at run-time. With static CSS, application controlled styling that is
responsive to the user's environment is either limited or
simply not possible.

PowerCSS provides the tools to write and apply infinitely adjustable CSS
based on almost any real-time data available to an application: device
orientation, ambient temperature, ambient light, GPS location,
heart rate, or time of day. Traditional static CSS files can't compete with
this flexibility.

We feel that PowerCSS has achieved its primary goal and is often better
than static CSS in many other respects as well. It provides a simple and
familiar API where experienced CSS authors can use their existing skills
to be up and running in minutes. A minified PowerCSS solution can download
faster, render faster after loading, and can speed up some operations by 10x
or more compared to traditional CSS. What's not to like?

## Key benefits

- **Real-time styling** - Create custom styling for every user of your
  application at any time.
- **Pure JS** - Remove the need for **any** static CSS files.
- **Name-spaced** - Play well with frameworks, jQuery, other libraries,
  and third-party JavaScript.
- **Double-buffering** - Minimize page re-flows with this automatic
  feature. It can speed up some styling changes by more than 10x.
- **Merging and caching** - Control when your styling is updated
  using time-based minimal processing.
- **Mixins** - Create custom symbols at multiple levels: virtual
  stylesheet, virtual cascade, and global. Change a mixin map and watch
  the styles change immediately.
- **Familiar work-flow** - Leverage your experience with static CSS
  files using virtual stylesheets and cascades.
- **Machine optimized CSS** - Have the browser work more efficiently
  as only **one stylesheet** is used for styling at any given time,
  and **numerous redundancies** are removed during its preparation.
- **Highly compressible** - Compress your styling to a fraction of static CSS.
- **Quality code** - Use well tested and documented code. A commit hook is
  used to ensure no changes occur unless they pass **JSLint**
  *and* **regression tests**.
- **Media queries** and arbitrary-depth conditionals
- **MIT license**
- **No dependencies**

## Code Style
PowerCSS is [a library][0] written in the code style presented in the
book **Single Page Web Applications - JavaScript end-to-end**
which is available from [Amazon][3] and directly from [Manning][4].
It uses a **git** hook to block any code that fails to pass JSLint and
regression tests. All object keys have an underscore prefix and suffix
like `_this_` which makes them easy targets for compression.

PowerCSS employs a strict data integrity policy: All regular methods
never change an argument. Only the utility method `_extendRuleMap_`
changes an argument and this is explicit stated in the API docs.
Conversely, PowerCSS does not return pointers to its arrays or objects;
instead one can acquire snapshots using `_getAssetJson_`
and `_getAssetIdList_`.

## Example 001: The basics
We were careful to change as little of the existing CSS work-flow as
possible. Here are the steps we will take to create our first example:

1. Create an HTML document
2. Start a JavaScript file
3. Add (virtual) stylesheets
4. Add and use a (virtual) cascade


Let's get started!

### 1. Create an HTML document
Let's create an HTML file named `pcss._ex001_.html` to illustrate
the basic capabilities of PowerCSS. A complete copy of this file can
be found in the `node_modules/powercss/examples` directory or [online][7].

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <!-- Mobile settings
    see http://www.html5rocks.com/en/mobile/touch.html -->
  <meta name="viewport" content="width=device-width user-scalable=no
  initial-scale=.8,maximum-scale=.8"/>
  <meta name="apple-mobile-web-app-capable" content="yes">
  <!-- ie9+ rendering support for latest standards -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <title>PowerCSS Example 001</title>
  <script src="../dist/pcss.js"></script>
  <script src="js/pcss._ex001_.js"></script>
  <script>
    function onLoadWin() {
      pcss._ex001_();
      // ... analytics code ...
    }
    window.onload = onLoadWin;
  </script>
</head>
<body>
  <div id="pcss-_head_"></div>
  <a href="../"><div class="pcss-_logo_" title="PowerCSS"></div></a>
  <h2>Example 001: The basics</h2>
  <div class="pcss-_box_">PowerCSS 01<br/>
    <input title="name" type="text" placeholder="your name here"/>
  </div>
  <div class="pcss-_box_">PowerCSS 03</div>
  <div class="pcss-_box_">PowerCSS 04</div>
  <div class="pcss-_box_">PowerCSS 04</div>
  <div class="pcss-_box_">PowerCSS 05</div>
  <div class="pcss-_box_">PowerCSS 06</div>
  <div class="pcss-_box_">PowerCSS 07</div>
  <div class="pcss-_box_">PowerCSS 08</div>
  <div class="pcss-_box_">PowerCSS 09</div>
  <div class="pcss-_box_">PowerCSS 10</div>
  <div class="pcss-_box_">PowerCSS 11</div>
  <div class="pcss-_box_">PowerCSS 12</div>
  <div class="pcss-_box_">PowerCSS 13</div>
  <div class="pcss-_box_">PowerCSS 14</div>
  <div class="pcss-_box_">PowerCSS 15</div>
  <div class="pcss-_box_">PowerCSS 16</div>
  <div class="pcss-_box_">PowerCSS 17</div>
  <div class="pcss-_box_">PowerCSS 18</div>
  <div class="pcss-_box_">PowerCSS 19</div>
  <div class="pcss-_box_">PowerCSS 20</div>
</body>
</html>
```

Our strategy is to first render the CSS, then the HTML,
and *then* enable analytics. On load, the `body` is not displayed.
This is changed once the PowerCSS stylesheet is written and enabled.

### 2. Start a JavaScript file
Let's start a JavaScript file named to `pcss._ex001_.js` to
provide PowerCSS directives. A complete copy can of this file can
be found in the `node_modules/powercss/examples/js` directory or [online][8].

We start our module with identification, JSLint settings, and a reminder
of preferred CSS attribute order. Then we declare our function variables,
and finally we initialize the PowerCSS module.

```js
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
  var baseSelectorList, boxSelectorList;

  pcss._initModule_();
```

Yes, Virginia, our code really *does* pass JSLint.

### 3. Add (virtual) stylesheets
Virtual stylesheets (**vsheets**) contain the same information as a
traditional CSS file but in JSON format and using symbols instead of
literal strings.  Let's add two **vsheets** definition to `pcss._ex001_.js`.
Don't worry about the syntax yet; we will discuss that in the **Mixin maps**
section.

```js
  // Begin define selector lists
  baseSelectorList = [
    { _selector_str_  : 'body',
      _rule_map_     : {
        _display_    : '_block_',
        _margin_     : '_0_',
        _padding_    : [[ '_2d5rem_', '_2rem_' ]],
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
    },
    { _selector_str_ : '#pcss-_head_',
      _rule_map_   : {
        _position_      : '_fixed_',
        _z_index_       : '_1_',
        _top_           : '_0_',
        _left_          : '_0_',
        _right_         : '_0_',
        _height_        : '_2rem_',
        _box_shadow_    : [[
          ['rgba( 64, 32, 32, .5)'], '_0_', '_0_', '_d5rem_', '_0_'
        ]],
        _padding_       : '_0_',
        _background_    : '_xeee_'
      }
    }
  ];

  boxSelectorList = [
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
            [ '-moz-linear-gradient(left, #f85032 0%, #6d362d 100%)'    ],
            [ '-webkit-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
            [ 'linear-gradient(to bottom, #f85032 0%, #6d362d 100%)'    ]
          ]
        },
        _font_size_      : '_1d5rem_',
        _font_weight_    : '_800_',
        _color_          : '_xfff_',
        _text_align_     : '_center_'
      }
    }
  ];
  // End define selector lists

  // Begin Add vsheets
  pcss._setVsheet_({
    _vsheet_id_     : '_box01_',
    _mode_str_      : '_add_',
    _selector_list_ : boxSelectorList
  });

  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_add_',
    _selector_list_ : baseSelectorList
  });
  // End Add vsheets
```


Selectors are defined in a list because their order is important
in CSS. PowerCSS records the **vsheet** definition, but it doesn't
compile it to CSS yet - that comes later.  Now that we have two
**vsheets**, let's use them in a virtual **cascade**.

### 4. Add and use a (virtual) cascade
Now we will define a **cascade** which includes an ordered list of **vsheets**.
This is very much like traditional CSS development where we link to static
stylesheet files in an HTML document.  A **cascade** merges multiple **vsheets**
into one. This is similar to how a browser merges multiple CSS files on load.
However, with PowerCSS we can have many **cascades** which are automatically
updated whenever any change affects them.

Let's add one now:

```js
  // Begin add and use _c01_ cascade
  pcss._setCascade_({
    _cascade_id_     : '_c01_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_base_', '_box01_' ],
    _regen_type_     : '_use_'
  });
  // End add and use _c01_ cascade
};
```


We can now save the `pcss._ex001_.js` file. Now let's review the results.

### What we have wrought
When we [open][7] `pcss._ex001_.html` in a modern browser, we should
multiple boxes that have been styled according to the **cascade**.
We can view the generated CSS in the browser using the development
tools and modify it as if we had written it ourselves:

```css
/* Begin _base_ style */
body {
  display     : block;
  margin      : 0;
  padding     : 2.5rem 2rem;
  background  : #ddd;
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

.pcss-_logo_ {
  background-image : url(http://mmikowski.github.io/images/2016-02-22-pcss.png);
  background-size  : cover;
  width  : 20.75rem;
  height : 10.125rem
}

#pcss-_head_ {
  position   : fixed;
  z-index    : 1;
  top        : 0;
  left       : 0;
  right      : 0;
  height     : 2rem;
  box-shadow : rgba( 64, 32, 32, .5) 0 0 .5rem 0;
  padding    : 0;
  background : #eee
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
  border         : .25rem solid #eee;
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
```


Of course, if that was all that PowerCSS provided, why bother?
When all we need static styling it is certainly simpler to create
traditional CSS files using a nice, comfortable text editor or IDE.
However, when we need our application to change styling based on
any real-time environmental factor, that's where PowerCSS really
shines.

## Example 002: Double-buffering
This example is illustrated by `pcss._ex002_.html` which can
be found in the `node_modules/powercss/examples` directory or [online][9].
Open the file with your browser to see the results.

Double-buffering is an common technique to minimize processing and
flicker across many areas of computer graphics. PowerCSS creates two
`style` elements, and switches between them to apply CSS.
PowerCSS never enables a `style` element until the CSS is completely
written to it. This allows us to change all styles on a page with just
one document re-flow, which can be insanely fast compared to changing
styles individually from multiple stylesheets.

PowerCSS is intended to replace **all** stylesheets for an
application. While we can use external sheets for our CSS during
development, we shouldn't need them for production release.
PowerCSS plays very nicely with others and is designed to avoid conflict
with third-party web components.

## Example 003: **Mixin maps**
This example is illustrated by `pcss._ex003_.html` which can
be found in the `node_modules/powercss/examples` directory or [online][10].
Open the file with your browser to see the results.

### Symbol substitution
A CSS rule declaration looks like the following:

```css
background-color : #fff;
```


The expression to the left of the color we refer to as the rule **key**.
The text after the colon but before the semicolon we refer to as the rule
**value**. Here the **key** is `color` and the **value** is `#fff`.

Our **vsheets** are defined using *symbol substitution*. That is, we
use a symbol to indicate the actual key and *often* the value instead of
the literal values. For example, to declare background-color, we use:

```js
_background_color_ : '_xfff_'
```


At first glance, that might seem silly. However, using symbols for rule
**keys** and **values** help us greatly when compressing our files.
In the example above, our JavaScript rule can be compressed like so:

```js
nx:'qr'
```


This is 24% of the size of the native CSS (7 vs 29 characters).
And some CSS keys and values can be especially verbose. One downside to
this approach, of course, is we must declare the symbols initially.
The `cssKeyMap` defines our rule **key** symbols in the PowerCSS library
file, `pcss.js`, and `cssValMap` defines our common rule **value** symbols.
**Value** symbols may also be extended with **mixin** maps.

We have compiled a pretty exhaustive list of commonly used keywords and values,
but the rule keys needed will vary depending on project. During development,
if we use a unknown key, a warning is logged to the JavaScript console and
the rule is skipped. One can easily copy these symbols into `pcss.js`
and make sure they are defined in `cssKeyMap` or `cssValMap` as required.

Alternately, when we have completed a project, we use a simple Perl script
to report the number of users for each `_symbol_` across the project.
A symbol that only appears once is not used except for its declaration,
and therefore can be safely deleted, e.g. "pruned."

We are exploring how to improve the initialization of the `cssKeyMap`
and `cssValMap` data. Suggestions are welcome :)

### Rule value substitutions
There are four types of CSS value substitution supported by PowerCSS:

1. Mixin values : `'_key_'`
2. Literals     : `[ 'literal' ]`
3. Alternates   : `{ _alt_list_ : [ '_key_', [ 'literal' ], ... ] }`
4. Concatenated : `[[ '_key_', [ 'literal' ], ... ]]`

In addition, we can `lock` a rule value in a cascade.

### Setting a **mixin map**
**mixin map**s are settable at the **vsheet**, **cascade**, or global level
as illustrated below:

```js
  // Vsheet option - add
  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_add_',
    _selector_list_ : base_selector_list,
    _mixin_map_     : base_mixin_map
  });

  // Vsheet option - change
  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_change_',
    _mixin_map_     : base_mixin_map
  });

  // Cascade option - add
  pcss._setCascade_({
    _cascade_id_     : '_c01_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_base_', '_box_' ],
    _mixin_map_      : c01_mixin_map
  });

  // Cascade option - change
  pcss._setCascade_({
    _cascade_id_     : '_c01_',
    _mode_str_       : '_change_',
    _mixin_map_      : c01_mixin_map
  });

  // Global option
  pcss._setGlobalMixinMap_({
    _mode_str_   : '_add_',
    _mixin_map_  : global_mixin_map,
  });
```

A **mixin map** is simple key-value pair object as illustrated below:

```js
  // Example mixin map
  mixin_map = {
    _body_font_size_  : '16px',
    _body_font_color_ : '#a44',
    _input_width_     : '10rem',
    _input_border_    : '.125rem solid #ddd'
  };
```


We can get a copy of a **mixin map** using `_getAssetJson_`.

### The four type of **mixin maps**
PowerCSS uses values from four **mixin map** types:

1. The **built-in** value map, `cssValMap`. This is a set of common
   CSS values that are available by default. For example, the symbol
   `_fixed_` resolves to 'fixed' in the resulting CSS. This map is
   found in the the PowerCSS library file, `pcss.js`.
2. The **global mixin map** is used across all **cascades** and, as
   a consequence, by all **vsheets** they use.
3. **Cascade mixin maps** are exclusive to one **cascade** and
   are used by all **vsheets** in their cascade list.
4. **Vsheet mixin maps** are exclusive to one **vsheet**.

### **mixin map** precedence
The precedence of these **mixin maps** (also known as a 'scope chain')
is as follows:

```bash
  vsheet > cascade > global > built-in
```


This means that **vsheets** mixin values have priority over **cascade**
mixin values which have priority over **global** mixin values which have
priority over **built-in** values. Think of this as "the last match
wins." Consider the following PowerCSS rule definition:

```js
  rule_map : { _background_ : '_bcolor_', ... }
```


Now let's define **mixin map** values at three levels.
In pseudo code, it looks something like this:

```js
  builtin._bcolor_ = undefined;
  global._bcolor_  = 'red';
  cascade._bcolor_ = 'green';
  vsheet._bcolor_  = 'blue';
```


Here the **vsheet** level value, 'blue', "wins" and the CSS processor
will use *that* instead of any **cascade**, **global**, or **built-in** value.
In other words, the resulting CSS will read `background:blue`.

What if we have multiple **vsheets** that set `_bcolor_`? Easy: the last
vsheet in the cascade to set `_bcolor_` wins unless the value has been
**locked** earlier in the *cascade* - see the **Locked values**
section below.

What if we used a **vsheet** that didn't have a mixin map? Then
the mixin value would be defined at just two levels:

```js
  builtin._bcolor_ = undefined;
  global._bcolor_  = 'red';
  cascade._bcolor_ = 'green';
  vsheet._bcolor_  = undefined;
```


Here the **cascade** level value will "win" and the CSS generator
will use 'green' instead of any **global** or **built-in** value.
And so on. If the value is still undefined at the end of the scope chain,
a warning is issued and the property (`background`, in this case) is skipped.

An astute reader will notice that a **vsheet** can be used across many
**cascades** which is a powerful capability. However, do keep this in
in mind when setting **mixin maps** at the **vsheet** level.

### Literal values
Literal values are just that: a string we want to use as-is. Simply wrap any
string in an array to have it read as a literal, as illustrated below:

```js
  rule_map : { _background_ : [ 'blue' ], ... }
```


We use an array wrapper to identify literals instead of symbol names.
This makes our code very compressor friendly.

### Alternate values
Sometimes we want to provide alternate rules for a style so that
our code will work across multiple browsers. In this case, we can
wrap all alternate values in an object with an `_alt_list_` property.

```js
  { _selector_str_ : 'body',
    rule_map : {
      _background_ : {
        _alt_list_ : [
          '_xfff_',
          [ '#f85032' ],
          [ '-moz-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
          [ '-webkit-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
          [ 'linear-gradient(to bottom, #f85032 0%, #6d362d 100%)' ]
        ]
      }
    }
  }
```


The resulting CSS:

```css
background : #fff;
background : #f85032;
background : -moz-linear-gradient(left, #f85032 0%, #6d362d 100%);
background : -webkit-linear-gradient(left, #f85032 0%, #6d362d 100%);
background : linear-gradient(to bottom, #f85032 0%, #6d362d 100%);
```


We are not limited literal values as the us of the built-in mixin key
like `_xfff_` shows. We could even define the entire alternatives map
as a mixin, like so:

```js
  mixin_map = {
    _global_red_grad_map_ : {
      _alt_list_ : [
        '_xfff_',
        [ '#f85032' ],
        [ '-moz-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
        [ '-webkit-linear-gradient(left, #f85032 0%, #6d362d 100%)' ],
        [ 'linear-gradient(to bottom, #f85032 0%, #6d362d 100%)' ]
      ]
    }
  };
```


... and replace the above declaration in the **vsheet** definition. If we
use gradient many times, we save lots of space, especially after compression.
Because now everywhere we want to use it, the line declaration becomes:

```js
      _background_ : '_global_red_grad_map_'
```


This compresses to something like the following, which is 2.9% the size
of the minimized CSS equivalent:

```js
ck:'_r'
```


Remember the order of alternatives in CSS is important: the last supported
declaration will always be used.

### Concatenated values
Sometimes we want to use multiple literal or key values as a single string,
usually separated by a space. For this we use a "double list" technique:

```js
  { _selector_str_ : 'li',
    _rule_map_ : {
      _border_ : [[ '_d125rem_', '_solid_' [ '#f85032' ] ]],
      ...
    }
  }
```


This is very similar to alternate values. The resulting CSS should
look like this.

    border : .125rem solid #f85032

We can use built-in, mixin and literal values, as the example above shows.

### Locked values
Typically in a cascade, the last property value in "wins". However, it
is feasible to prevent overwriting critical properties later
in the cascade. One just needs to specify rules to be locked for
the provided rule map in the **vsheet** definition:

    box_selector_list = [
      { _select_str_ : '.pcss-_box_',
        _locked_rule_list_ : [ '_font_size_' ],
        _rule_map_ : {
          _font_size_ : [ '16px' ]
          // ...
        }
      }
    ];

This prevents any later **vsheet** from overriding the value for
`_font_size_` for the `.pcss-_box_` selector in the cascade.

An astute reader will again notice that a **vsheet** can be used across
many **cascades**. Please keep this in mind when locking rule values.

## Example 004: Compression
This example is illustrated by `pcss._ex004_.html` which can
be found in the `node_modules/powercss/examples` directory or [online][11].
Open the file with your browser to see the results.

CSS uses long keywords and values, and is often quite repetitive.
A PowerCSS solution can often be compressed to a fraction of the size
of minimized CSS. Consider the example above where we created the
`_global_red_grad_map_` symbol. The initial definition required 276
characters, or 113% of minimized CSS. However, if we use this symbol
more than once, we come out far ahead, as the compressed PowerCSS
representation is only 2.9% the size of the minimized CSS. If we use
the gradient 3 times, the PowerCSS representation is 39.5% the size of
minimized CSS. If we use it 5 times, the PowerCSS representation is
less than 25% the size.

PowerCSS code and modules that use it can be highly compressed thanks to
the use of easily recognized symbols that start and end in an underscore like
`_css_str_`. After concatenating all JavaScript files in our project,
we can replace these symbols with unique tokens, using the shortest tokens
for the most common symbols. We call this the **SuperPack** technique, and
we can often reduce file size to 50% of `UglifyJS` alone.

In Example 004, the PowerCSS library and the CSS directives were reduced to
30% of their original size, and to 15% when using the SuperPack" technique
described above.

## Example 005: Performance
This example is illustrated by `pcss._ex005_.html` which can
be found in the `node_modules/powercss/examples` directory or [online][11].
Open the file with your browser to see the results.

We have taken great care to ensure PowerCSS is as fast, or sometimes
even faster than static CSS. We calculate the cascades in
software and only provide to the browser a single optimized stylesheet
to render. The browser rendering engine doesn't need to work loading
and merging sometimes dozens of external stylesheets.

Any change to PowerCSS has up to four process phases:

1. Update the data stored in PowerCSS
2. Merge the selector list and mixin maps of any affected cascades
3. Create and store the CSS of any affected cascades
4. Write the CSS to the stylesheet element

The `_setVsheet_`, `_setCascade_`, and `_setGlobalMixinMap_` methods
all accept a `_regen_type_` parameter which defines how far to proceed
with processing on **all cascades** affected by a change. The accepted
values are listed below, along with the defaults:

```
_regen_type_ value means for the affect cascades:
  '_none_'      | no processing now
  '_merge_' [1] | Merge selector lists and mixin maps now
  '_prepare_'   | Merge and create CSS now
  '_all_'   [2] | Merge, create CSS, and if the cascade is currently
                | active, double-buffer switch to the new CSS.
  '_use_'   [3] | Double-buffer switch to new CSS of this cascade

  [1] _merge_ This is the default when adding vsheets and cascades
  [2] _all_   This is the default when changing vsheets and cascades
              It is also the default for _setGlobalMixinMap_
  [3] _use_   This is only available for _setCascade_
```


We recommend sticking with the defaults until and if we see performance issues.
Depending on the application, setting `_regen_type_` to `_all_` for all
**vsheets** and **cascades** may make the most sense. For others, setting
`regen_type` to `_none_` and then directing all processing steps at their
convenience will provide the best solution. Here is an example:

```js
  // Initial definition of cascade
  pcss._setCascade_({
    _cascade_id_     : '_c01_',
    _mode_str_       : '_add_',
    _vsheet_id_list_ : [ '_base_', '_box_' ],
    _mixin_map_      : c01_mixin_map,
    _regen_type_     : '_none_'
  });

  // Vsheet _selector_list_ change
  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_change_',
    _selector_list_ : base_selector_list,
    _regen_type_    : '_none_'
  });

  // Vsheet _mixin_map_ change
  base_mixin_map._red01_ = '#822';
  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_change_',
    _mixin_map_     : base_mixin_map,
    _regen_type_    : '_none_'
  });

  // Cascade _mixin_map_ change
  c01_mixin_map._box_position_ = 'fixed';
  pcss._setCascade_({
    _cascade_id_ : '_c01_',
    _mode_str_   : '_change_'
    _mixin_map_  : c01_mixin_map
    _regen_type_ : '_none_'
  });

  // Process step 1: perform merge
  pcss._setCascade_({
    _cascade_id_ : '_c01_',
    _mode_str_   : '_change_'
    _regen_type_ : '_merge_'
  });

  // Process step 2: create CSS
  pcss._setCascade_({
    _cascade_id_ : '_c01_',
    _mode_str_   : '_change_'
    _regen_type_ : '_prepare_'
  });

  // Process step 3: write CSS to style el and enable
  pcss._setCascade_({
    _cascade_id_ : '_c01_',
    _mode_str_   : '_change_'
    _regen_type_ : '_use_'
  });
```

The default `_regen_type_` may change if test results warrant it.


## Conditional expressions

### Use
PowerCSS supports arbitrary-depth `conditional expressions` which
can be used to construct `@media` queries as described in the
**The Power Cookbook** section.

### Syntax
PowerCSS provides the `_begin_cond_str_` and `_end_cond_str_`
objects to create a conditional closure:

```js
  selector_list = [
    { _begin_cond_str_ : '.foo' },
    { _selector_str_ : '.baz',
      _rule_map_ : { _margin_ : '_0_' }
    },
    { _end_cond_str_ : '' },
    ...
  ]
```

This will result in the following *invalid* CSS text:

```css
  .foo{ .baz{ margin : 0 } }
```

### Nesting
We can nest conditional expressions as deep as we want and PowerCSS
will create the closures:

```js
  selector_list = [
    { _begin_cond_str_ : '.foo' },
    { _begin_cond_str_ : '.bar' },
    { _begin_cond_str_ : '.bing' },
    { _selector_str_ : '.baz',
      _rule_map_ : { _margin_ : '_0_' }
    },
    { _end_cond_str_ : '' },
    { _end_cond_str_ : '' },
    { _end_cond_str_ : '' },
    ...
  ]
```

This will result in the following *invalid* CSS:

```css
  .foo{ .bar{ .bing{ .baz{ margin : 0 } } } }
```

We can optionally include the end condition string to ensure
our closures match.  If they do not, a warning is printed to
the console:

```js
  selector_list = [
    { _begin_cond_str_ : '.foo' },
    { _begin_cond_str_ : '.bar' },
    { _begin_cond_str_ : '.bing' },
    { _selector_str_ : '.baz',
      _rule_map_ : { '_margin_' : '_0_' }
    }
    { _end_cond_str_ : '.bing' }
    { _end_cond_str_ : '.bar' }
    { _end_cond_str_ : '.foo' }
```

### Redundancies
PowerCSS will combine and remove redundancies for each unique scope.
The latest declaration always 'wins'. Consider the following declaration:

```js
  selector_list = [
    { _begin_cond_str_ : '.foo' },
    { _selector_str_ : '.baz',
      _rule_map_ : {
        _top_     : '_0_',
        _margin_  : '_0_',
        _padding_ : '_1rem_'
      }
    },
    { _end_cond_str_ : 'foo' },
    ...

    { _begin_cond_str_ : '.foo' },
    { _selector_str_ : '.baz',
      _rule_map_ : {
        _top_     : '_1rem_',
        _padding_ : '_0_'
      }
    },
    { _end_cond_str_ : 'foo' },
    ...
  ]
```

This will result in a single conditional expression in the output CSS:

```css
  .foo{
    .baz{
      top     : 1rem; /* 2nd declaration */
      margin  : 0;    /* 1st */
      padding : 0;    /* 2nd */
    }
  }
```

### Future use
Future implementations of CSS will support [arbitrary-depth nesting][13]
and PowerCSS should be ready with minor changes.

## The PowerCSS cookbook
No matter how clean an API, sometimes its easier to think in terms
of "what do we want to accomplish."  This is perhaps the reason
programming language "cookbooks" have been so successful over the
years. Our most popular recipes are listed below.

### Virtual stylesheet (**vsheet**) recipes
#### Add a **vsheet**

```js
  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_add_',
    _selector_list_ : [...],
    _mixin_map_     : {...}
  });
```


#### Change a **vsheet** selector list

```js
  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_change_',
    _selector_list_ : [...]
  });
```


#### Change a **vsheet** mixin map

```js
  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_change_',
    _mixin_map_     : {...}
  });
```

#### Add a media query to a **vsheet**
The following `selector_list` adjustments will provide a media
query closure:

```js
  selector_list = [
    { _begin_cond_str_ : '@media all and (max-width: 550px)' },
    { _selector_str_ : '.my-foot-box',
      _rule_map_ : { _margin_ : '_0_' }
    }
    { _end_cond_str_ : '' }
  ]
```

The resulting CSS:

```css
  @media all and (max-width: 550px){
    .my-foot-box{ margin : 0 }
  }
```

#### Add a font face to a **vsheet**

Using the bullet-proof font declaration format:

```js
  selector_list = [
    { _selector_str_ : '@font-face',
      _rule_map_ : {
        _font_family_ : [ 'myFont' ],
        _src_  : [
            "url('font/myFont.eot?') format('embedded-opentype'),"
          + "url('font/myFont.woff') format('woff'),"
          + "url('font/myFont.ttf') format('truetype')"
        ]
      }
    },
    ...
  ]
```

#### Delete a **vsheet** selector list
Deleting a selector list independently is not supported.
However, one may change the `_selector_list_` to an empty array
for a similar effect. Setting the value to `undefined` will
not work.

```js
  pcss._setVsheet_({
    _vsheet_id_     : '_base_',
    _mode_str_      : '_change_',
    _selector_list_ : []
  });
```


#### Delete a **vsheet** mixin map
Deleting a vsheet mixin map independently is not supported.
However, one may change `_mixin_map_` to an empty object
for a similar effect. Setting the value to `undefined` will
not work.

```js
  pcss._setVsheet_({
    _vsheet_id_ : '_base_',
    _mode_str_  : '_change_',
    _mixin_map_ : {}
  });
```


#### Delete an entire **vsheet**
Recall that deleting a single **vsheet** will redefine all
**cascades** that use it. Setting `_regen_type_` to
`_none_` will ensure no processing will take place as a result
of this call, whereas setting it to `_all_` will result in
all **cascades** being processed as fully is possible.
If an active cascade is currently in use, it will double-buffer
switched to the updated CSS as soon as it is ready.

```js
  pcss._setVsheet_({
    _vsheet_id_  : '_base_vsheet',
    _mode_str_   : '_delete_',
    _regen_str_  : '_none_'
  });
```


#### Copy an entire **vsheet**

```js
  pcss._getAssetJson_({
    _asset_type_ : '_vsheet_'
    _asset_id_   : '_base_'
  });
```


#### Copy the selector list of a **vsheet**

```js
  pcss._getAssetJson_({
    _asset_type_    : '_vsheet_'
    _asset_subtype_ : '_selector_list_'
    _asset_id_      : '_base_'
  });
```


#### Use the same selector list to define multiple **vsheets**
Because PowerCSS never changes our data, we can create a
selector list definition, use it to create a **vsheet**, modify it,
and then use it to create another, **vsheet**. This process can be repeated
indefinitely. Here is an example:

```js
  // Define _box01_ vsheet
  box_selector_list = [
    { _selector_str_   : '.pcss-_box_',
      _rule_lock_list_ : [ '_font_size_' ],
      _rule_map_ : {
        _display_        : '_inline_block_',
        _opacity_        : '_1_'
      }
    }
  ];
  pcss._setVsheet_({
    _vsheet_id_     : '_box01_',
    _mode_str_      : '_add_',
    _selector_list_ : box_selector_list
  });

  // Modify and create _box01_ vsheet
  pcss._extendRuleMap( box_selector_list, { _color_ : '_x444_' } );
  pcss._setVsheet_({
    _vsheet_id_     : '_box02_',
    _mode_str_      : '_add_',
    _selector_list_ : box_selector_list
  });
```


### **Cascade** recipes

#### Add a new **cascade**

```js
  pcss._setCascade_({
    _cascade_id_      : '_std_',
    _mode_str_        : '_add_',
    _vsheet_id_list_  : [ '_base_', '_box_' ]
    _mixin_map_       : {...}
  });
```


#### Change a **cascade** vsheet id list

```js
  pcss._setCascade_({
    _cascade_id_     : '_std_',
    _mode_str_       : '_change_',
    _vsheet_id_list_ : [...]
  });
```


#### Change a cascade mixin map

```js
  pcss._setCascade_({
    _cascade_id_     : '_std_',
    _mode_str_       : '_change_',
    _mixin_map_      : {...}
  });
```


#### Delete a vsheet id list from a **cascade**
Deleting a vsheet ID list independently is not supported.
However, one may change the `_vsheet_id_list_` to an empty array
for a similar effect. Setting the value to `undefined` will
not work.

```js
  pcss._setCascade_({
    _cascade_id_     : '_std_',
    _mode_str_       : '_change_',
    _vsheet_id_list_ : []
  });
```


#### Delete a mixin map from a **cascade**
Deleting a mixin map independently is not supported.
However, one may change the `_mixin_map_` to an empty array
for a similar effect. Setting the value to `undefined` will
not work.

```js
  pcss._setCascade_({
    _cascade_id_     : '_std_',
    _mode_str_       : '_change_',
    _mixin_map_      : {}
  });
```


#### Delete an entire **cascade**
Deleting a cascade will only affect that cascade, so setting
`_regen_type_` has no affect. If a cascade is in-use,
the styling will be removed.

```js
  pcss._setCascade_({
    _cascade_id_ : '_std_',
    _mode_str_   : '_delete_'
  });
```


#### Prepare a **cascade** so the CSS is ready to use

```js
  pcss._setCascade({
    _cascade_id_ : '_std_',
    _mode_str_   : '_change_',
    _regen_type_ : '_prepare_'
  }
```


#### Use a **cascade**

```js
  pcss._setCascade({
    _cascade_id_ : '_std_',
    _mode_str_   : '_change_',
    _regen_type_ : '_use_'
  }
```


#### Copy an entire **cascade**

```js
  pcss._getAssetJson_({
    _asset_type_    : '_std_'
    _asset_id_      : '_normal_'
  });
```


#### Copy just the vsheet id list of a **cascade**

```js
  pcss._getAssetJson_({
    _asset_type_    : '_cascade_'
    _asset_subtype_ : '_vsheet_id_list_'
    _asset_id_      : '_std_'
  });
```


### General recipes

#### Set the style element prefixes

```js
pcss._initModule_({_style_el_prefix_ : 'ns' });
```

The style element prefix may only be set once on the initial call.
Subsequent calls will ignore any request to change this.

#### Get the current style prefix

```js
style_el_prefix = pcss._initModule_();
```

The `_initModule_` method returns the style prefix in use.

#### Disable PowerCSS

```js
pcss._togglePcss_( false );
```


#### Enable PowerCSS

```js
pcss._togglePcss_( true );
```


#### Toggle PowerCSS

```js
pcss._togglePcss();
```


#### Change the global mixin map

```js
pcss._setGlobalMixinMap_({
  _mode_type_ : 'change',
  _mixin_map_ : { ... }
});
```

## API reference - Events

- `_pcss_merged_`
- `_pcss_prepared_`
- `_pcss_used_`

```
Example    | document.addEventListener( '_pcss_prepared_', onPrepared );
Purpose    | Report process states for cascades
Attributes | event_obj._data_ is set to the _cascade_id_
Settings   | none
Notes      | Every time a cascade merge, prepare, or use is enabled, an
           | event tied to the document object is fired.
```

## API reference - Methods

### `_initModule_`

```
Example   | pcss._initModule_({
          |   _style_el_prefix_ : 'ns',
          |   _css_key_map_     : {...},
          |   _css_val_map_     : {...}
          | });
Purpose   | Initializes style elements using the provided prefix
Arguments | _style_el_prefix_  (opt) A prefix to name-space the two 
          |   <style> elements. If not provided, the prefix 'pcss'
          |    will be used.
          | _css_key_map_, _css_val_map_ (opt) Maps to used to look-up
          |   CSS keys and values respectively.
Settings  | none
Throws    | A string error object if style elements already exist
Returns   | The style prefix, e.g. 'ns-'
```


### `_extendRuleMap_`

```
Example   | pcss._extendRuleMap_( rule_map, { _color_ : '_x444_' } );
Purpose   | A utility to extend a rule_map with new or revised
          | values. Providing a value of 'null' deletes a key.
          | pcss._extendRuleMap_( rule_map, { _color_ : null } );
Arguments | (positional)
          | 0 : base_map   - the map to be extended
          | 1 : extend_map - the map containing new key-value pairs
Settings  | none
Throws    | none
Returns   | none
          |   - base_map is modified.
          |   - extend_map is not.
```


### `_setGlobalMixinMap_`

```
Example   | pcss._setGlobalMixinMap_({
          |   _mode_type_ : 'add',
          |   _mixin_map_ : mixin_map
          | });
Purpose   | Add, change, delete, or update process status for
          | a global mixin map id.
          |
Arguments | _mode_type_  (req) '_add_', '_change_', or '_delete_'
          | _mixin_map_  (opt)
          | _regen_type_ (opt) '_none_', '_merge_', '_prepare_', or '_all_'
Notes     | _regen_type_ defaults to '_all_' if not provided.
Settings  | none
Throws    | none
Returns   | The number of vsheets affected by the change
```


### `_togglePcss_`

```
Example   | pcss._togglePcss_( true );
Purpose   | Enable or disable PowerCSS
Arguments | Boolean (optional)
          | If not provided, will toggle PowerCSS on or off.
          | If provided, true will turn PowerCSS on, and false
          | will turn PowerCSS off.
Settings  | none
Throws    | none
Returns   | true (enabled) or false (disabled)
```


### `_getAssetIdList_`

```
Example   | vsheet_id_list = pcss._getAssetIdList_({
          |   _asset_type_ : '_vsheet_'
          | });
          | cascade_id_list = pcss._getAssetIdList_({
          |   _asset_type_ : '_cascade_'
          | });
Purpose   | Return the list of all vsheets or cascades.
Arguments | _asset_type_ (req), either '_vsheet_' or '_cascade_'
Settings  | none
Throws    | none
Returns   | A list of the asset IDs requested. PowerCSS will
          | NEVER use this list pointer, so you may mutate as
          | you please.
```


### `_getAssetJson_`

```
Example   | pcss._getAssetJson_({
          |   _asset_id_      : '_c01_',
          |   _asset_type_    : '_cascade_'
          |   _asset_subtype_ : '_vsheet_id_list_'
          | })
Purpose   | Return a JSON snapshot of a vsheet or cascade.
Arguments | _asset_id_ (req) The existing ID of either a cascade
          |  or a vsheet.
          | _asset_type_ (req) '_vsheet_', '_cascade_',
          |   '_global_mixin_', '_el_cascade_list_',
          | _asset_subtype_ (opt)
          |   '_vsheet_' supports:
          |      _vsheet_id_,    _selector_list_,
          |      _selector_ms_,  _mixin_map_,
          |      _mixin_ms_
          |   '_cascade_' supports
          |      _cascade_id_,       _vsheet_id_list_
          |      _vsheet_ms_,        _mixin_map_
          |      _mixin_ms_,         _merged_selector_list_
          |      _merged_mixin_map_, _merged_selector_ms_
          |      _css_str_          _css_ms_
Settings  | none
Throws    | none
Returns   | A JSON string of the requested asset.
          | If there is no corresponding asset, the JSON string
          | returned is 'undefined'.
```


### `_setVsheet_`
See **The PowerCSS cookbook** section to see how `_setVsheet_`
may be used to accomplish common tasks.

```
Example   | pcss._setVsheet_({
          |   _vsheet_id_     : '_base_',
          |   _mode_str_      : '_add_',
          |   _selector_list_ : base_selector_list,
          |   _mixin_map_     : {},
          |   _regen_type_    : '_merge_'
          | });
Purpose   | Adds, changes, or deletes a vsheet
Arguments | _vsheet_id_    (req) The ID for a vsheet
          | _mode_str_     (req) '_add_', '_change_', or '_delete_'
          | _selector_list (opt) List of selectors this vsheet will
          |   represent in PowerCSS format.
          | _mixin_map_    (opt) The mixin_map for this vsheet.
          | _regen_type_   (opt) '_none_', '_merge_', '_prepare_',
          |                      or '_all_'
Notes     | _regen_type_ defaults to '_merge_' on Add, '_all_'
          | on other operations.
Settings  | none
Throws    | none
Returns   | vsheet_id, or undef on failure
```


### `_setCascade_`
See **The PowerCSS cookbook** section to explore how `_setCascade_`
may be used to accomplish common tasks.

```
Example   | pcss._setCascade_({
          |   _cascade_id_     : '_c01_',
          |   _mode_str_       : '_add_',
          |   _vsheet_id_list_ : [ '_base_', '_box_' ],
          |   _mixin_map_      : {},
          |   _regen_type_     : '_none_'
          | });
Purpose   | Adds, changes, or deletes a cascade
Arguments | _cascade_id_     (req) The ID for a cascade
          | _mode_str_       (req) '_add_', '_change_', or '_delete_'
          | _vsheet_id_list_ (opt) List of vsheet ids in order of
          |   application.
          | _mixin_map_      (opt) The mixin_map for this cascade.
          | _regen_type_     (opt) '_none_', '_merge_', '_prepare_',
          |                      or '_all_' (default is _merge_)
Notes     | _regen_type_ defaults to '_merge_' on Add, '_all_'
          | on other operations.
Settings  | none
Throws    | none
Returns   | cascade_id, or undef on failure
```
### `_getCssKeyMap_` (new in 1.2)

### `_getCssValMap_` (new in 1.2)

### `_getGlobalMixinMap_` (new in 1.2)

```
Example   | pcss._getGlobalMixinMap_();
Purpose   | Returns the currently set global mixin map.
Arguments | none
Notes     | This returns a mixinmap pointer, which can lead to problems
          | if the application tampers with the content.  Don't do that.
Settings  | none
Throws    | none
Returns   | The global mixin map.  This could be undef.
```

### `_setStyleAttr_` (new in 1.3)

```
Example   | pcss._setStyleAttr_({
          |   _selector_str_   : '.my_class',
          |   _attr_key_       : 'font-size',
          |   _attr_val_       : '12pt'
          | });
Purpose   | Immediately changes a selector definition in 
          | the currently active style sheet. In the example provided,
          | all text within the selected class would be resized to 12pt.
          | Each attribute change can cause a document reflow.
Arguments | _selector_str_   (req) A CSS selector like '#my_id'
          | _attr_key_       (req) A CSS attribute like 'color'
          | _attr_val_       (req) A CSS value like '#ff0000'
Notes     | Sometimes it is more efficient to change a single style than to
          | generate and double-buffer-switch a stylesheet.  Profile your
          | code if performance is important!
          | Future versions will accept a map of attributes to apply to a
          | single selector.
Settings  | none
Throws    | none
Returns   | undef
```

## Regression tests
Regression tests are found under the `test` directory.  You may
run using the `npm`, like so:

```bash
cd node_modules/powercss;
npm install; # install development dependencies
npm test;    # run regression tests
```

Code coverage metrics and production deployments are underway to help flush
out any remaining refinements or bugs. Assistance with regression tests in
the form of code or requested use cases is welcome!

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
- (x) First "public release" versions of PowerCSS with a working example.

### Version 0.2.x
- (x) Added double-buffering support and example.

### Version 0.3.x
- (x) Expanded API.
- (x) Added mixin maps at 4 levels.
- (x) Reverted to true double-buffering ( only 2 style elements ).

### Version 0.4.x
- (x) Expanded API.
- (x) Documented API reference section.

### Version 0.5.x
- (x) Refactored and greatly simplify API.
- (x) Implemented time-based minimal processing.
- (x) Added `_regen_type_` option to manage CSS generation processing.
- (x) Added `Recipes` section and expanded API reference.
- (x) Added inline API docs
- (x) Restructured project and launched powercss.org.

### Version 0.6.x
- (x) Added published events.
- (x) Created multiple automated regression tests.
- (x) Used NodeJS for testing with nodeunit-b.
- (x) Improved error handling.

### Version 0.7.x
- (x) Refactored resolver.
- (x) Made events cross-browser compatible (IE9+).
- (x) Added resolver regression tests.

### Version 1.0.x
- (x) Released 2016-03-25.

### Version 1.1.x 
- (x) Released 2016-03-25.
- (x) Added support for CSS conditional expressions.
- (x) Changed built-in keys to use "bottom" instead of "btm", as this was
  needlessly confusing.  Example: `_border_btm_` becomes `_border_bottom_`.
- Added method `_getGlobalMixinMap_`.
- Fully backward compatible to 1.0 API.

### Version 1.2.x
- (x) Released 2016-09-03.
- (x) Moved key and value maps to pcss.cfg.js.
- (x) Adjusted _initModule_ to allow support for custom keys and values.
- (x) Added `_getCssKeyMap_` and `_getCssValMap_` methods.
- (x) Fully backward compatible to 1.0 API

### Version 1.3.x (current)
- (x) Release 2016-09-12.
- (x) Expanded keywords support in pcss.cfg.js.
- (x) Removed unfinished bower support.
- (x) Added `setStyleAttr` which provides capability to change styles 
      after the stylesheet has been written.
- (x) Fully backward compatible to 1.0 API.

### Version 1.3.x (planned)
- (x) Update `setStyleAttr` to accept a map of attributes and values to 
  apply for a selector.

### Version 1.4.x (planned)
- (o) Use a double-buffered stylesheet per cascade.
  This would better support isolated web feature components,
  e.g. one for a chat feature, one for a comment feature, etc.
  Deleting a cascade should remove the associated stylesheet(s).
  Write the double-buffer stylesheet elements only as needed.
- (o) Provide tools to convert existing CSS to PowerCSS JavaScript.

### Version 1.5.x (planned)
- (o) Add extendo-map expansion

## Similar Projects
[absurdjs][5], [responsive.j$][6]

## Contribute!
If you want to help out with PowerCSS, we are hosted at
GitHub. Any improvements or suggestions are welcome!
You can reach me at mike[dot]mikowski[at]gmail[dotcom].

## End
[0]:http://mmikowski.github.io/no-frameworks
[1]:https://www.youtube.com/watch?v=rnkMjzhxw4s
[2]:http://powercss.org
[3]:http://www.amazon.com/dp/1617290750
[4]:http://manning.com/mikowski
[5]:http://absurdjs.com/
[6]:http://www.responsivejs.com/
[7]:http://powercss.org/examples/pcss._ex001_.html
[8]:http://powercss.org/examples/js/pcss._ex001_.js
[9]:http://powercss.org/examples/pcss._ex002_.html
[10]:http://powercss.org/examples/pcss._ex003_.html
[11]:http://powercss.org/examples/pcss._ex004_.html
[12]:http://powercss.org/examples/pcss._ex005_.html
[13]:https://tabatkins.github.io/specs/css-nesting
