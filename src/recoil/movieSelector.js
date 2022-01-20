import { selector } from "recoil";
import { movieDetail } from "./movieStat";


export const movieDetailSelector = selector({
    key: "movieDetail/movieDetailSelector",
    get: async ({ get }) => {
        const { id } = get(movieDetail);
        if (!id) return;
        try {
            const res = await fetch(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
            const result = await res.json();
            return { id: 1, data: result };
        } catch (error) {
            console.log(error);
        }
    },
    set: ({ get, set }, id) => {
        set(movieDetail, { id, data: null });
    }

});



export const getListMovie = selector({
    key: "listMovieCall",
    get: async () => {
        try {
            const res = await fetch(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`);
            const result = await res.json();
            return result;

        } catch (error) {

        }
    }
});
