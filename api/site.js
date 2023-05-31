import axios from "axios";
import path from 'path'
import { promises as fs } from 'fs'

export async function fetchSiteDatas() {
    let siteDatas = {};

    await axios.get(`${process.env.SERVER_URL}/api/site`)
        .then(res => { return siteDatas = res.data })
        .catch(err => console.log(err))

    return { siteDatas: siteDatas }
}

export async function getImages({ folder }) {
    const directory = path.join(process.cwd(), `/public/${folder}`);
    const images = await fs.readdir(directory)
    let files = images.map(img => { return `/${folder}/${img}` })

    return { files }
}