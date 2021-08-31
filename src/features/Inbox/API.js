import axios from 'axios';

import serverPath from "../../index";


export const fetchData = async () => {
    console.log(serverPath + '/inbox')
    const response = await axios.get(serverPath + '/inbox');
    return response.data
}

export const postData = async () => {
    const response = await axios.post(serverPath + '/inbox');
    return response.data
}