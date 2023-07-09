import { createSlice } from "@reduxjs/toolkit";
import { taskLists } from "../data";


const userSlice = createSlice({
    name: "users",
    initialState: taskLists,
    reducers: {
        addTodoList: (state, action) => {
            // console.log(action)
            state.push(action.payload)
        },
        updateTodoList: (state, action) => {
            const {id, title, date, description } = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu) {
                uu.title = title;
                uu.date = date;
                uu.description = description;
            }

        },
        deleteTodoList: (state,action) => {
            const {id} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export const {addTodoList, updateTodoList, deleteTodoList } = userSlice.actions;
export default userSlice.reducer