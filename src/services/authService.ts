import { Request, Response } from "express";
import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/userModel";
import { User } from "../interfaces/user.interface";


const registerNewUser = async ({email, password, name}:User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";

    const registerNewUser = await UserModel.create({email, password, name});
    return registerNewUser;
};


const loginUser = async (req:Request, res:Response) => {}


export {registerNewUser, loginUser };