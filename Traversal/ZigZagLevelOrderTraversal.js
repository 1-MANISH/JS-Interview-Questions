function zigzagLevelOrder(root) {
    if(!root)
        return []
    
    let result = []
    let queueArray = []
    queueArray.push(root)

    let flag = false
    while(queueArray.length>0){
        let tempResult = []
        let n = queueArray.length
        for(let i = 0 ; i < n ; i++){
            let node = queueArray.shift() // first element remove - return
            tempResult.push(node.val)
            if(node.left)queueArray.push(node.left)
            if(node.right)queueArray.push(node.right)
        }
        if(flag)
            tempResult.reverse()
        flag=flag?false:true
        result.push(tempResult)
    }
    return result
};

function RecursiveZigZag(root){
  if(!root)
        return []

    let result = []
    let level = 0

    const lot = (root,level) => {
        if(!root)
            return
        result[level] = !result[level] ? [root.val] :[...result[level],root.val]
        if(root.left)
            lot(root.left,level+1)
        if(root.right)
            lot(root.right,level+1)
    }

    lot(root,level)
    // now modify array

    return result.map((ele,i)=>{
        if(i%2!==0)
            return ele.reverse()
        else
            return ele
    })
}

