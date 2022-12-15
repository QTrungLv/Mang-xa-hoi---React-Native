const axios = require('axios')

const call = async () => {
    const response = await axios.post(`http://127.0.0.1:8000/api/login?username=yenlinh2310.tn@gmail.com&password=example`)
    console.log(response.data)
}


call()