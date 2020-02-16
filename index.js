/**
 * @file mofron-comp-txtframe/index.js
 * @brief text frame component for mofron
 *        text contents in the frame component.
 * @feature text is automatically centered
 *          center position can select vertical or horizonal by center parameter
 * @license MIT
 */
const Text = require("mofron-comp-text");
const Frame = require("mofron-comp-frame");
const Vrtpos = require("mofron-effect-vrtpos");
const Hrzpos = require("mofron-effect-hrzpos");
const comutl = mofron.util.common;

module.exports = class extends Frame {
    /**
     * initialize component
     * 
     * @param (mixed) 'text' parameter
     *                key-value: component config
     * @short text
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("TxtFrame");
            this.shortForm("text");
            /* init config */
            this.confmng().add("text", { type: "Text", list: true });
	    this.confmng().add("xCenter", { type: "boolean", init: true });
	    this.confmng().add("yCenter", { type: "boolean", init: true });
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
	    }
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
     * text contents
     *
     * @param (mixed) string/mofron-comp-text: text contents
     *                array: text contents list
     * @return (array) text contents
     * @type parameter
     */
    text (prm) {
        try {
	    if ("string" === typeof prm) {
                prm = new Text(prm);
	    }
	    if (true === comutl.isinc(prm, "Text")) {
                prm.effect([
                    new Hrzpos({
		        suspend: !this.xCenter(), type: "center", tag: "TxtFrame",
                    }),
                    new Vrtpos({
                        suspend: !this.yCenter(), type: "center", tag: "TxtFrame",
		    })
		]);
	    }
            this.child(prm);
	    return this.confmng("text", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * center position of text contents setter/getter
     *
     * @param (boolean) horizonal center position flag
     * @param (boolean) vertical center position flag
     * @return (array) center position flags
     * @type parameter
     */
    center (x, y) {
        try {
	    return [this.x_center(x), this.y_center(y)];
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * horizonal center position of text contents
     *
     * @param (boolean) true: text is centered horizontally (default)
     *                  false: text is not centered
     * @return (boolean) center position flag
     * @type parameter
     */
    xCenter (prm) {
        try {
	    let ret = this.confmng("xCenter", prm);
            if (true === this.isExists()) {
                let txt = this.text();
		for (let tidx in txt) {
                    txt[tidx].effect({ name: "HrzPos", tag: "TxtFrame" }).suspend(!prm);
		}
	    }
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * vertical center position of text contents
     *
     * @param (boolean) true: text is centered vertically (default)
     *                  false: text is not centered
     * @return (boolean) center position flag
     * @type parameter
     */
    yCenter (prm) {
        try {
            let ret = this.confmng("yCenter", prm);
	    if (true === this.isExists()) {
	        let txt = this.text();
                for (let tidx in txt) {
                    txt[tidx].effect({ name: "VrtPos", tag: "TxtFrame" }).suspend(!prm);
                }
            }
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text color setter/getter
     * 
     * @param (mixed (color)) string: color name, #hex
     *                        array: [red, green, blue, alpha]
     * @param (option) style option
     * @return (string) text color
     * @type parameter
     */
    mainColor (prm, opt) {
        try {
            if (undefined === prm) {
                return (0 === this.text().length) ? null : this.text()[0].mainColor();
            }
            let txt = this.text();
            for (let tidx in txt) {
                txt[tidx].mainColor(prm, opt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
