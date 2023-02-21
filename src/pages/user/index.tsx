import UserLayout from '@/components/layouts/UserLayout';
import { ProfileEditSchema } from '@/schema/ProfileEdit';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

const personalInfo = [
  {
    id: 1,
    label: 'Name:',
    name: 'name',
    type: 'text',
    placeholder: 'Full Name',
  },
  {
    id: 2,
    label: 'Birth Date:',
    name: 'date',
    type: 'date',
    placeholder: 'Birth Date',
  },
  {
    id: 3,
    label: 'Address:',
    name: 'address',
    type: 'text',
    placeholder: 'Address',
  },
];

const securityInfo = [
  {
    id: 1,
    label: 'Email:',
    name: 'email',
    type: 'text',
    placeholder: 'Email',
  },
  {
    id: 2,
    label: 'Phone:',
    name: 'phone',
    type: 'tel',
    placeholder: 'Phone',
  },
];

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
        className="grid gap_row-20 gap_col-30 mt-6 col-lg-2"
      >
        {personalInfo.map(({ id, name, type, placeholder, label }) => {
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

        <div className="cls">
          <label className="block mb-half">Gender:</label>

          <div className="radio_list flex gap-20 mt-1">
            <div className="flex items-center gap-10">
              <input
                className="pointer"
                type="radio"
                {...register('gender')}
                value="male"
                id="male"
              />
              <label htmlFor="male" className="pointer">
                Male
              </label>
            </div>
            <div className="flex items-center gap-10 pointer">
              <input
                className="radius-1"
                type="radio"
                {...register('gender')}
                value="female"
                id="female"
              />
              <label htmlFor="female" className="pointer">
                Female
              </label>
            </div>
            <div className="flex items-center gap-10 pointer">
              <input
                className="pointer"
                type="radio"
                {...register('gender')}
                value="others"
                id="others"
              />
              <label htmlFor="others" className="pointer">
                Others
              </label>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="gender"
            render={({ message }): any => (
              <p className="text-error font-600">{message}</p>
            )}
          />
        </div>

        {securityInfo.map(({ id, name, type, placeholder, label }) => {
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
          Save
        </button>
      </form>
    </UserLayout>
  );
};

export default User;
