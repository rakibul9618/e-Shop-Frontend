import { LoginSchema } from '@/schema/Auth';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

const signInInput = [
  {
    id: 1,
    label: 'Email:',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    isSelect: true,
  },
  {
    id: 2,
    label: 'Password:',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    isSelect: false,
  },
];

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
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
      {signInInput.map(({ id, name, type, placeholder, label }) => {
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
        className="primary-btn px-5 py-1 radius-1 justify_self-end "
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default SignIn;
