// import React, { useState, useEffect, useCallback } from "react";
import React, { useState, useEffect } from "react";
import { convertFileToImage } from "../previewImage";
export const Preview2 = (props) => {
  const [imageUrl, setImageUrl] = useState('');
  const [fileInfo, setFileInfo] = useState(null);

  const doChange = (event) => {
    if (event) {
      setFileInfo(event.target.files[0]);
    }
  }

  // const uploadFile = useCallback(async (event) => {
  //   const result = await convertFileToImage(event.target.files[0]);
  //   setImageUrl(result);
  // });

  useEffect(() => {
    console.log('Effect', new Date());
    async function prepareImage() {
      if (fileInfo) {
        const result = await convertFileToImage(fileInfo);
        setImageUrl(result);
      }
    }
    prepareImage();
  }, [fileInfo]);

  return (
    <section>
      <img data-testid="imageFile" src={imageUrl} alt="preview" />
      <input
        data-testid="inputFile"
        type="file"
        onChange={doChange}
      />
    </section>
  );
};
