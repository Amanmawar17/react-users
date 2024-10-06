import { useState, useEffect } from 'react';
import ReadUserDetails from '../api/ReadUserDetails';  // Import the API function
import { User } from '../schemas/types';
import DeleteModal from '../components/DeleteButton';
import UserForm from '../components/UserForm';
import DeleteUserDetails from '../api/deleteUserDetails';
import { useNavigate } from 'react-router-dom';
import { MppingUserData } from "../utils/MppingUserData";


export default function UserTable() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<User>();
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchUsers() {
            const data = await ReadUserDetails();
            if (data) {
                setUsers(data);
            }
        }
        fetchUsers();
    }, []);



    const handleEditUser = (user: User) => {
        setCurrentUser(user);
        setIsFormOpen(true);
    };

    const handleDeleteUser = async (userId: number) => {
        await DeleteUserDetails(userId);
        setUsers(users.filter((user) => user.id !== userId));
        setIsDeleteModalOpen(false);
    };
    const handleRowClick = (id: number) => {
        navigate(`/user/${id}`);
    };

    if (!users || users.length === 0) {
        // Optionally display a loading or empty state message
        return <div>No users available...</div>;
    }

    return (
        <div className='h-screen grid place-content-center overflow-auto'>
            <h1 className='text-2xl text-black text-center font-semibold'>User List</h1>
            <table cellPadding="10" cellSpacing="0" className='mt-10 mx-10'>
                <thead className='bg-blue-600 text-white'>
                    <tr className=''>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company Name</th>
                        <th>Website</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td  onClick={() => handleRowClick(user.id)}>{user.name}</td>
                            <td onClick={() => handleRowClick(user.id)}>{`USER-${user.username}`}</td>
                            <td onClick={() => handleRowClick(user.id)}>{user.email}</td>
                            <td onClick={() => handleRowClick(user.id)}>{user.phone}</td>
                            <td onClick={() => handleRowClick(user.id)}>{user.company.name}</td>
                            <td onClick={() => handleRowClick(user.id)}>{user.website}</td>
                            <td className='flex gap-x-3 px-6'>
                                <button onClick={() => handleEditUser(user)} className='bg-orange-600 text-white px-3 py-1'>
                                    Edit
                                </button>
                                <button onClick={() => setIsDeleteModalOpen(true)} className='bg-red-700 text-white px-3 py-1'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* User Form Modal */}
            {isFormOpen && (
                    <UserForm
                        initialData={currentUser ? MppingUserData(currentUser) : null}
                        onClose={() => setIsFormOpen(false)}
                        onSuccess={() => {
                            // Refresh user list after successful create/edit
                            setIsFormOpen(false);
                        }}
                    />
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <DeleteModal
                    userId={currentUser?.id || 0}
                    onClose={() => setIsDeleteModalOpen(false)}
                    onConfirm={() => handleDeleteUser(currentUser?.id || 0)}
                />
            )}
        </div>
    );
}
