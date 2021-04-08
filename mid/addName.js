function addName(obj,name,val){
    no=Object.keys(obj)
    va=Object.values(obj)
   if(no.length==0){
    newobj={
        [name]:val
    }

   }
   else{
       if(no.length==1){
        newobj={
            [no]:va[0],[name]:val
        }
       }
       else{
        newobj={
            [no[0]]:va[0],[no[1]]:va[1],[name]:val
        }

       }
   
   }
    x=newobj
    return x
}
console.log(addName({}, "Brutus", 300))
console.log(addName({ piano: 500 }, "Brutus", 400))
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))