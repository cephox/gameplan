const get_root = () => document.getElementById("activity-root")

export function append_element(el: HTMLElement) {
    get_root()?.appendChild(el)
}
