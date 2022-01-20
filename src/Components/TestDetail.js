import React from 'react';
import { useRecoilValue } from 'recoil';
import { movieDetailSelector } from '../recoil/movieSelector';

export default function TestDetail() {
    const movieDetail = useRecoilValue(movieDetailSelector);
    console.log({ movieDetail });
    return <div></div>;
}
