


function get_abck_cookie() {
    console.log("getting cookie...")
}


function sensor_generator() {
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
        cf_url: 'https:' === document.location.protocol ? 'https://' : 'http://',
        params_url: ('https:' === document.location.protocol ? 'https://' : 'http://') + document.location.hostname + '/get_params',
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
        dcs: 0
    }


    bmak.sensor_data = 
            bmak.ver +          // in constants
            '-1,2,-94,-100,' + 
            n +                 // bmak.gd() --> window screens/sizing info? ua_browswer, useragent, bmak var   TODO(BRANDON): CUSTOM FUNCTION
            '-1,2,-94,-101,' + 
            i +                 // o(device_orientation_event) '+' , + m(device_motion) + ',' + r(touch) --> mouse events perhaps? TODO(BRANDON): CUSTOM FUNCTION
            '-1,2,-94,-105,' + 
            bmak.informinfo +   // in constants
            '-1,2,-94,-102,' + 
            c +                 // bmak.getforminfo() --> todo decode form info
            '-1,2,-94,-108,' + 
            bmak.kact +         // in constants, perhaps further developed in function cka              TODO(BRANDON): CUSTOM FUNCTION (might be empty)
            '-1,2,-94,-110,' + 
            bmak.mact +         // in constants, perhaps further developed in function cma              TODO(BRANDON): CUSTOM FUNCTION for mouse movements
            '-1,2,-94,-117,' + 
            bmak.tact +         // in constants, perhaps further developed in function cta              TODO(BRANDON): CUSTOM FUNCTION (might be empty)
            '-1,2,-94,-111,' + 
            bmak.doact +        // in constants, perhaps further developed in function cdoa             TODO(BRANDON): CUSTOM FUNCTION (might be empty)
            '-1,2,-94,-109,' + 
            bmak.dmact +        // in constants, perhaps further developed in function cdma             TODO(BRANDON): CUSTOM FUNCTION  (might be empty,  but perhaps needs more info using lodash)
            '-1,2,-94,-114,' + 
            bmak.pact +         // in constants, perhaps further developed in function cpa              TODO(BRANDON): CUSTOM FUNCTION
            '-1,2,-94,-103,' + 
            bmak.vcact +        // in constants, perhaps further developed in function lvc              TODO(BRANDON): CUSTOM FUNCTION
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
            '-1,2,-94,-121,'

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
}