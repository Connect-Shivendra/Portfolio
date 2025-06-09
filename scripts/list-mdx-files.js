const fs = require('fs');
const path = require('path');

const blogsDirectory = path.join(__dirname, '../content/blogs');

fs.readdir(blogsDirectory, (err, files) => {
  if (err) {
    console.error('Error reading content/blogs directory:', err);
    process.exit(1);
  }
  console.log('MDX files in content/blogs:');
  files.forEach(file => {
    console.log(file);
  });
}); 