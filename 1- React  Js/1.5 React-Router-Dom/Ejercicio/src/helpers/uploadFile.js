export const uploadFile = async (file) => {
  console.log("Archivo", file);
  const urlUpload = "https://api.cloudinary.com/v1_1/danimel/upload";

  let formData = new FormData();
  formData.append("upload_preset", "Cotrafa");
  formData.append("file", file);

  const resp = await fetch(urlUpload, {
    method: "POST",
    body: formData,
  });
  const data = await resp.json();

 return data.secure_url;
};
