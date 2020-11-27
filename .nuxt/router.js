import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _02a0a6e2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _6acc2eb2 = () => interopDefault(import('../pages/_layout/billing.vue' /* webpackChunkName: "pages/_layout/billing" */))
const _ecddfe0e = () => interopDefault(import('../pages/_layout/billing-history.vue' /* webpackChunkName: "pages/_layout/billing-history" */))
const _41346b12 = () => interopDefault(import('../pages/_layout/billing-invoice.vue' /* webpackChunkName: "pages/_layout/billing-invoice" */))
const _18c5456b = () => interopDefault(import('../pages/_layout/billing-payment.vue' /* webpackChunkName: "pages/_layout/billing-payment" */))
const _06a3b281 = () => interopDefault(import('../pages/_layout/billing-upgrade.vue' /* webpackChunkName: "pages/_layout/billing-upgrade" */))
const _28279e7b = () => interopDefault(import('../pages/_layout/blog.vue' /* webpackChunkName: "pages/_layout/blog" */))
const _253b8862 = () => interopDefault(import('../pages/_layout/blog-post.vue' /* webpackChunkName: "pages/_layout/blog-post" */))
const _3a349262 = () => interopDefault(import('../pages/_layout/change-password.vue' /* webpackChunkName: "pages/_layout/change-password" */))
const _40743f41 = () => interopDefault(import('../pages/_layout/discussion.vue' /* webpackChunkName: "pages/_layout/discussion" */))
const _5c816bfc = () => interopDefault(import('../pages/_layout/discussions.vue' /* webpackChunkName: "pages/_layout/discussions" */))
const _2b63fe2e = () => interopDefault(import('../pages/_layout/discussions-ask.vue' /* webpackChunkName: "pages/_layout/discussions-ask" */))
const _d086a97a = () => interopDefault(import('../pages/_layout/edit-account.vue' /* webpackChunkName: "pages/_layout/edit-account" */))
const _cf5d7744 = () => interopDefault(import('../pages/_layout/edit-account-notifications.vue' /* webpackChunkName: "pages/_layout/edit-account-notifications" */))
const _46b721c2 = () => interopDefault(import('../pages/_layout/edit-account-profile.vue' /* webpackChunkName: "pages/_layout/edit-account-profile" */))
const _ce4f8d66 = () => interopDefault(import('../pages/_layout/faq.vue' /* webpackChunkName: "pages/_layout/faq" */))
const _31f24b88 = () => interopDefault(import('../pages/_layout/forgot-password.vue' /* webpackChunkName: "pages/_layout/forgot-password" */))
const _4ff9ee18 = () => interopDefault(import('../pages/_layout/help-center.vue' /* webpackChunkName: "pages/_layout/help-center" */))
const _329b7d38 = () => interopDefault(import('../pages/_layout/home.vue' /* webpackChunkName: "pages/_layout/home" */))
const _df381ebe = () => interopDefault(import('../pages/_layout/instructor-courses.vue' /* webpackChunkName: "pages/_layout/instructor-courses" */))
const _736acd86 = () => interopDefault(import('../pages/_layout/instructor-dashboard.vue' /* webpackChunkName: "pages/_layout/instructor-dashboard" */))
const _14e932e0 = () => interopDefault(import('../pages/_layout/instructor-earnings.vue' /* webpackChunkName: "pages/_layout/instructor-earnings" */))
const _62de32b2 = () => interopDefault(import('../pages/_layout/instructor-edit-course.vue' /* webpackChunkName: "pages/_layout/instructor-edit-course" */))
const _c0596e3e = () => interopDefault(import('../pages/_layout/instructor-edit-quiz.vue' /* webpackChunkName: "pages/_layout/instructor-edit-quiz" */))
const _c23a13dc = () => interopDefault(import('../pages/_layout/instructor-profile.vue' /* webpackChunkName: "pages/_layout/instructor-profile" */))
const _2cbe2f9c = () => interopDefault(import('../pages/_layout/instructor-quizzes.vue' /* webpackChunkName: "pages/_layout/instructor-quizzes" */))
const _0835f298 = () => interopDefault(import('../pages/_layout/instructor-statement.vue' /* webpackChunkName: "pages/_layout/instructor-statement" */))
const _3eb91060 = () => interopDefault(import('../pages/_layout/login.vue' /* webpackChunkName: "pages/_layout/login" */))
const _0ad1fab6 = () => interopDefault(import('../pages/_layout/messages.vue' /* webpackChunkName: "pages/_layout/messages" */))
const _7ba9e306 = () => interopDefault(import('../pages/_layout/pricing.vue' /* webpackChunkName: "pages/_layout/pricing" */))
const _367a2e9e = () => interopDefault(import('../pages/_layout/signup.vue' /* webpackChunkName: "pages/_layout/signup" */))
const _20a157f4 = () => interopDefault(import('../pages/_layout/student-course.vue' /* webpackChunkName: "pages/_layout/student-course" */))
const _09e6cddd = () => interopDefault(import('../pages/_layout/student-courses.vue' /* webpackChunkName: "pages/_layout/student-courses" */))
const _2ae9d10e = () => interopDefault(import('../pages/_layout/student-dashboard.vue' /* webpackChunkName: "pages/_layout/student-dashboard" */))
const _1a674aa3 = () => interopDefault(import('../pages/_layout/student-lesson.vue' /* webpackChunkName: "pages/_layout/student-lesson" */))
const _9b1c45fc = () => interopDefault(import('../pages/_layout/student-my-courses.vue' /* webpackChunkName: "pages/_layout/student-my-courses" */))
const _303053b8 = () => interopDefault(import('../pages/_layout/student-my-paths.vue' /* webpackChunkName: "pages/_layout/student-my-paths" */))
const _4ecc1bfd = () => interopDefault(import('../pages/_layout/student-my-quizzes.vue' /* webpackChunkName: "pages/_layout/student-my-quizzes" */))
const _8bf54860 = () => interopDefault(import('../pages/_layout/student-path.vue' /* webpackChunkName: "pages/_layout/student-path" */))
const _eb5c815a = () => interopDefault(import('../pages/_layout/student-paths.vue' /* webpackChunkName: "pages/_layout/student-paths" */))
const _1865d34e = () => interopDefault(import('../pages/_layout/student-profile.vue' /* webpackChunkName: "pages/_layout/student-profile" */))
const _db69c88c = () => interopDefault(import('../pages/_layout/student-quiz-result.vue' /* webpackChunkName: "pages/_layout/student-quiz-result" */))
const _d30aab2e = () => interopDefault(import('../pages/_layout/student-skill-assessment.vue' /* webpackChunkName: "pages/_layout/student-skill-assessment" */))
const _040f1478 = () => interopDefault(import('../pages/_layout/student-skill-result.vue' /* webpackChunkName: "pages/_layout/student-skill-result" */))
const _26ec0174 = () => interopDefault(import('../pages/_layout/student-take-course.vue' /* webpackChunkName: "pages/_layout/student-take-course" */))
const _1741f5e3 = () => interopDefault(import('../pages/_layout/student-take-lesson.vue' /* webpackChunkName: "pages/_layout/student-take-lesson" */))
const _ffb00580 = () => interopDefault(import('../pages/_layout/student-take-quiz.vue' /* webpackChunkName: "pages/_layout/student-take-quiz" */))
const _428c67aa = () => interopDefault(import('../pages/_layout/teachers.vue' /* webpackChunkName: "pages/_layout/teachers" */))
const _4bb52de7 = () => interopDefault(import('../pages/_layout/ui-alerts.vue' /* webpackChunkName: "pages/_layout/ui-alerts" */))
const _68d9a7b4 = () => interopDefault(import('../pages/_layout/ui-app-layout.vue' /* webpackChunkName: "pages/_layout/ui-app-layout" */))
const _7fa1c8ae = () => interopDefault(import('../pages/_layout/ui-avatar.vue' /* webpackChunkName: "pages/_layout/ui-avatar" */))
const _80ea657a = () => interopDefault(import('../pages/_layout/ui-cards.vue' /* webpackChunkName: "pages/_layout/ui-cards" */))
const _131439ec = () => interopDefault(import('../pages/_layout/ui-chart-area.vue' /* webpackChunkName: "pages/_layout/ui-chart-area" */))
const _626039f8 = () => interopDefault(import('../pages/_layout/ui-chart-bar.vue' /* webpackChunkName: "pages/_layout/ui-chart-bar" */))
const _dabb693e = () => interopDefault(import('../pages/_layout/ui-chart-doughnut.vue' /* webpackChunkName: "pages/_layout/ui-chart-doughnut" */))
const _8585e45a = () => interopDefault(import('../pages/_layout/ui-chart-line.vue' /* webpackChunkName: "pages/_layout/ui-chart-line" */))
const _10c1b637 = () => interopDefault(import('../pages/_layout/ui-chart-radar.vue' /* webpackChunkName: "pages/_layout/ui-chart-radar" */))
const _1d00717e = () => interopDefault(import('../pages/_layout/ui-drawer.vue' /* webpackChunkName: "pages/_layout/ui-drawer" */))
const _7bc30034 = () => interopDefault(import('../pages/_layout/ui-drawer-layout.vue' /* webpackChunkName: "pages/_layout/ui-drawer-layout" */))
const _72610ef3 = () => interopDefault(import('../pages/_layout/ui-fixed-layout.vue' /* webpackChunkName: "pages/_layout/ui-fixed-layout" */))
const _1bef7a58 = () => interopDefault(import('../pages/_layout/ui-form-image-group.vue' /* webpackChunkName: "pages/_layout/ui-form-image-group" */))
const _3a042c0f = () => interopDefault(import('../pages/_layout/ui-forms.vue' /* webpackChunkName: "pages/_layout/ui-forms" */))
const _4e1582dd = () => interopDefault(import('../pages/_layout/ui-header.vue' /* webpackChunkName: "pages/_layout/ui-header" */))
const _6630866c = () => interopDefault(import('../pages/_layout/ui-header-layout.vue' /* webpackChunkName: "pages/_layout/ui-header-layout" */))
const _7b45857a = () => interopDefault(import('../pages/_layout/ui-icons.vue' /* webpackChunkName: "pages/_layout/ui-icons" */))
const _6b05b5c7 = () => interopDefault(import('../pages/_layout/ui-input-group-merge.vue' /* webpackChunkName: "pages/_layout/ui-input-group-merge" */))
const _7ebb7cc6 = () => interopDefault(import('../pages/_layout/ui-perfect-scrollbar.vue' /* webpackChunkName: "pages/_layout/ui-perfect-scrollbar" */))
const _182b3abc = () => interopDefault(import('../pages/_layout/ui-sidebar.vue' /* webpackChunkName: "pages/_layout/ui-sidebar" */))
const _10e87200 = () => interopDefault(import('../pages/_layout/ui-sidebar-menu.vue' /* webpackChunkName: "pages/_layout/ui-sidebar-menu" */))
const _0b416f1a = () => interopDefault(import('../pages/_layout/ui-syntax-highlight.vue' /* webpackChunkName: "pages/_layout/ui-syntax-highlight" */))
const _7ef4a14e = () => interopDefault(import('../pages/_layout/ui-tabs.vue' /* webpackChunkName: "pages/_layout/ui-tabs" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _02a0a6e2,
    name: "index"
  }, {
    path: "/:layout/billing",
    component: _6acc2eb2,
    name: "layout-billing"
  }, {
    path: "/:layout/billing-history",
    component: _ecddfe0e,
    name: "layout-billing-history"
  }, {
    path: "/:layout/billing-invoice",
    component: _41346b12,
    name: "layout-billing-invoice"
  }, {
    path: "/:layout/billing-payment",
    component: _18c5456b,
    name: "layout-billing-payment"
  }, {
    path: "/:layout/billing-upgrade",
    component: _06a3b281,
    name: "layout-billing-upgrade"
  }, {
    path: "/:layout/blog",
    component: _28279e7b,
    name: "layout-blog"
  }, {
    path: "/:layout/blog-post",
    component: _253b8862,
    name: "layout-blog-post"
  }, {
    path: "/:layout/change-password",
    component: _3a349262,
    name: "layout-change-password"
  }, {
    path: "/:layout/discussion",
    component: _40743f41,
    name: "layout-discussion"
  }, {
    path: "/:layout/discussions",
    component: _5c816bfc,
    name: "layout-discussions"
  }, {
    path: "/:layout/discussions-ask",
    component: _2b63fe2e,
    name: "layout-discussions-ask"
  }, {
    path: "/:layout/edit-account",
    component: _d086a97a,
    name: "layout-edit-account"
  }, {
    path: "/:layout/edit-account-notifications",
    component: _cf5d7744,
    name: "layout-edit-account-notifications"
  }, {
    path: "/:layout/edit-account-profile",
    component: _46b721c2,
    name: "layout-edit-account-profile"
  }, {
    path: "/:layout/faq",
    component: _ce4f8d66,
    name: "layout-faq"
  }, {
    path: "/:layout/forgot-password",
    component: _31f24b88,
    name: "layout-forgot-password"
  }, {
    path: "/:layout/help-center",
    component: _4ff9ee18,
    name: "layout-help-center"
  }, {
    path: "/:layout/home",
    component: _329b7d38,
    name: "layout-home"
  }, {
    path: "/:layout/instructor-courses",
    component: _df381ebe,
    name: "layout-instructor-courses"
  }, {
    path: "/:layout/instructor-dashboard",
    component: _736acd86,
    name: "layout-instructor-dashboard"
  }, {
    path: "/:layout/instructor-earnings",
    component: _14e932e0,
    name: "layout-instructor-earnings"
  }, {
    path: "/:layout/instructor-edit-course",
    component: _62de32b2,
    name: "layout-instructor-edit-course"
  }, {
    path: "/:layout/instructor-edit-quiz",
    component: _c0596e3e,
    name: "layout-instructor-edit-quiz"
  }, {
    path: "/:layout/instructor-profile",
    component: _c23a13dc,
    name: "layout-instructor-profile"
  }, {
    path: "/:layout/instructor-quizzes",
    component: _2cbe2f9c,
    name: "layout-instructor-quizzes"
  }, {
    path: "/:layout/instructor-statement",
    component: _0835f298,
    name: "layout-instructor-statement"
  }, {
    path: "/:layout/login",
    component: _3eb91060,
    name: "layout-login"
  }, {
    path: "/:layout/messages",
    component: _0ad1fab6,
    name: "layout-messages"
  }, {
    path: "/:layout/pricing",
    component: _7ba9e306,
    name: "layout-pricing"
  }, {
    path: "/:layout/signup",
    component: _367a2e9e,
    name: "layout-signup"
  }, {
    path: "/:layout/student-course",
    component: _20a157f4,
    name: "layout-student-course"
  }, {
    path: "/:layout/student-courses",
    component: _09e6cddd,
    name: "layout-student-courses"
  }, {
    path: "/:layout/student-dashboard",
    component: _2ae9d10e,
    name: "layout-student-dashboard"
  }, {
    path: "/:layout/student-lesson",
    component: _1a674aa3,
    name: "layout-student-lesson"
  }, {
    path: "/:layout/student-my-courses",
    component: _9b1c45fc,
    name: "layout-student-my-courses"
  }, {
    path: "/:layout/student-my-paths",
    component: _303053b8,
    name: "layout-student-my-paths"
  }, {
    path: "/:layout/student-my-quizzes",
    component: _4ecc1bfd,
    name: "layout-student-my-quizzes"
  }, {
    path: "/:layout/student-path",
    component: _8bf54860,
    name: "layout-student-path"
  }, {
    path: "/:layout/student-paths",
    component: _eb5c815a,
    name: "layout-student-paths"
  }, {
    path: "/:layout/student-profile",
    component: _1865d34e,
    name: "layout-student-profile"
  }, {
    path: "/:layout/student-quiz-result",
    component: _db69c88c,
    name: "layout-student-quiz-result"
  }, {
    path: "/:layout/student-skill-assessment",
    component: _d30aab2e,
    name: "layout-student-skill-assessment"
  }, {
    path: "/:layout/student-skill-result",
    component: _040f1478,
    name: "layout-student-skill-result"
  }, {
    path: "/:layout/student-take-course",
    component: _26ec0174,
    name: "layout-student-take-course"
  }, {
    path: "/:layout/student-take-lesson",
    component: _1741f5e3,
    name: "layout-student-take-lesson"
  }, {
    path: "/:layout/student-take-quiz",
    component: _ffb00580,
    name: "layout-student-take-quiz"
  }, {
    path: "/:layout/teachers",
    component: _428c67aa,
    name: "layout-teachers"
  }, {
    path: "/:layout/ui-alerts",
    component: _4bb52de7,
    name: "layout-ui-alerts"
  }, {
    path: "/:layout/ui-app-layout",
    component: _68d9a7b4,
    name: "layout-ui-app-layout"
  }, {
    path: "/:layout/ui-avatar",
    component: _7fa1c8ae,
    name: "layout-ui-avatar"
  }, {
    path: "/:layout/ui-cards",
    component: _80ea657a,
    name: "layout-ui-cards"
  }, {
    path: "/:layout/ui-chart-area",
    component: _131439ec,
    name: "layout-ui-chart-area"
  }, {
    path: "/:layout/ui-chart-bar",
    component: _626039f8,
    name: "layout-ui-chart-bar"
  }, {
    path: "/:layout/ui-chart-doughnut",
    component: _dabb693e,
    name: "layout-ui-chart-doughnut"
  }, {
    path: "/:layout/ui-chart-line",
    component: _8585e45a,
    name: "layout-ui-chart-line"
  }, {
    path: "/:layout/ui-chart-radar",
    component: _10c1b637,
    name: "layout-ui-chart-radar"
  }, {
    path: "/:layout/ui-drawer",
    component: _1d00717e,
    name: "layout-ui-drawer"
  }, {
    path: "/:layout/ui-drawer-layout",
    component: _7bc30034,
    name: "layout-ui-drawer-layout"
  }, {
    path: "/:layout/ui-fixed-layout",
    component: _72610ef3,
    name: "layout-ui-fixed-layout"
  }, {
    path: "/:layout/ui-form-image-group",
    component: _1bef7a58,
    name: "layout-ui-form-image-group"
  }, {
    path: "/:layout/ui-forms",
    component: _3a042c0f,
    name: "layout-ui-forms"
  }, {
    path: "/:layout/ui-header",
    component: _4e1582dd,
    name: "layout-ui-header"
  }, {
    path: "/:layout/ui-header-layout",
    component: _6630866c,
    name: "layout-ui-header-layout"
  }, {
    path: "/:layout/ui-icons",
    component: _7b45857a,
    name: "layout-ui-icons"
  }, {
    path: "/:layout/ui-input-group-merge",
    component: _6b05b5c7,
    name: "layout-ui-input-group-merge"
  }, {
    path: "/:layout/ui-perfect-scrollbar",
    component: _7ebb7cc6,
    name: "layout-ui-perfect-scrollbar"
  }, {
    path: "/:layout/ui-sidebar",
    component: _182b3abc,
    name: "layout-ui-sidebar"
  }, {
    path: "/:layout/ui-sidebar-menu",
    component: _10e87200,
    name: "layout-ui-sidebar-menu"
  }, {
    path: "/:layout/ui-syntax-highlight",
    component: _0b416f1a,
    name: "layout-ui-syntax-highlight"
  }, {
    path: "/:layout/ui-tabs",
    component: _7ef4a14e,
    name: "layout-ui-tabs"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
