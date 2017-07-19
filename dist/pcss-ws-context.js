/*
 * xhi-ws-context.js
 * This file is used by WebStorm to resolve properties
 * key received from external sources such as AJAX.
 * It is also useful as a reference.
 * It should *NOT* be included in production code.
 *
 * @author Michael S. Mikowski - mike.mikowski@gmail.com
*/
/*jslint         browser : true, continue : true,
  devel  : true,  indent : 2,      maxerr : 50,
  newcap : true,   nomen : true, plusplus : true,
  regexp : true,  sloppy : true,     vars : false,
  white  : true,    todo : true,  unparam : true
*/

(function () {
  'use strict';
  var
    bool = true,
    list = [],
    map  = {},
    fn   = Function,
    int  = 1,
    num  = 0.5,
    obj  = {},
    str  = ''
    ;

  return {
    // DOM
    ownerNode  : obj,

    // parameters
    _attr_key_    : str,
    _attr_val_    : str,
    _css_key_map_ : map,
    _css_val_map_ : map
  };
}());
