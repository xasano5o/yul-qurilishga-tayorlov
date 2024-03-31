import { configureStore } from "@reduxjs/toolkit";
import { CategoryCrud } from "../slice/category/index.js";
import { CertifcatCrud } from "../slice/certifcat/index.js";
import { SettingCrud } from "../slice/time/index.js";
import { DirectionCrud } from "../slice/direction/index.js";

export const store = configureStore({
    reducer: {
        [CategoryCrud.reducerPath]: CategoryCrud.reducer,
        [CertifcatCrud.reducerPath]: CertifcatCrud.reducer,
        [SettingCrud.reducerPath]: SettingCrud.reducer,
        [DirectionCrud.reducerPath]: DirectionCrud.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            CategoryCrud.middleware,
            CertifcatCrud.middleware,
            SettingCrud.middleware,
            DirectionCrud.middleware,
        ),

});

export default store;
