import { Url } from "../Models/Url.js"
import shortid from "shortid";
export const shortUrl = async (req, res) => {
    const longUrl = req.body.longUrl;
    const shortCode = shortid.generate()

    const shortUrl = `http://localhost:1234/${shortCode}`

    //save to data base

    const newUrl = new Url({ shortCode, longUrl })
    await newUrl.save();
    console.log("short url = ", newUrl)

    res.render("index.ejs", { shortUrl })
}

export const getOrignalUrl = async (req, res) => {
    const shortCode = req.params.shortCode

    //find from data base long url

    const orignalUrl = await Url.findOne({ shortCode })

    if (orignalUrl) {
        res.redirect(orignalUrl.longUrl)
    } else {
        res.json({ message: "Invalid Url" })
    }

    res.json({ orignalUrl })
}