import Card from "../UI/Card";

const SingleNumber = (props) => {
    return (
        <Card className="single-number">
            <div className="single-number-display">
                <h3>{props.number}</h3>
            </div>
        </Card>
    );
}

export default SingleNumber;