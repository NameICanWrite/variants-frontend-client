import axios from 'axios';
import {Variant} from './Variant/API'
import serverPath from "../../index";


export const fetchData = async () => {
    let response = await axios.get(serverPath + '/variants');
    response.data = response.data.map(variant => new Variant().deserialize(variant))
    return response.data
}

export const postData = async (eventsData) => {
    const variantsData = await fetchData()
    console.log(variantsData);
    const response = eventsData.map(async (data) => {
        let response
        let sendData
        let dataTarget = variantsData.find(variant => variant.name == data.name)
        console.log(dataTarget);
        if (dataTarget) {
            sendData =  new Variant().deserialize(dataTarget).addData(data).serialize()
            response = await axios.put(serverPath + `/variants/${dataTarget.id}`, sendData)
        } else {
            sendData = new Variant().receiveName(data.name).addData(data).serialize()
            response = await axios.post(serverPath + '/variants', sendData)
        }
        console.log(123);
        return response
    })
    return response
}

export const deleteData = async (id) => {
    const response = await axios.post(serverPath + '/foo');
    return response.data
}

export const changeData = async (variant) => {
    const response = await axios.put(serverPath + '/foo');
    return response.data
}


