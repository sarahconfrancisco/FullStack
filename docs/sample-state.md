```js

state when searching:

{
  {
  currentUser: {
    id: 1,
    fname: "sarah",
    lname: "confrancisco",
    zip: 07481
  },

  restaurants: {
    1: { name: 'dunkin donuts',
        address: '101 main street',
        city: 'ridgewood',
        state: 'nj',
        zip: 07451,
        longitude: 24.689843,
        latitude: 12.7202,
        rating: 3.5,
        price: 1,
        phone: 2015554509,
        website: null,
        hours: {
          sun: [0, 24],
          mon: [0, 24],
          tue: [0, 24],
          wed: [0, 24],
          thu: [0, 24],
          fri: [0, 24],
          sat: [0, 24]
        },
        delivery: false,
        pick_up: false,
        reservations: false,
        parking: true,
        outdoor: true,
        credit: true,
        bar: false,
        byob: false,
        types: ["coffee", "donuts", "breakfast", "lunch"],
        photos: { 2: {
          data: 1010101010000010111111100010101
          },
        5: {
          data: 0000101011111101010010010101000
          }
        }

    },
    12: { name: 'starbucks',
        address: '1 main street',
        city: 'ridgewood',
        state: 'nj',
        zip: 07451,
        longitude: 2.456,
        latitude: 43.2359,
        rating: 3.0,
        price: 2,
        phone: 2013334509,
        website: null,
        hours: {
          sun: [0, 24],
          mon: [0, 24],
          tue: [0, 24],
          wed: [0, 24],
          thu: [0, 24],
          fri: [0, 24],
          sat: [0, 24]
        },
        delivery: false,
        pick_up: true,
        reservations: false,
        parking: true,
        outdoor: true,
        credit: true,
        bar: false,
        byob: false,
        types: ["coffee", "tea", "breakfast", "snack"],
        photos: { 1: {
          data: 1010101010000010111111100010101
          },
        3: {
          data: 0000101011111101010010010101000
          }
        }

    }
  }
},

reviews: null,
typeFilters: ["coffee"],
featureFilters: [credit: true, zip: 07451, outdoor: true]
}


state on a restaurant show page:

{
  {
  currentUser: {
    id: 1,
    fname: "sarah",
    lname: "confrancisco",
    zip: 07481
  },

  restaurants: {
    1: { name: 'dunkin donuts',
        address: '101 main street',
        city: 'ridgewood',
        state: 'nj',
        zip: 07451,
        longitude: 24.689843,
        latitude: 12.7202,
        rating: 3.5,
        price: 1,
        phone: 2015554509,
        website: null,
        hours: {
          sun: [0, 24],
          mon: [0, 24],
          tue: [0, 24],
          wed: [0, 24],
          thu: [0, 24],
          fri: [0, 24],
          sat: [0, 24]
        },
        delivery: false,
        pick_up: false,
        reservations: false,
        parking: true,
        outdoor: true,
        credit: true,
        bar: false,
        byob: false,
        types: ["coffee", "donuts", "breakfast", "lunch"],
        photos: { 2: {
          data: 1010101010000010111111100010101
          },
        5: {
          data: 0000101011111101010010010101000
          }
        }

    }
},

reviews: { 1: {
  user_id: 1,
  restaurant_id: 1,
  rating: 4,
  body: "jelly is the best",
  date: '01/03/2017',
  photos: null
  },
  { 3: {
    user_id: 2,
    restaurant_id: 1,
    rating: 2,
    body: "coffee was weak",
    date: '02/04/2017',
    photos: null
    }

},
typeFilters: [],
featureFilters: []
}


```
