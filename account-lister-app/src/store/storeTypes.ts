export type Action<T = string> = { type: T };

export type ActionWithPayload<T = string, P = undefined> = Action<T> & { payload: P };