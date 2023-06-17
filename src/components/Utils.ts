// URL of API to get the project and professionnal experiences

// type Experiences = {
//     id: number,
//     title: string,
//     company: string,
//     images: string[],
//     date: Date,
//     description: string
// }
// type ExperiencesResult = {
//     data: Experiences[];
// };

export const API : string = "http://localhost/api/";
/*
get experience
 */
export const getProjets = async (id?: number): Promise<string> => {
    try {
        let request: string = API + "?action=projets";
        if (id) {
            request += "&id=" + id;
        }

        const response :Response = await fetch(request, {
            // Ajoutez les options de la requête si nécessaire, comme les en-têtes
            headers: {
              'Accept': 'application/json',
            }
        });

        const status :number= response.status;
        console.log(status);

        const result = await response.json();
        console.log(result);

        return result;
    } catch (error) {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
    }
};


export const waitDelay = (ms:number) =>  new Promise(res => setTimeout(res,ms));