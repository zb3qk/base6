import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
function createMarkup(i) {
  return {__html: 'a<sub>d</sub>'};
}
function createAnswer() {
  return {__html: window.disp1+'<sub>'+window.base1+'</sub>'+window.op2+window.disp2+'<sub>'+window.base2};
}


function createAnswer2(num1,num2) {
  return {__html: num1+'<sub>'+num2+'</sub>'};
}

class Board extends React.Component {
    constructor(props){
     super(props);
     genrandom();
        
    }
    
  renderSquare(i) {
      
    return (
        
      <Square
        value={<div dangerouslySetInnerHTML={window.a[i]} />}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
      
    return (
        
      <div>
      
      <div>{<div dangerouslySetInnerHTML={createAnswer()} />}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    window.alert(i);
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];


    

    let status;
    

    return (
        
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>

        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));





ReactDOM.render(
  <Game />,
  document.getElementById('root')
);







function genrandom(){
                
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
                window.answer=answer;
                window.base1=base1;
                window.base2=base2;
                window.num1=num1;
                window.num2=num2;
                window.op2=op2;
                var disp1=num1.toString(base1);
                var disp2=num2.toString(base2);
                window.disp1=disp1;
                window.disp2=disp2;

                var x = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
                var fourRandomMembers = getRandomSubarray(x, 4);
                for(var i=0;i<fourRandomMembers.length;i++){
                        //window.alert(gensols(answer,fourRandomMembers[i])+fourRandomMembers[i].toString().sub()+"right")
                
                }
                var fiveRandomMembers = getRandomSubarray(x, 4);
                for(var i=0;i<fiveRandomMembers.length;i++){
                        //window.alert(genwsols(answer,fiveRandomMembers[i])+fiveRandomMembers[i].toString().sub()+"wrong")
                
                }
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
                window.a=a;


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





