const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('new engineer object created with prop and method', () => {
    const engineer = new Engineer('Dog', 1, "email", 'github');

    expect(engineer.github).toBe('github');
    expect(engineer.getGithub()).toBe('github');
    expect(engineer.getRole()).toBe('Engineer');
})