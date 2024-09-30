import axios, {  type AxiosInstance } from 'axios';
import { baseURL } from './constant';



export class Api {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // this.instance.interceptors.response.use(
        //     (response) => {
        //         const { url } = response.config;
        //         switch (url) {
        //             case 'auth/login': {
        //                 const { token, user } = response.data.data;
        //                 AsyncStorageUtils.save(StorageKey.TOKEN, JSON.stringify(token));
        //                 AsyncStorageUtils.save(StorageKey.USER, JSON.stringify(user));
        //                 return response;
        //             }
        //             default: {
                        
        //                 return response;
        //             }
        //         }
        //     },
        //     (error: AxiosError) => {
        //         if (error.response?.data?.code === 401) {
        //             window.location.href = '/auth/login';
        //         } else if (error.response?.data?.code === 403) {
        //             window.location.href = '/event';
        //         }
        //         notification.error({ message: error.response?.data.message });
        //     }
        // );
    }
}
const api = new Api().instance;
export default api;
