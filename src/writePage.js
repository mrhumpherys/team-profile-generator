const fs = require('fs');
const generate = require('./generateHTML');

const writeFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/team-profile.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};
const writePage = data => {
    return new Promise((resolve, reject) => {
        resolve(generate(data));
        reject('Err');
    })
    .then(html => {
        return writeFile(html);
    })
    .then( () => {
        console.log(`
                Your team profile has been created! Check the dist folder 
                for your new team profile!
                `);
    })
    .catch(err => {
        console.log(err);
    })
}
module.exports = writePage;