const { saveData, readDB } = require('./helpers/dataFile');
const { inquirerMenu, pauseMenu, getInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async() => {

    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        tasks.loadTasksFromArray(tasksDB);
    }

    do {
        // Show menu
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const desc = await getInput('Description:');
                tasks.createTask( desc );
            break;

            case '2':
                tasks.listTasksInterface();
            break;

            case '3':
                tasks.listPendingCompleteTasks(true);
            break;

            case '4':
                tasks.listPendingCompleteTasks(false);
            break;
        }

        saveData(tasks.listArr);

        await pauseMenu();
        
    } while (opt !== '0');

}

main();