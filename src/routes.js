const Today = require('./components/pages/Today.vue')
const Snoozed = require('./components/pages/Snoozed.vue')
const Completed = require('./components/pages/Completed.vue')

export default [
  {
    path: '/snoozed',
    name: 'snoozed',
    component: Snoozed,
    meta: {
      icon: 'ic_schedule.svg',
      theme: 'snoozed'
    }
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Today,
    meta: { icon: 'ic_event_available.svg' }
  },
  {
    path: '/completed',
    name: 'completed',
    component: Completed,
    meta: {
      icon: 'ic_check.svg',
      theme: 'done'
    }
  },
  // catch all redirect
  {
    path: '*',
    redirect: {
      path: '/tasks'
    }
  }
]
