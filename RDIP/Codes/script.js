function sentencefunc()
{
var x = document.getElementById("lang").value;
if(x == "null")
{
alert("Select a language");
return false;
}
else if(x =="english"){
document.getElementById("demo").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
document.getElementById("demo1").innerHTML = "(select the buttons in proper order)";	
}
else if(x =="hindi"){
document.getElementById("demo").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
document.getElementById("demo1").innerHTML = "(select the buttons in proper order)";
}
} 




