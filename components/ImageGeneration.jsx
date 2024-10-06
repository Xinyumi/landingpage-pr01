import { useState } from 'react';

const ImageGeneration = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateImage = async () => {
    if (uploadedImage) {
      const response = await fetch('/api/stable-diffusion-xl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: uploadedImage }),
      });
      const data = await response.blob();
      const url = URL.createObjectURL(data);
      setGeneratedImage(url);
    }
  };

  return (
    <div>
      <h1>Image Generation</h1>
      <input type="file" onChange={handleImageUpload} />
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
      <button onClick={handleGenerateImage}>开始渲染</button>
      {generatedImage && <img src={generatedImage} alt="Generated" />}
    </div>
  );
};

export default ImageGeneration;
