export function addElementToSizedArray(prevArray: string[], addElement: string, maxLength: number){
    let history: string[] = []
    history.push(addElement)
    prevArray = prevArray.filter(element => element != addElement)
    if (prevArray.length > maxLength){
        history = prevArray.slice(1).concat(history)
    }else {
        history = prevArray.concat(history)
    }

    return history;
}