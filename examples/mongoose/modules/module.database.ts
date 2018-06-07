import { model, Document } from 'mongoose';
import { Example } from './interfaces/example.interface';
import { ExampleSchema } from './schemas/example.schema';

export const ModuleDatabase = {
    Example: model<Example & Document>('Example', ExampleSchema),
};