import React from 'react'
import Input from './Input';
import PasswordInput from './PasswordInput';
import Button from './Button';

const UpdatePassword = () => {
  return (
    <div className="bg-white rounded-[5px] w-full py-[15px]">

      <form className="px-[15px] space-y-5">
        <PasswordInput
          label={"Old Password"}
          value="oldpassword1234" // replace with value prop later
        />
        <PasswordInput
          label={"New Password"}
                  placeholder="Enter new password"
                  hasErrors={true}
        />
        <PasswordInput
          label={"Confirm New Password"}
          placeholder="Enter your new password"
              />
              
              <Button label={"Change Password"} width={"100%"} />

      </form>
    </div>
  );
}

export default UpdatePassword