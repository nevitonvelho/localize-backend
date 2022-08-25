import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { Store } from '../entity/Store';

export async function save(request: Request, response: Response) {
    const storeRepository = getRepository(Store);

    const savedSotore = await storeRepository.save(request.body);

    return response.status(200).json(savedSotore);
}


export async function getAll(request: Request, response: Response) {
    const storeRepository = getRepository(Store);

    const allStores = await storeRepository.find();

    return response.json(allStores);
}