var message = {
    action: 'push',
    channel: 'ITROOM',
    qui: 'truc',
    message: ' a mise à jour d\'une entrée'
}

var serv = new WebSocket( 'ws://localhost:8080/' );

//client.onopen = () => client.send( JSON.stringify( { action: 'subscribe', channel: 'ITROOM' } ) );          

serv.onopen = () => serv.send( JSON.stringify( message ) )