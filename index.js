import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async(req,res) => {
    const meme = await axios.get("https://meme-api.com/gimme/1")
    const memeUrl = meme.data.memes[0].url;
    console.log(memeUrl);
    res.render("index.ejs", {content: memeUrl})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)

})