import { ObjectMapper } from 'json-object-mapper';

export const fromJson = <T>(from: Object, to: { new (): T }): T => {
    return ObjectMapper.deserialize<T>(to, from);
};
