// 用泛型去声明一个链表
// 数据结构 ADT 
// 支持泛型的节点接受value 类型的传参
class Node1<T> {
    value:T;
    next:Node1<T>|null = null;
    constructor(value:T){
        this.value = value;
    }
}

class LinkedList<T> {
    head:Node1<T>|null = null;
    append(value:T):void{
        const newNode1 = new Node1(value);
    }
}

const numberList = new LinkedList<number>();


numberList.append(1);

numberList.append(2);
numberList.append(3);




