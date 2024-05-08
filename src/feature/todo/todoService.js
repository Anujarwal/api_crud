import axios from "axios"

export const fetchTodo = async() => {
    const response = await axios.get("/api/todo/")
    return response.data

}
