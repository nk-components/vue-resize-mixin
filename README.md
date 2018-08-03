# Vue resize mixin

Vue 2.0+

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm i -S vue-resize-mixin
```

With [bower](http://bower.io/) do:

```bash
$ bower install vue-resize-mixin --save 
```

## Usage:

```js
var resizeMixin = require('vue-resize-mixin');

var vm = new Vue({
  mixins: [resizeMixin],

  mounted() {
    this.$on('resize', this.onResize)
  },

  methods: {
    onResize(event) {
      var width = event.width;
      var height = event.height;
    }
  }
})
```

The mixin emits an internal `resize` event.

The emitted event has 2 properties, `width` and `height` (of the window).

## License

MIT
