Checkator
==========
Checkator is a jQuery-based replacement for radio and checkbox elements. It supports css styling, and affects the original radio or checkbox element directly, which is used as the data container.


Usage
-----
###### include in head:
```html
<link rel="stylesheet" href="fm.checkator.jquery.css"/>
<script src="jquery-2.0.3.min.js"></script>
<script src="fm.checkator.jquery.js"></script>
```

###### to activate replacement:
```javascript
$('.radio_or_checkbox').checkator();
```

HTML mangling
-----------
The plugin will wrap the original elements inside divs, and add a div after original element, like shown below:

Before:
```html
<input type="radio" name="radio1" class="radio1" id="radio1_1">
```

After:
```html
<div class="checkator_holder radio">
	<input type="radio" name="radio1" class="radio1 checkator_source" id="radio1_1" style="opacity: 0;">
	<div id="checkator_radio1_1" class="checkator radio"></div>
</div>
```


CSS classes
-----------
Here is a list of all the css classes

Class                         | Description
----------------------------- | ------------------------------------------------------------------------------
checkator                     | This is the new radio or checkbox element. It has some extra classes called `radio` and `checkbox`, which tell if it is a radio button or a checkbox.
`prefix_`holder               | The holder for the original element and the new replacement element.
`prefix_`chosen_item          | The holder for the chosen item.


DOM Structure
-------------
* holder: *containing the `radio`|`checkbox` class*
    * source
    * checkator


jQuery methods
--------------
Method             | Description
------------------ | -----------
destroy            | This method is used to remove the instance of the plugin from the radio or checkbox and restore it to its original state.


###### Method usage
```javascript
$('#selectBox').checkator('destroy');
```


Browser compatibility
---------------------
* IE ???
* Chrome 8+
* Firefox ???
* Safari ???
* Opera ???


Copyright and license
---------------------
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
