function validate()
{ 
   var x=document.forms["form"]["first_name"].value;
   var y=document.forms["form"]["email"].value;
   var a=document.forms["form"]["telephone"].value;
   var b=document.forms["form"]["message"].value;
   //Проверяем длину строки поля "Имя", если она ровна 0 выводим сообщение
   if (x.length==0){
      document.getElementById("namef").innerHTML="*this field is required";
      return false;
      }
      //Если возвращает tru то присваеваем пустую строку
      else{ 
         document.getElementById("namef").innerHTML="";
      }
     //Если введено меньше 3 или больше 16 символов, выводим сообщение
   if (x.length<3 || x.length>16){
         document.getElementById("namef").innerHTML="*The Name must be no less than 3 and no more than 16 characters";
         return false;
      }
      //Проверяем длину строки поля "Email", если она ровна 0 выводим сообщение
    if (y.length==0){
       document.getElementById("emailf").innerHTML="*this field is required";
       return false;
    }
    //Проверим содержит ли значение введенное в поле email символы @ и .
    at=y.indexOf("@");
    dot=y.indexOf(".");
    //Если поле не содержит эти символы знач email введен не верно
    if (at<1 || dot <1){
      document.getElementById("emailf").innerHTML="*e-mail entered incorrectly";
       return false;
    }
     //Если возвращает tru то присваеваем пустую строку
    else{ 
      document.getElementById("emailf").innerHTML="";
   }
   //Проверяем длину строки поля "Телефон", если она ровна 0 выводим сообщение
   if (a.length==0){
      document.getElementById("telf").innerHTML="*this field is required";
      return false;
   }
    //Если возвращает tru то присваеваем пустую строку
   else{ 
      document.getElementById("telf").innerHTML="";
   }
   //Проверяем длину строки поля "Сообщение", если она ровна 0 выводим сообщение
   if (b.length==0){
      document.getElementById("messf").innerHTML="*this field is required";
      return false;
   }
    //Если возвращает tru то присваеваем пустую строку
   else{ 
      document.getElementById("messf").innerHTML="";
   }
    //Если введено меньше 3 или больше 100 символов, выводим сообщение
   if (b.length<3 || b.length>100){
      document.getElementById("messf").innerHTML="*The message must be no less than 3 and no more than 100 characters";
      return false;
   }
}
function myFunction(x) {
   x.classList.toggle("change");
}