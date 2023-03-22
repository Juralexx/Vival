import axios from "axios"

/**
 * Get all actualities paths for getStaticPaths (SSR)
 */

export async function getActualitiesPaths() {
    let response = []
    await axios.get(process.env.ACTUALITIES_API_ROUTE)
        .then(res => {
            response = res.data.data
        })
        .catch(err => console.log(err))

    let paths = []
    response.map(item => {
        const [date, title] = item.url.split('/')
        return paths = [...paths, { params: { date: date, actuality: title } }]
    })

    return { paths }
}

/**
 * Fetch all actualities
 */

export async function getActualities() {
    let actualities = []
    await axios.get(process.env.ACTUALITIES_API_ROUTE)
        .then(res => {
            actualities = [...res.data.data]
        })
        .catch(err => console.log(err))

    const sorted = actualities.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    })
    return { actualities: sorted }
}

/**
 * Fetch single actuality
 */

export async function getActuality({ date, title }) {
    let data = []
    try {
        await axios.get(`${process.env.ACTUALITY_API_ROUTE}?date=${date}&title=${title}`)
            .then(res => { return data = res.data })
            .catch(err => console.log(err))
    } catch (err) {
        console.log(err);
    }

    return { data }
}