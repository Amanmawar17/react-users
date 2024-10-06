import { FieldError, UseFormRegister } from "react-hook-form";

export type UserFormData = {
  id: number
  name: string;
  email: string;
  phone: number;
  username: string;
  address: string;
  companyname: {
    name: string;
  };
  website: string;
};

export interface UserFormProps {
  initialData?: UserFormData | null;
  onClose: () => void;
  onSuccess: () => void;
}

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<UserFormData>; // Update this to reference the renamed type
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};



export type ValidFieldNames =
  | "id"
  | "name"
  | "email"
  | "phone"
  | "username"
  | "address"
  | "companyname"
  | "website";


  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
      name: string;
    };
    address: {
      city: string;
      geo: {
        lat: string;
        lng: string;
      }
      street: string;
      suite: string;
      zipcode: string;
    };
  }