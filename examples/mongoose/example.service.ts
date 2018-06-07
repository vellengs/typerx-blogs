import { ModuleDatabase as Db } from './modules/module.database';
export class ExampleService {
    async findOneByTitle(title: string) {
        return Db.Example.findOne({ title: title }).exec();
    }
}