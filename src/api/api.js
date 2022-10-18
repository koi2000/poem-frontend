import Fetch from "@/utils/Fetch";

let tag = "/poem"
// 查找相近的词汇
export const queryRelatedWord = (data) => {
    return Fetch({
        method: "post",
        url: `${tag}/nearestWord`,
        data: data
    });
}

// 续写诗歌
export const generatePoem = (data) => {
    return Fetch({
        method: "post",
        url: `${tag}/generatePoem`,
        data: data
    });
}

export const generatePoemByGPT = (data) => {
    return Fetch({
        method: "post",
        url: `${tag}/generatePoemByGPT`,
        data: data
    });
}

// 生成藏头诗
export const generateAcrostic = (data) => {
    return Fetch({
        method: "post",
        url: `${tag}/generateAcrostic`,
        data: data
    });
}

// 查找相近的诗句
export const queryRelatedSentence = (data) => {
    return Fetch({
        method: "post",
        url: `${tag}/nearestSentence`,
        data: data
    });
}