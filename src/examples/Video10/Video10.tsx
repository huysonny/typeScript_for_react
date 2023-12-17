import { useState } from "react";
import './Video10.css'

export interface ITest {
    name?: string;
    age?: number
}

interface IUser {
    name: string;
    age: number | string;
    city: string;
}

interface IProps {
    defautName: string;
    defaultAge: number | string;
}

const Video10 = (props: IProps) => {
    const { defautName, defaultAge } = props;
    const [name, setName] = useState<string>(defautName);
    const [age, setAge] = useState<number | string>(defaultAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectedCity, setSelectedCity] = useState<string>("Hà Nội");


    const [users, setUsers] = useState<IUser[]>([]);

    const [test, setTest] = useState<ITest | null>(null);

    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            city: selectedCity
        }
        setUsers([...users, user]);
        setName("");
        setAge("");
    }

    const handleOnCangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }



    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} onChange={handleOnCangeName} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age} onChange={(event) => setAge(event.target.value)} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select
                        onChange={(event) => setSelectedCity(event.target.value)}
                    >
                        {city.map((item) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })}

                    </select>
                </div>

                <input type="submit" value="Submit" onClick={handleSubmit} />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr key={user.name}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;