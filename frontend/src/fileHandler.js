const DUMMY_HOTELS= [
    {
        id:'H1',
        name: 'Hotel 1',
        price: '1000',
        ratings: '4',
        address: 'abc efg',
        image:'https://picsum.photos/325/350?random=1'
    },
    {
        id:'H2',
        name: 'Hotel 2',
        price: '2000',
        ratings: '1',
        address: 'abc efg',
        image:'https://picsum.photos/325/350?random=2'
    },
    {
        id:'H3',
        name: 'Hotel 3',
        price: '3000',
        ratings: '2',
        address: 'abc efg',
        image:'https://picsum.photos/325/350?random=3'
    },
    {
        id:'H4',
        name: 'Hotel 4',
        price: '4000',
        ratings: '3',
        address: 'abc efg',
        image:'https://picsum.photos/325/350?random=4'
    }
]

export function getList() {
    return DUMMY_HOTELS;
}

export function addList(i, n, p, r, a, img) {
    DUMMY_HOTELS.push({
        id: i,
        name: n,
        price: p,
        ratings: r,
        address: a,
        image: img
    })
}

export function editList(i, n, p, r, a, img) {
    const dataToChange = DUMMY_HOTELS.findIndex(item => {
        return item.id === i;
      });
      
      DUMMY_HOTELS[dataToChange].name = n;
      DUMMY_HOTELS[dataToChange].price = p;
      DUMMY_HOTELS[dataToChange].rating = r;
      DUMMY_HOTELS[dataToChange].address = a;
      DUMMY_HOTELS[dataToChange].image = img;
}

export function deleteList(i) {
    const dataToChange = DUMMY_HOTELS.findIndex(item => {
        return item.id === i;
    });

    if (dataToChange > -1) { 
        DUMMY_HOTELS.splice(dataToChange, 1);
    }
}