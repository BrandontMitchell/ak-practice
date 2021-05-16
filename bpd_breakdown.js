
// constants used in sensor gen, some are UA, hardware, canvas?
bmak = bmak && bmak.hasOwnProperty('ver') && bmak.hasOwnProperty('sed') ? bmak : {
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
    cf_url: 'https:' === document.location.protocol ? 'https://' : 'http://',
    params_url: ('https:' === document.location.protocol ? 'https://' : 'http://') + document.location.hostname + '/get_params',
    auth: '',
    api_public_key: 'afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq',
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
    ir: function () {
        bmak.start_ts = Date.now ? Date.now() : +new Date,
            bmak.kact = '',
            bmak.ke_cnt = 0,
            bmak.ke_vel = 0,
            bmak.mact = '',
            bmak.mme_cnt = 0,
            bmak.mduce_cnt = 0,
            bmak.me_vel = 0,
            bmak.pact = '',
            bmak.pme_cnt = 0,
            bmak.pduce_cnt = 0,
            bmak.pe_vel = 0,
            bmak.tact = '',
            bmak.tme_cnt = 0,
            bmak.tduce_cnt = 0,
            bmak.te_vel = 0,
            bmak.doact = '',
            bmak.doe_cnt = 0,
            bmak.doe_vel = 0,
            bmak.dmact = '',
            bmak.dme_cnt = 0,
            bmak.dme_vel = 0,
            bmak.vcact = '',
            bmak.vc_cnt = 0,
            bmak.aj_indx = 0,
            bmak.aj_ss = 0,
            bmak.aj_type = -1,
            bmak.aj_indx_doact = 0,
            bmak.aj_indx_dmact = 0,
            bmak.aj_indx_tact = 0,
            bmak.me_cnt = 0,
            bmak.pe_cnt = 0,
            bmak.te_cnt = 0,
            bmak.nav_perm = '',
            bmak.brv = 0,
            bmak.hbCalc = !1,
            bmak.fmh = '',
            bmak.fmz = '',
            bmak.ssh = '',
            bmak.wv = '',
            bmak.wr = '',
            bmak.weh = '',
            bmak.wl = 0
    },


////////////////// -- SENSOR GEN HERE -- /////////////////////////
bpd: function () {
    bmak.sd_debug('<bpd>');
    var t = 0;
    try {
        t = bmak.get_cf_date();
        var a = bmak.updatet(),
            e = '3';
        bmak.ckie && (e = bmak.get_cookie());
        var n = bmak.gd(),
            o = window.DeviceOrientationEvent ? 'do_en' : 'do_dis',
            m = window.DeviceMotionEvent ? 'dm_en' : 'dm_dis',
            r = window.TouchEvent ? 't_en' : 't_dis',
            i = o + ',' + m + ',' + r,
            c = bmak.getforminfo(),
            b = bmak.getdurl(),
            d = bmak.aj_type + ',' + bmak.aj_indx;
        !bmak.fpcf.fpValCalculated && (0 == bmak.js_post || bmak.aj_indx > 0) && bmak.fpcf.fpVal();
        var s = bmak.ke_vel + bmak.me_vel + bmak.doe_vel + bmak.dme_vel + bmak.te_vel + bmak.pe_vel,
            k = bmak.ff,
            l = k(80) + k(105) + k(90) + k(116) + k(69),
            u = bmak.jrs(bmak.start_ts),
            _ = bmak.get_cf_date() - bmak.start_ts,
            f = bmak.pi(bmak.d2 / 6),
            p = bmak.fas(),
            v = bmak.hbs(),
            h = bmak.gwd(),
            g = [bmak.ke_vel + 1, bmak.me_vel + 32, bmak.te_vel + 32, bmak.doe_vel, bmak.dme_vel, bmak.pe_vel, s, a, bmak.init_time, bmak.start_ts, bmak.fpcf.td, bmak.d2, bmak.ke_cnt, bmak.me_cnt, f, bmak.pe_cnt, bmak.te_cnt, _, bmak.ta, bmak.n_ck, e, bmak.ab(e), bmak.fpcf.rVal, bmak.fpcf.rCFP, p, l, u[0], u[1], v, h],
            w = g.join(','),
            y = '' + bmak.ab(bmak.fpcf.fpValstr);
        bmak.firstLoad ? bmak.np() : bmak.csh(),
            !bmak.hbCalc && (0 == bmak.js_post || bmak.aj_indx > 0) && (bmak.fm(),
                bmak.wgl(),
                bmak.hbCalc = !0);
        var E = '';
        bmak.hbCalc && (E = bmak.fmh + ',' + bmak.fmz + ',' + bmak.ssh + ',' + bmak.wv + ',' + bmak.wr + ',' + bmak.weh + ',' + bmak.wl);
        var S = bmak.sed(),
            C = bmak.mn_get_current_challenges(), // empty list from what i saw on fedex
            B = '', 
            x = '',
            M = '';
        if (void 0 !== C[1]) { // wont enter if current challenges are empty
            var j = C[1];
            void 0 !== bmak.mn_r[j] && (B = bmak.mn_r[j])
        }
        if (void 0 !== C[2]) { // wont enter if current challenges are empty
            var A = C[2];
            void 0 !== bmak.mn_r[A] && (x = bmak.mn_r[A])
        }
        if (void 0 !== C[3]) { // wont enter if current challenges are empty
            var L = C[3];
            void 0 !== bmak.mn_r[L] && (M = bmak.mn_r[L])
        }
        bmak.sensor_data = 
            bmak.ver +          // in constants
            '-1,2,-94,-100,' + 
            n +                 // bmak.gd() --> window screens/sizing info?
            '-1,2,-94,-101,' + 
            i +                 // o(device_orientation_event) '+' , + m(device_motion) + ',' + r(touch) --> mouse events perhaps?
            '-1,2,-94,-105,' + 
            bmak.informinfo +   // in constants
            '-1,2,-94,-102,' + 
            c +                 // bmak.getforminfo() --> todo decode form info
            '-1,2,-94,-108,' + 
            bmak.kact +         // in constants, perhaps further developed in function cka
            '-1,2,-94,-110,' + 
            bmak.mact +         // in constants, perhaps further developed in function cma
            '-1,2,-94,-117,' + 
            bmak.tact +         // in constants, perhaps further developed in function cta
            '-1,2,-94,-111,' + 
            bmak.doact +        // in constants, perhaps further developed in function cdoa
            '-1,2,-94,-109,' + 
            bmak.dmact +        // in constants, perhaps further developed in function cdma
            '-1,2,-94,-114,' + 
            bmak.pact +         // in constants, perhaps further developed in function cpa
            '-1,2,-94,-103,' + 
            bmak.vcact +        // in constants, perhaps further developed in function lvc
            '-1,2,-94,-112,' + 
            b +                 // bmak.getdurl() --> url encode?
            '-1,2,-94,-115,' + 
            w +                 // g.join(',') --> split into g = many constants (array format) could be trouble / long 
            '-1,2,-94,-106,' + 
            d,                  // in constants

            // second concat
            bmak.sensor_data = 
              bmak.sensor_data + // prev sensor data
              '-1,2,-94,-119,' + 
              bmak.mr +          // in constants, further used in getmr
              '-1,2,-94,-122,' + 
              S +                // bmak.sed()
              '-1,2,-94,-123,' + 
              B +                // weird stuff in later part before bmakr.sensor_data
              '-1,2,-94,-124,' + 
              x +                // weird stuff in later part before bmakr.sensor_data
              '-1,2,-94,-126,' + 
              M +                // weird stuff in later part before bmakr.sensor_data
              '-1,2,-94,-127,' + 
              bmak.nav_perm;     // function np changes value

        var P = 24 ^ bmak.ab(bmak.sensor_data); // need to decode ab, but is used in third concat

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
           '-1,2,-94,-121,',
            
        bmak.sd_debug(',s1:' + bmak.sensor_data.slice(0, 10)) // whats this?
    } 
    // catch (t) {
    //     var T = '';
    //     try {
    //         t.stack && 'string' == typeof t.stack ? T = t.stack.replace(/\"/g, "\\'") : 'string' == typeof t && (T = t.replace(/\"/g, "\\'")),
    //             T = T.slice(0, 1e3),
    //             bmak.sd_debug(',s2:' + T),
    //             bmak.sensor_data = bmak.ver + '-1,2,-94,-100,' + bmak.uar() + '-1,2,-94,-120,' + T
    //     } catch (t) {
    //         t.stack && 'string' == typeof t.stack ? T = t.stack.replace(/\"/g, "\\'") : 'string' == typeof t && (T = t.replace(/\"/g, "\\'")),
    //             T = T.slice(0, 1e3),
    //             bmak.sd_debug(',s3:' + T),
    //             bmak.sensor_data = bmak.ver + bmak.sensor_data + ',s3:' + T
    //     }
    // }
    try {
        var F = bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16),
            D = Math.floor(bmak.get_cf_date() / 36e5),
            R = bmak.get_cf_date(),
            N = F + bmak.od(D, F) + bmak.sensor_data;
        
        // fourth concat    
        bmak.sensor_data = 
            N + // initialized above, uses bmak.od() with other stuff. 16 chars sliced
            ';' + 
            (bmak.get_cf_date() - t) + // time function, uses Date.now
            ';' + 
            bmak.tst +                  // bmak.tst = bmak.get_cf_date() - bmak.get_cf_date() --> 0?
            ';' + 
            (bmak.get_cf_date() - R)    // same as above, should be 0? date - date
    } catch (t) {}
    bmak.sd_debug('</bpd>')
},


////////////////// -- SENSOR GEN HERE -- /////////////////////////