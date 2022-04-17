clock=null
// const stopIndex=setInterval(stopTimer(),1000);
// const lapIndex=setInterval(lapTimer(),1000);

var hour= 0;
var minut = 0;
var second = 0;
// Эхлүүлэх цункц
startTimer=function(){

    second+=1;
    if(second==60){
        minut+=1;
        second=0;
    }else if (minut==60){
        hour+=1;
        minut=0;
    }
    if(hour<10){
    document.getElementById("hr").textContent="0"+hour;
     } else {
        document.getElementById("hr").textContent=hour;
     }
     if(minut<10){
        document.getElementById("min").textContent="0"+minut;
         } else {
            document.getElementById("min").textContent=minut;
         }
    if(second<10){
        document.getElementById("sec").textContent="0"+second;
     } else {
        document.getElementById("sec").textContent=second;
     }     
    // clearInterval(clock);

}
start.addEventListener("click", function(){
    if(start.className=="active"){
        clock=setInterval(startTimer, 100);
        lapbtn.classList.add("active");
        start.className="";
    }
    
})
stopbtn.addEventListener("click", function(){
    clearInterval(clock)
    start.className="active"
    lapbtn.classList.remove("active");
})
lapbtn.addEventListener("click",function(){
    if(lapbtn.className=="active"){
   const listItem=document.createElement("li")
    document.getElementById("list").appendChild(listItem)
    listItem.textContent=hr.textContent +":"+min.textContent+":"+sec.textContent;
    }
})
ressetbtn.addEventListener("click", function(){
    minut=0;
    second=0;
    hour=0;
    document.getElementById("hr").textContent="00";
    document.getElementById("min").textContent="00";
    document.getElementById("sec").textContent="00";
    start.classList.add("active");
    lapbtn.className=""
    clearInterval(clock);
// const elment=document.querySelectorAll("li")
// for(let i=0; i<elment.length; i++){
//     elment[i].remove()
// }
list.innerHTML="";  
    
})


// Зогсоох функц


// Хадгалах функц
