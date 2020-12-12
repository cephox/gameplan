import { addTable } from "./table"
import { create_ranklist } from "./ranklist" 
import { append_element } from "./activity"
import { create_gameplan, gen_plan } from "./plan"

async function init() {
    var plan = gen_plan(4)
    addTable(4, plan!.length);
    append_element(create_ranklist(4));
    append_element(create_gameplan(plan!));
}

window.onload = init
