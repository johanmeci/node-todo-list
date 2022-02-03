require('colors');

const { showMenu, pauseMenu } = require('./helpers/messages');

console.clear();

const main = async() => {
    console.log('Hello world');
    showMenu();
    // pauseMenu();
}

main();