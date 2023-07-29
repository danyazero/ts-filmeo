export function keyGenerator(){
    return Math.floor(Math.random() * Date.now()).toString(36).slice(0, 8);
}