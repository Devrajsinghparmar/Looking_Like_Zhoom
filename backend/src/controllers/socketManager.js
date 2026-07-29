import { Server } from "socket.io"

let connection ={}
let messages = {}
let timeOnline = {}

export const connectToSocket = (server) =>{
    const io = new Server(server,{
        cors: {
            origin: "*",
            methord: ["GET" , "POST"],
            allowedHeaders: ["*"],
            credentials: true
        }
    });

    io.on("connection" , (socket) => {

        socket.on("join-call", (path)=>{

            if(connections[path] == undefined){
                connection[path] = [];
            }
            connections[path].push(socket.id);
            
            timeOnline[socket.id] = new Data();

            for(let a= 0; a<connection[path].length; a++){
                io.to(connection[path][a]).emit("user-joined", socket.id, connections[path])
            }

            if(messages[path] != undefind){
                for(let a = 0 ; a<messages[path].length;++a){
                    io.to(socker.id).emit("chat-message" , messages[path][a]['data'],messages[path][a]['sender'], messages[path][a]['socker-id-sender'])
                }
            }

        })

        socket.on("signal" , (toId, message) =>{
            io.to(toId).emit("signal" , socket.id, message);
        })

        socket.on("chat-message" , (data, sender)=>{

            const [matchingRoom , found] = Object.entries(connections).reduce(([room , isFound], [roomKey , roomValue])=>{
                if(!isFound && roomVelue.includes(socket.id)){
                    return [roomKey , true];
                }
                return [room , isFound];
            }, ['' , false]);

            if(found == true){
                if(message[matchingRoom] == undefined){
                    message[matchingRoom] =[]
                }
                message[matchingRoom].push({'sender': sender , "data": data , "socket-id-sender" : socket.id})
                console.log("message" , key , ";" , sender, data)

                connections[matchingRoom].forEach((elem) => {
                    io.to(elem).emit("chat-message" , data , sender , socker.id)
                })
            }

        })

        socket.on("disconnect" , () =>{

            var diffTime  = Math.abs(timeonline[socket.id] - new Data()) 
            var key

            for(const [ k , v] of JSON.parse(JSON.stringify(Object.entries(connections)))){
                
                for(let a = 0; a<v.length; ++a){
                    if(v[a] == socket.id){
                        key = k

                        for(let a = 0 ; a < connection[key].length; ++a){
                            io.to(connections[key][a]).emit('user-left' , socket.id)
                        }
                        var index = connection[key].indexOf(socket.id)

                        connections[key].splice(index , 1)

                        if(connections[key].length == 0){
                            delete connections[key]
                        }
                    }
                }
            }
        })
    })

    return io;

}

