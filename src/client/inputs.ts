type inputType = "text" | "number"

export function createInput(type:inputType, clazz:string, value:any, onchange: (clazz:string) => any, editable=true) {
    var input = document.createElement("input");
    input.onchange = (ev) => {
        onchange(clazz)
    }
    input.classList.add(clazz)
    input.value = value
    
    if(!editable) {
        input.onkeypress = (ev) => {
            ev.preventDefault()
        }
    }

    if(type == "number") {
        input.onkeypress = (ev) => {
            if (!ev.code.startsWith("Digit") && !ev.code.startsWith("Numpad") && !ev.code.startsWith("Slash")) {
                ev.preventDefault()
            }

            if(!editable) {
                ev.preventDefault()
            }
        }
    }

    return {
        collect: () => input.value,
        element: input
    }
}
