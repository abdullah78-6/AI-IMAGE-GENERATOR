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
        download2:"",
        loading:false,
        history:[],
        fileid:"",
        deleteloading:false
},
reducers:{
    setLogindata(state,action){
        const {name,value}=action.payload;
        state.Logindata[name]=value;
    },
    setdeleteloading(state,action){
        state.deleteloading=action.payload;
    },
    sethistory(state,action){
        state.history=action.payload;
    },
    setdownload2(state,action){
      state.download2=action.payload;  
    },
    setloading(state,action){
        state.loading=action.payload;
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
    setfileid(state,action){
        state.fileid=action.payload;
    },
    settype(state,action){
        state.type=action.payload;
    }
}
})
export const control=clientslice.actions;
export default clientslice.reducer;