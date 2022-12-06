class restaurantManager {
   restaurentList =  [
    {
        id: 1,
        restaurantName: 'KFC',
        address: 'Anand Vihar',
        city: 'Delhi'
    },
    {
        id: 2,
        restaurantName: 'Domino',
        address: 'Savita Vihar',
        city: 'Delhi'
    },
    {
        id: 3,
        restaurantName: 'Burger King',
        address: 'Civil Line',
        city: 'Pune'
    },
    {
        id: 4,
        restaurantName: 'Subway',
        address: 'Cantonment',
        city: 'Mumbai'
    }
   ]

//    part 1(b)
   printAllRestaurantNames = ()=>{
    return  this.restaurentList.map((data) =>{
        return data.restaurantName
    })
   }

//    part 1(c)
filterRestaurantByCity = (cityName) =>{
    return this.restaurentList.filter((data) =>{
        return data.city === cityName
    })
}
}

let RestData = new restaurantManager()

console.log( RestData.restaurentList)
console.log(RestData.printAllRestaurantNames())

console.log(RestData.filterRestaurantByCity('Delhi'))


// Question : 2 

var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    };

    // answer 2(a)
let Out = 0;

for(key in orderData){
    Out += orderData[key]
}

console.log(Out)

// answer 3(c)

function percentValue(orderData){
    let total = 0;
    for(key in orderData){
        total += Number(orderData[key])
    }

    let Output = [];
    let count = 0;
    for(key in orderData){
        let percent =  ((orderData[key]/ total) *100).toFixed(2);
        count = count+1
        let myObj = {};
        myObj.id = count;
        myObj.orderData = key;
        myObj.percent =percent;
        myObj.restaurent = "Punjabi Tadka";
        Output.push(myObj)

    }
    return Output;

}

console.log(percentValue(orderData))