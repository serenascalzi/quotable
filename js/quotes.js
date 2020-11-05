$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // November 1
        '&ldquo;Silent gratitude isn&rsquo;t much use to anyone.&rdquo; <br /> &mdash;Gertrude Stein',
        // November 2
        '&ldquo;The most wasted of all days is one without laughter.&rdquo; <br /> &mdash;e. e. cummings',
        // November 3
        '&ldquo;A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.&rdquo; <br /> &mdash;George Bernard Shaw'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // November 1
        '&ldquo;We don&rsquo;t believe in rheumatism and true love until after the first attack.&rdquo; <br /> &mdash;Marie von Ebner-Eschenbach',
        // November 2
        '&ldquo;If you would be loved, love, and be loveable.&rdquo; <br /> &mdash;Benjamin Franklin',
        // November 3
        '&ldquo;Love is what you&rsquo;ve been through with somebody.&rdquo; <br /> &mdash;James Thurber'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // November 1
        '&ldquo;In the future, everyone will be famous for 15 minutes.&rdquo; <br /> &mdash;Andy Warhol',
        // November 2
        '&ldquo;What art offers is space &ndash; a certain breathing room for the spirit.&rdquo; <br /> &mdash;John Updike',
        // November 3
        '&ldquo;Art is dangerous. It is one of the attractions: when it ceases to be dangerous you don&rsquo;t want it.&rdquo; <br /> &mdash;Duke Ellington'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})