import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

// const fname = "Rajat";
// const lname = "Ambastha";
// const imageLink = "https://picsum.photos/200/300";
// const imageLink1 = "https://picsum.photos/300/300";
// const imageLink2 = "https://picsum.photos/300/200"
// const web = "https://www.google.co.in";

// const heading = {
//   color: '#1bc77c',
//   textAlign: 'center',
//   textTransform: 'capitalize',
//   fontWeight: 'bold',
//   textShadow: '0px 2px 4px #ffe9c5',
//   margin: '50px 0px',
//   fontFamily: '"Raleway", sans-serif',
//   fontSize: '250%'
// };

// ReactDOM.render(
//   <React.Fragment>
//     <h1 style={heading }>{`Hello, my name is ${fname} ${lname}`}</h1>
//     <div className="img_div">
//     <img src= {imageLink} alt="random pic" />
//       <img src= {imageLink1} alt="random pic" />
//       <a href={web} target="_blank" rel='noreferrer'>
//         <img src= {imageLink2} alt="random pic" />
//       </a>
//     </div>
//   </React.Fragment>
//   ,
//   document.getElementById("root")
// );

let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
let cssStyle = { };
const name = "Rajat";

if (currDate>=7 && currDate<12) {
  greeting = "Good Morning";
  cssStyle.color = "#4FB7A5";
}
else if(currDate>=12 && currDate<16) {
  greeting = "Good Afternoon";
  cssStyle.color = "#ff8d32";
}
else if(currDate>=16 && currDate<20) {
  greeting = "Good Evening" 
  cssStyle.color = "#EDAD82";
}
else {
  greeting = "Good Night";
  cssStyle.color = "#31403C";
}

ReactDOM.render (
  <>
    <div>
      <h1>Hello {name}, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>,
  document.getElementById('root')
);