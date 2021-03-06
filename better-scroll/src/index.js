import {eventMixin} from './scroll/event'
import {initMixin} from './scroll/init'
import {coreMixin} from './scroll/core'
import {snapMixin} from './scroll/snap'
import {wheelMixin} from './scroll/wheel'
import {scrollbarMixin} from './scroll/scrollbar'

import {warn} from './util/debug'

function BScroll(el,options){
  this.wrapper = typeof el === 'string'? document.querySelector(el):el
  if(!this.wrpper){
    warn('can not resolve the wrapper dom')
  }
  this.scroll = this.wrapper.children[0]
  if(!this.scroller){
    warn('the wrapper need at least on child element to be scroller')
  }

  //cache style for better performance
  this.scrollerStyle = this.scroller.style

  this._init(el,options)
}

initMixin(BScroll)
coreMixin(BScroll)
eventMixin(BScroll)
snapMixin(BScroll)
wheelMixin(BScroll)
scrollbarMixin(BScroll)

BScroll.version = '1.1.0'

export default BScroll