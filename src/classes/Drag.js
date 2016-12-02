import { TweenLite, CSSPlugin } from 'gsap' // eslint-disable-line no-unused-vars
const Draggable = require('gsap/src/minified/utils/Draggable.min')

function offsetLeft (elt) {
  const child = elt.getBoundingClientRect()
  const parent = elt.parentNode.getBoundingClientRect()
  const offset = (child.left - parent.left)
  return Math.round((offset / elt.parentNode.offsetWidth) * 100)
}

class Drag {
  constructor () {
    this.draggables = []
    this.options = {
      type: 'x',
      edgeResistance: 0.65,
      dragClickables: true,
      zIndexBoost: false,
      onDrag: function () {
        if (this.getDirection() === 'right') {
          this.target.parentNode.classList = 'c-draggable c-draggable--complete'
        } else {
          this.target.parentNode.classList = 'c-draggable c-draggable--snooze'
        }
      },
      onDragStart: function () {
        this.target.classList.add('c-draggable__wrapper--active')
      },
      onDragEnd: function () {
        console.log(offsetLeft(this.target))
        if (Math.abs(offsetLeft(this.target)) > 33) {
          const endOffset = (this.getDirection() === 'right') ? this.target.offsetWidth : -this.target.offsetWidth
          TweenLite.to(this.target, 0.2, {
            x: endOffset,
            height: 0,
            onComplete: () => {
              this.target.parentNode.remove()
            }
          })
        } else {
          TweenLite.to(this.target, 0.2, {
            x: 0,
            onComplete: () => {
              this.target.parentNode.classList = 'c-draggable'
              this.target.classList = 'c-draggable__wrapper'
            }
          })
        }
      }
    }
  }

  init () {
    const draggables = document.querySelectorAll('.c-draggable__wrapper')
    for (let e of draggables) {
      this.draggables.push(Draggable.create(e, this.options))
    }
  }
}

module.exports = new Drag()
