import React from 'react'

const useGrid = (storage, defaultState) => {
    const [grid, setGrid] = React.useState(defaultState)

    const getStorage = () => {
        const displayStorage = localStorage.getItem(storage)
        if (displayStorage && displayStorage === 'grid') {
            return true
        } else {
            return false
        }
    }

    React.useEffect(() => {
        setGrid(getStorage())
    }, [])

    React.useEffect(() => {
        if (grid === true)
            localStorage.setItem(storage, 'grid')
        else localStorage.setItem(storage, 'row')
    }, [grid])

    return { grid, setGrid }
}

export default useGrid