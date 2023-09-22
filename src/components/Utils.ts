// URL of API to get the project and professionnal experiences

import { config } from "@fortawesome/fontawesome-svg-core";

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import keys from '../data/keys.json';
export const API : string = "http://127.0.0.1:4975/api/";

/*
get experience
 */
export const getProjets = async (id?: number) => {
    try {
        let request: string = API + "?action=projets";
        if (id) {
            request += "&id=" + id;
        }
        const config : AxiosRequestConfig= {
            headers : {'Accept': 'application/json'}
        }
    
        return axios.get(request,config).then((response) => {
            console.log(response)}
            , (error) => {
                console.error(error);
                
            });
        
    } catch (error) {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
    }
};
export interface projet{
    id : number,
    title : string,
    nom : string,
    client : string,
    date : string,
    image : string,
    lien : string,
    description : string
}

export const waitDelay = (ms:number) =>  new Promise(res => setTimeout(res,ms));
