import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    age: 100,
  });

  let fullName = person.firstName + " " + person.lastName;

  const changeFirstName = (event) => {
    setPerson({ ...person, firstName: event.target.value });
  };

  const changeLastName = (event) => {
    setPerson({ ...person, lastName: event.target.value });
  };

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <label>
        First Name:{" "}
        <input
          type="text"
          value={person.firstName}
          onChange={changeFirstName}
        />
      </label>

      <label>
        Last Name:{" "}
        <input type="text" value={person.lastName} onChange={changeLastName} />
      </label>

      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  );
}
