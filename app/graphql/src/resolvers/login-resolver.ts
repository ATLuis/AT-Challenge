import { AppDataSource } from "../config/database";
import { signToken } from "../utils/jwt";
import { User } from "../entities/user-entity";
import bcrypt from "bcrypt";
import { stringify } from "querystring";

interface LoginArgs {
  username: string;
  password: string;
}

interface AuthPayload {
  token: string | null;
  message: string;
}

export const loginResolver = {
  Mutation: {
    async login(_:unknown,args:LoginArgs) :Promise<AuthPayload>{
      let invalidGeneralError = {
          token:null,
          message:"Invalid username or password!"
      }
      try {
        const userRepository = AppDataSource.getRepository(User);
        // var luser = userRepository.create({username:"dude",password:bcrypt.hashSync("password",8)})
        // userRepository.save(luser)
        const user = await userRepository.findOne({ where: { username: args.username } });
        if(!user) return invalidGeneralError
        //compare password
        const isPasswordValid = await bcrypt.compare(args.password,user.password);
        if(!isPasswordValid) return invalidGeneralError
        return {
          token : signToken({id:user.id,username:user.username}),
          message:"Login successful"
        }

      } catch (error) {
        console.error(error)
          return {
            token:null,
            message:"Ops!."
          }
      }
    },
  },
};

