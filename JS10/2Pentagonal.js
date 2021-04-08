function pentagonal(num) {

    five = 0
    sum = 0
    sum2 =0
    p= 1
        for(i=1 ; i <= num ;i++){
            sum = five + sum2
            
            sum2 =sum
            five +=5

        }
        return sum+1
      
	
}
console.log(pentagonal(1)) 

console.log(pentagonal(2))

console.log(pentagonal(3))

console.log(pentagonal(8))
console.log(pentagonal(10))

console.log(pentagonal(15))

console.log(pentagonal(33))
console.log(pentagonal(43))

console.log(pentagonal(13))

console.log(pentagonal(50))
