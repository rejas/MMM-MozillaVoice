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
		return [];
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
