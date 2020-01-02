$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
		// December 31 (TEST)
		'&ldquo;Be at war with your vices, at peace with your neighbors, and let every new year find you a better man.&rdquo; <br /> &mdash;Benjamin Franklin',
        // January 1
        '&ldquo;I think in terms of the day&rsquo;s resolutions, not the years&rsquo;.&rdquo; <br /> &mdash;Henry Moore',
        // January 2
        '&ldquo;The sweetest of all sounds is praise.&rdquo; <br /> &mdash;Xenophon'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
		// December 31 (TEST)
		'&ldquo;With our love, we could save the world.&rdquo; <br /> &mdash;George Harrison',
        // January 1
        '&ldquo;The giving of love is an education in itself.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        // January 2
        '&ldquo;Dear Lord, I&rsquo;m so grateful I&rsquo;m still loved.&rdquo; <br /> &mdash;Vivien Leigh'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
		// December 31 (TEST)
		'&ldquo;The job of the artist is always to deepen the mystery.&rdquo; <br /> &mdash;Francis Bacon',
        // January 1
        '&ldquo;I make pictures and someone comes in and calls it art.&rdquo; <br /> &mdash;Willem de Kooning',
        // January 2
        '&ldquo;I think it is in collaboration that the nature of art is revealed.&rdquo; <br /> &mdash;Steve Lacy'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})