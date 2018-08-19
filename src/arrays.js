function find(element, arr) {
    if (element === undefined) {
        throw new Error('No way José!');
    }

    for (let val of arr) {
        if (element == val) {
            return element;
        }
    }

    return null;
}

module.exports = { find };
