var msg="Hi Praveen Kumar!";
alert(msg);
function validate(){
var nam = document.getElementById("nam");
var mail = document.getElementById("mail");
if(nam.value.trim()=="" ||mail.value.trim()=="")
{
window.alert("No Blank Values Allowed !");
return false;
}
else
{
window.alert("Loan Applied Successfully  !");
}
}