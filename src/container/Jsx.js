let name ='Mohan';
function CheckEvenOrOdd(num){
if(num % 2 === 0){
  return <div>Even</div>
}
else{
  return <div>odd</div>
}
}
let num =4;
const users = [
  {name:"aman",age:23},{name:"rohit",age:21}
]

// let alphabet = "b";
function checkalphabet(alphabet){
  switch(alphabet){
    case 'a':return <div>{alphabet} vowel</div>
    break;
    case 'e':return <div>{alphabet} vowel</div>
    break;
    case 'i':return <div>{alphabet} vowel</div>
    break;
    case 'o':return <div>{alphabet} vowel</div>
    break;
    case 'u':return <div>{alphabet} vowel</div>
    break;
    default:return <div>{alphabet} consonant</div>
  }
}
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
        <div>
          {
            CheckEvenOrOdd(5)
          }
          {/* {
            ((num) =>{
              if(num % 2 === 0){
                return <div>Even</div>
              }
              else{
                return <div>odd</div>
              }
            }
              
            )(6)
          } */}
          {
            num % 2===0?<div>Even number</div>:<div>Odd number</div>
          }
          <h2>If statement</h2>
          {
            num%2===0 && <div>Even number</div>
          }
          <h2>loop</h2>
          {
            users.map((item,index)=>{
              return <div key ={index}>
                {item.name}-{item.age}
              </div>
            })
          }
          <h2>SwitchCase</h2>
          {
            // ((alphabet)=>{
            //   switch(alphabet){
            //     case 'a':return <div>{alphabet} vowel</div>
            //     break;
            //     case 'e':return <div>{alphabet} vowel</div>
            //     break;
            //     case 'i':return <div>{alphabet} vowel</div>
            //     break;
            //     case 'o':return <div>{alphabet} vowel</div>
            //     break;
            //     case 'u':return <div>{alphabet} vowel</div>
            //     break;
            //     default:return <div>{alphabet} consonant</div>
            //   }
            // })('b')
            checkalphabet('p')
          }
        </div>
    </div>
  );
}

export default Jsx;

export function Greet(){
  return <h1>Hello World</h1>
}