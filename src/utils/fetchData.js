import axios from 'axios'
import { PRODUCT_API } from './config';

export const getDataAPI = async (url, token) => {
    const res = await axios.get(`${PRODUCT_API}/api/${url}`, {
        headers: { Authorization: token }
    })
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const res = await axios.post(`${PRODUCT_API}/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`${PRODUCT_API}/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`${PRODUCT_API}/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`${PRODUCT_API}/api/${url}`, {
        headers: { Authorization: token }
    })
    return res;
}