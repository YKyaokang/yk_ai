function Fna(val){
    this.a = val;
    this.fnb();
}

Fna.prototype.fnb = function(){
    console.log(this.a);
}

new Fna(1);

