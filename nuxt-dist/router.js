import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _640abf50 = () => interopDefault(import('..\\pages\\fun.vue' /* webpackChunkName: "pages/fun" */))
const _9e48bf44 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _3fe2590e = () => interopDefault(import('..\\pages\\parent\\index.vue' /* webpackChunkName: "pages/parent/index" */))
const _d1d7bac4 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _5020e118 = () => interopDefault(import('..\\pages\\slug\\index.vue' /* webpackChunkName: "pages/slug/index" */))
const _c54c2810 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _0a846ac3 = () => interopDefault(import('..\\pages\\parent\\child.vue' /* webpackChunkName: "pages/parent/child" */))
const _37af24a5 = () => interopDefault(import('..\\pages\\slug\\comment.vue' /* webpackChunkName: "pages/slug/comment" */))
const _32dc930c = () => interopDefault(import('..\\pages\\user\\one.vue' /* webpackChunkName: "pages/user/one" */))
const _8073eb0e = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _703396f4 = () => interopDefault(import('..\\pages\\posts\\_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _8254a23a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _f805c720 = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fun",
    component: _640abf50,
    name: "fun"
  }, {
    path: "/home",
    component: _9e48bf44,
    name: "home"
  }, {
    path: "/parent",
    component: _3fe2590e,
    name: "parent"
  }, {
    path: "/posts",
    component: _d1d7bac4,
    name: "posts"
  }, {
    path: "/slug",
    component: _5020e118,
    name: "slug"
  }, {
    path: "/user",
    component: _c54c2810,
    name: "user"
  }, {
    path: "/parent/child",
    component: _0a846ac3,
    name: "parent-child"
  }, {
    path: "/slug/comment",
    component: _37af24a5,
    name: "slug-comment"
  }, {
    path: "/user/one",
    component: _32dc930c,
    name: "user-one"
  }, {
    path: "/blog/:slug?",
    component: _8073eb0e,
    name: "blog-slug"
  }, {
    path: "/posts/:id",
    component: _703396f4,
    name: "posts-id"
  }, {
    path: "/",
    component: _8254a23a,
    name: "index"
  }, {
    path: "/*",
    component: _f805c720,
    name: "all"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
