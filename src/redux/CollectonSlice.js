import {createSlice} from "@reduxjs/toolkit";

const collectionSlice = createSlice({
    name:"collection",
    initialState:{
        items:JSON.parse(localStorage.getItem("collection")) || []
    },
    reducers:{
        addmyCollection:(state,action)=>{
            // console.log(action.payload)
            const sameResult= state.items.find((item=>item.id == action.payload.id))
            if(!sameResult){
            state.items.push(action.payload)
            localStorage.setItem("collection",JSON.stringify(state.items))
            }
            
        },
        removemyCollection:(state,action)=>{
            state.items = state.items.filter((item)=>item.id !== action.payload.id)
            localStorage.setItem("collection",JSON.stringify(state.items))
        },
        clearALLcollection:(state)=>{
            state.items=[]
        }
    }
})
export const {addmyCollection,removemyCollection,clearALLcollection} = collectionSlice.actions
export default collectionSlice.reducer