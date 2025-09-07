function flatten(arr) {
    return arr.reduce((res,cur) => {
        if(!Array.isArray(cur)) {
            return [...res,cur]
        }else{
            return [...res,...flatten(cur)]
        }
    })    
}
[1,2,3,[4,5,6,[7,8,9]]]








