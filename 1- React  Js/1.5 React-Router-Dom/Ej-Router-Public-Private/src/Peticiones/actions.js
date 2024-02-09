import axios from "axios"

export const GetData  = async (url)=>{
    const resp = await axios.get(url)
    return resp?.data
}

export const PostData = async (url, obj) => {
  const resp = await axios.post(url, obj);
  return resp;
};

export const PatchData = async (url, obj) => {
  const resp = await axios.patch(url, obj);
  return resp?.data;
};

export const DeleteData = async (url) => {
  const resp = await axios.delete(url);
  return resp?.status;
};