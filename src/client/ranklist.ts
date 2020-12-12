import { get_team_name, get_team_score } from "./table"

export function create_ranklist(teams:number): HTMLElement {
    var element = document.createElement("div")
    element.id = "ranklist"

    var header = document.createElement("div")
    header.classList.add("ranklist-header")
    
    var header_team = document.createElement("div")
    header_team.innerHTML = "Team"
    header_team.classList.add("ranklist-header-team")
    
    var header_score = document.createElement("div")
    header_score.innerHTML = "Score"
    header_score.classList.add("ranklist-header-score")

    header.appendChild(header_team)
    header.appendChild(header_score)

    element.appendChild(header)

    var container = document.createElement("div")
    container.classList.add("ranklist-content")

    for(var i = 0; i < teams; i++) {

        var item = document.createElement("div")
        item.classList.add("ranklist-place")
        item.id = "ranklist-place-" + i
        
        var name = document.createElement("div")
        name.innerHTML = get_team_name(i + 1)
        name.classList.add("ranklist-name")
        name.id = "ranklist-name-" + i

        var score = document.createElement("div")
        score.innerHTML = get_team_score(i + 1) + ""
        score.classList.add("ranklist-score")
        score.id = "ranklist-score-" + i
        
        item.appendChild(name);
        item.appendChild(score);
        container.appendChild(item)
    }
    element.appendChild(container)
    return element
}

export function update_ranklist() {
    var ranklist = document.getElementById("ranklist")
    var team_amount = ranklist!.children[1].children.length

    var list = []

    for(var i = 0; i < team_amount; i++) {
        list.push({name: get_team_name(i + 1), score: get_team_score(i + 1)})
    }

    list.sort(function(a, b) {
        return b.score - a.score
    })

    for(var i = 0; i < team_amount; i++) {
        var name = <HTMLElement>document.getElementById("ranklist-name-" + i)
        var score = <HTMLElement>document.getElementById("ranklist-score-" + i)

        name.innerHTML = list[i].name
        score.innerHTML = list[i].score + ""
    }
}
