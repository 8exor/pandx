
const D_ENV ={
    apiBaseUrl : import.meta.env.VITE_API_BASE_URL_DEV
}
const P_ENV={
    apiBaseUrl : import.meta.env.VITE_API_BASE_URL_LIVE
}

export const ENV = import.meta.env.VITE_ENV === "development" ? D_ENV : P_ENV;
