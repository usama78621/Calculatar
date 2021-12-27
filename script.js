const result =document.getElementById("result");
 buttons =document.querySelectorAll(".btn");
let resultValue= " ";
for ( item of buttons) {
    item.addEventListener("click", function(e){
  btnText=e.target.innerText;
  console.log(btnText);
  if(btnText =="X"){
    btnText ="*";
 resultValue += btnText;
   result.value = resultValue;
  } else if(btnText=="C"){
      resultValue = "";
   result.value = resultValue;

  } else if(btnText=="="){
      result.value=eval(resultValue);
  } else{
    resultValue += btnText;
    result.value = resultValue;

  }
    });
    
};
