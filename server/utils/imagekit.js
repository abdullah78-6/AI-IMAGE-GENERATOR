import ImageKit from "@imagekit/nodejs"
const imagekit=new ImageKit({
    privateKey:process.env.IMAGEKIT_KEY
});
export default imagekit;