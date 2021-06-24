//console.log("hello");
// chrome.runtime.onMessage.addListener(
// 	function gotMessage(message, seder, sendResponse){
// 		if(request.type == "some link"){
// 			alert(message);
// 			console.log("Nope. Here");
// 			document.getElementById('demo').innerHTML = message;
// 		}
// 		else{
// 			console.log("wrong");
// 		}
		
// 	});

// chrome.runtime.sendMessage({greeting: "GetURL"},
// 	function(response){
// 		alert(response);
// 		console.log("I'm here");
// 		document.getElementById('demo').innerHTML = response;
// 	});
// console.log("hello");
alert(chrome.storage.local.get('key', function(RETURNED_VALUE) {
	console.log(RETURNED_VALUE.key);
 }));
