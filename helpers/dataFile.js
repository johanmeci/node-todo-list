const fs = require('fs');
const fileUrl = './db/data.json';

const saveData = ( data ) => {
    fs.writeFileSync(fileUrl, JSON.stringify(data));
}

const readDB = () => {

    if (!fs.existsSync(fileUrl)) {
        return null;
    }

    const info = fs.readFileSync(fileUrl, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    // console.log(data);

    return data;
}

module.exports = {
    saveData,
    readDB
}