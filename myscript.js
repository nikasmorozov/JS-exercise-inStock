// let products = [];

// let selectedProducts = products.filter(function(product) {
//     return product.selected;
// });

// let ifInStock = selectedProducts.reduce(function(accumulator, currentValue) {
//     if (currentValue.stock > 2) {
//         accumulator.inStock.push(currentValue)
//     }
//     if (currentValue.stock <= 2 && currentValue.stock > 0) {
//         accumulator.smallStock.push(currentValue)
//     }
//     if (currentValue.stock == 0) {
//         accumulator.outOfStock.push(currentValue)
//     }
//     return accumulator
// }, {inStock: [], smallStock: [], outOfStock: [] });



async function ifIncluded() {
    const response = await fetch('http://academy-year-2019.herokuapp.com/week-3/party');
    const peopleArrayOne = await response.json();
    peopleArrayOne.filter(function (person) {
        if (person.name == "Nikas Morozov" && person.vip) {
            console.log(person.name + ' is included and his VIP status is ' + person.vip);
        };
    });
};
ifIncluded();



function ifAttending() {
    fetch('https://academy-year-2019.herokuapp.com/week-3/wedding')
        .then((resp) => resp.json())
        .then(
            function (data) {
                let filteredArray = data.filter(function (person) {
                    return person.attending
                });
                let plusOneArray = filteredArray.filter(function (person) {
                    return person.plusOne
                });
                let ifAttending = data.some((value) => {
                    return value.attending
                });
                if (ifAttending) {
                    console.log('at least one is attending')
                };
                console.log(filteredArray);
                console.log(plusOneArray);

            })
        .catch(function () {
            console.log("error");
        });
};
ifAttending();