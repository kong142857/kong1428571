const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
        body {
            color: black;
            font-family: 'Times New Roman', Times, serif ;
            font-size: 14px;
            text-align: center;
        }
        .hinh-nen{
            background-image: url("12345.jpg");
            background-attachment: fixed;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0.5);
            background-size:100%;
            background-position: center;
            padding: 450px 0 500px;
            width: 100%;
        }
        .box {
        background-color: orangered;
        color: white;
        line-height: 50px;
        height: 50px;
        width: 250px;
        border: dark 2px cidge;
        border-radius: 5px;
        }
        .box:hover {
        opacity: 0,8;
        }
    </style>
    <body>
        <div class="hinh-nen">
            <br>
            <h2> Don't miss this special offer </h2>
            <h3> Get it now for just $10! the price will be increased after 50 downloads </h3>
            <button type="submit" class="box"> Get the late version of Bootlander </button>       
        </div>
    </body>
</html>
`
