var eventDelegator = (function(){
    function attachClickMethod (callBack) {
        document.addEventListener("click", callBack);
    }
    return {
        initMethod: function(callBack) {
            attachClickMethod(callBack);
        }
    }
}());
