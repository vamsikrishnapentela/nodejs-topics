const fs= require('fs');

fs.readFile('./2-FS Module/ex.txt','utf8', (err,data)=>{
    if (err){

        console.error('error ',err);
    }
    console.log('file data is ',data);

});  