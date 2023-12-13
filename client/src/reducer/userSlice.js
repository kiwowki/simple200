// 문서에 나와있음(store를 통과?하는..)
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    // 초기값
    initialState: {
        displayName: "",
        uid: "",
        accessToken: "",
    },
    // 회원정보 관리(session과 같음)
    reducers: {
        // 로그인 정보가 있을 때(로그인 되어있는 상태)
        loginUser: (state, action) => {
            state.displayName = action.payload.displayName;
            state.uid = action.payload.uid;
            state.accessToken = action.payload.accessToken;
        },
        // 로그인 정보가 없을 때 빈 문자열(로그인 되어있지않은 상태)
        clearUser: (state) => {
            state.displayName = "";
            state.uid = "";
            state.accessToken = "";
        },
    },
});

// Action creators are generated for each case reducer function
export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;