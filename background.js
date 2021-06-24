let color = '#3aa757';
let bookURL;
chrome.runtime.onInstalled.addListener(()=>{
	chrome.storage.sync.set({color});
	console.log('Default background color set to %cgreen', 'color: ${color}');
});


chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse){

		// we know it's from a popup
		if(message.greeting === "GetURL"){

			// gives you the current tab
		let currTab = chrome.tabs.query({active:true, currentWindow: true})

            	let tabURL = currTab.url;
            	sendResponse(bookURL);
            	//sendResponse( {siteURL:tabURL} );
		}
		else if(message.greeting === "GRPage"){
			bookURL = message;
		}	
});

