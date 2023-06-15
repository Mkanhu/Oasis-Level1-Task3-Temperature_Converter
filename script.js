function temprature() {
    const tempratureValue=document.getElementById('takeDegree').value;
   const temprature=document.querySelector('#unit');
    const input=temprature.value;

   if(input == "Celsius"){
    let F=((tempratureValue*9/5)+32).toFixed(1);
    document.querySelector('.result').textContent=F+" Fahrenheit";
   }
   else {
    let C=((tempratureValue-32)*5/9).toFixed(1);
    document.querySelector('.result').textContent=C+" Celsius";
   }


}