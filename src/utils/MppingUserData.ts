import { User, UserFormData } from "../schemas/types";

export function MppingUserData(user: User): UserFormData {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: parseInt(user.phone), // Assuming phone is stored as a string in `User`
        username: user.username,
        address: `${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`,
        companyname: { name: user.company.name },
        website: user.website
    };
}
