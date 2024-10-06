import { useState } from "react";
import UserForm from "../components/UserForm";
import { User } from "../schemas/types";
import { MppingUserData } from "../utils/MppingUserData";

export default function Navbar() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const handleCreateUser = () => {
        setCurrentUser(null);
        setIsFormOpen(true);
    };
    return (
        <div className="p-3 flex flex-col justify-center max-w-screen-2xl m-auto">
            <div className="flex justify-between items-center">
                <h1>User Management System</h1>
                <button onClick={handleCreateUser} className="bg-blue-400 text-white px-3 py-1">Create User</button>
            </div>
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
        </div>
    )
}
