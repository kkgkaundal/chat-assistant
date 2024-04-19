/*! For license information please see bundle.js.LICENSE.txt */
;(() => {
  'use strict'
  var e = {
      778: (e, n, t) => {
        t.d(n, { A: () => s })
        var r = t(601),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o())
        i.push([
          e.id,
          '@media only screen and (max-width: 600px) {\n  /* Style for chat button */\n  #chatBtn {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    background-color: green;\n    color: white;\n    border: none;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    font-size: 18px;\n    cursor: pointer;\n  }\n\n  /* Style for chat popup */\n  .chat-popup {\n    display: block;\n    position: fixed;\n    bottom: 90px;\n    right: 20px;\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    width: 300px;\n    height: 425px;\n    background-color: white;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  /* Style for chat messages */\n  .chat-messages {\n    height: 300px;\n    overflow-y: auto;\n    padding: 10px;\n    border-bottom: 1px solid #ccc;\n    display: flex;\n    flex-direction: column;\n  }\n\n  /* Style for message input */\n  #messageInput {\n    width: calc(100% - 80px);\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n\n  .input-box {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    margin: 10px;\n  }\n\n  /* Style for send button */\n  #sendBtn {\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 20px;\n    cursor: pointer;\n    margin-left: 5px;\n  }\n\n  #chatMessages div {\n    word-wrap: break-word;\n    padding-top: 5px;\n  }\n\n  .user-message {\n    align-self: flex-start; /* Align user messages to the left */\n  }\n\n  .assistant-message {\n    align-self: flex-end; /* Align assistant messages to the right */\n  }\n\n  /* Chat info */\n  .chat-info h3 {\n    margin: 0;\n    font-size: 16px;\n  }\n\n  /* Online sign */\n  .online-sign {\n    width: 8px;\n    height: 8px;\n    background-color: green; /* Adjust color as needed */\n    border-radius: 50%;\n    margin-right: 5px;\n    margin-top: 2px;\n  }\n\n  /* Style for chat header */\n  .chat-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px;\n    border-bottom: 1px solid #ccc;\n    height: 25px;\n  }\n\n  .online-info {\n    font-size: x-small;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    align-items: flex-start;\n  }\n\n  .message-time {\n    font-size: xx-small;\n    margin-top: auto;\n    margin-left: 8px;\n  }\n\n  .message {\n    display: flex;\n    flex-direction: row;\n    border: 1px solid #00000014;\n    border-radius: 5px;\n    padding: 5px;\n    margin-top: 5px;\n  }\n  .message p {\n    font-size: x-small;\n    word-wrap: break-word;\n    margin: auto;\n    word-break: break-word !important;\n    text-align: justify;\n  }\n}\n\n/* Style for chat button */\n#chatBtn {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: green;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n/* Style for chat popup */\n.chat-popup {\n  display: block;\n  position: fixed;\n  bottom: 100px;\n  right: 20px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  width: 400px;\n  height: 525px;\n  background-color: white;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n\n/* Style for close button */\n.close-btn {\n  float: right;\n  cursor: pointer;\n}\n\n/* Style for chat messages */\n.chat-messages {\n  height: 400px;\n  overflow-y: auto;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Style for message input */\n#messageInput {\n  width: calc(100% - 80px);\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.input-box {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  margin: 10px;\n}\n\n/* Style for send button */\n#sendBtn {\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  cursor: pointer;\n  margin-left: 5px;\n}\n\n#chatMessages div {\n  word-wrap: break-word;\n  padding-top: 5px;\n}\n\n.user-message {\n  align-self: flex-start; /* Align user messages to the left */\n}\n\n.assistant-message {\n  align-self: flex-end; /* Align assistant messages to the right */\n}\n\n/* Chat info */\n.chat-info h3 {\n  margin: 0;\n  font-size: 16px;\n}\n\n/* Online sign */\n.online-sign {\n  width: 8px;\n  height: 8px;\n  background-color: green; /* Adjust color as needed */\n  border-radius: 50%;\n  margin-right: 5px;\n  margin-top: 2px;\n}\n\n/* Style for chat header */\n.chat-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  height: 25px;\n}\n\n.online-info {\n  font-size: x-small;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: flex-start;\n}\n\n.message-time {\n  font-size: xx-small;\n  margin-top: auto;\n  margin-left: 8px;\n}\n\n.message {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #00000014;\n  border-radius: 5px;\n  padding: 5px;\n  margin-top: 5px;\n}\n.message p {\n  font-size: smaller;\n  word-wrap: break-word;\n  margin: auto;\n  word-break: break-word !important;\n  text-align: justify;\n}\n',
          '',
        ])
        const s = i
      },
      314: (e) => {
        e.exports = function (e) {
          var n = []
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = '',
                  r = void 0 !== n[5]
                return (
                  n[4] && (t += '@supports ('.concat(n[4], ') {')),
                  n[2] && (t += '@media '.concat(n[2], ' {')),
                  r && (t += '@layer'.concat(n[5].length > 0 ? ' '.concat(n[5]) : '', ' {')),
                  (t += e(n)),
                  r && (t += '}'),
                  n[2] && (t += '}'),
                  n[4] && (t += '}'),
                  t
                )
              }).join('')
            }),
            (n.i = function (e, t, r, o, a) {
              'string' == typeof e && (e = [[null, e, void 0]])
              var i = {}
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var u = this[s][0]
                  null != u && (i[u] = !0)
                }
              for (var c = 0; c < e.length; c++) {
                var l = [].concat(e[c])
                ;(r && i[l[0]]) ||
                  (void 0 !== a && (void 0 === l[5] || (l[1] = '@layer'.concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {').concat(l[1], '}')), (l[5] = a)),
                  t && (l[2] ? ((l[1] = '@media '.concat(l[2], ' {').concat(l[1], '}')), (l[2] = t)) : (l[2] = t)),
                  o && (l[4] ? ((l[1] = '@supports ('.concat(l[4], ') {').concat(l[1], '}')), (l[4] = o)) : (l[4] = ''.concat(o))),
                  n.push(l))
              }
            }),
            n
          )
        }
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1]
        }
      },
      287: (e, n) => {
        var t = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          s = Symbol.for('react.provider'),
          u = Symbol.for('react.context'),
          c = Symbol.for('react.forward_ref'),
          l = Symbol.for('react.suspense'),
          f = Symbol.for('react.memo'),
          p = Symbol.for('react.lazy'),
          d = Symbol.iterator,
          m = {
            isMounted: function () {
              return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          y = {}
        function g(e, n, t) {
          ;(this.props = e), (this.context = n), (this.refs = y), (this.updater = t || m)
        }
        function x() {}
        function b(e, n, t) {
          ;(this.props = e), (this.context = n), (this.refs = y), (this.updater = t || m)
        }
        ;(g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, n) {
            if ('object' != typeof e && 'function' != typeof e && null != e)
              throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.')
            this.updater.enqueueSetState(this, e, n, 'setState')
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
          }),
          (x.prototype = g.prototype)
        var v = (b.prototype = new x())
        ;(v.constructor = b), h(v, g.prototype), (v.isPureReactComponent = !0)
        var w = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 }
        function k(e, n, r) {
          var o,
            a = {},
            i = null,
            s = null
          if (null != n) for (o in (void 0 !== n.ref && (s = n.ref), void 0 !== n.key && (i = '' + n.key), n)) _.call(n, o) && !E.hasOwnProperty(o) && (a[o] = n[o])
          var u = arguments.length - 2
          if (1 === u) a.children = r
          else if (1 < u) {
            for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2]
            a.children = c
          }
          if (e && e.defaultProps) for (o in (u = e.defaultProps)) void 0 === a[o] && (a[o] = u[o])
          return { $$typeof: t, type: e, key: i, ref: s, props: a, _owner: S.current }
        }
        function C(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === t
        }
        var j = /\/+/g
        function A(e, n) {
          return 'object' == typeof e && null !== e && null != e.key
            ? (function (e) {
                var n = { '=': '=0', ':': '=2' }
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return n[e]
                  })
                )
              })('' + e.key)
            : n.toString(36)
        }
        function O(e, n, o, a, i) {
          var s = typeof e
          ;('undefined' !== s && 'boolean' !== s) || (e = null)
          var u = !1
          if (null === e) u = !0
          else
            switch (s) {
              case 'string':
              case 'number':
                u = !0
                break
              case 'object':
                switch (e.$$typeof) {
                  case t:
                  case r:
                    u = !0
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = '' === a ? '.' + A(u, 0) : a),
              w(i)
                ? ((o = ''),
                  null != e && (o = e.replace(j, '$&/') + '/'),
                  O(i, n, o, '', function (e) {
                    return e
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, n) {
                      return { $$typeof: t, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner }
                    })(i, o + (!i.key || (u && u.key === i.key) ? '' : ('' + i.key).replace(j, '$&/') + '/') + e)),
                  n.push(i)),
              1
            )
          if (((u = 0), (a = '' === a ? '.' : a + ':'), w(e)))
            for (var c = 0; c < e.length; c++) {
              var l = a + A((s = e[c]), c)
              u += O(s, n, o, l, i)
            }
          else if (
            ((l = (function (e) {
              return null === e || 'object' != typeof e ? null : 'function' == typeof (e = (d && e[d]) || e['@@iterator']) ? e : null
            })(e)),
            'function' == typeof l)
          )
            for (e = l.call(e), c = 0; !(s = e.next()).done; ) u += O((s = s.value), n, o, (l = a + A(s, c++)), i)
          else if ('object' === s)
            throw (
              ((n = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === n ? 'object with keys {' + Object.keys(e).join(', ') + '}' : n) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            )
          return u
        }
        function P(e, n, t) {
          if (null == e) return e
          var r = [],
            o = 0
          return (
            O(e, r, '', '', function (e) {
              return n.call(t, e, o++)
            }),
            r
          )
        }
        function R(e) {
          if (-1 === e._status) {
            var n = e._result
            ;(n = n()).then(
              function (n) {
                ;(0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = n))
              },
              function (n) {
                ;(0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = n))
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = n))
          }
          if (1 === e._status) return e._result.default
          throw e._result
        }
        var M = { current: null },
          I = { transition: null },
          T = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: I, ReactCurrentOwner: S }
        ;(n.Children = {
          map: P,
          forEach: function (e, n, t) {
            P(
              e,
              function () {
                n.apply(this, arguments)
              },
              t,
            )
          },
          count: function (e) {
            var n = 0
            return (
              P(e, function () {
                n++
              }),
              n
            )
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e
              }) || []
            )
          },
          only: function (e) {
            if (!C(e)) throw Error('React.Children.only expected to receive a single React element child.')
            return e
          },
        }),
          (n.Component = g),
          (n.Fragment = o),
          (n.Profiler = i),
          (n.PureComponent = b),
          (n.StrictMode = a),
          (n.Suspense = l),
          (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
          (n.cloneElement = function (e, n, r) {
            if (null == e) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
            var o = h({}, e.props),
              a = e.key,
              i = e.ref,
              s = e._owner
            if (null != n) {
              if ((void 0 !== n.ref && ((i = n.ref), (s = S.current)), void 0 !== n.key && (a = '' + n.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps
              for (c in n) _.call(n, c) && !E.hasOwnProperty(c) && (o[c] = void 0 === n[c] && void 0 !== u ? u[c] : n[c])
            }
            var c = arguments.length - 2
            if (1 === c) o.children = r
            else if (1 < c) {
              u = Array(c)
              for (var l = 0; l < c; l++) u[l] = arguments[l + 2]
              o.children = u
            }
            return { $$typeof: t, type: e.type, key: a, ref: i, props: o, _owner: s }
          }),
          (n.createContext = function (e) {
            return (
              ((e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = {
                $$typeof: s,
                _context: e,
              }),
              (e.Consumer = e)
            )
          }),
          (n.createElement = k),
          (n.createFactory = function (e) {
            var n = k.bind(null, e)
            return (n.type = e), n
          }),
          (n.createRef = function () {
            return { current: null }
          }),
          (n.forwardRef = function (e) {
            return { $$typeof: c, render: e }
          }),
          (n.isValidElement = C),
          (n.lazy = function (e) {
            return { $$typeof: p, _payload: { _status: -1, _result: e }, _init: R }
          }),
          (n.memo = function (e, n) {
            return { $$typeof: f, type: e, compare: void 0 === n ? null : n }
          }),
          (n.startTransition = function (e) {
            var n = I.transition
            I.transition = {}
            try {
              e()
            } finally {
              I.transition = n
            }
          }),
          (n.unstable_act = function () {
            throw Error('act(...) is not supported in production builds of React.')
          }),
          (n.useCallback = function (e, n) {
            return M.current.useCallback(e, n)
          }),
          (n.useContext = function (e) {
            return M.current.useContext(e)
          }),
          (n.useDebugValue = function () {}),
          (n.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e)
          }),
          (n.useEffect = function (e, n) {
            return M.current.useEffect(e, n)
          }),
          (n.useId = function () {
            return M.current.useId()
          }),
          (n.useImperativeHandle = function (e, n, t) {
            return M.current.useImperativeHandle(e, n, t)
          }),
          (n.useInsertionEffect = function (e, n) {
            return M.current.useInsertionEffect(e, n)
          }),
          (n.useLayoutEffect = function (e, n) {
            return M.current.useLayoutEffect(e, n)
          }),
          (n.useMemo = function (e, n) {
            return M.current.useMemo(e, n)
          }),
          (n.useReducer = function (e, n, t) {
            return M.current.useReducer(e, n, t)
          }),
          (n.useRef = function (e) {
            return M.current.useRef(e)
          }),
          (n.useState = function (e) {
            return M.current.useState(e)
          }),
          (n.useSyncExternalStore = function (e, n, t) {
            return M.current.useSyncExternalStore(e, n, t)
          }),
          (n.useTransition = function () {
            return M.current.useTransition()
          }),
          (n.version = '18.2.0')
      },
      540: (e, n, t) => {
        e.exports = t(287)
      },
      323: (e, n, t) => {
        t.r(n), t.d(n, { default: () => g })
        var r = t(72),
          o = t.n(r),
          a = t(825),
          i = t.n(a),
          s = t(659),
          u = t.n(s),
          c = t(56),
          l = t.n(c),
          f = t(159),
          p = t.n(f),
          d = t(113),
          m = t.n(d),
          h = t(778),
          y = {}
        ;(y.styleTagTransform = m()), (y.setAttributes = l()), (y.insert = u().bind(null, 'head')), (y.domAPI = i()), (y.insertStyleElement = p()), o()(h.A, y)
        const g = h.A && h.A.locals ? h.A.locals : void 0
      },
      72: (e) => {
        var n = []
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r
              break
            }
          return t
        }
        function r(e, r) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var u = e[s],
              c = r.base ? u[0] + r.base : u[0],
              l = a[c] || 0,
              f = ''.concat(c, ' ').concat(l)
            a[c] = l + 1
            var p = t(f),
              d = { css: u[1], media: u[2], sourceMap: u[3], supports: u[4], layer: u[5] }
            if (-1 !== p) n[p].references++, n[p].updater(d)
            else {
              var m = o(d, r)
              ;(r.byIndex = s), n.splice(s, 0, { identifier: f, updater: m, references: 1 })
            }
            i.push(f)
          }
          return i
        }
        function o(e, n) {
          var t = n.domAPI(n)
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return
                t.update((e = n))
              } else t.remove()
            }
          )
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}))
          return function (e) {
            e = e || []
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i])
              n[s].references--
            }
            for (var u = r(e, o), c = 0; c < a.length; c++) {
              var l = t(a[c])
              0 === n[l].references && (n[l].updater(), n.splice(l, 1))
            }
            a = u
          }
        }
      },
      659: (e) => {
        var n = {}
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e)
              if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                try {
                  t = t.contentDocument.head
                } catch (e) {
                  t = null
                }
              n[e] = t
            }
            return n[e]
          })(e)
          if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
          r.appendChild(t)
        }
      },
      159: (e) => {
        e.exports = function (e) {
          var n = document.createElement('style')
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
        }
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc
          n && e.setAttribute('nonce', n)
        }
      },
      825: (e) => {
        e.exports = function (e) {
          if ('undefined' == typeof document) return { update: function () {}, remove: function () {} }
          var n = e.insertStyleElement(e)
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = ''
                t.supports && (r += '@supports ('.concat(t.supports, ') {')), t.media && (r += '@media '.concat(t.media, ' {'))
                var o = void 0 !== t.layer
                o && (r += '@layer'.concat(t.layer.length > 0 ? ' '.concat(t.layer) : '', ' {')), (r += t.css), o && (r += '}'), t.media && (r += '}'), t.supports && (r += '}')
                var a = t.sourceMap
                a && 'undefined' != typeof btoa && (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), ' */')),
                  n.styleTagTransform(r, e, n.options)
              })(n, e, t)
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1
                e.parentNode.removeChild(e)
              })(n)
            },
          }
        }
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild)
            n.appendChild(document.createTextNode(e))
          }
        }
      },
      480: function (e, n, t) {
        var r =
            (this && this.__awaiter) ||
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (o, a) {
                function i(e) {
                  try {
                    u(r.next(e))
                  } catch (e) {
                    a(e)
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e))
                  } catch (e) {
                    a(e)
                  }
                }
                function u(e) {
                  var n
                  e.done
                    ? o(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n)
                          })).then(i, s)
                }
                u((r = r.apply(e, n || [])).next())
              })
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
        Object.defineProperty(n, '__esModule', { value: !0 })
        const a = t(540)
        t(323)
        const i = o(t(540)),
          s = t(851),
          u = t(20)
        n.default = (e) => {
          var n
          const [t, o] = (0, a.useState)(!!e.isChatOpen && e.isChatOpen),
            [c, l] = (0, a.useState)(e.messages ? e.messages : []),
            [f, p] = (0, a.useState)(''),
            d = (0, a.useRef)(null)
          ;(0, a.useEffect)(() => {
            d.current && (d.current.scrollTop = d.current.scrollHeight)
          }, [c])
          const m = () => {
            if ('' !== f.trim()) {
              const n = { text: f, owner: 'user', time: new Date() }
              l([...c, n]), e.isCustomAPI && e.setUserInput ? e.setUserInput(f) : h(), p('')
            }
          }
          ;(0, a.useEffect)(() => {
            e.message && l([...c, e.message])
          }, [e.message])
          const h = () =>
            r(void 0, void 0, void 0, function* () {
              const e = { text: f.trim() },
                n = yield (0, u.chatAssistantAPIResponse)(e)
              null !== n && l([...c, n.message])
            })
          return i.default.createElement(
            'div',
            null,
            i.default.createElement(
              'button',
              {
                id: 'chatBtn',
                type: 'button',
                onClick: () => {
                  o(!t)
                },
              },
              'Chat',
            ),
            t &&
              i.default.createElement(
                'div',
                { className: 'chat-popup', id: 'chatPopup' },
                i.default.createElement(
                  'div',
                  { className: 'chat-header' },
                  i.default.createElement(
                    'div',
                    { className: 'chat-info' },
                    i.default.createElement('h3', null, null !== (n = e.name) && void 0 !== n ? n : 'KK'),
                    i.default.createElement('div', { className: 'online-info' }, i.default.createElement('div', { className: 'online-sign' }), i.default.createElement('div', null, 'Online')),
                  ),
                  i.default.createElement(
                    'span',
                    {
                      className: 'close-btn',
                      id: 'closeBtn',
                      onClick: () => {
                        o(!1)
                      },
                    },
                    '×',
                  ),
                ),
                i.default.createElement(
                  'div',
                  { className: 'chat-messages', id: 'chatMessages', ref: d },
                  c.map((e, n) =>
                    i.default.createElement(
                      'div',
                      { key: n, className: 'message ' + ('user' === e.owner ? 'user-message' : 'assistant-message') },
                      i.default.createElement('p', null, e.text),
                      i.default.createElement('span', { className: 'message-time' }, (0, s.formatMessageTime)(e.time)),
                    ),
                  ),
                ),
                i.default.createElement(
                  'div',
                  { className: 'input-box' },
                  i.default.createElement('input', {
                    id: 'messageInput',
                    type: 'text',
                    placeholder: 'Type your message...',
                    value: f,
                    onChange: (e) => p(e.target.value),
                    onKeyDown: (e) => {
                      'Enter' === e.key && m()
                    },
                  }),
                  i.default.createElement('button', { type: 'button', className: 'sendBtn', id: 'sendBtn', onClick: m }, 'Send'),
                ),
              ),
          )
        }
      },
      851: (e, n) => {
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.formatMessageTime = void 0),
          (n.formatMessageTime = function (e) {
            return `${String(e.getHours()).padStart(2, '0')}:${String(e.getMinutes()).padStart(2, '0')}`
          })
      },
      156: function (e, n, t) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
        Object.defineProperty(n, '__esModule', { value: !0 }), (n.ChatbotAssistant = void 0)
        var o = t(480)
        Object.defineProperty(n, 'ChatbotAssistant', {
          enumerable: !0,
          get: function () {
            return r(o).default
          },
        })
      },
      20: function (e, n) {
        var t =
          (this && this.__awaiter) ||
          function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, a) {
              function i(e) {
                try {
                  u(r.next(e))
                } catch (e) {
                  a(e)
                }
              }
              function s(e) {
                try {
                  u(r.throw(e))
                } catch (e) {
                  a(e)
                }
              }
              function u(e) {
                var n
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n)
                        })).then(i, s)
              }
              u((r = r.apply(e, n || [])).next())
            })
          }
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.chatAssistantAPIResponse = void 0),
          (n.chatAssistantAPIResponse = (e) =>
            t(void 0, void 0, void 0, function* () {
              var n
              try {
                const t = null !== (n = e.url) && void 0 !== n ? n : 'https://api.example.com/chat-assistant',
                  r = yield fetch(t, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(e.text) })
                if (!r.ok) throw new Error('Network response was not ok')
                return yield r.json()
              } catch (e) {
                return null
              }
            }))
      },
    },
    n = {}
  function t(r) {
    var o = n[r]
    if (void 0 !== o) return o.exports
    var a = (n[r] = { id: r, exports: {} })
    return e[r].call(a.exports, a, a.exports, t), a.exports
  }
  ;(t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e
    return t.d(n, { a: n }), n
  }),
    (t.d = (e, n) => {
      for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] })
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.r = (e) => {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (t.nc = void 0),
    t(156)
})()
