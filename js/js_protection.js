// Javascript Document; Right click protection handler
var message=null; 

function clickIE4(){ 
	if (event.button==2){ 
		if (message) alert(message);
		return false; 
	}
} 

function clickNS4(e){
	if (document.layers||document.getElementById&&!document.all){
		if (e.which==2||e.which==3){
			if (message) alert(message);
			return false; 
		}
	}
} 

if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickNS4;
} else if (document.all&&!document.getElementById) {
	document.onmousedown=clickIE4;
}

document.oncontextmenu = function() {
	if (message) alert(message);
	return false;
};

bV = parseInt(navigator.appVersion)
bNS = navigator.appName=="Netscape"
bIE = navigator.appName=="Microsoft Internet Explorer"

function nrc(e) {
	if (bNS && e.which > 1){
		if (message) alert(message)
		return false
	} else if (bIE && (event.button >1)) {
		if (message) alert(message)
		return false;
	}
}

document.onmousedown = nrc;
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
if (bNS && bV<5) window.onmousedown = nrc;