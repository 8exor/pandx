
const D_ENV ={
    apiBaseUrl : import.meta.env.VITE_API_BASE_URL
}
const P_ENV={

}

export const ENV = import.meta.env.VITE_ENV === "development" ? D_ENV : P_ENV;
