function toGR(){
	chrome.storage.local.get('key', function(RETURNED_VALUE) {
		window.open(RETURNED_VALUE.key)
	 })
}


function getCurrentISBN(id){
	chrome.tabs.sendMessage(id.id, {"message": "ISBN"});
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("button1").addEventListener("click", function() {
		chrome.tabs.query({active: true, currentWindow: true}, tabs =>{
			let url = tabs[0].url;
			if(url.includes('amazon.com')){
				getCurrentISBN(tabs[0]);
				//toGR();
			}
			else{
				alert("This extension only works on Amazon");
			}
		})	
	});
});
