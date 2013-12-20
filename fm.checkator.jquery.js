/*
 Checkator jQuery Plugin
 A plugin for radio and checkbox elements
 version 1.0, Dec 20th, 2013
 by Ingi P. Jacobsen

 The MIT License (MIT)

 Copyright (c) 2013 Ingi P. Jacobsen

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function($) {
	$.checkator = function (element, options) {
		var defaults = {
			prefix: 'checkator_'
		};
	
		var plugin = this;
		var type = $(element).attr('type');
		var checked = $(element)[0].checked;
		var new_element = null;
		plugin.settings = {};

		
		
		// INITIALIZE PLUGIN
		plugin.init = function () {
			plugin.settings = $.extend({}, defaults, options);

			//// ================== CREATE ELEMENTS ================== ////
			// new element
			$(element).wrap('<div class="' + plugin.settings.prefix + 'holder ' + type + '"></div>');
			new_element = document.createElement('div');
			if (element.id !== undefined) {
				$(new_element).attr('id', plugin.settings.prefix + element.id);
			}
			$(new_element).addClass('checkator ' + type + ' ' + (checked ? 'checked ' : ''));
			$(new_element).css({
				width: $(element).outerWidth() + 'px',
				height: $(element).outerHeight() + 'px',
				'margin-top': $(element).css('margin-top'),
				'margin-right': $(element).css('margin-right'),
				'margin-bottom': $(element).css('margin-bottom'),
				'margin-left': $(element).css('margin-left')
			});
			$(element).css({ opacity: 0 });
			$(element).addClass('checkator_source');
			$(element).after(new_element);

			//// ================== BIND ELEMENTS EVENTS ================== ////
			$(new_element).click(function (e) {
				//$(element).click();
			});
		};


		// REMOVE PLUGIN AND REVERT SELECT ELEMENT TO ORIGINAL STATE
		plugin.destroy = function () {
			$(new_element).remove();
			$.removeData(element, 'checkator');
			$(element).css({ opacity: '' });
			$(element).removeClass('checkator_source');
			$(element).unwrap();
		};
		

		// Initialize plugin
		plugin.init();
	};
	
	$.fn.checkator = function(options) {
		options = options !== undefined ? options : {};
		return this.each(function () {
			if (typeof(options) === 'object') {
				if (undefined === $(this).data('checkator')) {
					var plugin = new $.checkator(this, options);
					$(this).data('checkator', plugin);
				}
			} else if ($(this).data('checkator')[options]) {
				$(this).data('checkator')[options].apply(this, Array.prototype.slice.call(arguments, 1));
			} else {
				$.error('Method ' + options + ' does not exist in $.checkator');
			}
		});
	};

}(jQuery));
