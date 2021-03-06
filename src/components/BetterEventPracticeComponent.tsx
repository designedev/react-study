import React , {useState} from 'react';

const BetterEventPracticeComponent = () => {

    const [form, setForm] = useState({
        username: '',
        message: ''
    })

    const {username, message} = form;

    const onChange = (e: any) => {
        const editedForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(editedForm);
    }

    const onClick = () => {
        console.log(username + ":" + message);
        setForm({
            username: '',
            message: ''
        })
    }

    const onKeyPress = (e: any) => {
        if(e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>Event Practice(better)</h1>
            <input type="text" name="username" placeholder="user name" value={username} onChange={onChange} onKeyPress={onKeyPress}></input>
            <input type="text" name="message" placeholder="message" value={message} onChange={onChange} onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>OK</button>
        </div>
    );
};

export default BetterEventPracticeComponent;