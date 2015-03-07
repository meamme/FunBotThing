function hideFooter(){
	if ($("#footer-user .badge").css('display') == "block"){
		$("#footer-user .badge").hide();
		$("#footer-user .store").hide();
		$("#footer-user .profile").hide();
		$("#footer-user .settings").hide();
		$("#footer-user .info").css({"background":"#282C35"});
	}
}
function toggleFooter(){
	if ($("#footer-user .back").css('display') == "none"){
		if ($("#footer-user .badge").css('display') == "none"){
			$("#footer-user .badge").show();
			$("#footer-user .store").show();
			$("#footer-user .profile").show();
			$("#footer-user .settings").show();
			$("#footer-user .info").css({"background":"#1C1F25"});
		}else{
			$("#footer-user .badge").hide();
			$("#footer-user .store").hide();
			$("#footer-user .profile").hide();
			$("#footer-user .settings").hide();
			$("#footer-user .info").css({"background":"#282C35"});
		}
	}
}
function displayLvl(){
	$("#footer-user .percentage").remove();
	var lvl = $("#footer-user .progress").attr('style');
	var lvlPc = lvl.substring(6,lvl.indexOf('%') + 1);
	$("#footer-user .bar").append('\
	<div class="percentage" style="font-size: 10px;\
		position:block;\
		margin-left:50px;\
		margin-top:-1px;\
		position:absolute;"><b>' + lvlPc + '</b></div>');
	if (parseInt(lvlPc) >= 95){
		$("#footer-user .progress").css({'border-radius':'10px 10px'});
	}else{
		$("#footer-user .progress").css({'border-radius':'10px 0px 0px 10px'});
	}
}
var style = '<style>\
		#footer-user .buttons .button {\
			top: -100%;\
			left: 65px;\
			background: #282C35;\
			display: none;\
			text-align: left;\
		}\
		#footer-user .back {\
			z-index: 100;\
		}\
		#footer-user .buttons .inventory {\
			top: 0%;\
			left: 0%;\
			background: #282C35;\
			display: block;\
			-webkit-box-shadow: inset 1px 0 0 0 #0A0A0A;\
			-moz-box-shadow: inset 1px 0 0 0 #0A0A0A;\
			box-shadow: inset 1px 0 0 0 #0A0A0A;\
		}\
		#footer-user .buttons .button.inventory:hover {\
			background: #282C35;\
			-webkit-box-shadow: inset 1px 0 0 0 #0A0A0A;\
			-moz-box-shadow: inset 1px 0 0 0 #0A0A0A;\
			box-shadow: inset 1px 0 0 0 #0A0A0A;\
		}\
		#footer-user .buttons .button span {\
			margin-left: 20%;\
		}\
		#footer-user .buttons .badge, #footer-user .buttons .store, #footer-user .buttons .profile, #footer-user .buttons .settings {\
			width: 82%;\
			top: -265px;\
			background: #1C1F25;\
		}\
		#footer-user .buttons .badge .bdg, #footer-user .buttons .store .icon, #footer-user .buttons .profile .icon, #footer-user .buttons .settings .icon{\
			left:12px;\
			position: absolute;\
		}\
		#footer-user .buttons .button.store:hover{\
			background: #323742;\
		}\
		#footer-user .info {\
			top: 1px;\
			left: 19%;\
			display:block;\
			width: 300px;\
			background: #282C35;\
		}\
		#footer-user {\
			cursor: pointer;\
		}\
		#footer-user .info .points {\
			right: 25px;\
		}\
		.nothing {\
			height: 16px;\
		}\
	</style>';

$("body").prepend(style);
$("#footer-user .bar").css({'border-radius':'10px 10px'});
$("#footer-user .progress").css({'border-radius':'10px 10px'});
$("#footer-user .inventory").off();
$("#footer-user .profile").hide();
$("#footer-user .store").hide();
$("#footer-user .played").hide();
$("#footer-user .settings").hide();
$("#footer-user .info .meta .bar").css({"width":"105px"});
$("#footer-user .info .meta .level .label").text("Lv.");
$("#footer-user .inventory .image .thumb").css({"border":"2px solid #89be6c"});
$("#footer-user .inventory").hover(function(){
	$("#footer-user .buttons").css({"\
	background":"#282C35","\
	box-shadow":"#282C35","\
	-webkit-box-shadow":"#282C35","\
	-moz-box-shadow":"#282C35"});
});

$("#footer-user .button").hover(function(){$("#tooltip").remove();});
$("#footer-user .button").on('click',hideFooter);
$("#footer-user .badge").append("<div class='nothing'></div><span>My Badges</span>");
$("#footer-user .store").append("<div class='nothing'></div><span>Shop</span>");
$("#footer-user .profile").append("<div class='nothing'></div><span>My Profile</span>");
$("#footer-user .settings").append("<div class='nothing'></div><span>Settings</span>");
$("#footer-user .info").on('click',toggleFooter);
$("#app").on('click', function(e) {
	if (!$(e.target).closest("#footer-user .info").length){
		hideFooter();
	}
});
$("#footer-user .bar .value").hide();
$("#footer-user .bar").mouseenter(function(){
	$("#footer-user .percentage").hide();
	$("#footer-user .bar .value").show();
});
$("#footer-user .bar").mouseleave(function(){
	$("#footer-user .percentage").show();
	$("#footer-user .bar .value").hide();
});

API.on(API.ADVANCE,displayLvl);
displayLvl();

//Stolen from Igor's script <3//
function addChat(text, color, state, size) {
	var chat = $('#chat-messages'),
		a = chat.scrollTop() > chat[0].scrollHeight - chat.height() - 28;

	if (color == undefined)
		color = "#9fee00";

	if (state){
		chat.append("<div class='update percentage-update' style='border-left: double 6px " + color + "';'><center><span class='antitroll-text' style='color: " + color + "; " + si + "'>" + text + "<br></span></center></div>");
	}else{
		chat.append("<div class='update percentage-update' style=''><center><span class='antitroll-text' style='color: " + color + "; " + si + "'>" + text + "<br></span></center></div>");
	}

	if (size){
		var si = "font-size: 11px;";
	}else{
		var si = "";
	}

	if (a)
		chat.scrollTop(chat[0].scrollHeight);
	if (chat.children().length >= 512)
		chat.children().first().remove();
}

addChat("<a style='color:#ececec;'>Beta Tester's percentage script initiated!</a><br>\
	<a style='color:#eb9595;'>Beta v0.7</a>","#CCCCCC");
