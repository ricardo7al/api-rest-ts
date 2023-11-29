import { Car } from "../interfaces/carInterface";
import ItemModel from "../models/itemModel";


const getOrders = async () => {
    const responseGetAll = await ItemModel.find({})
    return responseGetAll;
};





export { getOrders };