var number1;
var number2;
var score=0;
var time=60;
       var num1;
       var num2;
       var base1;
       var base2;
       var operation;
       var op2;
       var disp1;
       var displ2;
       export function gensols(answer,base){ //generate solutions
           return answer.toString(base);
       }
       function genwsols(answer,base){ //generate wrong solutions
           return (answer+Math.floor(Math.random()*5+1)).toString(base);
       }
       function convert(num1, base1, num2, base2, operation){
               if(operation=="+"){
                       return parseInt(num1,base1)+parseInt(num2,base2);
               }
               else if (operation =="-"){
                       return parseInt(num1,base1)-parseInt(num2,base2);
               }
               else if(operation =="*"){
                       return parseInt(num1,base1)*parseInt(num2,base2);
               }
       }
       function genrandom(){
               base1=Math.floor(Math.random()*16+2);
               base2=Math.floor(Math.random()*16+2);
               num1=Math.floor(Math.random()*base1*9+1);
               num2=Math.floor(Math.random()*base2*9+1);

               operation=Math.floor(Math.random()*3);
               if(operation==0){
                       answer = num1+num2;
                       op2="+";
               }
               else if(operation==1){
                       answer = num1-num2;
                       op2="-";
               }
               else{
                       op2="*";
                       answer=num1*num2;
               }
               //answer=convert(num1.toString(base1),base1,num2.toString(base2),base2,op2);
               disp1=num1.toString(base1);
               disp2=num2.toString(base2);
               /*window.alert(num1);
               window.alert(base1);
               window.alert(disp1);
               window.alert(num2);*/
               window.alert(answer);
               var x = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
       /* Correct Solutions */
       var allMembers;
       var allMembers1;
       var NumCorrect = 4;
               var fourRandomMembers = getRandomSubarray(x, NumCorrect);
               for(var i=0;i<fourRandomMembers.length;i++){
                       allMembers[i]=gensols(answer,fourRandomMembers[i])+fourRandomMembers[i].toString().sub();
               }
       /* Incorrect Solutions */
               var fiveRandomMembers = getRandomSubarray(x, 9-NumCorrect);
               for(var i=0;i<fiveRandomMembers.length;i++){
                       allMembers[i+NumCorrect] = genwsols(answer,fiveRandomMembers[i])+fiveRandomMembers[i].toString().sub();
               }
       allMembers1 = getRandomSubarray(allMembers, 9);
       for(var i=1; i<=9; i++){
        document.getElementById(i).number=allMembers1[i];
       }
       }
       function getRandomSubarray(arr, size) {
           var shuffled = arr.slice(0), i = arr.length, temp, index;
           while (i--) {
           index = Math.floor((i + 1) * Math.random());
           temp = shuffled[index];
           shuffled[index] = shuffled[i];
           shuffled[i] = temp;
           }
       return shuffled.slice(0, size);
       }
   function getRandomSubarray(arr, arr1, size) {
      var shuffled;
     var shuffled[0] = arr.slice(0), i = arr.length, temp, index;
     var shuffled[1] = arr1.slice(0);
     while (i--) {
     index = Math.floor((i + 1) * Math.random());
      for(var j=0; j<2; j++) {
      temp = shuffled[0][index];
      shuffled[j][index] = shuffled[j][i];
      shuffled[j][i] = temp;
      }
     }
   return shuffled;
   }

function startFunction()
{
var myVar= setInterval(function(){
   time--;
   var timeDiv=document.getElementById("time");
   timeDiv.innerHTML=time
   if(time<=0)
   {
    clearInterval(myVar);
    window.alert("Your score is: "+score);
   }
 },1000);
}
 function addFunction(){
  if(num1==null)
  {
   genrandom();
  document.getElementById("p1").innerHTML = this.disp1+' '+this.base1.toString().sub()+" "+op2+' '+this.disp2+' '+this.base2.toString().sub();
  }
  else{
   if(parseInt(document.getElementById("answer").value)==answer)
   {
                       genrandom();
  document.getElementById("p1").innerHTML = this.disp1+' '+this.base1.toString().sub()+" "+op2+' '+this.disp2+' '+this.base2.toString().sub();
  score=score+1;
  document.getElementById("score").innerHTML=score.toString();
  clearbox()
 }
 }
 }
 /*function yesFunction(){
  score=0;
  time=30
  var timeDiv=document.getElementById("time");
   timeDiv.innerHTML=time
  document.getElementById("score").innerHTML=score.toString();
  number1=null;
  number2=null;
   startFunction();
   addFunction();
 }*/
 function clearbox(){
  document.getElementById("answer").value="";
 }
