const express = require('express');
const path = require("path");
const app = express();
const favicon = require('serve-favicon');
const nodeMailer = require("nodemailer");

const PORT = process.env.PORT || 3000;

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: true});

app.use(urlencodedParser);
app.use(express.json());
app.use(favicon(path.join(__dirname, 'static', 'img', 'favicon.ico')));
app.get("/", (req, res) => {
    res.redirect("ua");
 });


app.use(express.static("static"));

app.get("/ua", (req, res) => {
   res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/en", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "en_ver.html"));
 });

 app.post("/", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    nodeMailer.createTransport({
      service: 'gmail',
      auth: {
         user: "alexbatin2003@gmail.com",
         pass: "opeubekthrekpdsx"
      },
      port: 534,
      host: "smtp.gmail.com"
   })
   .sendMail({
      from: "UrbSoft.com",
      to: "alexbatin2003@gmail.com",
      subject: "Nodemailer testing",
      text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\nMessage: ${req.body.message}`
    }, err => err ? console.log("Error", err) : console.log("Mail send"));
  res.sendStatus(200);
});


const ServerStart = async () => {
    try {
        app.listen(PORT, () => {
            console.log('Server started on port ' + PORT);
        });
    } catch (err){
        console.error(err.message);
    }
}



ServerStart();