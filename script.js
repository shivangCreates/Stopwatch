var second=0;
var status=1
var minute=0;
var hour=0;
function startclock(){
    
    second++
    data3.innerHTML=twodigit(second);
    function twodigit(num){
        if(num<10){
            return "0"+num;
        }else{
            return num;
        }
    
    }
  if(status==1){
    setTimeout(startclock,1000)
  }
  if(second==60){
    second=0;
    minute++
    data2.innerHTML=twodigit(minute);
  }
  if(minute==60){
    minute=0;
    hour++
    data1.innerHTML=twodigit(hour);
  }

   
}
function stopwatch(){
      status=0;
}
function resetwatch()
{
 second=0;
 minute=0;
 hour=0;
  data1.innerHTML = "00";
  data2.innerHTML = "00";
  data3.innerHTML = "00";
}