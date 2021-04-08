function progressDays(runs) {
    sum=0
    total =0

   for(i=0;i<runs.length;i++){
       if(runs[i]<runs[i+1] ){

        sum =1


       }

       total += sum
       sum=0

   }

   return total



}

console.log(progressDays([3, 4, 1, 2]) )

console.log(progressDays([10, 11, 12, 9, 10]))

console.log(progressDays([6, 5, 4, 3, 2, 9]) )

console.log(progressDays([9, 9]) )