const findVal = (head, target) => {
    if (head === target) return true;

    let currentPointer = head;

    while (currentPointer !== null) {
        if (currentPointer.val === target) return true;
        currentPointer = currentPointer.next;
    }
    return false;
}
