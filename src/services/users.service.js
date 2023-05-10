//import firebase from "../firebase";

//const db = firebase.collection("/memes");

class KafkaService {

    url = 'https://kafka-express-service-kafka-adsoftsito.cloud.okteto.net/';

    reaction = async (name) => {

    await fetch(this.url + 'like?name=' + name, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => console.log(response.json()))
        .then((data) => {
        console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    addReaction = async (title, body) => {

    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => console.log(response.json()))
        .then((data) => {
            console.loge(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    comment(id) {
     // return db.doc(id).delete();
    }
}

export default new KafkaService();