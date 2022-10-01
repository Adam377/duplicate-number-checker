import Card from "../UI/Card"
import SingleNumber from "./SingleNumber";

const Numbers = (props) => {
    return (
        <Card className="numbers">
            <SingleNumber
                number={props.allNumbers[0].number}
            />

            <SingleNumber
                number={props.allNumbers[1].number}
            />

            <SingleNumber
                number={props.allNumbers[2].number}
            />

            <SingleNumber
                number={props.allNumbers[3].number}
            />

            <SingleNumber
                number={props.allNumbers[4].number}
            />

            <SingleNumber
                number={props.allNumbers[5].number}
            />

            <SingleNumber
                number={props.allNumbers[6].number}
            />
        </Card>
    );
}

export default Numbers;