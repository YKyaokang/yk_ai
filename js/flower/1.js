// 申明了对象常量
//  内存中开辟了一个空间，里面存放了一个对象
// hxt 取址 & 变量名是地址的标记
// js是弱类型语言 变量的类型由值决定 
// = 赋值 Object 
// 对象字面量(字面意义上) JSON 
// JS 太灵活，不需要new， 通过{}拿到对象 [] 拿到数组
// js 灵活
const xPeng = {
  name: '小彭',
  age: 19, 
  tall: 175,
  hometown: 'ShangHai',
  isSingle: true, 
}

xPeng.sendFlower =  function(girl) {
  console.log(xPeng.name + '给' + girl.name + '送了99朵玫瑰')
  girl.receiveFlower(xPeng)
}

const xMei = {
  name: '小美',
  age: 18,
  tall:165,
  hometown: 'BeiJing'
}

xMei.emotion = -999;
xMei.receiveFlower = function(sender) {
    console.log(xMei.name + '看到了' + sender.name + '送的99朵玫瑰')
    if(xMei.emotion > 50) {
      console.log(xMei.name + '开心的给' + sender.name + '送了一朵玫瑰')
      return;
    }
    else {
      console.log('快!点！给！我！滚！')
    }
    
  }

  xMei.room = 408 

  //小红的信息
  const xHong = {
    name: '小红',
    room: '408',
    hometown: '上海', //  老乡
    emotion: 50,
  }

  xHong.receiveFlower = function(sender) {
    console.log(xHong.name + '收到了小彭送来的玫瑰，准备调节小美的心情');
    
    setTimeout(() => {
      xMei.emotion = 100;
      console.log('心情调节完毕，准备送小美玫瑰');
      xMei.receiveFlower(sender)
    },3000)
  }

  xPeng.sendFlower(xHong)
  
  
