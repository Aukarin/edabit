function direction(arr) {
    x=arr.toString().split(",");
   
          result = [];
         for(  j=0;j<x.length;j++){


            s = x[j];
           
            s1 = "";
           for( i=0;i<s.length;i++){
             if(s[i]==='E'){

               s1 += 'W';
             }else if(s[i]==='e'){
               s1 += 'w';
             }
             else if(s[i]==='a'){
               s1 += 'e';
             }
             else if(s[i]==='A'){
               s1 += 'E';
             }
             else if(s[i]==='S'){
               s1 += 'S';
             }
             else if(s[i]==='s'){
               s1 += 's';
             }
             else if(s[i]==='T'){
               s1 += 'T';
             }
             else if(s[i]==='t'){
               s1 += 't';
             }else{
               s1 += s[i];
             }
           }


           result.push(s1);
         }

        return result;
	
}
console.log(direction(["east", "EAST", "eastEAST"]))

console.log(direction(["eAsT EaSt", "EaSt eAsT"]) )

console.log(direction(["east EAST", "e a s t", "E A S T"]) )