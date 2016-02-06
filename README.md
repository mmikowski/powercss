PowerCSS by Michael S. Mikowski
===============================

UNDER ACTIVE DEVELOPMENT. DO NOT USE (yet)!
============================================
Feel the power of run-time CSS! Create an infinite variety of styles as
your application needs them without the use of any external CSS. PowerCSS
is highly compressible and fast thanks to optimized merging, caching,
and double-buffering.
https://www.youtube.com/watch?v=rnkMjzhxw4s.

# The Goal
The greatest problem with static CSS - whether it is written by an
expert or someone using {less} or Sass - is that it is not generated
at run-time. That makes development and performance of programatic
styling awkward at best, and impossible at worst.

PowerCSS provides application controlled-CSS and therefore it is
infinitely adjustable by the application logic. Do you want to change
styling based on every users' device orientation, ambient temperature,
ambient light, GPS location, *and* time of day? This is *easy and obvious*
using PowerCSS, and *impossible* with with static CSS solutions.

PowerCSS is designed to be better in almost every respect compared to
static CSS while allowing experience CSS authors to leverage their
existing skills in a simple and natural API. When compressed, it downloads
faster, usually renders faster on first load, and can speed up some CSS
operations by an order of magnitude - or more. All while offering
application-controlled CSS.

Sound exciting? If so, read on! First we will implement a PowerCSS
solution, and then we will discuss how and why PowerCSS works.


# Getting started (bottom-up)
TODO

# How PowerCSS Works
PowerCSS uses a number of techniques to provide powerful and fast
programatic CSS control while leveraging the skills of existing CSS
authors. Let's we discuss the key concepts we have employed in our efforts.

## PowerCSS applies only one StyleSheet at a time
Only one PowerCSS-controlled stylesheet is enabled at any time.
This is intended to replace **all** of our other stylesheets.
While it is possible to *have* other stylesheets, the goal of PowerCSS is
to make them obsolete for production applications. Third-party
web components will, of course, provide their own CSS, and that's OK,
PowerCSS plays well with others.

Why only one? In a word, speed. First, the work required by the
rendering engine is reduced as it only needs to reference a single
stylesheet, instead of sometimes dozens as with other stylesheets -
each of which are applied as they load. If we have 12 external
stylesheets, that's potentially 12 document reflows.
Second, our single active sheet is calculated and optimized by PowerCSS
before it is ever applied, which means a large amount of redundany
is removed from the sheet compared to a typical cascade.
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
CSS for our StyleSheet objects can be one quarter the size of the
native CSS after compression.

If you use the same naming convention on classes and ID's, the same
compression can take place. So a class name like
`.pcss-_xtable-inner-cell-selected_` can be compressed to something
like `pcss-qx`. This has numerous performance benefits as well.

## Multiple StyleSheet objects
PowerCSS maintains multiple StyleSheet objects even though
only one will be active at any time. These have, by default, the IDs
of pcss-0, pcss-1, ... pcss-N. If there is a conflict with
other DOM IDs, we can change the prefix using
`pcss._setSheetIdPrefix_( 'ig-' );`. This must be called *before*
any other methods, or it will throw a nasty exception.

## Adding a StyleSheet object
StyleSheet objects are added like so:

    obj_idx = pcss._addStyleSheetObj_(
      [ '_vsheet_0_', '_vsheet_2_', ... ]
    );

The index number of the created object is returned. The method requires
a list of virtual style sheets - and optionally a list of mixins - to
generate a single StyleSheet object. Let's talk about Virtual Sheets
next.

## Virtual Sheets
A Virtual Sheet contain the same information as a traditional CSS file,
and with little adjustment an experienced CSS author should be able to
in just a few minutes. Adding a StyleSheet object
with a list of `VSheet`s works very much like including multiple
static CSS stylesheet files to an HTML document. As with the former, the
order of the sheets is important!

## Mixins
PowerCSS supports mixins that can be reconsidered anytime. Set the map of
values using the `_setMixinMap_` method. This map applies across all VSheets.

## Enabling a StyleSheet object
We can enable a defined StyleSheet object using
`pcss._enableSheetObj_( 0 );`. This will disable 
any previously enabled sheet object (if any) and enable
the first one. We can use this capability for double,
tripple, or n-level buffering. Using StyleSheet Object
switching can much faster than adjusting indivdual CSS
values since it results in just one single document reflow.
In some cases, the performance increase can be 10x or greater!
Overview
--------
Feel the power of run-time CSS! Create an infinite variety of styles as
your application needs them without the use of any external. It is
highly compressible and fast thanks to optimized merging, caching,
and double-buffering.
https://www.youtube.com/watch?v=rnkMjzhxw4s.

Examples
--------
This first commit is to claim the name space. Code will be following soon.

Prerequisites
-------------
A modern browser like Chrome or Firefox. IE9+ is also supported for the
Luddite in your soul or boardroom.

Implementation
--------------
See powercss.html for example implementation.

Error handling
--------------
PowerCSS will throw an exception if it cannot perform the requested
method.  It should be invoked within a `try-catch` block.

Avoid complex and controlling SPA frameworks
--------------------------------------------
My experience is that jQuery, this, and other best-in-class libraries
are a much better foundation for building a modern SPA instead of the
framework-of-then-month.  First I start with a simple and clean
[SPA architecture, p10][1] as detailed in 
[Single page web applications, JavaScript end-to-end][2]
(also available directly from [Manning][3]), and then I add libraries
that are best suited to my application.

When we use libraries **we** control the code instead of being at the mercy of the
limitations and bugs in the framework-of-the month. This [inversion
of control][4] is a major impediment in building a a nimble, flexible, testable,
and maintainable application that can stand the test of time.
We can swap libraries out when they are updated or better one becomes
available - **or not** - based on the time and resource we have available.
We can mix and match the **best-for-our-purposes** instead of using a framework's
mishmash of solutions of varying quality.  Why, for example, should one
need override Backbone's awful templating and sync mechanisms when just removing
the framework results in simpler and easier to maintain code?

I once used a framework and had to wait months for a new
version to support a desired feature. Once the library was updated,
I discovered excruciating pain of trying to find and fix all the regressions.
It wasn't easy, of course, because (a) some of the bugs were within the 
framework itself, ands (b) frameworks tend to intermingle display
and business logic.  So testing a Single Page-Framework Application
(SPFA?) often requires an **additional** framework for testing the
simplest of logic.  How, exactly, can we [regression test our application
in less than a second][5] with the framework-of-the-month? Exactly.

Since we control the application, we can easily decouple display and business
logic and make use simple tools like `nodeunit` for headless testing.
And we can **leverage** jQuery's maturity, performance, and excellent tools
instead of **competing** with them.

I plan to release an `npm` module that includes an architecture diagram,
some example code, and dependencies to all the libraries I currently favor
so anyone can get started on a modern SPA without the constraints of the
framework-of-the-month.  If you are interested, **let me know** and 
I'll move faster.  And remember, if you don't like a library I've chosen,
**you can always swap it out!** Here is my current preferred list:

| Capability   | Library              | Notes                             |
| :----------- | :------------------- | :-------------------------------- |
| DOM + Util   | [jQuery][6]          | A powerful, stable, tight library |
| AJAX         | [jQuery][6]          | ... but prefer WebSockets, see below |
| Client Data  | [TaffyDB][7]         | A powerful and flexible SQL-like client data management tool |
| DynamicCSS   | [PowerCSS][8]        | This package                      |
| Linting      | [JSLint][9]          | Avoid stupid mistakes with a commit hook |
| Events, promises | [Global Events][10] | Use the same event and promise methods for both logical and browser events |
| Routing      | [uriAnchor][11]      | A jQuery plugin for robust routing that includes support for dependent and independent query arguments |
| SVG          | [D3][12]             | Easy graphs and charts            |
|              | [SVG][13]            | Low-level jQuery plugin           |
| Templates    | [Dust][14]           | Uses a powerful template DSL that minimizes the temptation to intermingle  business and display logic |
| Testing      | [Nodeunit-b][15]     | Create a lightening fast regression test suite and use it as a commit hook |
| Touch        | [Unified events][16] | Unified desktop and touch events  |
| WebSockets   | [Socket io][17]      | The WebSockets protocol is faster and more flexible than AJAX for most applications. Consider using [pure websockets][18] client with a [websocket][19] server on a NodeJs with modern browsers (IE10+) |

Release Notes
-------------
### Copyright (c)
2016 Michael S. Mikowski (mike[dot]mikowski[at]gmail[dotcom])

### License
MIT

### Version 0.0.x
Set-up commits and testing.

TODO
----
Add content.

Similar Projects
----------------
[absurdjs][20], [responsive.j$][21]

Contribute!
-----------
Any improvements or suggestions are welcome! You can reach me at
mike[dot]mikowski[at]gmail[dotcom].

Cheers, Mike

END
---
[1]:https://github.com/mmikowski/spa/blob/master/slides/2013-10-22-make_it_rock.pdf
[2]:http://www.amazon.com/dp/1617290750
[3]:http://manning.com/mikowski
[4]:https://aerotwist.com/blog/the-cost-of-frameworks
[5]:https://youtu.be/aoH0J6lL2w0?t=47m15s
[6]:http://jquery.com/download
[7]:https://github.com/typicaljoe/taffydb
[8]:https://www.npmjs.com/package/powercss
[9]:https://www.npmjs.com/package/jslint
[10]:https://github.com/mmikowski/jquery.event.gevent
[11]:https://github.com/mmikowski/urianchor
[12]:https://github.com/mbostock/d3
[13]:http://keith-wood.name/svg.html
[14]:http://linkedin.github.io/dustjs
[15]:https://www.npmjs.com/package/nodeunit-b
[16]:https://github.com/mmikowski/jquery.event.ue
[17]:http://socket.io
[18]:https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications
[19]:https://www.npmjs.com/package/websocket
[20]:http://absurdjs.com/
[21]:http://www.responsivejs.com/


