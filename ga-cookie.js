(function () {
    var ga_cookie = function () {
        var self = this;

        var utmz = readCookie('__utmz');
        var pairs = utmz.split('.').slice(4).join('.').split('|');
        for (var i = 0; i < pairs.length; i++) {
            var temp = pairs[i].split('=');
            self[temp[0]] = temp[1];
        }

        // readCookie(name)
        // Read the cookie (taken from: http://www.quirksmode.org/js/cookies.html)
        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        return self;
    };

    window.ga_cookie = ga_cookie;
})();
