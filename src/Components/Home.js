import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { completedListState, inprogressListState, newListState } from "../recoil/listCountState";
import { getListMovie } from "../recoil/movieSelector";

function Home() {

    const [value, setValue] = useState("");

    const [newList, setNewList] = useRecoilState(newListState);
    const [inprogressList, setInprogressList] = useRecoilState(inprogressListState);
    const [completedList, setCompletedList] = useRecoilState(completedListState);

    const whaleTypes = useRecoilValue(getListMovie);

    return (
        <div className="App">
            {/** TODO LIST  */}

            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (!value) return;
                    setNewList(value);
                    setValue('');
                }}>
                    <input type="text" value={value} onChange={(e) => {
                        setValue(e.target.value);
                    }} />
                    <button type="submit">add</button>
                </form>
            </div>
            <div>Backlog</div>
            <ul>
                {newList.map((item) => (
                    <li key={item.id}>
                        {item.content}
                        <button onClick={() => {
                            setInprogressList(item.id);
                        }}>In-Progress</button>
                    </li>
                ))}
            </ul>
            <div>In-progress</div>
            <ul>
                {inprogressList.map((item) => (
                    <li key={item.id}>
                        {item.content}
                        <button onClick={() => {
                            setCompletedList(item.id);
                        }}>Completed</button>
                    </li>
                ))}
            </ul>
            <div>Completed</div>
            <ul>
                {completedList.map((item) => (
                    <li key={item.id}>
                        {item.content}
                    </li>
                ))}
            </ul>

            {/** MOVIE  */}
            <div style={{ display: "flex" }}>

                {whaleTypes.map((item, index) => {
                    return <div key={index} >
                        <NavLink to={`/detail/${item.maPhim}`}>
                            <img src={item.hinhAnh} onError={(e) => { e.onError = null; e.target.src = "https://picsum.photos/200/200"; }} alt="" style={{ width: "300px", height: "350px", objectFit: "cover" }} />
                        </NavLink>
                    </div>;
                })}
            </div>
        </div>
    );
}

export default Home;
