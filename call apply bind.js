Function.prototype.myBind=function (that) {
  const name=this.name
  that[name]=this
  return function (...arg) {
    return that[name](...arg)
  }
}
Function.prototype.myCall=function (that,...arg) {
  const name=this.name
  that[name]=this
  const res=that[name](...arg)
  delete that[name]
  return res
}
Function.prototype.myApply=function (that,arg=[]) {
  const name=this.name
  that[name]=this
  const res=that[name](...arg)
  delete that[name]
  return res
}
