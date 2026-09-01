import {createSlice} from "@reduxjs/toolkit"
const clientslice=createSlice({
    name:"client",
    initialState:{
        Logindata:{
            name:"",
            email:"",
            password:""
        },
        backendemail:"",
        type:"Sign up",
        navclass:"",
        imgprompt:"",
        serverimg:"",
        download2:""
},
reducers:{
    setLogindata(state,action){
        const {name,value}=action.payload;
        state.Logindata[name]=value;
    },
    setdownload2(state,action){
      state.download2=action.payload;  
    },
    setimgprompt(state,action){
        state.imgprompt=action.payload;
    },
    setserverimg(state,action){
        state.serverimg=action.payload;
    },
    setnavclass(state,action){
        state.navclass=action.payload;
    },
    setbackendemail(state,action){
        state.backendemail=action.payload;
    },
    settype(state,action){
        state.type=action.payload;
    }
}
})
export const control=clientslice.actions;
export default clientslice.reducer;