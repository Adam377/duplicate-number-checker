import SingleNumber from "./SingleNumber";

const NumbersList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="numbers-list__fallback"></h2>;
    }
    return (
        <p>There's nothing here</p>
    );
}

export default NumbersList;