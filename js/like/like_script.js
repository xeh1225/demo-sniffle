
//document.write('<script src="/js/jquery.js"></script>');
document.write('<script src="js/met_loading.js"></script>');
document.write('<script src="js/flexbox-fallback.js"></script>');
document.write('<!--[if lte IE 8]>');
document.write('<script src="/js/respond.js"></script>');
document.write('<script src="/js/selectivizr-min.js"></script>');
document.write('<script src="/js/excanvas.compiled.js"></script>');
document.write('<![endif]-->');
document.write('<script src="js/bootstrap.min.js"></script>');
document.write('<script src="js/jquery-easing-1.3.js" type="text/javascript"></script>');
document.write('<script src="js/jquery-transit-modified.js" type="text/javascript"></script>');
document.write('<script src="js/layerslider.transitions.js" type="text/javascript"></script>');
document.write('<script src="js/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script>');
document.write('<script src="js/superfish.js"></script>');
document.write('<script src="js/fullscreenr.js"></script>');
document.write('<script src="js/hoverIntent.js"></script>');
document.write('<script src="js/hoverdir.js"></script>');
document.write('<script src="js/isotope.js"></script>');
document.write('<script src="js/parallax.js"></script>');
document.write('<script src="js/jflickrfeed.min.js"></script>');
document.write('<script src="js/magnific-popup.js"></script>');
document.write('<script src="js/imagesLoaded.js"></script>');
document.write('<script src="js/caroufredsel.js"></script>');
document.write('<script src="js/knob.js"></script>');
document.write('<script src="js/nicescroll.js"></script>');
document.write('<script src="js/jquery.dlmenu.js"></script>');
document.write('<script src="js/custom.js"></script>');

var view_type = getUrlParamVal('view_type');
if (view_type !== 'wechat') {
document.write('<div class="QQDiv">');
//document.write('<script charset="utf-8" type="text/javascript" src="http://wpa.b.qq.com/cgi/wpa.php?key=XzkzODAyMDc1NF8xNzQ1NTdfNDAwODczMjE4OF8"></script>');
document.write('</div>');
document.write('<div class="baiduDiv">');
//document.write('<script src="http://hm.baidu.com/h.js?3cc1cdc3b26eed8944ea3344975c2b8a" type="text/javascript"></script>');
//document.write('<script src="http://hm.baidu.com/h.js?aa01408a4ae42ab16c4f50f0437be8b1" type="text/javascript"></script>');
//document.write('<script charset="utf-8" type="text/javascript" src="http://wpa.b.qq.com/cgi/wpa.php?key=XzkzODAyMDc1NF8xNzE4ODNfNDAwODczMjE4OF8"></script>');
document.write('</div>');
}
