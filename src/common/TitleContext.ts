import React from "react";
type ContextProps = {
    title: string,
    dispatchTitle: (action: any) => void
}
export const TitleContext = React.createContext<ContextProps>({ title: '', dispatchTitle: (action: any) => {}});






