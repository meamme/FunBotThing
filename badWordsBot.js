/*          DISCLAIMER          *
* This was a script request. Under no circumstances is this a joke or
* a fun script. This is used for moderation, and does not represent any
* sort of offense or opinion from the author, myself. I am very sorry if
* this offended anyone, and it is not my intention to have this directed
* at anyone whatsoever. Because of the potential offensive content, the words
* list is separated from the main script.
*/

var shouldDelete = false;
var badWordsCounter = 0;
if (localStorage.getItem("badWordsCounter")){
	badWordsCounter = parseInt(localStorage.getItem("badWordsCounter"));
}else{
	localStorage.setItem("badWordsCounter", badWordsCounter);
}

$.getScript("https://rawgit.com/Tetheu98/FunBotThing/master/badWordsList.js"); //List of bad words [NSFW]

API.on(API.CHAT, function(){
	for (var i in badWords){
		if (data.message.toLowerCase().indexOf(badWords[i].toLowerCase()) != -1){
			badWordsCounter++;
			localStorage.setItem("badWordsCounter", badWordsCounter);
			if (shouldDelete){
				$.ajax({type: "DELETE",url: "/_/chat/" + data.cid});
			}
		}
	}

	if (data.message.toLowerCase().indexOf("!counter") == 0 || data.message.toLowerCase().indexOf("!count") == 0){
		if (badWordsCounter != 0){
			API.sendChat("[Bad Words Counter] Current bad word streak is " + badWordsCounter);
		}else{
			API.sendChat("[Bad Words Counter] No bad words have been said yet! Props to you!");
		}
	}else if (data.message.toLowerCase().indexOf("!reset") == 0){
		API.sendChat("[Bad Words Counter] Current streak (" + badWordsCounter + ") is now set to 0.");
	}else if (data.message.toLowerCase().indexOf("!toggledelete") == 0 || data.message.toLowerCase().indexOf("!delete") == 0){
		shouldDelete = !shouldDelete;
		var isOn = shouldDelete ? "Will delete messages containing bad words." : "Will not delete messages containing bad words.";
		API.sendChat("[Bad Words Counter] " + isOn);
	}
});