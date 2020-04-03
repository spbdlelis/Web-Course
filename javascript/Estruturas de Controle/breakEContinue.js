const nums = [1,2,3,4,5,6,7,8,9,10]

for (let x in nums){
    if (x % 2 == 1 ) break
    console.log('x=', nums[x])
}

for (let y in nums){
    if (y % 2 == 1 ) continue
    console.log('y=', nums[y])
}

externo: for(a in nums) { //Prática ruim
    for( b in nums){
        if(a == 2 && b == 3) break externo
        console.log('par', nums[a], nums[b])
    }
}