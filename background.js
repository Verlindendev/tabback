function onInstall() {
	CLUTlog("Extension Installed");
	chrome.windows.create({url:"http://www.verlinden.dev"});
}
    var tabId = 0;
    var oldtabId= 0;

 
    chrome.tabs.onActivated.addListener(function(){
        console.log("prev "+tabId);
        oldtabId = tabId;
    
        chrome.tabs.query({
            active:true,
            currentWindow:true
        }, function (tabs){
            var activeTab= tabs[0];
            tabId = activeTab.id;
            console.log("current "+tabId);
        });
        
});

chrome.action.onClicked.addListener(tab => { 
    if (oldtabId != 0){
    chrome.tabs.update(oldtabId, {active: true})
    }
});


    
    