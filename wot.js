var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
(function() {
	var loaded = false;
	var a = {
		b: function() {
			if (typeof $ !== 'undefined') {
				this.c();
			}
			else if (!loaded) {
				setTimeout(function() { a.b(); }, 1000);
			}
		},
		c: function() {
			$("#app").css({'background-image':'url(http://stream1.gifsoup.com/view2/3806425/cantina-band-o.gif)'});
		}
	};
	a.b();
})();
