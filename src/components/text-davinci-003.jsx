import { useState } from "react";
//import axios from "axios";
import styles from "./text-davinci-003.css";
import DaVinciText from "../services/text-davinci-003/davinci-003"
import LogService from "../services/logs.service";
//import "./App.css";
import { Configuration, OpenAIApi } from "openai";

export default function Textdavinci003() {
  //Completion
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState("");
  //image generator
  const [prompt, setPrompt] = useState("");
  const [imageURL, setImage] = useState("");
  //moderation
  const [input, setInput] = useState("");
  const [categories, setCategories] = useState("");

  const configuration = new Configuration({
    apiKey: "LLAVEAPI",
  });
  const openai = new OpenAIApi(configuration);

  //Image
  async function generateImage(event){
    event.preventDefault();
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    console.log(response.data.data[0].url)
    setImage(response.data.data[0].url);
    //res.send(response.data.data[0].url);
  };

  //Moderation
  async function moderateText(event) {
    event.preventDefault();
    const response = await openai.createModeration({
      input: input,
    });
    console.log(response.data.results[0].categories);
    setCategories(response.data.results[0].categories);
  }
  /*
  async function moderateText(event) {
    event.preventDefault();
    const apiKey = "";
    const endpoint = 'https://api.openai.com/v1/engines/davinci/moderation/ratepoints';
  
    try {
      const response = await axios.post(endpoint, {
        model: 'davinci',
        thresholds: {
          'identity_attack': 0.6,
          'insult': 0.8,
          'profanity': 0.5,
        },
        modPrompt: modPrompt,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });
  
      if (response.status === 200 && response.data && response.data.choices && response.data.choices.length > 0) {
        const moderationResult = response.data.choices[0];
        return moderationResult;
      } else {
        throw new Error('Failed to moderate text.');
      }
    } catch (error) {
      console.error('Error moderating text:', error.message);
      return null;
    }
  }
*/
  //Completion
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await DaVinciText.getDaVinci({ animal: animalInput });

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
        <input type="submit" value="Preguntar" />
      </form>

      {/* Image generator */}
      <form>
        <input
          className="app-input"
          placeholder="Ingresa tu imagen a generar"
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button onClick={generateImage}>
          Generar
        </button>
      </form>

      {/* Moderation */}
      <form>
        <input
          className="moderation"
          placeholder="Ingresa tu texto a verificar"
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={moderateText}>
          Verificar
        </button>
      </form>
      
      
      <button onClick={LogForm}>Test LogForm</button>
      <div className={styles.result}>{result}</div>
      {imageURL.length > 0 ? <img src={imageURL} alt="imageURL" /> : <></>}
      <div className={styles.result}>
      {JSON.stringify(categories)}
      </div>
      </main>
    </div>
  );
}
