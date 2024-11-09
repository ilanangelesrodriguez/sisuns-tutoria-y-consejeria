import { User } from '@nextui-org/react';

const UserInfo = () => {
  return (
    <User
      className='my-0'
      name="James Rodriguez"
      description="Consejero"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
  );
};

export default UserInfo;
