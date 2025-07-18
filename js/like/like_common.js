/**
 * 写页标题栏
 * @param title
 */
function writePageTitleBar(title){
	var html='<div class="met_breadcrumb">';
	html+='<div class="met_content"><h1>'+title+'</h1>';
	html+='<ul class="met_clean_list pull-right clearfix">';
	html+='<li><a href="/index.html" class="met_color_transition">主页</a></li>';
	html+='<li class="met_color">'+title+'</li>';
	html+='</ul>';
	html+='<span class="pull-right">您的位置:</span>';
	html+='</div></div>';
	document.write(html);
}


function writeIndustryInfo(data){
	document.getElementById("img_big").innerHTML="hhh";
}

/**
 * 获取URL参数值
 * @param name 参数名
 * @returns
 */
function getUrlParamVal(name){
	var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");
	var m=document.location.search.substr(1).match(reg);
	return m!=null?unescape(m[2]):null;
}