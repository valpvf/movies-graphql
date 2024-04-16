import { Action } from "redux";

export interface ActionWithPaylad<T> extends Action {
  payload: T;
}

type ActionHendlers<S> = {
  [key: string]: (state: S, action: any) => S;
};

export function createReducer<TState>(
  initialState: TState,
  handlers: ActionHendlers<TState>
) {
  return function (state: TState, action: Action) {
    state ??= initialState;
    const handler = handlers[action.type];
    return handler?.(state, action) ?? state;
  };
}
