# PowerCSS by Michael S. Mikowski

# UNDER ACTIVE DEVELOPMENT. DO NOT USE (yet)!

Feel the power of run-time CSS! Create an infinite variety of styles as
your application needs them without the use of any external CSS. PowerCSS
is highly compressible and fast thanks to optimized merging, caching,
and double-buffering.
https://www.youtube.com/watch?v=rnkMjzhxw4s.

## Overview
The greatest problem with static CSS - whether it is written by an
expert or someone using {less} or Sass - is that it is not generated
at run-time. That makes the use of application control of styling
complex at best, and impossible at worst.

PowerCSS provides application-controlled CSS and therefore it is
infinitely adjustable by our application logic. Do we want to change
styling based on every users' device orientation, ambient temperature,
ambient light, GPS location, heart rate, *and* time of day? Assuming
the user device has these sensors, this is *easy and obvious* using
PowerCSS, and *impossible* with with static CSS solutions.

We feel that PowerCSS has not only acheived its primary goal, but that
it is better than static CSS in almost every other aspect as well.
It provides a simple and familiar API where experienced CSS authors
can use their existing skill to be up and running in minutes.
When properly implemented, a PowerCSS solution usually downloads
faster, renders faster after loading , and can speed up some CSS
operations by 10x or more.  What's not to like?

Sound exciting? If so, read on! First we will implement a PowerCSS
solution, and then we will discuss how and why PowerCSS works.

## Examples

### Adding a StyleSheet Object
StyleSheet Objects are added like so:

    obj_idx = pcss._addStyleSheetObj_(
      [ '_vsheet_0_', '_vsheet_2_', ... ]
    );

The index number of the created object is returned. The method requires
a list of virtual style sheets - and optionally a list of mixins - to
generate a single StyleSheet Object. Let's talk about Virtual Sheets
next.

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

## Use libraries instead of frameworks
If you are considering using an SPA framework, please read [Do you
really want an SPA framework?][3] first.

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

## END
[1]:http://www.amazon.com/dp/1617290750
[2]:http://manning.com/mikowski
[3]:http://mmikowski.github.io/no-frameworks
