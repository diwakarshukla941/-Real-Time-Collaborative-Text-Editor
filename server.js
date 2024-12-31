const express = require('express');
const http = require('http');
const cors = require('cors')
const WebSocket = require('ws');
const { log } = require('console');
const { type } = require('os');
const { disconnect } = require('process');

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss  = new WebSocket.Server({server});

let document = ""; // store the documents


wss.on('connection', (ws)=>{
    console.log('New Client Connected');

    // send the current document state to the new client

    ws.send(JSON.stringify({type:'init', data:document}))

    ws.on('message', (message)=>{
        try {
            const parsdMessage = JSON.parse(message);
            if(parsdMessage.type === 'update'){
                document = parsdMessage.data;
                // broadcast the update to all connected clients
                wss.clients.forEach((client) =>{
                    if(client.readyState === WebSocket.OPEN){
                        client.send(JSON.stringify({type:'init', data:document}))
                    }
                });
            }
        } catch (error) {
            console.log("error parsing message", error);
            
        }
    })

    ws.on('close', ()=>{
        console.log('client disconnected');
        
    })
    
})

const PORT = 5000;
server.listen(PORT,()=>{
    console.log(`server is running on the ${PORT}`);
    
})
