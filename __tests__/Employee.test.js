const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
    const employee = new Employee('John', 1, 'email@email.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email@email.com');
})
test('methods return proper information', () => {
    const employee = new Employee('Jane', 2, 'second@email.com');

    expect(employee.getName()).toBe('Jane');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toBe('second@email.com');
    expect(employee.getRole()).toBe('Employee');
})