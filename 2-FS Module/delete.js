const fs= require('fs');


fs.unlink('./2-FS Module/ex.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully!');
});
