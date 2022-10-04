import React, {useState} from 'react'

const PersonCard = (props) => {
    const { fname,lname,age:initAge,hair } = props
    const [age, setAge] = useState(initAge)
    const incrementAge = (e) => {
        setAge(age + 1)
    }
    return (
        <div>
            <h2>{lname}, {fname}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hair}</p>
            <button onClick = { incrementAge }>Birthday Button for {fname} {lname}</button>
        </div>
    )
}

export default PersonCard