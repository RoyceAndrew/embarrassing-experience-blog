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

app.post("/post", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:3000/post", req.body);
    res.redirect("/post");
  } catch (error) {
    console.log(500)
  }
})

app.post("/delete/:id", async (req, res) => {
    try {
    await axios.delete(`http://localhost:3000/${req.params.id}`);
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting data", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
    console.log(`your server has been listened on port ${port}`);
})