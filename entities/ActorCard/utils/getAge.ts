export function getAge(birthday: string) {
    const bornDate = new Date(birthday)
    const today = new Date();
    let age = today.getFullYear() - bornDate.getFullYear();
    const m = today.getMonth() - bornDate.getMonth();

    if (m < 0 || (m == 0 && today.getDate() < bornDate.getDate())) {
        age--;
    }

    return age
}