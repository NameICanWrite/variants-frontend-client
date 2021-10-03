import axios from 'axios';

import serverPath from "../../../index";


export const fetchData = async () => {
    const response = await axios.get(serverPath + '/scheduledLetters');
    return response.data
}

export const postData = async (data) => {
    // const testDate = new Date()
    // testDate.setSeconds(parseInt(testDate.getSeconds() + 30))
    // data.flightControl.time.from = testDate.toISOString()
    // data.flightControl.time.to = testDate.toISOString()
    const response = await axios.post(serverPath + '/letters/sendLetter', data);
    console.log(response)
    return response.data
}