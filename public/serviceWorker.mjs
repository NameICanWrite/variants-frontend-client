import axios from 'axios'


console.log('startting worker')

self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Push Recieved...");
    self.registration.showNotification(data.title, {
      actions: [
        {
          action: 'sayHello',
          title: 'Say Hello!'
        }
      ]
    });
  });

  self.addEventListener('notificationclick', function(event) {  
    console.log('notification click')
    }  
  );