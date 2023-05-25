import { useState } from "react";
import styles from "./text-davinci-003.css";
import DaVinciText from "../services/text-davinci-003/davinci-003"
import LogService from "../services/logs.service";
import logsService from "../services/logs.service";

export default function Textdavinci003() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await DaVinciText.getDaVinci({ animal: animalInput });
      /*const response = await fetch("/text-davinci-003/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });*/

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setAnimalInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  const LogForm = ({ _setAuth }) => {
    //const log = (userid, model, prompt, result) => {
    
      console.log("Entre a logs");
      LogService.createLog(1, "DaVinci", "How are you?", "Fine, thank you!");
      //e.preventDefault();  
    //}
  }
  
  return (
    <div>
      <main className={styles.main}>
      <h3>DaVinciBot</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="animal"
          placeholder="Ingresa tu peticion"
          value={animalInput}
          onChange={(e) => setAnimalInput(e.target.value)}
        />
        <input type="submit" value="Generate names" />
      </form>
      <button onClick={LogForm}>Test LogForm</button>
      <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
