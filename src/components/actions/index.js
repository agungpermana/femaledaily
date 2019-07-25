import axios from 'axios';

export const DATA_AVAILABLE = "DATA_AVAILABLE";
export const DATA_TEST_AVAILABLE = "DATA_TEST_AVAILABLE";

export function getDataApi() {
    return(dispatch)=>{
        return axios.get("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp").then((response)=>{
            dispatch({type: "DATA_AVAILABLE", data:response.data})
            dispatch(dataTest(response.data))
            console.log('response : ', response);
        })
    }
}

export function dataTest(data) {
    return {
        type: DATA_TEST_AVAILABLE,
        dataTest: data
    }
}

export function rep(data) {
    return data.toString().replace(/[!@#$^&%*()+=[\]/{}|:<>?,.\\-]/g, '');
}