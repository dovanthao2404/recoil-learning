import { atom } from "recoil";

export const movieDetail = atom({
    key: "movieDetail",
    default: {
        id: NaN,
        data: null
    }
});

