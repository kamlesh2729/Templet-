import * as fs from 'fs';

export default async function blogdata(req, res) {
    fs.readFile("data/pageinfo.json", "utf-8", (err, data) => {
        // console.log(JSON.parse(data));
    res.status(200).json({ message: 'Hello from Next.js!' })
})
}
