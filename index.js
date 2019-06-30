/**
 * @file mofron-comp-txtframe/index.js
 * @brief text frame component for mofron
 *        text contents in the frame component.
 * @feature text is automatically centered
 *          center position can select vertical or horizonal by center parameter
 * @author simpart
 */
const mf = require("mofron");
const Text = require("mofron-comp-text");
const Frame = require("mofron-comp-frame");
const Vrtpos = require("mofron-effect-vrtpos");
const Hrzpos = require("mofron-effect-hrzpos");

mf.comp.TxtFrame = class extends Frame {
    
    /**
     * initialize component
     * 
     * @param (mixed) string/mofron-comp-text/array: text contents
     *                object: component option
     * @pmap text
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("TxtFrame");
            this.prmMap("text");
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.style({ "display" : "grid" });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set center position of text
     * 
     * @type private
     */
    beforeRender () {
        try {
            super.beforeRender();
            let txt = this.text();
            /* set vertical position */
            if (true === this.x_center()) {
                for (let tidx in txt) {
                    txt[tidx].effect([new Hrzpos("center")]);
                }
            }
            /* set horizonal position */
            if (true === this.y_center()) {
                for (let tidx in txt) {
                    txt[tidx].effect([new Vrtpos("center")]);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text contents
     *
     * @param (string/mofron-comp-text/array) text contents
     * @return (array) text contents
     * @type parameter
     */
    text (prm) {
        try {
            if (true === Array.isArray(prm)) {
                for (let pidx in prm) {
                    this.text(prm[pidx]);
                }
                return;
            } else if ("string" === typeof prm) {
                prm = new Text(prm);
            }
            this.child(prm);
            return this.arrayMember("text", "Text", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * center position of text contents
     *
     * @param (boolean) horizonal center position flag
     * @param (boolean) vertical center position flag
     * @return (array) center position flags
     * @type parameter
     */
    center (x, y) {
        try { return [this.x_center(x), this.y_center(y)]; } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * horizonal center position of text contents
     *
     * @param (boolean) true: text is centered horizontally [default]
     *                  false: text is not centered
     * @return (boolean) center position flag
     * @type parameter
     */
    x_center (prm) {
        try { return this.member("x_center", "boolean", prm, true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * vertical center position of text contents
     *
     * @param (boolean) true: text is centered vertically [default]
     *                  false: text is not centered
     * @return (boolean) center position flag
     * @type parameter
     */
    y_center (prm) {
        try { return this.member("y_center", "boolean", prm, true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text color setter/getter
     * 
     * @param (string/array) string: color name
     *                       array: [red, green, blue, alpha]
     * @return (string) text color
     * @type parameter
     */
    mainColor (prm) {
        try { return this.text().color(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.TxtFrame;
/* end of file */
