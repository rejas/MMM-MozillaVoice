/* global Module */

/* Magic Mirror
 * Module: MMM-MozillaVoice
 *
 * By rejas
 * MIT Licensed.
 */

Module.register("MMM-MozillaVoice", {
	defaults: {
	},

    lastDetected: "",
    status: "init",

	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function() {

		const stm = SpeakToMe({
			listener: (msg) => {
                console.log("listener", msg);
                if (msg.data && msg.data.length > 0) {
                    this.lastDetected = msg.data[0].confidence + ": " + msg.data[0].text;
                }
                if (msg.state === "ready") {
                    stm.listen();
                }
                this.status = msg.state;
                this.updateDom();
            }
		});

		stm.listen();
	},

    getHeader: function () {
        return "MMM-MozillaVoice";
    },

	getTemplate: function () {
		return "MMM-MozillaVoice.njk"
	},

	getTemplateData: function () {
		return {
		    status: this.status,
			detected: this.lastDetected
		}
	},

	getScripts: function() {
		return [this.file("node_modules/speaktome-api/build/stm_web.min.js")];
	},

	getStyles: function () {
		return [
			"MMM-MozillaVoice.css",
		];
	},

	socketNotificationReceived: function (notification, payload) {
		if(notification === "MMM-MozillaVoice-NOTIFICATION_TEST") {
			this.updateDom();
		}
	},
});
