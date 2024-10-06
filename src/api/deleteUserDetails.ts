import axios from "axios";
import { toast } from "react-toastify";

export default async function DeleteUserDetails(userID: number) {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userID}`)
        return toast( response.status + 'User Has been Deleted',{
            type: "success"
        })
    } catch (error) {
        return toast(error + 'Something went wrong',{
            type: "error"
        })
    }
}