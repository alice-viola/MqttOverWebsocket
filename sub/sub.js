let mqtt = require('mqtt');

let client  = mqtt.connect('ws://mosquitto:9001')

client.on('connect', function () {
  	client.subscribe('test', function (err) {
		console.log("Sub");
  	})
	client.on('message', function (topic, message) {
	  // message is Buffer
	  console.log(message.toString())
	  
	})
})


