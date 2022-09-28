const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const dbConnect = require("./db/connect");
const Question = require("./db/Question");

dbConnect();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
    
    Question.find({}, (err, questions) => {
        if(!err) return response.status(200).json(questions);
        else response.status(200).json([]);
    })
  });

app.post("/", (request, response, next) => {
    console.log(request.body);
    
    const question = new Question (
        {
            id: request.body.id,
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            email: request.body.email,
            question: request.body.question
        }
    )

    question.save((err) => {
        if (!err) return response.status(200).json({ question });
        return response.status(200).json({ error: err.message });
      });

        
})


app.listen( 4000 ,() => {console.log("listening on port 4000")})
