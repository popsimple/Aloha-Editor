/**
 * Text Color Plugin
 */
GENTICS.Aloha.FontSize = new GENTICS.Aloha.Plugin('com.gentics.aloha.plugins.FontSize');

/**
 * Configure the available languages
 */
GENTICS.Aloha.FontSize.languages = [ 'en' ]; // 'en', 'ru' ];

/**
 * Configure the available sizes
 */
GENTICS.Aloha.FontSize.config = {
	sizes : [ 6, 8, 10, 12, 14, 16, 18, 20, 24, 32, 48, 72, 96, 144 ]
};

GENTICS.Aloha.FontSize.toString = function() {
	return "com.gentics.aloha.plugins.FontSize";
};
/**
 * Initialize the plugin and set initialize flag on true
 */
GENTICS.Aloha.FontSize.init = function() {

	var that = this, scope = 'GENTICS.Aloha.continuoustext', style = jQuery('<style></style>');

	jQuery.each(GENTICS.Aloha.FontSize.config.sizes, function(index, value) {
		var styleName = 'GENTICS_button_size' + value;
		var buttonStyle = '{ padding: 0 !important; text-align: right !important; }';
		// '{ font-size: ' + value + 'px !important; }';
		style.append('button.' + styleName + ' ' + buttonStyle + ' ');

		var markupText = '<span style="font-size:' + value + 'px"></span>';
		var size = 'Size_' + value;
		var button = new GENTICS.Aloha.ui.Button({
			'name' : size,
			'text' : size,
			'label' : value,
			'tooltip' : size,
			"iconClass" : styleName,
			'markup' : markupText,
			'size' : 'small',
			'onclick' : function() {
				if (GENTICS.Aloha.activeEditable) {
					GENTICS.Aloha.activeEditable.obj[0].focus();
				}
				var markup = jQuery(markupText);
				var rangeObject = GENTICS.Aloha.Selection.rangeObject;
//				var foundMarkup = rangeObject.findMarkup(function() {
//					return this.nodeName.toLowerCase() === markup.get(0).nodeName.toLowerCase();
//				}, GENTICS.Aloha.activeEditable.obj);
//
//				if (foundMarkup) {
//					jQuery(foundMarkup).css('font-size', value + 'px');
//				} else {
					GENTICS.Utils.Dom.addMarkup(rangeObject, markup);
				//}
				rangeObject.select();
				return false;
			}
		});
		GENTICS.Aloha.FloatingMenu.addButton(scope, button, 'Size', 1);
	});

	style.appendTo('head');

	// // add it to the floating menu
	// GENTICS.Aloha.FloatingMenu.addButton(
	// 'GENTICS.Aloha.continuoustext',
	// button,
	// GENTICS.Aloha.i18n(GENTICS.Aloha, 'floatingmenu.tab.format'),
	// 1
	// );

	// jQuery.each(GENTICS.Aloha.FontSize.config.sizes, function(index, value) {
	// GENTICS.Aloha.FloatingMenu.addButton("GENTICS.Aloha.continuoustext",
	// buttons[value], 'Size',// that.i18n("floatingmenu.tab.color"),
	// 1);
	// });
};