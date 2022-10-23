import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    return (
        <UserContext.Provider value={{aa: 1}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
