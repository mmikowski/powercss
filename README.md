PowerCss
========

Overview
--------
PowerCSS provides run-time generated, double-buffered CSS optimized for
performance. The core technology is currently used by over 100 million web
users every day. See https://www.youtube.com/watch?v=rnkMjzhxw4s.

Examples
--------
This first commit is to claim the name space.  Code will be following soon.

Prerequisites
-------------
A modern browser, e.g. IE9+.  Chrome or Firefox preferred.

Implementation
--------------
See powercss.html for example implementation.

Error handling
--------------
TODO.

Avoid complex 'SPA framework' libraries
---------------------------------------
jQuery, this, and  a few other well-chosen tools forms
a fantastic basis for a lean, easy to use SPA architecture
as detailed in [Single page web applications, JavaScript end-to-end][1]
also available on [Manning][2].

When we use libraries **we** control the code instead of being at the mercy of the
limitations and bugs in the [framework-of-the month][17].  This **inversion
of control** is a major impediment in building a a nimble, flexible, testable,
and maintainable application that can stand the test of time.

I once used a framework and found I had to wait months for a new
version to support a desired feature. Once I updated the library
I found the "joy" of trying to find and fix all the regressions.  Which,
of course wasn't easy, because frameworks tend to intermingle display
and business logic.  So testing a framework application often requires
an **additional** framework for testing the simplest of logic.  Check out
this example.  Now, how are we going to [regression test our applicaiton
in 4 seconds][18] with the framework-of-the-month? Exactly.

Using libraries allow us to swap them out when better ones become
available - **or not** - based on the time and resource we have available.
We can mix and match the best-in-class tools instead of using a mish-mash of
mediocre solutions provided by a framework or writing constant "exception"
methods to avoid, say, Backbone's awful templating or AJAX mechanisms.
Since we control the application, we can easily decoupled display and business
logic and make use nodeunit-b for testing. And we can **leverage** jQuery's
maturity, performance, and excellent tools instead of **competing** with them.

Here is my current preferred list of libraries:

| Capability   | Tool                 | Notes                             |
| ------------ | -------------------- | --------------------------------- |
| DOM + Util   | [jQuery][3]          | A powerful, stable, tight library |
| AJAX         | [jQuery][3]          | ... but prefer WebSockets, see below |
| Client Data  | [taffyDB][4]         | A powerful and flexible SQL-like client data management tool |
| DynamicCSS   | [PowerCSS][5]        | This package                      |
| Linting      | [JSLint][6]          | Avoid stupid mistakes with a commit hook |
| Events, promises | [Global Events][7] | Use the same event and promise methods for both logical and browser events |
| Routing      | [uriAnchor][8]       | A jQuery plugin for robust routing that includes support for dependent and independent query arguments |
| SVG          | [D3][9]              | Easy graphs and charts            |
|              | [SVG][10]            | Low-level jQuery plugin           |
| Templates    | [Dust][11]           | Uses a powerful template DSL that minimizes the temptation to intermingle  business and display logic |
| Testing      | [Nodeunit-b][12]     | Create a lightening fast regression test suite and use it as a commit hook |
| Touch        | [Unified events][13] | Unified desktop and touch events  |
| WebSockets   | [Socket io][14]      | The WebSockets protocol is faster and more flexible than AJAX for most applicaitons. Consider using [pure websockets][15] client with a [websocket][16] server on a NodeJs |


I hope to release an `npm` module that includes an architecture diagram,
some example code, and all the above lib dependencies can easily get started
without the constraints of the framework-of-the-month.

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
[absurdjs][19], [responsive.j$][20]

Contribute!
-----------
Any improvements or suggestions are welcome! You can reach me at
mike[dot]mikowski[at]gmail[dotcom].

Cheers, Mike

END
---

[1]:http://www.amazon.com/dp/1617290750
[2]:http://manning.com/mikowski
[3]:http://jquery.com/download
[4]:https://github.com/typicaljoe/taffydb
[5]:https://www.npmjs.com/package/powercss
[6]:https://www.npmjs.com/package/jslint
[7]:https://github.com/mmikowski/jquery.event.gevent
[8]:https://github.com/mmikowski/urianchor
[9]:https://github.com/mbostock/d3
[10]:http://keith-wood.name/svg.html
[11]:http://linkedin.github.io/dustjs
[12]:https://www.npmjs.com/package/nodeunit-b
[13]:https://github.com/mmikowski/jquery.event.ue
[14]:http://socket.io
[15]:https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications
[16]:https://www.npmjs.com/package/websocket
[17]:https://aerotwist.com/blog/the-cost-of-frameworks
[18]:https://youtu.be/aoH0J6lL2w0?t=47m15s
[19]:http://absurdjs.com/
[20]:http://www.responsivejs.com/

