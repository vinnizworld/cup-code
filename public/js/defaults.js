// Generated by CoffeeScript 1.6.3
/*
	Default Settings of IDE
*/

define(function() {
  var defaults;
  defaults = {
    debug: true,
    server: window.location.href.match("heroku") ? "http://cup-code.herokuapp.com/public/" : 'http://cup-code/',
    theme: 'ace/theme/dawn',
    mode: 'ace/mode/php',
    fontSize: '14px',
    emmet: true,
    love: true,
    jas: true
  };
  return window.Settings = defaults;
});
