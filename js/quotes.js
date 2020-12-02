$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // December 1
        '&ldquo;Courage is found in unlikely places.&rdquo; <br /> &mdash;J. R. R. Tolkien',
        // December 2
        '&ldquo;No man was ever wise by chance.&rdquo; <br /> &mdash;Lucius Annaeus Seneca'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // December 1
        '&ldquo;It&rsquo;s important for us to latch onto the people that we love.&rdquo; <br /> &mdash;Connie Stevens',
        // December 2
        '&ldquo;Our first and last love is self-love.&rdquo; <br /> &mdash;Christian Nestell Bovee'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // December 1
        '&ldquo;Classic art was the art of necessity: modern romantic art bears the stamp of caprice and chance.&rdquo; <br /> &mdash;Max Eastman',
        // December 2
        '&ldquo;I never know what I&rsquo;m going to put on the canvas. The canvas paints itself. I&rsquo;m just the middleman.&rdquo; <br /> &mdash;Peter Max'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})