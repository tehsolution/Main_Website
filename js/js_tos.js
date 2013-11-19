// JavaScript Document
$accept_button = "#tos #tos_buttons #accept";
$decline_button = "#tos #tos_buttons #decline";
$tos_overlay = "#tos";

$(document).ready(function(e) {
	
	$($accept_button).on('click', function() {
		$($tos_overlay).fadeOut(300);
	});
	
	$($decline_button).on('click', function() {
		history.back();
	});
	
});