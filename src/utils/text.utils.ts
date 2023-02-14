const includeNormalizedStrings = (str1: string, str2: string): boolean => {
    return str1.trim().normalize('NFD').toLocaleLowerCase().includes(str2.trim().normalize('NFD').toLowerCase())
}

export {
    includeNormalizedStrings
}