import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {

    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);

        if(!isUser) {
            res.status(401);
            res.send("JWT_INVALIDATED");
        }
        else {
            req.user = isUser; 
            next();
        }

    }   catch(e) {
        console.log({ e });
        res.status(400);
        res.send("SESSION_INVALIDATED");
    }

};

export { checkJwt };