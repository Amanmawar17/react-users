import axios from "axios";
import { toast } from "react-toastify";

export default async function ReadUsersDetails(){
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        toast(response.status + 'Users Has been fetched',{
            type: "success"
        })
        return response.data; 
      } catch (error) {
        console.error('Error fetching users:', error,{
            type: "error"
        });
      }
    
}