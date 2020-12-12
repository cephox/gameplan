import { get_team_name } from "./table"

export function create_gameplan(plan:Array<Array<string>>): HTMLElement {
    
    var ranklist = document.getElementById("ranklist")
    var team_amount = ranklist!.children.length - 1

    var div = document.createElement("div")
    div.id = "gameplan"
    
    var table = document.createElement("table")
    table.classList.add("gameplan-table")

    for(var i = 0; i < plan.length; i++) {
        var row = document.createElement("tr")
        row.classList.add("gameplan-table-row")
        row.id = "gameplan-round-" + i
        
        var round_label = document.createElement("span")
        round_label.innerHTML = "Runde " + (i + 1)

        row.appendChild(round_label)

        for(var j = 0; j < plan[i].length; j++) {
            var el = document.createElement("td")
            el.classList.add("gameplan-round-el")
            el.id = "gameplan-round-" + i + "-game-" + j

            var data = plan[i][j]

            for(var team_index = 0; team_index < team_amount; team_index++) {
                data = data.replace((team_index + 1) + "", get_team_name(team_index + 1)) 
            }

            el.innerHTML = data
            row.appendChild(el)
        }

        table.appendChild(row)
    }

    div.appendChild(table)
    return div

}

export function update_plan() {
    var ranklist = document.getElementById("ranklist")
    var team_amount = ranklist!.children.length - 1
    var plan = <HTMLDivElement>document.getElementsByClassName("gameplan-table")[0]
    var gameplan = gen_plan(team_amount)
    
    for(var i = 0; i < plan.children.length; i++) {
        for(var j = 0; j < plan.children[0].children.length; j++) {
            var el = <HTMLTableDataCellElement>document.getElementById("gameplan-round-" + i + "-game-" + j)
            var data = gameplan![i][j]

            for(var team_index = 0; team_index < team_amount; team_index++) {
                data = data.replace((team_index + 1) + "", get_team_name(team_index + 1)) 
            }

            el.innerHTML = data
        }
    }
}

export function gen_plan(teams:number) {
    if(teams < 2) {
        return;
    }

    var rounds = []

    var i = 0
    while (i < (teams - 1)) {
        var data = []
        data.push(teams + " - " + (i + 1))

        var j = 1
        while (j < teams / 2) {
            var a = (i - j)
            var b = (i + j)

            if (a < 0) {
                a += (teams - 1)
            }
            if (b > (teams - 2)) {
                b -= (teams - 1)
            }
            data.push((a + 1) + " - " + (b + 1))
            j += 1
        }
        rounds.push(data)
        i += 1
    }

    return rounds
}