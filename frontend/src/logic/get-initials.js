export const getInitials = (name) => {
    if (name) {
        return name
            .replace(/\s+/, ' ')
            .split(' ')
            .slice(0, 2)
            .map((v) => v && v[0].toUpperCase())
            .join('');
    } else {
        return "·_·"
    }
}
