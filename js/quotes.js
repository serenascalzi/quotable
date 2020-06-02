$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // June 1
        '&ldquo;Things start out as hopes and end up as habits.&rdquo; <br /> &mdash;Lillian Hellman',
        // June 2
        '&ldquo;If you want a thing done well, do it yourself.&rdquo; <br /> &mdash;Napoleon Bonaparte'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // June 1
        '&ldquo;When a woman is talking to you, listen to what she says with her eyes.&rdquo; <br /> &mdash;Victor Hugo',
        // June 2
        '&ldquo;Life in abundance comes only through great love.&rdquo; <br /> &mdash;Elbert Hubbard'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // June 1
        '&ldquo;Ads are the cave art of the twentieth century.&rdquo; <br /> &mdash;Marshall McLuhan',
        // June 2
        '&ldquo;An artist never really finishes his work, he merely abandons it.&rdquo; <br /> &mdash;Paul Valery'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})