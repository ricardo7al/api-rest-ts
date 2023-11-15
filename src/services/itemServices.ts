import { Car } from "../interfaces/carInterface";
import ItemModel from "../models/itemModel";

const createItem = async (item: Car) => {
    const responseCreate = await ItemModel.create(item);
    return responseCreate;
};

const getAll = async () => {
    const responseGetAll = await ItemModel.find({})
    return responseGetAll;
};

const getById = async (id: string) => {
    const responseGetById = await ItemModel.findOne({ _id: id})
    return responseGetById;
};

const updateObject = async (id: string, data: Car) => {
    const responseUpdateObject = await ItemModel.findOneAndUpdate({ _id: id}, data ,
        {
            new: true,
        });

    return responseUpdateObject;
    

}

const deleteObject = async (id: string) => {
    const responseDeleteObject = await ItemModel.deleteOne({_id: id})
    return responseDeleteObject;

}



export { createItem, getAll, getById, updateObject, deleteObject };