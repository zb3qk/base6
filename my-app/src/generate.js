export function genrandom(){

                var base1=Math.floor(Math.random()*16+2);
                var base2=Math.floor(Math.random()*16+2);
                var num1=Math.floor(Math.random()*base1*2+1);
                var num2=Math.floor(Math.random()*base2*2+1);
                var answer;
                var op2;

                var operation=Math.floor(Math.random()*3);

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

                var disp1=num1.toString(base1);
                var disp2=num2.toString(base2);

                var x = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];

                var fourRandomMembers = getRandomSubarray(x, 4);
                var fiveRandomMembers = getRandomSubarray(x, 4);

                var position=[0,1,2,3,4,5,6,7,8]
                var correct = getRandomSubarray(position, 4);

                var a=[' ',' ',' ',' ',' ',' ',' ',' ',' '];

                for(var i=0;i<4;i++){
                        a[correct[i]]=createAnswer2(gensols(answer,fourRandomMembers[i]),fourRandomMembers[i].toString());
                }
                for(var j=0;j<9;j++){
                        if(a[j]==' '){
                         a[j]=createAnswer2(genwsols(answer,fourRandomMembers[i/4]),fourRandomMembers[i/4].toString());
                        }
                }

                // Putting the answer together
                var title = [disp1, base1, op2, disp2, base2];
                var result = [];
                result.push(a);
                result.push(correct);
                result.push(title);
                return result;
        }

function gensols(answer,base){
            return answer.toString(base);
        }
        function genwsols(answer,base){
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

function createAnswer2(num1,num2) {
  return {__html: num1+'<sub>'+num2+'</sub>'};
}

export function createAnswer(title) {
  return {__html: title[0]+'<sub>'+title[1]+'</sub>'+title[2]+title[3]+'<sub>'+title[4]};
}
