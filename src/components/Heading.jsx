import React from "react";
import myname from "./Import-Export";
import { degree, college, myCity } from "./Import-Export";

function Heading() {
  return (
    <>
      <h2>Hello {myname}, this a new component</h2>
      <p>
        My college name is {college} with {degree} degree and my hometown is{" "}
        {myCity()}
      </p>
    </>
  );
}

export default Heading;
