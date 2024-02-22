/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"git_testing/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
