export type State = any;

export type Action = { type: string; payload?: any };

export type Reducer = (state: State, action: Action) => State;

export type StateContextType = [State, React.Dispatch<Action>]

export interface StateProviderProps {
  initialState: State;
  reducer: Reducer;
  children: React.ReactNode;
}