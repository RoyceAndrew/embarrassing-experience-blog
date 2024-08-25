import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var EES = [
    {
        id: 1,
        experience:  "Swiping, waiting and having your debit card come up declined is one of the most stomach churning moments you’ll ever experience. When this happens it’s a lose-lose scenario because if you don’t have the money in the bank, you’re now exposed – and even if it’s your account that’s malfunctioning, defending yourself and appearing bamboozled will still be greeted by funny, judgmental looks.",
        date: "Tue Aug 20 2024",
    },
    {
        id: 2,
        experience: "Slipping and falling in rain. I don’t have an official statistic, but this has to occur like, 94% of the time at store entryways. Seriously, next time it rains, kick your feet up and enjoy the show because at least one person will take a tumble. I’ve done it myself, take a step, slip, suddenly you’re staring at the sky for a moment, then splat — you greet the pavement.",
        date: "Tue Aug 20 2024",
    },
    {
        id: 3,
        experience: "Being out and unexpectedly having your flip-flop/sandal break. This is probably karma for laughing at the folks who stumbled in the rain, so just deal with it. Besides, it’s nothing a little super glue, or a lot of Elmer’s can’t solve.",
        date: "Tue Aug 20 2024",
    },
    {
        id: 4,
        experience: "Making awkward eye contact with someone as they enter a foul-smelling bathroom, because you know they think you’re responsible, whether you really are or not.",
        date: "Tue Aug 20 2024",
    },
    {
        id: 5,
        experience: "Silent room stomach growls. You know how your stomach is. It always waits until the quiet part of the movie, the silence at the table or any moment of stillness to let its rumbling roar be heard at an opportune time.",
        date: "Tue Aug 20 2024",
    },
    {
        id: 6,
        experience: "When someone else’s actions are beyond ridiculous but they don’t have the social awareness to sense that they should be embarrassed, so you have to feel humiliated for them.",
        date: "Wed Aug 21 2024",
    },
    {
        id: 7,
        experience: "Falling on a treadmill. If this hasn’t happened to you, feel blessed. Not only is this terrifying, but it’s equally painful on your body and ego. One second you’re running, the next you look down and you’re further back then anticipated. The machine’s speed is too fast for your steps and suddenly you’re slammed against a hot, moving conveyor belt that swoops you off of it like a humiliating ride on Aladdin’s magic carpet mixed with a mechanical bull.",
        date: "Thu Aug 22 2024",
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
})

app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findId = EES.findIndex((ee) => ee.id === id);
    EES.splice(findId, 1);
    res.json("success")
})

app.listen(port, () => {
    console.log(`your server has been listened on port ${port}`);
})