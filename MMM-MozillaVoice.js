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

	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function() {
		const stm = SpeakToMe({
			listener: listener
		});

		function listener(msg) {
			console.log("listener", msg);
		}
		stm.listen();
	},

	getTemplate: function () {
		return "MMM-MozillaVoice.njk"
	},

	getTemplateData: function () {
		return {
			voice: "TODO" //moment.duration(this.poweredOffTime).humanize(),
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
