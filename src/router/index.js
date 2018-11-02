import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/HelloWorld'
import Login from '@/components/Login'
import Video from '@/components/Video'
import Music from '@/components/Music'
import Event from '@/components/Events'
import AddMusic from '@/components/AddMusic'
import AddVideo from '@/components/AddVideo'
import AddEvent from '@/components/AddEvents'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Dashboard
    },{
      path:'/login',
      name:'Login' ,
      component: Login
    },
    {
      path:'/video',
      name:'Video' ,
      component: Video
    },
    ,
    {
      path:'/events',
      name:'Events' ,
      component: Event
    },
    {
      path:'/music',
      name:'Music' ,
      component: Music
    },
    {
      path:'/addVideo',
      name:'AddVideo' ,
      component: AddVideo
    },
    {
      path:'/addEvent',
      name:'AddEvent' ,
      component: AddEvent
    },,
    {
      path:'/addMusic',
      name:'AddMusic' ,
      component: AddMusic
    },
  ]
})
