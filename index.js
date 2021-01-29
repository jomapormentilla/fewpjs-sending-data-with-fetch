// Add your code here

const url = "http://localhost:3000/users"

function submitData( name, email ){
    const formData = {
        name: name,
        email: email
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch( url, configObj )
        .then( response=>response.json() )
        .then( json => {
            document.body.innerHTML += json["id"]
        })
        .catch( error => {
            document.body.innerHTML += error.message
        })
}

function getData(){
    fetch(url)
        .then( response => response.json() )
        .then( json => {
            for( const keys in json ){
                document.body.innerHTML += json[keys]["id"]
            }
        })
        .catch( error => {
            document.body.innerHTML =+ error.message
        })
}

getData()