var icpA = '<a href="http://www.miitbeian.gov.cn/" target="_blank" rel="nofollow" style="color: #777777;">';
var paadoo = {
    icp : 'Copyright© 2015 上海来客之家网络有限公司 All Rights Reserved '+ icpA +'沪ICP备12039513号' + '</a>',
    hgwb : '31011002000756'
};
var likeit = {
	icp : 'Copyright© 2015 上海理客信息技术有限公司 All Rights Reserved '+ icpA +'沪ICP备12039475号' + '</a>',
	hgwb : '31011002000767'
};
var paadoonet = {
	icp : 'Copyright© 2015 上海来客之家网络有限公司 All Rights Reserved '+ icpA +'沪ICP备16020117号' + '</a>',
	hgwb : '31011002001267'
};
var icpInfo = (/paadoo\.com/.test(location.href)) ? paadoo : ((/paadoo\.net/.test(location.href)) ? paadoonet : likeit);
document.write('<footer class="clearfix">');
document.write('<div class="met_footer_copyright clearfix">');
document.write('<div class="met_content"><p style="float:none;text-align:center;height:auto;">'+ icpInfo.icp +'</p>');
document.write('<div style="width:300px;margin:0 auto; padding:20px 0;">');
document.write('<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode='+ icpInfo.hgwb +'" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="img/picp_bg1.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">沪公网安备 '+ icpInfo.hgwb +'号</p></a>');
document.write('</div>');
document.write('</div></div></footer>');