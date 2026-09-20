const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords', () => {
    it('should capitalize the first letter of each word in a string', () => { 
        const input = "hello world"
        const expected = "Hello World"
        const result = capitalizeWords(input)
        expect(result).toBe(expected)
    })
});

describe('filterActiveUsers', () => {
    it('should filter out inactive users from an array of user objects', () => {
        const users = [
            { name: 'Alice', active: true },
            { name: 'Bob', active: false },
        ]
        filterActiveUsers(users)
    })
});

describe('logAction', () => {
    it('should log the action to the console', () => {
        logAction("login", "Alice")
    })
});