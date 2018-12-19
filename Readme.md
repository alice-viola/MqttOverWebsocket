# MQTT Over Websocket example

This is an example of the MQTT over WebSocket based on docker compose.
There are three custom container and one mosquitto broker docker image *toke/mosquitto*.

Of the three custom container, two are the mqtt pub/sub, and the remaining is the Express server
in order to serve a single html page that uses the Paho Client in order to receive and visualize the 
raw data coming from the mqtt broker.

## Network

- Server: Host 3003	
- Broker: Host 9001 (WS)
- Broker: Host 1883 (Mqtt)

## Arch

``` bash
├── Readme.md
├── docker-compose.yaml
├── pub
│   ├── Dockerfile
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   └── pub.js
├── server
│   ├── Dockerfile
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── server.js
└── sub
    ├── Dockerfile
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    └── sub.js

```

## Run

``` sh
docker-compose build && docker-compose up
```

Than go to *http://localhost:3003* and see your application run.