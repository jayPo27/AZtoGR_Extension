let color = '#3aa757';

chrome.runtime.onInstalled.addListener(()=>{
	chrome.storage.sync.set({color});
	console.log('Default background color set to %cgreen', 'color: ${color}');
});
chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse){
		//console.log(message);
		if(message.greeting === "GetURL"){
			chrome.tabs.query({active:true}, function(tabs)){
				if(tabs.length === 0) {
                	sendResponse({});
                	return;
            	}
            	tabURL = tabs[0].url;
            	sendResponse( {navURL:tabURL} );
			};
		}
});

