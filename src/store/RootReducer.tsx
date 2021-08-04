import { combineReducers, Reducer } from 'redux';
import { IUser } from "../UserApp/user/UserTypes";
import { userReducer } from '../UserApp/user/UserReducer';

export interface IAppState {
    user: IUser
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
    user: userReducer
} as any);