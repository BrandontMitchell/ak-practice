var lodash = require('lodash');
var rp = require('request-promise');
const UserAgent = require('user-agents');




get_abck_cookie();

function get_abck_cookie() {
    console.log("getting cookie...")

    // visit site with ak


    // grab ak cookie

    var abck = '123123';
    // device vars
    var userAgent = new UserAgent(/Chrome/, {
        deviceCategory: 'desktop'
    })
    var usedUserAgent = userAgent.toString().replace(/\|"/g, "");
    var userAgentBrowser = usedUserAgent.indexOf("Chrome") > -1 ? "chrome" : usedUserAgent.indexOf("Safari") > -1 ? "safari" : usedUserAgent.indexOf("Firefox") > -1 ? "firefox" : "ie";
    var cookieJar = new rp.jar();

    // pass cookie to sensor gen
    return sensor_generator(abck, cookieJar, userAgentBrowser, usedUserAgent);
}


function sensor_generator(abck_cookie, cookieJar, userAgentBrowser, usedUserAgent, proxy=null, type=1) {
    var bmak = {
        ver: 1.7,
        ke_cnt_lmt: 150,
        mme_cnt_lmt: 100,
        mduce_cnt_lmt: 75,
        pme_cnt_lmt: 25,
        pduce_cnt_lmt: 25,
        tme_cnt_lmt: 25,
        tduce_cnt_lmt: 25,
        doe_cnt_lmt: 10,
        dme_cnt_lmt: 10,
        vc_cnt_lmt: 100,
        doa_throttle: 0,
        dma_throttle: 0,
        session_id: 'default_session',
        js_post: !1,
        loc: '',
        cf_url: 'https://',
        params_url: 'https://',
        auth: '',
        api_public_key: null, // prob key per site
        aj_lmt_doact: 1,
        aj_lmt_dmact: 1,
        aj_lmt_tact: 1,
        ce_js_post: 0,
        init_time: 0,
        informinfo: '',
        prevfid: -1,
        fidcnt: 0,
        sensor_data: 0,
        ins: null,
        cns: null,
        enGetLoc: 0,
        enReadDocUrl: 1,
        disFpCalOnTimeout: 0,
        xagg: -1,
        pen: -1,
        brow: '',
        browver: '',
        psub: '-',
        lang: '-',
        prod: '-',
        plen: -1,
        doadma_en: 0,
        sdfn: [],
        d2: 0,
        d3: 0,
        thr: 0,
        cs: '0a46G5m17Vrp4o4c',
        hn: 'unk',
        z1: 0,
        o9: 0,
        vc: '',
        y1: 2016,
        ta: 0,
        tst: -1,
        t_tst: 0,
        ckie: '_abck',
        n_ck: '0',
        ckurl: 0,
        bm: !1,
        mr: '-1',
        altFonts: !1,
        rst: !1,
        runFonts: !1,
        fsp: !1,
        firstLoad: !0,
        pstate: !1,
        mn_mc_lmt: 10,
        mn_state: 0,
        mn_mc_indx: 0,
        mn_sen: 0,
        mn_tout: 100,
        mn_stout: 1e3,
        mn_ct: 1,
        mn_cc: '',
        mn_cd: 1e4,
        mn_lc: [],
        mn_ld: [],
        mn_lcl: 0,
        mn_al: [],
        mn_il: [],
        mn_tcl: [],
        mn_r: [],
        mn_rt: 0,
        mn_wt: 0,
        mn_abck: '',
        mn_psn: '',
        mn_ts: '',
        mn_lg: [],
        loap: 1,
        dcs: 0,
        start_ts : new Date(),
        kact : '',
        ke_cnt : 0,
        ke_vel : 0,
        mact : '',
        mme_cnt : 0,
        mduce_cnt : 0,
        me_vel : 0,
        pact : '',
        pme_cnt : 0,
        pduce_cnt : 0,
        pe_vel : 0,
        tact : '',
        tme_cnt : 0,
        tduce_cnt : 0,
        te_vel : 0,
        doact : '',
        doe_cnt : 0,
        doe_vel : 0,
        dmact : '',
        dme_cnt : 0,
        dme_vel : 0,
        vcact : '',
        vc_cnt : 0,
        aj_indx : 0,
        aj_ss : 0,
        aj_type : -1,
        aj_indx_doact : 0,
        aj_indx_dmact : 0,
        aj_indx_tact : 0,
        me_cnt : 0,
        pe_cnt : 0,
        te_cnt : 0,
        nav_perm : '',
        brv : 0,
        hbCalc : !1,
        fmh : '',
        fmz : '',
        ssh : '',
        wv : '',
        wr : '',
        weh : '',
        wl : 0
    }

    sensor_data = 
            bmak.ver +          // in constants
            '-1,2,-94,-100,' + 
            gd(userAgentBrowser, usedUserAgent, bmak) +                 // bmak.gd() --> window screens/sizing info? ua_browswer, useragent, bmak var   TODO(BRANDON): CUSTOM FUNCTION
            '-1,2,-94,-101,' + 
            "do_en,dm_en,t_en" +                 // i --> constant?  o(device_orientation_event) '+' , + m(device_motion) + ',' + r(touch)
            '-1,2,-94,-105,' + 
            bmak.informinfo +   // in constants, empty and never set, can remove
            '-1,2,-94,-102,' +
            genMouseData() +                 // bmak.getforminfo() --> todo decode form info
            // "0,1," + mm + ',' + kk + ',' + ll + ';' +
            "-1,2,-94,-117," + //bmak.tact is empty
            "-1,2,-94,-111," + //bmak.doact is empty
            "-1,2,-94,-109," + //bmak.dmact is empty. This is necessary

            // STOPPED HERE!!!!!


            '-1,2,-94,-108,' + 
            bmak.kact +         // NOT EMPTY --> "0,1,2015,17,0,4,-1;1,1,2062,16,0,12,-1;2,1,2157,73,0,12,-1;3,2,2229,16,0,4,-1;4,2,2229,73,0,4,-1;5,2,2245,17,0,0,-1;"
            '-1,2,-94,-110,' + 
            bmak.mact +         // NOT EMPTY --> MOUSE MOVEMENTS? very long in format same as above
            '-1,2,-94,-117,' + 
            bmak.tact +         // EMPTY "" 
            '-1,2,-94,-111,' + 
            bmak.doact +        // NOT EMPTY --> has decent length, a lot of -1s
            '-1,2,-94,-109,' + 
            bmak.dmact +        // NOT EMPTY --> has longer length w more -1s
            '-1,2,-94,-114,' + 
            bmak.pact +         // EMPTY
            '-1,2,-94,-103,' + 
            bmak.vcact +        // NOT EMPTY --> 1 (sometimes 0), then long number, 1 (sometimes 0), then long number .... 
            '-1,2,-94,-112,' + 
            b +                 // bmak.getdurl() --> url encode?                                       TODO(BRANDON): CUSTOM FUNCTION
            '-1,2,-94,-115,' + 
            w +                 // g.join(',') --> split into g = many constants (array format) could be trouble / long 
            '-1,2,-94,-106,' + 
            d,                  // in constants (input vars?)

            // second concat
            bmak.sensor_data = 
              bmak.sensor_data + // prev sensor data
              '-1,2,-94,-119,' + 
              bmak.mr +          // in constants, further used in getmr                                 TODO(BRANDON): CUSTOM FUNCTION
              '-1,2,-94,-122,' + 
              S +                // bmak.sed()                                                          TODO(BRANDON): CUSTOM FUNCTION
              '-1,2,-94,-123,' + 
              B +                // weird stuff in later part before bmakr.sensor_data
              '-1,2,-94,-124,' + 
              x +                // weird stuff in later part before bmakr.sensor_data
              '-1,2,-94,-126,' + 
              M +                // weird stuff in later part before bmakr.sensor_data
              '-1,2,-94,-127,' + 
              bmak.nav_perm;     // function np changes value

              // third concat
        bmak.sensor_data = 
            bmak.sensor_data +   // prev concat sensor data
            '-1,2,-94,-70,' + 
            bmak.fpcf.fpValstr + // not sure atm
            '-1,2,-94,-80,' + 
            y +                  // same as bmak.fpcf.fpValstr ?
            '-1,2,-94,-116,' + 
            bmak.o9 +            // constant originally, uses to() ?
            '-1,2,-94,-118,' + 
            P +                  // used in second concat
            '-1,2,-94,-129,' + 
            E +                  // empty string?
        //     '-1,2,-94,-121,'

        // var F = bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16),
        // D = Math.floor(bmak.get_cf_date() / 36e5),
        // R = bmak.get_cf_date(),
        // N = F + bmak.od(D, F) + bmak.sensor_data;
        
        // // fourth concat    
        // bmak.sensor_data = 
        //     N + // initialized above, uses bmak.od() with other stuff. 16 chars sliced
        //     ';' + 
        //     (bmak.get_cf_date() - t) + // time function, uses Date.now
        //     ';' + 
        //     bmak.tst +                  // bmak.tst = bmak.get_cf_date() - bmak.get_cf_date() --> 0?
        //     ';' + 
        //     (bmak.get_cf_date() - R)    // same as above, should be 0? date - date

    console.log("#######")
    console.log(sensor_data)
    console.log("#######")
}








// set to variable n
function gd(ua_browser, userAgent, bmak) {
    var screen_size = screenSize(),
        a = userAgent,
        t = "" + ab(a),
        e = bmak.start_ts / 2,
        n = screen_size[0],
        o = screen_size[1],
        m = screen_size[2],
        r = screen_size[3],
        i = screen_size[4],
        c = screen_size[5],
        b = screen_size[6];
    bmak.z1 = parseInt(bmak.start_ts / (2016 * 2016));
    var d = Math.random(),
        k = parseInt((1e3 * d) / 2),
        l = d + "";
    return ((l = l.slice(0, 11) + k), get_browser(ua_browser, bmak), bc(ua_browser, bmak), bmisc(bmak), a + ",uaend," + bmak.xagg + "," + bmak.psub + "," + bmak.lang + "," + bmak.prod + "," + bmak.plen + "," + bmak.pen + "," + bmak.wen + "," + bmak.den + "," + bmak.z1 + "," + bmak.d3 + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + bd(ua_browser) + "," + t + "," + l + "," + e + "," + bmak.brv + ",loc:" + bmak.loc);
}


function genMouseData() {
    var timeStamp = Math.round(get_cf_date() - (new Date() - 20));
    var mouseString = '';
    var accuracy = 0.01, //this'll give the bezier 100 segments
        p0 = {
            x: Math.floor(Math.random() * 250),
            y: Math.floor(Math.random() * 25)
        }, //use whatever points you want obviously
        p1 = {
            x: Math.floor(Math.random() * 592),
            y: Math.floor(Math.random() * 232)
        },
        p2 = {
            x: Math.floor(Math.random() * 231),
            y: Math.floor(Math.random() * 623)
        },
        p3 = {
            x: Math.floor(Math.random() * 800),
            y: Math.floor(Math.random() * 641)
        };

    for (var i = 0; i < 0.11; i += accuracy) {
        var p = bezier(i, p0, p1, p2, p3);
        timeStamp = timeStamp + lodash.random(0, 30);
        mouseString = mouseString + Math.round(i * 100) + ',' + 1 + ',' + timeStamp + ',' + Math.round(p.x) + ',' + Math.round(p.y) + ';'
    }
    console.log("MOUSE STRING: \n", mouseString);
    return mouseString;
}







// HELPERS // 
function screenSize() {
    var x = lodash.sample([
		['1098', '686', '1098', '686', '1098', '583', '1098'],
		['1280', '680', '1280', '720', '1280', '578', '1280'],
		['1440', '776', '1440', '900', '1440', '660', '1440'],
		['1440', '826', '1440', '900', '1440', '746', '1440'],
		['1440', '860', '1440', '900', '1440', '757', '1440'],
		['1440', '831', '1440', '900', '1440', '763', '1440'],
		['1440', '851', '1440', '900', '1420', '770', '1420'],
		['1440', '786', '1440', '900', '1440', '789', '1440'],
		['1440', '900', '1440', '900', '1440', '821', '1440'],
		['1536', '824', '1536', '864', '1536', '722', '1536'],
		['1680', '972', '1680', '1050', '1680', '939', '1680'],
		['1680', '1020', '1680', '1050', '1680', '917', '1680'],
		['1920', '1040', '1920', '1080', '1920', '937', '1920'],
		['1920', '1040', '1920', '1080', '1920', '969', '1920'],
		['1920', '1080', '1920', '1080', '1920', '1007', '1920'],
		['2560', '1400', '2560', '1440', '2560', '1327', '2576'],
		['1024', '1024', '1024', '1024', '1024', '1024', '1024'],
		['1680', '973', '1680', '1050', '1133', '862', '1680'],
		['1680', '973', '1680', '1050', '1680', '862', '1680'],
		['1024', '768', '1024', '768', '1256', '605', '1272']
	]);
	return x;
}


function uar() {
    return window.navigator.userAgent.replace(/\\|"/g, '')
}

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

function get_browser(ua_browser, bmak) {
	(bmak.psub = productSub(ua_browser)),
	(bmak.lang = "en-US"),
	(bmak.prod = "Gecko"),
	(bmak.plen = pluginsLength(ua_browser));
}



function pluginsLength(browser) {
    switch (browser) {
        case "chrome":
            return 3;
        case "ie":
            return 1;
        case "opera":
            return 1;
        case "firefox":
            return 0;
        case "safari":
            return 1;
    }
}


function productSub(browser) {
    switch (browser) {
        case "chrome":
            return 20030107;
        case "ie":
            return 20030107;
        case "opera":
            return 20030107;
        case "firefox":
            return 20100101;
        case "safari":
            return 20030107;
    }
}

function touchEvent(browser) {
    switch (browser) {
        case "chrome":
            return 1;
        case "ie":
            return 0;
        case "opera":
            return 1;
        case "firefox":
            return 1;
        case "safari":
            return 0;
    }
}


function chrome(browser) {
    switch (browser) {
        case "chrome":
            return 1;
        default:
            return 0;
    }
}


function bmisc(bmak) {
    bmak.pen = 0,
    bmak.wen = 0,
    bmak.den = 0;
}

function bd(browser) {
    switch (browser) {
        case "chrome":
            return [",cpen:0", "i1:0", "dm:0", "cwen:0", "non:1", "opc:0", "fc:0", "sc:0", "wrc:1", "isc:0", "vib:1", "bat:1", "x11:0", "x12:1"].join(",");
        case "ie":
            return [",cpen:0", "i1:1", "dm:1", "cwen:0", "non:1", "opc:0", "fc:0", "sc:0", "wrc:0", "isc:0", "vib:0", "bat:0", "x11:0", "x12:1"].join(",");
        case "opera":
            return [",cpen:0", "i1:0", "dm:0", "cwen:0", "non:1", "opc:1", "fc:0", "sc:0", "wrc:1", "isc:0", "vib:0", "bat:1", "x11:0", "x12:1"].join(",");
        case "firefox":
            return [",cpen:0", "i1:0", "dm:0", "cwen:0", "non:1", "opc:0", "fc:1", "sc:0", "wrc:1", "isc:1", "vib:1", "bat:0", "x11:0", "x12:1"].join(",");
        case "safari":
            return [",cpen:0", "i1:0", "dm:0", "cwen:0", "non:1", "opc:0", "fc:0", "sc:0", "wrc:1", "isc:0", "vib:0", "bat:0", "x11:0", "x12:1"].join(",");
    }
}

function bc(ua_browser, bmak) {
    var a = 1,
        t = 1,
        e = 0,
        n = 0,
        o = 1,
        m = 1,
        r = touchEvent(ua_browser),
        i = 0,
        c = 1,
        b = 1,
        d = chrome(ua_browser),
        k = 1,
        l = 0,
        s = 1;
    bmak.xagg =
        a +
        (t << 1) +
        (e << 2) +
        (n << 3) +
        (o << 4) +
        (m << 5) +
        (r << 6) +
        (i << 7) +
        (c << 8) +
        (b << 9) +
        (d << 10) +
        (k << 11) +
        (l << 12) +
        (s << 13);
}


function get_cf_date() {
	if (Date.now) {
		return Date.now();
	} else {
		return +new Date();
	}
}


/**
 * @param {*} t
 * @param {*} p0
 * @param {*} p1
 * @param {*} p2
 * @param {*} p3
 * @returns
 */
 function bezier(t, p0, p1, p2, p3) {
	var cX = 3 * (p1.x - p0.x),
		bX = 3 * (p2.x - p1.x) - cX,
		aX = p3.x - p0.x - cX - bX;

	var cY = 3 * (p1.y - p0.y),
		bY = 3 * (p2.y - p1.y) - cY,
		aY = p3.y - p0.y - cY - bY;

	var x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
	var y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;

	return {
		x: x,
		y: y
	};
};