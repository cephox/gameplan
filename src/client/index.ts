import { addTable } from "./table"
import { create_ranklist } from "./ranklist" 
import { append_element } from "./activity"
import { create_gameplan, gen_plan } from "./plan"

async function init() {
    
    var teams = parseInt(prompt("Teamzahl")!)

    var plan = gen_plan(teams)
    addTable(teams, plan!.length);
    append_element(create_ranklist(teams));
    append_element(create_gameplan(plan!));
}

window.onload = init
