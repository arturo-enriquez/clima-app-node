const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=198367b306fd73228b764aeb74cca23b&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}