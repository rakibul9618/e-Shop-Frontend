import { RegisterSchema } from '@/schema/Auth';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

const signUpInput = [
  {
    id: 1,
    label: 'Name:',
    name: 'name',
    type: 'text',
    placeholder: 'Full Name',
    isSelect: true,
  },
  {
    id: 2,
    label: 'Email:',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    isSelect: true,
  },
  {
    id: 3,
    label: 'Phone:',
    name: 'phone',
    type: 'tel',
    placeholder: 'Phone',
    isSelect: true,
  },
  {
    id: 4,
    label: 'Password:',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    isSelect: false,
  },
  {
    id: 5,
    label: 'Confirm Password:',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    isSelect: false,
  },
];

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  const handleOnsubmit = (e: any): void => {
    // const [addAddress, setAddAddress] = useState<boolean>(false);
    // console.log(e);
  };

  return (
    <form
      onSubmit={handleSubmit((d) => handleOnsubmit(d))}
      className="grid gap_row-20 gap_col-30 mt-6"
    >
      {signUpInput.map(({ id, name, type, placeholder, label }) => {
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
        Create Account
      </button>
    </form>
  );
};

export default SignUp;
