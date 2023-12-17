import React, { useState } from 'react'

const Video9 = () => {

    const [name, setName] = useState<string | number>("Thanh Huy");


    return (
        <div>
            Example video 9 : hello word +{name}
        </div>
    )
}

export default Video9;
