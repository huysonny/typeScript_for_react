import React, { useEffect, useState } from 'react'

const Video5 = (props) => {
    const { name } = props;
    const [age, setAge] = useState(0);
    useEffect(() => {
        setAge("abc");
    }, [])
    return (
        <div>
            Example in video 5- my name's {name} | age={age}
        </div>
    )
}

export default Video5
