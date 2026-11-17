import {createSlice  } from "@reduxjs/toolkit";
const SliceSearch = createSlice({
    name:"Search",
    initialState:{
        query:"",
        TabActive:"photo",
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        Queryset:(state,actions)=>{
            state.query = actions.payload
        },
        TabsActive:(state,actions)=>{
            state.TabActive = actions.payload
            // console.log(state.TabActive)
        },
        CurrentResults:(state,actions)=>{
            state.loading = false
            state.results = actions.payload
        },
        LoadingStatus:(state,actions)=>{
            state.loading = true
            state.error = null
        },
        ErrorStatus:(state,actions)=>{
            state.error = true
            state.loading = false
        },
        clearResults:(state,actions)=>{
            state.results = []
        }
    }
})
export const{Queryset,clearResults,LoadingStatus,CurrentResults,TabsActive,ErrorStatus} = SliceSearch.actions
export default SliceSearch.reducer