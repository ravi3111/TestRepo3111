define([
		"dojo/_base/declare",
		"dijit/_TemplatedMixin",
		"dijit/_WidgetsInTemplateMixin",
		"dijit/layout/StackContainer",
		"dijit/layout/BorderContainer",
		"dijit/layout/ContentPane",
		"ecm/widget/layout/BaseLayout",
		"ecm/widget/Banner",
		"ecm/widget/LoginPane",
		"dojo/text!./templates/layout.html"
	],
	function(declare, _TemplatedMixin, _WidgetsInTemplateMixin, StackContainer, BorderContainer, ContentPane, BaseLayout, Banner, LoginPane, template) {

	/**
	 * @name testICNDojo.layout
	 * @class  
	 * @augments ecm.widget.layout.BaseLayout, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin
	 */
	return declare("testICNDojo.layout", [ BaseLayout, _TemplatedMixin, _WidgetsInTemplateMixin ], {
	/** @lends testICNDojo.layout.prototype */

		templateString: template,

		// Set this to true if your widget contains other widgets
		widgetsInTemplate: true,
		
		/**
		 * Add your custom layout code here.
		 */
		
	});
});
