/*!
 * Animations and front end JS
 */
! function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    e.m = t, e.c = n, e.d = function (t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 2)
}([function (t, e, n) {
    function i(t) {
        u.env() && (v(t.design) && d.on("__wf_design", t.design), v(t.preview) && d.on("__wf_preview", t.preview)), v(t.destroy) && d.on("__wf_destroy", t.destroy), t.ready && v(t.ready) && function (t) {
            if (b) return void t.ready();
            if (m.contains(h, t.ready)) return;
            h.push(t.ready)
        }(t)
    }

    function r(t) {
        v(t.design) && d.off("__wf_design", t.design), v(t.preview) && d.off("__wf_preview", t.preview), v(t.destroy) && d.off("__wf_destroy", t.destroy), t.ready && v(t.ready) && function (t) {
            h = m.filter(h, function (e) {
                return e !== t.ready
            })
        }(t)
    }

    function o(t, e) {
        var n = [],
            i = {};
        return i.up = m.throttle(function (t) {
            m.each(n, function (e) {
                e(t)
            })
        }), t && e && t.on(e, i.up), i.on = function (t) {
            "function" == typeof t && (m.contains(n, t) || n.push(t))
        }, i.off = function (t) {
            n = arguments.length ? m.filter(n, function (e) {
                return e !== t
            }) : []
        }, i
    }

    function a(t) {
        v(t) && t()
    }

    function s() {
        q && (q.reject(), d.off("load", q.resolve)), q = new f.Deferred, d.on("load", q.resolve)
    }
    var u = {},
        c = {},
        h = [],
        l = window.  || [],
        f = window.jQuery,
        d = f(window),
        p = f(document),
        v = f.isFunction,
        m = u._ = n(4),
        w = n(1) && f.tram,
        b = !1,
        g = !1;
    w.config.hideBackface = !1, w.config.keepInherited = !0, u.define = function (t, e, n) {
        c[t] && r(c[t]);
        var o = c[t] = e(f, m, n) || {};
        return i(o), o
    }, u.require = function (t) {
        return c[t]
    }, u.push = function (t) {
        b ? v(t) && t() : l.push(t)
    }, u.env = function (t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window. Editor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var y = navigator.userAgent.toLowerCase(),
        x = u.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        k = u.env.chrome = /chrome/.test(y) && /Google/.test(navigator.vendor) && parseInt(y.match(/chrome\/(\d+)\./)[1], 10),
        _ = u.env.ios = /(ipod|iphone|ipad)/.test(y);
    u.env.safari = /safari/.test(y) && !k && !_;
    var z;
    x && p.on("touchstart mousedown", function (t) {
        z = t.target
    }), u.validClick = x ? function (t) {
        return t === z || f.contains(t, z)
    } : function () {
        return !0
    };
    var E = "resize.  orientationchange.  load. ";
    u.resize = o(d, E), u.scroll = o(d, "scroll.  resize.  orientationchange.  load. "), u.redraw = o(), u.location = function (t) {
        window.location = t
    }, u.env() && (u.location = function () {}), u.ready = function () {
        b = !0, g ? (g = !1, m.each(c, i)) : m.each(h, a), m.each(l, a), u.resize.up()
    };
    var q;
    u.load = function (t) {
        q.then(t)
    }, u.destroy = function (t) {
        t = t || {}, g = !0, d.triggerHandler("__wf_destroy"), null != t.domready && (b = t.domready), m.each(c, r), u.resize.off(), u.scroll.off(), u.redraw.off(), h = [], l = [], "pending" === q.state() && s()
    }, f(u.ready), s(), t.exports = window.  = u
}, function (t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    window.tram = function (t) {
        function e(t, e) {
            return (new D.Bare).init(t, e)
        }

        function i(t) {
            return t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }

        function r(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function s(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var i = n;
            return Z.test(t) || !Q.test(t) ? i = parseInt(t, 10) : Q.test(t) && (i = 1e3 * parseFloat(t)), 0 > i && (i = 0), i == i ? i : n
        }

        function u(t) {
            X.debug && window && window.console.warn(t)
        }
        var c = function (t, e, i) {
                function r(t) {
                    return "object" == (void 0 === t ? "undefined" : n(t))
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {}

                function s(n, u) {
                    function c() {
                        var t = new h;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }

                    function h() {}
                    u === i && (u = n, n = Object), c.Bare = h;
                    var l, f = a[t] = n[t],
                        d = h[t] = c[t] = new a;
                    return d.constructor = c, c.mixin = function (e) {
                        return h[t] = c[t] = s(c, e)[t], c
                    }, c.open = function (t) {
                        if (l = {}, o(t) ? l = t.call(c, d, f, c, n) : r(t) && (l = t), r(l))
                            for (var i in l) e.call(l, i) && (d[i] = l[i]);
                        return o(d.init) || (d.init = n), c
                    }, c.open(u)
                }
                return s
            }("prototype", {}.hasOwnProperty),
            h = {
                ease: ["ease", function (t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + .25 * t)
                }],
                "ease-in": ["ease-in", function (t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r)
                }],
                "ease-out": ["ease-out", function (t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function (t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r)
                }],
                linear: ["linear", function (t, e, n, i) {
                    return n * t / i + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, i) {
                    return n * (t /= i) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, i) {
                    return -n * (t /= i) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, i) {
                    return n * (t /= i) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, i) {
                    return n * (t /= i) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, i) {
                    return -n * ((t = t / i - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, i) {
                    return n * (t /= i) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, i) {
                    return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, i) {
                    return n * Math.sin(t / i * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, i) {
                    return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, i) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, i) {
                    return t === i ? e + n : n * (1 - Math.pow(2, -10 * t / i)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, i) {
                    return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, i) {
                    return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, i) {
                    return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), n * (t /= i) * t * ((r + 1) * t - r) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), (t /= i / 2) < 1 ? n / 2 * t * t * ((1 + (r *= 1.525)) * t - r) + e : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
                }]
            },
            l = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            f = document,
            d = window,
            p = "bkwld-tram",
            v = /[\-\.0-9]/g,
            m = /[A-Z]/,
            w = "number",
            b = /^(rgb|#)/,
            g = /(em|cm|mm|in|pt|pc|px)$/,
            y = /(em|cm|mm|in|pt|pc|px|%)$/,
            x = /(deg|rad|turn)$/,
            k = /(all|none) 0s ease 0s/,
            _ = /^(width|height)$/,
            z = " ",
            E = f.createElement("a"),
            q = ["Webkit", "Moz", "O", "ms"],
            $ = ["-webkit-", "-moz-", "-o-", "-ms-"],
            A = function (t) {
                if (t in E.style) return {
                    dom: t,
                    css: t
                };
                var e, n, i = "",
                    r = t.split("-");
                for (e = 0; e < r.length; e++) i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
                for (e = 0; e < q.length; e++)
                    if ((n = q[e] + i) in E.style) return {
                        dom: n,
                        css: $[e] + t
                    }
            },
            j = e.support = {
                bind: Function.prototype.bind,
                transform: A("transform"),
                transition: A("transition"),
                backface: A("backface-visibility"),
                timing: A("transition-timing-function")
            };
        if (j.transition) {
            var M = j.timing.dom;
            if (E.style[M] = h["ease-in-back"][0], !E.style[M])
                for (var S in l) h[S][0] = l[S]
        }
        var O = e.frame = function () {
                var t = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
                return t && j.bind ? t.bind(d) : function (t) {
                    d.setTimeout(t, 16)
                }
            }(),
            T = e.now = function () {
                var t = d.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && j.bind ? e.bind(t) : Date.now || function () {
                    return +new Date
                }
            }(),
            L = c(function (e) {
                function r(t, e) {
                    var n = function (t) {
                            for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                                var r = t[e];
                                r && i.push(r)
                            }
                            return i
                        }(("" + t).split(z)),
                        i = n[0];
                    e = e || {};
                    var r = U[i];
                    if (!r) return u("Unsupported property: " + i);
                    if (!e.weak || !this.props[i]) {
                        var o = r[0],
                            a = this.props[i];
                        return a || (a = this.props[i] = new o.Bare), a.init(this.$el, n, r, e), a
                    }
                }

                function o(t, e, i) {
                    if (t) {
                        var o = void 0 === t ? "undefined" : n(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new C({
                            duration: t,
                            context: this,
                            complete: a
                        }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    h.call(this);
                                    break;
                                case "stop":
                                    c.call(this);
                                    break;
                                case "redraw":
                                    l.call(this);
                                    break;
                                default:
                                    r.call(this, t, i && i[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var u = 0;
                            d.call(this, t, function (t, e) {
                                t.span > u && (u = t.span), t.stop(), t.animate(e)
                            }, function (t) {
                                "wait" in t && (u = s(t.wait, 0))
                            }), f.call(this), u > 0 && (this.timer = new C({
                                duration: u,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var p = this,
                                v = !1,
                                m = {};
                            O(function () {
                                d.call(p, t, function (t) {
                                    t.active && (v = !0, m[t.name] = t.nextStyle)
                                }), v && p.$el.css(m)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function c(t) {
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                    var e;
                    "string" == typeof t ? (e = {}, e[t] = 1) : e = "object" == (void 0 === t ? "undefined" : n(t)) && null != t ? t : this.props, d.call(this, e, v), f.call(this)
                }

                function h() {
                    c.call(this), this.el.style.display = "none"
                }

                function l() {
                    this.el.offsetHeight
                }

                function f() {
                    var t, e, n = [];
                    this.upstream && n.push(this.upstream);
                    for (t in this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[j.transition.dom] = n)
                }

                function d(t, e, n) {
                    var o, a, s, u, c = e !== v,
                        h = {};
                    for (o in t) s = t[o], o in W ? (h.transform || (h.transform = {}), h.transform[o] = s) : (m.test(o) && (o = i(o)), o in U ? h[o] = s : (u || (u = {}), u[o] = s));
                    for (o in h) {
                        if (s = h[o], !(a = this.props[o])) {
                            if (!c) continue;
                            a = r.call(this, o)
                        }
                        e.call(this, a, s)
                    }
                    n && u && n.call(this, u)
                }

                function v(t) {
                    t.stop()
                }

                function w(t, e) {
                    t.set(e)
                }

                function b(t) {
                    this.$el.css(t)
                }

                function g(t, n) {
                    e[t] = function () {
                        return this.children ? function (t, e) {
                            var n, i = this.children.length;
                            for (n = 0; i > n; n++) t.apply(this.children[n], e);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                e.init = function (e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, X.keepInherited && !X.fallback) {
                        var n = G(this.el, "transition");
                        n && !k.test(n) && (this.upstream = n)
                    }
                    j.backface && X.hideBackface && Y(this.el, j.backface.css, "hidden")
                }, g("add", r), g("start", o), g("wait", function (t) {
                    t = s(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new C({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }), g("then", function (t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = a)) : u("No active transition timer. Use start() or wait() before then().")
                }), g("next", a), g("stop", c), g("set", function (t) {
                    c.call(this, t), d.call(this, t, w, b)
                }), g("show", function (t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), g("hide", h), g("redraw", l), g("destroy", function () {
                    c.call(this), t.removeData(this.el, p), this.$el = this.el = null
                })
            }),
            D = c(L, function (e) {
                function n(e, n) {
                    var i = t.data(e, p) || t.data(e, p, new L.Bare);
                    return i.el || i.init(e), n ? i.start(n) : i
                }
                e.init = function (e, i) {
                    var r = t(e);
                    if (!r.length) return this;
                    if (1 === r.length) return n(r[0], i);
                    var o = [];
                    return r.each(function (t, e) {
                        o.push(n(e, i))
                    }), this.children = o, this
                }
            }),
            F = c(function (t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }
                var i = 500,
                    r = "ease",
                    a = 0;
                t.init = function (t, e, n, o) {
                    this.$el = t, this.el = t[0];
                    var u = e[0];
                    n[2] && (u = n[2]), N[u] && (u = N[u]), this.name = u, this.type = n[1], this.duration = s(e[1], this.duration, i), this.ease = function (t, e, n) {
                        return void 0 !== e && (n = e), t in h ? t : n
                    }(e[2], this.ease, r), this.delay = s(e[3], this.delay, a), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = _.test(this.name), this.unit = o.unit || this.unit || X.defaultUnit, this.angle = o.angle || this.angle || X.defaultAngle, X.fallback || o.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + z + this.duration + "ms" + ("ease" != this.ease ? z + h[this.ease][0] : "") + (this.delay ? z + this.delay + "ms" : ""))
                }, t.set = function (t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function (t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function (t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new P({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function () {
                    return G(this.el, this.name)
                }, t.update = function (t) {
                    Y(this.el, this.name, t)
                }, t.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Y(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function (t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, r = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case w:
                            if (r) return t;
                            if (a && "" === t.replace(v, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case b:
                            if (a) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : function (t) {
                                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                }(t)
                            }
                            i = "hex or rgb string";
                            break;
                        case g:
                            if (r) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case y:
                            if (r) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case x:
                            if (r) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case "unitless":
                            if (r) return t;
                            if (a && y.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function (t, e) {
                        u("Type warning: Expected: [" + t + "] Got: [" + (void 0 === e ? "undefined" : n(e)) + "] " + e)
                    }(i, t), t
                }, t.redraw = function () {
                    this.el.offsetHeight
                }
            }),
            R = c(F, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b))
                }
            }),
            B = c(F, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function () {
                    return this.$el[this.name]()
                }, t.update = function (t) {
                    this.$el[this.name](t)
                }
            }),
            I = c(F, function (t, e) {
                function n(t, e) {
                    var n, i, r, o, a;
                    for (n in t) r = (o = W[n])[0], i = o[1] || n, a = this.convert(t[n], r), e.call(this, i, a, r)
                }
                t.init = function () {
                    e.init.apply(this, arguments), this.current || (this.current = {}, W.perspective && X.perspective && (this.current.perspective = X.perspective, Y(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function (t) {
                    n.call(this, t, function (t, e) {
                        this.current[t] = e
                    }), Y(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function (t) {
                    var e = this.values(t);
                    this.tween = new H({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, i = {};
                    for (n in this.current) i[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(i)
                }, t.fallback = function (t) {
                    var e = this.values(t);
                    this.tween = new H({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function () {
                    Y(this.el, this.name, this.style(this.current))
                }, t.style = function (t) {
                    var e, n = "";
                    for (e in t) n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function (t) {
                    var e, i = {};
                    return n.call(this, t, function (t, n, r) {
                        i[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, r))
                    }), i
                }
            }),
            P = c(function (e) {
                function n() {
                    var t, e, i, r = s.length;
                    if (r)
                        for (O(n), e = T(), t = r; t--;)(i = s[t]) && i.render(e)
                }
                var i = {
                    ease: h.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function (t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || i.ease;
                    h[e] && (e = h[e][1]), "function" != typeof e && (e = i.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        r = t.to;
                    void 0 === n && (n = i.from), void 0 === r && (r = i.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof r ? (this.begin = n, this.change = r - n) : this.format(r, n), this.value = this.begin + this.unit, this.start = T(), !1 !== t.autoplay && this.play()
                }, e.play = function () {
                    this.active || (this.start || (this.start = T()), this.active = !0, function (t) {
                        1 === s.push(t) && O(n)
                    }(this))
                }, e.stop = function () {
                    this.active && (this.active = !1, function (e) {
                        var n, i = t.inArray(e, s);
                        i >= 0 && (n = s.slice(i + 1), s.length = i, n.length && (s = s.concat(n)))
                    }(this))
                }, e.render = function (t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var i = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? function (t, e, n) {
                            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, i) : function (t) {
                            return Math.round(t * c) / c
                        }(this.begin + i * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function (t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = r(e), this.endRGB = r(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(v, "");
                        n !== t.replace(v, "") && function (t, e, n) {
                            u("Units do not match [" + t + "]: " + e + ", " + n)
                        }("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var s = [],
                    c = 1e3
            }),
            C = c(P, function (t) {
                t.init = function (t) {
                    this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
                }, t.render = function (t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            H = c(P, function (t, e) {
                t.init = function (t) {
                    this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current;
                    var e, n;
                    for (e in t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new P({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function (t) {
                    var e, n, i = !1;
                    for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, i = !0);
                    return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function () {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            X = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !j.transition,
                agentTests: []
            };
        e.fallback = function (t) {
            if (!j.transition) return X.fallback = !0;
            X.agentTests.push("(" + t + ")");
            var e = new RegExp(X.agentTests.join("|"), "i");
            X.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
            return new P(t)
        }, e.delay = function (t, e, n) {
            return new C({
                complete: e,
                duration: t,
                context: n
            })
        }, t.fn.tram = function (t) {
            return e.call(null, this, t)
        };
        var Y = t.style,
            G = t.css,
            N = {
                transform: j.transform && j.transform.css
            },
            U = {
                color: [R, b],
                background: [R, b, "background-color"],
                "outline-color": [R, b],
                "border-color": [R, b],
                "border-top-color": [R, b],
                "border-right-color": [R, b],
                "border-bottom-color": [R, b],
                "border-left-color": [R, b],
                "border-width": [F, g],
                "border-top-width": [F, g],
                "border-right-width": [F, g],
                "border-bottom-width": [F, g],
                "border-left-width": [F, g],
                "border-spacing": [F, g],
                "letter-spacing": [F, g],
                margin: [F, g],
                "margin-top": [F, g],
                "margin-right": [F, g],
                "margin-bottom": [F, g],
                "margin-left": [F, g],
                padding: [F, g],
                "padding-top": [F, g],
                "padding-right": [F, g],
                "padding-bottom": [F, g],
                "padding-left": [F, g],
                "outline-width": [F, g],
                opacity: [F, w],
                top: [F, y],
                right: [F, y],
                bottom: [F, y],
                left: [F, y],
                "font-size": [F, y],
                "text-indent": [F, y],
                "word-spacing": [F, y],
                width: [F, y],
                "min-width": [F, y],
                "max-width": [F, y],
                height: [F, y],
                "min-height": [F, y],
                "max-height": [F, y],
                "line-height": [F, "unitless"],
                "scroll-top": [B, w, "scrollTop"],
                "scroll-left": [B, w, "scrollLeft"]
            },
            W = {};
        j.transform && (U.transform = [I], W = {
            x: [y, "translateX"],
            y: [y, "translateY"],
            rotate: [x],
            rotateX: [x],
            rotateY: [x],
            scale: [w],
            scaleX: [w],
            scaleY: [w],
            skew: [x],
            skewX: [x],
            skewY: [x]
        }), j.transform && j.backface && (W.z = [y, "translateZ"], W.rotateZ = [x], W.scaleZ = [w], W.perspective = [g]);
        var Z = /ms/,
            Q = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function (t, e, n) {
    n(3), n(5), n(6), t.exports = n(7)
}, function (t, e, n) {
    var i = n(0);
    i.define("brand", t.exports = function (t) {
        function e() {
            var t = a.children(s),
                e = t.length && t.get(0) === n,
                r = i.env("editor");
            e ? r && t.remove() : (t.length && t.remove(), r || a.append(n))
        }
        var n, r = {},
            o = t("html"),
            a = t("body"),
            s = ".w- -badge",
            u = window.location,
            c = /PhantomJS/i.test(navigator.userAgent);
        return r.ready = function () {
            var i = o.attr("data-wf-status"),
                r = o.attr("data-wf-domain") || "";
            /\. \.io$/i.test(r) && u.hostname !== r && (i = !0), i && !c && (n = n || function () {
                var e = t('<a class="w- -badge"></a>').attr("href", "https:// .com?utm_campaign=brandjs"),
                    n = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/ -badge-icon.60efbf6ec9.svg").css({
                        marginRight: "8px",
                        width: "16px"
                    }),
                    i = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/ -badge-text.6faa6a38cd.svg");
                return e.append(n, i), e[0]
            }(), e(), setTimeout(e, 500))
        }, r
    })
}, function (t, e, n) {
    var i = window.$,
        r = n(1) && i.tram;
    /*!
     *  ._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle ( )
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function () {
        var t = {};
        t.VERSION = "1.6.0- ";
        var e = {},
            n = Array.prototype,
            i = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            s = (n.concat, i.toString, i.hasOwnProperty),
            u = n.forEach,
            c = n.map,
            h = (n.reduce, n.reduceRight, n.filter),
            l = (n.every, n.some),
            f = n.indexOf,
            d = (n.lastIndexOf, Array.isArray, Object.keys),
            p = (o.bind, t.each = t.forEach = function (n, i, r) {
                if (null == n) return n;
                if (u && n.forEach === u) n.forEach(i, r);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (i.call(r, n[o], o, n) === e) return
                } else {
                    var s = t.keys(n);
                    for (o = 0, a = s.length; o < a; o++)
                        if (i.call(r, n[s[o]], s[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function (t, e, n) {
            var i = [];
            return null == t ? i : c && t.map === c ? t.map(e, n) : (p(t, function (t, r, o) {
                i.push(e.call(n, t, r, o))
            }), i)
        }, t.find = t.detect = function (t, e, n) {
            var i;
            return v(t, function (t, r, o) {
                if (e.call(n, t, r, o)) return i = t, !0
            }), i
        }, t.filter = t.select = function (t, e, n) {
            var i = [];
            return null == t ? i : h && t.filter === h ? t.filter(e, n) : (p(t, function (t, r, o) {
                e.call(n, t, r, o) && i.push(t)
            }), i)
        };
        var v = t.some = t.any = function (n, i, r) {
            i || (i = t.identity);
            var o = !1;
            return null == n ? o : l && n.some === l ? n.some(i, r) : (p(n, function (t, n, a) {
                if (o || (o = i.call(r, t, n, a))) return e
            }), !!o)
        };
        t.contains = t.include = function (t, e) {
            return null != t && (f && t.indexOf === f ? -1 != t.indexOf(e) : v(t, function (t) {
                return t === e
            }))
        }, t.delay = function (t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, n)
            }, e)
        }, t.defer = function (e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function (t) {
            var e, n, i;
            return function () {
                e || (e = !0, n = arguments, i = this, r.frame(function () {
                    e = !1, t.apply(i, n)
                }))
            }
        }, t.debounce = function (e, n, i) {
            var r, o, a, s, u, c = function c() {
                var h = t.now() - s;
                h < n ? r = setTimeout(c, n - h) : (r = null, i || (u = e.apply(a, o), a = o = null))
            };
            return function () {
                a = this, o = arguments, s = t.now();
                var h = i && !r;
                return r || (r = setTimeout(c, n)), h && (u = e.apply(a, o), a = o = null), u
            }
        }, t.defaults = function (e) {
            if (!t.isObject(e)) return e;
            for (var n = 1, i = arguments.length; n < i; n++) {
                var r = arguments[n];
                for (var o in r) void 0 === e[o] && (e[o] = r[o])
            }
            return e
        }, t.keys = function (e) {
            if (!t.isObject(e)) return [];
            if (d) return d(e);
            var n = [];
            for (var i in e) t.has(e, i) && n.push(i);
            return n
        }, t.has = function (t, e) {
            return s.call(t, e)
        }, t.isObject = function (t) {
            return t === Object(t)
        }, t.now = Date.now || function () {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var m = /(.)^/,
            w = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            b = /\\|'|\r|\n|\u2028|\u2029/g,
            g = function (t) {
                return "\\" + w[t]
            };
        return t.template = function (e, n, i) {
            !n && i && (n = i), n = t.defaults({}, n, t.templateSettings);
            var r = RegExp([(n.escape || m).source, (n.interpolate || m).source, (n.evaluate || m).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(r, function (t, n, i, r, s) {
                return a += e.slice(o, s).replace(b, g), o = s + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"), t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var s = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var u = function (e) {
                    return s.call(this, e, t)
                },
                c = n.variable || "obj";
            return u.source = "function(" + c + "){\n" + a + "}", u
        }, t
    }()
}, function (t, e, n) {
    var i = n(0);
    i.define("links", t.exports = function (t, e) {
        function n() {
            var t = c.scrollTop(),
                n = c.height();
            e.each(a, function (e) {
                var i = e.link,
                    o = e.sec,
                    a = o.offset().top,
                    s = o.outerHeight(),
                    u = .5 * n,
                    c = o.is(":visible") && a + s - u >= t && a + u <= t + n;
                e.active !== c && (e.active = c, r(i, d, c))
            })
        }

        function r(t, e, n) {
            var i = t.hasClass(e);
            n && i || (n || i) && (n ? t.addClass(e) : t.removeClass(e))
        }
        var o, a, s, u = {},
            c = t(window),
            h = i.env(),
            l = window.location,
            f = document.createElement("a"),
            d = "w--current",
            p = /^#[\w:.-]+$/,
            v = /index\.(html|php)$/,
            m = /\/$/;
        return u.ready = u.design = u.preview = function () {
            o = h && i.env("design"), s = i.env("slug") || l.pathname || "", i.scroll.off(n), a = [];
            for (var e = document.links, u = 0; u < e.length; ++u) ! function (e) {
                var n = o && e.getAttribute("href-disabled") || e.getAttribute("href");
                if (f.href = n, !(n.indexOf(":") >= 0)) {
                    var i = t(e);
                    if (0 === n.indexOf("#") && p.test(n)) {
                        var u = t(n);
                        u.length && a.push({
                            link: i,
                            sec: u,
                            active: !1
                        })
                    } else if ("#" !== n && "" !== n) {
                        var c = f.href === l.href || n === s || v.test(n) && m.test(s);
                        r(i, d, c)
                    }
                }
            }(e[u]);
            a.length && (i.scroll.on(n), n())
        }, u
    })
}, function (t, e, n) {
    var i = n(0);
    i.define("scroll", t.exports = function (t) {
        function e(e, n) {
            if (s.test(e)) {
                var u = t("#" + e);
                if (u.length) {
                    if (n && (n.preventDefault(), n.stopPropagation()), o.hash !== e && a && a.pushState && (!i.env.chrome || "file:" !== o.protocol)) {
                        (a.state && a.state.hash) !== e && a.pushState({
                            hash: e
                        }, "", "#" + e)
                    }
                    var c = i.env("editor") ? ".w-editor-body" : "body",
                        h = t("header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"),
                        l = "fixed" === h.css("position") ? h.outerHeight() : 0;
                    r.setTimeout(function () {
                        ! function (e, n) {
                            var i = t(r).scrollTop(),
                                o = e.offset().top - n;
                            if ("mid" === e.data("scroll")) {
                                var a = t(r).height() - n,
                                    s = e.outerHeight();
                                s < a && (o -= Math.round((a - s) / 2))
                            }
                            var u = 1;
                            t("body").add(e).each(function () {
                                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                !isNaN(e) && (0 === e || e > 0) && (u = e)
                            }), Date.now || (Date.now = function () {
                                return (new Date).getTime()
                            });
                            var c = Date.now(),
                                h = r.requestAnimationFrame || r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame || function (t) {
                                    r.setTimeout(t, 15)
                                },
                                l = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * u;
                            ! function t() {
                                var e = Date.now() - c;
                                r.scroll(0, function (t, e, n, i) {
                                    if (n > i) return e;
                                    return t + (e - t) * function (t) {
                                        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                                    }(n / i)
                                }(i, o, e, l)), e <= l && h(t)
                            }()
                        }(u, l)
                    }, n ? 0 : 300)
                }
            }
        }
        var n = t(document),
            r = window,
            o = r.location,
            a = function () {
                try {
                    return Boolean(r.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : r.history,
            s = /^[a-zA-Z0-9][\w:.-]*$/;
        return {
            ready: function () {
                o.hash && e(o.hash.substring(1));
                var r = o.href.split("#")[0];
                n.on("click", "a", function (n) {
                    if (!(i.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link")))
                        if ("#" !== this.getAttribute("href")) {
                            var o = this.href.split("#"),
                                a = o[0] === r ? o[1] : null;
                            a && e(a, n)
                        } else n.preventDefault()
                })
            }
        }
    })
}, function (t, e, n) {
    n(0).define("touch", t.exports = function (t) {
        function e(e, n, i) {
            var r = t.Event(e, {
                originalEvent: n
            });
            t(n.target).trigger(r, i)
        }
        var n = {},
            i = !document.addEventListener,
            r = window.getSelection;
        return i && (t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }), n.init = function (n) {
            return i ? null : (n = "string" == typeof n ? t(n).get(0) : n) ? new function (t) {
                function n(t) {
                    var e = t.touches;
                    e && e.length > 1 || (h = !0, l = !1, e ? (f = !0, s = e[0].clientX, u = e[0].clientY) : (s = t.clientX, u = t.clientY), c = s)
                }

                function i(t) {
                    if (h) {
                        if (f && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
                        var n = t.touches,
                            i = n ? n[0].clientX : t.clientX,
                            o = n ? n[0].clientY : t.clientY,
                            p = i - c;
                        c = i, Math.abs(p) > d && r && "" === String(r()) && (e("swipe", t, {
                            direction: p > 0 ? "right" : "left"
                        }), a()), (Math.abs(i - s) > 10 || Math.abs(o - u) > 10) && (l = !0)
                    }
                }

                function o(t) {
                    if (h) {
                        if (h = !1, f && "mouseup" === t.type) return t.preventDefault(), t.stopPropagation(), void(f = !1);
                        l || e("tap", t)
                    }
                }

                function a() {
                    h = !1
                }
                var s, u, c, h = !1,
                    l = !1,
                    f = !1,
                    d = Math.min(Math.round(.04 * window.innerWidth), 40);
                t.addEventListener("touchstart", n, !1), t.addEventListener("touchmove", i, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", a, !1), t.addEventListener("mousedown", n, !1), t.addEventListener("mousemove", i, !1), t.addEventListener("mouseup", o, !1), t.addEventListener("mouseout", a, !1), this.destroy = function () {
                    t.removeEventListener("touchstart", n, !1), t.removeEventListener("touchmove", i, !1), t.removeEventListener("touchend", o, !1), t.removeEventListener("touchcancel", a, !1), t.removeEventListener("mousedown", n, !1), t.removeEventListener("mousemove", i, !1), t.removeEventListener("mouseup", o, !1), t.removeEventListener("mouseout", a, !1), t = null
                }
            }(n) : null
        }, n.instance = n.init(document), n
    })
}]);
