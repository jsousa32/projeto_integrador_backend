import { Model } from "sequelize";

export abstract class GlobalService<T extends Model> {
    abstract findAll(args?: string): Promise<T[] | null>;

    abstract findOne(args: string, scope?: string): Promise<T | null>;

    abstract create(body: T): void;

    abstract update(body: T, args: string): void;

    abstract delete(args: string): void;

    abstract restore(args: string): void;
}
