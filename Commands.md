	case "todo":
			bcs.addChat("<br><a style='color:#c2f3bf;'><b>Todo list:</b></a><br><br>\
					<a style='color: #d4d4d4;'>⊱ <del>Fix inline images bug</del> <b>[DONE]</b></a><br>\
					<a style='color: #d4d4d4;'>⊱ <del>Have WL position on vote list (cuz why not)</del> <b>[DONE]</b></a><br>\
					<a style='color: #d4d4d4;'>⊱ <del>Force skip at the end of songs</del> <b>[DONE / Hard to test]</b></a><br>\
					<a style='color: #D04545;'>⊱ <del>Change all avatars to only one</del> <b>[Ruled out]</b></a><br>\
					<a style='color: #b8e0ff;'>⊱ Check if I can raise the cap to over 200 <b>[Pending]</b></a><br>\
					<a style='color: #8bdb85;'>⊱ Meh count per user (automeh check)</a><br>\
					<a style='color: #8bdb85;'>⊱ Make vote list prettier ;D</a><br>","#CCCCCC",false,false,true);
			break;

		case "author":
		case "authors":
			bcs.addChat("<br><i class='icon icon-chat-bcslogo' style='left:80%;'></i>This script was mainly made by <a style='color:#b8e0ff;' href='https://plug.dj/@/beta-tester' target='_blank'>Beta Tester</a><br>\
						Initial CSS help by <a style='color:#b8e0ff;' href='https://plug.dj/@/marciano' target='_blank'>Marciano</a><br>\
						addChat() by <a style='color:#b8e0ff;' href='https://plug.dj/@/igor' target='_blank'>Igor</a><br>","#eee",false,true,true);
			break;

		case "antilag":
			antilag = !antilag;
			if (antilag){
				API.off(API.VOTE_UPDATE, voteStuff);
				bcs.c('/cap 1');
			}else{
				API.on(API.VOTE_UPDATE, voteStuff);
			}
			var antiOn = antilag ? "<a style='color:#90ad2f'><b>on</b></a>" : "<a style='color:#c42e3b'><b>off</b></a>";
			bcs.addChat("AntiLag is now " + antiOn,"#ccc");
			break;

		case "skip":
			API.moderateForceSkip();
			break;

		case "autoskip":
			autoskip = !autoskip;
			var willSkip = willSkip ? "<a style='color:#90ad2f'><b>on</b></a>" : "<a style='color:#c42e3b'><b>off</b></a>";
			bcs.addChat("Song autoskipper is now " + willSkip,"#ccc");
			break;

		case "woot":
		case "+1":
			bcs.getHistoryID(1);
			break;

		case "showinter":
		case "intercom":
			$("#intercom-launcher").css({"visibility":"visible"});
			break;

		case "meh":
		case "-1":
			bcs.getHistoryID(-1);
			break;

		case "flip":
		case "mirror":
			bcs.isFlip = !bcs.isFlip;
			if (bcs.isFlip){$("body").css({'transform':'scale(-1, 1)'})}
			if (!bcs.isFlip){$("body").css({'transform':'scale(1, 1)'})}
			break;

		case "rekt":
			bcs.c("NOT REKT ☐ | REKT ☑");
			break;

		case "invert":
			bcs.isInverted = !bcs.isInverted;
			if (bcs.isInverted){
				if (BrowserDetect.browser == "Firefox"){
					$("#app").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
					$("#user-view").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
					$("#room-settings").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
					$("#dialog-container").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
					$("#toast-notifications").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
					$("#room-settings").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
					bcs.l('Due to Mozilla being a bully, not every single part of the page will be inverted.');
				}else{
					$("body").css({'filter':'invert(100%)','-webkit-filter':'invert(100%)'});
				}
			}
			if (!bcs.isInverted){
				if (BrowserDetect.browser == "Firefox"){
					$("#app").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
					$("#user-view").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
					$("#room-settings").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
					$("#dialog-container").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
					$("#toast-notifications").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
					$("#room-settings").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
				}else{
					$("body").css({'filter':'invert(0%)','-webkit-filter':'invert(0%)'});
				}
			}
			break;

		case "icon":
		case "icons":
			chatIcons = !chatIcons;
			var iconsOn = chatIcons ? "<a style='color:#90ad2f'><b>on</b></a>" : "<a style='color:#c42e3b'><b>off</b></a>";
			bcs.addChat("BCS chat icons are now " + iconsOn,"#ccc");
			break;

		case "ooo":
			ct("http://youtu.be/MeB3eYk1Ze0?t=1m16s");
			break;

		case "toast":
			bcs.settings.toast(command[1]);
			break;

		case "lrg":
			bigchat = !bigchat;
			$("#xbig").toggleClass('active');
			$("#xbig .icon").toggleClass('active');
			if (bigchat){
				$("#room .app-right").animate({width:"399"});
				$('#chat-input-field').animate({width:"360"});
				$("#chat-input").animate({width:"380"});
			}else if (!bigchat){
				$("#room .app-right").animate({width:"345"});
				$('#chat-input-field').animate({width:"305"});
				$("#chat-input").animate({width:"326"});
			}
			break;

		case "support":
			bcs.addChat("<br><a style='color:#c2f3bf;'><b>Here's support stuff:</b></a><br><br>\
					<a style='color: #8bdb85;'>support@plug.dj</a><br>\
					<a style='color: #8bdb85;' href='https://plug.dj/support'>plug.dj/support</a><br>\
					<a style='color: #8bdb85;' href='http://support.plug.dj/hc' target='_blank'>support.plug.dj</a><br>","#CCCCCC");
			break;

		case "timeout":
			ct("You must wait 10 minutes before you can post links on chat after you join a room. This is done to prevent spam.");
			break;

		case "nsfw":
			ct('NSFW means Not Safe For Watching (objectionable content) -- nudity, scant clothing (incl. lingerie), blood and or violence (gore), snuff (dying)');
			break;

		case "mc":
		case "minecraft":
			ct('plug.dj now has its own Minecraft server! http://blog.plug.dj/2014/12/plugcraft-server/ (IP is plugdj.mcph.co)');
			break;

		case "emojisheet":
		case "emojicheat":
			ct("http://www.emoji-cheat-sheet.com/");
			break;

		case "thepuff":
			pufflock = !pufflock;
			break;

		case "sacrifice":
		case "offering":
			bcs.c("/me  :fire: :fire: :fire: :fire: :fire:");
			setTimeout(function(){bcs.c("/me  :fire: :fire: :goat: :fire: :fire:")},250);
			setTimeout(function(){bcs.c("/me  :fire: :fire: :fire: :fire: :fire:")},500);
			setTimeout(function(){bcs.c("/me Please, all mighty Admins, accept this sacrifice!")},750);
			break;

		case "del":
			var cmds = command[1].trim();
			$.ajax({
				type: 'DELETE',
				url: '/_/chat/' + logged[cmds]
			});
			console.log(logged[cmds]);
			logged.splice(cmds,1);
			break;

		case "mehs":
		case "woots":
		case "votes":
		case "updatevotes":
		case "updatelist":
				updateList();
			break;

		case "erase":
			$.ajax({
				type: 'DELETE',
				url: '/_/chat/' + command[1]
			});
			break;

		case "break":
			API.sendChat('/me  ');
			setTimeout(function(){API.sendChat('/del 0')},550);
			break;

		case "lookup":
			var itsYou = false;
			if (command[1] == API.getUser().id){itsYou = true;}
			lookfor(command[1],itsYou);
			break;

		case "search":
			var xname = command[1].substring(1).toString();
			var oname = xname.substring(0,xname.length - 2);
			var uname = oname.toLowerCase();
			var foundIt = false;
			var itsYou = false;
			if (oname == API.getUser().username){itsYou = true;}
			console.log(xname + "||" + uname + "||" + oname);
			for (var i = 0; i < API.getUsers().length; i++){
				if (oname == API.getUsers()[i].username){
					lookfor(API.getUsers()[i].id,itsYou);
					foundIt = true;
					break;
				}
			}
			if (!foundIt){
				bcs.addChat("<br><b><a style='color:#eaaeae;'>[User </b></a>" + oname + "<b><a style='color:#eaaeae;'> not found]</a></b><br>\
				Make sure you are using <b>'<a style='background-color:#3f3fff;'>@NAME </a>'</b> (yes, the space after it <em>is</em> important)","#CCCCCC",false,false,true);
			}
			break;

		case "showoff":
			bcs.c("/me :fire: :star2: :fire: :boom: :fire: :boom: :fire: :star2: :fire:");
			setTimeout(function(){bcs.c("/me ~A wild me appears~");},250);
			setTimeout(function(){bcs.c("/me :fire: :star2: :fire: :boom: :boom: :fire: :fire: :star2: :fire:");},500);
			break;

		case "cya":
			ct("Cya later! c: Thanks a lot for passing by! o/");
			break;

		case "shrug":
			bcs.c(command[1] + " ¯\\_(ツ)_/¯");
			break;

		case "quote":
			bcs.c("/me ❝ " + command[1] + " ❞");
			break;

		case "sing":
			bcs.c("/me ♪ " + command[1] + " ♫");
			break;

		case "getid":
		case "getuid":
		case "id":
		case "uid":
			var xname = command[1].substring(1).toString();
			var oname = xname.substring(0,xname.length - 2);
			var uname = oname.toLowerCase();
			console.log(xname + "||" + uname + "||" + oname);
			getuid(uname,oname);
			break;

		case "joinmsg":
		case "jmsg":
			joinmsg = !joinmsg;
			if (joinmsg){
				bcs.addChat('Join message on',"#ececec");
			}else if (!joinmsg){
				bcs.addChat('Join message off',"#ececec");
			}
			break;

		case "grabmsg":
		case "gmsg":
			grabmsg = !grabmsg;
			if (grabmsg){
				bcs.addChat('Grab message on',"#ececec");
			}else if (!grabmsg){
				bcs.addChat('Grab message off',"#ececec");
			}
			break;
		
		case "mehmsg":
		case "mmsg":
			mehmsg = !mehmsg;
			if (mehmsg){
				bcs.addChat('Meh message on',"#ececec");
			}else if (!mehmsg){
				bcs.addChat('Meh message off',"#ececec");
			}
			break;

		case "autojoin":
		case "auto":
			autolock = !autolock;
			if (autolock){
				bcs.addChat('Autojoin on',"#ececec");
			}else if (!autolock){
				bcs.addChat('Autojoin off',"#ececec");
			}
			break;

		case "togglecap":
		case "captoggle":
		case "capset":
		case "setcap":
			cap = !cap;
			if (cap){
				bcs.addChat('AutoCap on',"#ececec");
				var thiscap = API.getStaff().length;
				bcs.c('/cap ' + thiscap);
				bcs.addChat('Cap set to ' + thiscap,"#c5b5ff");
			}else if (!cap){
				bcs.addChat('AutoCap off',"#ececec");
			}
			break;

		case "whywoot":
			ct("If you're in this room, you'll most probably like the songs that are played here. Therefore, you'll be clicking Woot for most songs. AutoWoots simply click Woot for you, in case you're busy. If you dislike a song, you can manually Meh it.");
			break;

		case "op":
			ct("OverPlayed list: http://bit.ly/dteoplist");
			break;

		case "rules":
			ct("Rules: http://bit.ly/rulesdte");
			break;

		case "blog":
			ct("Blog: http://blog.plug.dj/");
			break;

		case "ba":
			ct("Brand Ambassadors are volunteers who help moderate the website and test features. Here's more about the BA project: http://plug.dj/ba");
			break;

		case "admin":
			ct("Admins are the people that work for plug.dj. They have a plug.dj logo next to their names in chat. http://plug.dj/team/");
			break;

		case "xp":
			ct('XP and PP are earned on ticks. There is a tick cap of 72 per day. After 6 hours (72 ticks), you hit the “XP cap” and will not gain XP until the next day. More info: http://goo.gl/7SDAAr');
			break;

		case "pp":
		case "points":
		case "point":
			ct("The website check every minute what you did in the website during that time (such as Wooting, chatting, etc), and then generates a proportional amount of XP and PP for it. XP, however, has a daily cap, so you can't farm it.");
			break;

		case "pn":
		case "notes":
			ct("Plug Notes (PNs) are a reward for donating to plug.dj. Everyone gets free 350PNs though, for testing how they work");
			break;

		case "rank":
		case "ranks":
			ct("Help people out, be active and be online often, and you'll eventually be noticed by our staff. We'll watch you for some time, then decide whether you deserve a rank or not.");
			break;

		case "clearall":
		case "deleteall":
			var r = confirm("Delete entire chat on log?");
			if (r === true) {
				deleteAll();
			}else{
				bcs.l("[Command " + command[0] + " denied]",true);
			};
			break;

		case "flood":
			var r = confirm("Are you sure you wanna flood? Beta is NOT responsible for the consequences.");
			if (r === true) {
				bcs.c("/me It's flood time! ;D");
				setTimeout(function(){bcs.c("/me @everyone @staff")},250);
				setTimeout(function(){bcs.c("/me @everyone @staff")},500);
				setTimeout(function(){bcs.c("/me @everyone @staff")},750);
				setTimeout(function(){bcs.addChat("This command was brought to you by DCV [ID 3639711]","#ececec",false,false,true);},775);
			}else{
				bcs.l("[Command " + command[0] + " denied]",true);
			};
			break;

		case "hidechat":
		case "hide":
			chatShows = !chatShows;
			if (!chatShows){$("#chat-messages").fadeOut();}
			else {$("#chat-messages").fadeIn();}
			break;

		case "deleteself":
			deleteSelf();
			break;

		case "rainbow":
		case "rainbows":
		case "hearts":
			bcs.c(":heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart:");
			setTimeout(function(){bcs.c(":purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart:")},250);
			setTimeout(function(){bcs.c(":blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart:")},500);
			setTimeout(function(){bcs.c(":green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart:")},750);
			setTimeout(function(){bcs.c(":yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart:")},1000);
			break;

		case "msgs":
			bcs.addChat("[Messages length: " + messages.length + "]", "#ececec");
			break;

		case "logcheck":
		case "checklog":
			console.log(logcheck);
			bcs.addChat("[Check console for chat log since last clear]","#ececec");
			break;

		case "logclear":
		case "clearlog":
			logcheck = [];
			bcs.addChat("[Log cleared.]","#ececec");
			break;

		case "12":
			ct('ᄅ⇂');
			break;

		case "opensans":
		case "os":
			$("#chat-messages").css({"font-family":"'Open Sans', sans-serif"});
			$("#chat-input-field").css({"font-family":"'Open Sans', sans-serif"});
			break;

		case "roboto":
			$("#chat-messages").css({"font-family":"Roboto, sans-serif"});
			$("#chat-input-field").css({"font-family":"Roboto, sans-serif"});
			break;

		case "emojis":
			bcs.addChat('~=[,,_,,]:3     ||     ¬_¬     ||     ಠ_ಠ',"#ececec");
			bcs.addChat('ლ(ಥ益ಥლ     ||     (っ◔‿◔)っ     ||     (╥﹏╥)',"#ececec");
			bcs.addChat('(─‿‿─)   ||   (ʃƪ ˘ ³˘)   ||   ( ͡° ͜ʖ ͡°)',"#ececec");
			bcs.addChat('(ᕗ ಠ益ಠ)ᕗ ︵﻿ ┻━┻   ||   (╯°□°)╯︵ ┻━┻',"#ececec");
			bcs.addChat('¯\\_(ツ)_/¯',"#ececec");
			break;

		case "readd":
			var userID = API.getDJ().id;
			readd(userID);
			break;

		case "swap":
			//BUGGED!
			var arg = command[1];
			var n1 = arg.indexOf('@');
			var n2 = arg.lastIndexOf('@');
			var u1 = arg.slice(n1 + 1,n2 - 1).trim();
			var u2 = arg.slice(n2 + 1).trim();
			var id1;var id2;
			for (var i = 0; i < API.getUsers().length; i++){
				if (API.getUsers()[i].username == u1){
					n1 = API.getWaitListPosition(API.getUsers()[i].id);
					id1 = API.getUsers()[i].id;
				}
				if (API.getUsers()[i].username == u2){
					n2 = API.getWaitListPosition(API.getUsers()[i].id);
					id2 = API.getUsers()[i].id;
				}
			}
			if (n1 == -1){API.moderateAddDJ(id1);n1 = API.getWaitList().length;}
			if (n2 == -1){API.moderateAddDJ(id2);n2 = API.getWaitList().length;}
			var posTime1 = setTimeout(function(){API.moderateMoveDJ(id1,n2);},750);
			var posTime2 = setTimeout(function(){API.moderateMoveDJ(id2,n1 + 1);},1250);
			switch ("undefined"){
				case typeof n1:case typeof n2:
				case typeof u1:case typeof u2:
				case typeof id1:case typeof id2:
					clearTimeout(posTime1);
					clearTimeout(posTime2);
					console.log("[ERROR]");
					console.log("n1 " + n1 + " | n2 " + n2);
					console.log("u1 " + u1 + " | u2 " + u2);
					console.log("id1 " + id1 + " | id2 " + id2);
			}
			break;

		case "ban":
		case "b":
		case "pb":
			dropHammer("b",command[1],"f");
			break;

		case "dayban":
		case "dban":
		case "db":
			dropHammer("b",command[1],"d");
			break;

		case "hourban":
		case "hban":
		case "hb":
			dropHammer("b",command[1],"h");
			break;

		case "m":
		case "ml":
		case "lmute":
			dropHammer("m",command[1],"l");
			break;

		case "mm":
		case "mmute":
			dropHammer("m",command[1],"m");
			break;

		case "ms":
		case "smute":
			dropHammer("m",command[1],"s");
			break;

		case "lockdown":
			if (API.getUser().role > 1 || API.getUser().gRole != 0){
				lockdown = !lockdown;
				if (lockdown){
					var ll = "enabled. Only staff may chat.";
				}else{
					var ll = "disabled";
				}
				bcs.addChat("<b>Lockdown is now " + ll + "</b>","#FF3333");
			}else{
				bcs.addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
			}
			break;

		case "z":
			bcs.addChat("<a style='color:#2975ff;'><b>Tip:</b></a> &<b>zwnj;</b> / &<b>nbsp;</b>","#CCCCCC");
			break;
			
		case "yes":
			if (bcs.attemptRefresh){
				bcs.addChat("<i class='icon icon-chat-bcs' style='left:5px;'></i> <b>Yes</b>! BCS will restart in a few seconds</a>.","#ccc",true,false);
				bcs.resetAll();
			}else{
				bcs.addChat("Command <a style='color:#c4c4c4;'>" + command[0] + "</a> is not a command!","#fea6a6");
			}
			break;

		case "no":
			if (bcs.attemptRefresh){
				bcs.addChat("<i class='icon icon-chat-bcs' style='left:5px;'></i> <b>No</b>! BCS will not restart</a>.","#ccc",true,false);
			}else{
				bcs.addChat("Command <a style='color:#c4c4c4;'>" + command[0] + "</a> is not a command!","#fea6a6");
			}
			break;

		//Stuff that shouldn't get a 'doesnt exist' warning (mostly p3)
		case "lockskip":case "skip":case "commands":case "nick":case "avail":
		case "afk":case "work":case "sleep":case "join":case "leave":case "whoami":
		case "refresh":case "version":case "mute":case "link":case "unmute":case "no":
		case "nextsong":case "automute":case "alertson":case "alertsoff":case "yes":
		case "getpos":case "ignore":case "whois":case "kick":case "add":case "help":
		case "remove":case "lock":case "unlock":case "help":case "me":case "em":
			break;
		
		case "cmds":
		case "cmd":
			if (hasPerms){
				bcs.addChat("<br><a style='color:#7174ff;'><b>------=[ Mod Commands ]=------</b></a><br><br>\
						<a style='color:#ffffff;'><b>/id @</b><em>NAME</em></a><br>\
						<a style='color:#CCCCCC;'>Returns the ID of that user</a><br><br>\
						<a style='color:#ffffff;'><b>/lookup </b><em>ID</em></a><br>\
						<a style='color:#CCCCCC;'>Returns info about specified user</a><br><br>\
						<a style='color:#ffffff;'><b>/search @</b><em>NAME</em></a><br>\
						<a style='color:#CCCCCC;'>Returns info about specified user</a><br><br>\
						<a style='color:#ffffff;'><b>/deleteall</b></a><br>\
						<a style='color:#CCCCCC;'>Deletes all chat since joining</a><br><br>\
						<a style='color:#ffffff;'><b>/del </b><em>MSG#</em></a><br>\
						<a style='color:#CCCCCC;'>Deletes message from you, using Array position</a><br><br>\
						<a style='color:#ffffff;'><b>/erase </b><em>MSGID</em></a><br>\
						<a style='color:#CCCCCC;'>Deletes message with specified ID<br>(regardless of it being sent before or after you joined)</a><br><br>\
						<a style='color:#e6ff99;'><b>/readd</b></a><br>\
						<a style='color:#e6ff99;'>Skips > Puts in WL > Moves to 1st<br>BUGGED</a><br><br>\
						<a style='color:#e6ff99;'><b>/swap @</b><em>NAME</em> <b>@</b><em>NAME</em></a><br>\
						<a style='color:#e6ff99;'>Swaps two people in the WaitList<br>BUGGED</a><br><br>\
						<a style='color:#ffaaaa;'><b>/ban </b><em>ID</em></a><br>\
						<a style='color:#CCCCCC;'>Permabans an user by its ID</a><br><br>\
						<a style='color:#7174ff;'><b>------=[ Mod Commands ]=------</b></a><br>","#CCCCCC");
			}else{
				bcs.addChat("<br><a style='color:#71ffb0;'><b>------=[ Commands ]=------</b></a><br><br>\
						<a style='color:#ffffff;'><b>/id @</b><em>NAME</em></a><br>\
						<a style='color:#CCCCCC;'>Returns the ID of that user</a><br><br>\
						<a style='color:#ffffff;'><b>/lookup </b><em>ID</em></a><br>\
						<a style='color:#CCCCCC;'>Returns info about specified user</a><br><br>\
						<a style='color:#ffffff;'><b>/search @</b><em>NAME</em></a><br>\
						<a style='color:#CCCCCC;'>Returns info about specified user</a><br><br>\
						<a style='color:#71ffb0;'><b>------=[ Commands ]=------</b></a><br>","#CCCCCC");
			}
			break;

		default:
			bcs.addChat("Command <a style='color:#c4c4c4;'>" + command[0] + "</a> is not a command!","#fea6a6");
			break;
