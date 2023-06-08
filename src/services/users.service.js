class UserService {

    url = 'http://localhost:8080/api';

    signup = async (name, email, password, age, comments) => {
        await fetch(this.url+"/users", {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                age: age,
                comments: comments,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                console.log("Registro el usuario con pswrd");
                console.log(response.json());
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    /*
    data = async (email) => {
        await fetch(this.url+"/users", {
            method: 'GET',
            body: JSON.stringify({
                email: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                console.log("Registro el usuario con pswrd");
                console.log(response.json());
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    */
    login = async (email, password) => {

    await fetch(this.url+"/login", {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(function (response){
        console.log("Logeo el usuario con pswrd");
        response.json().then(function(datos) {
            sessionStorage.setItem("id", datos.id);
        });
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

export default new UserService();