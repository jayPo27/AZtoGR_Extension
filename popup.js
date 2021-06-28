function toGR(){
	chrome.storage.local.get('key', function(RETURNED_VALUE) {
		window.open(RETURNED_VALUE.key)
	 })
}


document.getElementById("button1").addEventListener("click", function() {
	toGR();
});
