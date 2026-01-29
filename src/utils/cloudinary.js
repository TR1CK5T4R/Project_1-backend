import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return console.log("File path is not provided");
        // upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        // file has been uploaded succesfully
        fs.unlinkSync(localFilePath);//remove file from local uploads folder
        return response;
    }
    catch (error) {
        fs.unlinkSync(localFilePath);//remove file from local uploads folder
        return null;
    }
}

export { uploadOnCloudinary };