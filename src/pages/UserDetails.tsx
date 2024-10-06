import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReadUserDetails from '../api/ReadUserDetails'; // Import the API function
import { User } from '../schemas/types';

export default function UserDetails() {
    const { id } = useParams<{ id: string }>(); // Ensure 'id' is a string as params are always strings
    const [user, setUser] = useState<User | null>(null); // Initialize user as User or null

    useEffect(() => {
        async function fetchUserDetails() {
            if (id) {
                const users = await ReadUserDetails();
                const selectedUser = users.find((user: User) => user.id === parseInt(id)); // Ensure 'id' is an integer
                setUser(selectedUser || null); // Handle case where no user is found
            }
        }

        fetchUserDetails();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>; // Show loading until user data is fetched
    }

    return (
        <section className='h-screen flex justify-center items-center'>
            <div className='shadow-md rounded-sm p-8'>
                <h1 className='text-2xl font-black font-mono '>Details for {user.name}</h1>
                <p><strong className='text-lg'>Username:</strong> {user.username}</p>
                <p><strong className='text-lg'>Email:</strong> {user.email}</p>
                <p><strong className='text-lg'>Phone:</strong> {user.phone}</p>
                <p><strong className='text-lg'>Company Name:</strong> {user.company?.name}</p> {/* Optional chaining for nested properties */}
                <p><strong className='text-lg'>Website:</strong> {user.website}</p>
                <p><strong className='text-lg'>Address:</strong> {`${user.address.suite}, ${user.address.street}, ${user.address.city} - ${user.address?.zipcode}`}</p>
            </div>
        </section>
    );
}
