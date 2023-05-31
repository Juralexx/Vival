import axios from "axios"

/**
 * Fetch home components
 */

export async function getHome() {
    let home = {};

    await axios.get(process.env.HOME_API_ROUTE)
        .then(res => {
            home = res.data;
        })
        .catch(err => console.log(err))

    return { home };
}