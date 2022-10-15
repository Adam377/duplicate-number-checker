import Card from "../UI/Card"
import NumbersList from "./NumbersList";

import './Numbers.css';

const Numbers = (props) => {
    return (
        <Card className="numbers">
            <NumbersList numbers={props.allNumbers}/>
        </Card>
    );
}

export default Numbers;