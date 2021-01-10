$(document).ready(function() {
    // '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

    let januaryArray = [
        '&ldquo;I believe that if one always looked at the skies, one would end up with wings.&rdquo; <br /> &mdash;Gustave Flaubert',
        '&ldquo;It is a matter of shame that in the morning the birds should be awake earlier than you.&rdquo; <br /> &mdash;Abu Bakr',
        '&ldquo;Even in winter an isolated patch of snow has a special quality.&rdquo; <br /> &mdash;Andy Goldsworthy',
        '&ldquo;The least movement is of importance to all nature. The entire ocean is affected by a pebble.&rdquo; <br /> &mdash;Blaise Pascal',
        '&ldquo;I perhaps owe having become a painter to flowers.&rdquo; <br /> &mdash;Claude Monet',
        '&ldquo;I did not become a vegetarian for my health, I did it for the health of the chickens.&rdquo; <br /> &mdash;Isaac Bashevis Singer',
        '&ldquo;My boy, one small breeze doesn&rsquo;t make a wind storm.&rdquo; <br /> &mdash;John McGraw',
        '&ldquo;If people think nature is their friend, then they sure don&rsquo;t need an enemy.&rdquo; <br /> &mdash;Kurt Vonnegut',
        '&ldquo;The fall of dropping water wears away the Stone.&rdquo; <br /> &mdash;Lucretius'
    ]

    let februaryArray = [
        // February Quotes
        // February 29
        '&ldquo;The stars that have most glory have no rest.&rdquo; <br /> &mdash;Samuel Daniel'
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

    let natureQuote = monthArray[dayOfMonth - 1]

    let nature = `<h3>${natureQuote}</h3>`
    
    $('#nature').html(nature)
})