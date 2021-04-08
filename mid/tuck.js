function tuckIn (arr,arr2){
   x=[]
  
   for(i=0;i<arguments.length;i++)
   {
      for (let j = 0; j < arguments.length; j++) {
         
      x[i] = arguments[i][j]
         
      }
   }
   return x
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))
console.log(tuckIn([15,150], [45, 75, 35]))
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]))