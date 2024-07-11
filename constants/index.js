export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png')
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/pizzaIcon.png')
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/pizzaIcon.png')
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/pizzaIcon.png')
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/pizzaIcon.png')
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/pizzaIcon.png')
    }
]

export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            "id": 1,
            "name": "Papa Johns",
            "image": require('../assets/images/pizza.png'),
            "description": "Hot and spicy pizzas",
            "lng": 38.2145602,
            "lat": -85.5324269,
            "address": "434 second street",
            "stars": 4,
            "reviews": "4.4k",
            "category": "Fast Food",
            "dishes": [
              {
                "id": 1,
                "name": "pizza",
                "description": "cheezy garlic pizza",
                "price": 10,
                "image": require('../assets/images/pizzaDish.png')
              },
              {
                "id": 2,
                "name": "pizza",
                "description": "cheezy garlic pizza",
                "price": 10,
                "image": require('../assets/images/pizzaDish.png')
              }
            ]
        },
        {
            "id": 2,
            "name": "Vicky's",
            "image": require('../assets/images/pizza.png'),
            "description": "Hot and spicy pizzas",
            "lng": 40.2145602,
            "lat": -80.5324269,
            "address": "434 first street",
            "stars": 5,
            "reviews": "50k",
            "category": "Cuban",
            "dishes": [
              {
                "id": 1,
                "name": "chorizo",
                "description": "cheezy garlic pizza",
                "price": 10,
                "image": require('../assets/images/pizzaDish.png')
              },
              {
                "id": 2,
                "name": "croqueta",
                "description": "cheezy garlic pizza",
                "price": 10,
                "image": require('../assets/images/pizzaDish.png')
              }
            ]
        }
          
    ]
}