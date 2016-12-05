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

#### 3. Check out our other Summernote Plugins
- [Summernote Image Attributes](https://github.com/StudioJunkyard/summernote-image-attributes)
  - Add Button to Image Popup to enable editing various Image Attributes, including adding Links.
- [Summernote Cleaner](https://github.com/StudioJunkyard/summernote-cleaner)
  - Clean Pasted and Existing Markup, mainly for cleaning text from Office Document software.
- [Summernote Save Button](https://github.com/StudioJunkyard/summernote-save-button)
  - Add a Save Button to the Toolbar when Summernote is inside a form with a Textarea to easily save your document.
- [Summernote SEO](https://github.com/StudioJunkyard/summernote-seo)
  - Adds a Dropdown to the Toolbar that allows extracting selected text and inserts it into input elements for editing.
  
