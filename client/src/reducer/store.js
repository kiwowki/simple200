// 문서에 나와있음

import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"


export default configureStore({
    reducer: {
        user: userSlice,
    },
    // 오류방지 코드
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});