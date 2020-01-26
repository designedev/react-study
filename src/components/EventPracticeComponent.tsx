import React , {useState} from 'react';

const EventPracticeComponent = () => {
    const [val, setVal] = useState("");
    const onChangeHandler = (e:any) => {
        setVal(e.target.value);
    }
    const resetValHandler = () => {
        setVal('');
    }

    return (
        <div>
            <h1>Event Practice</h1>
            <p>{val}</p>
            <input type="text" value={val} onChange={onChangeHandler}></input>
            <button onClick={resetValHandler}>Reset!</button>
        </div>
    );
};

export default EventPracticeComponent;