import axios from "axios";
import { UserFormData } from "../schemas/types";
import { toast } from "react-toastify";


export default async function UpdateUserDetails(data: UserFormData){
    try {
        const response = await axios.put(`https://api.example.com/users/${data.id}`, data); // Replace with actual API URL
        toast(response.status + 'User Has been Updated',{
            type: "success"
        })
        return response.data
      } catch (error) {
        return toast(error + 'Something went wrong',{
            type: "error"
        })
      }
}
