function cloudAPI() {
  const CLOUDINARY_URL =
    "https://466915752841286:myzMNDlF2dTOIE_iUMZoLysE_ng@api.cloudinary.com/v1_1/kevin-cloud/resources/image";

  fetch(CLOUDINARY_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

cloudAPI();
