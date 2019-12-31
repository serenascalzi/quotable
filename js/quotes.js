$(document).ready(function() {
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
		// December 31
		'&ldquo;Be at war with your vices, at peace with your neighbors, and let every new year find you a better man.&rdquo; <br /> &mdash;Benjamin Franklin'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
		// December 31
		'&ldquo;With our love, we could save the world.&rdquo; <br /> &mdash;George Harrison'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
		// December 31
		'&ldquo;The job of the artist is always to deepen the mystery.&rdquo; <br /> &mdash;Francis Bacon'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})