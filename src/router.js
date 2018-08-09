import Vue from 'vue'
import Router from 'vue-router'
import { createRoute } from 'vue-book'

Vue.use(Router)

export default new Router({
  routes: [
    createRoute({
      requireContext: require.context('./components', true, /.vue$/),
      path: '/demo',
      hideFileExtensions: false, // optional, hides file extensions in list.
    }),
  ],
})
