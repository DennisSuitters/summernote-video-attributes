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

### TODO
- Add Regex to check for services other than YouTube and insert correct embedding options for those services.
- Add Class/Style Editing for floating sized videos for page justification.
