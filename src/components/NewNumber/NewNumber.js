import NumberForm from "./NumberForm";

const NewNumber = (props) => {
    const saveNumberDataHandler = (enteredNumberData) => {
        const numberData = {
            ...enteredNumberData,
            id: Math.random().toString()
        }

        props.onAddNumber(numberData);
    };

    return (
        <div className="new-number">
            <NumberForm onSaveNumberData={saveNumberDataHandler} />
        </div>
    );
}

export default NewNumber;