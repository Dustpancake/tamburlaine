import Vue from 'vue'
import VueRouter from 'vue-router'
import Note from '../views/Note.vue'
import NoteHome from '../views/NoteHome.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: NoteHome
  },
  {
    path: '/notes',
    name: 'Note',
    component: Note,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
