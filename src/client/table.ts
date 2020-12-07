import { append_element } from "./activity"
import { createInput } from "./inputs"

function updateTable(team:number) {
    var inputs = document.getElementsByClassName("team-score-" + team)
    var k = 0
    for(var i = 0; i < inputs.length; i++) {
        var el = <HTMLInputElement>inputs.item(i)
        k += parseInt(el.value)
    }
    
    var whole_points = <HTMLInputElement>document.getElementById("whole-team-score-" + team)
    whole_points.value = k + ""
}

function createTable(teams:number, rounds:number): HTMLElement {
    var div = document.createElement("div")
    div.classList.add("table")

    var table = document.createElement("table")

    for(var i = 0; i < teams + 1; i++) {
        var row = document.createElement("tr")
        for(var j = 0; j < rounds + 2; j++) {
            
            var entry = document.createElement("td");

            if(j == 0 && i != 0) {
                var input = createInput("text", "team-name", "Team " + i, () => {})
                input.element.id = "team-name-" + i
                entry.appendChild(input.element)
            } else if(i == 0 && j == rounds + 1) {
                entry.classList.add("whole-team-count")
                entry.textContent = "Gesamt"
            } else if (i == 0 && j != 0) {
                entry.classList.add("round-count")
                entry.textContent = "Runde " + j
            } else if(i != 0 && j == rounds + 1) {
                var input = createInput("text", "whole-team-score", "0", () => {}, false)
                input.element.id = "whole-team-score-" + i
                entry.appendChild(input.element)
            } else if(i != 0 && j != 0) {
                var input = createInput("number", "team-score-" + i, "0", (c) => {
                    updateTable(parseInt(c.split("-")[2]))
                })

                input.element.classList.add("team-score")
                entry.appendChild(input.element)
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