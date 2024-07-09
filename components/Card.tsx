import { Todo } from "../interfaces";

const Card = (client_data: Todo) => {
  client_data = client_data
    ? client_data
    : { id: 0, title: "default", completed: false };
  return (
    <>
      <div
        className="card"
        id={"card" + client_data.id}
        style={{ width: "18rem" }}
      >
        <img
          src="https://cataas.com/cat"
          alt="Random Cat"
          style={{width: "100px", height: "100px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{client_data.id}</h5>
          <p className="card-text">{client_data.title}</p>
          <button
            hx-get={"/api/check/" + client_data.id}
            hx-swap="innerHTML"
            className="btn btn-primary"
          >
            {client_data.completed ? "(●'◡'●)" : "(´。＿。｀)"}
          </button>
          <button
            hx-get={"/api/edit/" + client_data.id}
            hx-swap="innerHTML"
            hx-target={"#card" + String(client_data.id)}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
