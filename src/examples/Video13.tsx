

interface IProps {
    name?: string;// required => optional
    age?: number;
    address?: string;
}


const Video13 = (props: IProps) => {

    const { name, age, address } = props;




    return (
        <div>
            Example in video 13 - hello word width {name}
        </div>
    )
}

export default Video13