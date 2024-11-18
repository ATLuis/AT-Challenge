import { User } from "../entities/user-entity";

type LoginData = {
    username: string;
    password: string;
}

export const loginResolver = {
  Mutation: {
    async login(_: any, data: LoginData) {
      try {
        const user = await User.findOne({ where: {
            username: data.username,
            password: data.password,
         } });
        console.log(user);
        if (!user) {
          return "User not found";
        }
        if (user.password != data.password) {
          return "Invalid password";
        }
        return "Login successful";
        } catch (error) {
            console.log(error);
            return String(error);
        }
    },
  },
};
