const sharp = require('sharp');
const fs = require('fs');
(async function () {
    let assetsPath = 'CARACTERE_EMOTII/';
    let outputPath = 'output/';
    let folders = fs.readdirSync(assetsPath);

    for (let caracter of folders) {
        let emotions = fs.readdirSync(assetsPath + caracter + '/trasaturi');
        for (let emotie of emotions)    {
            let emotionName = emotie.split('.')[0];
            emotionName = emotionName.split('_');
            emotionName = emotionName[emotionName.length - 1];

            await sharp(assetsPath + `${caracter}/${caracter}.svg`)
                .composite([{input: assetsPath + `${caracter}/trasaturi/${emotie}`, gravity: 'southeast'}])
                .toFile(outputPath + `${emotionName}/${caracter}-${emotionName}.png`);
            await sharp(assetsPath + `${caracter}/trasaturi/${emotie}`)
                .toFile(outputPath + `${emotionName}/trasaturi/${caracter}-${emotionName}-layer.png`);
        }
    }
}());
