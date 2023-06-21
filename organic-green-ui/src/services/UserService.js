import axios from "axios";
const UESR_API_BASE_URL = "http://localhost:8080/user";

class UserService {
    saveUser(user){
        return axios.post(UESR_API_BASE_URL  + "/add", user);

    }

    getUsers(){
        return axios.get(UESR_API_BASE_URL + "/getAll");
    }

    deleteUser(id){
        return axios.delete(UESR_API_BASE_URL + "/" + id);
    }

    getUserById(id){
        return axios.get(UESR_API_BASE_URL + "/" + id);
    }

    updateUser(id, user){
        return axios.put(UESR_API_BASE_URL + "/" + id, user);
    }
}

export default new UserService();