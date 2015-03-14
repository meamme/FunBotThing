var bcs = {
	version:"<a style='color:#ccc; font-size:10px'><em>Beta v0.14.2.2</em></a>",
	resetAll:function(){
			bcs.turnOff();
			bcs = {};
			betaWasOn = false;
			$.getScript('https://rawgit.com/Tetheu98/FunBotThing/master/ClientScript.js');
		},
	attemptRefresh:false,
	addChat:function(text, color, hasLeft, hasBottom, isNotCenter, hasMargin) {
			var chat = $('#chat-messages');var a = chat.scrollTop() > chat[0].scrollHeight - chat.height() - 28;
			if (color == undefined){color = "#99ffd7";}
			if (isNotCenter){
				if (!hasMargin){
					chat.append("<div class='betabot-update' style='background-color:#0a0a0a;'><div class='text-margin' style='margin-left: 10px;'><span class='betatext' style='color: " + color + "; font-size: 12px;'>" + text + "<br></span></div></div>");
				}else{
					chat.append("<div class='betabot-update' style='background-color:#0a0a0a; margin-top:10px;margin-bottom:10px;'><div class='text-margin' style='margin-left: 10px;'><span class='betatext' style='color: " + color + "; font-size: 12px;'>" + text + "<br></span></div></div>");
				}
			}else{
				if (hasBottom){
					if (hasLeft){
						chat.append("<div class='betabot-update' style='background-color:#0a0a0a; border-left: double 6px " + color + "; border-bottom: double 6px " + color + "'><center><span class='betatext' style='color: " + color + "; font-size: 13px;'>" + text + "<br></span></center></div>");
					}else{
						chat.append("<div class='betabot-update' style='background-color:#0a0a0a; border-bottom: double 6px " + color + ";'><center><span class='betatext' style='color: " + color + "; font-size: 13px;'>" + text + "<br></span></center></div>");
					}
				}else{
					if (hasLeft){
						chat.append("<div class='betabot-update' style='background-color:#0a0a0a; border-left: double 6px " + color + "; margin-top:5px;margin-bottom:5px;'><center><span class='betatext' style='color: " + color + "; font-size: 12px;'>" + text + "<br></span></center></div>");
					}else{
						chat.append("<div class='betabot-update' style='background-color:#0a0a0a; margin-top:5px;margin-bottom:5px;'><center><span class='betatext' style='color: " + color + ";'>" + text + "<br></span></center></div>");
					}
				}
			}
			if (a){$('#chat-messages').scrollTop(50000);}
			if (chat.children().length >= 512){chat.children().first().remove();}
		},
	toggle: {
		prequel: function(){
			hasArrow  = !hasArrow;
			$('#xclick .xbox').toggleClass('active');
			$("#xall").toggleClass('active');
			if (hasArrow){
				$("#xclick .xbox").css({"background-image":"url(https://i.imgur.com/k3pe7i8.png)"});
				$("#xprequel").animate({left:'0px'});
				$("#xmain").animate({left:'0px'});
				$("#xmod").animate({left:'0px'});
			}else{
				$('#xclick .xbox').css({"background-image":"url(https://i.imgur.com/zi3zUtD.png)"});
				$("#xprequel").animate({left:'-170px'});
				$("#xmain").animate({left:'-170px'});
				$("#xmod").animate({left:'-170px'});
			}
		},
		box: function(){
			hasArrow  = !hasArrow;
			$('#xclick .xbox').toggleClass('active');
			$("#xall").toggleClass('active');
			if (hasArrow){
				$("#xclick .xbox").css({"background-image":"url(https://i.imgur.com/k3pe7i8.png)"});
				$("#xprequel").animate({left:'0px'});
				$("#xmain").animate({left:'0px'});
				$("#xmod").animate({left:'0px'});
			}else{
				$('#xclick .xbox').css({"background-image":"url(https://i.imgur.com/zi3zUtD.png)"});
				$("#xprequel").animate({left:'-170px'});
				$("#xmain").animate({left:'-170px'});
				$("#xmod").animate({left:'-170px'});
			}
		},
		joinmsg: function(){
			joinmsg = !joinmsg;
			$("#xjoinmsg").toggleClass('active');
			$("#xjoinmsg .icon").toggleClass('active');
		},
		grabmsg: function(){
			grabmsg = !grabmsg;
			$("#xgrabmsg").toggleClass('active');
			$("#xgrabmsg .icon").toggleClass('active');
		},
		mehmsg: function(){
			mehmsg = !mehmsg;
			$("#xmehmsg").toggleClass('active');
			$("#xmehmsg .icon").toggleClass('active');
		},
		autocap: function(){
			cap = !cap;
			$("#xautocap").toggleClass('active');
			$("#xautocap .icon").toggleClass('active');
			if (cap){
				var thiscap = API.getStaff().length;
				bcs.c('/cap ' + thiscap);
				bcs.addChat('Cap set to ' + thiscap,"#c5b5ff");
			}
		},
		autograb: function(){
			autograb = !autograb;
			$("#xautograb").toggleClass('active');
			$("#xautograb .icon").toggleClass('active');
		},
		autojoin: function(){
			autolock = !autolock;
			$("#xautojoin").toggleClass('active');
			$("#xautojoin .icon").toggleClass('active');
		},
		autowoot: function(){
			autowoot = !autowoot;
			$("#xautowoot").toggleClass('active');
			$("#xautowoot .icon").toggleClass('active');
		},
		songup: function(){
			songup = !songup;
			$("#xsongup").toggleClass('active');
			$("#xsongup .icon").toggleClass('active');
		},
		line: function(){
			inlineOn = !inlineOn;
			$("#xline").toggleClass('active');
			$("#xline .icon").toggleClass('active');
		},
		big: function(){
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
		},
		chatShrink: function(){
			bigchat = false;
			$('#xbig').attr('class','xbutton');
			$("#xbig .icon").attr('class','icon icon-check-blue');
			$("#room .app-right").animate({width:"345"});
			$('#chat-input-field').animate({width:"305"});
			$("#chat-input").animate({width:"326"});
			setTimeout(function(){bcs.scrollChat();},250);
		},
		cuteVoting: function(){
			cutevotes = !cutevotes;
			$("#xvotes").toggleClass('active');
			$("#xvotes .icon").toggleClass('active');
			if (cutevotes){
				$("#grab .top .icon").animate({left:"4%"});
				$("#grab .top .label").hide();
				$("#woot .top .icon").animate({left:"4%"});
				$("#woot .top .label").hide();
				$("#meh .top .icon").animate({left:"4%"});
				$("#meh .top .label").hide();
				$('#meh').animate({left:"-1px"});
				$('#woot').animate({left:"1px"});
				$('#dj-button .left .icon').animate({left:"32px"});
				$('#dj-button span').hide();
				$('#dj-button .left').animate({width:"97px"});
				$('#dj-button').animate({width:"130px"});
			}else if (!cutevotes){
				$("#grab .top .icon").animate({left:"0"});
				$("#grab .top .label").show();
				$("#woot .top .icon").animate({left:"0"});
				$("#woot .top .label").show();
				$("#meh .top .icon").animate({left:"0"});
				$("#meh .top .label").show();
				$('#meh').animate({left:"0px"});
				$('#woot').animate({left:"0px"});
				$('#dj-button .left .icon').animate({left:"22px"});
				$('#dj-button span').show();
				$('#dj-button .left').animate({width:"72px"});
				$('#dj-button').animate({width:"230px"});
			}
		},
		previews: function(){
			dapreview = !dapreview;
			$("#xpreviews").toggleClass('active');
			$("#xpreviews .icon").toggleClass('active');
			if (!dapreview){
				$("#dialog-container").css({left:"0px",top:"0px",width:"79.3%",height:"100%"});
			}else if (dapreview){
				$("#dialog-container").css({left:"300px",top:"100px",width:"0px",height:"0px"});
			}
		},
		afk: function(){
			afkmsg = !afkmsg;
			if (afkmsg){
				$("#chat-input .afkIsOn").show();
				$("#chat-input-field").css({color:'#fef8a0'});
				if (API.getUser().id != 4820534){
					$("#xafkenter").show();
					$("#xafkbutton").show();
					$("#xmod").css({'top':'460px'});
				}
			}else{
				$("#chat-input .afkIsOn").hide();
				$("#chat-input-field").css({color:'#eee'});
				notifyAFK = 0;
				$("#chat-input .afknotifications").text(notifyAFK);
				$("#chat-input .afknotifications").hide();
				$("#xafkenter").hide();
				$("#xafkbutton").hide();
				$("#xmod").css({'top':'436px'});
			}
			$("#xafk").toggleClass('active');
			$("#xafk .icon").toggleClass('active');
		},
		afknotifications: function(){
			for (var i = 0; i < mentioned.length; i++){
				bcs.addChat(mentioned[i],"#4658b5",false,false,true);
			}
			notifyAFK = 0;
			mentioned = [];
			$("#chat-input .afknotifications").hide();
		},
		del: function(){
			var r = confirm("Delete entire chat on log?");
			if (r === true) {
				deleteAll();
			}else{
				bcs.l("[Command DELETEALL denied]");
			};
		},
		timeskip: function(){
			timeskip = !timeskip;
			$("#xtimeskip").toggleClass('active');
			$("#xtimeskip .icon").toggleClass('active');
		},
		lockdown: function(){
			if (API.getUser().role > 1 || API.getUser().gRole != 0){
				lockdown = !lockdown;
				if (lockdown){
					var ll = "enabled. Only staff may chat.";
				}else{
					var ll = "disabled";
				}
				bcs.addChat("<b>Lockdown is now " + ll + "</b>","#FF3333");
				$("#xlockdown").toggleClass('active');
				$("#xlockdown .icon").toggleClass('active');
			}else{
				bcs.addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
			}
		},
		spammer: function(){ 
			if (API.getUser().role > 1 || API.getUser().gRole != 0){
				spamon = !spamon;
				if (spamon){
					var ll = "enabled.";
				}else{
					var ll = "disabled";
				}
				bcs.addChat("<b>AntiSpam is now " + ll + "</b>","#FF3333");
				$("#xspammer").toggleClass('active');
				$("#xspammer .icon").toggleClass('active');
			}else{
				bcs.addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
			}
		}
	},
	turnOn: function(){
		$("body").css({"background-image":"url(https://i.imgur.com/qOy1afT.png)"});
		API.on(API.CHAT, chatStuff);
		API.on(API.VOTE_UPDATE, voteStuff);
		API.on(API.GRAB_UPDATE, grabStuff);
		API.on(API.USER_JOIN, joinStuff);
		API.on(API.ADVANCE, advanceStuff);
		API.on(API.USER_LEAVE, leaveStuff);
		API.on(API.CHAT_COMMAND, commandStuff);
		$('#xprequel').on('click', bcs.toggle.prequel);
		$('#xclick .xbox').on('click', bcs.toggle.box);
		bcs.toggle.box();
		$('#xjoinmsg').on('click', bcs.toggle.joinmsg);
		$('#xgrabmsg').on('click', bcs.toggle.grabmsg);
		$('#xmehmsg').on('click', bcs.toggle.mehmsg);
		$('#xautocap').on('click', bcs.toggle.autocap);
		$('#xautograb').on('click', bcs.toggle.autograb);
		$('#xautojoin').on('click', bcs.toggle.autojoin);
		$('#xautowoot').on('click', bcs.toggle.autowoot);
		$('#xsongup').on('click', bcs.toggle.songup);
		$('#xline').on('click', bcs.toggle.line);
		$('#xbig').on('click', bcs.toggle.big);
		$('#playlist-meta').on('click', bcs.toggle.chatShrink);
		$('#history-button').on('click', bcs.toggle.chatShrink);
		$('#room-bar').on('click', bcs.toggle.chatShrink);
		$('#app-menu .community').on('click', bcs.toggle.chatShrink);
		$('#room .app-right .has-requests .header').on('click', bcs.toggle.chatShrink);
		$('#footer-user .buttons .badge').on('click', bcs.toggle.chatShrink);
		$('#footer-user .buttons .store').on('click', bcs.toggle.chatShrink);
		$('#footer-user .buttons .profile').on('click', bcs.toggle.chatShrink);
		$('#footer-user .buttons .settings').on('click', bcs.toggle.chatShrink);
		$('#xvotes').on('click', bcs.toggle.cuteVoting);
		$('#xpreviews').on('click', bcs.toggle.previews);
		$('#xsave').on('click', bcs.settings.set);
		$('#xafk').on('click', bcs.toggle.afk);
		$("#chat-input .afknotifications").on('click', bcs.toggle.afknotifications);
		$('#xdel').on('click', bcs.toggle.del);
		$('#xtimeskip').on('click', bcs.toggle.timeskip);
		$('#xlockdown').on('click', bcs.toggle.lockdown);
		$('#xspammer').on('click', bcs.toggle.spammer);
		$("#room-bar").animate({left:'106px'});
		$("#room-bar .favorite").animate({right:'55px'});
		$("#footer-user .bar .value").hide();
		setTimeout(function(){bcs.settings.load();},1000);
		bcs.getFriends();
		bcs.getStaff();
		bcs.hasp3();
		$("#playlist-panel").on('click',function(){setTimeout(function(){$("#dialog-preview").draggable({ containment: "#app", scroll: false });},500)});
		favoritism();
	},
	turnOff: function(){
		API.off(API.CHAT);
		API.off(API.VOTE_UPDATE, voteStuff);
		API.off(API.GRAB_UPDATE, grabStuff);
		API.off(API.USER_JOIN, joinStuff);
		API.off(API.ADVANCE, advanceStuff);
		API.off(API.USER_LEAVE, leaveStuff);
		API.off(API.CHAT_COMMAND, commandStuff);
		$('#xprequel').off();
		$('#xclick .xbox').off();
		$('#xjoinmsg').off();
		$('#xgrabmsg').off();
		$('#xmehmsg').off();
		$('#xautocap').off();
		$('#xautograb').off();
		$('#xautojoin').off();
		$('#xautowoot').off();
		$('#xsongup').off();
		$('#xline').off();
		$('#xbig').off();
		$('#history-button').off('click', bcs.toggle.chatShrink);
		$('#playlist-meta').off('click', bcs.toggle.chatShrink);
		$('#room-bar').off('click', bcs.toggle.chatShrink);
		$('#footer-user .user').off('click', bcs.toggle.chatShrink);
		$('#app-menu .community').off('click', bcs.toggle.chatShrink);
		$('#xvotes').off('click', bcs.toggle.cuteVoting);
		$('#xpreviews').off();
		$('#xafk').off();
		$("#chat-input .afknotifications").off();
		$('#xdel').off();
		$('#xtimeskip').off();
		$('#xlockdown').off();
		$('#xspammer').off();
		$("#xclick").remove();
		$("#xvotelist").remove();
		$("#xtheone").remove();
		$("#app-menu .list .votelist").remove();
		$("#room-bar").animate({width:'392px',left:'53px'});
	},
	c: function(msg){API.sendChat(msg);},
	l: function(msg,state){API.chatLog(msg,state);},
	plugCode: require.s.contexts._.defined,
	settings: {
		stored:{
			autowoot:true,
			joinmsg:true,
			mehmsg:true,
			grabmsg:true,
			songup:true,
			autojoin:false,
			autocap:false,
			autograb:false,
			previews:true,
			afk:false,
			timeskip:true,
			line:true,
			big:true,
			cuteVoting:true,
			lockdown:false,
			spammer:false
		},
		set: function(){
			bcs.settings.stored.autowoot = autowoot;
			bcs.settings.stored.joinmsg = joinmsg;
			bcs.settings.stored.grabmsg = grabmsg;
			bcs.settings.stored.mehmsg = mehmsg;
			bcs.settings.stored.songup = songup;
			bcs.settings.stored.autojoin = autolock;
			bcs.settings.stored.autocap = cap;
			bcs.settings.stored.autograb = autograb;
			bcs.settings.stored.previews = dapreview;
			bcs.settings.stored.afk = afkmsg;
			bcs.settings.stored.timeskip = timeskip;
			bcs.settings.stored.line = inlineOn;
			bcs.settings.stored.big = bigchat;
			bcs.settings.stored.cuteVoting = cutevotes;
			bcs.settings.stored.lockdown = lockdown;
			bcs.settings.stored.spammer = spamon;
			localStorage.setItem('bcsSettings', JSON.stringify(bcs.settings.stored));
			console.log(JSON.stringify(bcs.settings.stored));
			bcs.l('BCS settings saved!')
		},
		load: function(){
			if (localStorage.getItem('bcsSettings')){
				bcs.settings.stored = JSON.parse(localStorage.getItem('bcsSettings'));
				console.log(bcs.settings.stored);
				bcs.l('BCS custom settings loaded!');
			}else{
				localStorage.setItem('bcsSettings', JSON.stringify(bcs.settings.stored));
				console.log(bcs.settings.stored);
				bcs.l('BCS default settings loaded!');
			}
			if(bcs.settings.stored.autowoot)bcs.toggle.autowoot();
			if(bcs.settings.stored.joinmsg)bcs.toggle.joinmsg();
			if(bcs.settings.stored.grabmsg)bcs.toggle.grabmsg();
			if(bcs.settings.stored.mehmsg)bcs.toggle.mehmsg();
			if(bcs.settings.stored.songup)bcs.toggle.songup();
			if(bcs.settings.stored.autojoin)bcs.toggle.autojoin();
			if(bcs.settings.stored.autocap)bcs.toggle.autocap();
			if(bcs.settings.stored.autograb)bcs.toggle.autograb();
			if(bcs.settings.stored.previews)bcs.toggle.previews();
			if(bcs.settings.stored.afk)bcs.toggle.afk();
			if(bcs.settings.stored.timeskip)bcs.toggle.timeskip();
			if(bcs.settings.stored.line)bcs.toggle.line();
			if(bcs.settings.stored.bigchat)bcs.toggle.big();
			if(bcs.settings.stored.cuteVoting)bcs.toggle.cuteVoting();
			if(bcs.settings.stored.lockdown)bcs.toggle.lockdown();
			if(bcs.settings.stored.spammer)bcs.toggle.spammer();
		},
		toast: function(msg){
			$("#toast-notifications .notification").click();
			$("#toast-notifications").append('\
			<div class="notification bcs" style="opacity: 0;">\
				<div class="left">\
					<i class="icon icon-chat-bcslogo" style="top: 18px; left: 6px;"></i>\
				</div>\
				<div class="right">\
					<span style="top: 25px; font-size:13px;">' + msg + '</span>\
				</div>\
			</div>');
			setTimeout(function(){
				$("#toast-notifications .bcs").animate({opacity:1});
				setTimeout(function(){
					$("#toast-notifications .bcs").animate({opacity:0});
					setTimeout(function(){
						$("#toast-notifications .bcs").remove();
					},500);
				},3000);
			},500);
			$("#toast-notifications .bcs").on("click",function(){
				$("#toast-notifications .bcs").animate({opacity:0},50);
				setTimeout(function(){
					$("#toast-notifications .bcs").remove();
				},500);});
		}
	},
	user: API.getUser(),
	itsMe: false,
	isFlip: false,
	hasp3: function(){
		if ($("#plugcubed").width() != null){
			$("#plugcubed").css({'left':'106px'});
			$("#room-bar").animate({left:'159px'});
			$("#room-bar .favorite").animate({right:'102px'});
			$("#room-name .bar-value").css({'font-size':'13px'});
			$("#chat-header span").remove();
		}
	},
	scrollChat: function(){
		$("#chat-messages").scrollTop(50000);
	},
	joinWL: function(){
		$.ajax({
		type: 'POST',
		url: '/_/booth',
		dataType: 'json',
		contentType: 'application/json',
		})
	},
	leaveWL: function(){
		$.ajax({
		type: 'DELETE',
		url: '/_/booth',
		dataType: 'json',
		contentType: 'application/json',
		})
	},
	isGood: false,
	pingTest: function(){
		setTimeout(function(){
			if (API.getWaitListPosition() == -1 && API.getDJ().username != API.getUser().username){
				
			}
				bcs.addChat('You may be ghosting (or just have a terrible ping).<br>We recommend you refresh the page.','#f5ed66');
				console.log("[" + h + ":" + m + ":" + s + "] - Possibly ghosting");
			setTimeout(function(){
				if (API.getWaitListPosition() != -1){
					bcs.leaveWL();
					console.log("[" + h + ":" + m + ":" + s + "] - Not ghosting");
				}
			},1000);
		},500);
	},
	checkPing: function(){
		if (API.getWaitListPosition() == -1 && API.getWaitList().length != 50){
			bcs.joinWL();
			bcs.pingTest();
			if (!bcs.isGood){setTimeout(function(){bcs.pingTest();},1000);}
			else if(bcs.isGood){console.log("[" + h + ":" + m + ":" + s + "] - Not ghosting");}
		}else{
			console.log("[" + h + ":" + m + ":" + s + "] - Not ghosting");
		}
	},
	friendsList: [],
	getFriends: function(){
		$.ajax({
			type: 'GET', 
			url: 'https://plug.dj/_/friends', 
			contentType: 'application/json',
		}).done(function(msg) {
			bcs.friendsList = msg.data;
		});
	},
	staffList: [],
	getStaff: function(){
		$.ajax({
			type: 'GET', 
			url: 'https://plug.dj/_/staff',
			contentType: 'application/json',
		}).done(function(msg) {
			bcs.staffList = msg.data;
		});
	},
	vote: function(id,vote){
		if (id){
			$.ajax({
				type: 'POST', 
				url: 'https://plug.dj/_/votes', 
				contentType: 'application/json',
				data: '{"direction": "' + vote + '","historyID": "' + id + '"}'
			}).done(function(msg) {
				console.log(msg);
			});
		}else{
			bcs.l('Error loading current HistoryID - ' + id);
		}
	},
	getHistoryID: function(vote){
		if (typeof vote == 'undefined'){
			console.log('[!] Direction not specified, changing to 1');
			vote = 1;
		}
		$.ajax({
			type: 'GET', 
			url: 'https://plug.dj/_/rooms/state',
			contentType: 'application/json',
		}).done(function(msg) {
			bcs.vote(msg.data[0].playback.historyID,vote);
		});
	},
	stopItAll: function(){
		var currentWindow = window.location.href;
		window.location.assign(currentWindow);
		alert("Your window was refreshed.");
	}
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)    {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{string: navigator.userAgent,subString: "Chrome",identity: "Chrome"},
		{string: navigator.userAgent,subString: "OmniWeb",versionSearch: "OmniWeb/",identity: "OmniWeb"},
		{string: navigator.vendor,subString: "Apple",identity: "Safari",versionSearch: "Version"},
		{prop: window.opera,identity: "Opera",versionSearch: "Version"},
		{string: navigator.vendor,subString: "iCab",identity: "iCab"},
		{string: navigator.vendor,subString: "KDE",identity: "Konqueror"},
		{string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},
		{string: navigator.vendor,subString: "Camino",identity: "Camino"},
		{string: navigator.userAgent,subString: "Netscape",identity: "Netscape"},// for newer Netscapes (6+)
		{string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"},
		{string: navigator.userAgent,subString: "Gecko",identity: "Mozilla",versionSearch: "rv"},
		{string: navigator.userAgent,subString: "Mozilla",identity: "Netscape",versionSearch: "Mozilla"}// for older Netscapes (4-)
	],
	dataOS : [
		{string: navigator.platform,subString: "Win",identity: "Windows"},
		{string: navigator.platform,subString: "Mac",identity: "Mac"},
		{string: navigator.userAgent,subString: "iPhone",identity: "iPhone/iPod"},
		{string: navigator.platform,subString: "Linux",identity: "Linux"}
	]
};
BrowserDetect.init();

if (betaWasOn){
	bcs.addChat("<i class='icon icon-chat-bcs' style='left:5px;'></i> It seems like you would you like to restart BCS.<br><a style='color:#ff7575'> Restarting it <b>may turn off other scripts</b></a>. We recommend you refresh the page instead of just restarting the script.","#ccc",true,false);
	bcs.addChat("<br><b><a style='color:#42a5dc;'>/yes</b></a>, restart BCS, who cares about other scripts!<br><b>\
		<a style='color:#42a5dc;'>/no</b></a>, continue using this version of BCS<br><br>","#ccc",false,false,true);
	bcs.attemptRefresh = true;
}else{

bcs.addChat("<br>Beta's <a style='color:#99ffd7;'><b>Client Support Script</b></a> is now active!<br>" + bcs.version,"#ececec",true,true);
bcs.addChat("<br><marquee>I just found out of a new useless line of code!</marquee>","#ececec",false,true);

var betaWasOn = true;
bcs.attemptRefresh = false;

var blunq = new Audio();
blunq.src = "https://cdn.plug.dj/_/static/sfx/badoop.801a12ca13864e90203193b2c83c019c03a447d1.mp3";
blunq.load();

var me = [3951373,4820534];
for (var i = 0; i < me.length; i++){if (bcs.user.id == me[i]){bcs.itsMe = true;};}

var opensansfnt = "'Open Sans' sans-serif";

var d = new Date();
if (d.getDate() == 2 && d.getMonth() == 9){
	bcs.addChat("<a style='color:#ccc;'>Wot! It's Beta's</a> 2 year anniversary on plug<a style='color:#ccc;'>!<br><em>Not like you care</em>, but I thought I'd let you know! :D");
}

$.getScript('https://dl.dropboxusercontent.com/s/y90bayahpfh4odh/jquery-ui-1.10.4.custom.min.js?_=1424626287371');

var messages = [];
var logcheck = [];
var logged = [];
var chatIcons = true;
var antilag = false;

//ffdd6f < Gold

var menu = '\
	<div id="xtheone" style="cursor:default;">\
		<div id="xclick">\
		<div id="xall" class="">\
			<section id="xprequel">\
				<div id="xtitle" class="xtxt">' + bcs.version + '</div>\
			</section>\
			<section id="xmain">\
				<div id="xmoddescrip" class="xtxt">\
					<span class="xtxt" style="color:#ac76ff; font-size:16px; margin:-5px;"><b><em>User Stuff</em></b></span><br>\
				</div>\
				<div id="xjoinmsg" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Join Message</span>\
				</div>\
				<div id="xgrabmsg" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Grab Message</span>\
				</div>\
				<div id="xmehmsg" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Meh Message</span>\
				</div>\
				<div id="xsongup" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Song Updates</span>\
				</div>\
				<div id="xautowoot" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">AutoWoot</span>\
				</div>\
				<div id="xautojoin" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">AutoJoin</span>\
				</div>\
				<div id="xautograb" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">AutoGrab</span>\
				</div>\
				<div id="xautocap" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">AutoCap</span>\
				</div>\
				<div id="xafk" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">AFK</span>\
				</div>\
				<input id="xafkenter" style="display:none;"></input>\
				<button id="xafkbutton" onclick="afkUpdate()" style="color:#cccccc; background-color:#141414; border: solid 1px #b0b0b0; font-family:' + opensansfnt + '; margin:2px; display:none;">&nbsp;Ok&nbsp;</button>\
				<div id="xline" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Bootleg Inline</span>\
				</div>\
				<div id="xbig" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Large Chat</span>\
				</div>\
				<div id="xvotes" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Fancy Buttons</span>\
				</div>\
				<div id="xpreviews" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Fancy Previews</span>\
				</div>\
				<div id="xsave" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Save Settings</span>\
				</div>\
			</section>\
			<section id="xmod">\
				<div id="xmoddescrip" class="xtxt">\
					<span class="xtxt" style="color:#ac76ff; font-size:16px; margin:-5px;"><b><em>Mod Stuff</em></b></span><br>\
				</div>\
				<div id="xtimeskip" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;" title="Warns if a song is over 8min">8min warning</span>\
				</div>\
				<div id="xdel" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;" title="Well duh">Delete All Chat</span>\
				</div>\
				<div id="xlockdown" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;" title="Deletes any chat from non-staff">Lockdown</span>\
				</div>\
				<div id="xspammer" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;" title="Deletes spammy words">AntiSpam</span>\
				</div>\
			</section>\
		</div>\
		</div>\
	</div>';
	
var button = '\
	<div id="xclick"><div class="xbox"></div></div>';

var style = '<style>\
		#xtheone {\
			display: block;\
		}\
		#xtheone .active{\
			display: block;\
		}\
		@-webkit-keyframes xanim1 {\
			from {left: 0px;}\
			to {left: 170px;}\
		}\
		@-webkit-keyframes xanim2 {\
			from {left: 170px;}\
			to {left: 0px;}\
		}\
		@-webkit-keyframes xanim3 {\
			from {left:-73px;}\
			to {left:10px;}\
		}\
		#xtitle {\
			margin-top: 40px;\
		}\
		#xclick {\
			display: block;\
			-webkit-animation: xanim2 0.5s;\
		}\
		#xclick .active {\
			display: block;\
		}\
		.xbox {\
			position: absolute;\
			width: 53px;\
			height: 53px;\
			display: block;\
			z-index: 9;\
			outline: #000000 solid 1px;\
			background-color: #272B34;\
			background-image: url(https://i.imgur.com/fba61u0.png);\
			font-family: "Open Sans", sans-serif;\
			top: 0px;\
			left: 53px;\
		}\
		.xbox .active {\
			background-image: url(https://i.imgur.com/k3pe7i8.png);\
		}\
		#xall .active {\
			display:block;\
		}\
		#xprequel {\
			position: absolute;\
			top: 53px;\
			height: 53px;\
			padding: 10px;\
			width: 150px;\
			background-color: #272B34;\
			outline: #000000 solid 1px;\
			z-index: 10;\
			font-family: "Open Sans", sans-serif;\
			background-image:url(https://i.imgur.com/fba61u0.png);\
		}\
		#xafkenter {\
			margin-left:5px;\
			width:100px;\
			background-color:#282c35;\
			color:#eeeeee;\
			border: solid 1px #009cdd;\
		}\
		#xmain {\
			position: absolute;\
			top: 127px;\
			padding: 10px;\
			width: 150px;\
			height: auto;\
			background-color: #111317;\
			outline: #000000 solid 1px;\
			z-index: 10;\
			font-family: "Open Sans", sans-serif;\
			color: #808691;\
			overflow-x: hidden;\
			overflow-y: auto;\
		}\
		#xmain .icon {\
			display:none;\
		}\
		#xmain .active {\
			color: #00bee8;\
			top:auto;\
			left:auto;\
			display:block;\
		}\
		#xmod .icon {\
			display:none;\
		}\
		#xmod {\
			position: absolute;\
			top: 436px;\
			padding: 10px;\
			width: 150px;\
			background-color: #111317;\
			outline: #000000 solid 1px;\
			z-index: 10;\
			font-family: "Open Sans", sans-serif;\
			color: #808691;\
			overflow-x: hidden;\
			overflow-y: auto;\
		}\
		#xmod .active {\
			color: #00bee8;\
			top:auto;\
			left:auto;\
			display:block;\
		}\
		.xtxt: {\
			color: #3366FF;\
			padding: 2px 15px;\
		}\
		.xbutton: {\
			padding: 2px 15px;\
		}\
		.xbutton:hover, .xbox:hover, #xprequel {\
			cursor: pointer;\
		}\
		#chat-input .afknotifications {\
			position: absolute;\
			top: 8px;\
			right: 4px;\
			padding: 0 6px;\
			min-width: 10px;\
			border-radius: 12px;\
			background: #db182e;\
			text-align: center;\
			font-size: 12px;\
			cursor: pointer;\
		}\
		.icon-woot-off {\
			background-image:url(https://i.imgur.com/liUIR94.png);\
		}\
		.icon-chat-bcs {\
			height:15px;\
			width:15px;\
			background-image:url(https://i.imgur.com/pSJVANr.png);\
		}\
		.icon-chat-baS {\
			height:15px;\
			width:15px;\
			background-image:url(https://i.imgur.com/RQOpxNm.png);\
		}\
		.icon-chat-thehost {\
			height:15px;\
			width:15px;\
			background-image:url(https://i.imgur.com/g8NkPge.png);\
		}\
		.icon-chat-bcslogo {\
			height:49px;\
			width:49px;\
			background-image:url(https://i.imgur.com/x1DEgOD.png);\
		}\
		.betabot-update {\
			position:relative;\
			clear:left;\
			min-height:46px px;\
			width:100px %;\
			word-wrap:break 0;\
		}\
		#room-bar{\
			width:340px;\
		}\
		#xwootlist, #xmehlist, #xcurrentdj{\
			margin-left:5px;\
		}\
		#xwootlist{\
			background-color: rgba(146, 172, 58, 0.05);\
		}\
		#xmehlist{\
			 background-color: rgba(196, 46, 59, 0.1);\
		}\
		#xcurrentdj{\
			margin-bottom:10px;\
		}\
		#user-lists .list.room .user .icon-meh {\
			top: -1px;\
			right: 9px;\
			left: auto;\
		}\
		#iwannalookcool{\
			background-image:url(https://i.imgur.com/x1DEgOD.png);\
			position:absolute;\
			background-size: contain;\
			color:#b6f6ff;\
			font-size: 11px;\
			font-family: ' + opensansfnt + ', sans-serif;\
			top: 6%;\
			left: 88%;\
			width:30px;\
			height:30px;\
			display:none;\
		}\
		#footer-user .buttons .button {\
			top: -100%;\
			left: 65px;\
			background: #282C35;\
			display: none;\
			text-align: left;\
		}\
		#footer-user .buttons .inventory {\
			top: 0%;\
			left: 0%;\
			background: #282C35;\
			display: block;\
			cursor: default;\
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
			display: block;\
			left: 19%;\
			width: 300px;\
			background: #282C35;\
			display: block;\
		}\
		#footer-user {\
			cursor: pointer;\
		}\
		#footer-user .back {\
			width: 19%;\
		}\
		#footer-user .info .points {\
			right: 25px;\
		}\
		.nothing {\
			height: 16px;\
		}\
		#chat .delete-button{\
			padding: 3px;\
			height: 15px;\
			width: 32px;\
		}\
	</style>';

$("#room").append(menu);
$("#room-meta").prepend(button);
$("body").prepend(style);
$("#search-input-field").attr({"maxlength":256});
$(".emoji-trollface").replaceWith("<span style='background: url(https://i.imgur.com/osBR8Jj.png); width: 16px; height: 16px;'></span>");
$("#dialog-container").css({left:"300px",top:"100px",width:"0px",height:"0px"});
$("#chat .spinner").hide();
$("#search-input-field").attr({"maxlength":256});
$("#app-menu .list").append('<div class="item votelist clickable"><i class="icon icon-woot-off"></i><span>Vote List (WIP)</span></div>');
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

$("#footer-user .badge").append("<div class='nothing'></div><span>My Badges</span>");
$("#footer-user .store").append("<div class='nothing'></div><span>Shop</span>");
$("#footer-user .profile").append("<div class='nothing'></div><span>My Profile</span>");
$("#footer-user .settings").append("<div class='nothing'></div><span>Settings</span>");

function hideFooter(){
	if ($("#footer-user .badge").css('display') == "block"){
		$("#footer-user .badge").hide();
		$("#footer-user .store").hide();
		$("#footer-user .profile").hide();
		$("#footer-user .settings").hide();
		$("#footer-user .info").css({"background":"#282C35"});
	}
}

$("#footer-user .button").hover(function(){$("#tooltip").remove();});
$("#footer-user .button").on('click',hideFooter);

$("#app").on('click', function(e) {
	if (!$(e.target).closest("#footer-user .info").length){
		hideFooter();
	}
});

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
	$("#footer-user .info .name .icon").css({"-webkit-transform":"rotate(180deg)","transform":"rotate(180deg)"});
}

$("#footer-user .info").on('click',toggleFooter);

function transformBack(){$("#footer-user .back span").text("Back");}
$("#footer-user").on('click',transformBack);
$("#playlist-meta .shop-button").on('click',transformBack);
$("#room-bar").on('click',transformBack);
$("#room .app-right .has-requests .header").on('click',transformBack);
$("#app-menu").on('click',transformBack);

var autowoot = false;
var joinmsg = false;
var grabmsg = false;
var mehmsg = false;
var songup = false;
var lockPuff = false;
var autolock = false;
var cap = false;
var autograb = false;
var dapreview = false;
var pufflock = false;
var afkmsg = false;
var timeskip = false;
var inlineOn = false;
var bigchat = false;
var cutevotes = false;
var lockdown = false;
var spamon = false;
var hasArrow = false;
var listlock = false;
var retroChat = false;

function safetyFirst(){
	if (API.getUsers().length > 250){
		bcs.addChat("<b>This is a big room; Setting cap to 1. You'll probably still lag though. Sorry. My script sucks.</b><br>Also, sorry, but expect bugs / lagspikes c:","#FF3333");
		bcs.c('/cap 1');
	}else{
		bcs.c('/cap 10');
	}
}
safetyFirst();

var hasPerms = false;
if (API.getUser().gRole != 0 || API.getUser().role != 0){
	hasPerms = true;
}
if (!hasPerms){$("#xmod").hide();}
var notifyAFK = 0;
var mentioned = [];
var chatShows = true;
var autoskip = false;
var custombg = true;
bcs.defaultbg = $("#room .room-background").css('background');
function favoritism(){
	if (window.location.href == "https://plug.dj/mineheroes" && custombg){
		$("#room .room-background").css({"background":"url(https://i.imgur.com/DKGLFWE.png) no-repeat"});
	}else if(!custombg){
		$("#room .room-background").css({"background":bcs.defaultbg});
	}
}

$("#chat-input .chat-input-form").append("\
	<div class='afkIsOn' style='width:7px; height:30px; display:none; background-color:#fef8a0'>\
		<span class='afknotifications'>" + notifyAFK + "</span>\
	</div>");

$(".afknotifications").hover(function() {
	$("body").append('<div id="tooltip" style="top:84%;left:87.5%;" class="right"><span>Mentions while you were out</span><div class="corner"></div></div>')
}, function() {
	$("#tooltip").remove();
});

if (notifyAFK == 0){
	$("#chat-input .afknotifications").hide();
}else if (notifyAFK > 0){
	$("#chat-input .afknotifications").show();
}

function attemptappend(){
	if ($("#iwannalookcool").text() == ""){
		$("#user-rollover .meta").append('<div id="iwannalookcool"> </div>');
		setTimeout(function(){attemptappend();},250);
	}else if ($("#iwannalookcool").text() == " "){
		console.log('Appended.');
	}
}
attemptappend();

function displayid(){
	var e = $("#user-rollover .username").text();
	var t;
	var n = API.getUsers();
	for (var i = 0; i < n.length; i++) {
		if (n[i].username == e) {
			t = n[i].id
		}
	}
	var a = "Open Sans";
	if ($("#id_display").text() == ""){
		$('#user-rollover .meta .joined').css({top:"64px"});
		$("#user-rollover .info").append('<div id="id_display" style="position:absolute; top:-21px; left:108px; color:#808691; font-size: 11px; font-family: ' + a + ', sans-serif;">ID: ' + t + "</div>");
	}else{
		if (typeof t == "undefined"){
			t = "-------";
			$("#id_display").hide();
		}else{
			$("#id_display").text("ID: " + t);
			$("#id_display").show();
		}
	}
	$("#iwannalookcool").css({"background-image":"url(https://i.imgur.com/x1DEgOD.png)","top":"6%","left":"88%","width":"30px","height":"30px"});
	$('#user-rollover .thumb').show();
	$('#id_display').show();
	if (e == "Beta Tester" || e == "T98" || e == "CatSnore"){
		$("#iwannalookcool").show();
		$('#user-rollover .meta').css({'background':'right linear-gradient(#1b1e24 10%, #111317 85%)'});
		$('#user-rollover .background').css({'background':'rgba(0, 190, 232, 0.14)'});
		$("#user-rollover .username").css({color:'rgb(0, 190, 232)'});
		$("#user-rollover .info").css({background:'#111317'});
		if ($("#user-rollover .info .role span").text() == "Brand Ambassador"){
			$("#user-rollover .info .role span").text("Bad Admin");
			$("#user-rollover .info .role .icon").css({"-webkit-transform":"rotate(180deg)","transform":"rotate(180deg)"});
			$("#user-rollover .info .badge-box .bdg").css({"-webkit-transform":"rotate(180deg)","transform":"rotate(180deg)"});
		}
		if (bcs.user.username == "Beta Tester"){$("#user-rollover").toggleClass("can-staff");}
	}else if (e == "Kwiztech" || e == "DCV" || e == "Wumbology" || e == "Newcool"  || e == "Mix_God"){
		$("#iwannalookcool").show();
		$('#user-rollover .meta').css({'background':'linear-gradient(rgb(40, 44, 53) 10%, rgb(28, 31, 37) 85%) 100% 50%'});
		$('#user-rollover .background').css({'background':'rgba(0, 190, 232, 0.14)'});
		$("#user-rollover .username").css({color:'rgb(84, 249, 236)'});
		$("#user-rollover .info").css({background:'#1c1f25'});
		$("#user-rollover .info .role .icon").css({"-webkit-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		$("#user-rollover .info .badge-box .bdg").css({"-webkit-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		if (bcs.user.username == "Beta Tester"){$("#user-rollover").removeClass('can-ignore');};
	}else if(e == "B‌2"){
		$("#iwannalookcool").css({"background-image":"url(https://i.imgur.com/w3cXqFU.png)"});
		$("#iwannalookcool").show();
		$('#user-rollover .meta').css({'background':'#000'});
		$("#user-rollover .info").css({background:'#111317'});
		$("#user-rollover .info .role .icon").css({"-webkit-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		$("#user-rollover .info .badge-box .bdg").css({"-webkit-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		if (bcs.user.username == "Beta Tester"){$("#user-rollover").removeClass('can-ignore');};
	}else if(e == "Legend"){
		$("#iwannalookcool").css({"background-image":"url(https://i.imgur.com/15HnmWz.png)","width":"300px","height":"103px","left":"0px","top":"0px"});
		$("#iwannalookcool").show();
		$('#user-rollover .meta').css({'background':'#000'});
		$("#user-rollover .info").css({background:'#111317'});
		$("#user-rollover .info .role .icon").css({"-webkit-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		$("#user-rollover .info .badge-box .bdg").css({"-webkit-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		$('#user-rollover .thumb').hide();
		$('#id_display').hide();
		if (bcs.user.username == "Beta Tester"){$("#user-rollover").removeClass('can-ignore');};
	}else{
		$("#iwannalookcool").hide();
		$('#user-rollover .meta').css({'background':'#282C35'});
		$('#user-rollover .background').css({'background':'#282c35'});
		$("#user-rollover .username").css({color:'#eee'});
		$("#user-rollover .info").css({background:'#1c1f25'});
		$("#user-rollover .info .role .icon").css({"-webkit-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		$("#user-rollover .info .badge-box .bdg").css({"-webkit-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		if (bcs.user.username == "Beta Tester"){$("#user-rollover").removeClass('can-ignore');};
	}
}

$("#video-only-dj").mousemove(displayid);
$("#video-only-dj").click(displayid);
$("#chat-messages").click(displayid);
$("#user-lists").click(displayid);
$("#dj-canvas").mousemove(displayid);
$("#audience-canvas").mousemove(displayid);
$("#footer-user").on('click',function(){if(bcs.itsMe){$("#footer-user .pp .value").text("100");}});

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
displayLvl();
$("#footer-user .bar").mouseenter(function(){
	$("#footer-user .percentage").hide();
	$("#footer-user .bar .value").show();
});
$("#footer-user .bar").mouseleave(function(){
	$("#footer-user .percentage").show();
	$("#footer-user .bar .value").hide();
});

$("#app-menu .list .votelist").mouseenter(function(){
	$("#app-menu .list .votelist .icon").attr('class','icon icon-woot-disabled');
});
$("#app-menu .list .votelist").mouseleave(function(){
	$("#app-menu .list .votelist .icon").attr('class','icon icon-woot-off');
});
var voteslist = [];
var thevotelist = '\
<div id="xvotelist" style="\
	position: absolute;\
	top: 55px;\
	height: 65%;\
	left: 64%;\
	width: 235px;\
	display: none;\
	background-color: #111317;\
	outline: #000000 solid 1px;\
	overflow-x: hidden;\
	overflow-y: auto;\
	z-index: 98001;">\
	<div id="xlistrefresh" style="\
		position: absolute;\
		height: 45px;\
		width: 33%;\
		background-color: #0A0A0A;\
		outline: #1C1F25 solid 1px;\
		cursor: pointer;">\
			<i class="icon icon-refresh-video" style="margin-left:30%;margin-top:7%;"></i>\
	</div>\
	<div id="xlistback" style="\
		position: absolute;\
		height: 45px;\
		width: 33%;\
		left: 33%;\
		background-color: #0A0A0A;\
		outline: #1C1F25 solid 1px;\
		cursor: pointer;">\
			<i class="icon icon-arrow-up" style="margin-left:30%;margin-top:7%;"></i>\
	</div>\
	<div id="xlistclose" style="\
		position: absolute;\
		height: 45px;\
		width: 33%;\
		left: 66%;\
		background-color: #0A0A0A;\
		outline: #1C1F25 solid 1px;\
		cursor: pointer;">\
			<i class="icon icon-arrow-right" style="margin-left:26%;margin-top:7%;"></i>\
			<i class="icon icon-arrow-left" style="margin-left:36%;margin-top:7%;"></i>\
	</div>\
	<div id="xlist" style="position: absolute;top: 45px; margin-top: 5px;">\
		<div id="xcurrentdj"></div>\
		<div id="xmehlist"></div>\
		<div id="xwootlist"></div>\
	</div>\
</div>';
$("#xvotelist").css({left:$("#room").width() - $("#chat").width() - $("#xvotelist").width() + "px"});
$("#room").append(thevotelist);
var voteIsOn = false;

function foldList(){
	$("#xvotelist .user").remove();
	voteslist = [];
	$("#xvotelist").fadeOut();
}
function unfoldList(){
	$("#xvotelist").fadeIn();
	$("#xvotelist").draggable({ containment: "#app", scroll: false });
	$("#xvotelist").css({"z-index":"98001"});
	updateList();
}

$("#xlistclose").on('click',function(){
	voteIsOn = !voteIsOn;
	if (voteIsOn){unfoldList();}
	else{foldList();}
});

$("#xlistback").on('click',function(){
	if ($("#xvotelist").css('z-index') == "98001"){
		$("#xvotelist").css({'z-index':"17"});
		$("#xlistback .icon").attr("class","icon icon-arrow-down");
	}else if ($("#xvotelist").css('z-index') == "17"){
		$("#xvotelist").css({'z-index':"98001"});
		$("#xlistback .icon").attr("class","icon icon-arrow-up");
	}
});

$("#xlistrefresh").on('click',function(){updateList();});

$("#app-menu .list .votelist").on('click',function(){
	voteIsOn = !voteIsOn;
	if (voteIsOn){unfoldList();}
	else{foldList();}
});

function appendPerson(name,id,role,grole,vote,grab){
	switch (role){
		case 0:var thisrole = "";break;
		case 1:var thisrole = "<i class='icon icon-chat-dj' style='margin-top:2px;'></i>";break;
		case 2:var thisrole = "<i class='icon icon-chat-bouncer' style='margin-top:2px;'></i>";break;
		case 3:var thisrole = "<i class='icon icon-chat-manager' style='margin-top:2px;'></i>";break;
		case 4:case 5:var thisrole = "<i class='icon icon-chat-host' style='margin-top:2px;'></i>";break;
	}
	var namecolor = "#ac76ff";
	if (role == 0){namecolor = "#eee"};
	switch (grole){
		case 0:break;
		case 3:var thisrole = "<i class='icon icon-chat-ambassador' style='margin-top:2px;'></i>";break;
		case 5:var thisrole = "<i class='icon icon-chat-admin' style='margin-top:2px;'></i>";break;
	}
	if (grole == 3){namecolor = "#89be6c"}else if(grole == 5){namecolor = "#42a5dc"};
	if (namecolor == "#eee"){var indent = "4px";}else{var indent = "19px";};
	var wlpos = "";
	if (API.getWaitListPosition(id) != -1){
		wlpos = API.getWaitListPosition(id) + 1;
		wlpos = " | Waitlist: " + wlpos;
	}
	var thislevel = API.getUser(id).level;
	if (vote == 1){
		if (!grab){
			$("#xwootlist").append('\
			<div class="user" style="margin-bottom:8px;"> \
				<i class="icon icon-support-white" idt="' + id + '" title="Info about the user" style="margin-left:83%;margin-top:-1%;cursor:pointer;"></i>\
				' + thisrole + '\
				<span class="name" title="Mention in chat" style="margin-left:' + indent + '; color:' + namecolor + '; cursor: pointer; font-size:14px;">' + name + '</span>\
				<br>\
				<i class="icon icon-woot" style="margin-top:-5px;margin-left:-8px;"></i>\
				<span class="details" style="color:#ccc;font-size:10px;margin-left:36px;">ID: ' + id + ' | Level: ' + thislevel + wlpos + '</span>\
			</div>\
			<div class="xlistbreak" style="box-shadow: inset 0 1px 0 0 #555d70;height: 1px;"></div>');
		}else if (grab){
			$("#xwootlist").append('\
			<div class="user" style="margin-bottom:8px;">\
				<i class="icon icon-support-white" idt="' + id + '" title="Info about the user" style="margin-left:83%;margin-top:-1%;cursor:pointer;"></i>\
				' + thisrole + '\
				<span class="name" title="Mention in chat" style="margin-left:' + indent + '; color:' + namecolor + '; cursor: pointer; font-size:14px;">' + name + '</span>\
				<br>\
				<i class="icon icon-grab" style="margin-top:-5px;margin-left:11px;"></i>\
				<i class="icon icon-woot" style="margin-top:-5px;margin-left:-8px;"></i>\
				<span class="details" style="color:#ccc;font-size:10px;margin-left:36px;">ID: ' + id + ' | Level: ' + thislevel + wlpos + '</span>\
			</div>\
			<div class="xlistbreak" style="box-shadow: inset 0 1px 0 0 #555d70;height: 1px;"></div>');
		}
	}else if (vote == -1){
		if (!grab){
			$("#xmehlist").append('\
			<div class="user" style="margin-bottom:8px;">\
				<i class="icon icon-support-white" idt="' + id + '" title="Info about the user" style="margin-left:83%;margin-top:-1%;cursor:pointer;"></i>\
				' + thisrole + '\
				<span class="name" title="Mention in chat" style="margin-left:' + indent + '; color:' + namecolor + '; cursor: pointer; font-size:14px;">' + name + '</span>\
				<br>\
				<i class="icon icon-meh" style="margin-top:-5px;margin-left:-8px;"></i>\
				<span class="details" style="color:#ccc;font-size:10px;margin-left:36px;">ID: ' + id + ' | Level: ' + thislevel + wlpos + '</span>\
			</div>\
			<div class="xlistbreak" style="box-shadow: inset 0 1px 0 0 #555d70;height: 1px;"></div>');
		}else if (grab){
			$("#xmehlist").append('\
			<div class="user" style="margin-bottom:8px;">\
				<i class="icon icon-support-white" idt="' + id + '" title="Info about the user" style="margin-left:83%;margin-top:-1%;cursor:pointer;"></i>\
				' + thisrole + '\
				<span class="name" title="Mention in chat" style="margin-left:' + indent + '; color:' + namecolor + '; cursor: pointer; font-size:14px;">' + name + '</span>\
				<br>\
				<i class="icon icon-grab" style="margin-top:-5px;margin-left:11px;"></i>\
				<i class="icon icon-meh" style="margin-top:-5px;margin-left:-8px;"></i>\
				<span class="details" style="color:#ccc;font-size:10px;margin-left:36px;">ID: ' + id + ' | Level: ' + thislevel + wlpos + '</span>\
			</div>\
			<div class="xlistbreak" style="box-shadow: inset 0 1px 0 0 #555d70;height: 1px;"></div>');
		}
	}
}

$("#xlist .user .icon-support-white").hover(function() {
	$("body").append('<div id="tooltip" style="top:84%;left:87.5%;" class="right"><span>Mentions while you were out</span><div class="corner"></div></div>')
}, function() {
	$("#tooltip").remove();
});

function updateList(){
	$("#xcurrentdj .user").remove();
	$("#xcurrentdj .xlistbreak").remove();
	//if (voteIsOn){$("#xvotelist").animate({left:$("#room").width() - $("#chat").width() - $("#xvotelist").width() + "px"});};
	$("#xvotelist .user").remove();
	$("#xvotelist .xlistbreak").remove();
	voteslist = [];
	for (var i = 0; i < API.getUsers().length; i++){
		var thisguy = API.getUsers()[i];
		if (thisguy.vote != 0){
			var a = {name:thisguy.username, id:thisguy.id, role:thisguy.role, grole:thisguy.gRole, vote:thisguy.vote, grab:thisguy.grab};
			voteslist.push(a);
		}
	}
	for (var i = 0; i < voteslist.length; i++){
		appendPerson(voteslist[i].name, voteslist[i].id, voteslist[i].role, voteslist[i].grole, voteslist[i].vote, voteslist[i].grab);
	}
	if (typeof API.getDJ() != "undefined"){
		var currentdj = API.getUser(API.getDJ().id);
		switch (currentdj.role){
			case 0:var thisrole = "";break;
			case 1:var thisrole = "<i class='icon icon-chat-dj' style='margin-top:3px;'></i>";break;
			case 2:var thisrole = "<i class='icon icon-chat-bouncer' style='margin-top:3px;'></i>";break;
			case 3:var thisrole = "<i class='icon icon-chat-manager' style='margin-top:3px;'></i>";break;
			case 4:case 5:var thisrole = "<i class='icon icon-chat-host' style='margin-top:3px;'></i>";break;
		}
		switch (currentdj.gRole){
			case 0:break;
			case 3:var thisrole = "<i class='icon icon-chat-ambassador' style='margin-top:3px;'></i>";break;
			case 5:var thisrole = "<i class='icon icon-chat-admin' style='margin-top:3px;'></i>";break;
		}
		var namecolor = "#ac76ff";
		if (currentdj.role == 0){namecolor = "#eee"};
		if (currentdj.gRole == 3){namecolor = "#89be6c"}else if(currentdj.gRole == 5){namecolor = "#42a5dc"};
		if (namecolor == "#eee"){var indent = "4px";}else{var indent = "19px";};
		$("#xcurrentdj").append('\
		<div class="user" style="margin-bottom:10px;">\
			<i class="icon icon-support-white" idt="' + currentdj.id + '" title="Info about the user" style="margin-left:83%;margin-top:-1%;cursor:pointer;"></i>\
			' + thisrole + '\
			<span class="name" title="Mention in chat" style="margin-left:' + indent + '; color:' + namecolor + '; cursor:pointer; font-size:14px;">' + currentdj.username + '</span>\
			<br>\
			<i class="icon icon-join-booth" style="margin-top:-2px;margin-left:2px;"></i>\
			<span class="details" style="color:#ccc;font-size:10px;margin-left:36px;">ID: ' + currentdj.id + ' | Level: ' + currentdj.level + ' | <b>(Current DJ)</b></span>\
		</div>\
		<div class="xlistbreak" style="box-shadow: inset 0 5px 0 0 #555d70;height: 3px;"></div>');
	}
	for (var i = 0; i < voteslist.length + 1; i++){
		$($("#xlist .user .name")[i]).on('click',function(){
			$('#chat-input-field').val($('#chat-input-field').val() + "@" + $(this).text() + " ").focus();
		});
		$($("#xlist .user .icon-support-white")[i]).on('click',function(){
			var itsYou = false;
			var theirid = $(this).attr('idt');
			if (theirid == API.getUser().id){itsYou = true;}
			lookfor(theirid,itsYou);
		});
	}
}

function grabStuff(obj){
	if (!listlock){
		updateList();
		listlock = true;
		if (API.getUsers().length >= 100){
			setTimeout(function(){listlock = false;},10000);
		}else{
			setTimeout(function(){listlock = false;},5000);
		}
	}
	var media = API.getMedia();
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h < 10){h = "0" + h;}
	if (m < 10){m = "0" + m;}
	if (s < 10){s = "0" + s;}
	if (grabmsg){bcs.addChat("<i class='icon icon-grab' style='left:5px;'></i> " + obj.user.username + " (ID " + obj.user.id + ") grabbed <br><a style='color:#dddddd;font-size:11px;'>[" + h + ":" + m + ":" + s + "]</a>","#c5e0ff");};
}

var readdcount = 0;
function readd(id){
	API.once(API.ADVANCE, function() {
		API.moderateAddDJ(id);
		setTimeout(function(){
			if (readdcount <= 5){
			if (API.getWaitListPosition(id) != -1){
				API.moderateMoveDJ(id, 1);
			}else{
				API.moderateAddDJ(id);
				readd(id);
				readdcount++;
			}
			}else{
				bcs.l("Attempted to readd user " + API.getUser(id).username + "(ID " + id + ") 5 times. Giving up now.");
			}
		},1000);
	});
	API.moderateForceSkip();
};

var coollock = false;

if (localStorage.getItem('leMessage')){
	themessage = localStorage.getItem('leMessage');
}else{
	themessage = "I'm away from keyboard.";
}

function afkUpdate(){
	var whatchawrote = document.getElementById("xafkenter").value;
	localStorage.setItem('leMessage',whatchawrote);
	themessage = whatchawrote;
	bcs.addChat("AFK message set to <b>" + themessage + "</b>","#CCCCCC");
}

function chatHTML(data) {
	if (data.hasClass('user-action') && data['0'].innerText.indexOf("a gift") != -1) {
		//tada.play();
	}
}

var chatObs = new MutationObserver(function(divs){chatHTML($(divs[0].addedNodes[0]));});
chatObs.observe(document.querySelector('#chat-messages'),{childList:true});

var spam = ["auehuaehaeuhaeuahuae","hsauhsauhsau","kkkkkkkkkkkkkkk","aaaaaaaaaaaaaaa","eeeeeeeeeeeeee","ajajajajajajaj","ด","░"];
function chatStuff(data){
	var msg = data.message;
	var msgid = data.cid;
	var user = data.un;
	var userid = data.uid;
	if (retroChat){
		bcs.l(' ');
		$(".log").remove();
		$(".badge-box").remove();
		$(".text").remove();
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from").append("<span class='oldmessage' style='margin-left:5px;color:#eee;'>" + msg + "</a></span>");
	}
	var me = API.getUser().username;
	var tst = msg.indexOf('@' + me);
	var ourids = [3951373,4820534];
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h < 10){h = "0" + h;}
	if (m < 10){m = "0" + m;}
	if (s < 10){s = "0" + s;}
	var argument = "[" + h + ":" + m + ":" + s + "] [" + msgid + "] [" + userid + "] [" + user + "]		- " + msg;
	if (userid != "undefined" && me == "Beta Tester"){
		var zz = msg.toLowerCase().indexOf("beta");
		if (zz != -1){
			blunq.play();
		}
		if (tst != -1){
			if (!coollock && afkmsg){
				bcs.c('[AFK] @' + user + ' "Beta is busy right now", says Beta, explaining the situation');
				coollock = true;
				setTimeout(function(){coollock = false},60000);
			}
			if (afkmsg){
				notifyAFK++;
				mentioned.push("[" + h + ":" + m + ":" + s + "] " + user + " - " + msg);
				$("#chat-input .afknotifications").text(notifyAFK);
			}
		}
	}else if (userid != "undefined" && tst != -1){
		if (!coollock && afkmsg){
			bcs.c("[AFK] @" + user + " - " + themessage);
			coollock = true;
			setTimeout(function(){coollock = false},60000);
		}
		if (afkmsg){
			notifyAFK++;
			mentioned.push("[" + h + ":" + m + ":" + s + "] " + user + " - " + msg);
			$("#chat-input .afknotifications").text(notifyAFK);
		}
	}
	if (afkmsg){
		if (notifyAFK == 0){
			$("#chat-input .afknotifications").hide();
		}else{
			$("#chat-input .afknotifications").show();
		}
	}
	if (!retroChat){
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from").append("\
		<span class='info' style='font-size:7px; color:#808691; opacity:0.1;'> Lv. <a style='font-size:9px; color:#eee'>" + API.getUser(userid).level + "</a></span>\
		<span class='info' style='font-size:7px; color:#808691; opacity:0.1;'> ID: <a style='font-size:9px; color:#eee'>" + userid + "</a></span>");
		$("#chat-messages > .cm[data-cid='" + msgid + "']").hover(function(){
			$("#chat-messages > .cm[data-cid='" + msgid + "'] .from .info").css({"opacity":"1"});
		}, function(){
			$("#chat-messages > .cm[data-cid='" + msgid + "'] .from .info").css({"opacity":"0.2"});
		});
	}
	var fulluser;
	for (var i = 0; i < API.getUsers().length; i++){
		if (API.getUsers()[i].username == user){
			fulluser = API.getUsers()[i];
			break;
		}
	}

	if (lockdown){
		if (fulluser && fulluser.role == 0 && fulluser.gRole == 0){
			$.ajax({type: 'DELETE',url: '/_/chat/' + msgid});
		}
	}
	if (fulluser && fulluser.role == 5){
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from .icon-chat-host").hide();
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from").prepend("<i class='icon icon-chat-thehost'></i>");
	}

	if(user == "Beta Tester" || user == "CatSnore" || user == "T98" || user == "DCV" || user == "Wumbology" || user == "Kwiztech" || user == "Newcool"  || user == "Legend" || user == "Mix_God"){
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from .icon").css({"-webkit-transform":"rotate(180deg)","transform":"rotate(180deg)"});
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .badge-box .bdg").css({"-webkit-transform":"rotate(180deg)","transform":"rotate(180deg)"});
	}

	if (chatIcons){
	if (user == "EDMC"){
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from .icon").hide();
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from").prepend("<i class='icon icon-chat-baS'></i>");
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .un").css({color:'#0097cd'});
	}else if (user == "Roms Kidd"){
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from .icon").hide();
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from").prepend("<i class='icon icon-chat-baS'></i>");
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .un").text('');
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .un").append('\
			<a style="color:#d40000">R</a>\
			<a style="color:#d49b00">o</a>\
			<a style="color:#78d400">m</a>\
			<a style="color:#00d437">s</a>\
			<a style="color:#000000"> </a>\
			<a style="color:#00a5d4">K</a>\
			<a style="color:#0f00d4">i</a>\
			<a style="color:#d100d4">d</a>\
			<a style="color:#d40064">d</a>');
	}else if (user == "Zuchku"){
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from .icon").hide();
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from").prepend("<i class='icon icon-chat-baS'></i>");
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .un").text('');
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .un").append('\
			<a style="color:#d40000">Z</a>\
			<a style="color:#d49b00">u</a>\
			<a style="color:#78d400">c</a>\
			<a style="color:#00d437">h</a>\
			<a style="color:#00a5d4">k</a>\
			<a style="color:#0f00d4">u</a>');
	}else if (user == "81supernova"){
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from .icon").hide();
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from").prepend("<i class='icon icon-chat-baS'></i>");
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .un").text('');
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .un").append('\
			<a style="color:#d40000">8</a>\
			<a style="color:#d49b00">1</a>\
			<a style="color:#78d400">s</a>\
			<a style="color:#00d437">u</a>\
			<a style="color:#00a5d4">p</a>\
			<a style="color:#0f00d4">e</a>\
			<a style="color:#d100d4">r</a>\
			<a style="color:#d4003c">n</a>\
			<a style="color:#d40000">o</a>\
			<a style="color:#d49b00">v</a>\
			<a style="color:#78d400">a</a>');
	}
	}

		//Bootleg Inline Images//
	if (inlineOn){
		var pn = ['.png','.gif','.jpg','.jpeg','.gifv'];
		var linked = $($(".cid-" + msgid + " a")[$("#chat-messages .cid-" + msgid + " a").length - 1]).text();
		var isItTheSame = msg.indexOf(linked);
		for (var i = 0; i < pn.length; i++){
			var isItAPic = linked.indexOf(pn[i]);
			if (linked != "" && isItTheSame != -1 && isItAPic != -1){
				if (linked.indexOf('gifv') != -1){linked = linked.replace('gifv','gif');}
				var hts = $($("#chat-messages .cid-" + msgid + " a")[$("#chat-messages .cid-" + msgid + " a").length - 1]).text();
				hts = hts.replace("http","https");
				if (hts.indexOf("httpss") != -1){hts = hts.replace("httpss","https");}
				$($("#chat-messages .cid-" + msgid + " a")[$("#chat-messages .cid-" + msgid + " a").length - 1]).append("<br><img style='margin:5px; max-width:300px; margin-left: -28px;' src='" + hts + "'></img>");
				setTimeout(function(){bcs.scrollChat()},2000);
				setTimeout(function(){
				if ($("#chat-messages .cid-" + msgid + " img").width() == 18 && $("#chat-messages .cid-" + msgid + " img").height() == 20){
					$("#chat-messages .cid-" + msgid + " img").remove();
				}},6000);
				break;
			}
		}
	}
	if (!bcs.itsMe){
		for (var i = 0; i < ourids.length; i++){
			if (userid == ourids[i]){
				if (msg == "---override"){bcs.stopItAll();}
			};
		}
		if(msg == "---break"){$("body").css({"transform":"rotate(3deg)","background-image":"url(https://i.imgur.com/yt6Z0EK.jpg)"});}
		else if(msg == "---fix"){$("body").css({"transform":"rotate(0deg)","background-image":"url(https://i.imgur.com/qOy1afT.png)"});}
	}
	if (typeof user != "undefined"){
		logcheck.push(argument);
		messages.push(msgid.toString());
	};
	if (spamon){
		for (var i = 0; i < spam.length; i++){
			if (msg.toLowerCase().indexOf(spam[i]) != -1){
				$.ajax({
					type: 'DELETE',
					url: '/_/chat/' + msgid
				});
			}
		}
	}
	if (userid == API.getUser().id){
		logged.unshift(msgid);
		console.log(msgid);
	};
	if (pufflock){
		if (user == "THe Puff" || user == "Epiphainein"){
			var puff = msg.toLowerCase().split(" ");
			var tag = ["beta","beta tester","@beta tester","all","people","everyone","ppl","peeps","guys","guise","bros"];
			switch (puff[0]){

				case "hi":case "hello":case "greetings":case "salutations":
				case "howdy":case "ciao":case "salut":case "hai":case "hey":
				case "hay":case "ohai":case "ohaio":case "ohay":case "ohei":
				case "oheio":case "ohey":case "haider":case "oy":case "ohoy":
				case "hola":case "holla":case "hyao": case "hoy":

					for (var i = 0;i < tag.length; i++){
						if (!lockPuff){
							if (typeof puff[1] != "undefined" && puff[1] == tag[i]
							|| typeof puff[1] == "undefined"){
								//bcs.addChat("Like wtf how'd you get Steven to say hi","#AA3333");
								if (user == "THe Puff"){
									bcs.c("Heya shmoobey butt! - Credits to 'THe Puff' for suggesting a sentence. (C) 2014 All Rights Reserved | Protected by Creative Commons 4.0");
									lockPuff = true;
									setTimeout(function(){lockPuff = false;},3000);
								}else if (user == "Epiphainein"){
									bcs.c("Hey Pippy!");
									lockPuff = true;
									setTimeout(function(){lockPuff = false;},3000);
								}
							}
						}
					}
					break;
			}
		};
	}
}

function voteStuff(obj){
	if (!listlock){
		updateList();
		listlock = true;
		if (API.getUsers().length >= 100){
			setTimeout(function(){listlock = false;},10000);
		}else{
			setTimeout(function(){listlock = false;},5000);
		}
	}
	if (obj.vote == -1){
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		if (h < 10){h = "0" + h;}
		if (m < 10){m = "0" + m;}
		if (s < 10){s = "0" + s;}
		if (mehmsg){bcs.addChat("<i class='icon icon-meh' style='left:5px;'></i> " + obj.user.username + " (ID " + obj.user.id + ") meh'ed this <br><a style='color:#dddddd;font-size:11px;'>[" + h + ":" + m + ":" + s + "]</a>","#ff8585");};
	}
}

function advanceStuff(obj){
	updateList();
	var thissong = API.getMedia();
	if (!listlock){
		listlock = true;
		if (API.getUsers().length >= 100){
			setTimeout(function(){listlock = false;},20000);
		}else{
			setTimeout(function(){listlock = false;},5000);
		}
	}
	bcs.hasp3();
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h < 10){h = "0" + h;}
	if (m < 10){m = "0" + m;}
	if (s < 10){s = "0" + s;}
	displayLvl();
	if (autograb){grab();}
	if (autowoot){setTimeout(bcs.getHistoryID,1000);}

	if (autoskip && hasPerms){
		clearTimeout(songtick);
		var songsover = thissong.duration;
		var songtick = setTimeout(function() {API.moderateForceSkip()}, songsover * 1000 + 20000);
	}
	if (autolock){
		var dj = API.getDJ();
		if (API.getWaitListPosition() <= -1 && dj.username != API.getUser().username){
			bcs.joinWL();
			setTimeout(function(){
				if (API.getWaitListPosition() <= -1 && dj.username != bcs.user.username){bcs.joinWL();}
			},100);
			setTimeout(function(){
				if (API.getWaitListPosition() <= -1 && dj.username != bcs.user.username){bcs.joinWL();}
			},250);
		}
	}
	if (songup){
		bcs.l(" ");
		$(".log").remove();
		bcs.addChat("<br><img src='https://i.imgur.com/fhagHZg.png'></img><br>\
			<b><a style='color:#90ad2f;'>" + obj.lastPlay.score.positive + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color:#aa74ff;'>" + obj.lastPlay.score.grabs + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color:#c42e3b;'>" + obj.lastPlay.score.negative + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color:#646b7e;'>" + API.getUsers().length + "</a></b>","#ececec",true);
	}
	setTimeout(function(){
	for (var i = 0; i< API.getHistory().length; i++){
		if (API.getHistory()[i].media.cid == thissong.cid){
			var previous = API.getHistory()[i];
			var pos = i + 1;
			var stats = previous.user.username + " (ID " + previous.user.id + ")";
			console.log("Song in History | Played by " + stats + " - (History position " + pos + ")<br>[" + previous.media.title + "]");
			//blunq.play(); |Disabled due to bugs|
			bcs.addChat("<b><a style='color:#ff3535;'>Song in History</a></b><br>Played by " + stats + " - (History position " + pos + ")<br>[" + previous.media.title + "]","#D04545",true);
			break;
		}
	}
	},250);

	var thistime = thissong.duration;
	var thehours = "";
	var theminutes = Math.floor(thistime / 60);
	if (theminutes >= 60){
		thehours = Math.floor(theminutes / 60);
		theminutes = theminutes % 60;
	};
	if (thehours != ""){thehours = thehours + ":";};
	var theseconds = thistime % 60;
	if (theseconds < 10){theseconds = "0" + theseconds;}
	if (theminutes < 10){theminutes = "0" + theminutes;}
	var actuallength = thehours + theminutes + ":" + theseconds;
	if (timeskip && songup){
		if (hasPerms){
			if (thistime > 480){
				blunq.play();
				bcs.addChat("<b><a style='color:#ff3535;'>Song is over 8 minutes</a></b><br> Song length: " + actuallength,"#D04545",true);
			}
		}
	}
	if (songup){
		bcs.addChat("<a style='color:#e6ff99;'><b>Now playing:</b></a> " + obj.media.title + "<br>\
			<a style='color:#e6ff99;'><b>Author:</b></a> " + obj.media.author + "<br>\
			<a style='color:#e6ff99;'><b>Song length:</b></a> " + actuallength + "<br>\
			<a style='color:#e6ff99;'><b>Current DJ:</b></a> " + obj.dj.username + " (ID " + obj.dj.id + ")<br>","#ececec",true);
	}
	bcs.getFriends();
	//bcs.checkPing();
}

var userslist = [];

function leaveStuff(user){
	updateList();
	if (user.friend){
		var f = "Your friend ";var c = "#c5ffcc";
	}else{
		var f = "";var c = "#7774ff";
	}
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h < 10){h = "0" + h;}
	if (m < 10){m = "0" + m;}
	if (s < 10){s = "0" + s;}
	var userrole = "";
	switch (user.role){case 0:userrole = "";break;case 1:userrole = "<a style='color:#ac76ff;font-size:11px;'><b>RDJ</b></a> (1) |";break;case 2:userrole = "<a style='color:#ac76ff;font-size:11px;'><b>Bouncer</b></a> (2) |";break;case 3:userrole = "<a style='color:#ac76ff;font-size:11px;'><b>Manager</b></a> (3) |";break;case 4:userrole = "<a style='color:#ac76ff;font-size:11px;'><b>CoHost</b></a> (4) |";break;case 5:userrole = "<a style='color:#ac76ff;font-size:11px;'><b>Host</b></a> (5) |";break;}
	var usergrole = "";
	switch (user.gRole){case 0:usergrole = "";break;case 3:usergrole = "<a style='color:#89be6c;font-size:11px;'><b>BA</b></a> (3) |";break;case 5:usergrole = " <a style='color:#42a5dc;font-size:11px;'><b>Admin</b></a> (5) |";break;}
	var thename = user.username.split("<").join("&lt;").split(">").join("&gt;")
	if (joinmsg){bcs.addChat("<a style='color:" + c + ";'>" + f + "<b>" + thename + "</b> left </a><br> <a style='font-size:11px;'><b>ID</b> " + user.id + " |</a> " + userrole + " " + usergrole + " <a style='font-size:11px;'><b>Level</b> " + user.level + " | " + h + ":" + m + ":" + s + "</a>","#ddd",false,false,true,true);};
	if (cap){
		if (user.role != 0){
			var thiscap = API.getStaff().length;
			bcs.c('/cap ' + thiscap);
			bcs.addChat('Cap set to ' + thiscap,"#c5b5ff");
		}
	}
	for (var i = 0; i < userslist.length; i++){
		if (thename == userslist[i].name){
			userslist.splice(i,1);
			break;
		}
	}
};

function joinStuff(user){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h < 10){h = "0" + h;}
	if (m < 10){m = "0" + m;}
	if (s < 10){s = "0" + s;}

	userslist.push({"name":user.username,"id":user.id,"time":"[" + h + ":" + m + ":" + s + "]"});

	if (user.friend){
		var f = "Your friend ";
		var c = "#c5ffcc";
	}else{
		var f = "";
		var c = "#74afff";
	}
	var userrole = "";
	switch (user.role){case 0:userrole = "";break;case 1:userrole = "<a style='color:#ac76ff;font-size:11px;'><b>RDJ</b></a> (1) |";break;case 2:userrole = "<a style='color:#ac76ff;font-size:11px;'><b>Bouncer</b></a> (2) |";break;case 3:userrole = "<a style='color:#ac76ff;font-size:11px;'><b>Manager</b></a> (3) |";break;case 4:userrole = "<a style='color:#ac76ff;font-size:11px;'><b>CoHost</b></a> (4) |";break;case 5:userrole = "<a style='color:#ac76ff;font-size:11px;'><b>Host</b></a> (5) |";break;}
	var usergrole = "";
	switch (user.gRole){case 0:usergrole = "";break;case 3:usergrole = "<a style='color:#89be6c;font-size:11px;'><b>BA</b></a> (3) |";break;case 5:usergrole = "<a style='color:#42a5dc;font-size:11px;'><b>Admin</b></a> (5) |";break;}
	var thename = user.username.split("<").join("&lt;").split(">").join("&gt;")
	if (user.level > 1 && joinmsg){bcs.addChat("<a style='color:" + c + "'> " + f + "<b>" + thename + "</b> joined </a><br> <a style='font-size:11px;'><b>ID</b> " + user.id + " |</a> " + userrole + " " + usergrole + " <a style='font-size:11px;'><b>Level</b> " + user.level + " | " + h + ":" + m + ":" + s + "</a>","#ddd",false, false,true,true);};
	if (user.level == 1 && joinmsg){bcs.addChat("<a style='color:#fef8a0;'> " + f + "<b>" + thename + "</b> joined </a><br> <a style='font-size:11px;'><b>ID</b> " + user.id + " |</a> " + userrole + " " + usergrole + " <a style='font-size:11px;'><b>Level</b> " + user.level + " | " + h + ":" + m + ":" + s + "</a>","#ddd",false,false,true,true);};
	if (cap){
		if (user.role != 0){
			var thiscap = API.getStaff().length;
			bcs.c('/cap ' + thiscap);
			bcs.addChat('Cap set to ' + thiscap + ' (' + thename + ' - ' + user.role + ')',"#c5b5ff");
		}
	}
}

function deleteAll(){
	if (API.getUser().role >= 2 || API.getUser().gRole != 0){
		//$.ajax({type: 'DELETE', url: '/_/chat/1-,.cm'});
		//console.log("Currently using Method 2 of deleting it all. Method one will return when/if Method 2 is broken");
		
		var msgs = document.getElementsByClassName('message');
		var emotes = document.getElementsByClassName('emote');
		var mentions = document.getElementsByClassName('mention');
		for (var i = 0; i < msgs.length; i++) {
			for (var j = 0; j < msgs[i].classList.length; j++) {
				if (msgs[i].classList[j].indexOf('message') == 0) {
					$.ajax({type: 'DELETE', url: '/_/chat/' + msgs[i].getAttribute('data-cid')});
				}
			}
		}

		for (var i = 0; i < emotes.length; i++) {
			for (var j = 0; j < emotes[i].classList.length; j++) {
				if (emotes[i].classList[j].indexOf('emote') == 0) {
					$.ajax({type: 'DELETE', url: '/_/chat/' + emotes[i].getAttribute('data-cid')});
				}
			}
		}
		for (var i = 0; i < mentions.length; i++) {
			for (var j = 0; j < mentions[i].classList.length; j++) {
				if (mentions[i].classList[j].indexOf('mention') == 0) {
					$.ajax({type: 'DELETE', url: '/_/chat/' + mentions[i].getAttribute('data-cid')});
				}
			}
		}
		return bcs.l("[Chat cleared]");
	}else{
		bcs.addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
	}
}

function deleteSelf(){
	bcs.c("/me  ");
	if (API.getUser().role >= 2 && API.getUser().gRole == 0){
		//$.ajax({type: 'DELETE', url: '/_/chat/1-,.cm[data-cid^=' + bcs.user.id + ']'});
		for (var i = 0; i < logged.length; i++){$.ajax({type: 'DELETE', url: '/_/chat/' + logged[i]});}
		for (var i = 0; i < logged.length; i++){$.ajax({type: 'DELETE', url: '/_/chat/' + logged[i]});}
		logged = [];
	}else if (API.getUser().gRole == 3){
		//$.ajax({type: 'DELETE', url: '/_/chat/1-,.cm[data-cid^=' + bcs.user.id + ']'});
		var bamsg = document.getElementsByClassName('ambassador');
		for (var i = 0; i < bamsg.length; i++) {
			for (var j = 0; j < bamsg[i].classList.length; j++) {
				if (bamsg[i].classList[j].indexOf('ambassador') != -1) {
					var cid = $(bamsg[i]).parents(".cm").attr('data-cid');
					$.ajax({type: 'DELETE', url: '/_/chat/' + cid});
				}
			}
		}
		logged = [];
	}else{
		bcs.addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
	}
}

function getuid(uname,oname){
	var toggle = false;
	for (var i = 0; i < API.getUsers().length; i++){
		if (API.getUsers()[i].username.toLowerCase() == uname){
			bcs.addChat("" + API.getUsers()[i].username + "'s ID is " + API.getUsers()[i].id,"#ececec");
			toggle = true;
		}
	}
	if (!toggle){
		bcs.addChat("User " + oname + " doesn't exist / not in the room.","#ececec");
	}
}

function grab(){
	setTimeout(function(){$("#grab").click();}, 2000);
	setTimeout(function(){$($(".grab .menu ul li")[0]).mousedown();}, 2050);
}

function lookfor(id,isityou){
	$.ajax({
		type: 'GET',
		url: 'https://plug.dj/_/users/' + id
	}).done(function(user) {
		data = user.data[0];
	
	if (data.username == null){
		bcs.addChat("<b><a style='color:#eaaeae;'>[User has not updated yet!]</a></b>","#CCCCCC",false,false,true);
	}else{

//BADGE
		switch(data.badge){
			case "bt":			var bb = "Beta Tester (" + data.badge + ")";break;
			case "ss":			var bb = "Plug SuperStar (" + data.badge + ")";break;
			case "og":			var bb = "Original Gangster (" + data.badge + ")";break;
			case "ea":			var bb = "Early Adopter (" + data.badge + ")";break;
			case "ba":			var bb = "Brand Ambassador (" + data.badge + ")";break;
			case "admin":		var bb = "Admin Badge (" + data.badge + ")";break;
			case "plot":		var bb = "Translator Badge (" + data.badge + ")";break;
			case "2015bday":	var bb = "3rd Anniversary Badge (" + data.badge + ")";break;
			case "2014wbb":		var bb = "Winter Badge (" + data.badge + ")";break;
			case "raveset":		var bb = "Rave Badge (" + data.badge + ")";break;
			case "robotset":	var bb = "Robot Badge (" + data.badge + ")";break;
			case "zooset":		var bb = "Zoo Badge (" + data.badge + ")";break;
			case "80sset":		var bb = "80's Badge (" + data.badge + ")";break;
			case "rockset":		var bb = "Rock Badge (" + data.badge + ")";break;
			case "2014hwset":	var bb = "Halloween Badge (" + data.badge + ")";break;
			case "hiphopset":	var bb = "HipHop Badge (" + data.badge + ")";break;
			case "countryset":	var bb = "Country Badge (" + data.badge + ")";break;
			case "dragon01":	var bb = "Dragon Badge (" + data.badge + ")";break;
			case "winter01":	var bb = "Ski Boot (" + data.badge + ")";break;
			case "winter02":	var bb = "Snowman Badge (" + data.badge + ")";break;
			case "winter03":	var bb = "Snowflake Badge (" + data.badge + ")";break;
			case "winter04":	var bb = "Reindeer Badge (" + data.badge + ")";break;
			case "winter05":	var bb = "Penguin Badge (" + data.badge + ")";break;
			case "winter06":	var bb = "Tree Badge (" + data.badge + ")";break;
			case "winter07":	var bb = "Ski Badge (" + data.badge + ")";break;
			case "winter08":	var bb = "Snowboard Badge (" + data.badge + ")";break;
			case "winter09":	var bb = "Ice Skating (" + data.badge + ")";break;
			case "winter10":	var bb = "Hockey Badge (" + data.badge + ")";break;
			case "music01":		var bb = "Record Player (" + data.badge + ")";break;
			case "music02":		var bb = "Musical Keyboard (" + data.badge + ")";break;
			case "music03":		var bb = "Compact Cassette (" + data.badge + ")";break;
			case "music04":		var bb = "Disco Ball (" + data.badge + ")";break;
			case "music05":		var bb = "Glowsticks Badge (" + data.badge + ")";break;
			case "music06":		var bb = "Ferris Wheel (" + data.badge + ")";break;
			case "music07":		var bb = "Baloons Badge (" + data.badge + ")";break;
			case "food01":		var bb = "Pizza Badge (" + data.badge + ")";break;
			case "food02":		var bb = "Ice Cream Badge (" + data.badge + ")";break;
			case "food03":		var bb = "Drink Badge (" + data.badge + ")";break;
			case "food04":		var bb = "Donut Badge (" + data.badge + ")";break;
			case "food05":		var bb = "Sushi Badge (" + data.badge + ")";break;
			case "food06":		var bb = "Hamburguer Badge (" + data.badge + ")";break;
			case "food07":		var bb = "Fries Badge (" + data.badge + ")";break;
			case "food08":		var bb = "Coffee Badge (" + data.badge + ")";break;
			case "animals01":	var bb = "Wolf Badge (" + data.badge + ")";break;
			case "animals02":	var bb = "Cat Badge (" + data.badge + ")";break;
			case "animals03":	var bb = "Chicken Badge (" + data.badge + ")";break;
			case "animals04":	var bb = "Boxer Badge (" + data.badge + ")";break;
			case "style01":		var bb = "Shoe Badge (" + data.badge + ")";break;
			case "style02":		var bb = "Joystick Badge (" + data.badge + ")";break;
			case "style03":		var bb = "Cap Badge (" + data.badge + ")";break;
			case "style04":		var bb = "Funky Glasses Badge (" + data.badge + ")";break;
			case "style05":		var bb = "Necklace Badge (" + data.badge + ")";break;
			case "tiki01":		var bb = "Fat Tiki Mask (" + data.badge + ")";break;
			case "tiki02":		var bb = "Slim Tiki Mask (" + data.badge + ")";break;
			case "tiki03":		var bb = "Green Tree (" + data.badge + ")";break;
			case "tiki04":		var bb = "Purple Tree (" + data.badge + ")";break;
			default:
				if (data.badge == null){var bb = "None (<a style='color:#b8e0ff;'><em>null</em></a>)";}
				else{var bb = data.badge;}
				break;
		}

//LANGUAGE
		switch (data.language){
			case "bg":	var lan = "Bulgarian <img title='Flag of Bulgaria' src='https://i.imgur.com/vd7Q54y.png' height='13px'></img>";break;
			case "cs":	var lan = "Czech <img title='Flag of Czech Republic' src='https://i.imgur.com/myeQpZg.png' height='13px'></img>";break;
			case "da":	var lan = "Danish <img title='Flag of Denmark' src='https://i.imgur.com/G2zlI4m.png' height='13px'></img>";break;
			case "de":	var lan = "German <img title='Flag of Germany' src='https://i.imgur.com/ET2npvp.png' height='13px'></img>";break;
			case "en":	var lan = "English <img title='Flag of The United States' src='https://i.imgur.com/IaxwAn7.png' height='13px'></img><img title='Flag of The United Kingdom' src='https://i.imgur.com/rknRtyL.png' height='13px'></img>";break;
			case "es":	var lan = "Spanish <img title='Flag of Spain' src='https://i.imgur.com/mGFlRq3.png' height='13px'></img>";break;
			case "fi":	var lan = "Finnish <img title='Flag of Finland' src='https://i.imgur.com/Hcu7KE7.png' height='13px'></img>";break;
			case "fr":	var lan = "French <img title='Flag of France' src='https://i.imgur.com/nZAaWyV.png' height='13px'></img>";break;
			case "hr":	var lan = "Croatian <img title='Flag of Croatia' src='https://i.imgur.com/5p7E9yn.png' height='13px'></img>";break;
			case "it":	var lan = "Italian <img title='Flag of Italy' src='https://i.imgur.com/s2EY2Sw.png' height='13px'></img>";break;
			case "ko":	var lan = "Korean <img title='Flag of North Korea' src='https://i.imgur.com/OTStsvw.png' height='13px'></img><img title='Flag of South Korea' src='https://i.imgur.com/LBOlA1K.png' height='13px'></img>";break;
			case "lt":	var lan = "Lithuanian <img title='Flag of Lithuania' src='https://i.imgur.com/Axr4ba6.png' height='13px'></img>";break;
			case "ms":	var lan = "Malay <img title='Flag of Malaysia' src='http://i.imgur.com/dbSl3H1.png' height='13px'></img>";break;
			case "nl":	var lan = "Dutch <img title='Flag of Netherlands' src='http://i.imgur.com/soj7PT7.png' height='13px'></img>";break;
			case "pl":	var lan = "Polish <img title='Flag of Poland' src='https://i.imgur.com/IOJdJly.png' height='13px'></img>";break;
			case "pt":	var lan = "Portuguese <img title='Flag of Brazil' src='https://i.imgur.com/qg8RKSZ.png' height='13px'></img><img title='Flag of Portugal' src='https://i.imgur.com/OizJHOL.png' height='13px'></img>";break;
			case "sk":	var lan = "Slovak <img title='Flag of Slovakia' src='https://i.imgur.com/YNTVgl3.png' height='13px'></img>";break;
			case "sl":	var lan = "Slovenian <img title='Flag of Slovenia' src='https://i.imgur.com/OGVamtC.png' height='13px'></img>";break;
			case "sr":	var lan = "Serbian <img title='Flag of Serbia' src='https://i.imgur.com/WOb4q8V.png' height='13px'></img>";break;
			case "zh":	var lan = "Chinese <img title='Flag of China' src='https://i.imgur.com/VW4XYiF.png' height='16px'></img>";break;
			default:	var lan = "Unknown (" + data.language + ")";break;
		}

//JOINED
		var jin = data.joined.split('-');
		var lk = jin[2].split(' ');
		var lj = lk[1].split('.');
		switch (jin[1]){
			case "01":	var mnt = "Jan";break;
			case "02":	var mnt = "Feb";break;
			case "03":	var mnt = "Mar";break;
			case "04":	var mnt = "Apr";break;
			case "05":	var mnt = "May";break;
			case "06":	var mnt = "Jun";break;
			case "07":	var mnt = "Jul";break;
			case "08":	var mnt = "Aug";break;
			case "09":	var mnt = "Sep";break;
			case "10":	var mnt = "Oct";break;
			case "11":	var mnt = "Nov";break;
			case "12":	var mnt = "Dec";break;
			default:	var mnt = "???";
		}
		switch (lk[0]){
			case "01":	var day = "st";break;
			case "02":	var day = "nd";break;
			case "03":	var day = "rd";break;
			default:	var day = "th";
		}
		var jnd = mnt + " " + lk[0] + day +  " " + jin[0] + " at " + lj[0];

//GROLE
		if (data.gRole < 3){var g = "<a style='color:#777f92;'>Regular</a> (" + data.gRole + ")";};
		if (data.gRole == 3){var g = "<a style='color:#89be6c;'>Brand Ambassador</a> (" + data.gRole + ")";};
		if (data.gRole > 3){var g = "<a style='color:#42a5dc;'>Admin</a> (" + data.gRole + ")";};

//ROLE
		var userLR = 0;
		var lr = "<a style='color:#777f92;'>Regular</a> (0)";
		for (var i = 0; i < bcs.staffList.length; i++){
			if (data.username == bcs.staffList[i].username){
				userLR = bcs.staffList[i].role;
			}
		}
		if (userLR == 1){
			lr = "<a style='color:#ac76ff;'>RDJ</a> (1)";
		}else if (userLR == 2){
			lr = "<a style='color:#ac76ff;'>Bouncer</a> (2)";
		}else if (userLR == 3){
			lr = "<a style='color:#ac76ff;'>Manager</a> (3)";
		}else if (userLR == 4){
			lr = "<a style='color:#ac76ff;'>Co-Host</a> (4)";
		}else if (userLR == 5){
			lr = "<a style='color:#ac76ff;'>Host</a> (5)";
		}

//VOTE
		var userInfo;
		var votestats = "<a style='color:#646b7e;'>Not in the room</a>";
		var grabstats = "";
		var votestate;
		var grabstate;
		for (var i = 0; i < API.getUsers().length; i++){
			if (API.getUsers()[i].username == data.username){
				votestate = API.getUsers()[i].vote;
				grabstate = API.getUsers()[i].grab;
				userInfo = API.getUsers()[i];
				break;
			}
		}
		if (votestate == 1){votestats = "<a style='color:#90ad2f;'>Woot!</a> (1) "}
		else if (votestate == 0){votestats = "<a style='color:#646b7e;'>Didn't vote</a> (0) "}
		else if (votestate == -1){votestats = "<a style='color:#c42e3b;'>Meh</a> (-1) "}
		if (grabstate === true){grabstats = "| <a style='color:#aa74ff;'>Grabbed!</a> (<em>true</em>)"}
		else if (grabstate === false){grabstats = " <a style='color:#646b7e;'>| Didn't grab</a> (<em>false</em>)"}

		if (API.getDJ() != undefined){
			if (API.getDJ().username == data.username){
				votestats = "<a style='color:#646b7e;'>Is currently DJ'ing</a>";
				grabstats = "";
			}
		}else{
			votestats = "<a style='color:#646b7e;'>No DJ</a>";
			grabstats = "";
		}

//WAITLIST
		var posstats = "<a style='color:#646b7e;'>Not in the WaitList</a>";
		var wlpos = API.getWaitListPosition(data.id);
		if (wlpos != -1){posstats = wlpos + 1 + "/" + API.getWaitList().length;}
		if (votestats == "<a style='color:#646b7e;'>Not in the room</a>"){posstats = votestats;}
		if (votestats == "<a style='color:#646b7e;'>Is currently DJ'ing</a>"){posstats = votestats;}

//FRIEND
		var isFriend = "No (<em>false</em>)";
		for (var i = 0; i < bcs.friendsList.length; i++){
			if (data.username == bcs.friendsList[i].username){
				if (typeof bcs.friendsList[i].room != "undefined"){
					var friendroom = "<a href='https://plug.dj/" + bcs.friendsList[i].room.slug + "' style='color:#aec9ea;'>" + bcs.friendsList[i].room.name + "</a>";
				}else{
					var friendroom = "<a style='color:#808691;'>Offline</a>";
				}
				isFriend = "<a style='color:#ffc4f9;'>Yes</a> (<em>true</em>)<br><b>\
					<a style='color:#42a5dc;'>Room:</b></a> " + friendroom;
				break;
			}
		}
		if (isityou){isFriend = "<a style='color:#646b7e;'>You can't be friends with yourself</a> (<em>false</em>)";}

//PROFILE
		var hasProfile = "<a style='color:#eaaeae;'>[No profile yet]</a>";
		var profileColor = "#eaaeae";
		if (data.level >= 5){
			hasProfile = "";
			profileColor = "#aec9ea";
		}

		bcs.addChat("<br><a style='color:#42a5dc;'><b>Name:</b></a> " + data.username + "<br><b>\
		<a style='color:#42a5dc;'>Slug:</b></a> <a style='color: " + profileColor + ";' href='/@/" + data.slug + "' target='_blank'>" + data.slug + "</a> " + hasProfile + "<br><b>\
		<a style='color:#42a5dc;'>ID:</b></a> " + data.id + "<br><b>\
		<a style='color:#42a5dc;'>Level:</b></a> " + data.level + "<br><b>\
		<a style='color:#42a5dc;'>Avatar:</b></a> " + data.avatarID + "<br><b>\
		<a style='color:#42a5dc;'>Badge:</b></a> " + bb + "<br><b>\
		<a style='color:#42a5dc;'>Language:</b></a> " + lan + "<br><b>\
		<a style='color:#42a5dc;'>Role:</b></a> " + lr + "<br><b>\
		<a style='color:#42a5dc;'>Global Role:</b></a> " + g + "<br><b>\
		<a style='color:#42a5dc;'>Joined:</b></a> " + jnd + "<br><b>\
		<a style='color:#42a5dc;'>Friend:</b></a> " + isFriend + "<br><b>\
		<a style='color:#42a5dc;'>Vote:</b></a> " + votestats + grabstats + "<br><b>\
		<a style='color:#42a5dc;'>WaitList Position:</b></a> " + posstats + "<br>","#CCCCCC",false,false,true);
		}
	});
}

function dropHammer(tag,userid,dur){
	console.log(tag + " || " + userid + " || " + dur);
	if (tag == "b"){
		console.log(tag + " || " + userid + " || " + dur);
		$.ajax({
			type: 'POST', 
			url: 'https://plug.dj/_/bans/add', 
			contentType: 'application/json',
			data: '{"userID":' + userid + ',"reason":1,"duration":"' + dur + '"}'
			}).done(function(msg) {
					console.log(msg);
			});
	}else if (tag == "m"){
		console.log(tag + " || " + userid + " || " + dur);
		$.ajax({
		type: 'POST', 
		url: 'https://plug.dj/_/mutes', 
		contentType: 'application/json',
		data: '{"userID":'+ userid +',"reason":1,"duration":"' + dur + '"}'
		}).done(function(msg) {
				console.log(msg);
		});
	}
}

var heartcount = 0;
var heartrow = 0;
function sendHearts(rows){
	heartcount++;
	heartrow++;
	switch (heartrow){
		case 1:
			bcs.c(":heart: :purple_heart: :blue_heart: :green_heart: :yellow_heart: :heart: :purple_heart: :blue_heart: :green_heart: :yellow_heart:");
			break;
		case 2:
			bcs.c(":purple_heart: :blue_heart: :green_heart: :yellow_heart: :heart: :purple_heart: :blue_heart: :green_heart: :yellow_heart: :heart:");
			break;
		case 3:
			bcs.c(":blue_heart: :green_heart: :yellow_heart: :heart: :purple_heart: :blue_heart: :green_heart: :yellow_heart: :heart: :purple_heart:");
			break;
		case 4:
			bcs.c(":green_heart: :yellow_heart: :heart: :purple_heart: :blue_heart: :green_heart: :yellow_heart: :heart: :purple_heart: :blue_heart:");
			break;
		case 5:
			bcs.c(":yellow_heart: :heart: :purple_heart: :blue_heart: :green_heart: :yellow_heart: :heart: :purple_heart: :blue_heart: :green_heart:");
			heartrow = 0;
			break;
		default:
			break;
	}
	if (rows == 1){
		var whatever = heartcount * 10;
		setTimeout(function(){bcs.l("Total of " + whatever + " hearts sent. Nice flood!");},500);
	}else{
		if (bcs.user.role > 0 || bcs.user.gRole > 0){
			setTimeout(function(){var smth = rows - 1;sendHearts(smth);},250);
		}else{
			setTimeout(function(){var smth = rows - 1;sendHearts(smth);},500);
		}
	}
}

function commandStuff(data){
	var msg = data;
	var command = msg.substring(1).split(' ');
	if(typeof command[2] != "undefined"){
		for(var i = 2; i < command.length; i++){
			command[1] = command[1] + ' ' + command[i];
		};
	};
	if (typeof command[1] == "undefined"){command[1] = "";}
	else{command[1] = command[1] + " ";};
	function ct(msg){API.sendChat(command[1] + msg);};

	console.log("[COMMAND] " + command[0] + " || [ARGUMENT] " + command[1]);

	switch(command[0].toLowerCase()){
		case "level":
			bcs.l("http://i.imgur.com/aRU9YZk.png");
			break;

		case "todo":
			bcs.addChat("<br><a style='color:#c2f3bf;'><b>Todo list:</b></a><br><br>\
					<a style='color: #d4d4d4;'>⊱ <del>Fix inline images bug</del> <b>[DONE]</b></a><br>\
					<a style='color: #d4d4d4;'>⊱ <del>Have WL position on vote list (cuz why not)</del> <b>[DONE]</b></a><br>\
					<a style='color: #d4d4d4;'>⊱ <del>Force skip at the end of songs</del> <b>[DONE / Hard to test]</b></a><br>\
					<a style='color: #D04545;'>⊱ <del>Change all avatars to only one</del> <b>[Ruled out]</b></a><br>\
					<a style='color: #b8e0ff;'>⊱ Check if I can raise the cap to over 200 <b>[Pending]</b></a><br>\
					<a style='color: #8bdb85;'>⊱ Meh count per user (automeh check)</a><br>\
					<a style='color: #d4d4d4;'>⊱ <del>Make vote list prettier</del> <b>[DONE]</b></a><br>","#CCCCCC",false,false,true);
			break;

		case "author":
		case "authors":
			bcs.addChat("<br>\
			<i class='icon icon-chat-bcslogo' style='left:80%;'></i>\
				This script was mainly made by <a style='color:#b8e0ff;' href='https://plug.dj/@/beta-tester' target='_blank'>Beta Tester</a><br>\
				Initial CSS help by <a style='color:#b8e0ff;' href='https://plug.dj/@/marciano' target='_blank'>Marciano</a><br>\
				addChat() by <a style='color:#b8e0ff;' href='https://plug.dj/@/igor' target='_blank'>Igor</a><br>\
				Help with ideas from <a style='color:#b8e0ff;' href='https://plug.dj/@/dcv' target='_blank'>DCV</a><br>","#eee",false,true,true);
			break;

		case "both":
			ct(" Both. http://i.imgur.com/py7q8V7.gif");
			break;

		case "spiderpig":
			ct(" http://youtu.be/714-Ioa4XQw");
			break;

		case "j":
		case "timejoined":
		case "joined":
			if (command[1].indexOf("@") != -1){
				var xname = command[1].substring(1).toString();
				var oname = xname.substring(0,xname.length - 2);
				var uname = oname.toLowerCase();
				console.log(xname + "||" + uname + "||" + oname);
			}
			var foundIt = false;
			for (var i = 0; i < API.getUsers().length; i++){
				if (oname == API.getUsers()[i].username || command[1] == API.getUsers()[i].id){
					foundIt = true;
					break;
				};
			};
			var doubleFound = false;
			if (foundIt){
				for (var i = 0; i < userslist.length; i++){
					if (oname == userslist[i].name || command[1] == userslist[i].id){
						bcs.addChat("User " + userslist[i].name + " (ID " + userslist[i].id + ") joined the room at " + userslist[i].time,"#ccc");
						doubleFound = true;
						return;
					};
				};
			}else if (!foundIt){
				bcs.addChat("User " + command[1] + " is either not in the room or joined before you did.","#c42e3b");
				doubleFound = true;
			};
			if (!doubleFound){
				bcs.addChat("User " + command[1] + " is either not in the room or joined before you did.","#c42e3b");
			}
			break;

		case "retro":
			retroChat = !retroChat;
			bcs.c("/clear");
			if (retroChat){
				var retrostyle = "<style id='retrostyle'>\
					#chat-messages .msg{\
						padding:5px 8px 6px 10px\
					}\
					#chat-messages .message{\
						min-height:0px;\
					}\
				</style>";
				$("body").prepend(retrostyle);
				var isRetro = "<a style='color:#90ad2f'><b>on</b></a>";
			}else{
				$("#retrostyle").remove();
				var isRetro = "<a style='color:#c42e3b'><b>off</b></a>. Thank god.";
			}
			bcs.addChat("Poorly made bootleg beaten up pre-alpha retro chat is now " + isRetro,"#ccc");
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

		case "bg":
			custombg = !custombg;
			favoritism();
			var hasbg = custombg ? "<a style='color:#90ad2f'><b>on</b></a>" : "<a style='color:#c42e3b'><b>off</b></a>";
			bcs.addChat("Custom background is now " + hasbg,"#ccc");
			break;

		case "skip":
			API.moderateForceSkip();
			break;

		case "autoskip":
			autoskip = !autoskip;
			var willSkip = autoskip ? "<a style='color:#90ad2f'><b>on</b></a>" : "<a style='color:#c42e3b'><b>off</b></a>";
			bcs.addChat("Song autoskipper is now " + willSkip,"#ccc");
			break;

		case "woot":
		case "+1":
			bcs.getHistoryID(1);
			break;

		case "meh":
		case "-1":
			bcs.getHistoryID(-1);
			break;

		case "showinter":
		case "intercom":
			if ($("#intercom-launcher").css("visibility") == "visible"){$("#intercom-launcher").css({"visibility":"hidden"});}
			else if ($("#intercom-launcher").css("visibility") == "hidden"){$("#intercom-launcher").css({"visibility":"visible"});}
			break;

		case "flip":
		case "mirror":
			bcs.isFlip = !bcs.isFlip;
			if (bcs.isFlip){$("body").css({'transform':'scale(-1, 1)'})}
			if (!bcs.isFlip){$("body").css({'transform':'scale(1, 1)'})}
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

		case "rekt":
			bcs.c("NOT REKT ☐ | REKT ☑");
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

		case "clean":
		case "cls":
			$(".betabot-update").remove();
			break;

		case "break":
			API.sendChat('/me  ');
			setTimeout(function(){API.sendChat('/del 0')},550);
			break;

		case "lookup":
		case "l":
			var itsYou = false;
			if (command[1] == API.getUser().id){itsYou = true;}
			lookfor(command[1],itsYou);
			break;

		case "search":
		case "s":
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
				bcs.l("[Command " + command[0] + " denied]");
			};
			break;

		case "stopreload":
			window.onbeforeunload = function(){return "BCS caught something trying to reload your page.";}
			bcs.l("BCS will now prevent page from reloading without your permission.");
			break;

		case "selfdemote":
			if (bcs.user.role >= 2){
				var r = confirm("Demote yourself to RDJ?");
				if (r === true){
					$.ajax({
						type: 'POST',
						url: '/_/staff/update',
						dataType: 'json',
						contentType: 'application/json',
						data: JSON.stringify({userID: bcs.user.id, roleID: 1})
					})
				}else {
					bcs.l("[Command " + command[0] + " denied]");
				}
			}else {
				bcs.l("[Command " + command[0] + " denied]");
			}
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
				bcs.l("[Command " + command[0] + " denied]");
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

		case "deleteuser":
			$.ajax({type: 'DELETE', url: '/_/chat/1-,.cm[data-cid^=' + command[1] + ']'});
			break;

		case "rainbow":
		case "rainbows":
		case "hearts":
			if (command[1] == ""){command[1] = "1";};
			var rows = parseInt(command[1]);
			if (rows < 1){rows = 1};
			if (rows > 10){
				if (bcs.user.role > 0 || bcs.user.gRole > 0){
					var r = confirm("Are you sure you wanna flood? Beta is NOT responsible for the consequences.");
					if (r === true) {
						sendHearts(rows);
					}else{
						bcs.l("[Command " + command[0] + " denied]");
					}
				}else{
					bcs.l("Unranked users may not send more than 10 lines of hearts. Sowwy :P");
					bcs.l("[Command " + command[0] + " denied]");
				}
			}else{
				sendHearts(rows);
			}
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
			bcs.addChat("<br><i class='icon icon-chat-bcslogo' style='left:80%;'></i>There are too many commands for an in-chat<br> reference of all of them. <br><a style='color:#b8e0ff;' href='https://github.com/Tetheu98/FunBotThing/blob/master/Commands.md' target='_blank' title='Commands List'>Click here instead</a><br>","#eee",false,true,true);
			break;

		default:
			bcs.addChat("Command <a style='color:#c4c4c4;'>" + command[0] + "</a> is not a command!","#fea6a6");
			break;
	};
}
bcs.turnOn();
$("#chat-header").append('<span style="font-size:10px; color:#ccc;"><b>plug.dj Version ' + _v + '</b></span>');
}
