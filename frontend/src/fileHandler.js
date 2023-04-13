import React from "react";

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

function fileHandler(props){
    function getList() {
        return DUMMY_HOTELS;
    }
}


export default fileHandler