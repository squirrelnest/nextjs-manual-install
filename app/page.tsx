import { Suspense } from "react";
import { Posts } from "./components/Posts";
import { Cats } from "./components/Cats";
import { ButtonDiv, ButtonInput, ButtonAnchor } from "./components/Button";

export default async function Page() {
    return (
        <>  
            <ButtonDiv text="bonk" url="http://www.google.com" />
            <ButtonInput text="ding" url="#posts" />
            <ButtonAnchor text="dang" url="#posts" />
            <Suspense fallback={<h1>Loading</h1>}>
                <Cats />
            </Suspense>
            <Posts />
        </>
    )
}