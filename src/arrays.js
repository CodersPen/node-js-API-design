function find(element, arr) {
    if (element === undefined) {
        throw new Error('No way José!');
    }

    let result = null;

    arr.forEach((val) => {
        if (val === element) {
            result = val;
        }
    });

    return result;
}

module.exports = { find };
