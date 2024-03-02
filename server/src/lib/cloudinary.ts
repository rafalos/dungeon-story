import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadByUrl = async (imageURL: string) => {
  const response = await cloudinary.uploader.upload(imageURL);

  return response.url;
};

export const getIconPath = async (resource: string) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'swords',
    });

    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
