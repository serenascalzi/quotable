$(document).ready(function() {
    // '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

    let januaryArray = [
        '&ldquo;An intellectual is a man who doesn&rsquo;t know how to park a bike.&rdquo; <br /> &mdash;Spiro T. Agnew',
        '&ldquo;Prediction is very difficult, especially if it&rsquo;s about the future.&rdquo; <br /> &mdash;Niels Bohr',
        '&ldquo;Unemployment is capitalism&rsquo;s way of getting you to plant a garden.&rdquo; <br /> &mdash;Orson Scott Card',
        '&ldquo;I buy expensive suits. They just look cheap on me.&rdquo; <br /> &mdash;Warren Buffett',
        '&ldquo;Expert: a man who makes three correct guesses consecutively.&rdquo; <br /> &mdash;Laurence J. Peter',
        '&ldquo;Television is chewing gum for the eyes.&rdquo; <br /> &mdash;Frank Lloyd Wright'
    ]

    let februaryArray = [
        // February Quotes
        // February 29
        '&ldquo;What does it mean to pre-board? Do you get on before you get on?&rdquo; <br /> &mdash;George Carlin'
    ]

    let marchArray = [
        // March Quotes
    ]

    let aprilArray = [
        // April Quotes
    ]

    let mayArray = [
        // May Quotes
    ]

    let juneArray = [
        // June Quotes
    ]

    let julyArray = [
        // July Quotes
    ]

    let augustArray = [
        // August Quotes
    ]

    let septemberArray = [
        // September Quotes
    ]

    let octoberArray = [
        // October Quotes
    ]

    let novemberArray = [
        // November Quotes
    ]

    let decemberArray = [
        // December Quotes
    ]

    let date = new Date()

    let month = date.getMonth()

    let monthArray = []

    if (month === 0) {
        monthArray = januaryArray
    } else if (month === 1) {
        monthArray = februaryArray
    } else if (month === 2) {
        monthArray = marchArray
    } else if (month === 3) {
        monthArray = aprilArray
    } else if (month === 4) {
        monthArray = mayArray
    } else if (month === 5) {
        monthArray = juneArray
    } else if (month === 6) {
        monthArray = julyArray
    } else if (month === 7) {
        monthArray = augustArray
    } else if (month === 8) {
        monthArray = septemberArray
    } else if (month === 9) {
        monthArray = octoberArray
    } else if (month === 10) {
        monthArray = novemberArray
    } else if (month === 11) {
        monthArray = decemberArray
    }

    let dayOfMonth = date.getDate()

    let funnyQuote = monthArray[dayOfMonth - 1]

    let funny = `<h3>${funnyQuote}</h3>`
    
    $('#funny').html(funny)
})