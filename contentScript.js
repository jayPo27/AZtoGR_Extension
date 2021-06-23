let allSpan = document.getElementsByTagName('span')
for (var i=0;i<allSpan.length;i++){
    if(allSpan[i].innerText == "Print length"){
    	alert("hey I am Jay!")
    	let pageTitle = document.getElementsByTagName('title')
    	for(var j = 0; j < pageTitle.length; j++){
    		let str1 = pageTitle[j].innerText
    		var x = str1.indexOf(":");
    		var y = str1.substr(0,x);
    		var split = y.split(" ");
    		var str2 = "https://www.goodreads.com/search?utf8=%E2%9C%93&query="
    		for(var a = 0; a < split.length; a++){
    			str2 = str2.concat(split[a]);
    			if(a != split.length-1){
    				str2 = str2.concat('+');
    			}
    		}
            chrome.runtime.sendMessage(str2);
    	}
    }
}