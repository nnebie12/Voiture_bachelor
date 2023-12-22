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
            addElement.innerHTML+= `<li>Marque: ${index.marque} </li>
                            <li>Anne: ${index.annee}</li>
                            <li>Prix: ${index.prix}</li>
                            <li>Type: ${index.type}</li>
                            <li>Etat: ${index.etat}</li>
                            <li><img src= "${index.image}" alt="${index.marque}"></li>
                            `
        }
    }
}

export const newControllerCar = new controllerCar();

 