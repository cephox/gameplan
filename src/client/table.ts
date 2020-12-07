import { textChangeRangeNewSpan } from "typescript"
import { append_element } from "./activity"

function createTable(width:number, height:number): HTMLElement {
    var div = document.createElement("div")
    div.classList.add("table")

    var table = document.createElement("table")

    for(var i = 0; i < width; i++) {
        var row = document.createElement("tr")
        for(var j = 0; j < height; j++) {
            
            var entry = document.createElement("td");
            if(j == 0 && i != 0) {
                entry.textContent = "Team " + i
            } else {
                entry.textContent = "yay"
            }

            row.appendChild(entry)
        }
        table.appendChild(row)
    }

    div.appendChild(table)
    return div
}

export function addTable(width:number, height:number) {
    append_element(createTable(width, height))
}