$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // March 1
        '&ldquo;Everything&rsquo;s got a moral, if only you can find it.&rdquo; <br /> &mdash;Lewis Carroll',
        // March 2
        '&ldquo;The whole secret of life is to be interested in one thing profoundly and in a thousand things well.&rdquo; <br /> &mdash;Horace Walpole',
        // March 3
        '&ldquo;Everything has been figured out, expect how to live.&rdquo; <br /> &mdash;Jean-Paul Sartre'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // March 1
        '&ldquo;People who throw kisses are hopelessly lazy.&rdquo; <br /> &mdash;Bob Hope',
        // March 2
        '&ldquo;Who, being loved, is poor?&rdquo; <br /> &mdash;Oscar Wilde',
        // March 3
        '&ldquo;We waste time looking for the perfect lover, instead of creating the perfect love.&rdquo; <br /> &mdash;Tom Robbins'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // March 1
        '&ldquo;Every picture shows a spot with which the artist has fallen in love.&rdquo; <br /> &mdash;Alfred Sisley',
        // March 2
        '&ldquo;An empty canvas is full.&rdquo; <br /> &mdash;Robert Rauschenberg',
        // March 3
        '&ldquo;Rationalism is the enemy of art, though necessary as a basis for architecture.&rdquo; <br /> &mdash;Arthur Erickson'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})