function intWithinBounds(n, lower, upper) {
    x=n.toString().split("");
    
    if(x.length == 1){
        if(n >= lower){
            if(n < upper){
                return true 
            }
            else return false
        }else return false

    }else return false

	
}

console.log(intWithinBounds(3, 1, 9) );

console.log(intWithinBounds(6, 1, 6) );

console.log(intWithinBounds(4.5, 3, 8)) ;
