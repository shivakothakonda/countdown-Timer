const endDate = "15 may 2024 12:00 PM"
document.getElementById("end-date").innerText=endDate;

const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
                             
    if(diff < 0) return;                        // returns when difference becomes '0'

    inputs[0].value = Math.floor(diff/3600/24); // converted into days
    inputs[1].value = Math.floor(diff/3600)%24; // converted into hours
    inputs[2].value = Math.floor(diff/60)%60;   // converted into minutes
    inputs[3].value = Math.floor(diff)%60;     // coverted into seconds
}
clock()
  

 // calls the clock function for every second 
setInterval(

    ()=>{
        clock()
    },1000
)