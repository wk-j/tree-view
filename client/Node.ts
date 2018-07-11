import axois from "axios"

export function getNodes() {
    var api = "http://localhost:5000/api/tree/getNodes"
    return axois.get<Node[]>(api)
}

export type Node = {
    id: number
    name: string
    isRoot: boolean
    isFile: boolean
    parent: number
}