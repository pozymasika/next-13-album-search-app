var request = require("request");

var client_id = "0b4470ae90424c69a00f23daadf7c00e";
var client_secret = "56c8d3eb961246f8a7de67c74080d7b2";

var authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      Buffer.from(client_id + ":" + client_secret).toString("base64"),
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};

async function getToken() {
  return new Promise((resolve, reject) => {
    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        return resolve(body.access_token);
      }
      reject(error);
    });
  });
}

getToken()
  .then((token) => console.log(token))
  .catch((err) => console.log(err));
