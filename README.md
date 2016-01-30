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
| AJAX         | jQuery native       | Use jQuery AJAX methods           |
| DOM + Util   | jQuery              | A powerful, stable, tight library |
| Client Data  | [taffyDB][5]        | A powerful and flexible SQL-like  |
|              |                     | client data management tool       |
| DynamicCSS   | PowerCSS            | This package                      |
| Model Events | [Global Events][2]  | jQuery plugin allows on to use    |
|              |                     | the jQuery-style events for all   |
|              |                     | custom events.                    |
| Promises     | jQuery native       | Use jQuery promise methods        |
| Routing      | [uriAnchor][4]      | jQuery plugin for robust routing  |
|              |                     | Includes support for dependent    |
|              |                     | and independent query arguments   |
| SVG          | [D3][7]             | Great for easy graphs and charts  |
|              | [SVG][8]            | Low-level jQuery plugin           |
| Templates    | [Dust][9]           | Uses a powerful template DSL that |
|              |                     | minimizes chances to intemingle   |
|              |                     | business and display logic        |
| Touch        | [Unified events][3] | Unify desktop and touch events    |
| Websockets   | [Socket io][6]      | Prefer websockets over AJAX       |

This suite of tools provides all the capabilities of a bleeding-edge 
SPA "framework" library within the reliable and mature jQuery ecosystem
without putting you at the mercy of the limitations or bugs found in
frameworks.  You control your code, instead of the framework controlling you.

Using best-in-class libraries is significantly more flexible and
testable since display logic can easily be decoupled from business logic.
And we leverage jQuery's maturity, performance, and excellent tools instead
of competing with them.

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

Similar Projects
----------------
[absurdjs][11], [responsive.j$][10]

Contribute!
-----------
Any improvements or suggestions are welcome! You can reach me at
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
[10]:http://www.responsivejs.com/
[11]:http://absurdjs.com/
