(function ($) {
    "use strict";
  
	console.log( 'Chatbot Initializing...' );
    function getCookie(name) {
		const match = document.cookie.split('; ').find(row => row.startsWith(name + '='));
		return match ? match.split('=')[1] : null;
	}

	function displayCoEditorChatbot() {
		const utp = getCookie('__utp') || getCookie('_utp') || getCookie('utp');

		const src = CoeditorChatbotVars.CoeditorChatbotOrigin;
		
		const chatbotWindowHeight = CoeditorChatbotVars.chatbotWindowHeight;
		const chatbotWindowWidth = CoeditorChatbotVars.chatbotWindowWidth;

		const primaryColor = CoeditorChatbotVars.ChatbotPrimaryColour;
		const secondaryColor = CoeditorChatbotVars.ChatbotSecondaryColour;
		const backgroundColor = CoeditorChatbotVars.ChatbotBackgroundColour;
		const textColor = CoeditorChatbotVars.ChatbotTextColour;

		const ctaButtonBackgroundColor = CoeditorChatbotVars.ChatbotBackgroundColour;
		const ctaButtonTextColor = CoeditorChatbotVars.ChatbotTextColour;

		const baseUrl = new URL(src);
		const params = baseUrl.searchParams;

		if (utp){
			params.set('token', utp);
		}

		if (primaryColor) params.set('primaryColor', primaryColor);
		if (secondaryColor) params.set('secondaryColor', secondaryColor);
		if (backgroundColor) params.set('backgroundColor', backgroundColor);
		if (textColor) params.set('textColor', textColor);
		if (ctaButtonBackgroundColor) params.set('ctaButtonBackgroundColor', ctaButtonBackgroundColor);
		if (ctaButtonTextColor) params.set('ctaButtonTextColor', ctaButtonTextColor);

		const container = document.getElementById('coeditor-chatbot');
		const iframe = document.createElement('iframe');
		iframe.src = baseUrl.toString();
		iframe.height = chatbotWindowHeight;
		iframe.width = chatbotWindowWidth;
		iframe.frameBorder = '0';
		container.appendChild(iframe);
	}

	if (window.location.href.includes("stage")) {
		setTimeout(() => displayCoEditorChatbot(), 500)
	} else {
		tp = window["tp"] || [];
		tp.push(["init", () => displayCoEditorChatbot()])
	}
  })(jQuery);
  