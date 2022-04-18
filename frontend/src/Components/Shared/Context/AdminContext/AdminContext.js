import React,{ createContext, useEffect, useState } from "react";


export const AdminContext = createContext(false)


export const AdminProvider = ({children}) => {

    const [isAdmin,setIsAdmin] = useState(false)

    const token = sessionStorage.getItem('token')

    useEffect(async () => {
        try{
            if(token){
                const res = await fetch('http://localhost:5000/isAdmin',{
                    method:'get',
                    headers:{
                        'token':token
                    }
                })
    
                const data = await res.json();
    
                console.log(data)
    
                if(data == 'ok'){
                    setIsAdmin(true)
                } else{
                    setIsAdmin(false)
                }
            } else{
                setIsAdmin(false)
            }
            
        }catch(err){
            setIsAdmin(false)
        }
        
    },[])

    return <AdminContext.Provider value={isAdmin}>
        {
            children
        }
    </AdminContext.Provider>
}