import { TweenLite, Linear } from 'gsap'

class Tasks {
  constructor () {
    this.tasks = []
    this.animationSpeed = 0.15
    this.animationEasing = Linear.easeNone
    this.animationScale = { min: 0.8, max: 1 }
  }

  init () {
    this.modal = document.querySelector('.o-modal')
    this.modalWindow = this.modal.querySelector('.o-modal__window')
    this.modalOverlay = this.modal.querySelector('.o-modal__overlay')
    this.modalClose = this.modal.querySelector('.o-modal__window__close')
    this.pageWrapper = document.querySelector('.o-page-wrapper')

    const tasks = document.querySelectorAll('.c-task')
    for (const task of tasks) {
      this.tasks.push(task)
      this.bindEvents(task)
    }
  }

  bindEvents (el) {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      if (!el.classList.contains('c-task--new')) {
        this.open()
      }
    })

    this.modalClose.addEventListener('click', (e) => {
      e.preventDefault()
      this.close()
    })

    this.modalOverlay.addEventListener('click', () => this.close())
  }

  open () {
    this.modal.style.display = 'block'

    // show the overlay
    TweenLite.to(this.modalOverlay, this.animationSpeed, {
      visibility: 'visible',
      opacity: 1,
      ease: this.animationEasing,
      onStart: () => {
        this.pageWrapper.classList.add('o-page-wrapper--overlay')
      }
    })

    // show the window
    TweenLite.fromTo(this.modalWindow, this.animationSpeed, {
      visibility: 'visible',
      opacity: 0,
      y: '+50px',
      scale: this.animationScale.min,
      ease: this.animationEasing
    }, {
      opacity: 1,
      scale: this.animationScale.max,
      y: '0',
      ease: this.animationEasing
    })
  }

  close () {
    // hide the overlay
    TweenLite.to(this.modalOverlay, this.animationSpeed, {
      opacity: 0,
      ease: this.animationEasing,
      onStart: () => {
        this.pageWrapper.classList.remove('o-page-wrapper--overlay')
      },
      onComplete: () => {
        this.modalOverlay.style.visibility = 'hidden'
      }
    })

    // show the window
    TweenLite.fromTo(this.modalWindow, this.animationSpeed, {
      opacity: 1,
      y: '10.625em',
      scale: this.animationScale.max,
      ease: this.animationEasing
    }, {
      opacity: 0,
      scale: this.animationScale.min,
      y: '+50px',
      ease: this.animationEasing,
      onComplete: () => {
        this.modalWindow.style.visibility = 'hidden'
        this.modal.style.display = 'none'
      }
    })
  }
}

module.exports = new Tasks()
