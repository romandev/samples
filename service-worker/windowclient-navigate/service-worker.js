self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim().then(function() {
    // See https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll
    return self.clients.matchAll({type: 'window'});
  }).then(function(clients) {
    return clients.map(function(client) {
      // Check to make sure WindowClient.navigate() is supported.
      if ('navigate' in client) {
        return client.navigate('activated.html');
      }
    });
  }));
});
