require('colors');
const Task = require('./task');

class Tasks {

    _list = {};

    get listArr() {

        const list = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push(task);
        });

        return list;
    }

    constructor() {
        this._list = {};
    }

    loadTasksFromArray( tasks = [] ) {
        
        tasks.forEach( task => {
            this._list[task.id] = task;
        });
    }

    createTask( description = '' ) {

        const task = new Task(description);

        this._list[task.id] = task;
    }

    listTasksInterface() {

        console.log();
        this.listArr.forEach( (task, index) => {

            const i = `${index + 1}`.green;
            const { description, completeIn } = task;
            const taskStatus = (completeIn) ? 'Complete'.green: 'Pending'.red;

            console.log(`${i}. ${description} :: ${taskStatus.bold}`);
        });
    }

    listPendingCompleteTasks( complete = true ) {

        console.log();
        let i = 0;
        this.listArr.forEach( task => {

            const { description, completeIn } = task;
            const taskStatus = (completeIn) ? 'Complete'.green: 'Pending'.red;

            if (complete) {

                if (completeIn) {
                    i++;
                    console.log(`${(i + '.').green} ${description} :: ${completeIn}`);
                }

            } else {

                if (!completeIn) {
                    i++;
                    console.log(`${(i + '.').green} ${description} :: ${taskStatus.bold}`);
                }

            }
        });

    }
}

module.exports = Tasks;