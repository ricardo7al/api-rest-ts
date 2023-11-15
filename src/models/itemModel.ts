import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/carInterface";

const ItemSchema = new Schema<Car>(

    {
        name: {
            type: String
        },

        color: {
            type: String
        },
    
        gas: {
            type: String,
            enum: ["gasoline", "electric"], 
        },
        year: {
            type: Number
        },
        description: {
            type: String
        },
        price: {
            type: Number  
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }

);






