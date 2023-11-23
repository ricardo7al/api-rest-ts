import { Request, Response } from "express";
import {registerNewUser, loginUser} from "../services/authService";

const registerController = async ({body}:Request, res:Response) => {
    const responseUser = await registerNewUser(body);
    res.send(responseUser);    
}


const loginController = async (req:Request, res:Response) => {}



export {registerController, loginController };