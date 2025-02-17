const express = require('express');
const fs=require('fs')
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
  fs.appendFile('file.txt',`${new Date()}\n`,(err)=>{
    
  })
  res.send('hello world');
});

// router.get('/',(req,res)=>{
//   res.send('hey')
// })

// router.get('/sasi',(req,res)=>{
//   res.send('hai')
// })

// app.use('/sasi', router);

app.listen(8000, () => {
  console.log('server started on port 5000');
});
