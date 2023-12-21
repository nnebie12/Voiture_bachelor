class controllerCar{

    loadContent= async () =>{
        console.log("loaded");

        const results = await fetch("./api/voiture.json",{
            cache: 'no-cache'
        })

        const data = await results.json()

        console.table(data)

        /* itération pour l'affichage des noms */

        for(let index in data){
            console.log(index.marque+' '+index.année)
        }
    }
}

export const newControllerCar = new controllerCar();

 