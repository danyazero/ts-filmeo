export function imageSizeSelector(link: string, large: boolean){
    if (!large) link = link.replace("large", "small")
    return link
}