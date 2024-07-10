//for routing
import express from "express";

//for handling jsx
import { renderToString } from "react-dom/server";

//importing App component
import App from "./views/App";
import Card from "./components/Card";
import { Todo } from "./interfaces";
import Form from "./components/Form";
import EditForm from "./components/EditForm";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//routes
app.get("/", (req, res) => {
  //rendering App component to string
  const html = renderToString(App());
  //sending the response
  res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>todo</title>
                <script src="https://unpkg.com/htmx.org/dist/htmx.js"></script>
                <link rel="stylesheet" href="/styles.css"
            </head>
            <body>
                ${html}
            </body>
            </html>
        `);
});

app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/public/styles.css')
})

//endpoints
const todos: Todo[] = [{ id: 1, title: "pong todo", completed: false }];
app.post("/api/new-todo", (req, res) => {
  const client_data = req.body.todo_data;
  console.log(client_data);

  const processed_todo: Todo = {
    id: Math.floor(Math.random() * 100) + 1,
    title: client_data,
    completed: false,
  };
  todos.push(processed_todo);
  console.log(todos);
  const return_data = renderToString(Card(processed_todo));
  res.send(return_data);
});

app.get("/api/check/:id", (req, res) => {
  const todo_id = req.params.id;
  const todo = todos.find((todo) => todo.id == todo_id);
  if (todo) {
    todo.completed = !todo.completed;
    res.send(todo.completed ? "(●'◡'●)" : "(´。＿。｀)");
  } else {
    res.send("todo not found");
  }
});

app.put("/api/edit/:id", (req, res) => {
  console.log("PUT request received");
  console.log(req.body);
  console.log(req.params.id);
  const todo_id = req.params.id;
  const todo = todos.find((todo) => todo.id == todo_id);
  if (todo) {
    todo.title = req.body.todo_data;
    res.status(200).send(renderToString(Card(todo)));
  }
  res.status(500);
});

app.get("/api/edit/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id == req.params.id);
  const ret = renderToString(EditForm(todo));
  res.send(ret);
});

app.get("/api/todos/:id", (req, res) => {
  const todo_id = req.params.id;
  const todo = todos.find((todo) => todo.id == todo_id);
  if (todo) {
    const data = renderToString(Card(todo));
    res.send(data);
  } else {
    res.send("todo not found");
  }
});
//listen to port
app.listen(3000, console.log("server is running \n http://localhost:3000"));
