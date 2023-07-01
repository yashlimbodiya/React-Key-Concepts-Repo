import './Card.css';
const Card = (props) => {

    const id = props.id;
    return (
        <ul id="concepts">{props.children}</ul>
    );
}

export default Card;