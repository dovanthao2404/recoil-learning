import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { movieDetailSelector } from '../recoil/movieSelector';
import TestDetail from './TestDetail';

export default function Detail() {

    const { id } = useParams();
    const navigate = useNavigate();
    const movieDetail = useRecoilValue(movieDetailSelector);
    const setIdMovie = useSetRecoilState(movieDetailSelector);
    useEffect(() => {
        setIdMovie(id);
    }, []);
    console.log(movieDetail);


    return <div>
        <img style={{
            width: "300px",
            height: "350px"
        }} src={movieDetail?.data.hinhAnh} alt="" onError={(e) => { e.onError = null; e.target.src = "https://picsum.photos/200/200"; }} />
        <div></div>
        {movieDetail?.data.tenPhim}
        <div></div>
        <button onClick={() => {
            navigate("/");
        }}>back to home</button>
        <TestDetail /></div>;
}
