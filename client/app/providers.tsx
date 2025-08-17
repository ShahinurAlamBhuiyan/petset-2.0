'use client'

import { store } from "@/store";
import { Provider } from "react-redux";

interface ProviderProps {
    children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
    return <Provider store={store}>{children}</Provider>
}