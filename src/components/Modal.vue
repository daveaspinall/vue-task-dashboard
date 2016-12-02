<template>
  <div class="o-modal">
    <div class="o-modal__window">
      <div class="o-modal__window__wrapper">
        <a href="#" class="o-modal__window__close">
          <span class="o-modal__window__close__label">Close</span>
          <div class="o-modal__window__close__icon" v-html="icons.close"></div>
        </a>
        <article class="c-task-details">
          <header class="c-task-details__header">
            <span class="c-task-details__header__type" v-html="icons.bug"></span>
            <h2 class="c-task-details__header__title">Fix Internet Explorer issues with navigation</h2>
            <a href="#" class="c-task-details__header__snooze c-icon-link u-theme--snoozed">
              <span class="c-icon-link__label">Schedule</span>
              <div class="c-icon-link__icon" v-html="icons.snooze"></div>
            </a>
            <a href="#" class="c-task-details__header__options c-icon-link">
              <span class="c-icon-link__label">Options</span>
              <div class="c-icon-link__icon" v-html="icons.more"></div>
            </a>
          </header>
          <div class="c-task-details__content">
            <span class="c-task-details__content__client">Client name</span>
            <p>Elit maecenas a in mi purus pulvinar euismod blandit est lectus per conubia in lacinia maecenas ullamcorper adipiscing hendrerit a ante hac nam vel congue id eu diam. Pulvinar scelerisque a dignissim ipsum parturient at ultrices nam eu ullamcorper
              parturient commodo dignissim adipiscing id eget.</p>
          </div>
          <footer class="c-task-details__footer">
            <span class="c-task-details__footer__due-date c-task-details__footer__due-date--critical">Due today</span>
            <span class="c-task-details__footer__budget">Unknown</span>
            <a href="#" class="c-task-details__footer__complete">
              <span class="c-task-details__footer__complete__label">Complete Task</span>
              <div class="c-task-details__footer__complete__icon" v-html="icons.check"></div>
            </a>
          </footer>
        </article>
      </div>
    </div>
    <div class="o-modal__overlay"></div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    data () {
      return {
        icons: {
          close: require('!!raw!../assets/icons/ic_close.svg'),
          snooze: require('!!raw!../assets/icons/ic_schedule.svg'),
          check: require('!!raw!../assets/icons/ic_check.svg'),
          more: require('!!raw!../assets/icons/ic_more_vert.svg'),
          bug: require('!!raw!../assets/icons/ic_bug_report.svg'),
          edit: require('!!raw!../assets/icons/ic_edit.svg'),
          chat: require('!!raw!../assets/icons/ic_chat.svg')
        }
      }
    }
  }
</script>
