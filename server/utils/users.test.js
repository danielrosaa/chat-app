const expect = require('expect')
const { Users } = require('./users')


beforeEach(() => {
    users = new Users()
    users.users = [{
        id: '1',
        name: 'Daniel',
        room: 'Node Course'
    },
    {
        id: '2',
        name: 'Rosa',
        room: 'React Course'
    },
    {
        id: '3',
        name: 'Gomes',
        room: 'Node Course'
    }]
})
describe('Users', () => {
    it('should add new user', () => {
        var users = new Users()
        var user = {
            id: 123,
            name: 'Daniel',
            room: 'Cruzes'
        }
        users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([user])
    })

    it('should remove a user', () => {
        var userId = '1'
        var user = users.removeUser(userId)

        expect(user.id).toBe(userId)
        expect(users.users.length).toBe(2)
    })

    it('should not remove a user', () => {
        var userId = '33'
        var user = users.removeUser(userId)

        expect(user).toBeFalsy()
        expect(users.users.length).toBe(3)
    })

    it('should find user', () => {
        var userId = '2'
        var user = users.getUser(userId)

        expect(user.id).toBe(userId)
    })

    it('should not find user', () => {
        var user = users.getUser('33')

        // expect(user).toBe(undefined)

        // or

        expect(user).toBeFalsy()
    })

    it('should return names for Node Course', () => {
        var userList = users.getUserList('Node Course')

        expect(userList).toEqual(['Daniel', 'Gomes'])
    })

    it('should return names for React Course', () => {
        var userList = users.getUserList('React Course')

        expect(userList).toEqual(['Rosa'])
    })


})