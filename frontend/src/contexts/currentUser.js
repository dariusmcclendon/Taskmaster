import React, { createContext, useState, useEffect } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        console.log('fetching user')
        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:3000/api/auth/profile', {
                credentials: 'include'
            })
            let user = await response.json()
            console.log(user)
            setCurrentUser(user)
            
        }
        getLoggedInUser()
    }, [])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider