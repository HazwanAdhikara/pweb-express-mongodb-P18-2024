import { User } from "../models/user.model";

export const isEmailAllReadyExist = async (emailReq: string) => {
  await User.findOne({
    email: emailReq,
  });
};

export const NewUser = async (
  userReq: string,
  emailReq: string,
  passReq: string
) => {
  await User.create({
    username: userReq,
    email: emailReq,
    password: passReq,
  });
};
