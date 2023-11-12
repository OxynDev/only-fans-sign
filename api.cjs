
const crypto = require('crypto');
const express = require('express');
const { spawn } = require('child_process');

function hashObject(e, t) {
    
    function o(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    for (var s in t) o(t, s) &&
    !o(e, s) &&
    Object.defineProperty(e, s, {
      enumerable: !0,
      get: t[s]
    })
  }

function esModule(e) {
    var t = e &&
    e.__esModule ? function () {
      return e.default
    }
     : function () {
      return e
    };
    return hashObject(t, {
      a: t
    }),
    t
  }

function sign(
  W, 
  n, 
  o,

  accountId,
  endPoint


  ) {
    
    function nx(e) {
        var t = e &&
        e.__esModule ? function () {
          return e.default
        }
         : function () {
          return e
        };
        return hashObject(t, {
          a: t
        }),
        t
      }

      var c = function (t) {
        return function (e) {
          return new Sha1(!0).update(e) [t]()
        }
      },


      t = esModule(c),
      u = o(227361),
      r = nx(u),
      e = o(550615);
      
      function d() {
        const W = [
          'W7vMW7O',
          'W4C5W4ddPmkXWPa',
          'W780W7BcKCkLzG',
          'W73cJ8oRW4jdWORdPqBcNha',
          'WP5wxCkCW5/cGq',
          'ymogA8kiCW',
          'W7TxWPFcRSkkmvK6Cmk+W6xdKvS',
          'W6CeWO7cTX0',
          'WQKnW4hdPCoWAa8vwSkd',
          'W5NcLCodW5Dx',
          'pCkZpSozia',
          'W6tcP17cLvO',
          'W7NcVxPnwa',
          'WQHxWPi1W4a',
          'W4CVW4FdGSkQ',
          'WOqVW7q',
          'W7uKB8oTW7a',
          'W7tcS1P6ASox',
          'rcNcPCkbbCkFlftdImk4',
          'ymoIySkoyXS',
          'WPfBuSkjW6JcHNFcJ8o9WPq',
          'oKLJWQ0T',
          'W5Oli8k2tq',
          'hxPOWORdL8oDWOPHW4ldJSk6amov',
          'fNVcJf/dVh4',
          'WQmSkSk7WOe',
          'qvLOWQbrW5D+WQFdMCoEptmq',
          'a0iiW6jifJW/qNpcSmoJW4u',
          'W5XrWR9tWQe',
          'WQBdN8k5WOKZWRldPcdcUf4m',
          'W5lcSxHBvG',
          'aCkhn8oyWPZcHuTSW57cGq',
          'WOjzsSkyW6G',
          'AuaElvRdLW',
          'l8kBp8oaWRy',
          'cmouDsK3',
          'jmkFFeH+',
          'W7rqW44QhW',
          'u8oPdXmLW5TEmt/cIuH4',
          'W58mW5/dRSkm',
          'WPm/lCkXWRG',
          'WQvNWQddHSoPnYvAASoCWRZdISk+',
          'gmkFeZut',
          'jmkqkhhdOq',
          'xmotzqy3W47dQa',
          'WQese8keWPC',
          'sYtcQSkumSky',
          'W5WSW5VcOSol',
          'wrfEWRuerW',
          'W63cUCk2CsW',
          'kCkxomoPWOy',
          'W4FdLshdKKhcOL5skXm',
          'WR/cO8ohfrm',
          'vebwzZ0',
          'WQ1EWQRdTSogBa1bWRddHW',
          'n8o+cN8Hzg7cTSklkG',
          'W5pcJmk7Cru',
          'rGeVW4VcLW',
          'cSkCeIK1',
          'W5SarmoHW64O',
          'WOqlwSoKWQOJd8ksamoFjf0FW4ZcUfqDW4WtcSodlIJcRL8hAmomAbxcLKC',
          'WR4kW7pdO8obBGux',
          'W5vtiLBcVW',
          'bYuqW4ef',
          'ySoMESkaCbldKCopumk9W4agyYpcLWZcPmkCEW',
          'ysePW6VcNq',
          'W5GAWPxcGdO',
          'WPBcJvbpWPysC3O',
          'WPPYWOCs',
          'W4ZdTapcHq',
          'WPe5A8kaWPfcWRrCqsq',
          'nw51sYpdM1y',
          'bI4kWRxcNq',
          'W70AW7xcJCoj',
          'W7nCWQfJgmo7',
          'WOfau3rbsNBcL8o/dW',
          'WOaNmCkkWOy9',
          'W6e7W6ldHCkn',
          'lezxWOWU',
          'ka0RWQRcJq',
          'W4bni1FcNa',
          'eCkgmCoe',
          'WPyqDaNdUmo0W4SznCotW5FdS8oN',
          'gw3dOwvb',
          'W4FcHSkUsr3dQSoLfI7cUq',
          'vsGiwSko',
          'W47dMhPhWOSk',
          'W5RdU3nmWRW',
          'W58vWQtcMsu',
          'ACobW5HhW7C',
          'bCkvamohWPy',
          'W6KevmoCWOa',
          'W5Oqat8XCNFcSCoBisW',
          'W70NxCoxWRDF',
          'W6bQWRHvWRq',
          'W4NcGvbkW5K',
          'WOnvBSoPW7mWA8ok',
          'W4hdOtZcHSod',
          'W5qns8o0W5KVxCoomSoC',
          'juVdG2f9qa',
          'aemgW6jbf104CxlcRSon',
          'W4bMkmojua',
          'bCk2wffxWOXPgIBcSq',
          'b8o0tbOAW5VdMGO3ua',
          'W5W+W5RdICko',
          'eqq9W6uRWOKTWRVdImo5',
          'h3PSWORdMCoEWO57W6ddLCk+aCou',
          'W5hcKNLeW7Tn',
          'W6XXW7Gfi2y',
          'W4xdSWVcMCojtqPXy1S',
          'WPpcJYmzW4zue1hcUCkNeCobWQG',
          'tSogsCkcFq',
          'pSkuice6',
          'WOiOW7pdJCoHWPK0W6NdSmouWOujr05KW7ThW5/dUmorkmoUAW',
          'hCoHowi0',
          'W4FdSctcU8om',
          'W67cICkdFry',
          'W4RdVGtcJmo+sG',
          'W7aeaCkxEG',
          'W4CNDCodWPa',
          'WPjAobOw',
          'W40Pl8kbEW',
          'WOGQnSkxWQa',
          'WO8QpSkFWRe6u8oFcSo0',
          'W5G+W6ZcVCobbSoeW63dR8k9',
          'W4JcLxH+vG',
          'WPldM8o7xM/dP8k3fq',
          'WO1ZWOSfW4JdVmo0y31B',
          'W6/dRvHjWPO',
          'lISHWRRcLG',
          'bMHEWPqY',
          'WRNcNmoGaJi',
          'WOGGW4hdT8oG',
          'WO5nxgf2tq',
          'oCkdkhVdJa',
          'bCkOnZif',
          'W7qRW47cM8ky',
          'WRWbe8koWRO',
          'WRTpWPZdTCoQ',
          'W5FcGmkgwbK',
          'W7a5W7NcHmksyxn2qmoL',
          'WP8xlCk9WPq',
          'gxBcG0RdI3NcIcfMWQ0',
          'W617cmoa',
          'W7lcGSoKW5D0WO0',
          'bM9bWQKrzq',
          'hqamWQVcNCkWWO/cMSkpvG',
          'pXynfx3cLg3dI3NdTxxcHW',
          'vwy8kwy',
          'W6vSsmokW68XgZpcSWfTWP8',
          'W4mmr8oJ'
        ];
        return (d = function () {
          return W
        }) ()
      }
      function f(W, n) {
        const o = d();
        return f = function (n, c) {
          let t = o[n -= 313];
          if (void 0 === f.ijqwGI) {
            var u = function (W) {
              const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
              let o = '',
              c = '';
              for (
                let t = 0,
                u,
                r,
                e = 0;
                r = W.charAt(e++);
                ~r &&
                (u = t % 4 ? 64 * u + r : r, t++ % 4) ? o += String.fromCharCode(255 & u >> ( - 2 * t & 6)) : 0
              ) r = n.indexOf(r);
              for (let t = 0, u = o.length; t < u; t++) c += '%' + ('00' + o.charCodeAt(t).toString(16)).slice( - 2);
              return decodeURIComponent(c)
            };
            const n = function (W, n) {
              let o = [],
              c = 0,
              t,
              r = '',
              e;
              for (W = u(W), e = 0; e < 256; e++) o[e] = e;
              for (e = 0; e < 256; e++) c = (c + o[e] + n.charCodeAt(e % n.length)) % 256,
              t = o[e],
              o[e] = o[c],
              o[c] = t;
              e = 0,
              c = 0;
              for (let u = 0; u < W.length; u++) e = (e + 1) % 256,
              c = (c + o[e]) % 256,
              t = o[e],
              o[e] = o[c],
              o[c] = t,
              r += String.fromCharCode(W.charCodeAt(u) ^ o[(o[e] + o[c]) % 256]);
              return r
            };
            f.ylsGMR = n,
            W = arguments,
            f.ijqwGI = !0
          }
          const r = undefined,
          e = n + o[0],
          d = W[e];
          return d ? t = d : (void 0 === f.hjMToF && (f.hjMToF = !0), t = f.ylsGMR(t, c), W[e] = t),
          t
        },
        f(W, n)
      }
      !function (W, n) {
        function o(W, n) {
          return f(n - - 228, W)
        }
        const c = W();
        for (; ; ) try {
          const W = undefined;
          if (
            - parseInt(o('VvSo', 205)) / 1 + - parseInt(o('u[po', 223)) / 2 + parseInt(o('O07E', 136)) / 3 + - parseInt(o('b1G3', 209)) / 4 * (parseInt(o('OJqi', 109)) / 5) + parseInt(o('BZul', 154)) / 6 + - parseInt(o('vFoV', 195)) / 7 * (parseInt(o('UHxI', 157)) / 8) + - parseInt(o('cM%3', 213)) / 9 === n
          ) break;
          c.push(c.shift())
        } catch (t) {
          c.push(c.shift())
        }
      }(d, 748346),
      n.Z = W => {
        const n = {
          PCLcH: function (W, n) {
            return W + n
          },
          BAEkj: function (W, n) {
            return W + n
          },
          akNPF: function (W, n) {
            return W + n
          },
          sUrPf: function (W, n) {
            return W + n
          },
          GrIgW: function (W, n) {
            return W + n
          },
          SrdeF: function (W, n) {
            return W + n
          },
          DdUKg: function (W, n) {
            return W + n
          },
          JgLFH: function (W, n) {
            return W + n
          },
          uyWqo: function (W, n) {
            return W + n
          },
          YakBp: function (W, n) {
            return W + n
          },
          OnuVs: function (W, n) {
            return W + n
          },
          gzVmI: function (W, n) {
            return W - n
          },
          MPLie: function (W, n) {
            return W % n
          },
          FLxBK: function (W, n) {
            return W % n
          },
          Mtiji: function (W, n) {
            return W % n
          },
          snIcG: function (W, n) {
            return W % n
          },
          tvGiV: function (W, n) {
            return W + n
          },
          xFglC: function (W, n) {
            return W % n
          },
          tPqmI: function (W, n) {
            return W % n
          },
          lsiAo: function (W, n) {
            return W % n
          },
          wbtJK: function (W, n) {
            return W - n
          },
          IwRoV: function (W, n) {
            return W % n
          },
          VeFsS: function (W, n) {
            return W - n
          },
          uILVm: function (W, n) {
            return W + n
          },
          sTErG: function (W, n) {
            return W + n
          },
          tDXHH: function (W, n) {
            return W % n
          },
          hNsvy: function (W, n) {
            return W % n
          },
          dLETq: function (W, n) {
            return W % n
          },
          lAgad: function (W, n) {
            return W + n
          },
          lHXAn: function (W, n) {
            return W - n
          },
          dhizR: function (W, n) {
            return W % n
          },
          ghgiS: function (W, n) {
            return W % n
          },
          KxnCY: function (W, n) {
            return W - n
          },
          IWyJr: function (W, n) {
            return W + n
          },
          mmFNd: d('wxjy', 702),
          rvfhp: function (W, n, o, c) {
            var o = r(297786);
            function e(n, t, r) {
                var e = null == n ? void 0 : o(n, t);
                return void 0 === e ? r : e
            }
     
            
            return e(n, o, c)
          },
          pjycC: d('9DRn', 766),
          lbqZW: function (W, n) {
            return W(n)
          },
          UMCrg: d('b1G3', 762)
        },
        u = {};
        function d(W, n) {
          return f(n - 361, W)
        }
        
        u[d('b1G3', 701)] = + new Date;
        
        var shasum = crypto.createHash('sha1')

        shasum.update([
            n['UMCrg'], // UUID
            u['time'], // TIME S
            endPoint, // ENDPOINT
            accountId || 0 // ACCOUNT ID
          ]['join']('\n')
          )
        const hashedData = shasum.digest('hex')


        return u[d('1KeL', 783)] = [
          d('9DRn', 712),
          hashedData,
          function (W) {
            function o(W, n) {
              return d(W, n - - 371)
            }
            return Math[o('j00X', 346)](
              n[o(')^]o', 414)](
                n[o('BCOV', 317)](
                  n[o('1uYd', 305)](
                    n[o('Q^yp', 352)](
                      n[o('P9^g', 367)](
                        n[o('09YD', 446)](
                          n[o('7cWK', 359)](
                            n[o('Sd!B', 432)](
                              n[o('dJyc', 443)](
                                n[o('BCOV', 321)](
                                  n[o('9DRn', 442)](
                                    n[o('6NKD', 328)](
                                      n[o('jRP#', 371)](
                                        n[o('b1G3', 347)](
                                          n[o('rMqx', 309)](
                                            n[o('1uYd', 343)](
                                              n[o('ceBJ', 383)](
                                                n[o(']@yO', 451)](
                                                  n[o('MvL1', 408)](
                                                    n[o('QX9d', 318)](
                                                      n[o('OJqi', 384)](
                                                        n[o('IfhZ', 447)](
                                                          n[o('oTle', 340)](
                                                            n[o('1uYd', 361)](
                                                              n[o('BCOV', 356)](
                                                                n[o('Hzpl', 374)](
                                                                  n[o('1KeL', 421)](
                                                                    W[n["MPLie"](15328, W["length"])]["charCodeAt"](0),
                                                                    119
                                                                  ),
                                                                  n[o('a*hE', 449)](
                                                                    W[n[o('Hzpl', 314)](14857, W[o('b1G3', 390)])][o('KnU4', 436)](0),
                                                                    121
                                                                  )
                                                                ),
                                                                n[o('O07E', 396)](W[16071 % W[o('VQMu', 335)]][o('Xgs%', 382)](0), 87)
                                                              ),
                                                              W[n[o('64by', 344)](16661, W[o('09YD', 448)])][o('QX9d', 385)](0) + 119
                                                            ),
                                                            n[o('dJyc', 373)](
                                                              W[n[o('1KeL', 365)](15209, W[o('MvL1', 332)])][o('7akr', 386)](0),
                                                              87
                                                            )
                                                          ),
                                                          n[o('09YD', 428)](W[16515 % W[o('A^HV', 438)]][o('VvSo', 406)](0), 102)
                                                        ),
                                                        n[o('BZul', 316)](
                                                          W[n[o('a*hE', 353)](15943, W[o('A^HV', 438)])][o('1KeL', 362)](0),
                                                          60
                                                        )
                                                      ),
                                                      n[o('A^HV', 426)](
                                                        W[n[o('9@bM', 422)](16563, W[o('6NKD', 364)])][o(')UMG', 304)](0),
                                                        67
                                                      )
                                                    ) + (
                                                      W[n[o('MvL1', 370)](16190, W[o('1uYd', 348)])][o('BCOV', 303)](0) - 149
                                                    ),
                                                    n[o('CCWO', 397)](
                                                      W[n[o('*!9i', 416)](14461, W[o('BCOV', 407)])][o('rMqx', 326)](0),
                                                      147
                                                    )
                                                  ),
                                                  n[o('7cWK', 425)](W[16416 % W[o('9@bM', 424)]][o('64by', 307)](0), 54)
                                                ),
                                                W[n[o('txbe', 342)](16934, W[o('oTle', 324)])][o('%NjL', 339)](0) - 57
                                              ),
                                              n[o('CCWO', 338)](
                                                W[n[o('rMqx', 403)](14539, W[o('9DRn', 350)])][o('09YD', 440)](0),
                                                89
                                              )
                                            ),
                                            W[15016 % W[o('Q^yp', 325)]][o('P9^g', 433)](0) - 61
                                          ) + n[o('IfhZ', 387)](
                                            W[n[o('7akr', 445)](14290, W[o('Am[W', 355)])][o('UHxI', 434)](0),
                                            101
                                          ),
                                          n[o('9@bM', 450)](W[14745 % W[o('u[po', 417)]][o('b1G3', 429)](0), 114)
                                        ),
                                        W[n[o('Q^yp', 409)](15733, W[o('BZul', 333)])][o('Am[W', 322)](0) - 110
                                      ),
                                      n[o(')UMG', 378)](
                                        W[n[o(')UMG', 404)](16362, W[o('VvSo', 313)])][o('%NjL', 339)](0),
                                        67
                                      )
                                    ) + n[o('rMqx', 410)](
                                      W[n[o('IfhZ', 319)](16305, W[o('Dumf', 405)])][o('VQMu', 351)](0),
                                      132
                                    ),
                                    W[15837 % W[o('9DRn', 350)]][o('oTle', 334)](0) + 133
                                  ),
                                  n[o('KnU4', 394)](
                                    W[n[o('u[po', 308)](16883, W[o('cM%3', 379)])][o('Xgs%', 382)](0),
                                    129
                                  )
                                ),
                                n[o('dJyc', 389)](W[14343 % W[o(')^]o', 430)]][o('BZul', 320)](0), 60)
                              ),
                              n[o('YmUN', 420)](
                                W[n[o('wxjy', 368)](15376, W[o('wxjy', 439)])][o('VQMu', 351)](0),
                                64
                              )
                            ),
                            W[n[o('O07E', 388)](15131, W[o('Q^yp', 325)])][o('BZul', 320)](0) - 142
                          ),
                          W[n[o('a*hE', 452)](16773, W[o('FK*@', 377)])][o('QX9d', 385)](0) + 117
                        ),
                        n[o('MvL1', 435)](W[15890 % W[o('b1G3', 390)]][o('VAly', 401)](0), 71)
                      ),
                      n[o('9DRn', 336)](
                        W[n[o('u[po', 418)](15991, W[o('MvL1', 332)])][o('P9^g', 433)](0),
                        71
                      )
                    ),
                    W[15644 % W[o('Dumf', 405)]][o('QX9d', 385)](0) - 85
                  ),
                  n[o('UHxI', 366)](
                    W[n[o('BCOV', 453)](15479, W[o('oTle', 324)])][o('IfhZ', 415)](0),
                    126
                  )
                ) + (
                  W[n[o('vFoV', 411)](14963, W[o('BCOV', 407)])][o('64by', 307)](0) + 125
                ) + n[o('1KeL', 381)](
                  W[n[o('dJyc', 315)](14656, W[o('A^HV', 438)])][o('FK*@', 349)](0),
                  117
                ),
                n[o('IfhZ', 380)](
                  W[n[o('MvL1', 345)](15587, W[o('BZul', 333)])][o('64by', 307)](0),
                  111
                )
              )
            ) [o('%NjL', 392)](16)
          }(hashedData),
          d('IfhZ', 677)
        ][d('Sd!B', 694)](':'),
        u
      }
    }

function e(t, n, e) {
    var r = 'undefined' != typeof window ? window : void 0 !== e.g ? e.g : 'undefined' != typeof self ? self : {
    };
    r.SENTRY_RELEASE = {
        id: '91ab031-2023-11-10'
    },
    r.SENTRY_RELEASES = r.SENTRY_RELEASES ||
    {
    },
    r.SENTRY_RELEASES['frontend@sentry'] = {
        id: '91ab031-2023-11-10'
    }
}

const o = {}

o.O = function (e, t, a, r) {
    if (!t) {
      for (var i = 1 / 0, n = 0; n < s.length; n++) {
        for (var t = s[n][0], a = s[n][1], r = s[n][2], o = !0, c = 0; c < t.length; c++) (!1 & r || i >= r) &&
        Object.keys(u.O).every((function (e) {
          return u.O[e](t[c])
        })) ? t.splice(c--, 1) : (o = !1, r < i && (i = r));
        if (o) {
          s.splice(n--, 1);
          var d = a();
          void 0 !== d &&
          (e = d)
        }
      }
      return e
    }
    r = r ||
    0;
    for (var n = s.length; n > 0 && s[n - 1][2] > r; n--) s[n] = s[n - 1];
    s[n] = [
      t,
      a,
      r
    ]
  },


  o.n = function (e) {
    var t = e &&
    e.__esModule ? function () {
        return e.default
    }
        : function () {
        return e
    };
    return u.d(t, {
        a: t
    }),
    t
}

function hashargs(accountId, endPoint, requestData, W) {

o.o = o
const t = {}

const N = {}
function u(s) {
    var a = t[s];
    if (void 0 !== a) return a.exports;
    var r = t[s] = {
    id: s,
    loaded: !1,
    exports: {
    }
    };
    return e(r.exports, r, r.exports, u),
    r.loaded = !0,
    r.exports
}
  W = {"id":833415,"loaded":false,"exports":{}}
  //accountId = 375831552 
  //endPoint = "/api2/v2/users/roxystyleztv"
  //requestData = {"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"env":{},"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json","accept":"application/json, text/plain, */*"},"baseURL":"https://onlyfans.com","params":{},"withCredentials":true,"maxRedirects":0,"method":"get","url":"/api2/v2/users/roxystyleztv"}

  console.log(W, N, u, accountId, endPoint)
  sign(W, N, u, accountId, endPoint)
  
  console.log(requestData)
  const res = N.Z(requestData)
  console.log(res)
  return res


}

const app = express();
const port = 3000;

app.use(express.json());

app.post('/runScript', (req, res) => {
    const { accountId, endPoint, requestData } = req.body;

    const result = hashargs(accountId, endPoint, JSON.parse(requestData));
    res.send(result);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});