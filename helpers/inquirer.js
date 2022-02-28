const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'Select an option',
    choices: [
      {
        value: '1',
        name: '1. Create task'
      },
      {
        value: '2',
        name: '2. List tasks'
      },
      {
        value: '3',
        name: '3. List completed'
      },
      {
        value: '4',
        name: '4. List pending tasks'
      },
      {
        value: '5',
        name: '5. Complete tasks'
      },
      {
        value: '6',
        name: '6. Delete tasks'
      },
      {
        value: '0',
        name: '0. Exit'
      }
    ]
  }
]

const inquirerMenu = async() => {

  console.clear();
  console.log('======================'.rainbow);
  console.log('   Select an option  '.red.bold);
  console.log('======================'.rainbow);

  const { option } = await inquirer.prompt(questions);

  return option;

}

const pauseMenu = async() => {

  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'ENTER'.green.bold} to continue`
    }
  ]

  console.log('\n');
  await inquirer.prompt(question);

}

module.exports = {
  inquirerMenu,
  pauseMenu
}