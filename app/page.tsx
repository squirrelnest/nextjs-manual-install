import { Suspense } from "react";
import { Posts } from "./components/Posts";
import { Cats } from "./components/Cats";

export default async function Page() {
    return (
        <>
            <Suspense fallback={<h1>Loading</h1>}>
                <Cats />
            </Suspense>
            <Posts />
        </>
    )
}