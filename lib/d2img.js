import fs from 'fs';
import { PNG } from 'pngjs';
import * as UPNG from 'upng-js';

function jsonToPng(jsonData, outputPath) {
  const jsonString = JSON.stringify(jsonData);
  const buffer = Buffer.from(jsonString, 'utf8');

  const width = Math.ceil(Math.sqrt(buffer.length / 4));
  const height = width;

  const png = new PNG({ width, height });

  for (let i = 0; i < buffer.length; i += 4) {
    const x = (i / 4) % width;
    const y = Math.floor((i / 4) / width);

    const idx = (width * y + x) << 2;

    png.data[idx] = buffer[i];
    png.data[idx + 1] = buffer[i + 1] || 0;
    png.data[idx + 2] = buffer[i + 2] || 0;
    png.data[idx + 3] = buffer[i + 3] || 255;
  }

  const pngBuffer = PNG.sync.write(png);
  fs.writeFileSync(outputPath, pngBuffer);
}

function pngToJson(inputPath) {
  const pngBuffer = fs.readFileSync(inputPath);
  const png = PNG.sync.read(pngBuffer);

  const buffer = Buffer.alloc(png.width * png.height * 4);

  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;

      buffer[idx] = png.data[idx];
      buffer[idx + 1] = png.data[idx + 1];
      buffer[idx + 2] = png.data[idx + 2];
      buffer[idx + 3] = png.data[idx + 3];
    }
  }

  const jsonString = buffer.toString('utf8');
  const jsonData = JSON.parse(jsonString);

  return jsonData;
}