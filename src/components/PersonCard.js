import React from 'react'

const PersonCard = (props) => {
    const { fname,lname,age,hair } = props
    return (
        <div>
            <h2>{lname}, {fname}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hair}</p>
        </div>
    )
}

export default PersonCard