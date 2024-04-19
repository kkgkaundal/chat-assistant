/*! For license information please see bundle.js.LICENSE.txt */
;(() => {
  'use strict'
  var e = {
      778: (e, t, n) => {
        n.d(t, { A: () => s })
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o())
        i.push([
          e.id,
          '/* Style for chat button */\n#chatBtn {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n/* Style for chat popup */\n.chat-popup {\n  display: block;\n  position: fixed;\n  bottom: 90px;\n  right: 20px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  width: 300px;\n  height: 425px;\n  background-color: white;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n\n/* Style for close button */\n.close-btn {\n  float: right;\n  cursor: pointer;\n}\n\n/* Style for chat messages */\n.chat-messages {\n  height: 300px;\n  overflow-y: auto;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Style for message input */\n#messageInput {\n  width: calc(100% - 80px);\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.input-box {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  margin: 10px;\n}\n\n/* Style for send button */\n#sendBtn {\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  cursor: pointer;\n  margin-left: 5px;\n}\n\n#chatMessages div {\n  word-wrap: break-word;\n  padding-top: 5px;\n}\n\n.user-message {\n  align-self: flex-start; /* Align user messages to the left */\n}\n\n.assistant-message {\n  align-self: flex-end; /* Align assistant messages to the right */\n}\n\n/* Chat info */\n.chat-info h3 {\n  margin: 0;\n  font-size: 16px;\n}\n\n/* Online sign */\n.online-sign {\n  width: 8px;\n  height: 8px;\n  background-color: green; /* Adjust color as needed */\n  border-radius: 50%;\n  margin-right: 5px;\n  margin-top: 2px;\n}\n\n/* Style for chat header */\n.chat-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  height: 25px;\n}\n\n.online-info {\n  font-size: x-small;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: flex-start;\n}\n\n.message-time {\n  font-size: x-small;\n  margin-top: auto;\n  margin-left: 8px;\n}\n\n.message {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #00000014;\n  border-radius: 5px;\n  padding: 5px;\n  margin-top: 5px;\n}\n.message p {\n  word-wrap: break-word;\n  margin: auto;\n  word-break: break-word !important;\n  text-align: justify;\n}\n',
          '',
        ])
        const s = i
      },
      314: (e) => {
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
            (t.i = function (e, n, r, o, a) {
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
                  n && (l[2] ? ((l[1] = '@media '.concat(l[2], ' {').concat(l[1], '}')), (l[2] = n)) : (l[2] = n)),
                  o && (l[4] ? ((l[1] = '@supports ('.concat(l[4], ') {').concat(l[1], '}')), (l[4] = o)) : (l[4] = ''.concat(o))),
                  t.push(l))
              }
            }),
            t
          )
        }
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1]
        }
      },
      287: (e, t) => {
        var n = Symbol.for('react.element'),
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
          y = Object.assign,
          h = {}
        function v(e, t, n) {
          ;(this.props = e), (this.context = t), (this.refs = h), (this.updater = n || m)
        }
        function g() {}
        function b(e, t, n) {
          ;(this.props = e), (this.context = t), (this.refs = h), (this.updater = n || m)
        }
        ;(v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ('object' != typeof e && 'function' != typeof e && null != e)
              throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.')
            this.updater.enqueueSetState(this, e, t, 'setState')
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
          }),
          (g.prototype = v.prototype)
        var x = (b.prototype = new g())
        ;(x.constructor = b), y(x, v.prototype), (x.isPureReactComponent = !0)
        var _ = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 }
        function k(e, t, r) {
          var o,
            a = {},
            i = null,
            s = null
          if (null != t) for (o in (void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (i = '' + t.key), t)) w.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o])
          var u = arguments.length - 2
          if (1 === u) a.children = r
          else if (1 < u) {
            for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2]
            a.children = c
          }
          if (e && e.defaultProps) for (o in (u = e.defaultProps)) void 0 === a[o] && (a[o] = u[o])
          return { $$typeof: n, type: e, key: i, ref: s, props: a, _owner: S.current }
        }
        function C(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === n
        }
        var j = /\/+/g
        function P(e, t) {
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
        function O(e, t, o, a, i) {
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
                  case n:
                  case r:
                    u = !0
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = '' === a ? '.' + P(u, 0) : a),
              _(i)
                ? ((o = ''),
                  null != e && (o = e.replace(j, '$&/') + '/'),
                  O(i, t, o, '', function (e) {
                    return e
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
                    })(i, o + (!i.key || (u && u.key === i.key) ? '' : ('' + i.key).replace(j, '$&/') + '/') + e)),
                  t.push(i)),
              1
            )
          if (((u = 0), (a = '' === a ? '.' : a + ':'), _(e)))
            for (var c = 0; c < e.length; c++) {
              var l = a + P((s = e[c]), c)
              u += O(s, t, o, l, i)
            }
          else if (
            ((l = (function (e) {
              return null === e || 'object' != typeof e ? null : 'function' == typeof (e = (d && e[d]) || e['@@iterator']) ? e : null
            })(e)),
            'function' == typeof l)
          )
            for (e = l.call(e), c = 0; !(s = e.next()).done; ) u += O((s = s.value), t, o, (l = a + P(s, c++)), i)
          else if ('object' === s)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            )
          return u
        }
        function A(e, t, n) {
          if (null == e) return e
          var r = [],
            o = 0
          return (
            O(e, r, '', '', function (e) {
              return t.call(n, e, o++)
            }),
            r
          )
        }
        function R(e) {
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
          T = { transition: null },
          $ = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: T, ReactCurrentOwner: S }
        ;(t.Children = {
          map: A,
          forEach: function (e, t, n) {
            A(
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
              A(e, function () {
                t++
              }),
              t
            )
          },
          toArray: function (e) {
            return (
              A(e, function (e) {
                return e
              }) || []
            )
          },
          only: function (e) {
            if (!C(e)) throw Error('React.Children.only expected to receive a single React element child.')
            return e
          },
        }),
          (t.Component = v),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = l),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
          (t.cloneElement = function (e, t, r) {
            if (null == e) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
            var o = y({}, e.props),
              a = e.key,
              i = e.ref,
              s = e._owner
            if (null != t) {
              if ((void 0 !== t.ref && ((i = t.ref), (s = S.current)), void 0 !== t.key && (a = '' + t.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps
              for (c in t) w.call(t, c) && !E.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
            }
            var c = arguments.length - 2
            if (1 === c) o.children = r
            else if (1 < c) {
              u = Array(c)
              for (var l = 0; l < c; l++) u[l] = arguments[l + 2]
              o.children = u
            }
            return { $$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: s }
          }),
          (t.createContext = function (e) {
            return (
              ((e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = {
                $$typeof: s,
                _context: e,
              }),
              (e.Consumer = e)
            )
          }),
          (t.createElement = k),
          (t.createFactory = function (e) {
            var t = k.bind(null, e)
            return (t.type = e), t
          }),
          (t.createRef = function () {
            return { current: null }
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e }
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return { $$typeof: p, _payload: { _status: -1, _result: e }, _init: R }
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t }
          }),
          (t.startTransition = function (e) {
            var t = T.transition
            T.transition = {}
            try {
              e()
            } finally {
              T.transition = t
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
      540: (e, t, n) => {
        e.exports = n(287)
      },
      323: (e, t, n) => {
        n.r(t), n.d(t, { default: () => v })
        var r = n(72),
          o = n.n(r),
          a = n(825),
          i = n.n(a),
          s = n(659),
          u = n.n(s),
          c = n(56),
          l = n.n(c),
          f = n(159),
          p = n.n(f),
          d = n(113),
          m = n.n(d),
          y = n(778),
          h = {}
        ;(h.styleTagTransform = m()), (h.setAttributes = l()), (h.insert = u().bind(null, 'head')), (h.domAPI = i()), (h.insertStyleElement = p()), o()(y.A, h)
        const v = y.A && y.A.locals ? y.A.locals : void 0
      },
      72: (e) => {
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
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var u = e[s],
              c = r.base ? u[0] + r.base : u[0],
              l = a[c] || 0,
              f = ''.concat(c, ' ').concat(l)
            a[c] = l + 1
            var p = n(f),
              d = { css: u[1], media: u[2], sourceMap: u[3], supports: u[4], layer: u[5] }
            if (-1 !== p) t[p].references++, t[p].updater(d)
            else {
              var m = o(d, r)
              ;(r.byIndex = s), t.splice(s, 0, { identifier: f, updater: m, references: 1 })
            }
            i.push(f)
          }
          return i
        }
        function o(e, t) {
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
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}))
          return function (e) {
            e = e || []
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i])
              t[s].references--
            }
            for (var u = r(e, o), c = 0; c < a.length; c++) {
              var l = n(a[c])
              0 === t[l].references && (t[l].updater(), t.splice(l, 1))
            }
            a = u
          }
        }
      },
      659: (e) => {
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
      159: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style')
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
        }
      },
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc
          t && e.setAttribute('nonce', t)
        }
      },
      825: (e) => {
        e.exports = function (e) {
          if ('undefined' == typeof document) return { update: function () {}, remove: function () {} }
          var t = e.insertStyleElement(e)
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = ''
                n.supports && (r += '@supports ('.concat(n.supports, ') {')), n.media && (r += '@media '.concat(n.media, ' {'))
                var o = void 0 !== n.layer
                o && (r += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')), (r += n.css), o && (r += '}'), n.media && (r += '}'), n.supports && (r += '}')
                var a = n.sourceMap
                a && 'undefined' != typeof btoa && (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), ' */')),
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
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild)
            t.appendChild(document.createTextNode(e))
          }
        }
      },
      480: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, a) {
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
                  var t
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(i, s)
                }
                u((r = r.apply(e, t || [])).next())
              })
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
        Object.defineProperty(t, '__esModule', { value: !0 })
        const a = n(540)
        n(323)
        const i = o(n(540)),
          s = n(851),
          u = n(20)
        t.default = (e) => {
          var t
          const [n, o] = (0, a.useState)(!!e.isChatOpen && e.isChatOpen),
            [c, l] = (0, a.useState)(e.messages ? e.messages : []),
            [f, p] = (0, a.useState)(''),
            d = (0, a.useRef)(null)
          ;(0, a.useEffect)(() => {
            d.current && (d.current.scrollTop = d.current.scrollHeight)
          }, [c])
          const m = () => {
            if ('' !== f.trim()) {
              const t = { text: f, owner: 'user', time: new Date() }
              l([...c, t]), e.isCustomAPI && e.setUserInput ? e.setUserInput(f) : y(), p('')
            }
          }
          ;(0, a.useEffect)(() => {
            e.message && l([...c, e.message])
          }, [e.message])
          const y = () =>
            r(void 0, void 0, void 0, function* () {
              const e = { text: f.trim() },
                t = yield (0, u.chatAssistantAPIResponse)(e)
              null !== t && l([...c, t.message])
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
                  o(!n)
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
                        o(!1)
                      },
                    },
                    '×',
                  ),
                ),
                i.default.createElement(
                  'div',
                  { className: 'chat-messages', id: 'chatMessages', ref: d },
                  c.map((e, t) =>
                    i.default.createElement(
                      'div',
                      { key: t, className: 'message ' + ('user' === e.owner ? 'user-message' : 'assistant-message') },
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
      851: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.formatMessageTime = void 0),
          (t.formatMessageTime = function (e) {
            return `${String(e.getHours()).padStart(2, '0')}:${String(e.getMinutes()).padStart(2, '0')}`
          })
      },
      156: function (e, t, n) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.ChatbotAssistant = void 0)
        var o = n(480)
        Object.defineProperty(t, 'ChatbotAssistant', {
          enumerable: !0,
          get: function () {
            return r(o).default
          },
        })
      },
      20: function (e, t) {
        var n =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, a) {
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
                var t
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t)
                        })).then(i, s)
              }
              u((r = r.apply(e, t || [])).next())
            })
          }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.chatAssistantAPIResponse = void 0),
          (t.chatAssistantAPIResponse = (e) =>
            n(void 0, void 0, void 0, function* () {
              var t
              try {
                const n = null !== (t = e.url) && void 0 !== t ? t : 'https://api.example.com/chat-assistant',
                  r = yield fetch(n, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(e.text) })
                if (!r.ok) throw new Error('Network response was not ok')
                return yield r.json()
              } catch (e) {
                return null
              }
            }))
      },
    },
    t = {}
  function n(r) {
    var o = t[r]
    if (void 0 !== o) return o.exports
    var a = (t[r] = { id: r, exports: {} })
    return e[r].call(a.exports, a, a.exports, n), a.exports
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
    n(156)
})()
