import Card from "../UI/Card"
import NumbersList from "./NumbersList";
import SingleNumber from "./SingleNumber";

const Numbers = (props) => {
    return (
        <ul className="numbers-list">
            {props.allNumbers.map((numbers) => (
                <SingleNumber
                    key={numbers.id}
                    number={numbers.number}
                    headcode={numbers.headcode}
                />
            ))}
        </ul>
    );
}

export default Numbers;