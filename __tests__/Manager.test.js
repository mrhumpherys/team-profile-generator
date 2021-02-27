
const Manager = require('../lib/Manager.js');

test('new manager object created with prop and method', () => {
    const manager = new Manager('Dog', 1, "email", 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe('Manager');
})