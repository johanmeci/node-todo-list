require('colors');

const showMenu = () => {

  console.clear();
  console.log('======================'.rainbow);
  console.log('   Select an option  '.red.bold);
  console.log('======================'.rainbow);

  console.log(`${'1'.green}. Create task`);
  console.log(`${'2'.green}. List tasks`);
  console.log(`${'3'.green}. List completed tasks`);
  console.log(`${'4'.green}. List pending tasks`);
  console.log(`${'5'.green}. Complete tasks`);
  console.log(`${'6'.green}. Delete tasks`);
  console.log(`${'0'.green}. Exit \n`);

  const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readLine.question('Select an option: ', (opt) => {
    readLine.close();
  });

}

const pauseMenu = () => {

  const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readLine.question(`\n Press ${'ENTER'.green.bold} to continue \n`, (opt) => {
    readLine.close();
  });

}

module.exports = {
  showMenu,
  pauseMenu
}