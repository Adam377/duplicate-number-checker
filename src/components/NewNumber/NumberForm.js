import React, {useState} from 'react';

const NumberForm = (props) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberChangeHandler = (event) => {
        setEnteredNumber(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const NumberData = {
            number: enteredNumber,
        };

        // clear input field after number has been submitted
        setEnteredNumber('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-number__inputs">
                <div className="new-number__input">
                    <label>Number</label>
                    <input type="text" value={enteredNumber} onChange={numberChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Number!</button>
            </div>
        </form>
    );
}

export default NumberForm;