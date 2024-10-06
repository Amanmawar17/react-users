import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../schemas/userSchemas";
import { FormFieldProps } from "../schemas/types";
import CreateUser from "../api/createUser"; // For editing users
import UpdateUserDetails from "../api/updateUserDetails";
import { UserFormData, UserFormProps } from "../schemas/types";
// Reusable FormField component
export const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
    className="w-80 border-2 border-solid p-2 font-serif placeholder:text-gray-600 "
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && <span className="text-red-500">{error.message}</span>}
  </>
);

export default function UserForm({ initialData, onClose, onSuccess }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: initialData || {}, // Set initial values for editing
  });

  const onSubmit = async (data: UserFormData) => {
    if (initialData) {
      await UpdateUserDetails(data); // Call your API update method
    } else {
      await CreateUser(data); // Call your API create method
    }
    onSuccess();
    onClose();
  };

  return (
    <div className="modal">
      <div className="grid place-content-center mt-10 mx-3">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-3">
          <FormField
            type="text"
            placeholder="Name"
            name="name"
            register={register}
            error={errors.name}
          />
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />
          <FormField
            type="tel"
            placeholder="Phone"
            name="phone"
            register={register}
            error={errors.phone}
          />
          <FormField
            type="text"
            placeholder="Username"
            name="username"
            register={register}
            error={errors.username}
          />
          <FormField
            type="text"
            placeholder="Address"
            name="address"
            register={register}
            error={errors.address}
          />
          <FormField
            type="text"
            placeholder="Company Name"
            name="companyname"
            register={register}
            error={errors.companyname?.name}
          />
          <FormField
            type="text"
            placeholder="Website"
            name="website"
            register={register}
            error={errors.website}
          />

          <button type="submit" className="px-3 py-1 bg-orange-600 text-white">
            {initialData ? "Update User" : "Create User"}
          </button>
          <button type="button" className="px-3 py-1 bg-gray-600 text-white" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}