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

Here are the recommended tools:

| Capability   | Tool                | Notes                             |
| ------------ | ------------------- | ----------------------------------|
| AJAX         | jQuery native       | Use jQuery AJAX methods           |
| DOM + Util   | jQuery              | A powerful, stable, tight library |
| Client Data  | [taffyDB][3]        | A powerful and flexible SQL-like  |
|              |                     | client data management tool       |
| DynamicCSS   | PowerCSS            | This package                      |
| Model Events | [Global Events][4]  | Use exactly the same event objects
  for both logical and browser events.                                   |
| Promises     | jQuery native       | Use jQuery promise methods        |
| Routing      | [uriAnchor][5]      | A jQuery plugin for robust routing
  that includes support for dependent and independent query arguments    |
| SVG          | [D3][6]             | Easy graphs and charts            |
|              | [SVG][7]            | Low-level jQuery plugin           |
| Templates    | [Dust][8]           | Uses a powerful template DSL that 
  minimizes the temptation to intermingle  business and display logic    |
| Touch        | [Unified events][9] | Unified desktop and touch events  |
| WebSockets   | [Socket io][10]     | The WebSockets protocol is faster
  and more flexible than AJAX.  Consider also using [pure websockets][11]
  client with a [websocket][12] server on a NodeJs                       |

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
Dual licensed under the MIT or GPL Version 2

### Version 0.0.2
Original commits

TODO
----
Add content.

Similar Projects
----------------
[absurdjs][13], [responsive.j$][14]

Contribute!
-----------
Any improvements or suggestions are welcome! You can reach me at
mike[dot]mikowski[at]gmail[dotcom].

Cheers, Mike

END
---

[1]:http://www.amazon.com/dp/1617290750
[2]:http://manning.com/mikowski
[3]:https://github.com/typicaljoe/taffydb
[4]:https://github.com/mmikowski/jquery.event.gevent
[5]:https://github.com/mmikowski/urianchor
[6]:https://github.com/mbostock/d3
[7]:http://keith-wood.name/svg.html
[8]:http://linkedin.github.io/dustjs
[9]:https://github.com/mmikowski/jquery.event.ue
[10]:http://socket.io
[11]:https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications
[12]:https://www.npmjs.com/package/websocket
[13]:http://www.responsivejs.com/
[14]:http://absurdjs.com/

