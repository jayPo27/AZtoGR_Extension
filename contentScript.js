function storeISBN() {
    //gives you to the link in the page in goodreads
    let allSpan = document.getElementsByTagName('span')
    for (var i=0;i<allSpan.length;i++){
        if(allSpan[i].innerText == "Print length"){
            let isbn = document.getElementsByTagName('input')
            var str2 = "https://www.goodreads.com/search?utf8=%E2%9C%93&query="
            for(var j=0;j<isbn.length;j++){
               if(isbn[j].type == "hidden" && isbn[j].id == "ASIN" && isbn[j].name == "ASIN"){
                    str3 = isbn[j].value;
                    str2 = str2.concat(str3);
                    chrome.storage.local.set({key: str2}, function(){});
                    window.open(str2);
                    break;
                }// if 
            }// for
        }// outer if
    }// outer for
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    //alert("hey");
    if(request.message == "ISBN"){
        //alert("hello");
        storeISBN();
    }

});
