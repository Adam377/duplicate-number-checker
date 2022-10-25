import React, {useState} from 'react';

import './NumberForm.css';

const NumberForm = (props) => {
    const [enteredNumber, setEnteredNumber] = useState('');
    const [enteredHeadcode, setEnteredHeadcode] = useState('');

    const numberChangeHandler = (event) => {
        setEnteredNumber(event.target.value);
    };

    const headcodeChangeHandler = (event) => {
        setEnteredHeadcode(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if(!hasValidInput(enteredNumber, enteredHeadcode)){
            window.alert("Please fill in all fields.");
        }
        else{
            const numberData = {
                number: enteredNumber,
                headcode: enteredHeadcode,
            };

            props.onSaveNumberData(numberData);

            // clear input fields after number has been submitted
            setEnteredNumber('');
            setEnteredHeadcode('');
        }
    };

    const hasValidInput = (number, headcode) => {
        if(number=="" || number==" " || headcode=="" || headcode==" "){
            return false;
        }
        else {
            return true;
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-number__controls">
                <div className="new-number__control">
                    <label>Number</label>
                    <input type="text" value={enteredNumber} onChange={numberChangeHandler} />
                </div>

                <div className="new-number__control">
                    <label>Headcode</label>
                    <input type="text" value={enteredHeadcode} onChange={headcodeChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Number!</button>
            </div>
        </form>
    );
}

export default NumberForm;