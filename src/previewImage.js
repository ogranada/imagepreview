export function providerImage() {
  return "https://cdn.pixabay.com/photo/2020/03/09/14/54/seychelles-4916045_960_720.jpg";
}

export function convertFileToImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      resolve(e.target.result);
    };

    reader.readAsDataURL(file); // convert to base64 string
  });
}
