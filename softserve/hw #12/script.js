12.1;

const http = require("http");
const os = require("os");
const path = require("path");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = Math.floor(os.uptime() / 60);
  const currentDir = process.cwd();
  const serverFileName = path.basename(__filename);

  const html = `
    <html>
      <head>
        <title>Server Information</title>
      </head>
      <body>
        <h1>Server Information</h1>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>OS Type:</strong> ${osType}</p>
        <p><strong>Uptime:</strong> ${uptime} minutes</p>
        <p><strong>Current Directory:</strong> ${currentDir}</p>
        <p><strong>Server File Name:</strong> ${serverFileName}</p>
      </body>
    </html>
  `;

  res.end(html);
});

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

12.2;

function getGreetingMessage(username) {
  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour >= 0 && currentHour < 6) {
    greeting = "Good night";
  } else if (currentHour >= 6 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return `${greeting}, ${username}`;
}

module.exports = {
  getGreetingMessage,
};

const http = require("http");
const { getGreetingMessage } = require("./personalmodule");

const server1 = http.createServer((req, res) => {
  const username = "oivaniu";
  const currentDate = new Date().toString();
  const greetingMessage = getGreetingMessage(username);

  const response = `Date of request: ${currentDate}\n${greetingMessage}`;

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(response);
});

server1.listen(5000, () => {
  console.log("Сервер запущено на http://localhost:5000");
});

12.3;

const fs = require("fs");
const http = require("http");

const filePath = "output.txt";

function writeToTextFile(data) {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error("Помилка при записі у файл:", err);
      return;
    }
    console.log("Інформацію записано у файл:", filePath);
  });
}

const serv = http.createServer((req, res) => {
  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      writeToTextFile(data);
      res.end("Інформацію записано у файл");
    });
  } else if (req.method === "GET") {
    fs.readFile(filePath, "utf8", (err, fileData) => {
      if (err) {
        console.error("Помилка при зчитуванні файлу:", err);
        res.end("Помилка при зчитуванні файлу");
        return;
      }
      res.end("Зміст файлу:\n" + fileData);
    });
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

serv.listen(3000, () => {
  console.log("Сервер запущено на http://localhost:3000");
});
