if (API.getUser().role >= 2 || API.getUser().gRole != 0){

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

var notifications = true;

API.on(API.USER_JOIN, function(user){
	if (notifications){
		if (API.getUser().role >= 2 && API.getUser().role <= 3){
			var managerslist = "";
			for (var i = 0; i < API.getUsers().length; i++){
				if (API.getUsers()[i].role == 3){
					managerslist += "@" + API.getUsers()[i].username + " ";
				}
			}
			API.sendChat(managerslist + " - user " + user.username + " joined");
		}else if (API.getUser().role >= 4 || API.getUser().gRole != 0){
			API.sendChat('@managers');
		}
	}
});

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
		case "notify":
			notifications = !notifications;
			var onoff = notifications ? "<a style='color:#90ad2f'><b>on</b></a>" : "<a style='color:#c42e3b'><b>off</b></a>";
			addChat("Notifications are " + onoff,"#ccc");
			break;
	}
});

addChat("<img src='https://i.imgur.com/vYNOsMn.gif' style='max-width:300px'></img><br>\
	<a style='color:#ececec;'>Beta Tester's <a style='color:#3dcc84;'><b>user joins</b></a> script initiated!</a><br>\
	<a style='color:#3dcc84;'>(Beta v0.5)</a><br>\
	<a style='color:#3dcc84;'>__________<br>\
	<a style='color:#ececec;'>/<b>notify</b><br>\
	<a style='color:#c8c8c8;'>Toggles Manager mentions whenever<br>\
	<a style='color:#c8c8c8;'>any users joins. Default is ON<br>\
	<a style='color:#3dcc84;'>¯¯¯¯¯¯¯¯¯¯","#CCCCCC");

}else{
	API.chatLog("I'm sorry, but you are not Bouncer+ in this room. This script will not work.");
}
