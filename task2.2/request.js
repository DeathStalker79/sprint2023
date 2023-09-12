const axios = require('axios');
const fs = require('fs');

function getPhoto() {
    return axios.get('https://jsonplaceholder.typicode.com/photos/200')
        .then((response) => {
            fs.writeFileSync('readme.txt', JSON.stringify(response.data));
            console.log('done')
        })
        .catch((e) => {
            console.log(e)
        })
}

module.exports = {
    getPhoto
}