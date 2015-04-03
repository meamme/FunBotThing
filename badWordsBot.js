/*          DISCLAIMER          *
* This was a script request. Under no circumstances is this a joke or
* a fun script. This is used for moderation, and does not represent any
* sort of offense or opinion from the author, myself. I am very sorry if
* this offended anyone, and it is not my intention to have this directed
* at anyone whatsoever. Because of the potential offensive content, the words
* list is separated from the main script.
*/

var bwcVersion = "Version 2.2.1";

if (API.getUser().role === 0 && API.getUser().gRole === 0){
	API.chatLog("[Bad Words Counter] Warning! Not all rooms allow non-staff to run bots! Please make sure to get the Host's persmission first.");
	setTimeout(function(){API.chatLog("+ Not all features of BWC will work, due to lack of persmission.");},250);
}else{
	API.chatLog("[Bad Words Counter] " + bwcVersion + " turned on! Do !bwc for commands list");
}

var shouldDelete = false;
var badWordsCounter = 0;
if (localStorage.getItem("badWordsCounter")){
	badWordsCounter = parseInt(localStorage.getItem("badWordsCounter"));
}else{
	localStorage.setItem("badWordsCounter", badWordsCounter);
}

$.getScript("https://rawgit.com/Tetheu98/FunBotThing/master/badWordsList.js"); //List of bad words [NSFW]

API.on(API.CHAT, function(data){
	var message = data.message.toLowerCase();
	for (var i in badWords){
		if (message.indexOf(badWords[i].toLowerCase() + " ") != -1 || message.indexOf(" " + badWords[i].toLowerCase()) != -1){
			badWordsCounter++;
			localStorage.setItem("badWordsCounter", badWordsCounter);
			if (shouldDelete){
				$.ajax({type: "DELETE",url: "/_/chat/" + data.cid});
			}else{
				$("[data-cid^='" + data.cid + "']").css({"background-color":"rgba(100, 0, 0, 0.25)"});
				$("[data-cid^='" + data.cid + "'] .text").text() = this.split(badWords[i]).join("<span class='name'>" + badWords[i] + "</span>");
			}
		}
	}

	if(message.indexOf('!') === 0 || message.indexOf('.') === 0){
		var command = message.substring(1).split(' ');
		if(typeof command[2] != "undefined"){
			for(var i = 2; i < command.length; i++){
				command[1] = command[1] + ' ' + command[i];
			}
		}
		if(API.getUser(data.uid).role > 0 || API.getUser(data.uid).gRole > 0){
			switch(command[0].toLowerCase()){
				case "counter":
				case "count":
				case "streak":
					if (badWordsCounter != 0){
						API.sendChat("[Bad Words Counter] @" + data.un + " - Current bad word streak is " + badWordsCounter);
					}else{
						API.sendChat("[Bad Words Counter] @" + data.un + " - No bad words have been said yet! Props to the room!");
					}
					break;
				
				case "reset":
					API.sendChat("[Bad Words Counter] @" + data.un + " - Current streak (" + badWordsCounter + ") is now set to 0.");
					break;
				
				case "toggledelete":
				case "delete":
					shouldDelete = !shouldDelete;
					var isOn = shouldDelete ? "Will delete messages containing bad words." : "Will not delete messages containing bad words.";
					API.sendChat("[Bad Words Counter] @" + data.un + " - " + isOn);
					break;
				
				case "bwc":
				case "badwordscounter":
				case "bwchelp":
					API.sendChat("---[Bad Words Counter]---");
					setTimeout(function(){API.sendChat(bwcVersion);},250);
					setTimeout(function(){API.sendChat("Commands: !streak, !reset, !delete, !bwc");},500);
					break;
			}
		}
	}
});