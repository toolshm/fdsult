let showQs=false;
const changeValue=()=>{
    showQs=!showQs;
    var div1=document.getElementById("child1");
    var div2=document.getElementById("child2");
    if(showQs){
        div1.style.display="none";
        div2.style.display="flex";
    }
    else{
        div1.style.display="flex";
        div2.style.display="none";
    }
}