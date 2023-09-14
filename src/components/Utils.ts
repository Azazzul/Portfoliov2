// URL of API to get the project and professionnal experiences

import { config } from "@fortawesome/fontawesome-svg-core";

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import keys from '../data/keys.json';
export const API : string = "http://localhost/api/";

export const sendMail = async (email : string, message : string)=>{
    const data : any = JSON.stringify({
    "Messages": [{
      "From": {"Email": "fardouxbenoit@gmail.com", "Name": "<YOUR NAME>"},
      "To": [{"Email": "fardouxbenoit@gmail.com", "Name": name}],
      "Subject": "Contact site vitrine",
      "TextPart": "de" + email + message
    }]})

    const config = {
        method: 'post',
        url: 'https://api.mailjet.com/v3.1/send',
        data: data,
        headers: {'Content-Type': 'application/json'},
        auth: {username: keys.API_KEY, password: keys.SECRET_KEY},
      };

  return axios(config);
};

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
