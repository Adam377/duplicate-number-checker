import Card from "../UI/Card";

const SingleNumber = (props) => {
    return (
        <li>
            <Card className="single-number">
                <div className="single-number-display">
                    <h3>{props.number}</h3>
                    <h3>{props.headcode}</h3>
                </div>
            </Card>
        </li>
    );
}

export default SingleNumber;