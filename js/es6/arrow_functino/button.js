// 业务流水账代码
// 封装 
function Button(id){
    this.element = document.querySelector(`#${id}`);
    this.bindEvent();
}

Button.prototype.bindEvent = function() {
    // this 丢失 //this 指向Button
    this.element.addEventListener('click', this.setBgColor.bind(this))
}

Button.prototype.setBgColor = function(){

}