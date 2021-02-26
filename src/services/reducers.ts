/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import { Action } from './types';

export function genericReducer(state: any, action: Action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((item: any) => item.id !== action.payload);
    case 'UPDATE':
      const updatedList = state.map((item: any) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return updatedList;
    case 'UPDATE-ALL':
      return action.payload;
    default:
      return state;
  }
}
