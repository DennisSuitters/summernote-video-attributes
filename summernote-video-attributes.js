(function(factory){
    if(typeof define==='function'&&define.amd){
        define(['jquery'],factory);
    }else if(typeof module==='object'&&module.exports){
        module.exports=factory(require('jquery'));
    }else{
        factory(window.jQuery);
    }
}(function($){
    $.extend(true,$.summernote.lang,{
        'en-US':{ /* English */
            videoAttributes:{
                dialogTitle:'Video Attributes',
                tooltip:'Video Attributes',
                pluginTitle:'Video Attributes',
                href:'URL',
                videoSize:'Video size',
                videoOption0:'Responsive',
                videoOption1:'1280x720',
                videoOption2:'853x480',
                videoOption3:'640x360',
                videoOption4:'560x315',
                suggested:'Show Suggested videos when the video finishes',
                controls:'Show player controls'
            }
        }
    });
    $.extend($.summernote.options,{
        videoAttributes:{
            icon:'<i class="note-icon"><svg xmlns="http://www.w3.org/2000/svg" id="libre-social-youtube" viewBox="0 0 14 14"><path d="m 3.326049,1.000005 0.720437,0 0.493194,1.851 0.45833,-1.851 0.726728,0 -0.832427,2.75254 0,1.87824 -0.715282,0 0,-1.87824 -0.85098,-2.75254 z m 2.366301,3.77881 c 0,0.60198 0.314563,0.91537 0.930553,0.91537 0.510816,0 0.913107,-0.34162 0.913107,-0.91537 l 0,-1.67444 c 0,-0.53467 -0.398272,-0.91774 -0.913107,-0.91774 -0.55934,0 -0.930553,0.36964 -0.930553,0.91774 l 0,1.67444 z m 0.653592,-1.61811 c 0,-0.18696 0.0861,-0.32575 0.264495,-0.32575 0.194796,0 0.278126,0.13462 0.278126,0.32575 l 0,1.58898 c 0,0.18597 -0.09478,0.32342 -0.265689,0.32342 -0.175398,0 -0.276932,-0.14348 -0.276932,-0.32342 l 0,-1.58898 z m 2.906942,-0.94596 0,2.59296 c -0.07739,0.0969 -0.249583,0.25581 -0.373428,0.25581 -0.135902,0 -0.169194,-0.0928 -0.169194,-0.23015 l 0,-2.61862 -0.635126,0 0,2.85521 c 0,0.33746 0.103194,0.61017 0.443651,0.61017 0.192174,0 0.458883,-0.1 0.734068,-0.42644 l 0,0.3771 0.635126,0 0,-3.41604 -0.635097,0 z m -0.934253,7.00276 c 0.04311,0.0569 0.06466,0.14024 0.06466,0.24999 l 0,1.67976 c 0,0.10372 -0.0175,0.17846 -0.05237,0.22422 -0.06667,0.0873 -0.211048,0.0833 -0.309466,0.0335 -0.04628,-0.0233 -0.09399,-0.0614 -0.143184,-0.11435 l 0,-2.02739 c 0.04104,-0.0446 0.08257,-0.0777 0.124689,-0.0991 0.105874,-0.0536 0.242534,-0.0432 0.31567,0.0534 z m 2.036185,-0.0737 c -0.224127,0 -0.270204,0.15771 -0.270204,0.38129 l 0,0.32933 0.534378,0 0,-0.32933 c -2.9e-5,-0.21988 -0.04666,-0.38129 -0.264174,-0.38129 z m 1.844679,2.39988 c 0,0.80429 -0.652019,1.45631 -1.45631,1.45631 l -7.486369,0 c -0.804292,10e-6 -1.456311,-0.65201 -1.456311,-1.4563 l 0,-3.67911 c 0,-0.80432 0.652019,-1.45631 1.456311,-1.45631 l 7.486339,0 c 0.804292,0 1.456311,0.65199 1.456311,1.45631 l 0,3.67911 z m -7.945107,-3.40404 0.704709,0 0,-0.64014 -2.090621,0 0,0.64014 0.704709,0 0,3.7701 0.681203,0 0,-3.7701 z m 2.42301,0.51679 -0.604893,0 0,2.46946 c -0.07381,0.0924 -0.237757,0.24364 -0.35566,0.24364 -0.129379,0 -0.161097,-0.0883 -0.161097,-0.21923 l 0,-2.49387 -0.604893,0 0,2.71919 c 0,0.66012 0.447582,0.66417 0.773621,0.47741 0.120612,-0.0692 0.236534,-0.17007 0.348029,-0.30242 l 0,0.35913 0.604893,0 0,-3.25331 z m 2.328408,0.7744 c 0,-0.44126 -0.146709,-0.8155 -0.589718,-0.8155 -0.216,0 -0.401331,0.13768 -0.537816,0.30399 l 0,-1.41982 -0.610777,0 0,4.41024 0.610777,0 0,-0.25008 c 0.168612,0.21026 0.353039,0.2912 0.574515,0.2912 0.402466,0 0.553019,-0.31261 0.553019,-0.71519 l 0,-1.80484 z m 2.23567,0.10026 c 0,-0.588 -0.280398,-0.95689 -0.86068,-0.95689 -0.54565,0 -0.918728,0.39213 -0.918728,0.95689 l 0,1.46027 c 0,0.58564 0.295369,1.00651 0.872942,1.00651 0.637398,0 0.906466,-0.37963 0.906466,-1.00651 l 0,-0.24437 -0.622515,0 0,0.22611 c 0,0.28325 -0.01488,0.45509 -0.270204,0.45509 -0.243524,0 -0.264145,-0.21104 -0.264145,-0.45509 l 0,-0.61372 1.156893,0 0,-0.82829 z"/></svg></i>'
        }
    });
    $.extend($.summernote.plugins,{
        'videoAttributes':function(context){
            var self=this;
            var ui=$.summernote.ui;
            var $note=context.layoutInfo.note;
            var $editor=context.layoutInfo.editor;
            var $editable=context.layoutInfo.editable;
            var options=context.options;
            var lang=options.langInfo;
            context.memo('button.videoAttributes',function(){
                var button=ui.button({
                    contents:options.videoAttributes.icon,
                    tooltip:lang.videoAttributes.tooltip,
                    click:function(e){
                        context.invoke('videoAttributes.show');
                    }
                });
                return button.render();
            });
            this.initialize=function(){
                var $container=options.dialogsInBody?$(document.body):$editor;
                var body='<div class="form-group">'+
                            '<label for="note-video-attributes-href" class="control-label col-xs-3">'+lang.videoAttributes.href+'</label>'+
                            '<div class="input-group col-xs-9">'+
                                '<input type="text" id="note-video-attributes-href" class="note-video-attributes-href form-control">'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label for="note-video-attributes-video-size" class="control-label col-xs-3">'+lang.videoAttributes.videoSize+'</label>'+
                            '<div class="input-group col-xs-9">'+
                                '<select id="note-video-attributes-size" class="note-video-attributes-size form-control col-xs-6">'+
                                    '<option value="0" selected>'+lang.videoAttributes.videoOption0+'</option>'+
                                    '<option value="1">'+lang.videoAttributes.videoOption1+'</option>'+
                                    '<option value="2">'+lang.videoAttributes.videoOption2+'</option>'+
                                    '<option value="3">'+lang.videoAttributes.videoOption3+'</option>'+
                                    '<option value="4">'+lang.videoAttributes.videoOption4+'</option>'+
                                '</select>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group clearfix">'+
                            '<div class="control-label col-xs-3"></div>'+
                            '<div class="input-group col-xs-9">'+
                                '<div class="checkbox checkbox-success">'+
                                    '<input type="checkbox" id="note-video-attributes-suggested-checkbox" class="note-video-attributes-suggested-checkbox" checked>'+
                                    '<label for="note-video-attributes-suggested-checkbox">'+lang.videoAttributes.suggested+'</label>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group clearfix">'+
                            '<div class="control-label col-xs-3"></div>'+
                            '<div class="input-group col-xs-9">'+
                                '<div class="checkbox checkbox-success">'+
                                    '<input type="checkbox" id="note-video-attributes-controls-checkbox" class="note-video-attributes-controls-checkbox" checked>'+
                                    '<label for="note-video-attributes-controls-checkbox">'+lang.videoAttributes.controls+'</label>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
                this.$dialog=ui.dialog({
                    title:lang.videoAttributes.dialogTitle,
                    body:body,
                    footer:'<button href="#" class="btn btn-primary note-video-attributes-btn">OK</button>'
                }).render().appendTo($container);
            };
            this.destroy=function(){
                ui.hideDialog(this.$dialog);
                this.$dialog.remove();
            };
            this.bindEnterKey=function($input,$btn){
                $input.on('keypress',function(event){
                    if(event.keyCode===13)$btn.trigger('click');
                });
            };
            this.bindLabels=function(){
            	self.$dialog.find('.form-control:first').focus().select();
            	self.$dialog.find('label').on('click',function(){
            		$(this).parent().find('.form-control:first').focus();
            	});
            };
            this.show=function(){
                var $vid=$($editable.data('target'));
                var vidInfo={
                    vidDom:$vid,
                    href:$vid.attr('href'),
                    size:$vid.attr('size'),
                    suggested:$vid.attr('suggested'),
                    controls:$vid.attr('controls')
                };
                this.showLinkDialog(vidInfo)
                    .then(function(vidInfo){
                        ui.hideDialog(self.$dialog);
                        var $vid=vidInfo.vidDom;
                        var $videoHref=self.$dialog.find('.note-video-attributes-href'),
                            $videoSize=self.$dialog.find('.note-video-attributes-size'),
                            $videoSuggested=self.$dialog.find('.note-video-attributes-suggested-checkbox'),
                            $videoControls=self.$dialog.find('.note-video-attributes-controls-checkbox');
                        var videoURL=$videoHref.val()+'?';
                        if(!$videoSuggested.is(':checked')){
                            videoURL+='rel=0&amp;';
                        }
                        if(!$videoControls.is(':checked')){
                            videoURL+='controls=0&amp;';
                        }
                        if($videoSize.val()==0){
                            var videoDIV=$('<div>',{
                                class:'embed-responsive embed-responsive-16by9'
                            });
                            var videoFrame=$('<iframe>',{
                                class:'embed-responsive-item note-video-clip',
                                src:videoURL,
                                frameborder:0
                            });
                            videoDIV.html(videoFrame);
                        }
                        if($videoSize.val()==1){
                            var videoDIV=$('<iframe>',{
                                class:'note-video-clip',
                                src:videoURL,
                                width:'1280',
                                height:'720',
                                frameborder:'0'
                            });
                        }
                        if($videoSize.val()==2){
                            var videoDIV=$('<iframe>',{
                                class:'note-video-clip',
                                src:videoURL,
                                width:'853',
                                height:'480',
                                frameborder:'0'
                            });
                        }
                        if($videoSize.val()==3){
                            var videoDIV=$('<iframe>',{
                                class:'note-video-clip',
                                src:videoURL,
                                width:'640',
                                height:'360',
                                frameborder:'0'
                            });
                        }
                        if($videoSize.val()==4){
                            var videoDIV=$('<iframe>',{
                                class:'note-video-clip',
                                src:videoURL,
                                width:'560',
                                height:'315',
                                frameborder:'0'
                            });
                        }
                        context.invoke('editor.insertNode',videoDIV[0]);
                    });
            };
            this.showLinkDialog=function(vidInfo){
                return $.Deferred(function(deferred){
                    var $videoHref=self.$dialog.find('.note-video-attributes-href'),
                        $videoSize=self.$dialog.find('.note-video-attributes-size'),
                        $videoSuggested=self.$dialog.find('.note-video-attributes-suggested-checkbox'),
                        $videoControls=self.$dialog.find('.note-video-attributes-controls-checkbox'),
                        $editBtn=self.$dialog.find('.note-video-attributes-btn');
                    ui.onDialogShown(self.$dialog,function(){
                        context.triggerEvent('dialog.shown');
                        $editBtn.click(function(e){
                            e.preventDefault();
                            deferred.resolve({
                                vidDom:vidInfo.vidDom,
                                href:$videoHref.val(),
                                size:$videoSize.val(),
                                suggested:$videoSuggested.val(),
                                controls:$videoControls.val()
                            });
                        });
                        $videoHref.val(vidInfo.href).focus;
//                        if($videoSize.val()!='')$videoSize.val(vidInfo.size);
//                        $videoSuggested.val(vidInfo.suggested);
//                        $videoControls.val(vidInfo.controls);
//                        $videoSuggested.val(vidInfo.suggested);
                        self.bindEnterKey($editBtn);
                        self.bindLabels();
                    });
                    ui.onDialogHidden(self.$dialog,function(){
                        $editBtn.off('click');
                        if(deferred.state()==='pending')deferred.reject();
                    });
                    ui.showDialog(self.$dialog);
                });
            };
        }
    });
}));
