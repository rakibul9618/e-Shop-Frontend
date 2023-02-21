import UserLayout from '@/components/layouts/UserLayout';
import { ProfileEditSchema } from '@/schema/ProfileEdit';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

const User: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProfileEditSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  const handleOnsubmit = (e: any): void => {
    // const [addAddress, setAddAddress] = useState<boolean>(false);
    // console.log(e);
  };

  return (
    <UserLayout>
      <h4 className="sm_title">My Profile</h4>

      <form
        onSubmit={handleSubmit((d) => handleOnsubmit(d))}
        className="grid gap_row-20 gap_col-30 mt-6"
      >
        <div className="cls">
          <label className="block mb-half">Name:</label>
          <input
            className="w-100 px-3 py-2 radius-1"
            type="text"
            {...register('name')}
            placeholder="Name"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }): any => (
              <p className="text-error font-600">{message}</p>
            )}
          />
        </div>

        <div className="cls">
          <label className="block mb-half">Name:</label>
          <input
            className="w-100 px-3 py-2 radius-1"
            type="text"
            {...register('name')}
            placeholder="Name"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }): any => (
              <p className="text-error font-600">{message}</p>
            )}
          />
        </div>

        <button
          className="primary-btn px-5 py-1 radius-1 justify_self-end mt-2"
          type="submit"
        >
          Save
        </button>
      </form>
    </UserLayout>
  );
};

export default User;
