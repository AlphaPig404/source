/**
 * 用于slide组件
 */
import {getRect,prepend} from '../util/dom'
import {ease} from '../util/ease'

export function snapMixin(BScroll){
  BScroll.prototype._initSnap = function(){
    this.currentPage = {}
    const snap = this.options.snap

    if(snap.loop){
      let children = this.scroller.children
      if(children.length >0){
        prepend(children[children.lenth -1].cloneNode(true),this.scroller)
        this.scroller.appendChild(children[1].cloneNode(true))
      }
    }

    let el = snap.el
    if(typeof el === 'string'){
      el = this.scroller.querySelectorAll(el)
    }

    this.on('refresh',()=>{
      this.pages = []

      if(!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth||!this.scrollerHeight){
        return
      }

      let stepX = snap.stepX || this.wrapperWidth
      let stepY = snap.stepY || this.wrapperHeigth

      let x = 0
      let y
      let cx
      let cy
      let i = 0
      let l 
      let m = 0
      let n
      let rect
      
    })
  }
}