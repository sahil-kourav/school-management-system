import axios from "axios";
import { getRequest, getSuccess, getFailed, getError } from "./complainSlice";

const REACT_APP_BASE_URL = "http://localhost:5000";

export const getAllComplains = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const response = await axios.get(`${REACT_APP_BASE_URL}/${address}List/${id}`);
        
        if (response.data?.message) {
            dispatch(getFailed(response.data.message));
        } else {
            dispatch(getSuccess(response.data));
        }
    } catch (error) {
        dispatch(getError(error?.message || "Something went wrong!"));
    }
};
