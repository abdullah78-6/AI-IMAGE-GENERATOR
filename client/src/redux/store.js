import {configureStore} from "@reduxjs/toolkit"
import image from "./slice.js";
const Imagestore=configureStore({
    reducer:{
    main:image
    }
})
export default Imagestore;