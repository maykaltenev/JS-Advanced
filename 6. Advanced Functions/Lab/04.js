function solve(data, criteria) {
    let parseData = JSON.parse(data)

    if (criteria == 'all') {
        print(parseData);
        return
    }

    let [criteriaKey, criteriaValue] = criteria.split('-');
    let filteredData = parseData.filter(el => el[criteriaKey] == criteriaValue);
    print(filteredData)
    function print(data) {
        data.forEach((el, i) => {
            let fullName = `${el.first_name} ${el.last_name}`;
            console.log(`${i}. ${fullName} - ${el.email}`);
        });
    }
}

filterEmployees([{ "id": "1", "first_name": "Kaylee", "last_name": "Johnson", "email": "k0@cnn.com", "gender": "Female" }
    , { "id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }
    , { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }
    , { "id": "4", "first_name": "Evanne", "last_name": "Maldina", "email": "ev2@hostgator.com", "gender": "Male" }],
    'last_name - Johnson')
   