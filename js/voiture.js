import { newControllerCar } from "./controller.js";
import { Dates } from "./date.js"
document.addEventListener("DOMContentLoaded", e =>{
    const print_out = newControllerCar.loadContent();
    Dates.dateTime();
} )