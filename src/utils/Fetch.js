import axios from "axios";
let baseUrl = "";

const service = axios.create({
    baseURL: baseUrl, // api 的 base_url
    timeout: 15000, // 请求超时时间
    withCredentials: true,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
});

// 导出通用请求axios
export default (opts) => {
    const result = service(opts);
    return result;
};