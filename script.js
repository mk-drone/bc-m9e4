function drawTree(num){
    for(var i = 1; i <= num*2; i=i+2){
        let stars = ' '.repeat(num-i/2)+'*'.repeat(i);
        console.log(stars);    
    }
}

drawTree(5);