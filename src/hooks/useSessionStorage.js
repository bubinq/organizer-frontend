import { useState } from "react"

export const useSessionStorage = (key, defValue) => {
    const [value, setValue] = useState(() => {
        let searchedStorage = sessionStorage.getItem(key)
        if (searchedStorage === undefined) {
            searchedStorage = null;
        }

        return searchedStorage? JSON.parse(searchedStorage) : defValue
        
    })


    const setSessionStorage = (data) => {
        sessionStorage.setItem(key, JSON.stringify(data))
        setValue(data)
    }

    return [
        value,
        setSessionStorage
    ]
}