(function(t) {
  function e(e) {
    for (
      var s, r, o = e[0], c = e[1], u = e[2], p = 0, m = [];
      p < o.length;
      p++
    )
      (r = o[p]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && m.push(a[r][0]),
        (a[r] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
    l && l(e);
    while (m.length) m.shift()();
    return i.push.apply(i, u || []), n();
  }
  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], s = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== a[c] && (s = !1);
      }
      s && (i.splice(e--, 1), (t = r((r.s = n[0]))));
    }
    return t;
  }
  var s = {},
    a = { app: 0 },
    i = [];
  function r(e) {
    if (s[e]) return s[e].exports;
    var n = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = s),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          r.d(
            n,
            s,
            function(e) {
              return t[e];
            }.bind(null, s)
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/todolist/dist/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var u = 0; u < o.length; u++) e(o[u]);
  var l = c;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("cd49");
  },
  cd49: function(t, e, n) {
    "use strict";
    n.r(e);
    var s = n("2b0e"),
      a = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("link", {
              attrs: {
                href:
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css",
                rel: "stylesheet",
                integrity:
                  "sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x",
                crossorigin: "anonymous",
              },
            }),
            n("router-view"),
          ],
          1
        );
      },
      i = [],
      r = n("2877"),
      o = {},
      c = Object(r["a"])(o, a, i, !1, null, null, null),
      u = c.exports,
      l = n("8c4f"),
      p = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "container" },
          [
            n("date-picker", {
              attrs: { msg: "Welcome to Your Vue.js + TypeScript App" },
            }),
            n("input-box"),
            n("check-list"),
          ],
          1
        );
      },
      m = [],
      d = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "row mt-2" }, [
          n("div", { staticClass: "col-4" }, [
            n("input", {
              staticClass: "form-control",
              attrs: { type: "date" },
              on: {
                input: function(e) {
                  t.loadAssignments({
                    date: new Date(e.target.value),
                    page: t.page,
                  });
                },
              },
            }),
          ]),
        ]);
      },
      g = [],
      f = n("9ab4"),
      b = n("2f62"),
      v = {
        computed: Object(f["a"])({}, Object(b["c"])(["currentDate", "page"])),
        methods: Object(f["a"])({}, Object(b["b"])(["loadAssignments"])),
      },
      h = v,
      O = Object(r["a"])(h, d, g, !1, null, null, null),
      y = O.exports,
      j = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "input-group my-3" }, [
          n("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: t.description,
                expression: "description",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text" },
            domProps: { value: t.description },
            on: {
              input: function(e) {
                e.target.composing || (t.description = e.target.value);
              },
            },
          }),
          n(
            "button",
            {
              staticClass: "btn btn-outline-primary",
              attrs: { type: "button", "data-mdb-ripple-color": "dark" },
              on: {
                click: function(e) {
                  t.addAssignment(t.createAssignment());
                },
              },
            },
            [t._v(" add assignment ")]
          ),
        ]);
      },
      D = [],
      A = {
        name: "InputBox",
        data: function() {
          return { description: null };
        },
        methods: Object(f["a"])(
          Object(f["a"])({}, Object(b["b"])(["addAssignment"])),
          {
            createAssignment: function() {
              return {
                description: this.description,
                isImportant: !1,
                deadline: null,
                isDone: !1,
              };
            },
          }
        ),
      },
      _ = A,
      P = Object(r["a"])(_, j, D, !1, null, null, null),
      x = P.exports,
      k = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "row justify-content-center" },
          [
            n("pagination", { staticClass: "col-4" }),
            n("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.pageSize,
                  expression: "pageSize",
                },
              ],
              attrs: { type: "range", min: "1", max: "10", step: "1" },
              domProps: { value: t.pageSize },
              on: {
                __r: function(e) {
                  t.pageSize = e.target.value;
                },
              },
            }),
            n(
              "ul",
              { staticClass: "object administrator-checkbox-list" },
              [
                t._l(t.assignments, function(t, e) {
                  return n("assignment-row", {
                    key: e,
                    attrs: { assignment: t, index: e },
                  });
                }),
                n(
                  "button",
                  {
                    staticClass: "col btn btn-outline-primary",
                    attrs: { type: "button", "data-mdb-ripple-color": "dark" },
                    on: {
                      click: function(e) {
                        return t.save();
                      },
                    },
                  },
                  [t._v(" Save ")]
                ),
              ],
              2
            ),
          ],
          1
        );
      },
      w = [],
      C = n("bc3a"),
      S = n.n(C),
      E = {
        getNoDateAssignments: function() {
          return S.a.get(
            "http://" +
              Object({ NODE_ENV: "production", BASE_URL: "/todolist/dist/" })
                .VUE_APP_SERVER +
              "/api/assignments/date/"
          );
        },
        getAssignmentsByDate: function(t, e, n) {
          return S.a.get(
            "http://" +
              Object({ NODE_ENV: "production", BASE_URL: "/todolist/dist/" })
                .VUE_APP_SERVER +
              "/api/assignments/date/" +
              t.getTime(),
            { params: { start: e, count: n } }
          );
        },
        postAssignments: function(t) {
          return S.a.put(
            "http://" +
              Object({ NODE_ENV: "production", BASE_URL: "/todolist/dist/" })
                .VUE_APP_SERVER +
              "/api/assignments",
            t
          );
        },
      },
      N = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "row my-2 justify-content-center" }, [
          n("div", { staticClass: "col-4" }, [
            n("i", {
              staticClass: "mx-2 fas fa-thumbtack",
              style: [t.assignment.isImportant && t.thumbtackStyle],
              on: {
                click: function(e) {
                  return t.markImportantAssignment(t.index);
                },
              },
            }),
            n("input", {
              staticClass: "form-check-input",
              attrs: { type: "checkbox" },
              domProps: { checked: t.assignment.isDone },
              on: {
                click: function(e) {
                  return t.markDone(t.index);
                },
              },
            }),
            n(
              "span",
              {
                staticClass: "mx-2",
                staticStyle: { display: "inline", width: "fit-content" },
                style: {
                  "text-decoration": t.assignment.isDone
                    ? "line-through"
                    : null,
                },
              },
              [t._v(t._s(t.assignment.description))]
            ),
          ]),
          n("div", { staticClass: "col-4" }, [
            n("input", {
              staticClass: "form-control",
              attrs: { type: "datetime-local" },
              domProps: {
                value: t.assignment.deadline
                  ? t.getTime(new Date(t.assignment.deadline))
                  : "",
              },
              on: {
                input: function(e) {
                  t.setDeadline({
                    index: t.index,
                    deadline: new Date(e.target.value),
                  });
                },
              },
            }),
          ]),
        ]);
      },
      I = [],
      T = "en-GB",
      R = {
        name: "AssignmentRow",
        props: ["assignment", "index"],
        data: function() {
          return { thumbtackStyle: { transform: "rotate(-45deg)" } };
        },
        methods: Object(f["a"])(
          Object(f["a"])(
            {},
            Object(b["b"])([
              "setDeadline",
              "markDone",
              "markImportantAssignment",
            ])
          ),
          {
            getTime: function(t) {
              return (
                t.toISOString().split("T")[0] +
                "T" +
                t.toLocaleTimeString(T).slice(0, 5)
              );
            },
          }
        ),
      },
      V = R,
      B = Object(r["a"])(V, N, I, !1, null, null, null),
      M = B.exports,
      $ = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "nav",
          { attrs: { "aria-label": "Page navigation example" } },
          [
            n(
              "ul",
              { staticClass: "pagination pg-blue" },
              [
                n(
                  "li",
                  {
                    staticClass: "page-item",
                    on: {
                      click: function(e) {
                        t.start = Math.max(t.start - 1, 1);
                      },
                    },
                  },
                  [n("a", { staticClass: "page-link" }, [t._v("Previous")])]
                ),
                t._l(t.pages, function(e) {
                  return n(
                    "li",
                    {
                      key: e,
                      staticClass: "page-item",
                      on: {
                        click: function(n) {
                          return t.loadAssignments({
                            date: t.currentDate,
                            page: e - 1,
                          });
                        },
                      },
                    },
                    [n("a", { staticClass: "page-link" }, [t._v(t._s(e))])]
                  );
                }),
                n(
                  "li",
                  {
                    staticClass: "page-item",
                    on: {
                      click: function(e) {
                        t.start++;
                      },
                    },
                  },
                  [n("a", { staticClass: "page-link" }, [t._v("Next")])]
                ),
              ],
              2
            ),
          ]
        );
      },
      z = [],
      L = {
        data() {
          return { start: 1 };
        },
        computed: {
          ...Object(b["c"])(["currentDate"]),
          pages() {
            return [...new Array(3)].map((t, e) => e + this.start);
          },
        },
        methods: { ...Object(b["b"])(["setPage", "loadAssignments"]) },
      },
      U = L,
      H = Object(r["a"])(U, $, z, !1, null, null, null),
      Y = H.exports,
      G = {
        name: "CheckList",
        components: { AssignmentRow: M, Pagination: Y },
        data: function() {
          return { message: null };
        },
        methods: Object(f["a"])(
          Object(f["a"])(
            {},
            Object(b["b"])([
              "setAssignmentsPerPage",
              "markImportantAssignment",
              "markDone",
              "setDeadline",
              "setNoDeadlineAssignments",
            ])
          ),
          {
            isDue: function(t) {
              return (
                t &&
                t.getHours() === new Date().getHours() &&
                t.getMinutes() === new Date().getMinutes()
              );
            },
            notify: function() {
              var t = this;
              this.assignments.forEach(function(e) {
                t.isDue(new Date(e.deadline)) &&
                  t.$alertify.message("" + e.description);
              });
            },
            save: function() {
              return Object(f["b"])(this, void 0, void 0, function() {
                var t = this;
                return Object(f["c"])(this, function(e) {
                  return (
                    this.assignments.forEach(function(e) {
                      return Object(f["b"])(t, void 0, void 0, function() {
                        return Object(f["c"])(this, function(t) {
                          switch (t.label) {
                            case 0:
                              return [4, E.postAssignments(e)];
                            case 1:
                              return t.sent(), [2];
                          }
                        });
                      });
                    }),
                    [2]
                  );
                });
              });
            },
          }
        ),
        computed: Object(f["a"])(
          Object(f["a"])(
            {},
            Object(b["c"])(["assignments", "currentDate", "assignmentsPerPage"])
          ),
          {
            pageSize: {
              get: function() {
                return this.assignmentsPerPage;
              },
              set: function(t) {
                this.setAssignmentsPerPage(Number(t));
              },
            },
          }
        ),
        created: function() {
          return Object(f["b"])(this, void 0, void 0, function() {
            var t,
              e = this;
            return Object(f["c"])(this, function(n) {
              switch (n.label) {
                case 0:
                  return (
                    setTimeout(function() {
                      e.notify(), setInterval(e.notify, 6e4);
                    }, 1e3 * (60 - new Date().getSeconds())),
                    (t = this.setNoDeadlineAssignments),
                    [4, E.getNoDateAssignments()]
                  );
                case 1:
                  return t.apply(this, [n.sent().data]), [2];
              }
            });
          });
        },
      },
      J = G,
      W = Object(r["a"])(J, k, w, !1, null, null, null),
      X = W.exports,
      Z = s["a"].extend({
        name: "Home",
        components: { DatePicker: y, InputBox: x, CheckList: X },
      }),
      q = Z,
      F = Object(r["a"])(q, p, m, !1, null, null, null),
      K = F.exports;
    s["a"].use(l["a"]);
    var Q = [{ path: "/", name: "Home", component: K }],
      tt = new l["a"]({ routes: Q }),
      et = tt;
    s["a"].use(b["a"]);
    var nt = new b["a"].Store({
        state: {
          assignments: [],
          noDeadlineAssignments: [],
          currentDate: new Date(),
          page: 0,
          assignmentsPerPage: 3,
        },
        mutations: {
          loadAssignments: function(t, e) {
            var n = e.date,
              s = e.page;
            return Object(f["b"])(this, void 0, void 0, function() {
              var e, a, i;
              return Object(f["c"])(this, function(r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t.page = s),
                      (t.currentDate = n),
                      (e = t),
                      [
                        4,
                        E.getAssignmentsByDate(
                          n,
                          s * t.assignmentsPerPage,
                          t.assignmentsPerPage
                        ),
                      ]
                    );
                  case 1:
                    return (
                      (e.assignments = r.sent().data),
                      (a = t),
                      [4, E.getNoDateAssignments()]
                    );
                  case 2:
                    return (
                      (a.noDeadlineAssignments = r.sent().data),
                      (i = t.assignments).push.apply(
                        i,
                        t.noDeadlineAssignments
                      ),
                      [2]
                    );
                }
              });
            });
          },
          setNoDeadlineAssignments: function(t, e) {
            t.noDeadlineAssignments = e;
          },
          setAssignmentsPerPage: function(t, e) {
            t.assignmentsPerPage = e;
          },
          setAssignments: function(t, e) {
            var n;
            (t.assignments = e),
              (n = t.assignments).push.apply(n, t.noDeadlineAssignments);
          },
          addAssignment: function(t, e) {
            t.assignments.push(e);
          },
          markDone: function(t, e) {
            var n = t.assignments;
            n[e].isDone = !n[e].isDone;
          },
          setDeadline: function(t, e) {
            var n = e.index,
              s = e.deadline;
            t.assignments[n].deadline = s;
          },
          markImportantAssignment: function(t, e) {
            var n = t.assignments;
            (n[e].isImportant = !n[e].isImportant),
              n.sort(function(t, e) {
                return t.isImportant === e.isImportant
                  ? 0
                  : t.isImportant
                  ? -1
                  : 1;
              });
          },
        },
      }),
      st = n("50cf");
    (s["a"].config.productionTip = !1),
      s["a"].use(st["a"], {
        notifier: { delay: 5, position: "top-right", closeButton: !1 },
      }),
      s["a"].use(b["a"]),
      new s["a"]({
        store: nt,
        router: et,
        render: function(t) {
          return t(u);
        },
      }).$mount("#app");
  },
});
//# sourceMappingURL=app.b5b01d36.js.map
