const blog = require("../models/blog")

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {

    let likes = []

    const reducer = (sum, item) => {
        return sum + item
    }

    blogs.forEach(element => {
        likes.push(element['likes'])
    });


    console.log(Math.max(...likes))


    return likes.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {

    let likes = []

    const reducer = (sum, item) => {
        return sum + item
    }

    blogs.forEach(element => {
        likes.push(element['likes'])
    });


    const largest = (Math.max(...likes))


    return blogs[likes.findIndex(element => element === largest)]
} 


const mostBlogs = (blogs) => {

    let likes = []

    const reducer = (sum, item) => {
        return sum + item
    }

    blogs.forEach(element => {
        likes.push(element['blogs'])
    });


    const largest = (Math.max(...likes))


    return blogs[likes.findIndex(element => element === largest)]['author']
} 

const mostLikes = (blogs) => {

    let likes = []

    const reducer = (sum, item) => {
        return sum + item
    }

    blogs.forEach(element => {
        likes.push(element['likes'])
    });


    const largest = (Math.max(...likes))


    return blogs[likes.findIndex(element => element === largest)]['author']
} 

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }