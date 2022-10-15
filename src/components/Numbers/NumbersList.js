import SingleNumber from "./SingleNumber";

import './NumbersList.css';

const NumbersList = (props) => {
    if(props.numbers.length === 0) {
        return <h2 className="numbers-list__fallback"></h2>;
    }
    return (
        <ul className="numbers-list">
            {props.numbers.map((numbers) => (
                <SingleNumber
                    key={numbers.id}
                    number={numbers.number}
                    headcode={numbers.headcode}
                />
            ))}
        </ul>
    );
}

export default NumbersList;