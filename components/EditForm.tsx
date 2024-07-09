import type { Todo } from "../interfaces";

const EditForm = (data: Todo) => {
  return (
    <form hx-put={"/api/edit/" + data.id} hx-target="this" hx-swap="outerHTML">
      <p>{data.id}</p>
      <input type="text" name="todo_data" placeholder={data.title} />
      <button>Save</button>
    </form>
  );
};

export default EditForm;
