import { expect } from 'chai';
import UserApiService from "./services/users.service";

describe('User API service', () => {
    it('Get Users', (done) => {
        UserApiService.getUsers()
        .then(data => {
            expect(data.data.code).to.equal(200)
            return done()
        })
        .catch(err => done(err))
    })

    it('Create User', (done) => {
        let randomNo = Math.random()
        let data = {
            "email": `andun${randomNo}@google.com`,
            "name": "Andun",
            "gender": "Male",
            "status": "Active"
        }
        UserApiService.postUser(data)
        .then(data => {
            expect(data.data.code).to.equal(201)
            return done()
        })
        .catch(err => done(err))
    })
})