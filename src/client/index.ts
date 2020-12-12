import { addTable } from "./table"
import { create_ranklist } from "./ranklist" 
import { append_element } from "./activity"
import { create_gameplan, gen_plan } from "./plan"

async function init() {
    var teams = 0
    while(teams == 0 || teams + "" == "NaN" || teams % 2 != 0) {
        teams = parseInt(prompt("Teamanzahl (muss gerade sein; Mindestwert: 2)")!)
    }

    var plan = gen_plan(teams)
    addTable(teams, plan!.length);
    append_element(create_ranklist(teams));
    append_element(create_gameplan(plan!));
}

window.onload = init
