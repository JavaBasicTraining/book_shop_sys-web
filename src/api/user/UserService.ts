import axios from "axios";
import { UserDetail } from "./UserDetail";
const BASE_API_URL = "http://localhost:8080";
const SYSTEM_USER_API_URL = "api/v1/system/users";

export class UserService {
  static getPage() {
    return axios.get(
      `${BASE_API_URL}/${SYSTEM_USER_API_URL}/page?number=0&size=20`
    );
  }

  static getDetail(id: string) {
    return axios.get(`${BASE_API_URL}/${SYSTEM_USER_API_URL}/${id}/detail`);
  }

  static update(id: string, user: UserDetail) {
    return axios.put(
      `${BASE_API_URL}/${SYSTEM_USER_API_URL}/${id}/update`,
      user
    );
  }

  static create(user: UserDetail) {
    return axios.post(`${BASE_API_URL}/${SYSTEM_USER_API_URL}/create`, user);
  }
}
