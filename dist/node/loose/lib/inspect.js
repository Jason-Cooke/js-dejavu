if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([
], function (
) {

    'use strict';

    function inspect(target) {
        // TODO: Should inspect do something more?
        //       If the code is not optimized, they will see wrappers when clicking in functions
        //       and also some strange things like $bind and $static.
        //       But I think it does not compensate the extra bytes to support it
        //       If we ever do this, we must adjust the console.inspect bellow
        return target;
    }

    inspect.rewriteConsole = function () {};

    // Add inspect method to the console
    if (typeof console === 'object' && !console.inspect) {
        console.inspect = console.log;
    }
});