var style = '<style>\
		.icon-chat-bcs {\
			height:15px;\
			width:15px;\
			background-image:url(https://i.imgur.com/pSJVANr.png);\
		}\
		.icon-chat-bcs2 {\
			height:15px;\
			width:15px;\
			background-image:url(https://i.imgur.com/GG4jPsR.png);\
		}\
		.icon-chat-bcs3 {\
			height:15px;\
			width:15px;\
			background-image:url(https://i.imgur.com/6Mb4SyQ.png);\
		}\
		.icon-chat-baS {\
			height:15px;\
			width:15px;\
			background-image:url(https://i.imgur.com/RQOpxNm.png);\
		}\
	</style>';
$("body").prepend(style);

API.on(API.CHAT, function(data){
	var msg = data.message;
	var msgID = data.cid;
	var user = data.un;
	var userid = data.uid;

	if (user == "CatSnore" || user == "T98"){
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .from .icon").hide();
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .from").prepend("<i class='icon icon-chat-bcs'></i>");
	}else if (user == "Beta Tester"){
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .from .icon").hide();
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .from").prepend("<i class='icon icon-chat-bcs2'></i>");
	}else if (user == "LeDCV" || user == "Wumbology"){
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .from .icon").hide();
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .from").prepend("<i class='icon icon-chat-bcs3'></i>");
	}else if (user == "Zuchku" || user == "81supernova" || user == "EDMC"){
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .from .icon").hide();
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .from").prepend("<i class='icon icon-chat-baS'></i>");
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .un").css({color:'#0097cd'});
	}else if (user == "Roms Kidd"){
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .from .icon").hide();
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .from").prepend("<i class='icon icon-chat-baS'></i>");
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .un").text('');
		$("#chat-messages > .cm[data-cid='" + msgID + "'] .un").append('\
			<a style="color:#d40000">R</a>\
			<a style="color:#d49b00">o</a>\
			<a style="color:#78d400">m</a>\
			<a style="color:#00d437">s</a>\
			<a style="color:#000000"> </a>\
			<a style="color:#00a5d4">K</a>\
			<a style="color:#0f00d4">i</a>\
			<a style="color:#d100d4">d</a>\
			<a style="color:#d40064">d</a>'); //WTF AM I DOING
	}
});

var opensansfnt = "'Open Sans' sans-serif";
function attemptappend(){
	if ($("#iwannalookcool").text() == ""){
		$("#user-rollover .meta").append('<div id="iwannalookcool" style="background-image:url(https://i.imgur.com/x1DEgOD.png); position:absolute; top: 45%; left: 81%; color:#b6f6ff; font-size: 11px; font-family: ' + opensansfnt + ', sans-serif; width:49px; height:49px; display:none;"> </div>');
		setTimeout(function(){attemptappend();},250);
	}else if ($("#iwannalookcool").text() == " "){
		console.log('Appended.');
	}
}
attemptappend();

function displayid(){
	$("#id_display").remove();
	var e = $("#user-rollover .username").text();
	var t;
	var n = API.getUsers();
	for (var i = 0; i < n.length; i++) {
		if (n[i].username == e) {
			t = n[i].id
		}
	}
	var a = "Open Sans";
	if (t == "undefined"){t = "0000000"}
	$('#user-rollover .meta .joined').css({top:"64px"});
	$("#user-rollover .info").append('<div id="id_display" style="position:absolute; top:-21px; left:108px; color:#808691; font-size: 11px; font-family: ' + a + ', sans-serif;">ID: ' + t + "</div>");
	if (e == "Beta Tester" || e == "T98" || e == "CatSnore" || e == "Kwiztech"){
		$("#iwannalookcool").show();
		$('#user-rollover .meta').css({'background':'right linear-gradient(#1b1e24 10%, #111317 85%)'});
		$('#user-rollover .background').css({'background':'rgba(0, 190, 232, 0.14)'});
	}else if (e == "LeDCV" || e == "Wumbology" || e == "Glitch Hopper"){
		$("#iwannalookcool").show();
		$('#user-rollover .meta').css({'background':'right linear-gradient(#faceff 10%, #f38fff 85%)'});
		$('#user-rollover .label').text("❤✿❤✿❤");
		$('#user-rollover .value').hide();
		$('#user-rollover .background').css({'background':'rgb(234, 137, 255)'});
		$("#user-rollover .username").css({color:'#2b2b2b'});
	}else{
		$("#iwannalookcool").hide();
		$('#user-rollover .meta').css({'background':'#282C35'});
		$('#user-rollover .label').text("Level");
		$('#user-rollover .value').show();
		$('#user-rollover .background').css({'background':'#282c35'});
		$("#user-rollover .username").css({color:'#eee'});
	}
}
$("#chat-messages").click(displayid);
$("#user-lists").click(displayid);
$("#dj-canvas").mousemove(displayid);
$("#audience-canvas").mousemove(displayid);

$.getScript('https://d1rfegul30378.cloudfront.net/alpha/plugCubed.js');
