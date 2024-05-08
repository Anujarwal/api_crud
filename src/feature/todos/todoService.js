import axios from "axios"

export const fetchTodo = async() => {
    const response = await axios.get("/api/todo/")
    return response.data
}

export const addTodo = async(formData) => {
    const response = await axios.post("api/todo/" , formData)
    return response.data
}


export const deleteTodo = async(_id) => {
    const response = await axios.delete("/api/todo/" + _id)
    return response.data
}

export const update = async(updated) => {
    const response = await axios.put("/api/todo/" + updated._id , updated)
    return response.data
}
