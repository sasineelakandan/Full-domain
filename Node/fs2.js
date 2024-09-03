const fs = require('fs');

try {
   
    const data = fs.readFileSync('file.txt', 'utf8');
    console.log('File read successfully:', data);
   
    fs.unlinkSync('file.txt');
    console.log('File deleted successfully');
} catch (err) {
    if (err) { 
        fs.writeFileSync('file.txt', `${new Date()}`);
        console.log('File created successfully');
    } else {
   
        console.error('Error reading file:', err);
    }
}


// app.get('/',(req,res)=>{
//     console.log(fs.readFileSync('file.txt','utf-8'))
//     res.send('hai')
// })

// app.listen(8000,()=>{
//     console.log('port Start')
// })