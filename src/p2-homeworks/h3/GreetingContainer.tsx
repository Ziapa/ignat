import React, {useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<any>(""); // need to fix any
    const [error, setError] = useState<any>(""); // need to fix any

    const setNameCallback = (e: string) => { // need to fix any
        setName(e); // need to fix
        console.log("test")
    };
    const addUser = () => {

        alert(`Hello  !`); // need to fix
    };

    const totalUsers = 0; // need to fix

    return (
        <Greeting

            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;