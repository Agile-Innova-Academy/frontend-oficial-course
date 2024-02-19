export const FileUpload = async (file) => {
  const urlCloudinary = "https://api.cloudinary.com/v1_1/danimel/upload";

  const formData = new FormData();
  // donde la voy a conectar o enviar
  formData.append("upload_preset", "Cotrafa");
  //lo que quiero enviar o subir
  formData.append("file", file);

  const resp = await fetch(urlCloudinary, {
    method: "POST",
    body: formData,
  });
  const data = await resp.json();
  console.log("dentro de upload", data);

  return data.secure_url;
};
