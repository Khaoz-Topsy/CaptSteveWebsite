const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function generateFullJson() {
    let fullJson = {};

    const siteDataContentsPromise = readFile('./webpack/data/site.json', 'utf8');

    const siteDataContents = await siteDataContentsPromise;

    const siteData = JSON.parse(siteDataContents);

    fullJson = { ...siteData, };

    fs.writeFile('./webpack/data/project.json', JSON.stringify(fullJson), ['utf8'], () => { });
}


generateFullJson();
