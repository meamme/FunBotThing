//Stolen from Igor's script <3//
function addChat(text, color, state, size) {
	var chat = $('#chat-messages'),
		a = chat.scrollTop() > chat[0].scrollHeight - chat.height() - 28;
	if (color == undefined)
		color = "#9fee00";
	if (state){
		chat.append("<div class='update raffle-update' style='border-left: double 6px " + color + "';'><center><span class='antitroll-text' style='color: " + color + "; " + si + "'>" + text + "<br></span></center></div>");
	}else{
		chat.append("<div class='update raffle-update' style=''><center><span class='antitroll-text' style='color: " + color + "; " + si + "'>" + text + "<br></span></center></div>");
	}
	var si = "";
	if (size){si = "font-size: 11px;";}
	else{si = "";}
	if (a)
		chat.scrollTop(chat[0].scrollHeight);
	if (chat.children().length >= 512)
		chat.children().first().remove();
}

function stopItAll(){
	var currentWindow = window.location.href;
	window.location.assign(currentWindow);
}

var afkmode = false;

API.on(API.CHAT_COMMAND, function(data){
	var msg = data;
	var command = msg.substring(1).split(' ');
	if(typeof command[2] != "undefined"){
		for(var i = 2; i < command.length; i++){
			command[1] = command[1] + ' ' + command[i];
		};
	};
	if (typeof command[1] == "undefined"){command[1] = "";}
	else{command[1] = command[1] + " ";};
	console.log("[COMMAND] " + command[0] + " || [ARGUMENT] " + command[1]);
	switch(command[0].toLowerCase()){
		case "afk":
			afkmode = !afkmode;
			var onoff = afkmode ? "<a style='color:#90ad2f'><b>on</b></a>" : "<a style='color:#c42e3b'><b>off</b></a>";
			addChat("AFK mode is now " + onoff,"#ccc");
			break;
	}
});

API.on(API.CHAT,function(data){
	var msg = data.message;
	var msgid = data.cid;
	var user = data.un;
	var userid = data.uid;
	var me = API.getUser().username;
	var tst = msg.indexOf('@' + me);
	if (typeof userid != "undefined" && tst != -1 && afkmode){
		API.sendChat("[Refreshing window]");
		setTimeout(function(){stopItAll();},250);
	}
});

addChat("<img src='https://i.imgur.com/cWTvi4a.gif' style='max-width:400px'></img><br>\
	<a style='color:#ececec;'>Beta Tester's <a style='color:#41b5ff;'><b>autodc (?)</b></a> script initiated!</a><br>\
	<a style='color:#41b5ff;'>(Beta v0.5)</a><br>\
	<a style='color:#41b5ff;'>__________<br>\
	<a style='color:#ececec;'>/<b>afk</b><br>\
	<a style='color:#c8c8c8;'>Toggles your AFK mode on/off<br><br>\
	<a style='color:#c8c8c8;'>This script will refresh your page<br>\
	<a style='color:#c8c8c8;'>whenever someone mentions you<br>\
	<a style='color:#c8c8c8;'>if AFK mode is on<br>\
	<a style='color:#41b5ff;'>¯¯¯¯¯¯¯¯¯¯","#CCCCCC");
