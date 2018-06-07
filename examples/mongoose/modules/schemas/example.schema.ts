import { Schema, SchemaTypes as t, SchemaOptions, model } from 'mongoose';

export const ExampleSchema = new Schema({
    title: t.String,
    content: t.Mixed
},
    { timestamps: true });