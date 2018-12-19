let mqtt = require('mqtt');
let client  = mqtt.connect('ws://mosquitto:9001')
client.on('connect', function () {
  client.subscribe('test', function (err) {
  	console.log("Sub from pub")
    if (!err) {
      client.publish('test', 'Hello mqtt')
      setInterval(function() {client.publish('test', 'Hello mqtt')}, 1000);
    }
  })
})