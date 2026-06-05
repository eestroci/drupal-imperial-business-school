	{
		var now = new Date();
		var shortterm = new Date(now.getTime() + 26*60*60*1000);
		var longterm = new Date(now.getTime() + 365*24*60*60*1000);
		document.cookie = 'ug=6a06f50d025d430a3f99940016695a95; expires='+longterm.toGMTString()+'; path=/';
		document.cookie = 'ugs=1; expires='+shortterm.toGMTString()+'; path=/';
	}

