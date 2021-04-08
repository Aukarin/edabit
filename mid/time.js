function digitalClock(times){
    hour = "00";
    sec = "00";
    if(times>=86400){
        hour=Math.floor((times/60)/60);
        hourl=(times/60)/60;
        hourS=hourl-hour;
        min=Math.floor(hourS*60);
        minl=hourS*60
        minS=minl-min;
        sec=Math.round(minS*60);
        
        if(hour==24){
            hour="00";
        }
        

        return hour+" : "+min+" : "+sec ;
    }
    else if(times >= 3600){
        hour=Math.floor((times/60)/60);
        hourl=(times/60)/60;
        hourS=hourl-hour;
        min=Math.floor(hourS*60);
        minl=hourS*60
        minS=minl-min;
        sec=Math.round(minS*60);
    

        return hour+" : "+min+" : "+sec ;

    }else{
        hour=Math.floor((times/60)/60);
        hourl=(times/60)/60;
        hourS=hourl-hour;
        min=Math.floor(hourS*60);
        minl=hourS*60
        minS=minl-min;
        sec=Math.round(minS*60);
        
        

        return hour+" : "+min+" : "+sec ;

    }
            

    
    return times;
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));