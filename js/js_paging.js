// Javascript Document; Pagination and Animation Handler

$con = "#foot_con";
$pages = "#foot_con #animator .page";
$tab_con = "#tab_con";
$tab_class = "tab";
$tab_cur_class = "tab_cur";

_rotation_delay = 5000;

var cur = 0;
var total = 0;
var forw;
var timeout;

$(document).ready(function(e) {
	
	$con = $($con);
	$pages = $($pages);
	$tab_con = $($tab_con);
	total = $pages.length;
	
	if (total >= 2) {
		setRotation();
	}
	
	setPaginationTabs();
	indicateTab(0);
	
});

function right(to) {

	if (cur == total-1) return false;
	if (to == null) to = cur+1;
	
	var page = $($pages.get(cur));
	var nextPage = $($pages.get(to));
	page.animate({ marginLeft : -page.innerWidth(), fontSize: 0}, 600, function() { 	page.hide(); });
	nextPage.css('margin-left', $con.width());
	nextPage.css('font-size', 0);
	nextPage.show();
	nextPage.animate({ marginLeft : 0, fontSize: 13}, 600);
	
	cur = to;
	indicateTab(cur);
	setRotation();
	
	return true;
	
}

function left(to) {
	
	if (cur == 0) return false;
	if (to == null) to = cur-1;
	
	var page = $($pages.get(cur));
	var prevPage = $($pages.get(to));
	
	page.animate({ marginLeft : $con.width(), fontSize: 0}, 600, function() { page.hide() });
	prevPage.css('margin-left', -$con.width());
	prevPage.css('font-size', 0);
	prevPage.show();
	prevPage.animate({ marginLeft : 0, fontSize: 13}, 600);
	page.animate({ marginLeft : 0, fontSize: 14}, 600);
	
	cur = to;
	indicateTab(cur);
	setRotation();
	
	return true;
	
}

function autoRotate() {

	if (cur == total-1) forw = false;
	else if (cur == 0) forw = true;

	if (forw) {
		right();	
	} else {
		left();	
	}

	setRotation();
	
}

function setRotation() {

	if (timeout != null) {
		clearTimeout(timeout);
	}	
	timeout = setTimeout(autoRotate, _rotation_delay);
		
}

function indicateTab(tab) {
		tab_rt = '#' + $tab_con.attr('id') + ' .' + $tab_class;
		$(tab_rt).each(function() {
			$(this).removeClass($tab_cur_class);
		});
		$($(tab_rt).get(tab)).addClass($tab_cur_class);
}

function gotoPage(destPage) {
	if (cur < destPage) right(destPage);
	else if (cur > destPage) left(destPage);
}

function setPaginationTabs() {
	
	var i;
	for (i = 0; i < total; i++) {
		jQuery('<div/>', 
		{
			class: $tab_class, 
			onclick: 'gotoPage('+i+')'
		}).appendTo($tab_con);
	}
		
}