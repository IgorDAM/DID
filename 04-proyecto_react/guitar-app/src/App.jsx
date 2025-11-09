import { useState } from "react";
import { Footer, Guitar, Header } from "./components/";

import { db } from "./data/db.js";

export function App() {

    const [guitars, setGuitars] = useState(db);// Esta funcion nos define el estado inicial de las guitarras

    const handClick = () => {
        const guitar = {
            id: 4,
            name: "Guitarra Nueva",
            image: "guitarra_04",
            description: "Descripcion de la guitarra nueva",
            price: 500,
        };
        setGuitars([...guitars, guitar])
        console.log("Has agregado una guitarra nueva");
    }

    return (
    <>
    <Header />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {
                db.map((guitar) => {
                    return <Guitar key={guitar.id} guitar={guitar}/>
                })
            }
        </div>
    </main>


    <Footer />
    </>
 
    ) 
}

