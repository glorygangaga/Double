import { RootState } from "../store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAllSelector: TypedUseSelectorHook<RootState> = useSelector;