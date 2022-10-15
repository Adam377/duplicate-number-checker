import Card from "../UI/Card";

import './SingleNumber.css';

const SingleNumber = (props) => {
    return (
        <li>
            <Card className="single-number">
                <h3>{props.number}</h3>
                <h3>{props.headcode}</h3>
            </Card>
        </li>
    );
}

export default SingleNumber;