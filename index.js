import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var EES = [
    {
        id: 1,
        experience:  "Swiping, waiting and having your debit card come up declined is one of the most stomach churning moments you’ll ever experience. When this happens it’s a lose-lose scenario because if you don’t have the money in the bank, you’re now exposed – and even if it’s your account that’s malfunctioning, defending yourself and appearing bamboozled will still be greeted by funny, judgmental looks.",
        date: "Thu Aug 22 2024",
    },
    {
        id: 2,
        experience: "Slipping and falling in rain. I don’t have an official statistic, but this has to occur like, 94% of the time at store entryways. Seriously, next time it rains, kick your feet up and enjoy the show because at least one person will take a tumble. I’ve done it myself, take a step, slip, suddenly you’re staring at the sky for a moment, then splat — you greet the pavement.",
        date: "Wed Aug 21 2024",
    },
    {
        id: 3,
        experience: "Being out and unexpectedly having your flip-flop/sandal break. This is probably karma for laughing at the folks who stumbled in the rain, so just deal with it. Besides, it’s nothing a little super glue, or a lot of Elmer’s can’t solve.",
        date: "Tue Aug 20 2024",
    }
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.json(EES)
})

app.post("/post", (req, res) => {
    
    const enew = {
        id: EES.length+2,
        experience: req.body.alex,
        date: new Date().toDateString(),
    }
    EES.push(enew);
    res.json(EES);
    console.log(enew);
})

app.listen(port, () => {
    console.log(`your server has been listened on port ${port}`);
})