/*jslint forin:true*/
/*global define*/

define(function () {

    'use strict';

    /**
     * Checks if the browser has Object.freeze bug.
     *
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=744494
     *
     * @return {Boolean} True if it has, false otherwise
     */
    function checkHasFreezeBug() {

        // Create a constructor
        var A = function () {},
            a;

        A.prototype.foo = '';
        Object.freeze(A.prototype);   // freeze prototype

        // Create an instance
        a = new A();

        try {
            a.foo = 'baz';            // throws a['foo'] is read only
            if (a.foo !== 'baz') {    // or fails silently
                return true;
            }
        } catch (e) {
            return true;
        }

        return false;
    }

    return checkHasFreezeBug();
});