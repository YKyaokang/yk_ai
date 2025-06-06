let res = ['1','2','3'].map((num,index,arr) => {
    console.log(num,index,arr)
})
console.log(res)
console.log(parseInt('1',0,['1','2','3']))
console.log(parseInt('2',1,['1','2','3']))
console.log(parseInt('3',2,['1','2','3']))

res = ['1','2','3'].map((num,index1) => {
    return index1 + num
})
console.log(res)