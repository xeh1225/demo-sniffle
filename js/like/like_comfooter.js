$(document).ready(function() {
    
		$(".sinaImg img").bind({
        mouseover:function() {
            $(".sinaImg img").attr("src","img/sina_2.png");
        },
        mouseenter:function(){
            $(".sinaImg img").attr("src","img/sina_2.png");
        },
        mouseleave:function(){
            $(".sinaImg img").attr("src","img/sina_1.png");
        }
    });

    $(".weixinImg img").bind({
        mouseover:function() {
            $(".weixinImg img").attr("src","img/weixin_2.png");
        },
        mouseenter:function(){
            $(".weixinImg img").attr("src","img/weixin_2.png");
        },
        mouseleave:function(){
            $(".weixinImg img").attr("src","img/weixin_1.png");
        }
    });
    

    $(".weixinImg img").click(function() {
        $(".weixinDiv").append('<div class="mfp-bg mfp-3d mfp-ready"></div><div class="mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-3d mfp-ready" tabindex="-1" style="overflow-y: auto; overflow-x: hidden;"><div class="mfp-container mfp-image-holder mfp-s-ready"><div class="mfp-content"><div class="mfp-figure"><button title="Close (Esc)" type="button" class="mfp-close" onclick="emptyDiv();">脳</button><img class="mfp-img" src="/img/weixin_qr.jpg" style="max-height: 392px;"><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div></div><div class="mfp-preloader">鍔犺浇涓�...</div></div></div>');
    });
	
    $(".baiduDiv a").css("display", "none");

});
$(".QQDiv").css('right','5px').css('z-index', '100').css('position','fixed').css('bottom', '10px').css('width', '100px');

function emptyDiv() {
    $(".weixinDiv").html("");
}

//鐧惧害骞垮憡
var view_type = getUrlParamVal('view_type');
if (view_type !== 'wechat') {
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
//document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Faa01408a4ae42ab16c4f50f0437be8b1' type='text/javascript'%3E%3C/script%3E"));

//document.write('<script type="text/javascript" name="baidu-tc-cerfication" data-appid="5128810" src="http://apps.bdimg.com/cloudaapi/lightapp.js"></script>');
}

