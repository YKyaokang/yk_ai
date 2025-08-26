const people = [
    {name:'Alice',age:20,role:'user'},
    {name:'Bob',age:18,role:'admin'},
    {name:'Charlie',age:25,role:'user'}
]

const allAdults = people.every(person => person.age >= 18)
const hasAdmin = people.some(person => person.role === 'admin');


// 实现Promise.all 以及 race

Promise.myall = function (arr) {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) {
            return resolve([])
        } else {
            let res = [],
                count = 0
            for (let i = 0; i < arr.length; i++) {
                // 同时也能处理arr数组中非Promise对象
                if (!(arr[i] instanceof Promise)) {
                    res[i] = arr[i]
                    if (++count === arr.length)
                        resolve(res)
                } else {
                    arr[i].then(data => {
                        res[i] = data
                        if (++count === arr.length)
                            resolve(res)
                    }, err => {
                        reject(err)
                    })
                }
            }
        }
    })
}

Promise.myrace = function (arr) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            // 同时也能处理arr数组中非Promise对象
            if (!(arr[i] instanceof Promise)) {
                Promise.resolve(arr[i]).then(resolve, reject)
            } else {
                arr[i].then(resolve, reject)
            }

        }
    })
}