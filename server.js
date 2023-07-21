const url = require("url");
const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");

const key = process.env.API_KEY;

const app = http.createServer((request, response) => {
    const url = request.url;

    if (url === "/") {
        fs.readFile(__dirname + "/index.html", "utf-8", (error, data) => {
            if (error) throw new Error("no file found");
            console.log("reading home root");
            response.end("Sending key..... " + key);
        });
    }
});

app.listen("8000", "127.0.0.1", () => {
    console.log("server listening......");
});
