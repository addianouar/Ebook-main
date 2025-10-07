import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputFolder = path.join("src/assets");
const outputFolder = path.join("src/assets/resized");

if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);

fs.readdirSync(inputFolder).forEach(file => {
  if (/\.(jpe?g|png)$/i.test(file)) {
    sharp(path.join(inputFolder, file))
      .resize(1200, 1500, { fit: "inside" }) // Resize proportionally
      .toFile(path.join(outputFolder, file.replace(/\.(jpe?g|png)$/i, ".webp")))
      .then(() => console.log(`Resized ${file}`))
      .catch(err => console.error(err));
  }
});
