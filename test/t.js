/*
 * t.js 
 * nodeunit-b suite for PowerCSS 
 *
 * Please run using /nodeunit <this_file>/
*/

/*jslint              node : true,   continue : true,
 devel   : true,    indent : 2,       maxerr  : 50,
 newcap  : true,     nomen : true,   plusplus : true,
 regexp  : true,      vars : false,    white  : true
 unparam : true,      todo : true
*/

/*global global, pcss */

/* Test instructions
 * $ cd node_modules/powercss 
 * $ npm install
 * $ cd test
 * $ ../node_modules/nodeunit/bin/nodeunit ./<this-file>
 *
 * Debug instructions
 * $ ../node_modules/node-inspector/bin/node-debug.js \
 *   node_modules/nodeunit/bin/nodeunit \
 *   ./<this-file>
 *
 * This should start your default browser with debugging tools.
 * Only FireFox and Chrome are supported.
 *
*/
  'use strict';
  var
    nubObj = require( 'nodeunit-b' ),
    onWinError
    ;

  onWinError = function ( error_data, url_str, line_idx ) {
    console.warn( error_data, url_str, line_idx );
    return false; // true - prevent default handler, false - allow
  };

  nubObj.setInjectRoot(__dirname, '../dist/');
  nubObj.inject([ 'pcss.js' ]);

  exports.t = nubObj({
    // make these properties of window conveniently available to tests
    provide: [ 'pcss' ],
    // html to bootstrap sandbox DOM
    html: '<!doctype html><html><head></head><body></body></html>',
    setUp: function( finish_fn, win_obj, nub_obj ) {
      console.log( 'setUp' );
      // finish_fn = callback fn to execute on complete
      // win_obj     = window object with a document attached
      // nub_obj     = nodeunit-b object

      // mock out jquery.ajax
      // win_obj.$.ajax = function() {};
      win_obj.onerror     = onWinError;
      global.pcss         = win_obj.pcss;
      finish_fn();
    },
    tearDown: function( finish_fn, win_obj, nub_obj ) {
      console.log( 'tearDown' );
      // another chance to mutate nub_obj, win_obj
      // (though win_obj will be reset in setUp)
      finish_fn();
    },

    testVsheets : function ( test_obj, win_obj, pcss_obj ) {
      var expect_str, ret_val;
      test_obj.expect( 3 );
      expect_str = 'pcss_obj and pcss should point to same object';
      test_obj.ok( pcss_obj === pcss, expect_str );

      expect_str = '_init_module_ should return undef';
      ret_val    = pcss_obj._initModule_();
      test_obj.ok( ret_val === undefined, expect_str );

      expect_str = 'Initial toggle should return false';
      try { ret_val = pcss_obj._togglePcss_(); }
      catch ( error ) { console.warn( error ); }
      test_obj.ok( ret_val === false, expect_str );

      console.warn( 'ping4' );
      test_obj.done();
      console.warn( 'ping5' );
    }
  });
