import axios from "axios";
import { UserFormData } from "../schemas/types";
import { toast } from "react-toastify";

export default async function CreateUser(data: UserFormData) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', data)
        toast(response.status + 'User Has been Created',{
            type: "success"
        })
        return( 
            response.data
        )
    } catch (error) {
        return toast(error + 'Something went wrong',{
            type: "error"
        })
    }

}