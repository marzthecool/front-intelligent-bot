import { useState } from "react";
//import axios from "axios";
import styles from "./text-davinci-003.css";
import DaVinciText from "../services/text-davinci-003/davinci-003"
import LogService from "../services/logs.service";
//import "./App.css";
import { Configuration, OpenAIApi } from "openai";

export default function Textdavinci003() {
  var id = sessionStorage.getItem("id");
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
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  //Image
  async function generateImage(event){
    event.preventDefault();
    try{
      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      });
      console.log(response.data.data[0].url)
      setImage(response.data.data[0].url);
    }
    catch(error) {
      LogForm("Imagenes", prompt);
    }
  };

  //Moderation
  async function moderateText(event) {
    event.preventDefault();
    try{
      const response = await openai.createModeration({
        input: input,
      });
      console.log(response.data.results[0].categories);
      setCategories(response.data.results[0].categories);
    }
    catch(error){
      LogForm("Moderador", input);
    }
    
  }

  //Completion
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await DaVinciText.getDaVinci({ animal: animalInput });

      const data = await response;
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(data.result);
      setAnimalInput("");
    } catch(error) {
      LogForm("Davinci", animalInput);
    }
  }
  const LogForm = (modelo, pregunta) => {    
      console.log("Envie un log");
      LogService.createLog( id, modelo, pregunta, "Request Failed");
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
  
        <input type="submit" value="Preguntar"/>
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
      
      <div className={styles.result}>{result}</div>
      {imageURL.length > 0 ? <img src={imageURL} alt="imageURL" /> : <></>}
      <div className={styles.result}>
      {JSON.stringify(categories)}
      </div>
      </main>
    </div>
  );
}
