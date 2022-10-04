import NumberForm from "./NumberForm";

import './NewNumber.css';

const NewNumber = (props) => {
    const saveNumberDataHandler = (enteredNumberData) => {
        const NumberData = {
            ...enteredNumberData,
            id: Math.random().toString()
        };
        
        props.onAddNumber(NumberData);
    };

    return (
        <div className="new-number">
            <NumberForm onSaveNumberData={saveNumberDataHandler}/>
        </div>
    );
}

export default NewNumber;