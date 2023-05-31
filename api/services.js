import axios from "axios"
import { sortByAlphabetical } from "functions/utils"

/**
 * Get all services paths for getStaticPaths (SSR)
 */

export async function getServicesPaths() {
    let response = [];

    await axios.get(process.env.SERVICES_API_ROUTE)
        .then(res => {
            response = res.data.data;
        })
        .catch(err => console.log(err))

    let paths = [];

    response.map(item => {
        return paths = [...paths, { params: { service: item.url } }];
    })

    return { paths }
}

/**
 * Fetch all services
 */

export async function getServices() {
    let services = [];

    await axios.get(process.env.SERVICES_API_ROUTE)
        .then(res => {
            services = [...res.data.data];
        })
        .catch(err => console.log(err))

    const sorted = sortByAlphabetical(services, 'title');

    return { services: sorted }
}

/**
 * Fetch single service
 */

export async function getService({ url }) {
    let data = [];

    await axios.get(`${process.env.SERVICE_API_ROUTE}?url=${url}`)
        .then(res => { return data = res.data })
        .catch(err => console.log(err))

    return { data }
}