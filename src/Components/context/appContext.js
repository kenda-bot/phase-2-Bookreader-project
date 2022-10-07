import { createContext, useContext } from "react";
import { useState} from "react";

const AppContext=createContext(null);

export const useAppContext=()=>{
    const context=useContext(AppContext);

    if( context === undefined){
        throw new Error("AppContext must be within the appContextProvider!");
    }
    return context;
}

const AppContextProvider=({children})=>{
   const [ReadingList,setReadingList]=useState([])

const addToReadingList=(book)=>{
  const oldReadingList =[...ReadingList];
  const newReadingList =oldReadingList.concat(book);
  setReadingList(newReadingList)
};

const removeFromReadingList=(id)=>{
     const oldReadingList=[...ReadingList];
     const newReadingList=oldReadingList.filter((book)=>book.id !== id);
     setReadingList(newReadingList);
}
    
return(
        <AppContext.Provider 
        value={{ReadingList,addToReadingList,removeFromReadingList}}
        >
            {children}
        </AppContext.Provider>
    );

    };
    export default AppContextProvider