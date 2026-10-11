const fs= require('fs');

fs.writeFile('./2-FS Module/ex.txt','hello vamsi',(err)=>{
    if (err){

        console.error('error ',err);
    }
    console.log('successfull');

});  


