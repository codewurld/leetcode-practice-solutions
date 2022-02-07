// FreecodeCamp - BASIC ALGORITHM SCRIPT

function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st]
            .toLowerCase()
            .replace(newTitle[st].charAt(0), newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
}