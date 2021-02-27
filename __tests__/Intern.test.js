const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('props and methods for interns created', () => {
    const intern = new Intern("name", 1, 'email@email.com', 'school');

    expect(intern.school).toBe('school');
    expect(intern.getSchool()).toBe("school");
    expect(intern.getRole()).toBe('Intern');
})