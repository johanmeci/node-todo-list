require('colors');

const { showMenu, pauseMenu } = require('./helpers/messages');

console.clear();

const main = async() => {

    let opt = '';

    do {

        opt = await showMenu();
        console.log({ opt });

        if (opt !== '0') await pauseMenu();
        
    } while (opt !== '0');

    // pauseMenu();
}

main();