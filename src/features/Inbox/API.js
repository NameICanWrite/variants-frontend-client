import axios from 'axios';

import serverPath from "../../index";


export const fetchData = async () => {
    const response = await axios.get(serverPath + '/inbox');
    console.log(response.data)
    return response.data
}

export const postData = async () => {
    const response = await axios.post(serverPath + '/inbox');
    return response.data
}