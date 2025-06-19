Foo = {
    init: function(who) {
        this.me = who;
    },
    identify: function(){
        return "Im" + this.me;
    }
};


Bar = Object.create(Foo);
Bar.speak = function() {
    console.log('hello',this.identify() + ".");
}

var b1 = Object.create(Bar);
b1.init("b11");
console.log(b1.me);
b1.speak();
