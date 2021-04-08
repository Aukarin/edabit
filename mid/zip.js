function zipIt(arr,arr2){
    x=[]
    b=0
    for(i=0;i<arr.length;i++){
        
            if(arr.length==arr2.length){
                x[b]= "[\""+arr[i]+"\","+arr2[i]+"\"]"
                b++
            }
            else{
                return "sizes don't match"
            }

        
    }

    return x
}
console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]))
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]))
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]))