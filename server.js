import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"))

app.get("/", async (req, res) => {
  try {  
    const response = await axios.get("http://localhost:3000/");
    const result = response.data;
    res.render("home.ejs", {eb: result});
  } catch (error) {
    res.render("home.ejs", {eb: "404 not found"});
  }  
})

app.get("/about", async (req, res) => {
  try {  
    const response = await axios.get("http://localhost:3000/");
    const result = response.data;
    res.render("about.ejs", {eb: result});
  } catch (error) {
    res.render("about.ejs", {eb: "404 not found"});
  }
})

app.get("/post", async (req, res) => {
  try {  
    const response = await axios.get("http://localhost:3000/");
    const result = response.data;
    res.render("post.ejs", {eb: result});
  } catch (error) {
    res.render("post.ejs", {eb: "404 not found"});
  }
})


app.listen(port, () => {
    console.log(`your server has been listened on port ${port}`);
})