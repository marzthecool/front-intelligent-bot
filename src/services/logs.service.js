//import firebase from "../firebase";

//const db = firebase.collection("/memes");

class LogsService {

    url = 'http://localhost:8080/api';

    createLog = async (userid, model, prompt, result) => {

        await fetch(this.url+"/logs", {
            method: 'POST',
            body: JSON.stringify({
                userid: userid,
                model: model,
                prompt: prompt,
                result: result,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                console.log("Log creado?");
                console.log(response.json());
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        }

    comment(id) {
     // return db.doc(id).delete();
    }
}

export default new LogsService();