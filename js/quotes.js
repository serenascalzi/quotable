$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // July 1
        '&ldquo;Words are but pictures of our thoughts.&rdquo; <br /> &mdash;John Dryden',
        // July 2
        '&ldquo;The very essence of instinct is that it&rsquo;s followed independently of reason.&rdquo; <br /> &mdash;Charles Darwin',
        // July 3
        '&ldquo;Freedom means the opportunity to be what we never thought we would be.&rdquo; <br /> &mdash;Daniel J. Boorstin',
        // July 4
        '&ldquo;What then is freedom? The power to live as one wishes.&rdquo; <br /> &mdash;Marcus Tullius Cicero'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // July 1
        '&ldquo;If it were not for hopes, the heart would break.&rdquo; <br /> &mdash;Thomas Fuller',
        // July 2
        '&ldquo;They do not love that do not show their love.&rdquo; <br /> &mdash;William Shakespeare',
        // July 3
        '&ldquo;To love abundantly is to live abundantly, and to love forever is to live forever.&rdquo; <br /> &mdash;Henry Drummond',
        // July 4
        '&ldquo;He who loves, flies, runs, and rejoices; he is free and nothing holds him back.&rdquo; <br /> &mdash;Henri Matisse'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // July 1
        '&ldquo;I choose a block of marble and chop off whatever I don&rsquo;t need.&rdquo; <br /> &mdash;Auguste Rodin',
        // July 2
        '&ldquo;A work of art that contains theories is like an object on which the price tag has been left.&rdquo; <br /> &mdash;Alexander Pope',
        // July 3
        '&ldquo;To draw you must close your eyes and sing.&rdquo; <br /> &mdash;Pablo Picasso',
        // July 4
        '&ldquo;The work of art is a scream of freedom.&rdquo; <br /> &mdash;Christo'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})