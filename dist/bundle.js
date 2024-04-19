/*! For license information please see bundle.js.LICENSE.txt */
;(() => {
  var e = {
      1540: (e, t, n) => {
        'use strict'
        n.d(t, { A: () => a })
        var r = n(1601),
          s = n.n(r),
          o = n(6314),
          i = n.n(o)()(s())
        i.push([
          e.id,
          '@media only screen and (max-width: 600px) {\n  /* Style for chat button */\n  #chatBtn {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    background-color: green;\n    color: white;\n    border: none;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    font-size: 18px;\n    cursor: pointer;\n  }\n\n  /* Style for chat popup */\n  .chat-popup {\n    display: block;\n    position: fixed;\n    bottom: 90px;\n    right: 20px;\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    width: 300px;\n    height: 425px;\n    background-color: white;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  /* Style for chat messages */\n  .chat-messages {\n    height: 300px;\n    overflow-y: auto;\n    padding: 10px;\n    border-bottom: 1px solid #ccc;\n    display: flex;\n    flex-direction: column;\n  }\n\n  /* Style for message input */\n  #messageInput {\n    width: calc(100% - 80px);\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n\n  .input-box {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    margin: 10px;\n  }\n\n  /* Style for send button */\n  #sendBtn {\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 20px;\n    cursor: pointer;\n    margin-left: 5px;\n  }\n\n  #chatMessages div {\n    word-wrap: break-word;\n    padding-top: 5px;\n  }\n\n  .user-message {\n    align-self: flex-start; /* Align user messages to the left */\n  }\n\n  .assistant-message {\n    align-self: flex-end; /* Align assistant messages to the right */\n  }\n\n  /* Chat info */\n  .chat-info h3 {\n    margin: 0;\n    font-size: 16px;\n  }\n\n  /* Online sign */\n  .online-sign {\n    width: 8px;\n    height: 8px;\n    background-color: green; /* Adjust color as needed */\n    border-radius: 50%;\n    margin-right: 5px;\n    margin-top: 2px;\n  }\n\n  /* Style for chat header */\n  .chat-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px;\n    border-bottom: 1px solid #ccc;\n    height: 25px;\n  }\n\n  .online-info {\n    font-size: x-small;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    align-items: flex-start;\n  }\n\n  .message-time {\n    font-size: xx-small;\n    margin-top: auto;\n    margin-left: 8px;\n  }\n\n  .message {\n    display: flex;\n    flex-direction: row;\n    border: 1px solid #00000014;\n    border-radius: 5px;\n    padding: 5px;\n    margin-top: 5px;\n  }\n  .message p {\n    font-size: x-small;\n    word-wrap: break-word;\n    margin: auto;\n    word-break: break-word !important;\n    text-align: justify;\n  }\n}\n\n/* Style for chat button */\n#chatBtn {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: green;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n/* Style for chat popup */\n.chat-popup {\n  display: block;\n  position: fixed;\n  bottom: 100px;\n  right: 20px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  width: 400px;\n  height: 525px;\n  background-color: white;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n\n/* Style for close button */\n.close-btn {\n  float: right;\n  cursor: pointer;\n}\n\n/* Style for chat messages */\n.chat-messages {\n  height: 400px;\n  overflow-y: auto;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Style for message input */\n#messageInput {\n  width: calc(100% - 80px);\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.input-box {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  margin: 10px;\n}\n\n/* Style for send button */\n#sendBtn {\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  cursor: pointer;\n  margin-left: 5px;\n}\n\n#chatMessages div {\n  word-wrap: break-word;\n  padding-top: 5px;\n}\n\n.user-message {\n  align-self: flex-start; /* Align user messages to the left */\n}\n\n.assistant-message {\n  align-self: flex-end; /* Align assistant messages to the right */\n}\n\n/* Chat info */\n.chat-info h3 {\n  margin: 0;\n  font-size: 16px;\n}\n\n/* Online sign */\n.online-sign {\n  width: 8px;\n  height: 8px;\n  background-color: green; /* Adjust color as needed */\n  border-radius: 50%;\n  margin-right: 5px;\n  margin-top: 2px;\n}\n\n/* Style for chat header */\n.chat-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  height: 25px;\n}\n\n.online-info {\n  font-size: x-small;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: flex-start;\n}\n\n.message-time {\n  font-size: xx-small;\n  margin-top: auto;\n  margin-left: 8px;\n}\n\n.message {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #00000014;\n  border-radius: 5px;\n  padding: 5px;\n  margin-top: 5px;\n}\n.message p {\n  font-size: smaller;\n  word-wrap: break-word;\n  margin: auto;\n  word-break: break-word !important;\n  text-align: justify;\n}\n',
          '',
        ])
        const a = i
      },
      6314: (e) => {
        'use strict'
        e.exports = function (e) {
          var t = []
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5]
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r && (n += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                )
              }).join('')
            }),
            (t.i = function (e, n, r, s, o) {
              'string' == typeof e && (e = [[null, e, void 0]])
              var i = {}
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var c = this[a][0]
                  null != c && (i[c] = !0)
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l])
                ;(r && i[u[0]]) ||
                  (void 0 !== o && (void 0 === u[5] || (u[1] = '@layer'.concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {').concat(u[1], '}')), (u[5] = o)),
                  n && (u[2] ? ((u[1] = '@media '.concat(u[2], ' {').concat(u[1], '}')), (u[2] = n)) : (u[2] = n)),
                  s && (u[4] ? ((u[1] = '@supports ('.concat(u[4], ') {').concat(u[1], '}')), (u[4] = s)) : (u[4] = ''.concat(s))),
                  t.push(u))
              }
            }),
            t
          )
        }
      },
      1601: (e) => {
        'use strict'
        e.exports = function (e) {
          return e[1]
        }
      },
      5287: (e, t) => {
        'use strict'
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          s = Symbol.for('react.fragment'),
          o = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          a = Symbol.for('react.provider'),
          c = Symbol.for('react.context'),
          l = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          h = Symbol.for('react.lazy'),
          f = Symbol.iterator,
          p = {
            isMounted: function () {
              return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {}
        function b(e, t, n) {
          ;(this.props = e), (this.context = t), (this.refs = g), (this.updater = n || p)
        }
        function y() {}
        function _(e, t, n) {
          ;(this.props = e), (this.context = t), (this.refs = g), (this.updater = n || p)
        }
        ;(b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (e, t) {
            if ('object' != typeof e && 'function' != typeof e && null != e)
              throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.')
            this.updater.enqueueSetState(this, e, t, 'setState')
          }),
          (b.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
          }),
          (y.prototype = b.prototype)
        var v = (_.prototype = new y())
        ;(v.constructor = _), m(v, b.prototype), (v.isPureReactComponent = !0)
        var w = Array.isArray,
          P = Object.prototype.hasOwnProperty,
          O = { current: null },
          A = { key: !0, ref: !0, __self: !0, __source: !0 }
        function S(e, t, r) {
          var s,
            o = {},
            i = null,
            a = null
          if (null != t) for (s in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = '' + t.key), t)) P.call(t, s) && !A.hasOwnProperty(s) && (o[s] = t[s])
          var c = arguments.length - 2
          if (1 === c) o.children = r
          else if (1 < c) {
            for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2]
            o.children = l
          }
          if (e && e.defaultProps) for (s in (c = e.defaultProps)) void 0 === o[s] && (o[s] = c[s])
          return { $$typeof: n, type: e, key: i, ref: a, props: o, _owner: O.current }
        }
        function x(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === n
        }
        var E = /\/+/g
        function R(e, t) {
          return 'object' == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' }
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e]
                  })
                )
              })('' + e.key)
            : t.toString(36)
        }
        function j(e, t, s, o, i) {
          var a = typeof e
          ;('undefined' !== a && 'boolean' !== a) || (e = null)
          var c = !1
          if (null === e) c = !0
          else
            switch (a) {
              case 'string':
              case 'number':
                c = !0
                break
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0
                }
            }
          if (c)
            return (
              (i = i((c = e))),
              (e = '' === o ? '.' + R(c, 0) : o),
              w(i)
                ? ((s = ''),
                  null != e && (s = e.replace(E, '$&/') + '/'),
                  j(i, t, s, '', function (e) {
                    return e
                  }))
                : null != i &&
                  (x(i) &&
                    (i = (function (e, t) {
                      return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
                    })(i, s + (!i.key || (c && c.key === i.key) ? '' : ('' + i.key).replace(E, '$&/') + '/') + e)),
                  t.push(i)),
              1
            )
          if (((c = 0), (o = '' === o ? '.' : o + ':'), w(e)))
            for (var l = 0; l < e.length; l++) {
              var u = o + R((a = e[l]), l)
              c += j(a, t, s, u, i)
            }
          else if (
            ((u = (function (e) {
              return null === e || 'object' != typeof e ? null : 'function' == typeof (e = (f && e[f]) || e['@@iterator']) ? e : null
            })(e)),
            'function' == typeof u)
          )
            for (e = u.call(e), l = 0; !(a = e.next()).done; ) c += j((a = a.value), t, s, (u = o + R(a, l++)), i)
          else if ('object' === a)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            )
          return c
        }
        function C(e, t, n) {
          if (null == e) return e
          var r = [],
            s = 0
          return (
            j(e, r, '', '', function (e) {
              return t.call(n, e, s++)
            }),
            r
          )
        }
        function I(e) {
          if (-1 === e._status) {
            var t = e._result
            ;(t = t()).then(
              function (t) {
                ;(0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t))
              },
              function (t) {
                ;(0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t))
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t))
          }
          if (1 === e._status) return e._result.default
          throw e._result
        }
        var M = { current: null },
          F = { transition: null },
          k = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: F, ReactCurrentOwner: O }
        ;(t.Children = {
          map: C,
          forEach: function (e, t, n) {
            C(
              e,
              function () {
                t.apply(this, arguments)
              },
              n,
            )
          },
          count: function (e) {
            var t = 0
            return (
              C(e, function () {
                t++
              }),
              t
            )
          },
          toArray: function (e) {
            return (
              C(e, function (e) {
                return e
              }) || []
            )
          },
          only: function (e) {
            if (!x(e)) throw Error('React.Children.only expected to receive a single React element child.')
            return e
          },
        }),
          (t.Component = b),
          (t.Fragment = s),
          (t.Profiler = i),
          (t.PureComponent = _),
          (t.StrictMode = o),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = k),
          (t.cloneElement = function (e, t, r) {
            if (null == e) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
            var s = m({}, e.props),
              o = e.key,
              i = e.ref,
              a = e._owner
            if (null != t) {
              if ((void 0 !== t.ref && ((i = t.ref), (a = O.current)), void 0 !== t.key && (o = '' + t.key), e.type && e.type.defaultProps)) var c = e.type.defaultProps
              for (l in t) P.call(t, l) && !A.hasOwnProperty(l) && (s[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l])
            }
            var l = arguments.length - 2
            if (1 === l) s.children = r
            else if (1 < l) {
              c = Array(l)
              for (var u = 0; u < l; u++) c[u] = arguments[u + 2]
              s.children = c
            }
            return { $$typeof: n, type: e.type, key: o, ref: i, props: s, _owner: a }
          }),
          (t.createContext = function (e) {
            return (
              ((e = { $$typeof: c, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = {
                $$typeof: a,
                _context: e,
              }),
              (e.Consumer = e)
            )
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e)
            return (t.type = e), t
          }),
          (t.createRef = function () {
            return { current: null }
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e }
          }),
          (t.isValidElement = x),
          (t.lazy = function (e) {
            return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: I }
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t }
          }),
          (t.startTransition = function (e) {
            var t = F.transition
            F.transition = {}
            try {
              e()
            } finally {
              F.transition = t
            }
          }),
          (t.unstable_act = function () {
            throw Error('act(...) is not supported in production builds of React.')
          }),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t)
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e)
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e)
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t)
          }),
          (t.useId = function () {
            return M.current.useId()
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n)
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t)
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t)
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t)
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n)
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e)
          }),
          (t.useState = function (e) {
            return M.current.useState(e)
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n)
          }),
          (t.useTransition = function () {
            return M.current.useTransition()
          }),
          (t.version = '18.2.0')
      },
      6540: (e, t, n) => {
        'use strict'
        e.exports = n(5287)
      },
      1323: (e, t, n) => {
        'use strict'
        n.r(t), n.d(t, { default: () => b })
        var r = n(5072),
          s = n.n(r),
          o = n(7825),
          i = n.n(o),
          a = n(7659),
          c = n.n(a),
          l = n(5056),
          u = n.n(l),
          d = n(540),
          h = n.n(d),
          f = n(1113),
          p = n.n(f),
          m = n(1540),
          g = {}
        ;(g.styleTagTransform = p()), (g.setAttributes = u()), (g.insert = c().bind(null, 'head')), (g.domAPI = i()), (g.insertStyleElement = h()), s()(m.A, g)
        const b = m.A && m.A.locals ? m.A.locals : void 0
      },
      5072: (e) => {
        'use strict'
        var t = []
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r
              break
            }
          return n
        }
        function r(e, r) {
          for (var o = {}, i = [], a = 0; a < e.length; a++) {
            var c = e[a],
              l = r.base ? c[0] + r.base : c[0],
              u = o[l] || 0,
              d = ''.concat(l, ' ').concat(u)
            o[l] = u + 1
            var h = n(d),
              f = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] }
            if (-1 !== h) t[h].references++, t[h].updater(f)
            else {
              var p = s(f, r)
              ;(r.byIndex = a), t.splice(a, 0, { identifier: d, updater: p, references: 1 })
            }
            i.push(d)
          }
          return i
        }
        function s(e, t) {
          var n = t.domAPI(t)
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return
                n.update((e = t))
              } else n.remove()
            }
          )
        }
        e.exports = function (e, s) {
          var o = r((e = e || []), (s = s || {}))
          return function (e) {
            e = e || []
            for (var i = 0; i < o.length; i++) {
              var a = n(o[i])
              t[a].references--
            }
            for (var c = r(e, s), l = 0; l < o.length; l++) {
              var u = n(o[l])
              0 === t[u].references && (t[u].updater(), t.splice(u, 1))
            }
            o = c
          }
        }
      },
      7659: (e) => {
        'use strict'
        var t = {}
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e)
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head
                } catch (e) {
                  n = null
                }
              t[e] = n
            }
            return t[e]
          })(e)
          if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
          r.appendChild(n)
        }
      },
      540: (e) => {
        'use strict'
        e.exports = function (e) {
          var t = document.createElement('style')
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
        }
      },
      5056: (e, t, n) => {
        'use strict'
        e.exports = function (e) {
          var t = n.nc
          t && e.setAttribute('nonce', t)
        }
      },
      7825: (e) => {
        'use strict'
        e.exports = function (e) {
          if ('undefined' == typeof document) return { update: function () {}, remove: function () {} }
          var t = e.insertStyleElement(e)
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = ''
                n.supports && (r += '@supports ('.concat(n.supports, ') {')), n.media && (r += '@media '.concat(n.media, ' {'))
                var s = void 0 !== n.layer
                s && (r += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')), (r += n.css), s && (r += '}'), n.media && (r += '}'), n.supports && (r += '}')
                var o = n.sourceMap
                o && 'undefined' != typeof btoa && (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), ' */')),
                  t.styleTagTransform(r, e, t.options)
              })(t, e, n)
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1
                e.parentNode.removeChild(e)
              })(t)
            },
          }
        }
      },
      1113: (e) => {
        'use strict'
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild)
            t.appendChild(document.createTextNode(e))
          }
        }
      },
      6480: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (s, o) {
                function i(e) {
                  try {
                    c(r.next(e))
                  } catch (e) {
                    o(e)
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e))
                  } catch (e) {
                    o(e)
                  }
                }
                function c(e) {
                  var t
                  e.done
                    ? s(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(i, a)
                }
                c((r = r.apply(e, t || [])).next())
              })
            },
          s =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
        Object.defineProperty(t, '__esModule', { value: !0 })
        const o = n(6540)
        n(1323)
        const i = s(n(6540)),
          a = n(8851),
          c = n(8020)
        t.default = (e) => {
          var t
          const [n, s] = (0, o.useState)(!!e.isChatOpen && e.isChatOpen),
            [l, u] = (0, o.useState)(e.messages ? e.messages : []),
            [d, h] = (0, o.useState)(''),
            f = (0, o.useRef)(null)
          ;(0, o.useEffect)(() => {
            f.current && (f.current.scrollTop = f.current.scrollHeight)
          }, [l])
          const p = () => {
            if ('' !== d.trim()) {
              const t = { text: d, owner: 'user', time: new Date() }
              if ((u([...l, t]), e.isCustomAPI && e.setUserInput)) e.setUserInput(d)
              else if (e.isChatGPT) {
                if (!e.apiKey) throw new Error('API key not provided!')
                m()
              }
              h('')
            }
          }
          ;(0, o.useEffect)(() => {
            e.message && u([...l, e.message])
          }, [e.message])
          const m = () =>
            r(void 0, void 0, void 0, function* () {
              const t = { text: d.trim(), apiKey: e.apiKey, context: e.context, models: e.models },
                n = yield (0, c.chatGPTAssistantAPIResponse)(t)
              null !== n && u([...l, n.message])
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
                  s(!n)
                },
              },
              'Chat',
            ),
            n &&
              i.default.createElement(
                'div',
                { className: 'chat-popup', id: 'chatPopup' },
                i.default.createElement(
                  'div',
                  { className: 'chat-header' },
                  i.default.createElement(
                    'div',
                    { className: 'chat-info' },
                    i.default.createElement('h3', null, null !== (t = e.name) && void 0 !== t ? t : 'KK'),
                    i.default.createElement('div', { className: 'online-info' }, i.default.createElement('div', { className: 'online-sign' }), i.default.createElement('div', null, 'Online')),
                  ),
                  i.default.createElement(
                    'span',
                    {
                      className: 'close-btn',
                      id: 'closeBtn',
                      onClick: () => {
                        s(!1)
                      },
                    },
                    '×',
                  ),
                ),
                i.default.createElement(
                  'div',
                  { className: 'chat-messages', id: 'chatMessages', ref: f },
                  l.map((e, t) =>
                    i.default.createElement(
                      'div',
                      { key: t, className: 'message ' + ('user' === e.owner ? 'user-message' : 'assistant-message') },
                      i.default.createElement('p', null, e.text),
                      i.default.createElement('span', { className: 'message-time' }, (0, a.formatMessageTime)(e.time)),
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
                    value: d,
                    onChange: (e) => h(e.target.value),
                    onKeyDown: (e) => {
                      'Enter' === e.key && p()
                    },
                  }),
                  i.default.createElement('button', { type: 'button', className: 'sendBtn', id: 'sendBtn', onClick: p }, 'Send'),
                ),
              ),
          )
        }
      },
      8851: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.formatMessageTime = void 0),
          (t.formatMessageTime = function (e) {
            return `${String(e.getHours()).padStart(2, '0')}:${String(e.getMinutes()).padStart(2, '0')}`
          })
      },
      8156: function (e, t, n) {
        'use strict'
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.ChatbotAssistant = void 0)
        var s = n(6480)
        Object.defineProperty(t, 'ChatbotAssistant', {
          enumerable: !0,
          get: function () {
            return r(s).default
          },
        })
      },
      8020: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (s, o) {
                function i(e) {
                  try {
                    c(r.next(e))
                  } catch (e) {
                    o(e)
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e))
                  } catch (e) {
                    o(e)
                  }
                }
                function c(e) {
                  var t
                  e.done
                    ? s(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(i, a)
                }
                c((r = r.apply(e, t || [])).next())
              })
            },
          s =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.chatGPTAssistantAPIResponse = t.chatAssistantAPIResponse = void 0)
        const o = s(n(2012))
        ;(t.chatAssistantAPIResponse = (e) =>
          r(void 0, void 0, void 0, function* () {
            var t
            try {
              const n = null !== (t = e.url) && void 0 !== t ? t : 'https://api.example.com/chat-assistant',
                r = yield fetch(n, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(e.text) })
              if (!r.ok) throw new Error('Network response was not ok')
              return yield r.json()
            } catch (e) {
              return null
            }
          })),
          (t.chatGPTAssistantAPIResponse = (e) =>
            r(void 0, void 0, void 0, function* () {
              var t, n
              try {
                const r = [
                    { role: 'system', content: null !== (t = e.context) && void 0 !== t ? t : 'You are a helpful assistant.' },
                    { role: 'user', content: 'Who won the world series in 2020?' },
                    { role: 'assistant', content: 'The Los Angeles Dodgers won the World Series in 2020.' },
                    { role: 'user', content: 'Where was it played?' },
                  ],
                  s = new o.default({ apiKey: e.apiKey, dangerouslyAllowBrowser: !0 }),
                  i = yield s.chat.completions.create({ messages: r, model: null !== (n = e.models) && void 0 !== n ? n : 'gpt-3.5-turbo' })
                return console.log(i.choices[0]), i.choices[0]
              } catch (e) {
                return e
              }
            }))
      },
      4356: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.MultipartBody = void 0)
        class n {
          constructor(e) {
            this.body = e
          }
          get [Symbol.toStringTag]() {
            return 'MultipartBody'
          }
        }
        t.MultipartBody = n
      },
      8978: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), s(n(331), t)
      },
      2212: (e, t, n) => {
        const r = n(3085),
          s = n(8978)
        r.kind || r.setShims(s.getRuntime(), { auto: !0 })
        for (const e of Object.keys(r)) Object.defineProperty(t, e, { get: () => r[e] })
      },
      3085: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.setShims =
            t.isFsReadStream =
            t.fileFromPath =
            t.getDefaultAgent =
            t.getMultipartRequestOptions =
            t.ReadableStream =
            t.File =
            t.Blob =
            t.FormData =
            t.Headers =
            t.Response =
            t.Request =
            t.fetch =
            t.kind =
            t.auto =
              void 0),
          (t.auto = !1),
          (t.kind = void 0),
          (t.fetch = void 0),
          (t.Request = void 0),
          (t.Response = void 0),
          (t.Headers = void 0),
          (t.FormData = void 0),
          (t.Blob = void 0),
          (t.File = void 0),
          (t.ReadableStream = void 0),
          (t.getMultipartRequestOptions = void 0),
          (t.getDefaultAgent = void 0),
          (t.fileFromPath = void 0),
          (t.isFsReadStream = void 0),
          (t.setShims = function (e, n = { auto: !1 }) {
            if (t.auto) throw new Error(`you must \`import 'openai/shims/${e.kind}'\` before importing anything else from openai`)
            if (t.kind) throw new Error(`can't \`import 'openai/shims/${e.kind}'\` after \`import 'openai/shims/${t.kind}'\``)
            ;(t.auto = n.auto),
              (t.kind = e.kind),
              (t.fetch = e.fetch),
              (t.Request = e.Request),
              (t.Response = e.Response),
              (t.Headers = e.Headers),
              (t.FormData = e.FormData),
              (t.Blob = e.Blob),
              (t.File = e.File),
              (t.ReadableStream = e.ReadableStream),
              (t.getMultipartRequestOptions = e.getMultipartRequestOptions),
              (t.getDefaultAgent = e.getDefaultAgent),
              (t.fileFromPath = e.fileFromPath),
              (t.isFsReadStream = e.isFsReadStream)
          })
      },
      331: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getRuntime = void 0)
        const r = n(4356)
        t.getRuntime = function ({ manuallyImported: e } = {}) {
          const t = e
            ? 'You may need to use polyfills'
            : "Add one of these imports before your first `import … from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n"
          let n, s, o, i
          try {
            ;(n = fetch), (s = Request), (o = Response), (i = Headers)
          } catch (e) {
            throw new Error(`this environment is missing the following Web Fetch API type: ${e.message}. ${t}`)
          }
          return {
            kind: 'web',
            fetch: n,
            Request: s,
            Response: o,
            Headers: i,
            FormData:
              'undefined' != typeof FormData
                ? FormData
                : class {
                    constructor() {
                      throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${t}`)
                    }
                  },
            Blob:
              'undefined' != typeof Blob
                ? Blob
                : class {
                    constructor() {
                      throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${t}`)
                    }
                  },
            File:
              'undefined' != typeof File
                ? File
                : class {
                    constructor() {
                      throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${t}`)
                    }
                  },
            ReadableStream:
              'undefined' != typeof ReadableStream
                ? ReadableStream
                : class {
                    constructor() {
                      throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${t}`)
                    }
                  },
            getMultipartRequestOptions: async (e, t) => ({ ...t, body: new r.MultipartBody(e) }),
            getDefaultAgent: (e) => {},
            fileFromPath: () => {
              throw new Error('The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads')
            },
            isFsReadStream: (e) => !1,
          }
        }
      },
      8757: function (e, t, n) {
        'use strict'
        var r,
          s =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, r, s) {
              if ('m' === r) throw new TypeError('Private method is not writable')
              if ('a' === r && !s) throw new TypeError('Private accessor was defined without a setter')
              if ('function' == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError('Cannot write private member to an object whose class did not declare it')
              return 'a' === r ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n
            },
          o =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, r) {
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter')
              if ('function' == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError('Cannot read private member from an object whose class did not declare it')
              return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.isObj =
            t.toBase64 =
            t.getRequiredHeader =
            t.isHeadersProtocol =
            t.isRunningInBrowser =
            t.debug =
            t.hasOwn =
            t.isEmptyObj =
            t.maybeCoerceBoolean =
            t.maybeCoerceFloat =
            t.maybeCoerceInteger =
            t.coerceBoolean =
            t.coerceFloat =
            t.coerceInteger =
            t.readEnv =
            t.ensurePresent =
            t.castToError =
            t.sleep =
            t.safeJSON =
            t.isRequestOptions =
            t.createResponseHeaders =
            t.PagePromise =
            t.AbstractPage =
            t.APIClient =
            t.APIPromise =
            t.createForm =
            t.multipartFormRequestOptions =
            t.maybeMultipartFormRequestOptions =
              void 0)
        const i = n(5392),
          a = n(6716),
          c = n(9526),
          l = n(2212),
          u = n(4042)
        var d = n(4042)
        async function h(e) {
          const { response: t } = e
          if (e.options.stream)
            return E('response', t.status, t.url, t.headers, t.body), e.options.__streamClass ? e.options.__streamClass.fromSSEResponse(t, e.controller) : a.Stream.fromSSEResponse(t, e.controller)
          if (204 === t.status) return null
          if (e.options.__binaryResponse) return t
          const n = t.headers.get('content-type')
          if (n?.includes('application/json') || n?.includes('application/vnd.api+json')) {
            const e = await t.json()
            return E('response', t.status, t.url, t.headers, e), e
          }
          const r = await t.text()
          return E('response', t.status, t.url, t.headers, r), r
        }
        Object.defineProperty(t, 'maybeMultipartFormRequestOptions', {
          enumerable: !0,
          get: function () {
            return d.maybeMultipartFormRequestOptions
          },
        }),
          Object.defineProperty(t, 'multipartFormRequestOptions', {
            enumerable: !0,
            get: function () {
              return d.multipartFormRequestOptions
            },
          }),
          Object.defineProperty(t, 'createForm', {
            enumerable: !0,
            get: function () {
              return d.createForm
            },
          })
        class f extends Promise {
          constructor(e, t = h) {
            super((e) => {
              e(null)
            }),
              (this.responsePromise = e),
              (this.parseResponse = t)
          }
          _thenUnwrap(e) {
            return new f(this.responsePromise, async (t) => e(await this.parseResponse(t)))
          }
          asResponse() {
            return this.responsePromise.then((e) => e.response)
          }
          async withResponse() {
            const [e, t] = await Promise.all([this.parse(), this.asResponse()])
            return { data: e, response: t }
          }
          parse() {
            return this.parsedPromise || (this.parsedPromise = this.responsePromise.then(this.parseResponse)), this.parsedPromise
          }
          then(e, t) {
            return this.parse().then(e, t)
          }
          catch(e) {
            return this.parse().catch(e)
          }
          finally(e) {
            return this.parse().finally(e)
          }
        }
        ;(t.APIPromise = f),
          (t.APIClient = class {
            constructor({ baseURL: e, maxRetries: t = 2, timeout: n = 6e5, httpAgent: r, fetch: s }) {
              ;(this.baseURL = e), (this.maxRetries = O('maxRetries', t)), (this.timeout = O('timeout', n)), (this.httpAgent = r), (this.fetch = s ?? l.fetch)
            }
            authHeaders(e) {
              return {}
            }
            defaultHeaders(e) {
              return { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': this.getUserAgent(), ...v(), ...this.authHeaders(e) }
            }
            validateHeaders(e, t) {}
            defaultIdempotencyKey() {
              return `stainless-node-retry-${R()}`
            }
            get(e, t) {
              return this.methodRequest('get', e, t)
            }
            post(e, t) {
              return this.methodRequest('post', e, t)
            }
            patch(e, t) {
              return this.methodRequest('patch', e, t)
            }
            put(e, t) {
              return this.methodRequest('put', e, t)
            }
            delete(e, t) {
              return this.methodRequest('delete', e, t)
            }
            methodRequest(e, t, n) {
              return this.request(Promise.resolve(n).then((n) => ({ method: e, path: t, ...n })))
            }
            getAPIList(e, t, n) {
              return this.requestAPIList(t, { method: 'get', path: e, ...n })
            }
            calculateContentLength(e) {
              if ('string' == typeof e) {
                if ('undefined' != typeof Buffer) return Buffer.byteLength(e, 'utf8').toString()
                if ('undefined' != typeof TextEncoder) return new TextEncoder().encode(e).length.toString()
              }
              return null
            }
            buildRequest(e) {
              const { method: t, path: n, query: r, headers: s = {} } = e,
                o = (0, u.isMultipartBody)(e.body) ? e.body.body : e.body ? JSON.stringify(e.body, null, 2) : null,
                i = this.calculateContentLength(o),
                a = this.buildURL(n, r)
              'timeout' in e && O('timeout', e.timeout)
              const c = e.timeout ?? this.timeout,
                d = e.httpAgent ?? this.httpAgent ?? (0, l.getDefaultAgent)(a),
                h = c + 1e3
              return (
                'number' == typeof d?.options?.timeout && h > (d.options.timeout ?? 0) && (d.options.timeout = h),
                this.idempotencyHeader && 'get' !== t && (e.idempotencyKey || (e.idempotencyKey = this.defaultIdempotencyKey()), (s[this.idempotencyHeader] = e.idempotencyKey)),
                {
                  req: { method: t, ...(o && { body: o }), headers: this.buildHeaders({ options: e, headers: s, contentLength: i }), ...(d && { agent: d }), signal: e.signal ?? null },
                  url: a,
                  timeout: c,
                }
              )
            }
            buildHeaders({ options: e, headers: t, contentLength: n }) {
              const r = {}
              return (
                n && (r['content-length'] = n), x(r, this.defaultHeaders(e)), x(r, t), (0, u.isMultipartBody)(e.body) && 'node' !== l.kind && delete r['content-type'], this.validateHeaders(r, t), r
              )
            }
            async prepareOptions(e) {}
            async prepareRequest(e, { url: t, options: n }) {}
            parseHeaders(e) {
              return e ? (Symbol.iterator in e ? Object.fromEntries(Array.from(e).map((e) => [...e])) : { ...e }) : {}
            }
            makeStatusError(e, t, n, r) {
              return c.APIError.generate(e, t, n, r)
            }
            request(e, t = null) {
              return new f(this.makeRequest(e, t))
            }
            async makeRequest(e, n) {
              const r = await e
              null == n && (n = r.maxRetries ?? this.maxRetries), await this.prepareOptions(r)
              const { req: s, url: o, timeout: i } = this.buildRequest(r)
              if ((await this.prepareRequest(s, { url: o, options: r }), E('request', o, r, s.headers), r.signal?.aborted)) throw new c.APIUserAbortError()
              const a = new AbortController(),
                l = await this.fetchWithTimeout(o, s, i, a).catch(t.castToError)
              if (l instanceof Error) {
                if (r.signal?.aborted) throw new c.APIUserAbortError()
                if (n) return this.retryRequest(r, n)
                if ('AbortError' === l.name) throw new c.APIConnectionTimeoutError()
                throw new c.APIConnectionError({ cause: l })
              }
              const u = (0, t.createResponseHeaders)(l.headers)
              if (!l.ok) {
                if (n && this.shouldRetry(l)) return E(`response (error; retrying, ${n} attempts remaining)`, l.status, o, u), this.retryRequest(r, n, u)
                const e = await l.text().catch((e) => (0, t.castToError)(e).message),
                  s = (0, t.safeJSON)(e),
                  i = s ? void 0 : e
                throw (E(`response (error; ${n ? '(error; no more retries left)' : '(error; not retryable)'})`, l.status, o, u, i), this.makeStatusError(l.status, s, i, u))
              }
              return { response: l, options: r, controller: a }
            }
            requestAPIList(e, t) {
              const n = this.makeRequest(t, null)
              return new m(this, n, e)
            }
            buildURL(e, t) {
              const n = P(e) ? new URL(e) : new URL(this.baseURL + (this.baseURL.endsWith('/') && e.startsWith('/') ? e.slice(1) : e)),
                r = this.defaultQuery()
              return A(r) || (t = { ...r, ...t }), 'object' == typeof t && t && !Array.isArray(t) && (n.search = this.stringifyQuery(t)), n.toString()
            }
            stringifyQuery(e) {
              return Object.entries(e)
                .filter(([e, t]) => void 0 !== t)
                .map(([e, t]) => {
                  if ('string' == typeof t || 'number' == typeof t || 'boolean' == typeof t) return `${encodeURIComponent(e)}=${encodeURIComponent(t)}`
                  if (null === t) return `${encodeURIComponent(e)}=`
                  throw new c.OpenAIError(
                    `Cannot stringify type ${typeof t}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
                  )
                })
                .join('&')
            }
            async fetchWithTimeout(e, t, n, r) {
              const { signal: s, ...o } = t || {}
              s && s.addEventListener('abort', () => r.abort())
              const i = setTimeout(() => r.abort(), n)
              return this.getRequestClient()
                .fetch.call(void 0, e, { signal: r.signal, ...o })
                .finally(() => {
                  clearTimeout(i)
                })
            }
            getRequestClient() {
              return { fetch: this.fetch }
            }
            shouldRetry(e) {
              const t = e.headers.get('x-should-retry')
              return 'true' === t || ('false' !== t && (408 === e.status || 409 === e.status || 429 === e.status || e.status >= 500))
            }
            async retryRequest(e, n, r) {
              let s
              const o = r?.['retry-after-ms']
              if (o) {
                const e = parseFloat(o)
                Number.isNaN(e) || (s = e)
              }
              const i = r?.['retry-after']
              if (i && !s) {
                const e = parseFloat(i)
                s = Number.isNaN(e) ? Date.parse(i) - Date.now() : 1e3 * e
              }
              if (!(s && 0 <= s && s < 6e4)) {
                const t = e.maxRetries ?? this.maxRetries
                s = this.calculateDefaultRetryTimeoutMillis(n, t)
              }
              return await (0, t.sleep)(s), this.makeRequest(e, n - 1)
            }
            calculateDefaultRetryTimeoutMillis(e, t) {
              const n = t - e
              return Math.min(0.5 * Math.pow(2, n), 8) * (1 - 0.25 * Math.random()) * 1e3
            }
            getUserAgent() {
              return `${this.constructor.name}/JS ${i.VERSION}`
            }
          })
        class p {
          constructor(e, t, n, o) {
            r.set(this, void 0), s(this, r, e, 'f'), (this.options = o), (this.response = t), (this.body = n)
          }
          hasNextPage() {
            return !!this.getPaginatedItems().length && null != this.nextPageInfo()
          }
          async getNextPage() {
            const e = this.nextPageInfo()
            if (!e) throw new c.OpenAIError('No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.')
            const t = { ...this.options }
            if ('params' in e && 'object' == typeof t.query) t.query = { ...t.query, ...e.params }
            else if ('url' in e) {
              const n = [...Object.entries(t.query || {}), ...e.url.searchParams.entries()]
              for (const [t, r] of n) e.url.searchParams.set(t, r)
              ;(t.query = void 0), (t.path = e.url.toString())
            }
            return await o(this, r, 'f').requestAPIList(this.constructor, t)
          }
          async *iterPages() {
            let e = this
            for (yield e; e.hasNextPage(); ) (e = await e.getNextPage()), yield e
          }
          async *[((r = new WeakMap()), Symbol.asyncIterator)]() {
            for await (const e of this.iterPages()) for (const t of e.getPaginatedItems()) yield t
          }
        }
        t.AbstractPage = p
        class m extends f {
          constructor(e, t, n) {
            super(t, async (t) => new n(e, t.response, await h(t), t.options))
          }
          async *[Symbol.asyncIterator]() {
            const e = await this
            for await (const t of e) yield t
          }
        }
        ;(t.PagePromise = m),
          (t.createResponseHeaders = (e) =>
            new Proxy(Object.fromEntries(e.entries()), {
              get(e, t) {
                const n = t.toString()
                return e[n.toLowerCase()] || e[n]
              },
            }))
        const g = {
          method: !0,
          path: !0,
          query: !0,
          body: !0,
          headers: !0,
          maxRetries: !0,
          stream: !0,
          timeout: !0,
          httpAgent: !0,
          signal: !0,
          idempotencyKey: !0,
          __binaryResponse: !0,
          __streamClass: !0,
        }
        t.isRequestOptions = (e) => 'object' == typeof e && null !== e && !A(e) && Object.keys(e).every((e) => S(g, e))
        const b = (e) => ('x32' === e ? 'x32' : 'x86_64' === e || 'x64' === e ? 'x64' : 'arm' === e ? 'arm' : 'aarch64' === e || 'arm64' === e ? 'arm64' : e ? `other:${e}` : 'unknown'),
          y = (e) =>
            (e = e.toLowerCase()).includes('ios')
              ? 'iOS'
              : 'android' === e
                ? 'Android'
                : 'darwin' === e
                  ? 'MacOS'
                  : 'win32' === e
                    ? 'Windows'
                    : 'freebsd' === e
                      ? 'FreeBSD'
                      : 'openbsd' === e
                        ? 'OpenBSD'
                        : 'linux' === e
                          ? 'Linux'
                          : e
                            ? `Other:${e}`
                            : 'Unknown'
        let _
        const v = () =>
          _ ??
          (_ = (() => {
            if ('undefined' != typeof Deno && null != Deno.build)
              return {
                'X-Stainless-Lang': 'js',
                'X-Stainless-Package-Version': i.VERSION,
                'X-Stainless-OS': y(Deno.build.os),
                'X-Stainless-Arch': b(Deno.build.arch),
                'X-Stainless-Runtime': 'deno',
                'X-Stainless-Runtime-Version': 'string' == typeof Deno.version ? Deno.version : Deno.version?.deno ?? 'unknown',
              }
            if ('undefined' != typeof EdgeRuntime)
              return {
                'X-Stainless-Lang': 'js',
                'X-Stainless-Package-Version': i.VERSION,
                'X-Stainless-OS': 'Unknown',
                'X-Stainless-Arch': `other:${EdgeRuntime}`,
                'X-Stainless-Runtime': 'edge',
                'X-Stainless-Runtime-Version': process.version,
              }
            if ('[object process]' === Object.prototype.toString.call('undefined' != typeof process ? process : 0))
              return {
                'X-Stainless-Lang': 'js',
                'X-Stainless-Package-Version': i.VERSION,
                'X-Stainless-OS': y(process.platform),
                'X-Stainless-Arch': b(process.arch),
                'X-Stainless-Runtime': 'node',
                'X-Stainless-Runtime-Version': process.version,
              }
            const e = (function () {
              if ('undefined' == typeof navigator || !navigator) return null
              const e = [
                { key: 'edge', pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
                { key: 'ie', pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
                { key: 'ie', pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
                { key: 'chrome', pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
                { key: 'firefox', pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
                { key: 'safari', pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ },
              ]
              for (const { key: t, pattern: n } of e) {
                const e = n.exec(navigator.userAgent)
                if (e) return { browser: t, version: `${e[1] || 0}.${e[2] || 0}.${e[3] || 0}` }
              }
              return null
            })()
            return e
              ? {
                  'X-Stainless-Lang': 'js',
                  'X-Stainless-Package-Version': i.VERSION,
                  'X-Stainless-OS': 'Unknown',
                  'X-Stainless-Arch': 'unknown',
                  'X-Stainless-Runtime': `browser:${e.browser}`,
                  'X-Stainless-Runtime-Version': e.version,
                }
              : {
                  'X-Stainless-Lang': 'js',
                  'X-Stainless-Package-Version': i.VERSION,
                  'X-Stainless-OS': 'Unknown',
                  'X-Stainless-Arch': 'unknown',
                  'X-Stainless-Runtime': 'unknown',
                  'X-Stainless-Runtime-Version': 'unknown',
                }
          })())
        t.safeJSON = (e) => {
          try {
            return JSON.parse(e)
          } catch (e) {
            return
          }
        }
        const w = new RegExp('^(?:[a-z]+:)?//', 'i'),
          P = (e) => w.test(e)
        t.sleep = (e) => new Promise((t) => setTimeout(t, e))
        const O = (e, t) => {
          if ('number' != typeof t || !Number.isInteger(t)) throw new c.OpenAIError(`${e} must be an integer`)
          if (t < 0) throw new c.OpenAIError(`${e} must be a positive integer`)
          return t
        }
        function A(e) {
          if (!e) return !0
          for (const t in e) return !1
          return !0
        }
        function S(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }
        function x(e, t) {
          for (const n in t) {
            if (!S(t, n)) continue
            const r = n.toLowerCase()
            if (!r) continue
            const s = t[n]
            null === s ? delete e[r] : void 0 !== s && (e[r] = s)
          }
        }
        function E(e, ...t) {
          'undefined' != typeof process && 'true' === process?.env?.DEBUG && console.log(`OpenAI:DEBUG:${e}`, ...t)
        }
        ;(t.castToError = (e) => (e instanceof Error ? e : new Error(e))),
          (t.ensurePresent = (e) => {
            if (null == e) throw new c.OpenAIError(`Expected a value to be given but received ${e} instead.`)
            return e
          }),
          (t.readEnv = (e) => ('undefined' != typeof process ? process.env?.[e]?.trim() ?? void 0 : 'undefined' != typeof Deno ? Deno.env?.get?.(e)?.trim() : void 0)),
          (t.coerceInteger = (e) => {
            if ('number' == typeof e) return Math.round(e)
            if ('string' == typeof e) return parseInt(e, 10)
            throw new c.OpenAIError(`Could not coerce ${e} (type: ${typeof e}) into a number`)
          }),
          (t.coerceFloat = (e) => {
            if ('number' == typeof e) return e
            if ('string' == typeof e) return parseFloat(e)
            throw new c.OpenAIError(`Could not coerce ${e} (type: ${typeof e}) into a number`)
          }),
          (t.coerceBoolean = (e) => ('boolean' == typeof e ? e : 'string' == typeof e ? 'true' === e : Boolean(e))),
          (t.maybeCoerceInteger = (e) => {
            if (void 0 !== e) return (0, t.coerceInteger)(e)
          }),
          (t.maybeCoerceFloat = (e) => {
            if (void 0 !== e) return (0, t.coerceFloat)(e)
          }),
          (t.maybeCoerceBoolean = (e) => {
            if (void 0 !== e) return (0, t.coerceBoolean)(e)
          }),
          (t.isEmptyObj = A),
          (t.hasOwn = S),
          (t.debug = E)
        const R = () =>
          'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (e) => {
            const t = (16 * Math.random()) | 0
            return ('x' === e ? t : (3 & t) | 8).toString(16)
          })
        ;(t.isRunningInBrowser = () => 'undefined' != typeof window && void 0 !== window.document && 'undefined' != typeof navigator),
          (t.isHeadersProtocol = (e) => 'function' == typeof e?.get),
          (t.getRequiredHeader = (e, n) => {
            const r = n.toLowerCase()
            if ((0, t.isHeadersProtocol)(e)) {
              const t = n[0]?.toUpperCase() + n.substring(1).replace(/([^\w])(\w)/g, (e, t, n) => t + n.toUpperCase())
              for (const s of [n, r, n.toUpperCase(), t]) {
                const t = e.get(s)
                if (t) return t
              }
            }
            for (const [t, s] of Object.entries(e))
              if (t.toLowerCase() === r) return Array.isArray(s) ? (s.length <= 1 || console.warn(`Received ${s.length} entries for the ${n} header, using the first entry.`), s[0]) : s
            throw new Error(`Could not find ${n} header`)
          }),
          (t.toBase64 = (e) => {
            if (!e) return ''
            if ('undefined' != typeof Buffer) return Buffer.from(e).toString('base64')
            if ('undefined' != typeof btoa) return btoa(e)
            throw new c.OpenAIError('Cannot generate b64 string; Expected `Buffer` or `btoa` to be defined')
          }),
          (t.isObj = function (e) {
            return null != e && 'object' == typeof e && !Array.isArray(e)
          })
      },
      9526: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.InternalServerError =
            t.RateLimitError =
            t.UnprocessableEntityError =
            t.ConflictError =
            t.NotFoundError =
            t.PermissionDeniedError =
            t.AuthenticationError =
            t.BadRequestError =
            t.APIConnectionTimeoutError =
            t.APIConnectionError =
            t.APIUserAbortError =
            t.APIError =
            t.OpenAIError =
              void 0)
        const r = n(8757)
        class s extends Error {}
        t.OpenAIError = s
        class o extends s {
          constructor(e, t, n, r) {
            super(`${o.makeMessage(e, t, n)}`), (this.status = e), (this.headers = r), (this.request_id = r?.['x-request-id'])
            const s = t
            ;(this.error = s), (this.code = s?.code), (this.param = s?.param), (this.type = s?.type)
          }
          static makeMessage(e, t, n) {
            const r = t?.message ? ('string' == typeof t.message ? t.message : JSON.stringify(t.message)) : t ? JSON.stringify(t) : n
            return e && r ? `${e} ${r}` : e ? `${e} status code (no body)` : r || '(no status code or body)'
          }
          static generate(e, t, n, s) {
            if (!e) return new i({ cause: (0, r.castToError)(t) })
            const m = t?.error
            return 400 === e
              ? new a(e, m, n, s)
              : 401 === e
                ? new c(e, m, n, s)
                : 403 === e
                  ? new l(e, m, n, s)
                  : 404 === e
                    ? new u(e, m, n, s)
                    : 409 === e
                      ? new d(e, m, n, s)
                      : 422 === e
                        ? new h(e, m, n, s)
                        : 429 === e
                          ? new f(e, m, n, s)
                          : e >= 500
                            ? new p(e, m, n, s)
                            : new o(e, m, n, s)
          }
        }
        ;(t.APIError = o),
          (t.APIUserAbortError = class extends o {
            constructor({ message: e } = {}) {
              super(void 0, void 0, e || 'Request was aborted.', void 0), (this.status = void 0)
            }
          })
        class i extends o {
          constructor({ message: e, cause: t }) {
            super(void 0, void 0, e || 'Connection error.', void 0), (this.status = void 0), t && (this.cause = t)
          }
        }
        ;(t.APIConnectionError = i),
          (t.APIConnectionTimeoutError = class extends i {
            constructor({ message: e } = {}) {
              super({ message: e ?? 'Request timed out.' })
            }
          })
        class a extends o {
          constructor() {
            super(...arguments), (this.status = 400)
          }
        }
        t.BadRequestError = a
        class c extends o {
          constructor() {
            super(...arguments), (this.status = 401)
          }
        }
        t.AuthenticationError = c
        class l extends o {
          constructor() {
            super(...arguments), (this.status = 403)
          }
        }
        t.PermissionDeniedError = l
        class u extends o {
          constructor() {
            super(...arguments), (this.status = 404)
          }
        }
        t.NotFoundError = u
        class d extends o {
          constructor() {
            super(...arguments), (this.status = 409)
          }
        }
        t.ConflictError = d
        class h extends o {
          constructor() {
            super(...arguments), (this.status = 422)
          }
        }
        t.UnprocessableEntityError = h
        class f extends o {
          constructor() {
            super(...arguments), (this.status = 429)
          }
        }
        t.RateLimitError = f
        class p extends o {}
        t.InternalServerError = p
      },
      2012: function (e, t, n) {
        'use strict'
        var r,
          s =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && s(t, e, n)
              return o(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.fileFromPath =
            t.toFile =
            t.UnprocessableEntityError =
            t.PermissionDeniedError =
            t.InternalServerError =
            t.AuthenticationError =
            t.BadRequestError =
            t.RateLimitError =
            t.ConflictError =
            t.NotFoundError =
            t.APIUserAbortError =
            t.APIConnectionTimeoutError =
            t.APIConnectionError =
            t.APIError =
            t.OpenAIError =
            t.OpenAI =
              void 0)
        const a = i(n(8757)),
          c = i(n(9526)),
          l = i(n(4042)),
          u = i(n(2510)),
          d = i(n(3946))
        class h extends a.APIClient {
          constructor({
            baseURL: e = a.readEnv('OPENAI_BASE_URL'),
            apiKey: t = a.readEnv('OPENAI_API_KEY'),
            organization: n = a.readEnv('OPENAI_ORG_ID') ?? null,
            project: r = a.readEnv('OPENAI_PROJECT_ID') ?? null,
            ...s
          } = {}) {
            if (void 0 === t)
              throw new c.OpenAIError(
                "The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).",
              )
            const o = { apiKey: t, organization: n, project: r, ...s, baseURL: e || 'https://api.openai.com/v1' }
            if (!o.dangerouslyAllowBrowser && a.isRunningInBrowser())
              throw new c.OpenAIError(
                "It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew OpenAI({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n",
              )
            super({ baseURL: o.baseURL, timeout: o.timeout ?? 6e5, httpAgent: o.httpAgent, maxRetries: o.maxRetries, fetch: o.fetch }),
              (this.completions = new d.Completions(this)),
              (this.chat = new d.Chat(this)),
              (this.embeddings = new d.Embeddings(this)),
              (this.files = new d.Files(this)),
              (this.images = new d.Images(this)),
              (this.audio = new d.Audio(this)),
              (this.moderations = new d.Moderations(this)),
              (this.models = new d.Models(this)),
              (this.fineTuning = new d.FineTuning(this)),
              (this.beta = new d.Beta(this)),
              (this.batches = new d.Batches(this)),
              (this._options = o),
              (this.apiKey = t),
              (this.organization = n),
              (this.project = r)
          }
          defaultQuery() {
            return this._options.defaultQuery
          }
          defaultHeaders(e) {
            return { ...super.defaultHeaders(e), 'OpenAI-Organization': this.organization, 'OpenAI-Project': this.project, ...this._options.defaultHeaders }
          }
          authHeaders(e) {
            return { Authorization: `Bearer ${this.apiKey}` }
          }
        }
        ;(t.OpenAI = h),
          (r = h),
          (h.OpenAI = r),
          (h.OpenAIError = c.OpenAIError),
          (h.APIError = c.APIError),
          (h.APIConnectionError = c.APIConnectionError),
          (h.APIConnectionTimeoutError = c.APIConnectionTimeoutError),
          (h.APIUserAbortError = c.APIUserAbortError),
          (h.NotFoundError = c.NotFoundError),
          (h.ConflictError = c.ConflictError),
          (h.RateLimitError = c.RateLimitError),
          (h.BadRequestError = c.BadRequestError),
          (h.AuthenticationError = c.AuthenticationError),
          (h.InternalServerError = c.InternalServerError),
          (h.PermissionDeniedError = c.PermissionDeniedError),
          (h.UnprocessableEntityError = c.UnprocessableEntityError),
          (t.OpenAIError = c.OpenAIError),
          (t.APIError = c.APIError),
          (t.APIConnectionError = c.APIConnectionError),
          (t.APIConnectionTimeoutError = c.APIConnectionTimeoutError),
          (t.APIUserAbortError = c.APIUserAbortError),
          (t.NotFoundError = c.NotFoundError),
          (t.ConflictError = c.ConflictError),
          (t.RateLimitError = c.RateLimitError),
          (t.BadRequestError = c.BadRequestError),
          (t.AuthenticationError = c.AuthenticationError),
          (t.InternalServerError = c.InternalServerError),
          (t.PermissionDeniedError = c.PermissionDeniedError),
          (t.UnprocessableEntityError = c.UnprocessableEntityError),
          (t.toFile = l.toFile),
          (t.fileFromPath = l.fileFromPath),
          (function (e) {
            ;(e.toFile = l.toFile),
              (e.fileFromPath = l.fileFromPath),
              (e.Page = u.Page),
              (e.CursorPage = u.CursorPage),
              (e.Completions = d.Completions),
              (e.Chat = d.Chat),
              (e.Embeddings = d.Embeddings),
              (e.Files = d.Files),
              (e.FileObjectsPage = d.FileObjectsPage),
              (e.Images = d.Images),
              (e.Audio = d.Audio),
              (e.Moderations = d.Moderations),
              (e.Models = d.Models),
              (e.ModelsPage = d.ModelsPage),
              (e.FineTuning = d.FineTuning),
              (e.Beta = d.Beta),
              (e.Batches = d.Batches),
              (e.BatchesPage = d.BatchesPage)
          })((h = t.OpenAI || (t.OpenAI = {}))),
          ((t = e.exports = h).default = h)
      },
      2124: function (e, t, n) {
        'use strict'
        var r,
          s,
          o,
          i,
          a,
          c,
          l,
          u,
          d,
          h,
          f,
          p,
          m =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, r, s) {
              if ('m' === r) throw new TypeError('Private method is not writable')
              if ('a' === r && !s) throw new TypeError('Private accessor was defined without a setter')
              if ('function' == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError('Cannot write private member to an object whose class did not declare it')
              return 'a' === r ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n
            },
          g =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, r) {
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter')
              if ('function' == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError('Cannot read private member from an object whose class did not declare it')
              return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.AbstractAssistantStreamRunner = void 0)
        const b = n(9526)
        ;(t.AbstractAssistantStreamRunner = class {
          constructor() {
            ;(this.controller = new AbortController()),
              r.set(this, void 0),
              s.set(this, () => {}),
              o.set(this, () => {}),
              i.set(this, void 0),
              a.set(this, () => {}),
              c.set(this, () => {}),
              l.set(this, {}),
              u.set(this, !1),
              d.set(this, !1),
              h.set(this, !1),
              f.set(this, !1),
              p.set(this, (e) => {
                if ((m(this, d, !0, 'f'), e instanceof Error && 'AbortError' === e.name && (e = new b.APIUserAbortError()), e instanceof b.APIUserAbortError))
                  return m(this, h, !0, 'f'), this._emit('abort', e)
                if (e instanceof b.OpenAIError) return this._emit('error', e)
                if (e instanceof Error) {
                  const t = new b.OpenAIError(e.message)
                  return (t.cause = e), this._emit('error', t)
                }
                return this._emit('error', new b.OpenAIError(String(e)))
              }),
              m(
                this,
                r,
                new Promise((e, t) => {
                  m(this, s, e, 'f'), m(this, o, t, 'f')
                }),
                'f',
              ),
              m(
                this,
                i,
                new Promise((e, t) => {
                  m(this, a, e, 'f'), m(this, c, t, 'f')
                }),
                'f',
              ),
              g(this, r, 'f').catch(() => {}),
              g(this, i, 'f').catch(() => {})
          }
          _run(e) {
            setTimeout(() => {
              e().then(
                () => {
                  this._emit('end')
                },
                g(this, p, 'f'),
              )
            }, 0)
          }
          _addRun(e) {
            return e
          }
          _connected() {
            this.ended || (g(this, s, 'f').call(this), this._emit('connect'))
          }
          get ended() {
            return g(this, u, 'f')
          }
          get errored() {
            return g(this, d, 'f')
          }
          get aborted() {
            return g(this, h, 'f')
          }
          abort() {
            this.controller.abort()
          }
          on(e, t) {
            return (g(this, l, 'f')[e] || (g(this, l, 'f')[e] = [])).push({ listener: t }), this
          }
          off(e, t) {
            const n = g(this, l, 'f')[e]
            if (!n) return this
            const r = n.findIndex((e) => e.listener === t)
            return r >= 0 && n.splice(r, 1), this
          }
          once(e, t) {
            return (g(this, l, 'f')[e] || (g(this, l, 'f')[e] = [])).push({ listener: t, once: !0 }), this
          }
          emitted(e) {
            return new Promise((t, n) => {
              m(this, f, !0, 'f'), 'error' !== e && this.once('error', n), this.once(e, t)
            })
          }
          async done() {
            m(this, f, !0, 'f'), await g(this, i, 'f')
          }
          _emit(e, ...t) {
            if (g(this, u, 'f')) return
            'end' === e && (m(this, u, !0, 'f'), g(this, a, 'f').call(this))
            const n = g(this, l, 'f')[e]
            if ((n && ((g(this, l, 'f')[e] = n.filter((e) => !e.once)), n.forEach(({ listener: e }) => e(...t))), 'abort' === e)) {
              const e = t[0]
              return g(this, f, 'f') || n?.length || Promise.reject(e), g(this, o, 'f').call(this, e), g(this, c, 'f').call(this, e), void this._emit('end')
            }
            if ('error' === e) {
              const e = t[0]
              g(this, f, 'f') || n?.length || Promise.reject(e), g(this, o, 'f').call(this, e), g(this, c, 'f').call(this, e), this._emit('end')
            }
          }
          async _threadAssistantStream(e, t, n) {
            return await this._createThreadAssistantStream(t, e, n)
          }
          async _runAssistantStream(e, t, n, r) {
            return await this._createAssistantStream(t, e, n, r)
          }
          async _runToolAssistantStream(e, t, n, r, s) {
            return await this._createToolAssistantStream(n, e, t, r, s)
          }
          async _createThreadAssistantStream(e, t, n) {
            const r = n?.signal
            r && (r.aborted && this.controller.abort(), r.addEventListener('abort', () => this.controller.abort()))
            const s = await e.createAndRun({ ...t, stream: !1 }, { ...n, signal: this.controller.signal })
            return this._connected(), this._addRun(s)
          }
          async _createToolAssistantStream(e, t, n, r, s) {
            const o = s?.signal
            o && (o.aborted && this.controller.abort(), o.addEventListener('abort', () => this.controller.abort()))
            const i = await e.submitToolOutputs(t, n, { ...r, stream: !1 }, { ...s, signal: this.controller.signal })
            return this._connected(), this._addRun(i)
          }
          async _createAssistantStream(e, t, n, r) {
            const s = r?.signal
            s && (s.aborted && this.controller.abort(), s.addEventListener('abort', () => this.controller.abort()))
            const o = await e.create(t, { ...n, stream: !1 }, { ...r, signal: this.controller.signal })
            return this._connected(), this._addRun(o)
          }
        }),
          (r = new WeakMap()),
          (s = new WeakMap()),
          (o = new WeakMap()),
          (i = new WeakMap()),
          (a = new WeakMap()),
          (c = new WeakMap()),
          (l = new WeakMap()),
          (u = new WeakMap()),
          (d = new WeakMap()),
          (h = new WeakMap()),
          (f = new WeakMap()),
          (p = new WeakMap())
      },
      1118: function (e, t, n) {
        'use strict'
        var r,
          s,
          o,
          i,
          a,
          c,
          l,
          u,
          d,
          h,
          f,
          p,
          m,
          g,
          b,
          y,
          _,
          v,
          w,
          P,
          O =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, r, s) {
              if ('m' === r) throw new TypeError('Private method is not writable')
              if ('a' === r && !s) throw new TypeError('Private accessor was defined without a setter')
              if ('function' == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError('Cannot write private member to an object whose class did not declare it')
              return 'a' === r ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n
            },
          A =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, r) {
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter')
              if ('function' == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError('Cannot read private member from an object whose class did not declare it')
              return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.AbstractChatCompletionRunner = void 0)
        const S = n(9526),
          x = n(4691),
          E = n(6289),
          R = 10
        ;(t.AbstractChatCompletionRunner = class {
          constructor() {
            r.add(this),
              (this.controller = new AbortController()),
              s.set(this, void 0),
              o.set(this, () => {}),
              i.set(this, () => {}),
              a.set(this, void 0),
              c.set(this, () => {}),
              l.set(this, () => {}),
              u.set(this, {}),
              (this._chatCompletions = []),
              (this.messages = []),
              d.set(this, !1),
              h.set(this, !1),
              f.set(this, !1),
              p.set(this, !1),
              v.set(this, (e) => {
                if ((O(this, h, !0, 'f'), e instanceof Error && 'AbortError' === e.name && (e = new S.APIUserAbortError()), e instanceof S.APIUserAbortError))
                  return O(this, f, !0, 'f'), this._emit('abort', e)
                if (e instanceof S.OpenAIError) return this._emit('error', e)
                if (e instanceof Error) {
                  const t = new S.OpenAIError(e.message)
                  return (t.cause = e), this._emit('error', t)
                }
                return this._emit('error', new S.OpenAIError(String(e)))
              }),
              O(
                this,
                s,
                new Promise((e, t) => {
                  O(this, o, e, 'f'), O(this, i, t, 'f')
                }),
                'f',
              ),
              O(
                this,
                a,
                new Promise((e, t) => {
                  O(this, c, e, 'f'), O(this, l, t, 'f')
                }),
                'f',
              ),
              A(this, s, 'f').catch(() => {}),
              A(this, a, 'f').catch(() => {})
          }
          _run(e) {
            setTimeout(() => {
              e().then(
                () => {
                  this._emitFinal(), this._emit('end')
                },
                A(this, v, 'f'),
              )
            }, 0)
          }
          _addChatCompletion(e) {
            this._chatCompletions.push(e), this._emit('chatCompletion', e)
            const t = e.choices[0]?.message
            return t && this._addMessage(t), e
          }
          _addMessage(e, t = !0) {
            if (('content' in e || (e.content = null), this.messages.push(e), t))
              if ((this._emit('message', e), ((0, E.isFunctionMessage)(e) || (0, E.isToolMessage)(e)) && e.content)) this._emit('functionCallResult', e.content)
              else if ((0, E.isAssistantMessage)(e) && e.function_call) this._emit('functionCall', e.function_call)
              else if ((0, E.isAssistantMessage)(e) && e.tool_calls) for (const t of e.tool_calls) 'function' === t.type && this._emit('functionCall', t.function)
          }
          _connected() {
            this.ended || (A(this, o, 'f').call(this), this._emit('connect'))
          }
          get ended() {
            return A(this, d, 'f')
          }
          get errored() {
            return A(this, h, 'f')
          }
          get aborted() {
            return A(this, f, 'f')
          }
          abort() {
            this.controller.abort()
          }
          on(e, t) {
            return (A(this, u, 'f')[e] || (A(this, u, 'f')[e] = [])).push({ listener: t }), this
          }
          off(e, t) {
            const n = A(this, u, 'f')[e]
            if (!n) return this
            const r = n.findIndex((e) => e.listener === t)
            return r >= 0 && n.splice(r, 1), this
          }
          once(e, t) {
            return (A(this, u, 'f')[e] || (A(this, u, 'f')[e] = [])).push({ listener: t, once: !0 }), this
          }
          emitted(e) {
            return new Promise((t, n) => {
              O(this, p, !0, 'f'), 'error' !== e && this.once('error', n), this.once(e, t)
            })
          }
          async done() {
            O(this, p, !0, 'f'), await A(this, a, 'f')
          }
          async finalChatCompletion() {
            await this.done()
            const e = this._chatCompletions[this._chatCompletions.length - 1]
            if (!e) throw new S.OpenAIError('stream ended without producing a ChatCompletion')
            return e
          }
          async finalContent() {
            return await this.done(), A(this, r, 'm', m).call(this)
          }
          async finalMessage() {
            return await this.done(), A(this, r, 'm', g).call(this)
          }
          async finalFunctionCall() {
            return await this.done(), A(this, r, 'm', b).call(this)
          }
          async finalFunctionCallResult() {
            return await this.done(), A(this, r, 'm', y).call(this)
          }
          async totalUsage() {
            return await this.done(), A(this, r, 'm', _).call(this)
          }
          allChatCompletions() {
            return [...this._chatCompletions]
          }
          _emit(e, ...t) {
            if (A(this, d, 'f')) return
            'end' === e && (O(this, d, !0, 'f'), A(this, c, 'f').call(this))
            const n = A(this, u, 'f')[e]
            if ((n && ((A(this, u, 'f')[e] = n.filter((e) => !e.once)), n.forEach(({ listener: e }) => e(...t))), 'abort' === e)) {
              const e = t[0]
              return A(this, p, 'f') || n?.length || Promise.reject(e), A(this, i, 'f').call(this, e), A(this, l, 'f').call(this, e), void this._emit('end')
            }
            if ('error' === e) {
              const e = t[0]
              A(this, p, 'f') || n?.length || Promise.reject(e), A(this, i, 'f').call(this, e), A(this, l, 'f').call(this, e), this._emit('end')
            }
          }
          _emitFinal() {
            const e = this._chatCompletions[this._chatCompletions.length - 1]
            e && this._emit('finalChatCompletion', e)
            const t = A(this, r, 'm', g).call(this)
            t && this._emit('finalMessage', t)
            const n = A(this, r, 'm', m).call(this)
            n && this._emit('finalContent', n)
            const s = A(this, r, 'm', b).call(this)
            s && this._emit('finalFunctionCall', s)
            const o = A(this, r, 'm', y).call(this)
            null != o && this._emit('finalFunctionCallResult', o), this._chatCompletions.some((e) => e.usage) && this._emit('totalUsage', A(this, r, 'm', _).call(this))
          }
          async _createChatCompletion(e, t, n) {
            const s = n?.signal
            s && (s.aborted && this.controller.abort(), s.addEventListener('abort', () => this.controller.abort())), A(this, r, 'm', w).call(this, t)
            const o = await e.create({ ...t, stream: !1 }, { ...n, signal: this.controller.signal })
            return this._connected(), this._addChatCompletion(o)
          }
          async _runChatCompletion(e, t, n) {
            for (const e of t.messages) this._addMessage(e, !1)
            return await this._createChatCompletion(e, t, n)
          }
          async _runFunctions(e, t, n) {
            const s = 'function',
              { function_call: o = 'auto', stream: i, ...a } = t,
              c = 'string' != typeof o && o?.name,
              { maxChatCompletions: l = R } = n || {},
              u = {}
            for (const e of t.functions) u[e.name || e.function.name] = e
            const d = t.functions.map((e) => ({ name: e.name || e.function.name, parameters: e.parameters, description: e.description }))
            for (const e of t.messages) this._addMessage(e, !1)
            for (let t = 0; t < l; ++t) {
              const t = await this._createChatCompletion(e, { ...a, function_call: o, functions: d, messages: [...this.messages] }, n),
                i = t.choices[0]?.message
              if (!i) throw new S.OpenAIError('missing message in ChatCompletion response')
              if (!i.function_call) return
              const { name: l, arguments: h } = i.function_call,
                f = u[l]
              if (!f) {
                const e = `Invalid function_call: ${JSON.stringify(l)}. Available options are: ${d.map((e) => JSON.stringify(e.name)).join(', ')}. Please try again`
                this._addMessage({ role: s, name: l, content: e })
                continue
              }
              if (c && c !== l) {
                const e = `Invalid function_call: ${JSON.stringify(l)}. ${JSON.stringify(c)} requested. Please try again`
                this._addMessage({ role: s, name: l, content: e })
                continue
              }
              let p
              try {
                p = (0, x.isRunnableFunctionWithParse)(f) ? await f.parse(h) : h
              } catch (e) {
                this._addMessage({ role: s, name: l, content: e instanceof Error ? e.message : String(e) })
                continue
              }
              const m = await f.function(p, this),
                g = A(this, r, 'm', P).call(this, m)
              if ((this._addMessage({ role: s, name: l, content: g }), c)) return
            }
          }
          async _runTools(e, t, n) {
            const s = 'tool',
              { tool_choice: o = 'auto', stream: i, ...a } = t,
              c = 'string' != typeof o && o?.function?.name,
              { maxChatCompletions: l = R } = n || {},
              u = {}
            for (const e of t.tools) 'function' === e.type && (u[e.function.name || e.function.function.name] = e.function)
            const d =
              'tools' in t
                ? t.tools.map((e) =>
                    'function' === e.type
                      ? { type: 'function', function: { name: e.function.name || e.function.function.name, parameters: e.function.parameters, description: e.function.description } }
                      : e,
                  )
                : void 0
            for (const e of t.messages) this._addMessage(e, !1)
            for (let t = 0; t < l; ++t) {
              const t = await this._createChatCompletion(e, { ...a, tool_choice: o, tools: d, messages: [...this.messages] }, n),
                i = t.choices[0]?.message
              if (!i) throw new S.OpenAIError('missing message in ChatCompletion response')
              if (!i.tool_calls) return
              for (const e of i.tool_calls) {
                if ('function' !== e.type) continue
                const t = e.id,
                  { name: n, arguments: o } = e.function,
                  i = u[n]
                if (!i) {
                  const e = `Invalid tool_call: ${JSON.stringify(n)}. Available options are: ${d.map((e) => JSON.stringify(e.function.name)).join(', ')}. Please try again`
                  this._addMessage({ role: s, tool_call_id: t, content: e })
                  continue
                }
                if (c && c !== n) {
                  const e = `Invalid tool_call: ${JSON.stringify(n)}. ${JSON.stringify(c)} requested. Please try again`
                  this._addMessage({ role: s, tool_call_id: t, content: e })
                  continue
                }
                let a
                try {
                  a = (0, x.isRunnableFunctionWithParse)(i) ? await i.parse(o) : o
                } catch (e) {
                  const n = e instanceof Error ? e.message : String(e)
                  this._addMessage({ role: s, tool_call_id: t, content: n })
                  continue
                }
                const l = await i.function(a, this),
                  h = A(this, r, 'm', P).call(this, l)
                if ((this._addMessage({ role: s, tool_call_id: t, content: h }), c)) return
              }
            }
          }
        }),
          (s = new WeakMap()),
          (o = new WeakMap()),
          (i = new WeakMap()),
          (a = new WeakMap()),
          (c = new WeakMap()),
          (l = new WeakMap()),
          (u = new WeakMap()),
          (d = new WeakMap()),
          (h = new WeakMap()),
          (f = new WeakMap()),
          (p = new WeakMap()),
          (v = new WeakMap()),
          (r = new WeakSet()),
          (m = function () {
            return A(this, r, 'm', g).call(this).content ?? null
          }),
          (g = function () {
            let e = this.messages.length
            for (; e-- > 0; ) {
              const t = this.messages[e]
              if ((0, E.isAssistantMessage)(t)) return { ...t, content: t.content ?? null }
            }
            throw new S.OpenAIError('stream ended without producing a ChatCompletionMessage with role=assistant')
          }),
          (b = function () {
            for (let e = this.messages.length - 1; e >= 0; e--) {
              const t = this.messages[e]
              if ((0, E.isAssistantMessage)(t) && t?.function_call) return t.function_call
              if ((0, E.isAssistantMessage)(t) && t?.tool_calls?.length) return t.tool_calls.at(-1)?.function
            }
          }),
          (y = function () {
            for (let e = this.messages.length - 1; e >= 0; e--) {
              const t = this.messages[e]
              if ((0, E.isFunctionMessage)(t) && null != t.content) return t.content
              if ((0, E.isToolMessage)(t) && null != t.content && this.messages.some((e) => 'assistant' === e.role && e.tool_calls?.some((e) => 'function' === e.type && e.id === t.tool_call_id)))
                return t.content
            }
          }),
          (_ = function () {
            const e = { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 }
            for (const { usage: t } of this._chatCompletions) t && ((e.completion_tokens += t.completion_tokens), (e.prompt_tokens += t.prompt_tokens), (e.total_tokens += t.total_tokens))
            return e
          }),
          (w = function (e) {
            if (null != e.n && e.n > 1) throw new S.OpenAIError('ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.')
          }),
          (P = function (e) {
            return 'string' == typeof e ? e : void 0 === e ? 'undefined' : JSON.stringify(e)
          })
      },
      8868: function (e, t, n) {
        'use strict'
        var r,
          s,
          o,
          i,
          a,
          c,
          l,
          u,
          d,
          h,
          f,
          p,
          m,
          g,
          b,
          y,
          _,
          v,
          w,
          P,
          O,
          A,
          S =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          x =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          E =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && S(t, e, n)
              return x(t, e), t
            },
          R =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, r) {
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter')
              if ('function' == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError('Cannot read private member from an object whose class did not declare it')
              return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e)
            },
          j =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, r, s) {
              if ('m' === r) throw new TypeError('Private method is not writable')
              if ('a' === r && !s) throw new TypeError('Private accessor was defined without a setter')
              if ('function' == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError('Cannot write private member to an object whose class did not declare it')
              return 'a' === r ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.AssistantStream = void 0)
        const C = E(n(8757)),
          I = n(2124),
          M = n(6716),
          F = n(9526)
        class k extends I.AbstractAssistantStreamRunner {
          constructor() {
            super(...arguments),
              r.add(this),
              s.set(this, []),
              o.set(this, {}),
              i.set(this, {}),
              a.set(this, void 0),
              c.set(this, void 0),
              l.set(this, void 0),
              u.set(this, void 0),
              d.set(this, void 0),
              h.set(this, void 0),
              f.set(this, void 0),
              p.set(this, void 0),
              m.set(this, void 0)
          }
          [((s = new WeakMap()),
          (o = new WeakMap()),
          (i = new WeakMap()),
          (a = new WeakMap()),
          (c = new WeakMap()),
          (l = new WeakMap()),
          (u = new WeakMap()),
          (d = new WeakMap()),
          (h = new WeakMap()),
          (f = new WeakMap()),
          (p = new WeakMap()),
          (m = new WeakMap()),
          (r = new WeakSet()),
          Symbol.asyncIterator)]() {
            const e = [],
              t = []
            let n = !1
            return (
              this.on('event', (n) => {
                const r = t.shift()
                r ? r.resolve(n) : e.push(n)
              }),
              this.on('end', () => {
                n = !0
                for (const e of t) e.resolve(void 0)
                t.length = 0
              }),
              this.on('abort', (e) => {
                n = !0
                for (const n of t) n.reject(e)
                t.length = 0
              }),
              this.on('error', (e) => {
                n = !0
                for (const n of t) n.reject(e)
                t.length = 0
              }),
              {
                next: async () =>
                  e.length
                    ? { value: e.shift(), done: !1 }
                    : n
                      ? { value: void 0, done: !0 }
                      : new Promise((e, n) => t.push({ resolve: e, reject: n })).then((e) => (e ? { value: e, done: !1 } : { value: void 0, done: !0 })),
                return: async () => (this.abort(), { value: void 0, done: !0 }),
              }
            )
          }
          static fromReadableStream(e) {
            const t = new k()
            return t._run(() => t._fromReadableStream(e)), t
          }
          async _fromReadableStream(e, t) {
            const n = t?.signal
            n && (n.aborted && this.controller.abort(), n.addEventListener('abort', () => this.controller.abort())), this._connected()
            const s = M.Stream.fromReadableStream(e, this.controller)
            for await (const e of s) R(this, r, 'm', g).call(this, e)
            if (s.controller.signal?.aborted) throw new F.APIUserAbortError()
            return this._addRun(R(this, r, 'm', b).call(this))
          }
          toReadableStream() {
            return new M.Stream(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream()
          }
          static createToolAssistantStream(e, t, n, r, s) {
            const o = new k()
            return o._run(() => o._runToolAssistantStream(e, t, n, r, { ...s, headers: { ...s?.headers, 'X-Stainless-Helper-Method': 'stream' } })), o
          }
          async _createToolAssistantStream(e, t, n, s, o) {
            const i = o?.signal
            i && (i.aborted && this.controller.abort(), i.addEventListener('abort', () => this.controller.abort()))
            const a = { ...s, stream: !0 },
              c = await e.submitToolOutputs(t, n, a, { ...o, signal: this.controller.signal })
            this._connected()
            for await (const e of c) R(this, r, 'm', g).call(this, e)
            if (c.controller.signal?.aborted) throw new F.APIUserAbortError()
            return this._addRun(R(this, r, 'm', b).call(this))
          }
          static createThreadAssistantStream(e, t, n) {
            const r = new k()
            return r._run(() => r._threadAssistantStream(e, t, { ...n, headers: { ...n?.headers, 'X-Stainless-Helper-Method': 'stream' } })), r
          }
          static createAssistantStream(e, t, n, r) {
            const s = new k()
            return s._run(() => s._runAssistantStream(e, t, n, { ...r, headers: { ...r?.headers, 'X-Stainless-Helper-Method': 'stream' } })), s
          }
          currentEvent() {
            return R(this, f, 'f')
          }
          currentRun() {
            return R(this, p, 'f')
          }
          currentMessageSnapshot() {
            return R(this, a, 'f')
          }
          currentRunStepSnapshot() {
            return R(this, m, 'f')
          }
          async finalRunSteps() {
            return await this.done(), Object.values(R(this, o, 'f'))
          }
          async finalMessages() {
            return await this.done(), Object.values(R(this, i, 'f'))
          }
          async finalRun() {
            if ((await this.done(), !R(this, c, 'f'))) throw Error('Final run was not received.')
            return R(this, c, 'f')
          }
          async _createThreadAssistantStream(e, t, n) {
            const s = n?.signal
            s && (s.aborted && this.controller.abort(), s.addEventListener('abort', () => this.controller.abort()))
            const o = { ...t, stream: !0 },
              i = await e.createAndRun(o, { ...n, signal: this.controller.signal })
            this._connected()
            for await (const e of i) R(this, r, 'm', g).call(this, e)
            if (i.controller.signal?.aborted) throw new F.APIUserAbortError()
            return this._addRun(R(this, r, 'm', b).call(this))
          }
          async _createAssistantStream(e, t, n, s) {
            const o = s?.signal
            o && (o.aborted && this.controller.abort(), o.addEventListener('abort', () => this.controller.abort()))
            const i = { ...n, stream: !0 },
              a = await e.create(t, i, { ...s, signal: this.controller.signal })
            this._connected()
            for await (const e of a) R(this, r, 'm', g).call(this, e)
            if (a.controller.signal?.aborted) throw new F.APIUserAbortError()
            return this._addRun(R(this, r, 'm', b).call(this))
          }
          static accumulateDelta(e, t) {
            for (const [n, r] of Object.entries(t)) {
              if (!e.hasOwnProperty(n)) {
                e[n] = r
                continue
              }
              let t = e[n]
              if (null != t)
                if ('index' !== n && 'type' !== n) {
                  if ('string' == typeof t && 'string' == typeof r) t += r
                  else if ('number' == typeof t && 'number' == typeof r) t += r
                  else if (C.isObj(t) && C.isObj(r)) t = this.accumulateDelta(t, r)
                  else {
                    if (!Array.isArray(t) || !Array.isArray(r)) throw Error(`Unhandled record type: ${n}, deltaValue: ${r}, accValue: ${t}`)
                    if (t.every((e) => 'string' == typeof e || 'number' == typeof e)) {
                      t.push(...r)
                      continue
                    }
                  }
                  e[n] = t
                } else e[n] = r
              else e[n] = r
            }
            return e
          }
        }
        ;(t.AssistantStream = k),
          (g = function (e) {
            if (!this.ended)
              switch ((j(this, f, e, 'f'), R(this, r, 'm', v).call(this, e), e.event)) {
                case 'thread.created':
                  break
                case 'thread.run.created':
                case 'thread.run.queued':
                case 'thread.run.in_progress':
                case 'thread.run.requires_action':
                case 'thread.run.completed':
                case 'thread.run.failed':
                case 'thread.run.cancelling':
                case 'thread.run.cancelled':
                case 'thread.run.expired':
                  R(this, r, 'm', A).call(this, e)
                  break
                case 'thread.run.step.created':
                case 'thread.run.step.in_progress':
                case 'thread.run.step.delta':
                case 'thread.run.step.completed':
                case 'thread.run.step.failed':
                case 'thread.run.step.cancelled':
                case 'thread.run.step.expired':
                  R(this, r, 'm', _).call(this, e)
                  break
                case 'thread.message.created':
                case 'thread.message.in_progress':
                case 'thread.message.delta':
                case 'thread.message.completed':
                case 'thread.message.incomplete':
                  R(this, r, 'm', y).call(this, e)
                  break
                case 'error':
                  throw new Error('Encountered an error event in event processing - errors should be processed earlier')
              }
          }),
          (b = function () {
            if (this.ended) throw new F.OpenAIError("stream has ended, this shouldn't happen")
            if (!R(this, c, 'f')) throw Error('Final run has not been received')
            return R(this, c, 'f')
          }),
          (y = function (e) {
            const [t, n] = R(this, r, 'm', P).call(this, e, R(this, a, 'f'))
            j(this, a, t, 'f'), (R(this, i, 'f')[t.id] = t)
            for (const e of n) {
              const n = t.content[e.index]
              'text' == n?.type && this._emit('textCreated', n.text)
            }
            switch (e.event) {
              case 'thread.message.created':
                this._emit('messageCreated', e.data)
                break
              case 'thread.message.in_progress':
                break
              case 'thread.message.delta':
                if ((this._emit('messageDelta', e.data.delta, t), e.data.delta.content))
                  for (const n of e.data.delta.content) {
                    if ('text' == n.type && n.text) {
                      let e = n.text,
                        r = t.content[n.index]
                      if (!r || 'text' != r.type) throw Error('The snapshot associated with this text delta is not text or missing')
                      this._emit('textDelta', e, r.text)
                    }
                    if (n.index != R(this, l, 'f')) {
                      if (R(this, u, 'f'))
                        switch (R(this, u, 'f').type) {
                          case 'text':
                            this._emit('textDone', R(this, u, 'f').text, R(this, a, 'f'))
                            break
                          case 'image_file':
                            this._emit('imageFileDone', R(this, u, 'f').image_file, R(this, a, 'f'))
                        }
                      j(this, l, n.index, 'f')
                    }
                    j(this, u, t.content[n.index], 'f')
                  }
                break
              case 'thread.message.completed':
              case 'thread.message.incomplete':
                if (void 0 !== R(this, l, 'f')) {
                  const t = e.data.content[R(this, l, 'f')]
                  if (t)
                    switch (t.type) {
                      case 'image_file':
                        this._emit('imageFileDone', t.image_file, R(this, a, 'f'))
                        break
                      case 'text':
                        this._emit('textDone', t.text, R(this, a, 'f'))
                    }
                }
                R(this, a, 'f') && this._emit('messageDone', e.data), j(this, a, void 0, 'f')
            }
          }),
          (_ = function (e) {
            const t = R(this, r, 'm', w).call(this, e)
            switch ((j(this, m, t, 'f'), e.event)) {
              case 'thread.run.step.created':
                this._emit('runStepCreated', e.data)
                break
              case 'thread.run.step.delta':
                const n = e.data.delta
                if (n.step_details && 'tool_calls' == n.step_details.type && n.step_details.tool_calls && 'tool_calls' == t.step_details.type)
                  for (const e of n.step_details.tool_calls)
                    e.index == R(this, d, 'f')
                      ? this._emit('toolCallDelta', e, t.step_details.tool_calls[e.index])
                      : (R(this, h, 'f') && this._emit('toolCallDone', R(this, h, 'f')),
                        j(this, d, e.index, 'f'),
                        j(this, h, t.step_details.tool_calls[e.index], 'f'),
                        R(this, h, 'f') && this._emit('toolCallCreated', R(this, h, 'f')))
                this._emit('runStepDelta', e.data.delta, t)
                break
              case 'thread.run.step.completed':
              case 'thread.run.step.failed':
              case 'thread.run.step.cancelled':
              case 'thread.run.step.expired':
                j(this, m, void 0, 'f'),
                  'tool_calls' == e.data.step_details.type && R(this, h, 'f') && (this._emit('toolCallDone', R(this, h, 'f')), j(this, h, void 0, 'f')),
                  this._emit('runStepDone', e.data, t)
            }
          }),
          (v = function (e) {
            R(this, s, 'f').push(e), this._emit('event', e)
          }),
          (w = function (e) {
            switch (e.event) {
              case 'thread.run.step.created':
                return (R(this, o, 'f')[e.data.id] = e.data), e.data
              case 'thread.run.step.delta':
                let t = R(this, o, 'f')[e.data.id]
                if (!t) throw Error('Received a RunStepDelta before creation of a snapshot')
                let n = e.data
                if (n.delta) {
                  const r = k.accumulateDelta(t, n.delta)
                  R(this, o, 'f')[e.data.id] = r
                }
                return R(this, o, 'f')[e.data.id]
              case 'thread.run.step.completed':
              case 'thread.run.step.failed':
              case 'thread.run.step.cancelled':
              case 'thread.run.step.expired':
              case 'thread.run.step.in_progress':
                R(this, o, 'f')[e.data.id] = e.data
            }
            if (R(this, o, 'f')[e.data.id]) return R(this, o, 'f')[e.data.id]
            throw new Error('No snapshot available')
          }),
          (P = function (e, t) {
            let n = []
            switch (e.event) {
              case 'thread.message.created':
                return [e.data, n]
              case 'thread.message.delta':
                if (!t) throw Error('Received a delta with no existing snapshot (there should be one from message creation)')
                let s = e.data
                if (s.delta.content)
                  for (const e of s.delta.content)
                    if (e.index in t.content) {
                      let n = t.content[e.index]
                      t.content[e.index] = R(this, r, 'm', O).call(this, e, n)
                    } else (t.content[e.index] = e), n.push(e)
                return [t, n]
              case 'thread.message.in_progress':
              case 'thread.message.completed':
              case 'thread.message.incomplete':
                if (t) return [t, n]
                throw Error('Received thread message event with no existing snapshot')
            }
            throw Error('Tried to accumulate a non-message event')
          }),
          (O = function (e, t) {
            return k.accumulateDelta(t, e)
          }),
          (A = function (e) {
            switch ((j(this, p, e.data, 'f'), e.event)) {
              case 'thread.run.created':
              case 'thread.run.queued':
              case 'thread.run.in_progress':
              case 'thread.run.cancelling':
                break
              case 'thread.run.requires_action':
              case 'thread.run.cancelled':
              case 'thread.run.failed':
              case 'thread.run.completed':
              case 'thread.run.expired':
                j(this, c, e.data, 'f'), R(this, h, 'f') && (this._emit('toolCallDone', R(this, h, 'f')), j(this, h, void 0, 'f'))
            }
          })
      },
      4648: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.ChatCompletionRunner = void 0)
        const r = n(1118),
          s = n(6289)
        class o extends r.AbstractChatCompletionRunner {
          static runFunctions(e, t, n) {
            const r = new o(),
              s = { ...n, headers: { ...n?.headers, 'X-Stainless-Helper-Method': 'runFunctions' } }
            return r._run(() => r._runFunctions(e, t, s)), r
          }
          static runTools(e, t, n) {
            const r = new o(),
              s = { ...n, headers: { ...n?.headers, 'X-Stainless-Helper-Method': 'runTools' } }
            return r._run(() => r._runTools(e, t, s)), r
          }
          _addMessage(e) {
            super._addMessage(e), (0, s.isAssistantMessage)(e) && e.content && this._emit('content', e.content)
          }
        }
        t.ChatCompletionRunner = o
      },
      5126: function (e, t, n) {
        'use strict'
        var r,
          s,
          o,
          i,
          a,
          c,
          l =
            (this && this.__classPrivateFieldGet) ||
            function (e, t, n, r) {
              if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter')
              if ('function' == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError('Cannot read private member from an object whose class did not declare it')
              return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e)
            },
          u =
            (this && this.__classPrivateFieldSet) ||
            function (e, t, n, r, s) {
              if ('m' === r) throw new TypeError('Private method is not writable')
              if ('a' === r && !s) throw new TypeError('Private accessor was defined without a setter')
              if ('function' == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError('Cannot write private member to an object whose class did not declare it')
              return 'a' === r ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.ChatCompletionStream = void 0)
        const d = n(9526),
          h = n(1118),
          f = n(6716)
        class p extends h.AbstractChatCompletionRunner {
          constructor() {
            super(...arguments), r.add(this), s.set(this, void 0)
          }
          get currentChatCompletionSnapshot() {
            return l(this, s, 'f')
          }
          static fromReadableStream(e) {
            const t = new p()
            return t._run(() => t._fromReadableStream(e)), t
          }
          static createChatCompletion(e, t, n) {
            const r = new p()
            return r._run(() => r._runChatCompletion(e, { ...t, stream: !0 }, { ...n, headers: { ...n?.headers, 'X-Stainless-Helper-Method': 'stream' } })), r
          }
          async _createChatCompletion(e, t, n) {
            const s = n?.signal
            s && (s.aborted && this.controller.abort(), s.addEventListener('abort', () => this.controller.abort())), l(this, r, 'm', o).call(this)
            const c = await e.create({ ...t, stream: !0 }, { ...n, signal: this.controller.signal })
            this._connected()
            for await (const e of c) l(this, r, 'm', i).call(this, e)
            if (c.controller.signal?.aborted) throw new d.APIUserAbortError()
            return this._addChatCompletion(l(this, r, 'm', a).call(this))
          }
          async _fromReadableStream(e, t) {
            const n = t?.signal
            n && (n.aborted && this.controller.abort(), n.addEventListener('abort', () => this.controller.abort())), l(this, r, 'm', o).call(this), this._connected()
            const s = f.Stream.fromReadableStream(e, this.controller)
            let c
            for await (const e of s) c && c !== e.id && this._addChatCompletion(l(this, r, 'm', a).call(this)), l(this, r, 'm', i).call(this, e), (c = e.id)
            if (s.controller.signal?.aborted) throw new d.APIUserAbortError()
            return this._addChatCompletion(l(this, r, 'm', a).call(this))
          }
          [((s = new WeakMap()),
          (r = new WeakSet()),
          (o = function () {
            this.ended || u(this, s, void 0, 'f')
          }),
          (i = function (e) {
            if (this.ended) return
            const t = l(this, r, 'm', c).call(this, e)
            this._emit('chunk', e, t)
            const n = e.choices[0]?.delta?.content,
              s = t.choices[0]?.message
            null != n && 'assistant' === s?.role && s?.content && this._emit('content', n, s.content)
          }),
          (a = function () {
            if (this.ended) throw new d.OpenAIError("stream has ended, this shouldn't happen")
            const e = l(this, s, 'f')
            if (!e) throw new d.OpenAIError('request ended without sending any chunks')
            return (
              u(this, s, void 0, 'f'),
              (function (e) {
                const { id: t, choices: n, created: r, model: s, system_fingerprint: o, ...i } = e
                return {
                  ...i,
                  id: t,
                  choices: n.map(({ message: t, finish_reason: n, index: r, logprobs: s, ...o }) => {
                    if (!n) throw new d.OpenAIError(`missing finish_reason for choice ${r}`)
                    const { content: i = null, function_call: a, tool_calls: c, ...l } = t,
                      u = t.role
                    if (!u) throw new d.OpenAIError(`missing role for choice ${r}`)
                    if (a) {
                      const { arguments: e, name: t } = a
                      if (null == e) throw new d.OpenAIError(`missing function_call.arguments for choice ${r}`)
                      if (!t) throw new d.OpenAIError(`missing function_call.name for choice ${r}`)
                      return { ...o, message: { content: i, function_call: { arguments: e, name: t }, role: u }, finish_reason: n, index: r, logprobs: s }
                    }
                    return c
                      ? {
                          ...o,
                          index: r,
                          finish_reason: n,
                          logprobs: s,
                          message: {
                            ...l,
                            role: u,
                            content: i,
                            tool_calls: c.map((t, n) => {
                              const { function: s, type: o, id: i, ...a } = t,
                                { arguments: c, name: l, ...u } = s || {}
                              if (null == i) throw new d.OpenAIError(`missing choices[${r}].tool_calls[${n}].id\n${m(e)}`)
                              if (null == o) throw new d.OpenAIError(`missing choices[${r}].tool_calls[${n}].type\n${m(e)}`)
                              if (null == l) throw new d.OpenAIError(`missing choices[${r}].tool_calls[${n}].function.name\n${m(e)}`)
                              if (null == c) throw new d.OpenAIError(`missing choices[${r}].tool_calls[${n}].function.arguments\n${m(e)}`)
                              return { ...a, id: i, type: o, function: { ...u, name: l, arguments: c } }
                            }),
                          },
                        }
                      : { ...o, message: { ...l, content: i, role: u }, finish_reason: n, index: r, logprobs: s }
                  }),
                  created: r,
                  model: s,
                  object: 'chat.completion',
                  ...(o ? { system_fingerprint: o } : {}),
                }
              })(e)
            )
          }),
          (c = function (e) {
            var t, n, r
            let o = l(this, s, 'f')
            const { choices: i, ...a } = e
            o ? Object.assign(o, a) : (o = u(this, s, { ...a, choices: [] }, 'f'))
            for (const { delta: s, finish_reason: i, index: a, logprobs: c = null, ...l } of e.choices) {
              let e = o.choices[a]
              if ((e || (e = o.choices[a] = { finish_reason: i, index: a, message: {}, logprobs: c, ...l }), c))
                if (e.logprobs) {
                  const { content: n, ...r } = c
                  Object.assign(e.logprobs, r), n && ((t = e.logprobs).content ?? (t.content = []), e.logprobs.content.push(...n))
                } else e.logprobs = Object.assign({}, c)
              if ((i && (e.finish_reason = i), Object.assign(e, l), !s)) continue
              const { content: u, function_call: d, role: h, tool_calls: f, ...p } = s
              if (
                (Object.assign(e.message, p),
                u && (e.message.content = (e.message.content || '') + u),
                h && (e.message.role = h),
                d &&
                  (e.message.function_call
                    ? (d.name && (e.message.function_call.name = d.name),
                      d.arguments && ((n = e.message.function_call).arguments ?? (n.arguments = ''), (e.message.function_call.arguments += d.arguments)))
                    : (e.message.function_call = d)),
                f)
              ) {
                e.message.tool_calls || (e.message.tool_calls = [])
                for (const { index: t, id: n, type: s, function: o, ...i } of f) {
                  const a = (r = e.message.tool_calls)[t] ?? (r[t] = {})
                  Object.assign(a, i),
                    n && (a.id = n),
                    s && (a.type = s),
                    o && (a.function ?? (a.function = { arguments: '' })),
                    o?.name && (a.function.name = o.name),
                    o?.arguments && (a.function.arguments += o.arguments)
                }
              }
            }
            return o
          }),
          Symbol.asyncIterator)]() {
            const e = [],
              t = []
            let n = !1
            return (
              this.on('chunk', (n) => {
                const r = t.shift()
                r ? r.resolve(n) : e.push(n)
              }),
              this.on('end', () => {
                n = !0
                for (const e of t) e.resolve(void 0)
                t.length = 0
              }),
              this.on('abort', (e) => {
                n = !0
                for (const n of t) n.reject(e)
                t.length = 0
              }),
              this.on('error', (e) => {
                n = !0
                for (const n of t) n.reject(e)
                t.length = 0
              }),
              {
                next: async () =>
                  e.length
                    ? { value: e.shift(), done: !1 }
                    : n
                      ? { value: void 0, done: !0 }
                      : new Promise((e, n) => t.push({ resolve: e, reject: n })).then((e) => (e ? { value: e, done: !1 } : { value: void 0, done: !0 })),
                return: async () => (this.abort(), { value: void 0, done: !0 }),
              }
            )
          }
          toReadableStream() {
            return new f.Stream(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream()
          }
        }
        function m(e) {
          return JSON.stringify(e)
        }
        t.ChatCompletionStream = p
      },
      7730: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.ChatCompletionStreamingRunner = void 0)
        const r = n(5126)
        class s extends r.ChatCompletionStream {
          static fromReadableStream(e) {
            const t = new s()
            return t._run(() => t._fromReadableStream(e)), t
          }
          static runFunctions(e, t, n) {
            const r = new s(),
              o = { ...n, headers: { ...n?.headers, 'X-Stainless-Helper-Method': 'runFunctions' } }
            return r._run(() => r._runFunctions(e, t, o)), r
          }
          static runTools(e, t, n) {
            const r = new s(),
              o = { ...n, headers: { ...n?.headers, 'X-Stainless-Helper-Method': 'runTools' } }
            return r._run(() => r._runTools(e, t, o)), r
          }
        }
        t.ChatCompletionStreamingRunner = s
      },
      4691: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ParsingToolFunction = t.ParsingFunction = t.isRunnableFunctionWithParse = void 0),
          (t.isRunnableFunctionWithParse = function (e) {
            return 'function' == typeof e.parse
          }),
          (t.ParsingFunction = class {
            constructor(e) {
              ;(this.function = e.function), (this.parse = e.parse), (this.parameters = e.parameters), (this.description = e.description), (this.name = e.name)
            }
          }),
          (t.ParsingToolFunction = class {
            constructor(e) {
              ;(this.type = 'function'), (this.function = e)
            }
          })
      },
      3346: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.allSettledWithThrow = void 0),
          (t.allSettledWithThrow = async (e) => {
            const t = await Promise.allSettled(e),
              n = t.filter((e) => 'rejected' === e.status)
            if (n.length) {
              for (const e of n) console.error(e.reason)
              throw new Error(`${n.length} promise(s) failed - see the above errors`)
            }
            const r = []
            for (const e of t) 'fulfilled' === e.status && r.push(e.value)
            return r
          })
      },
      6289: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.isPresent = t.isToolMessage = t.isFunctionMessage = t.isAssistantMessage = void 0),
          (t.isAssistantMessage = (e) => 'assistant' === e?.role),
          (t.isFunctionMessage = (e) => 'function' === e?.role),
          (t.isToolMessage = (e) => 'tool' === e?.role),
          (t.isPresent = function (e) {
            return null != e
          })
      },
      2510: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.CursorPage = t.Page = void 0)
        const r = n(8757)
        class s extends r.AbstractPage {
          constructor(e, t, n, r) {
            super(e, t, n, r), (this.data = n.data || []), (this.object = n.object)
          }
          getPaginatedItems() {
            return this.data ?? []
          }
          nextPageParams() {
            return null
          }
          nextPageInfo() {
            return null
          }
        }
        t.Page = s
        class o extends r.AbstractPage {
          constructor(e, t, n, r) {
            super(e, t, n, r), (this.data = n.data || [])
          }
          getPaginatedItems() {
            return this.data ?? []
          }
          nextPageParams() {
            const e = this.nextPageInfo()
            if (!e) return null
            if ('params' in e) return e.params
            const t = Object.fromEntries(e.url.searchParams)
            return Object.keys(t).length ? t : null
          }
          nextPageInfo() {
            const e = this.getPaginatedItems()
            if (!e.length) return null
            const t = e[e.length - 1]?.id
            return t ? { params: { after: t } } : null
          }
        }
        t.CursorPage = o
      },
      2802: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.APIResource = void 0),
          (t.APIResource = class {
            constructor(e) {
              this._client = e
            }
          })
      },
      1253: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Audio = void 0)
        const i = n(2802),
          a = o(n(5113)),
          c = o(n(3694)),
          l = o(n(7655))
        class u extends i.APIResource {
          constructor() {
            super(...arguments), (this.transcriptions = new c.Transcriptions(this._client)), (this.translations = new l.Translations(this._client)), (this.speech = new a.Speech(this._client))
          }
        }
        ;(t.Audio = u),
          (function (e) {
            ;(e.Transcriptions = c.Transcriptions), (e.Translations = l.Translations), (e.Speech = a.Speech)
          })((u = t.Audio || (t.Audio = {})))
      },
      5113: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Speech = void 0)
        const r = n(2802)
        class s extends r.APIResource {
          create(e, t) {
            return this._client.post('/audio/speech', { body: e, ...t, __binaryResponse: !0 })
          }
        }
        ;(t.Speech = s), (s = t.Speech || (t.Speech = {}))
      },
      3694: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Transcriptions = void 0)
        const r = n(2802),
          s = n(8757)
        class o extends r.APIResource {
          create(e, t) {
            return this._client.post('/audio/transcriptions', (0, s.multipartFormRequestOptions)({ body: e, ...t }))
          }
        }
        ;(t.Transcriptions = o), (o = t.Transcriptions || (t.Transcriptions = {}))
      },
      7655: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Translations = void 0)
        const r = n(2802),
          s = n(8757)
        class o extends r.APIResource {
          create(e, t) {
            return this._client.post('/audio/translations', (0, s.multipartFormRequestOptions)({ body: e, ...t }))
          }
        }
        ;(t.Translations = o), (o = t.Translations || (t.Translations = {}))
      },
      2530: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.BatchesPage = t.Batches = void 0)
        const i = n(2802),
          a = n(8757),
          c = o(n(2530)),
          l = n(2510)
        class u extends i.APIResource {
          create(e, t) {
            return this._client.post('/batches', { body: e, ...t })
          }
          retrieve(e, t) {
            return this._client.get(`/batches/${e}`, t)
          }
          list(e = {}, t) {
            return (0, a.isRequestOptions)(e) ? this.list({}, e) : this._client.getAPIList('/batches', d, { query: e, ...t })
          }
          cancel(e, t) {
            return this._client.post(`/batches/${e}/cancel`, t)
          }
        }
        t.Batches = u
        class d extends l.CursorPage {}
        ;(t.BatchesPage = d),
          (function (e) {
            e.BatchesPage = c.BatchesPage
          })((u = t.Batches || (t.Batches = {})))
      },
      2964: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.AssistantsPage = t.Assistants = void 0)
        const i = n(2802),
          a = n(8757),
          c = o(n(2964)),
          l = n(2510)
        class u extends i.APIResource {
          create(e, t) {
            return this._client.post('/assistants', { body: e, ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
          retrieve(e, t) {
            return this._client.get(`/assistants/${e}`, { ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
          update(e, t, n) {
            return this._client.post(`/assistants/${e}`, { body: t, ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          list(e = {}, t) {
            return (0, a.isRequestOptions)(e) ? this.list({}, e) : this._client.getAPIList('/assistants', d, { query: e, ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
          del(e, t) {
            return this._client.delete(`/assistants/${e}`, { ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
        }
        t.Assistants = u
        class d extends l.CursorPage {}
        ;(t.AssistantsPage = d),
          (function (e) {
            e.AssistantsPage = c.AssistantsPage
          })((u = t.Assistants || (t.Assistants = {})))
      },
      6183: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Beta = void 0)
        const i = n(2802),
          a = o(n(2964)),
          c = o(n(1356)),
          l = o(n(2682)),
          u = o(n(7734))
        class d extends i.APIResource {
          constructor() {
            super(...arguments),
              (this.vectorStores = new u.VectorStores(this._client)),
              (this.chat = new c.Chat(this._client)),
              (this.assistants = new a.Assistants(this._client)),
              (this.threads = new l.Threads(this._client))
          }
        }
        ;(t.Beta = d),
          (function (e) {
            ;(e.VectorStores = u.VectorStores),
              (e.VectorStoresPage = u.VectorStoresPage),
              (e.Chat = c.Chat),
              (e.Assistants = a.Assistants),
              (e.AssistantsPage = a.AssistantsPage),
              (e.Threads = l.Threads)
          })((d = t.Beta || (t.Beta = {})))
      },
      1356: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Chat = void 0)
        const i = n(2802),
          a = o(n(8111))
        class c extends i.APIResource {
          constructor() {
            super(...arguments), (this.completions = new a.Completions(this._client))
          }
        }
        ;(t.Chat = c),
          (function (e) {
            e.Completions = a.Completions
          })((c = t.Chat || (t.Chat = {})))
      },
      8111: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Completions = t.ChatCompletionStream = t.ParsingToolFunction = t.ParsingFunction = t.ChatCompletionStreamingRunner = t.ChatCompletionRunner = void 0)
        const r = n(2802),
          s = n(4648)
        var o = n(4648)
        Object.defineProperty(t, 'ChatCompletionRunner', {
          enumerable: !0,
          get: function () {
            return o.ChatCompletionRunner
          },
        })
        const i = n(7730)
        var a = n(7730)
        Object.defineProperty(t, 'ChatCompletionStreamingRunner', {
          enumerable: !0,
          get: function () {
            return a.ChatCompletionStreamingRunner
          },
        })
        var c = n(4691)
        Object.defineProperty(t, 'ParsingFunction', {
          enumerable: !0,
          get: function () {
            return c.ParsingFunction
          },
        }),
          Object.defineProperty(t, 'ParsingToolFunction', {
            enumerable: !0,
            get: function () {
              return c.ParsingToolFunction
            },
          })
        const l = n(5126)
        var u = n(5126)
        Object.defineProperty(t, 'ChatCompletionStream', {
          enumerable: !0,
          get: function () {
            return u.ChatCompletionStream
          },
        })
        class d extends r.APIResource {
          runFunctions(e, t) {
            return e.stream ? i.ChatCompletionStreamingRunner.runFunctions(this._client.chat.completions, e, t) : s.ChatCompletionRunner.runFunctions(this._client.chat.completions, e, t)
          }
          runTools(e, t) {
            return e.stream ? i.ChatCompletionStreamingRunner.runTools(this._client.chat.completions, e, t) : s.ChatCompletionRunner.runTools(this._client.chat.completions, e, t)
          }
          stream(e, t) {
            return l.ChatCompletionStream.createChatCompletion(this._client.chat.completions, e, t)
          }
        }
        t.Completions = d
      },
      6059: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.MessagesPage = t.Messages = void 0)
        const i = n(2802),
          a = n(8757),
          c = o(n(6059)),
          l = n(2510)
        class u extends i.APIResource {
          create(e, t, n) {
            return this._client.post(`/threads/${e}/messages`, { body: t, ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          retrieve(e, t, n) {
            return this._client.get(`/threads/${e}/messages/${t}`, { ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          update(e, t, n, r) {
            return this._client.post(`/threads/${e}/messages/${t}`, { body: n, ...r, headers: { 'OpenAI-Beta': 'assistants=v2', ...r?.headers } })
          }
          list(e, t = {}, n) {
            return (0, a.isRequestOptions)(t)
              ? this.list(e, {}, t)
              : this._client.getAPIList(`/threads/${e}/messages`, d, { query: t, ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
        }
        t.Messages = u
        class d extends l.CursorPage {}
        ;(t.MessagesPage = d),
          (function (e) {
            e.MessagesPage = c.MessagesPage
          })((u = t.Messages || (t.Messages = {})))
      },
      1946: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.RunsPage = t.Runs = void 0)
        const i = n(2802),
          a = n(8757),
          c = n(8868),
          l = n(8757),
          u = o(n(1946)),
          d = o(n(7733)),
          h = n(2510)
        class f extends i.APIResource {
          constructor() {
            super(...arguments), (this.steps = new d.Steps(this._client))
          }
          create(e, t, n) {
            return this._client.post(`/threads/${e}/runs`, { body: t, ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers }, stream: t.stream ?? !1 })
          }
          retrieve(e, t, n) {
            return this._client.get(`/threads/${e}/runs/${t}`, { ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          update(e, t, n, r) {
            return this._client.post(`/threads/${e}/runs/${t}`, { body: n, ...r, headers: { 'OpenAI-Beta': 'assistants=v2', ...r?.headers } })
          }
          list(e, t = {}, n) {
            return (0, a.isRequestOptions)(t) ? this.list(e, {}, t) : this._client.getAPIList(`/threads/${e}/runs`, p, { query: t, ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          cancel(e, t, n) {
            return this._client.post(`/threads/${e}/runs/${t}/cancel`, { ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          async createAndPoll(e, t, n) {
            const r = await this.create(e, t, n)
            return await this.poll(e, r.id, n)
          }
          createAndStream(e, t, n) {
            return c.AssistantStream.createAssistantStream(e, this._client.beta.threads.runs, t, n)
          }
          async poll(e, t, n) {
            const r = { ...n?.headers, 'X-Stainless-Poll-Helper': 'true' }
            for (n?.pollIntervalMs && (r['X-Stainless-Custom-Poll-Interval'] = n.pollIntervalMs.toString()); ; ) {
              const { data: s, response: o } = await this.retrieve(e, t, { ...n, headers: { ...n?.headers, ...r } }).withResponse()
              switch (s.status) {
                case 'queued':
                case 'in_progress':
                case 'cancelling':
                  let e = 5e3
                  if (n?.pollIntervalMs) e = n.pollIntervalMs
                  else {
                    const t = o.headers.get('openai-poll-after-ms')
                    if (t) {
                      const n = parseInt(t)
                      isNaN(n) || (e = n)
                    }
                  }
                  await (0, l.sleep)(e)
                  break
                case 'requires_action':
                case 'cancelled':
                case 'completed':
                case 'failed':
                case 'expired':
                  return s
              }
            }
          }
          stream(e, t, n) {
            return c.AssistantStream.createAssistantStream(e, this._client.beta.threads.runs, t, n)
          }
          submitToolOutputs(e, t, n, r) {
            return this._client.post(`/threads/${e}/runs/${t}/submit_tool_outputs`, { body: n, ...r, headers: { 'OpenAI-Beta': 'assistants=v2', ...r?.headers }, stream: n.stream ?? !1 })
          }
          async submitToolOutputsAndPoll(e, t, n, r) {
            const s = await this.submitToolOutputs(e, t, n, r)
            return await this.poll(e, s.id, r)
          }
          submitToolOutputsStream(e, t, n, r) {
            return c.AssistantStream.createToolAssistantStream(e, t, this._client.beta.threads.runs, n, r)
          }
        }
        t.Runs = f
        class p extends h.CursorPage {}
        ;(t.RunsPage = p),
          (function (e) {
            ;(e.RunsPage = u.RunsPage), (e.Steps = d.Steps), (e.RunStepsPage = d.RunStepsPage)
          })((f = t.Runs || (t.Runs = {})))
      },
      7733: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.RunStepsPage = t.Steps = void 0)
        const i = n(2802),
          a = n(8757),
          c = o(n(7733)),
          l = n(2510)
        class u extends i.APIResource {
          retrieve(e, t, n, r) {
            return this._client.get(`/threads/${e}/runs/${t}/steps/${n}`, { ...r, headers: { 'OpenAI-Beta': 'assistants=v2', ...r?.headers } })
          }
          list(e, t, n = {}, r) {
            return (0, a.isRequestOptions)(n)
              ? this.list(e, t, {}, n)
              : this._client.getAPIList(`/threads/${e}/runs/${t}/steps`, d, { query: n, ...r, headers: { 'OpenAI-Beta': 'assistants=v2', ...r?.headers } })
          }
        }
        t.Steps = u
        class d extends l.CursorPage {}
        ;(t.RunStepsPage = d),
          (function (e) {
            e.RunStepsPage = c.RunStepsPage
          })((u = t.Steps || (t.Steps = {})))
      },
      2682: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Threads = void 0)
        const i = n(2802),
          a = n(8757),
          c = n(8868),
          l = o(n(6059)),
          u = o(n(1946))
        class d extends i.APIResource {
          constructor() {
            super(...arguments), (this.runs = new u.Runs(this._client)), (this.messages = new l.Messages(this._client))
          }
          create(e = {}, t) {
            return (0, a.isRequestOptions)(e) ? this.create({}, e) : this._client.post('/threads', { body: e, ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
          retrieve(e, t) {
            return this._client.get(`/threads/${e}`, { ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
          update(e, t, n) {
            return this._client.post(`/threads/${e}`, { body: t, ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          del(e, t) {
            return this._client.delete(`/threads/${e}`, { ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
          createAndRun(e, t) {
            return this._client.post('/threads/runs', { body: e, ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers }, stream: e.stream ?? !1 })
          }
          async createAndRunPoll(e, t) {
            const n = await this.createAndRun(e, t)
            return await this.runs.poll(n.thread_id, n.id, t)
          }
          createAndRunStream(e, t) {
            return c.AssistantStream.createThreadAssistantStream(e, this._client.beta.threads, t)
          }
        }
        ;(t.Threads = d),
          (function (e) {
            ;(e.Runs = u.Runs), (e.RunsPage = u.RunsPage), (e.Messages = l.Messages), (e.MessagesPage = l.MessagesPage)
          })((d = t.Threads || (t.Threads = {})))
      },
      3159: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.VectorStoreFilesPage = t.FileBatches = void 0)
        const r = n(2802),
          s = n(8757),
          o = n(8757),
          i = n(3346),
          a = n(4113)
        Object.defineProperty(t, 'VectorStoreFilesPage', {
          enumerable: !0,
          get: function () {
            return a.VectorStoreFilesPage
          },
        })
        class c extends r.APIResource {
          create(e, t, n) {
            return this._client.post(`/vector_stores/${e}/file_batches`, { body: t, ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          retrieve(e, t, n) {
            return this._client.get(`/vector_stores/${e}/file_batches/${t}`, { ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          cancel(e, t, n) {
            return this._client.post(`/vector_stores/${e}/file_batches/${t}/cancel`, { ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          async createAndPoll(e, t, n) {
            const r = await this.create(e, t)
            return await this.poll(e, r.id, n)
          }
          listFiles(e, t, n = {}, r) {
            return (0, s.isRequestOptions)(n)
              ? this.listFiles(e, t, {}, n)
              : this._client.getAPIList(`/vector_stores/${e}/file_batches/${t}/files`, a.VectorStoreFilesPage, { query: n, ...r, headers: { 'OpenAI-Beta': 'assistants=v2', ...r?.headers } })
          }
          async poll(e, t, n) {
            const r = { ...n?.headers, 'X-Stainless-Poll-Helper': 'true' }
            for (n?.pollIntervalMs && (r['X-Stainless-Custom-Poll-Interval'] = n.pollIntervalMs.toString()); ; ) {
              const { data: s, response: i } = await this.retrieve(e, t, { ...n, headers: r }).withResponse()
              switch (s.status) {
                case 'in_progress':
                  let e = 5e3
                  if (n?.pollIntervalMs) e = n.pollIntervalMs
                  else {
                    const t = i.headers.get('openai-poll-after-ms')
                    if (t) {
                      const n = parseInt(t)
                      isNaN(n) || (e = n)
                    }
                  }
                  await (0, o.sleep)(e)
                  break
                case 'failed':
                case 'completed':
                  return s
              }
            }
          }
          async uploadAndPoll(e, { files: t, fileIds: n = [] }, r) {
            if (null === t || 0 == t.length) throw new Error('No files provided to process.')
            const s = r?.maxConcurrency ?? 5,
              o = Math.min(s, t.length),
              a = this._client,
              c = t.values(),
              l = [...n],
              u = Array(o)
                .fill(c)
                .map(async function (e) {
                  for (let t of e) {
                    const e = await a.files.create({ file: t, purpose: 'assistants' }, r)
                    l.push(e.id)
                  }
                })
            return await (0, i.allSettledWithThrow)(u), await this.createAndPoll(e, { file_ids: l })
          }
        }
        ;(t.FileBatches = c), (c = t.FileBatches || (t.FileBatches = {}))
      },
      4113: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.VectorStoreFilesPage = t.Files = void 0)
        const i = n(2802),
          a = n(8757),
          c = n(8757),
          l = o(n(4113)),
          u = n(2510)
        class d extends i.APIResource {
          create(e, t, n) {
            return this._client.post(`/vector_stores/${e}/files`, { body: t, ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          retrieve(e, t, n) {
            return this._client.get(`/vector_stores/${e}/files/${t}`, { ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          list(e, t = {}, n) {
            return (0, a.isRequestOptions)(t)
              ? this.list(e, {}, t)
              : this._client.getAPIList(`/vector_stores/${e}/files`, h, { query: t, ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          del(e, t, n) {
            return this._client.delete(`/vector_stores/${e}/files/${t}`, { ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          async createAndPoll(e, t, n) {
            const r = await this.create(e, t, n)
            return await this.poll(e, r.id, n)
          }
          async poll(e, t, n) {
            const r = { ...n?.headers, 'X-Stainless-Poll-Helper': 'true' }
            for (n?.pollIntervalMs && (r['X-Stainless-Custom-Poll-Interval'] = n.pollIntervalMs.toString()); ; ) {
              const s = await this.retrieve(e, t, { ...n, headers: r }).withResponse(),
                o = s.data
              switch (o.status) {
                case 'in_progress':
                  let e = 5e3
                  if (n?.pollIntervalMs) e = n.pollIntervalMs
                  else {
                    const t = s.response.headers.get('openai-poll-after-ms')
                    if (t) {
                      const n = parseInt(t)
                      isNaN(n) || (e = n)
                    }
                  }
                  await (0, c.sleep)(e)
                  break
                case 'failed':
                case 'completed':
                  return o
              }
            }
          }
          async upload(e, t, n) {
            const r = await this._client.files.create({ file: t, purpose: 'assistants' }, n)
            return this.create(e, { file_id: r.id }, n)
          }
          async uploadAndPoll(e, t, n) {
            const r = await this._client.files.create({ file: t, purpose: 'assistants' }, n)
            return await this.poll(e, r.id, n)
          }
        }
        t.Files = d
        class h extends u.CursorPage {}
        ;(t.VectorStoreFilesPage = h),
          (function (e) {
            e.VectorStoreFilesPage = l.VectorStoreFilesPage
          })((d = t.Files || (t.Files = {})))
      },
      7734: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.VectorStoresPage = t.VectorStores = void 0)
        const i = n(2802),
          a = n(8757),
          c = o(n(7734)),
          l = o(n(3159)),
          u = o(n(4113)),
          d = n(2510)
        class h extends i.APIResource {
          constructor() {
            super(...arguments), (this.files = new u.Files(this._client)), (this.fileBatches = new l.FileBatches(this._client))
          }
          create(e, t) {
            return this._client.post('/vector_stores', { body: e, ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
          retrieve(e, t) {
            return this._client.get(`/vector_stores/${e}`, { ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
          update(e, t, n) {
            return this._client.post(`/vector_stores/${e}`, { body: t, ...n, headers: { 'OpenAI-Beta': 'assistants=v2', ...n?.headers } })
          }
          list(e = {}, t) {
            return (0, a.isRequestOptions)(e) ? this.list({}, e) : this._client.getAPIList('/vector_stores', f, { query: e, ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
          del(e, t) {
            return this._client.delete(`/vector_stores/${e}`, { ...t, headers: { 'OpenAI-Beta': 'assistants=v2', ...t?.headers } })
          }
        }
        t.VectorStores = h
        class f extends d.CursorPage {}
        ;(t.VectorStoresPage = f),
          (function (e) {
            ;(e.VectorStoresPage = c.VectorStoresPage), (e.Files = u.Files), (e.VectorStoreFilesPage = u.VectorStoreFilesPage), (e.FileBatches = l.FileBatches)
          })((h = t.VectorStores || (t.VectorStores = {})))
      },
      6111: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Chat = void 0)
        const i = n(2802),
          a = o(n(6374))
        class c extends i.APIResource {
          constructor() {
            super(...arguments), (this.completions = new a.Completions(this._client))
          }
        }
        ;(t.Chat = c),
          (function (e) {
            e.Completions = a.Completions
          })((c = t.Chat || (t.Chat = {})))
      },
      6374: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Completions = void 0)
        const r = n(2802)
        class s extends r.APIResource {
          create(e, t) {
            return this._client.post('/chat/completions', { body: e, ...t, stream: e.stream ?? !1 })
          }
        }
        ;(t.Completions = s), (s = t.Completions || (t.Completions = {}))
      },
      7949: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Chat = t.Completions = void 0)
        var r = n(6374)
        Object.defineProperty(t, 'Completions', {
          enumerable: !0,
          get: function () {
            return r.Completions
          },
        })
        var s = n(6111)
        Object.defineProperty(t, 'Chat', {
          enumerable: !0,
          get: function () {
            return s.Chat
          },
        })
      },
      9045: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Completions = void 0)
        const r = n(2802)
        class s extends r.APIResource {
          create(e, t) {
            return this._client.post('/completions', { body: e, ...t, stream: e.stream ?? !1 })
          }
        }
        ;(t.Completions = s), (s = t.Completions || (t.Completions = {}))
      },
      1242: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Embeddings = void 0)
        const r = n(2802)
        class s extends r.APIResource {
          create(e, t) {
            return this._client.post('/embeddings', { body: e, ...t })
          }
        }
        ;(t.Embeddings = s), (s = t.Embeddings || (t.Embeddings = {}))
      },
      1461: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.FileObjectsPage = t.Files = void 0)
        const i = n(2802),
          a = n(8757),
          c = n(8757),
          l = n(9526),
          u = o(n(1461)),
          d = n(8757),
          h = n(2510)
        class f extends i.APIResource {
          create(e, t) {
            return this._client.post('/files', (0, d.multipartFormRequestOptions)({ body: e, ...t }))
          }
          retrieve(e, t) {
            return this._client.get(`/files/${e}`, t)
          }
          list(e = {}, t) {
            return (0, a.isRequestOptions)(e) ? this.list({}, e) : this._client.getAPIList('/files', p, { query: e, ...t })
          }
          del(e, t) {
            return this._client.delete(`/files/${e}`, t)
          }
          content(e, t) {
            return this._client.get(`/files/${e}/content`, { ...t, __binaryResponse: !0 })
          }
          retrieveContent(e, t) {
            return this._client.get(`/files/${e}/content`, { ...t, headers: { Accept: 'application/json', ...t?.headers } })
          }
          async waitForProcessing(e, { pollInterval: t = 5e3, maxWait: n = 18e5 } = {}) {
            const r = new Set(['processed', 'error', 'deleted']),
              s = Date.now()
            let o = await this.retrieve(e)
            for (; !o.status || !r.has(o.status); )
              if ((await (0, c.sleep)(t), (o = await this.retrieve(e)), Date.now() - s > n))
                throw new l.APIConnectionTimeoutError({ message: `Giving up on waiting for file ${e} to finish processing after ${n} milliseconds.` })
            return o
          }
        }
        t.Files = f
        class p extends h.Page {}
        ;(t.FileObjectsPage = p),
          (function (e) {
            e.FileObjectsPage = u.FileObjectsPage
          })((f = t.Files || (t.Files = {})))
      },
      3453: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.FineTuning = void 0)
        const i = n(2802),
          a = o(n(1718))
        class c extends i.APIResource {
          constructor() {
            super(...arguments), (this.jobs = new a.Jobs(this._client))
          }
        }
        ;(t.FineTuning = c),
          (function (e) {
            ;(e.Jobs = a.Jobs), (e.FineTuningJobsPage = a.FineTuningJobsPage), (e.FineTuningJobEventsPage = a.FineTuningJobEventsPage)
          })((c = t.FineTuning || (t.FineTuning = {})))
      },
      3955: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.FineTuningJobCheckpointsPage = t.Checkpoints = void 0)
        const i = n(2802),
          a = n(8757),
          c = o(n(3955)),
          l = n(2510)
        class u extends i.APIResource {
          list(e, t = {}, n) {
            return (0, a.isRequestOptions)(t) ? this.list(e, {}, t) : this._client.getAPIList(`/fine_tuning/jobs/${e}/checkpoints`, d, { query: t, ...n })
          }
        }
        t.Checkpoints = u
        class d extends l.CursorPage {}
        ;(t.FineTuningJobCheckpointsPage = d),
          (function (e) {
            e.FineTuningJobCheckpointsPage = c.FineTuningJobCheckpointsPage
          })((u = t.Checkpoints || (t.Checkpoints = {})))
      },
      1718: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.FineTuningJobEventsPage = t.FineTuningJobsPage = t.Jobs = void 0)
        const i = n(2802),
          a = n(8757),
          c = o(n(1718)),
          l = o(n(3955)),
          u = n(2510)
        class d extends i.APIResource {
          constructor() {
            super(...arguments), (this.checkpoints = new l.Checkpoints(this._client))
          }
          create(e, t) {
            return this._client.post('/fine_tuning/jobs', { body: e, ...t })
          }
          retrieve(e, t) {
            return this._client.get(`/fine_tuning/jobs/${e}`, t)
          }
          list(e = {}, t) {
            return (0, a.isRequestOptions)(e) ? this.list({}, e) : this._client.getAPIList('/fine_tuning/jobs', h, { query: e, ...t })
          }
          cancel(e, t) {
            return this._client.post(`/fine_tuning/jobs/${e}/cancel`, t)
          }
          listEvents(e, t = {}, n) {
            return (0, a.isRequestOptions)(t) ? this.listEvents(e, {}, t) : this._client.getAPIList(`/fine_tuning/jobs/${e}/events`, f, { query: t, ...n })
          }
        }
        t.Jobs = d
        class h extends u.CursorPage {}
        t.FineTuningJobsPage = h
        class f extends u.CursorPage {}
        ;(t.FineTuningJobEventsPage = f),
          (function (e) {
            ;(e.FineTuningJobsPage = c.FineTuningJobsPage),
              (e.FineTuningJobEventsPage = c.FineTuningJobEventsPage),
              (e.Checkpoints = l.Checkpoints),
              (e.FineTuningJobCheckpointsPage = l.FineTuningJobCheckpointsPage)
          })((d = t.Jobs || (t.Jobs = {})))
      },
      7370: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Images = void 0)
        const r = n(2802),
          s = n(8757)
        class o extends r.APIResource {
          createVariation(e, t) {
            return this._client.post('/images/variations', (0, s.multipartFormRequestOptions)({ body: e, ...t }))
          }
          edit(e, t) {
            return this._client.post('/images/edits', (0, s.multipartFormRequestOptions)({ body: e, ...t }))
          }
          generate(e, t) {
            return this._client.post('/images/generations', { body: e, ...t })
          }
        }
        ;(t.Images = o), (o = t.Images || (t.Images = {}))
      },
      3946: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Moderations = t.Models = t.ModelsPage = t.Images = t.FineTuning = t.Files = t.FileObjectsPage = t.Embeddings = t.Completions = t.Beta = t.Batches = t.BatchesPage = t.Audio = void 0),
          s(n(7949), t),
          s(n(5653), t)
        var o = n(1253)
        Object.defineProperty(t, 'Audio', {
          enumerable: !0,
          get: function () {
            return o.Audio
          },
        })
        var i = n(2530)
        Object.defineProperty(t, 'BatchesPage', {
          enumerable: !0,
          get: function () {
            return i.BatchesPage
          },
        }),
          Object.defineProperty(t, 'Batches', {
            enumerable: !0,
            get: function () {
              return i.Batches
            },
          })
        var a = n(6183)
        Object.defineProperty(t, 'Beta', {
          enumerable: !0,
          get: function () {
            return a.Beta
          },
        })
        var c = n(9045)
        Object.defineProperty(t, 'Completions', {
          enumerable: !0,
          get: function () {
            return c.Completions
          },
        })
        var l = n(1242)
        Object.defineProperty(t, 'Embeddings', {
          enumerable: !0,
          get: function () {
            return l.Embeddings
          },
        })
        var u = n(1461)
        Object.defineProperty(t, 'FileObjectsPage', {
          enumerable: !0,
          get: function () {
            return u.FileObjectsPage
          },
        }),
          Object.defineProperty(t, 'Files', {
            enumerable: !0,
            get: function () {
              return u.Files
            },
          })
        var d = n(3453)
        Object.defineProperty(t, 'FineTuning', {
          enumerable: !0,
          get: function () {
            return d.FineTuning
          },
        })
        var h = n(7370)
        Object.defineProperty(t, 'Images', {
          enumerable: !0,
          get: function () {
            return h.Images
          },
        })
        var f = n(9458)
        Object.defineProperty(t, 'ModelsPage', {
          enumerable: !0,
          get: function () {
            return f.ModelsPage
          },
        }),
          Object.defineProperty(t, 'Models', {
            enumerable: !0,
            get: function () {
              return f.Models
            },
          })
        var p = n(4975)
        Object.defineProperty(t, 'Moderations', {
          enumerable: !0,
          get: function () {
            return p.Moderations
          },
        })
      },
      9458: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n)
                  var s = Object.getOwnPropertyDescriptor(t, n)
                  ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    }),
                    Object.defineProperty(e, r, s)
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                }
              : function (e, t) {
                  e.default = t
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var t = {}
              if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n)
              return s(t, e), t
            }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.ModelsPage = t.Models = void 0)
        const i = n(2802),
          a = o(n(9458)),
          c = n(2510)
        class l extends i.APIResource {
          retrieve(e, t) {
            return this._client.get(`/models/${e}`, t)
          }
          list(e) {
            return this._client.getAPIList('/models', u, e)
          }
          del(e, t) {
            return this._client.delete(`/models/${e}`, t)
          }
        }
        t.Models = l
        class u extends c.Page {}
        ;(t.ModelsPage = u),
          (function (e) {
            e.ModelsPage = a.ModelsPage
          })((l = t.Models || (t.Models = {})))
      },
      4975: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Moderations = void 0)
        const r = n(2802)
        class s extends r.APIResource {
          create(e, t) {
            return this._client.post('/moderations', { body: e, ...t })
          }
        }
        ;(t.Moderations = s), (s = t.Moderations || (t.Moderations = {}))
      },
      5653: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
      },
      6716: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.readableStreamAsyncIterable = t._decodeChunks = t._iterSSEMessages = t.Stream = void 0)
        const r = n(2212),
          s = n(9526),
          o = n(9526)
        class i {
          constructor(e, t) {
            ;(this.iterator = e), (this.controller = t)
          }
          static fromSSEResponse(e, t) {
            let n = !1
            return new i(async function* () {
              if (n) throw new Error('Cannot iterate over a consumed stream, use `.tee()` to split the stream.')
              n = !0
              let r = !1
              try {
                for await (const n of a(e, t))
                  if (!r)
                    if (n.data.startsWith('[DONE]')) r = !0
                    else if (null === n.event) {
                      let e
                      try {
                        e = JSON.parse(n.data)
                      } catch (e) {
                        throw (console.error('Could not parse message into JSON:', n.data), console.error('From chunk:', n.raw), e)
                      }
                      if (e && e.error) throw new o.APIError(void 0, e.error, void 0, void 0)
                      yield e
                    } else {
                      let e
                      try {
                        e = JSON.parse(n.data)
                      } catch (e) {
                        throw (console.error('Could not parse message into JSON:', n.data), console.error('From chunk:', n.raw), e)
                      }
                      if ('error' == n.event) throw new o.APIError(void 0, e.error, e.message, void 0)
                      yield { event: n.event, data: e }
                    }
                r = !0
              } catch (e) {
                if (e instanceof Error && 'AbortError' === e.name) return
                throw e
              } finally {
                r || t.abort()
              }
            }, t)
          }
          static fromReadableStream(e, t) {
            let n = !1
            return new i(async function* () {
              if (n) throw new Error('Cannot iterate over a consumed stream, use `.tee()` to split the stream.')
              n = !0
              let r = !1
              try {
                for await (const t of (async function* () {
                  const t = new u(),
                    n = d(e)
                  for await (const e of n) for (const n of t.decode(e)) yield n
                  for (const e of t.flush()) yield e
                })())
                  r || (t && (yield JSON.parse(t)))
                r = !0
              } catch (e) {
                if (e instanceof Error && 'AbortError' === e.name) return
                throw e
              } finally {
                r || t.abort()
              }
            }, t)
          }
          [Symbol.asyncIterator]() {
            return this.iterator()
          }
          tee() {
            const e = [],
              t = [],
              n = this.iterator(),
              r = (r) => ({
                next: () => {
                  if (0 === r.length) {
                    const r = n.next()
                    e.push(r), t.push(r)
                  }
                  return r.shift()
                },
              })
            return [new i(() => r(e), this.controller), new i(() => r(t), this.controller)]
          }
          toReadableStream() {
            const e = this
            let t
            const n = new TextEncoder()
            return new r.ReadableStream({
              async start() {
                t = e[Symbol.asyncIterator]()
              },
              async pull(e) {
                try {
                  const { value: r, done: s } = await t.next()
                  if (s) return e.close()
                  const o = n.encode(JSON.stringify(r) + '\n')
                  e.enqueue(o)
                } catch (t) {
                  e.error(t)
                }
              },
              async cancel() {
                await t.return?.()
              },
            })
          }
        }
        async function* a(e, t) {
          if (!e.body) throw (t.abort(), new s.OpenAIError('Attempted to iterate over a response with no body'))
          const n = new l(),
            r = new u(),
            o = d(e.body)
          for await (const e of (async function* (e) {
            let t = new Uint8Array()
            for await (const n of e) {
              if (null == n) continue
              const e = n instanceof ArrayBuffer ? new Uint8Array(n) : 'string' == typeof n ? new TextEncoder().encode(n) : n
              let r,
                s = new Uint8Array(t.length + e.length)
              for (s.set(t), s.set(e, t.length), t = s; -1 !== (r = c(t)); ) yield t.slice(0, r), (t = t.slice(r))
            }
            t.length > 0 && (yield t)
          })(o))
            for (const t of r.decode(e)) {
              const e = n.decode(t)
              e && (yield e)
            }
          for (const e of r.flush()) {
            const t = n.decode(e)
            t && (yield t)
          }
        }
        function c(e) {
          for (let t = 0; t < e.length - 2; t++) {
            if (10 === e[t] && 10 === e[t + 1]) return t + 2
            if (13 === e[t] && 13 === e[t + 1]) return t + 2
            if (13 === e[t] && 10 === e[t + 1] && t + 3 < e.length && 13 === e[t + 2] && 10 === e[t + 3]) return t + 4
          }
          return -1
        }
        ;(t.Stream = i), (t._iterSSEMessages = a)
        class l {
          constructor() {
            ;(this.event = null), (this.data = []), (this.chunks = [])
          }
          decode(e) {
            if ((e.endsWith('\r') && (e = e.substring(0, e.length - 1)), !e)) {
              if (!this.event && !this.data.length) return null
              const e = { event: this.event, data: this.data.join('\n'), raw: this.chunks }
              return (this.event = null), (this.data = []), (this.chunks = []), e
            }
            if ((this.chunks.push(e), e.startsWith(':'))) return null
            let [t, n, r] = (function (e, t) {
              const n = e.indexOf(':')
              return -1 !== n ? [e.substring(0, n), ':', e.substring(n + 1)] : [e, '', '']
            })(e)
            return r.startsWith(' ') && (r = r.substring(1)), 'event' === t ? (this.event = r) : 'data' === t && this.data.push(r), null
          }
        }
        class u {
          constructor() {
            ;(this.buffer = []), (this.trailingCR = !1)
          }
          decode(e) {
            let t = this.decodeText(e)
            if ((this.trailingCR && ((t = '\r' + t), (this.trailingCR = !1)), t.endsWith('\r') && ((this.trailingCR = !0), (t = t.slice(0, -1))), !t)) return []
            const n = u.NEWLINE_CHARS.has(t[t.length - 1] || '')
            let r = t.split(u.NEWLINE_REGEXP)
            return (
              n && r.pop(),
              1 !== r.length || n
                ? (this.buffer.length > 0 && ((r = [this.buffer.join('') + r[0], ...r.slice(1)]), (this.buffer = [])), n || (this.buffer = [r.pop() || '']), r)
                : (this.buffer.push(r[0]), [])
            )
          }
          decodeText(e) {
            if (null == e) return ''
            if ('string' == typeof e) return e
            if ('undefined' != typeof Buffer) {
              if (e instanceof Buffer) return e.toString()
              if (e instanceof Uint8Array) return Buffer.from(e).toString()
              throw new s.OpenAIError(
                `Unexpected: received non-Uint8Array (${e.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`,
              )
            }
            if ('undefined' != typeof TextDecoder) {
              if (e instanceof Uint8Array || e instanceof ArrayBuffer) return this.textDecoder ?? (this.textDecoder = new TextDecoder('utf8')), this.textDecoder.decode(e)
              throw new s.OpenAIError(`Unexpected: received non-Uint8Array/ArrayBuffer (${e.constructor.name}) in a web platform. Please report this error.`)
            }
            throw new s.OpenAIError('Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.')
          }
          flush() {
            if (!this.buffer.length && !this.trailingCR) return []
            const e = [this.buffer.join('')]
            return (this.buffer = []), (this.trailingCR = !1), e
          }
        }
        function d(e) {
          if (e[Symbol.asyncIterator]) return e
          const t = e.getReader()
          return {
            async next() {
              try {
                const e = await t.read()
                return e?.done && t.releaseLock(), e
              } catch (e) {
                throw (t.releaseLock(), e)
              }
            },
            async return() {
              const e = t.cancel()
              return t.releaseLock(), await e, { done: !0, value: void 0 }
            },
            [Symbol.asyncIterator]() {
              return this
            },
          }
        }
        ;(u.NEWLINE_CHARS = new Set(['\n', '\r'])),
          (u.NEWLINE_REGEXP = /\r\n|[\n\r]/g),
          (t._decodeChunks = function (e) {
            const t = new u(),
              n = []
            for (const r of e) n.push(...t.decode(r))
            return n
          }),
          (t.readableStreamAsyncIterable = d)
      },
      4042: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createForm =
            t.multipartFormRequestOptions =
            t.maybeMultipartFormRequestOptions =
            t.isMultipartBody =
            t.toFile =
            t.isUploadable =
            t.isBlobLike =
            t.isFileLike =
            t.isResponseLike =
            t.fileFromPath =
              void 0)
        const r = n(2212)
        var s = n(2212)
        async function o(e, n, s) {
          if (((e = await e), s ?? (s = (0, t.isFileLike)(e) ? { lastModified: e.lastModified, type: e.type } : {}), (0, t.isResponseLike)(e))) {
            const t = await e.blob()
            return n || (n = new URL(e.url).pathname.split(/[\\/]/).pop() ?? 'unknown_file'), new r.File([t], n, s)
          }
          const o = await (async function (e) {
            let n = []
            if ('string' == typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer) n.push(e)
            else if ((0, t.isBlobLike)(e)) n.push(await e.arrayBuffer())
            else {
              if (!a(e))
                throw new Error(
                  `Unexpected data type: ${typeof e}; constructor: ${e?.constructor?.name}; props: ${(function (e) {
                    return `[${Object.getOwnPropertyNames(e)
                      .map((e) => `"${e}"`)
                      .join(', ')}]`
                  })(e)}`,
                )
              for await (const t of e) n.push(t)
            }
            return n
          })(e)
          if (
            (n ||
              (n =
                (function (e) {
                  return i(e.name) || i(e.filename) || i(e.path)?.split(/[\\/]/).pop()
                })(e) ?? 'unknown_file'),
            !s.type)
          ) {
            const e = o[0]?.type
            'string' == typeof e && (s = { ...s, type: e })
          }
          return new r.File(o, n, s)
        }
        Object.defineProperty(t, 'fileFromPath', {
          enumerable: !0,
          get: function () {
            return s.fileFromPath
          },
        }),
          (t.isResponseLike = (e) => null != e && 'object' == typeof e && 'string' == typeof e.url && 'function' == typeof e.blob),
          (t.isFileLike = (e) => null != e && 'object' == typeof e && 'string' == typeof e.name && 'number' == typeof e.lastModified && (0, t.isBlobLike)(e)),
          (t.isBlobLike = (e) =>
            null != e &&
            'object' == typeof e &&
            'number' == typeof e.size &&
            'string' == typeof e.type &&
            'function' == typeof e.text &&
            'function' == typeof e.slice &&
            'function' == typeof e.arrayBuffer),
          (t.isUploadable = (e) => (0, t.isFileLike)(e) || (0, t.isResponseLike)(e) || (0, r.isFsReadStream)(e)),
          (t.toFile = o)
        const i = (e) => ('string' == typeof e ? e : 'undefined' != typeof Buffer && e instanceof Buffer ? String(e) : void 0),
          a = (e) => null != e && 'object' == typeof e && 'function' == typeof e[Symbol.asyncIterator]
        ;(t.isMultipartBody = (e) => e && 'object' == typeof e && e.body && 'MultipartBody' === e[Symbol.toStringTag]),
          (t.maybeMultipartFormRequestOptions = async (e) => {
            if (!c(e.body)) return e
            const n = await (0, t.createForm)(e.body)
            return (0, r.getMultipartRequestOptions)(n, e)
          }),
          (t.multipartFormRequestOptions = async (e) => {
            const n = await (0, t.createForm)(e.body)
            return (0, r.getMultipartRequestOptions)(n, e)
          }),
          (t.createForm = async (e) => {
            const t = new r.FormData()
            return await Promise.all(Object.entries(e || {}).map(([e, n]) => l(t, e, n))), t
          })
        const c = (e) => {
            if ((0, t.isUploadable)(e)) return !0
            if (Array.isArray(e)) return e.some(c)
            if (e && 'object' == typeof e) for (const t in e) if (c(e[t])) return !0
            return !1
          },
          l = async (e, n, r) => {
            if (void 0 !== r) {
              if (null == r) throw new TypeError(`Received null for "${n}"; to pass null in FormData, you must use the string 'null'`)
              if ('string' == typeof r || 'number' == typeof r || 'boolean' == typeof r) e.append(n, String(r))
              else if ((0, t.isUploadable)(r)) {
                const t = await o(r)
                e.append(n, t)
              } else if (Array.isArray(r)) await Promise.all(r.map((t) => l(e, n + '[]', t)))
              else {
                if ('object' != typeof r) throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${r} instead`)
                await Promise.all(Object.entries(r).map(([t, r]) => l(e, `${n}[${t}]`, r)))
              }
            }
          }
      },
      5392: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.VERSION = void 0), (t.VERSION = '4.38.1')
      },
    },
    t = {}
  function n(r) {
    var s = t[r]
    if (void 0 !== s) return s.exports
    var o = (t[r] = { id: r, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), o.exports
  }
  ;(n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e
    return n.d(t, { a: t }), t
  }),
    (n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.nc = void 0),
    n(8156)
})()
