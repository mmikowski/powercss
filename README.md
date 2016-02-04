PowerCss
========

Overview
--------
Feel the power of run-time CSS! Create run-time-defined, highly compressible, extremely fast,
infinitely adjustable, optimized, and double-buffered CSS without any files. 
https://www.youtube.com/watch?v=rnkMjzhxw4s.

Examples
--------
This first commit is to claim the name space.  Code will be following soon.

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


