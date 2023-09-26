// URL of API to get the project and professionnal experiences

export const API : string = "https://e4vp72b84a.execute-api.eu-west-3.amazonaws.com/Prod/api/";

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
