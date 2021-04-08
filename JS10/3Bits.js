function addParityBit(b) {
    bit=b.toString().split("");
    if(bit.length <8)
    {
       
            one= 0
        for(i = 0;i<bit.length;i++){
            if(bit[i] == 1){
                one += 1
            }
        }
        if((one%2)==0){
            bit[7] = 0
            return bit.join("")
            
        }else {
            bit[7] = 1
            return bit.join("")
           }
          }
    }
console.log(addParityBit("1011011") )

console.log(addParityBit("0110000") )

console.log(addParityBit("0101101") )

console.log(addParityBit("1111111") )