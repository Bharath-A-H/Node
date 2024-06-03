// var fs = require('fs');
// var os =require('os');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'hi'+user.username + '!\n',()=>{
//     console.log('file is created');
// })

const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('welcome to my hotel how can i help you')
})
app.get('/chicken',  (req, res)=> {
    res.send('sure sir i would love to serve chicken')
  })
 app.get('/idli',  (req, res)=> {
    res.send('Welcome to south india and would love to serve idli')
  })

app.listen(3000)