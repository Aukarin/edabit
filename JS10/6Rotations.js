function leftRotations(str) {
    tex = [];
	for ( i = 0; i < str.length; i++){
		rev = str.split('').reverse().join('');
        rev2 = str.split('').reverse();
        
		add = rev2[rev2.length-1];
        
		tex[i] = str;
		str = str.substring(1) + add;
        
	}
    return  tex
	
}

function rightRotations(str) {
	tex = [];
	for (i = 0; i < str.length; i++){
		tex[i] = str;
		r = str[str.length-1];
		str = str.slice(0, str.length-1);
		str = r + str;

	}return  tex
	
}
console.log(leftRotations("abc") )
console.log(rightRotations("abc") )
console.log(leftRotations("abcdef") )
console.log(rightRotations("abcdef"))