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
            this.confmng().add("text", { type: "Text" });
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
	    this.child(this.text());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set center config
     * 
     * @type private
     */
    beforeRender () {
        try {
            super.beforeRender();
	    this.centerConf();
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text contents
     *
     * @param (mixed) string: contents text
     *                mofron-comp-text: contents component
     * @return (mofron-comp-text) contents component
     * @type parameter
     */
    text (prm) {
        try {
	    if ("string" === typeof prm) {
	        this.text().text(prm);
                return;
	    }
	    return this.innerComp("text", prm, Text);
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
	    return [this.xCenter(x), this.yCenter(y)];
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * horizonal center position of text contents setter/getter
     *
     * @param (boolean) true: text is centered horizontally (default)
     *                  false: text is not centered
     *                  undefined: call as getter
     * @return (boolean) center position flag
     * @type parameter
     */
    xCenter (prm) {
        try {
	    return this.confmng("xCenter", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * vertical center position of text contents setter/getter
     *
     * @param (boolean) true: text is centered vertically (default)
     *                  false: text is not centered
     *                  undefined: call as getter
     * @return (boolean) center position flag
     * @type parameter
     */
    yCenter (prm) {
        try {
	    return this.confmng("yCenter", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set center config
     * 
     * @type private
     */
    centerConf () {
        try {
            let cent = this.center();
            let chd  = this.child();
            for (let cidx in chd) {
		/* set horizonal center */
                if (true === cent[0]) {
                    if (false === this.isExists()) {
                        chd[cidx].effect(new Hrzpos({ type: "center", tag: "TxtFrame" }));
                    } else {
                        let hrz = chd[cidx].effect({ name: "HrzPos" });
			if (null !== hrz) {
                            hrz.execute();
			}
		    }
		}
                /* set vertical center */
                if (true === cent[1]) {
		    if (false === this.isExists()) {
                        chd[cidx].effect(new Vrtpos({ type: "center" }));
                    } else {
                        let vrt = chd[cidx].effect({ name: "VrtPos" });
			if (null !== vrt) {
                            vrt.execute();
			}
		    }
                }
            }
	}  catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text color setter/getter
     * 
     * @param (mixed (color)) string: color name, #hex
     *                        array: [red, green, blue, alpha]
     * @param (key-value) style option
     * @return (string) text color
     * @type parameter
     */
    mainColor (prm, opt) {
        try {
	    return this.text().mainColor(prm,opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
