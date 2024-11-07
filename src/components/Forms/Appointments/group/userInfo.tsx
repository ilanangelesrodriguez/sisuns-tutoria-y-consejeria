import React from 'react';
import { User } from '@nextui-org/react';

const UserInfo = () => {
  return (
    <User
      name="James Rodriguez"
      description="Consejero"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
  );
};

export default UserInfo;
