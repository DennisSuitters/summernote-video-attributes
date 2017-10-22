# summernote-video-attributes
A plugin for the [Summernote](https://github.com/summernote/summernote/) WYSIWYG editor.

Adds a button to the Summernote Toolbar that allows editing video service settings and some embedding attribute.

### Installation

#### 1. Include JS

Include the following code after Summernote:

```html
<script src="summernote-video-attributes.js"></script>
```

#### 2. Supported languages

Currently available in English.

#### 3. Summernote options

Finally, customize the Summernote image popover.

```javascript
$(document).ready(function() {
    $('#summernote').summernote({
        toolbar:[
            ... Your other toolbar options
            ['insert',['videoAttributes','media','link','hr']],
            ... Your other toolbar options
    ]
    });
});
```

#### 4. Check out our other Summernote Plugins via our main Github page.
- [Diemen Design](https://github.com/DiemenDesign/)
