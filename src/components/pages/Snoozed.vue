<template>
  <main class="o-page-main">
    <h1 class="c-page-title">Snoozed Tasks</h1>
    <div class="o-task-list">
      <a class="c-task c-task--new" href="#">
        <span class="c-task--new__icon" v-html="icons.add"></span> Add a new task
      </a>
      <div class="c-draggable">
        <div class="c-draggable__wrapper">
          <a class="c-task" href="#">
            <span class="c-task__type" v-html="icons.bug"></span>
            <div class="c-task__details">
              <strong class="c-task__details__title">Fix Internet Explorer issues with navigation</strong>
              <span class="c-task__details__client">Client name</span>
            </div>
            <div class="c-task__meta">
              <span class="c-task__meta__due-date c-task__meta__due-date--snoozed">Until next week</span>
              <span class="c-task__meta__budget">2 hours</span>
            </div>
            <span class="c-task__options" v-html="icons.more"></span>
          </a>
        </div>
      </div>
      <div class="c-draggable">
        <div class="c-draggable__wrapper">
          <a class="c-task" href="#">
            <span class="c-task__type" v-html="icons.chat"></span>
            <div class="c-task__details">
              <strong class="c-task__details__title">Fix Internet Explorer issues with navigation</strong>
              <span class="c-task__details__client">Client name</span>
            </div>
            <div class="c-task__meta">
              <span class="c-task__meta__due-date c-task__meta__due-date--snoozed">Until next week</span>
              <span class="c-task__meta__budget">Unknown</span>
            </div>
            <span class="c-task__options" v-html="icons.more"></span>
          </a>
        </div>
      </div>
      <div class="c-draggable">
        <div class="c-draggable__wrapper">
          <a class="c-task" href="#">
            <span class="c-task__type" v-html="icons.edit"></span>
            <div class="c-task__details">
              <strong class="c-task__details__title">Fix Internet Explorer issues with navigation</strong>
              <span class="c-task__details__client">Client name</span>
            </div>
            <div class="c-task__meta">
              <span class="c-task__meta__due-date c-task__meta__due-date--snoozed">Until 3rd Dec</span>
              <span class="c-task__meta__budget">1 hour</span>
            </div>
            <span class="c-task__options" v-html="icons.more"></span>
          </a>
        </div>
      </div>
      <div class="c-draggable">
        <div class="c-draggable__wrapper">
          <a class="c-task" href="#">
            <span class="c-task__type" v-html="icons.edit"></span>
            <div class="c-task__details">
              <strong class="c-task__details__title">Fix Internet Explorer issues with navigation</strong>
              <span class="c-task__details__client">Client name</span>
            </div>
            <div class="c-task__meta">
              <span class="c-task__meta__due-date c-task__meta__due-date--snoozed">Until 6th Dec</span>
              <span class="c-task__meta__budget">3 hours</span>
            </div>
            <span class="c-task__options" v-html="icons.more"></span>
          </a>
        </div>
      </div>
      <div class="c-draggable">
        <div class="c-draggable__wrapper">
          <a class="c-task" href="#">
            <span class="c-task__type" v-html="icons.bug"></span>
            <div class="c-task__details">
              <strong class="c-task__details__title">Fix Internet Explorer issues with navigation</strong>
              <span class="c-task__details__client">Client name</span>
            </div>
            <div class="c-task__meta">
              <span class="c-task__meta__due-date c-task__meta__due-date--snoozed">Until 10th Dec</span>
              <span class="c-task__meta__budget">1 hour</span>
            </div>
            <span class="c-task__options" v-html="icons.more"></span>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Tasks from '../../classes/Tasks'
  import Drag from '../../classes/Drag'

  export default {
    name: 'snoozed',
    data () {
      return {
        icons: {
          add: require('!!raw!../../assets/icons/ic_add.svg'),
          more: require('!!raw!../../assets/icons/ic_more_vert.svg'),
          bug: require('!!raw!../../assets/icons/ic_bug_report.svg'),
          edit: require('!!raw!../../assets/icons/ic_edit.svg'),
          chat: require('!!raw!../../assets/icons/ic_chat.svg')
        }
      }
    },
    activated () {
      this.$nextTick(() => {
        Tasks.init()
        Drag.init()
      })
    }
  }
</script>
