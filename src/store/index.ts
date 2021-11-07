import { createStore } from "redux";
import rootSlice from './rootSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = createStore(rootSlice)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
