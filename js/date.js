export class Dates{
    /* Methode */
   static dateTime = (e)=>{
        const dataFooter = document.querySelector("footer p")
        let dateTimeFull = new Date().getFullYear()
        dataFooter.innerHTML += `&copy; - MIT - ${dateTimeFull}`
        console.log(this)
    }
}

