import axios from "axios";
import { urlBase64ToUint8Array } from "./calculator";
import serverPath from "../index";


export default async function subscribePushNotifications(id) {
  // if ('serviceWorker' in navigator) {
  //   const response = await axios.get(serverPath + '/publicVapidKey')
  //   const publicVapidKey = response.data
  //   const register = await navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/serviceWorker.js`)


  //     await register.pushManager.subscribe({
  //       userVisibleOnly: true,
  //       applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  //     }).then(subscription => {
  //       axios.post(serverPath + '/subscription', {subscription, id})
  //     })

      
  // }
  
    
}