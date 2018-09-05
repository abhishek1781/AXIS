const axios = require('axios');

let username ='abhishek1781';

axios.get('https://api.github.com/users/'+username).then((res)=>{
   
console.log(res.data);

}).catch((err)=>{
    console.log(err);
});
