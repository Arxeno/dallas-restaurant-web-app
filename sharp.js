const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = target;

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    sharp(path.resolve(target, image))
      .resize(400)
      .toFile(path.resolve(destination, `${image.split('.')[0]}-small.jpg`));

    sharp(path.resolve(target, image))
      .resize(750)
      .toFile(path.resolve(destination, `${image.split('.')[0]}-medium.jpg`));

    sharp(path.resolve(target, image))
      .resize(1350)
      .toFile(path.resolve(destination, `${image.split('.')[0]}-large.jpg`));
  });
