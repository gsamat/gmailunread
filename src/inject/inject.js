chrome.extension.sendMessage({}, function(response) {
	var storedHash = window.location.hash;
	var isunread=/is:unread/g;
	var islabel=/label:/g;
	var readyStateCheckInterval = setInterval(function() {
		if (window.location.hash != storedHash) {
        storedHash = window.location.hash;
        console.log(storedHash);
        
        
		if (! isunread.test(gbqfq.value) && islabel.test(gbqfq.value)) {
        gbqfq.value = gbqfq.value + ' is:unread'
        gbqfb.click()
        }
    }
	}, 10);
});