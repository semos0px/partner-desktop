import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";
// import SocketService from "../service/ws";

const SocketContext = createContext({});

const SocketProvider = ({ children }) => {
  const socket = new Socket();

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);

export default SocketProvider;
