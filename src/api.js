import axios from 'axios'

// see the challange document to see available API endpoints and responses
export default {
  getQuestions () {
    return axios.post('https://api.supersheets.io/dev/1liBHwxOdE7nTonL1Cv-5hzy8UGBeLpx0mufIq5dR8-U/find', {
      query: {
        _sheet: 'questions'
        }
      })
      .then((resp) => {
        // "unwrap" the response to pass back the response data
        return resp.data
      })
  }
}