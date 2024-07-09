// ||=========================================================================||
// || Remember HATEOAS                                                       ||
// || https://www.youtube.com/watch?v=3J7Q1fJjF4M                            ||
// ||=========================================================================||

import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import Grid from "../components/Grid";
// import "../public/index.css";

const App = () => {
  return (
    <>
      <h1 className="header">Todo App</h1>
      {/* form for a new todo */}
      <Form />
      {/* display old todos */}
      <Grid>
        <Card id={1} title="pong todo" completed={false} />
      </Grid>
    </>
  );
};

export default App;
