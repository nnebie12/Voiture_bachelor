class controllerCar{

    loadContent= async () =>{
        console.log("loaded")

        const results = await fetch("./api/voiture.json",{
            cache: 'no-cache'
        })

        const data = await results.json()
        const parent = document.querySelector("section ul")
        const el = document.createElement("ul")
        const addElement = parent.appendChild(el)
        

        console.table(el)

        /* itération pour l'affichage des noms */

        for(let index of data){
            console.log(`${index.marque} ${index.annee}`)
            addElement.innerHTML+= `<li>${index.marque} </li>
                            <li>${index.annee}</li>
                            <li>${index.prix}</li>
                            <li>${index.type}</li>
                            <li>${index.etat}</li>
                            <li><img src= "${index.image}" alt="${index.marque}"></li>
                            <li>${index.label}</li>`
        }
    }
}

export const newControllerCar = new controllerCar();

 