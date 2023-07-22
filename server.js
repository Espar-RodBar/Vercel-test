const url = require("url");
const express = require("express");
const http = require("http");
const fs = require("fs");
require("dotenv").config();

const PORT = 8000;

const key = process.env.API_KEY || "no key";

const app = express();

//const app = http.createServer((request, response) => {}
//const url = request.url;
app.get("/", (request, response) => {
    fs.readFile(__dirname + "/index.html", "utf-8", (error, data) => {
        if (error) throw new Error("no file found");
        console.log("reading home root");
        console.log(typeof data, key);
        const page = data.replace("<% txt %>", "key: " + key);
        console.log(page);
        response.end(page);
    });
});

app.listen(process.env.PORT || PORT, "localhost", () => {
    console.log("server listening......");
});
