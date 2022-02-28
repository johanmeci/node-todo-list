require('colors');

const { inquirerMenu, pauseMenu, getInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async() => {

    let opt = '';
    const tasks = new Tasks();

    do {
        // Show menu
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':

                const desc = await getInput('Description:');
                tasks.createTask( desc );
            break;

            case '2':
                console.log(tasks.listArr);
            break;
        }

        await pauseMenu();
        
    } while (opt !== '0');

}

main();