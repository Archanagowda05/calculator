const display= document.getElementById("display")
function todisplay(string)
{
   display.value += string;
}
function cleardisplay()
{
   display.value = " ";
}
function calculate(){
    try{
       display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR!!"
    }
}