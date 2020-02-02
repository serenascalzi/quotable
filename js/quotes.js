$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // February 1
        '&ldquo;Every failure is a step to success.&rdquo; <br /> &mdash;William Whewell',
        // February 2
        '&ldquo;Kites rise highest against the wind &ndash; not with it.&rdquo; <br /> &mdash;Winston Churchill'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // February 1
        '&ldquo;Love implies anger. The man who is angered by nothing cares about nothing.&rdquo; <br /> &mdash;Edward Abbey',
        // February 2
        '&ldquo;I wonder what fool it was that first invented kissing.&rdquo; <br /> &mdash;Jonathan Swift'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // February 1
        '&ldquo;The rule in the art world is: you cater to the masses or you kowtow to the elite; you can&rsquo;t have both.&rdquo; <br /> &mdash;Ben Hecht',
        // February 2
        '&ldquo;I cry out for order and find it only in art.&rdquo; <br /> &mdash;Helen Hayes'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})