//This is just for people who have the wrong link ;3
function addChat(text, color, state, hasBottom, isNotCenter) {
	var chat = $('#chat-messages');
	var a = chat.scrollTop() > chat[0].scrollHeight - chat.height() - 28;

	if (color == undefined){
		color = "#99ffd7";
	}

	if (isNotCenter){
		chat.append("<div class='update betabot-update' style='background-color:#0a0a0a;'><div class='text-margin' style='margin-left: 10px;'><span class='betabot-text' style='color: " + color + "; font-size: 12px;'>" + text + "<br></span></div></div>");
	}else{
		if (hasBottom){
			chat.append("<div class='update betabot-update' style='background-color:#0a0a0a; border-left: double 6px " + color + "; border-bottom: double 6px " + color + "'><center><span class='betabot-text' style='color: " + color + "; font-size: 13px;'>" + text + "<br></span></center></div>");
		}else{
			if (state){
				chat.append("<div class='update betabot-update' style='background-color:#0a0a0a; border-left: double 6px " + color + "; margin-top:5px;margin-bottom:5px;'><center><span class='betabot-text' style='color: " + color + "; font-size: 12px;'>" + text + "<br></span></center></div>");
			}else{
				chat.append("<div class='update betabot-update' style='background-color:#0a0a0a; margin-top:5px;margin-bottom:5px;'><center><span class='betabot-text' style='color: " + color + ";'>" + text + "<br></span></center></div>");
			}
		}
	}

	if (a){
		$('#chat-messages').scrollTop(50000);
	}
	if (chat.children().length >= 512){
		chat.children().first().remove();
	}
}

addChat("<br><a style='color:#feffab;'><b>Sorry, the ID Basics script URL changed!</b></a> Please go <a style='color:#aec9ea;' href='https://github.com/Tetheu98/FunBotThing' target='_blank'>here</a> and update it.<br>","#CCCCCC");
