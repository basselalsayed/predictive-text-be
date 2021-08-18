export * from './input';

export const send = (code, res, object) => res.status(code).send(object);
