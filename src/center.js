/**
 * jCarousel Center Plugin
 *
 * Depends:
 *     core.js
 *     core_plugin.js
 */
(function($) {
    'use strict';

    $.jcarousel.fn.center = function(target, animate, callback) {
        var parsed = $.jCarousel.parseTarget(target),
            firstIndex = this.index(this._first),
            index;

        if (parsed.relative) {
            index = Math.max(0, firstIndex + parsed.target);
        } else {
            index = typeof parsed.target !== 'object' ? parsed.target : this.index(parsed.target);
        }

        var clip = this.clipping() / 2,
            relative = firstIndex - index,
            wh = 0,
            curr;

        while (true) {
            curr = this.items().eq(--index);

            if (curr.size() === 0) {
                break;
            }

            wh += this.dimension(curr);

            if (wh >= clip) {
                break;
            }

            relative++;
        }

        this.scroll('+=' + (relative * -1), animate, callback);
    };
}(jQuery));
