import "./Card.css";
const Concepts = (props) => {
  const todo_title = props.title;
  const todo_desc = props.description;
  const todo_src = props.image;
  const todo_alt = "asdas";

  return (
    <li className="concept">
      <img src={todo_src} alt={todo_alt} />
      <h2>TODO: {todo_title}</h2>
      <p>TODO: {todo_desc}</p>
    </li>
  );
};

export default Concepts;
