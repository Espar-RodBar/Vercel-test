const url = require("url");
const http = require("http");
const fs = require("fs");
require("dotenv").config();

const key = process.env.API_KEY || "no key";

const app = http.createServer((request, response) => {
    const url = request.url;

    if (url === "/") {
        fs.readFile(__dirname + "/index.html", "utf-8", (error, data) => {
            if (error) throw new Error("no file found");
            console.log("reading home root");
            console.log(typeof data, key);
            const page = data.replace("<% txt %>", "key: " + key);
            console.log(page);
            response.end(page);
        });
    }
});

app.listen("8000", "127.0.0.1", () => {
    console.log("server listening......");
});
