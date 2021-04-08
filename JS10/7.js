function combinations(items) {
	
	sum=1;
	for(let i=0;i<arguments.length;i++){
        
		if(arguments[i]==0){
			arguments[i]=1
		}
		sum=arguments[i]*sum;
	}
	return sum;
}
console.log(combinations(2, 3) )

console.log(combinations(3, 7, 4) )

console.log(combinations(2, 3, 4, 5) )