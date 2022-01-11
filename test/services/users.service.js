import axios from "axios";

const URL = "https://gorest.co.in/public-api/users";
const TOKEN = "Bearer 5aa8220420419fd5890bb88a1767ed7cb1abc4412024bfff91513a40d6e19823";

class UsersApiService {

    async getUsers() {
        try {
            
            let response = await axios.get(URL, {
                headers: {
                    'Authorization': TOKEN
                }
            });
            return response
        } catch (err) {
            console.log(err);
        }
    }

    async postUser(data) {
        try {
            
            let response = await axios.post(URL, data, {
                headers: {
                    'Authorization': TOKEN
                }
            });
            return response
        } catch (err) {
            console.log(err);
        }
    }
}

export default new UsersApiService();