import axios from "axios";

export async function fetchSiteDatas() {
    let siteDatas = {}
    await axios.get(`${process.env.SERVER_URL}/api/site`)
        .then(res => { return siteDatas = res.data })
        .catch(err => console.log(err))
    return { siteDatas: siteDatas }
}