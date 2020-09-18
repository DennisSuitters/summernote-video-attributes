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

#### 4. summernote-video-attributesoptions
- showVideoSize [boolean]:  the video size selection
- showVideoAlignment [boolean]: shows the alignment options
- showSuggestedVideos [boolean]: shows the checkbox for suggested videos
- showPlayerControls [boolean]: shows the checkbox for player controls
- showAutoplay [boolean]: shows the checkbox for autoplay
- showLoop [boolean]: shows the checkbox for playing in a loop
- videoUrls [list of strings]: instead of allowing the user to enter the video URLs, you can preset the options of the URL value so the user can only choose from this list. A potential usage is to allow user to select from a list of stored assets.

#### 5. Check out our other Summernote Plugins via our main Github page.
- [Diemen Design](https://github.com/DiemenDesign/)
