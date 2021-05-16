function gd() { // n is set to this
    var t = bmak.uar(),
        a = '' + bmak.ab(t),
        e = bmak.start_ts / 2,
        n = -1,
        o = -1,
        m = -1,
        r = -1,
        i = -1,
        c = -1,
        b = -1;
    try {
        n = window.screen ? window.screen.availWidth : -1
    } catch (t) {
        n = -1
    }
    try {
        o = window.screen ? window.screen.availHeight : -1
    } catch (t) {
        o = -1
    }
    try {
        m = window.screen ? window.screen.width : -1
    } catch (t) {
        m = -1
    }
    try {
        r = window.screen ? window.screen.height : -1
    } catch (t) {
        r = -1
    }
    try {
        i = window.innerHeight || (document.body && 'clientHeight' in document.body ? document.body.clientHeight : document.documentElement && 'clientHeight' in document.documentElement ? document.documentElement.clientHeight : -1)
    } catch (t) {
        i = -1
    }
    try {
        c = window.innerWidth || (document.body && 'clientWidth' in document.body ? document.body.clientWidth : document.documentElement && 'clientWidth' in document.documentElement ? document.documentElement.clientWidth : -1)
    } catch (t) {
        c = -1
    }
    try {
        b = 'outerWidth' in window && void 0 !== window.outerWidth ? window.outerWidth : -1
    } catch (t) {
        b = -1
    }
    bmak.z1 = bmak.pi(bmak.start_ts / (bmak.y1 * bmak.y1));
    var d = Math.random(),
        s = bmak.pi(1e3 * d / 2),
        k = d + '';
    return k = k.slice(0, 11) + s,
        bmak.gbrv(),
        bmak.get_browser(),
        bmak.bc(),
        bmak.bmisc(),
        t + ',uaend,' + bmak.xagg + ',' + bmak.psub + ',' + bmak.lang + ',' + bmak.prod + ',' + bmak.plen + ',' + bmak.pen + ',' + bmak.wen + ',' + bmak.den + ',' + bmak.z1 + ',' + bmak.d3 + ',' + n + ',' + o + ',' + m + ',' + r + ',' + c + ',' + i + ',' + b + ',' + bmak.bd() + ',' + a + ',' + k + ',' + e + ',' + bmak.brv + ',loc:' + bmak.loc
}



//// GETFORMINFO() ////

function get_type(t) {
    return t = t.toLowerCase(),
        'text' == t || 'search' == t || 'url' == t || 'email' == t || 'tel' == t || 'number' == t ? 0 : 'password' == t ? 1 : 2
}

function getforminfo() { // used for var c 
    for (var t = '', a = '', e = document.getElementsByTagName('input'), n = -1, o = 0; o < e.length; o++) {
        var m = e[o], // get the iterator count element
            r = bmak.ab(m.getAttribute('name')), // int calculated from ab
            i = bmak.ab(m.getAttribute('id')),   // int calculated from ab
            c = m.getAttribute('required'),      // grabs a 'required' field from m
            b = null == c ? 0 : 1,               // 0 if no requied field, 1 if so
            d = m.getAttribute('type'),          // grabs 'type' field from m
            s = null == d ? -1 : bmak.get_type(d), // if no 'type' field -1, otherwise get_type(d) --> 1 if not in list 2 if so (text, search, url, tel, number, password)
            k = m.getAttribute('autocomplete');   // grabs 'autocomplete' field from m
        null == k ? n = -1 : (k = k.toLowerCase(), n = 'off' == k ? 0 : 'on' == k ? 1 : 2);  // if k is null, set n = -1, otherwise lowercase k value and if k is off set n to 0, otherwise if k is on set to 1, else 2
        var l = m.defaultValue, u = m.value, _ = 0, f = 0; 
        l && 0 != l.length && (f = 1),
            !u || 0 == u.length || f && u == l || (_ = 1),
            2 != s && (t = t + s + ',' + n + ',' + _ + ',' + b + ',' + i + ',' + r + ',' + f + ';'),
            a = a + _ + ';' 
    }
    return null == bmak.ins && (bmak.ins = a),
        bmak.cns = a,
        t
}


function getdurl() { // used for var b
    return bmak.enReadDocUrl ? document.URL.replace(/\\|"/g, '') : '' // enReadDocUrl is 1, so just encode url? doesn't change much of the string
}

function getmr() { // used for bmak.mr
    try {
        if ('undefined' == typeof performance || void 0 === performance.now || 'undefined' == typeof JSON)
            return void(bmak.mr = 'undef');
        for (var t = '', a = 1e3, e = [Math.abs, Math.acos, Math.asin, Math.atanh, Math.cbrt, Math.exp, Math.random, Math.round, Math.sqrt, isFinite, isNaN, parseFloat, parseInt, JSON.parse], n = 0; n < e.length; n++) {
            var o = [],
                m = 0,
                r = performance.now(),
                i = 0,
                c = 0;
            if (void 0 !== e[n]) {
                for (i = 0; i < a && m < .6; i++) {
                    for (var b = performance.now(), d = 0; d < 4e3; d++)
                        e[n](3.14);
                    var s = performance.now();
                    o.push(Math.round(1e3 * (s - b))),
                        m = s - r
                }
                var k = o.sort();
                c = k[Math.floor(k.length / 2)] / 5
            }
            t = t + c + ','
        }
        bmak.mr = t
    } catch (t) {
        bmak.mr = 'exception'
    }
}


// checks if webdrivers are being used 
function sed() { // used for var S
    var t;
    t = window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? '1' : '0'; // not in window vars, t is '0'
    var a;
    a = null != window.document.documentElement.getAttribute('webdriver') ? '1' : '0'; // checks if webdrivers are being used
    var e;
    e = void 0 !== navigator.webdriver && navigator.webdriver ? '1' : '0';
    var n;
    n = void 0 !== window.webdriver ? '1' : '0';
    var o;
    o = void 0 !== window.XPathResult || void 0 !== document.XPathResult ? '1' : '0'; // prob mostly '1'
    var m;
    m = null != window.document.documentElement.getAttribute('driver') ? '1' : '0';
    var r;
    return r = null != window.document.documentElement.getAttribute('selenium') ? '1' : '0',
        [t, a, e, n, o, m, r].join(',')

        // example output: "0,0,0,0,1,0,0"
}


function np() { // used for 2nd concat at end, bmak.nav_perm
    var t = [],
        a = ['geolocation', 'notifications', 'push', 'midi', 'camera', 'microphone', 'speaker', 'device-info', 'background-sync', 'bluetooth', 'persistent-storage', 'ambient-light-sensor', 'accelerometer', 'gyroscope', 'magnetometer', 'clipboard', 'accessibility-events', 'clipboard-read', 'clipboard-write', 'payment-handler'];
    try {
        if (!navigator.permissions)
            return void(bmak.nav_perm = 6);
        bmak.nav_perm = 8;
        var e = function (a, e) {
                return navigator.permissions.query({
                    name: a
                }).then(function (a) {
                    switch (a.state) {
                    case 'prompt':
                        t[e] = 1;
                        break;
                    case 'granted':
                        t[e] = 2;
                        break;
                    case 'denied':
                        t[e] = 0;
                        break;
                    default:
                        t[e] = 5
                    }
                }).catch(function (a) {
                    t[e] = -1 !== a.message.indexOf('is not a valid enum value of type PermissionName') ? 4 : 3
                })
            },
            n = a.map(function (t, a) {
                return e(t, a)
            });
        Promise.all(n).then(function () {
            bmak.nav_perm = t.join('')
        })
    } catch (t) {
        bmak.nav_perm = 7
    }
}

function to() { // var y in third concat, also set constant earlier. relates to some math behind mouse clicks
    var t = bmak.x2() % 1e7;
    bmak.d3 = t;
    for (var a = t, e = bmak.pi(bmak.ff(51)), n = 0; n < 5; n++) {
        var o = bmak.pi(t / Math.pow(10, n)) % 10,
            m = o + 1;
        op = bmak.cc(o),
            a = op(a, m)
    }
    bmak.o9 = a * e
}


function get_cf_date() { // fourth concat
    return Date.now ? Date.now() : +new Date
}



// comfortable
function ab(t) { // used in getforminfo
    if (null == t)
        return -1; // if empty/null is passed return -1 
    try {
        for (var a = 0, e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e); //an integer between 0 and 65535 representing the UTF-16
            n < 128 && (a += n)      // append int to a only if under 128 in basic latin unicode
        }
        return a
    } catch (t) {
        return -2 // return -2 if fails?
    }
}



function mn_get_current_challenges() {
    var t = bmak.get_mn_params_from_abck(),
        a = [];
    if (null != t)
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (n.length > 0) {
                var o = n[1] + n[2],
                    m = n[6];
                a[m] = o
            }
        }
    return a
},