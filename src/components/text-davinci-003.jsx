import { useState, useEffect } from "react";
//import axios from "axios";
import styles from "./text-davinci-003.css";
import DaVinciText from "../services/text-davinci-003/davinci-003"
import LogService from "../services/logs.service";
//import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import { Container, Button, ButtonGroup  } from "@mui/material";

export default function Textdavinci003() {
  const id = parseInt(sessionStorage.getItem('id'));
  console.log(id);
  //BASE DE DATOS DE TODOS LOS LOGS. MI DABTABSE
  //Completion
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState("");
  //image generator
  const [prompt, setPrompt] = useState("");
  const [imageURL, setImage] = useState("");
  //moderation
  const [input, setInput] = useState("");
  const [categories, setCategories] = useState("");

  const [logs, setLogs] = useState([]);
  
  const [model, setModel] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await LogService.getAllLogs();

      const logsData = JSON.parse(localStorage.getItem('logs'));
      setLogs(logsData || []);
    };

    fetchData();
  }, []);

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

  function showModels(chosenModel) {
    if (chosenModel === "Davinci") {
      return (
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
      )
    } else if (chosenModel === "Imagenes") {
      return (
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
      )
    }
    else if (chosenModel === "Moderador") {
      return (
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
      )  
    }
  }
  
  return (
    <div>
      <main className={styles.main}>
        <h3>Intelligent-Bot</h3>

        <Container>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={() => setModel('Davinci')}>DaVinci</Button>
            <Button onClick={() => setModel('Imagenes')}>Imágenes</Button>
            <Button onClick={() => setModel('Moderador')}>Moderador</Button>
          </ButtonGroup>
        </Container>

        {showModels(model)}

        <Container> 
          {logs
            .filter((log) => log.userid === id || log.model === model) 
            .map((log, index) => (
              <p key={index}>
                {log.userid} 
                {log.model} 
                {log.prompt} 
                {log.result}
              </p>
            ))}
        </Container>
        
      </main>
    </div>
  );
}
