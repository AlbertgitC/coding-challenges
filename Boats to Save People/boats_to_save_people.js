function numRescueBoats(people, limit) {
    people.sort(function (a, b) {
        return a - b;
    });
    let boats = 0;
    while (people.length > 0) {
        if (people.length === 1) {
            boats++;
            break;
        };
        let lightest = people[0];
        let heaviest = people[people.length - 1];

        if (lightest + heaviest <= limit) {
            people.pop();
            people.shift();
            boats++;
        } else {
            people.pop();
            boats++;
        };
    };
    return boats;
};