import { expect } from 'chai';
import AuthorService from './services/authorService.service';

let articleId = 16368017;
let cookie;
let participantId;
let authRequestJson = {
    "username": "seleniumUatOOOCreate1@mailinator.com",
    "password": "123456Test",
    "externalLogin": false
};
let updateScheduleRequestJson = {
    "applicationId": "authorServices",
    "key": "AS_ARTICLE_METRICS_SCHEDULE",
    "description": "Article metrics schedule used by Author Services app to send quarterly emails with published articles citations to article authors.",
    "templates": [
        {
            "emailTemplateKey": "AS_ARTICLE_METRICS_NOTIFICATION_TEMPLATE_1",
            "delay": 172800
        }
    ]
};
let articleName = "Selenium-OO-Test-2020-11-20WATuWIwyxK";
let journalId = "8096251";

describe('AS API service', () => {
    it('Authenticate User', (done) => {
        AuthorService.authenticateApi(authRequestJson)
            .then(data => {
                cookie = data.headers["set-cookie"];
                participantId = data.data.payload.participantId;
                expect(data.status).to.equal(200)
                expect(data.data.status).to.equal("SUCCESS")
                return done()
            })
            .catch(err => done(err))
    })

    it('Get article details', (done) => {
        AuthorService.getArticleDetails(articleId, cookie)
            .then(data => {
                expect(data.status).eql(200)
                expect(data.data.status).to.equal("SUCCESS")
                expect(data.data.payload.article.name).to.equal(articleName)
                expect(data.data.payload.journal.id).to.equal(journalId)
                return done();
            })
            .catch(err => done(err))
    })

    it('Get relationship by article id', (done) => {
        AuthorService.getRelationshipWithArticle(articleId, cookie)
            .then(data => {
                expect(data.status).to.equal(200);
                let contents = data.data.content;
                contents.forEach(object => {
                    expect(object.participantId).to.equal(participantId)
                    expect(object.attributes[2].attributeValue).to.equal(authRequestJson.username)
                });
                return done();
            })
            .catch(err => done(err))
    })

    it('Update Article Metrics schedule', (done) => {
        AuthorService.updateSchedule("AS_ARTICLE_METRICS_SCHEDULE", cookie, updateScheduleRequestJson)
            .then(data => {
                expect(data.status).to.equal(200)
                expect(data.data.key).to.equal("AS_ARTICLE_METRICS_SCHEDULE")
                return done()
            })
            .catch(err => done(err))
    })
})