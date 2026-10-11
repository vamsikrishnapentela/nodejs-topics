const fs=require('fs');

fs.appendFile('./2-FS Module/ex.txt', '\nNew line added!', (err) => {
  if (err) {
    console.error('Error appending file:', err);
   
  }
  console.log('Content appended successfully!');
});
