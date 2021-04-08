function likeOrDislike(arr) {
   
   Li = 0;
   status = " "
   if(arr.length== 0 ){
    return "Nothing"
   }
    for(i = 0 ;i<arr.length;i++){
       
        if(status!=arr[i]){
            status = arr[i]

        }else{
            if(status==arr[i] || status == " " ||status == "Nothing"){
                status ="Nothing"
            }
            
        }
           
    }
    return status

	
}
console.log(likeOrDislike(["Dislike"]) )

console.log(likeOrDislike(["Like", "Like"]) )

console.log(likeOrDislike(["Dislike", "Like"])) 

console.log(likeOrDislike(["Dislike", "Like"])) 
console.log(likeOrDislike([])) 

console.log(likeOrDislike(['Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike']))