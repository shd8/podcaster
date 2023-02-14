const includeNormalizedStrings = (str1: string, str2: string): boolean => {
    return str1.normalize('NFD').toLocaleLowerCase().includes(str2.normalize('NFD').toLowerCase())
}

export {
    includeNormalizedStrings
}