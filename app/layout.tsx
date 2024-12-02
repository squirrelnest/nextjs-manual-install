import React from "react";
import { APIContextProvider, APIContext } from "./context/apiContext";

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <APIContextProvider>
                    {children}
                </APIContextProvider>
            </body>
        </html>
    )
}