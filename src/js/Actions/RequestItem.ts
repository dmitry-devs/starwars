import axios from 'axios';

export default function requestItem(item: string, query: any) {
    const params = { ...query };
    return new Promise((resolve, reject) => {
        axios
            .get(`https://swapi.co/api/${item}/`, { params })
            .then((response: any) => resolve(response))
            .catch((error: any) => {
                reject(error);
                alert(error);
            });
    });
}
