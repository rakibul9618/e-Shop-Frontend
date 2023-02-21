import UserLayout from '@/components/layouts/UserLayout';
import { ChangePasswordSchema } from '@/schema/Auth';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

const password = [
  {
    id: 1,
    label: 'Old Password:',
    name: 'oldPassword',
    type: 'password',
    placeholder: 'Old Password',
  },
  {
    id: 2,
    label: 'New Password:',
    name: 'newPassword',
    type: 'password',
    placeholder: 'New Password',
  },
  {
    id: 3,
    label: 'Confirm Password:',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
  },
];

const ChangePassword: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ChangePasswordSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  const handleOnsubmit = (e: any): void => {
    // const [addAddress, setAddAddress] = useState<boolean>(false);
    // console.log(e);
  };

  return (
    <UserLayout>
      <h4 className="sm_title">Change Password</h4>

      <form
        onSubmit={handleSubmit((d) => handleOnsubmit(d))}
        className="grid gap_row-20 gap_col-30 mt-6 w-sm-80 w-md-100 w-lg-100 w-xl-70 px-4 py-3 bg-white radius-4 mx-auto shadow-2xl mb-6"
      >
        {password.map(({ id, name, type, placeholder, label }) => {
          return (
            <div className="cls" key={id}>
              <label className="block mb-half">{label}</label>
              <input
                className="w-100 px-3 py-2 radius-1"
                type={type}
                {...register(name)}
                placeholder={placeholder}
              />
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }): any => (
                  <p className="text-error font-600">{message}</p>
                )}
              />
            </div>
          );
        })}
        <button
          className="primary-btn px-5 py-1 radius-1 justify_self-end mt-2"
          type="submit"
        >
          Change
        </button>
      </form>
    </UserLayout>
  );
};

export default ChangePassword;
