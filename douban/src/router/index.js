import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from './../components/home'
import Radio from './../components/radio'
import Status from './../components/status'
import Group from './../components/group'
import Mine from './../components/mine'
import City from './../components/radio/city'
import Movie from './../components/radio/movie'
import TV from './../components/radio/tv'
import Music from './../components/radio/music'
import Read from './../components/radio/read'
export default new Router({
  routes: [
    {
      path:'/',
      component:Home
    }, {
      path:'/home',
      component:Home
    },{
      path:'/radio',
      component:Radio,
      children:[
        {
          path:'/radio/movie',
          component:Movie
        }, {
          path:'/radio/music',
          component:Music
        }, {
          path:'/radio/read',
          component:Read
        }, {
          path:'/radio/tv',
          component:TV
        }, {
          path:'/radio/city',
          component:City
        }
      ]
    },{
      path:'/status',
      component:Status
    },{
      path:'/group',
      component:Group
    },{
      path:'/mine',
      component:Mine
    }
  ]
})
