export function wheelMixin(BScroll){
  // 用于picker组件
  BScroll.prototype.whellTo = function(index){
    if(this.options.wheel){
      this.y = -index*this.itemHeight
      this.scrollTo(0,this.y)
    }
  }

  BScroll.prototype.getSelectedIndex = function(){
    return this.options.wheel && this.selectedIndex
  }
}