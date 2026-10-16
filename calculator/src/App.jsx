import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {
  // use state
  const [calVal, setCalVal] = useState(""); //Define inside a components
  const ButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } 

    else if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    }

     else {
      const newDisplayValue = calVal + buttonName; //as it added as string so concationate
      // Update new calval value
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      {/* Passing function as props */}
      <ButtonsContainer onButtonClick={ButtonClick} />
      {/* IMP: Parent bol raha hai child mai tumko ek function de raha hu onButtonClick naam se usko call karna with argrument jo needed ho fhir mai dekh lunga ki function me kya karwana hai */}
    </div>
  );
}

export default App;
