console.log("hello");
chrome.runtime.onMessage.addListener(
	function gotMessage(message, seder, sendResponse){
		if(request.type == "some link"){
			alert(message);
			console.log(message);
			document.getElementById('demo').innerHTML = message;
		}
		else{
			console.log("wrong");
		}
		
	});

chrome.runtime.sendMessage({greeting: "GetURL"},
	function(response){
		alert(response);
		console.log(response);
		document.getElementById('demo').innerHTML = response;
	});
console.log("hello");
