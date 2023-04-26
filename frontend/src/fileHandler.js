import axios from 'axios';

var DUMMY_HOTELS = [
    {
        id:'64483acf7f364acb1f1728f5',
        name: 'The St. Regis Atlanta',
        price: '1,725',
        ratings: '5',
        address: 'Eighty-Eight West Paces Ferry Road, Atlanta, GA, 30305',
        image:'https://images.trvl-media.com/lodging/3000000/2460000/2452500/2452497/6aeb4912.jpg?impolicy=resizecrop&rw=1200&ra=fit'
    },
    {
        id:'64483afa7f364acb1f1728f7',
        name: 'Four Seasons Hotel Atlanta',
        price: '565',
        ratings: '5',
        address: '75 14th St NE, Atlanta, GA, 30309',
        image:'https://images.trvl-media.com/lodging/1000000/30000/21000/20993/b09ca997.jpg?impolicy=resizecrop&rw=1200&ra=fit'
    },
    {
        id:'64483b127f364acb1f1728f9',
        name: 'Urban Lake House',
        price: '495',
        ratings: '4',
        address: '1665 Loch Lomond Trail SW, Atlanta, GA, 30331',
        image:'https://images.trvl-media.com/lodging/80000000/79400000/79394400/79394309/0f492ffa.jpg?impolicy=resizecrop&rw=1200&ra=fit'
    },
    {
        id:'64483b1f7f364acb1f1728fb',
        name: 'Omni Hotel At The Battery Atlanta',
        price: '483',
        ratings: '4',
        address: '2625 Circle 75 Parkway, Atlanta, GA, 30339',
        image:'https://images.trvl-media.com/lodging/20000000/19790000/19780700/19780605/9340da69.jpg?impolicy=resizecrop&rw=1200&ra=fit'
    },
    {
        id:'64483b2d7f364acb1f1728fd',
        name: 'Waldorf Astoria Atlanta Buckhead',
        price: '481',
        ratings: '5',
        address: '3376 Peachtree Rd Ne, Atlanta, GA, 30326',
        image:'https://images.trvl-media.com/lodging/2000000/1890000/1889200/1889141/cd09651b.jpg?impolicy=resizecrop&rw=1200&ra=fit'
    }
]

export function getList() {
    const sendPostRequest = async () => {
        try {
          const resp = await axios.get('http://localhost:4000/api/item')
            .then(response=>{
              //alert(response);
              console.log(response);
                DUMMY_HOTELS=response.data;
            })
            .catch(error => {
              if (error.response) {
                //alert(error.response.data.msg);
                console.log(error.response.data);  // handle errors with response data
              } else if (error.request) {
                console.log(error.request);  // handle errors with no response
              } else {
                console.log(error.message);  // handle other errors
              }
            });
        } catch (e) {
            console.error(e);
        }
      };
      sendPostRequest();
    return DUMMY_HOTELS;
}

export function addList(n, p, r, a, img) {
    const sendPostRequest = async () => {
        try {
          const resp = await axios.post('http://localhost:4000/api/item', 
            {
                name:n,
                price:p,
                ratings:r,
                address:a,
                image:img
            })
            .then(response=>{
              //alert(response);
              console.log(response);
              //setIsSignUp(false);
            })
            .catch(error => {
              if (error.response) {
                //alert(error.response.data.msg);
                console.log(error.response.data);  // handle errors with response data
              } else if (error.request) {
                console.log(error.request);  // handle errors with no response
              } else {
                console.log(error.message);  // handle other errors
              }
            });
        } catch (e) {
            console.error(e);
        }
      };
      sendPostRequest();
    DUMMY_HOTELS.push({
        name: n,
        price: p,
        ratings: r,
        address: a,
        image: img
    })
    getList();
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function editList(i, n, p, r, a, img) {
    const sendPostRequest = async () => {
        try {
          const resp = await axios.put("http://localhost:4000/api/item/"+i, 
            {
                name:n,
                price:p,
                ratings:r,
                address:a,
                image:i
            })
            .then(response=>{
              //alert(response);
              console.log(response);
              //setIsSignUp(false);
            })
            .catch(error => {
              if (error.response) {
                //alert(error.response.data.msg);
                console.log(error.response.data);  // handle errors with response data
              } else if (error.request) {
                console.log(error.request);  // handle errors with no response
              } else {
                console.log(error.message);  // handle other errors
              }
            });
        } catch (e) {
            console.error(e);
        }
      };
      sendPostRequest();
    const dataToChange = DUMMY_HOTELS.findIndex(item => {
        return item.id === i;
      });
    if (dataToChange >= 0) {
        DUMMY_HOTELS[dataToChange].name = n;
        DUMMY_HOTELS[dataToChange].price = p;
        DUMMY_HOTELS[dataToChange].ratings = r;
        DUMMY_HOTELS[dataToChange].address = a;
        DUMMY_HOTELS[dataToChange].image = img;
    }
    getList();
}

export function deleteList(i) {
    const sendPostRequest = async () => {
        try {
          const resp = await axios.delete(`http://localhost:4000/api/item/${i}`)
            .then(response=>{
              //alert(response);
              console.log(response);
              //setIsSignUp(false);
            })
            .catch(error => {
              if (error.response) {
                //alert(error.response.data.msg);
                console.log(error.response.data);  // handle errors with response data
              } else if (error.request) {
                console.log(error.request);  // handle errors with no response
              } else {
                console.log(error.message);  // handle other errors
              }
            });
        } catch (e) {
            console.error(e);
        }
      };
      sendPostRequest();
      getList();
    // const dataToChange = DUMMY_HOTELS.findIndex(item => {
    //     return item.id === i;
    // });

    // if (dataToChange > -1) { 
    //     DUMMY_HOTELS.splice(dataToChange, 1);
    // }
}

export function printList() {
    DUMMY_HOTELS.forEach(function(entry) {
        console.log(entry);
      });
}