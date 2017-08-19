// 

/**
 * Object.defineProperty(obj,prop,descriptor)
 * @desc 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
 * @param obj 需要被操作的目标对象
 * @param prop 目标对象需要定义或修改的属性的名称
 * @param descriptor 将被定义或修改的属性的描述符
 * @return 被传递给函数的对象
 */
// var bValue;
// Object.defineProperty(o, "b", {
//   get : function(){
//     return bValue;
//   },
//   set : function(newValue){
//     bValue = newValue;
//   },
//   enumerable : true,
//   configurable : true
// });

/**
 * Object.create(proto,[propertoesObject])
 * @desc 使用指定的原型对象及其属性去创建一个新的对象
 * @param proto [obj] 是新创建的对象的原型
 * @param propertiesObject 可选。该参数对象是一组属性和值
 * 该对象的属性名称将是新创建的对象的属性名称，值是属性描述符
 * 注意：该参数对象不能是 undefined，另外只有该对象中自身拥有的可枚举的属性才有效，
 * 也就是说该对象的原型链上属性是无效的。
 */

 /**
 * Object.getOwnPropertyNames
 * 返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名
 * Object.getOwnPropertyDescriptor
 * 返回指定对象上一个自有属性对应的属性描述符
 */

 var myobj = {
   get a(){
     return this._a_
   },
   set a(val){
     this._a_ = val
     document.querySelector('#articleTitle').innerHTML = this._a_
   }
 }

 function Foo(name){
   this.name = name
 }

 Foo.prototype.myName = function(){
   return this.name
 }

 function Bar(name,label){
   Foo.call(null,name)
   this.label = label
 }

 Bar.prototype = Object.create(Foo.prototype)

 Bar.prototype.myLabel = function(){
   return this.label
 }

 var a = new Bar('a','obj a')

 a.myName()
 a.myLabel()