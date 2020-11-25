import axios from 'axios';

const AS_BASE_URL = "https://as2-wuat.aws.wiley.com";
const PARTICIPANT_SERVICE_BASE_URL = "http://wpp-prts-wuat.aws.wiley.com:8282"
const NOTIFICATION_SERVICE_BASE_URL = "http://wpp-ntf-svc-wqa.aws.wiley.com:8080"

class AuthorService {

    async authenticateApi(data) {
        try {
            let response = await axios.post(AS_BASE_URL + "/api/authenticate", data , {
                headers: {
                    "content-type": "application/json"
                }
            })
            return response;
        } catch(err) {
            return err;
        }
    }

    async getArticleDetails(id, cookies) {
        
        try {
            let response = await axios.get(AS_BASE_URL + `/api/dashboard/${id}`, {
                headers: {
                    Cookie: cookies[0]
                }
            })
            return response;
        } catch(err) {
            return err;
        }
    }

    async getRelationshipWithArticle(id, cookies) {
        let url = PARTICIPANT_SERVICE_BASE_URL + `/v1/participants/relationships?entityTypeId=ArticleProduct&entityId=${id}`
        try {
            let response = await axios.get(url, {
                headers: {
                    Cookie: cookies[0]
                }
            })
            return response;
        } catch(err) {

        }
    }

    async updateSchedule(scheduleKey, cookies, data) {
        try {
            let response = await axios.put(NOTIFICATION_SERVICE_BASE_URL + `/v1/applications/authorServices/schedules/${scheduleKey}`, data , {
                headers: {
                    Cookie: cookies[0]
                }
            })
            return response;
        } catch(err) {
            return err;
        }
    }
}
export default new AuthorService();