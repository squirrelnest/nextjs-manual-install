
export type Cat = {
    fact: string;
}

export const Cats = async () => {

    let data = await fetch("https://catfact.ninja/facts?limit=50&max_length=100"); 
    let cats = await data.json(); 
    console.log(cats);

    return (
        <>
            <h1>Cat Facts</h1>
            <ul>
                {cats.data.map((cat) => (
                    <li key={Math.random()}>{cat.fact}</li>
                ))}
            </ul>
        </>
    )
}