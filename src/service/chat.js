import socketIOClient from "socket.io-client";

class Chat {
  constructor() {
    this.ENDPOINT = "http://localhost:8080";

    this.socket = socketIOClient(this.ENDPOINT);
  }

  enter = (roomName) => {
    this.socket.emit("req_join_room", roomName);
  };

  join = () => {
    this.socket.on("noti_join_room");
  };

  send = (msgObj) => {
    this.socket.emit("send_msg", msgObj);
  };

  response = (callback) => {
    return this.socket.on("send_msg", callback);
  };
}

export default Chat;
