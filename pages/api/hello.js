import * as fs from 'fs';

// export default function handler(req, res) {
//   res.status(200).json({ message: "Hello from Next.js!" });
// }

export default async function blogdata(req, res) {
  let alldetails = [];
  fs.readFile("data/pageinfo.json", "utf-8", (err, data) => {
    alldetails.push(JSON.parse(data))
    // console.log(alldetails)
    res.status(200).json(alldetails)
  })
}


// const handler = async (req, res) => {
//     try {
//     fs.readFile("pagedata/pageinfo.json", "utf-8", (err, data) => {
//     console.log(JSON.parse(data));
//     res.status(200).json(JSON.parse(data));
//     });
//     } catch (error) {
//     res.status(500).json(error)
//     }
// }

// export default handler;
