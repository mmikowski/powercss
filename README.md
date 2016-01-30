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
as detailed in [Single page web applications, JavaScript end-to-end][1].
Here are the recommended tools:

| Capability   | Tool                | Notes                             |
| ------------ | ------------------- | ----------------------------------|
| DynamicCSS   | PowerCSS            | This package                      |
| Websockets   | [Socket.io][6]      | Prefer websockets over AJAX.      |
| AJAX         | jQuery native       | Use jQuery AJAX methods.          |
| Promises     | jQuery native       | Use jQuery promise methods.       |
| Model Events | [Global Events][2]  | jQuery plugin eliminates having   |
|              |                     | to manage multiple event types.   |
| Touch        | [Unified events][3] | Unify desktop and touch events.   |
| Routing      | [uriAnchor][4]      | jQuery plugin for robust routing. |
|              |                     | Includes support for dependent    |
|              |                     | and independent query arguments.  |
| Data Model   | [taffyDB][5]        | A powerful and flexible SQL-like  |
|              |                     | client data management tool.      |
| SVG          | [D3][7]             | Great for easy graphs and charts  |
|              | [SVG][8]            | Low-level jQuery plugin           |
| Templates    | [Dust][9]           | Uses a powerful template DSL that |
|              |                     | minimizes chances to intemingle   |
|              |                     | business and display logic.       |

This suite of tools has all the capabilities of a bleeding-edge 
SPA "framework" library within the reliable and mature jQuery ecosystem.
It can provide an application that is significantly more flexible and
testable since display logic can easily be decoupled from business logic.
Finally, it leverages jQuery's maturity, performance, and excellent
tools instead of competing with them.

Release Notes
-------------

### Copyright (c)

2016 Michael S. Mikowski (mike[dot]mikowski[at]gmail[dotcom])

### License

Dual licensed under the MIT or GPL Version 2 http://jquery.org/license

### Version 0.0.1

Original commit to stake namespace

TODO
----

Add content.

Contribute!
-----------

If you want to help out, like all jQuery plugins this is hosted at
GitHub. Any improvements or suggestions are welcome! You can reach me at
mike[dot]mikowski[at]gmail[dotcom].

Cheers, Mike

END
---

[1]:http://manning.com/mikowski
[2]:https://github.com/mmikowski/jquery.event.gevent
[3]:https://github.com/mmikowski/jquery.event.ue
[4]:https://github.com/mmikowski/urianchor
[5]:https://github.com/typicaljoe/taffydb
[6]:http://socket.io
[7]:https://github.com/mbostock/d3
[8]:http://keith-wood.name/svg.html
[9]:http://linkedin.github.io/dustjs
