const Form = () => {
  return (
    <form hx-post="/api/new-todo" hx-target="#res" hx-swap="beforeend">
      <input type="text" name="todo_data" placeholder="Add a new todo" />
      <button>Add</button>
    </form>
  );
};

export default Form;
