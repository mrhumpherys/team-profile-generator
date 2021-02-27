const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

class Profile {
    constructor() {
        this.info = [];
    }

    init() {
        console.log(`
        ======================
        Team Profile Generator
        ======================
Follow the prompts to generate your team profile!
        `);
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of the team manager.',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter the name of the team manager.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter the id of the manager.',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter the id of the manager.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter the email of the manager.',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter the email of the manager.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter the office number of the team manager.',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter the office number of the team manager.');
                            return false;
                        }
                    }
                },
            ])
            .then(({ name, id, email, officeNumber }) => {
                this.info.push(new Manager(name, id, email, officeNumber));
                this.newEmpoyee();
                //console.log(this.info);
            })
    }
    newEmpoyee() {
        inquirer 
            .prompt(
                {
                    type: 'list',
                    message: "Would you like to add more members of your team?",
                    name: "choice",
                    choices: ['Add Engineer', 'Add Intern', 'I am finished bulding my team']
                }
            )
            .then(({ choice }) => {
                if (choice === 'Add Engineer') {
                    inquirer 
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'Enter the name of the engineer',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter the name of the engineer.');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'Enter the id of the engineer.',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter the id of the engineer.');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'Enter the email of the engineer.',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter the email of the engineer.');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'github',
                                message: 'Enter the github username of the engineer.',
                                validate: nameInput => {
                                    if(nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter the github username.');
                                        return false;
                                    }
                                }
                            }
                        ])
                        .then(({ name, id, email, github }) => {
                            this.info.push( new Engineer(name, id, email, github));
                            this.newEmpoyee();
                        })
                }
                if (choice === 'Add Intern') {
                    inquirer 
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'Enter the name of the intern',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter the name of the intern.');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'Enter the id of the intern.',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter the id of the intern.');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'Enter the email of the intern.',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter the email of the intern.');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'school',
                                message: 'Enter the name of the school the intern attends.',
                                validate: nameInput => {
                                    if(nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter the school.');
                                        return false;
                                    }
                                }
                            }
                        ])
                        .then(({ name, id, email, school }) => {
                            this.info.push( new Intern(name, id, email, school));
                            this.newEmpoyee();
                        })
                } 
                if (choice === 'I am finished bulding my team' ) {
                    console.log(this.info);
                }
            }) 
    }
}

new Profile().init();