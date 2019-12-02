var ML = {
    ajaxReady : false
};

(function(window){
    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('q');

    function ajax (url, callback, error) {
        var req = new XMLHttpRequest();

        req.open('GET', url, true);
        req.onreadystatechange = function (aEvt) {
            if (req.readyState == 4) {
                if(req.status == 200){
                    callback(req.responseText)     
                }
                else{
                    error("Error loading page\n");
                }
            }
        }
        req.send(null); 
    }

    ajax('http://localhost:3000/api/items?q='+query, function(data){
        ML.ajaxReady = true;
        data = JSON.parse(data);
        window.__STATE__ = data;
        var event = new CustomEvent("ajaxReady", data);
        document.dispatchEvent(event);
    })

})(window);