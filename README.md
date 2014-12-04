Vue resize mixin
===

## Usage:

```js
var resizeMixin = require('vue-resize-mixin');

var vm = new Vue({
    mixins: [resizeMixin],

    events: {
        'resize': 'onResize'
    },

    methods: {
        onResize: function(event) {
            var width = event.width;
            var height = event.height;
        }
    }
})
```

The mixin emits an internal 'resize' event.
You could also `this.$on('resize', this.onResize);`

The emitted event has 2 properties, `width` and `height` (of the window).