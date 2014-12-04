'use strict';

var windowsill = require('windowsill');
var resizer = windowsill.resizer;

module.exports = {
  ready: function() {
    windowsill.enable('resizer');
    resizer.addListener(this._resize);
    this._resize();
  },

  beforeDestroy: function() {
    resizer.removeListener(this._resize);
  },

  methods: {
    _resize: function() {
      this.$emit('resize', {width: resizer.width, height: resizer.height});
    }
  }
};
