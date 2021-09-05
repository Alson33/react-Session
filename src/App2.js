import React from 'react'

const App2 = (props) => {
    // props is a set of object
    // console.log(props);
    return (
        <div>
            {/* To include js inside jsx we have to cover them with {} */}
            Hello {props.name} <br />
            Age: {props.data.age} <br />
            Address: {props.data.address} <br />
            <h1>{props.meta.desc}</h1>
            {props.arr[0]}{props.arr[1]}
        </div>
    )
}

export default App2

// function nameOfFuc(name, age){ .... } props
// props (properties) -> function ko argument