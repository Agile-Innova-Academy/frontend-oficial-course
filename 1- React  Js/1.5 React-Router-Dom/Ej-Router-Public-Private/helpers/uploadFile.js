import axios from "axios";
import { PostData } from "../Peticiones/actions";

const uploadFile = async (file) => {
  const urlUpload = "https://api.cloudinary.com/v1_1/danimel/upload";

  let formData = new FormData();
  formData.append("upload_preset", "Cotrafa");
  formData.append("file", file);

 // const resp = await axios.post(urlUpload, formData);
 const resp = await PostData(urlUpload, formData);
  return resp?.data?.secure_url;
};

export default uploadFile;
