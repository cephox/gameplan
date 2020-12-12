import { addTable } from "./table"
import { create_ranklist } from "./ranklist" 
import { append_element } from "./activity"

async function init() {
    addTable(3, 5);
    append_element(create_ranklist(3));
}

window.onload = init
