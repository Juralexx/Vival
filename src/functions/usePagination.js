import React from 'react'

/**
 * Reverse array order.
 * @param {*} array Array to reverse
 */

export const reverseArray = (array) => {
    return array.map(array.pop, [...array])
}

/**
 * Divide an array into multiple others width a certain number of elements in each array
 * @param {*} array Array to divide
 * @param {*} size Size of each new arrays
 */

function divideArrayIntoSizedParts(array, size) {
    let copy = [...array]
    let result = [];
    for (let i = 0; i < copy.length; i += size) {
        result.push(copy.slice(i, i + size));
    }
    return result;
}

const usePagination = ({ array, length, router, redirection }) => {
    const [pages, setPages] = React.useState([])

    React.useEffect(() => {
        if (array?.length > 0) {
            const reversed = reverseArray(array) || []
            const divided = divideArrayIntoSizedParts(reversed, length)
            setPages(divided)
        }
    }, [array])

    const { p } = router.query
    let currentPage = Number(p) || 1

    React.useEffect(() => {
        if (currentPage > pages.length + 1) {
            window.location.href = `${window.location.origin}${redirection}`
        }
    }, [currentPage, pages])

    return { pages, currentPage }
}

export default usePagination