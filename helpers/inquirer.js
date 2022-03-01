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
        name: `${'1.'.green.bold} Create task`
      },
      {
        value: '2',
        name: `${'2.'.green.bold} List tasks`
      },
      {
        value: '3',
        name: `${'3.'.green.bold} List completed tasks`
      },
      {
        value: '4',
        name: `${'4.'.green.bold} List pending tasks`
      },
      {
        value: '5',
        name: `${'5.'.green.bold} Complete tasks`
      },
      {
        value: '6',
        name: `${'6.'.green.bold} Delete tasks`
      },
      {
        value: '0',
        name: `${'0.'.green.bold} Exit`
      }
    ]
  }
]

const inquirerMenu = async() => {

  console.clear();
  console.log('======================'.rainbow);
  console.log('   Select an option  '.bold);
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

const getInput = async( message ) => {

  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate( value ) {
        if (value.length === 0) {
          return 'Empty value';
        }
        return true;
      }
    }
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
}

module.exports = {
  inquirerMenu,
  pauseMenu,
  getInput
}