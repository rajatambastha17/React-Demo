import React from "react";
// import Heading from "./Heading";
// import List from "./List";
// import Para from "./Para";

function App() {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting = "";
  let cssStyle = {};
  const name = "Rajat Ambastha";

  if (currDate >= 7 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "#4FB7A5";
  } else if (currDate >= 12 && currDate < 16) {
    greeting = "Good Afternoon";
    cssStyle.color = "#ff8d32";
  } else if (currDate >= 16 && currDate < 20) {
    greeting = "Good Evening";
    cssStyle.color = "#EDAD82";
  } else {
    greeting = "Good Night";
    cssStyle.color = "#31403C";
  }
  return (
    <>
      <div>
        <h1>
          Hello {name}, <span style={cssStyle}>{greeting}</span>{" "}
        </h1>
      </div>
    </>
  );
}

export default App;

// function App() {
//     return (
//         <>
//             <Heading/>
//             <Para/>
//             <List/>
//         </>
//     );
// }
