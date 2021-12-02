function checkAdmin (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload).role;

};

const authorizationAdmin = (req, res,next) => {
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvZWwiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2Mzg0NDk2MzYsImV4cCI6MTYzODQ1MDgzNn0.ndH2EVww2kkNdyPf4zcEebaAa7FqWqCCvx0BqWdZNsU"
    //const token = req.cookies.access_token;
    if (checkAdmin(token)=="Admin") {
      next()
    } else {
      
      return res.sendStatus(403);
    }


  };
  
 // authorization()


  module.exports = authorizationAdmin

