import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { createItem, getAll, getById, updateObject, deleteObject } from "../services/itemServices";


const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getById(id);

        if (response) {
            // Objeto encontrado, devolver los datos
            res.send(response);
        } else {
            // Objeto no encontrado, devolver un código de estado 404
            res.status(404).send('NOT_FOUND');
        }
    } catch (e: any) {
        // Imprimir o registrar el error para depuración
        console.error(e);

        // Usar el mensaje de error proporcionado por la excepción o un mensaje más descriptivo
        handleHttp(res, e.message || 'Error al intentar obtener el objeto.');
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getAll();
        res.send(response);

    }catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }

};

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await updateObject(id, body);
        res.send(response);

    }catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }

};

const postItem = async ({body}: Request, res: Response) => {
    try {
        const responseCreate = await createItem(body)
        res.send(responseCreate);
    }catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }

};


const deleteItem = async ({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteObject(id);
        res.send(response)

    }catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }

};

export { getItem, getItems, updateItem, postItem, deleteItem };


