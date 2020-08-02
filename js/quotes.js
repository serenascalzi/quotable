$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // August 1
        '&ldquo;All human wisdom is summed up in two words; wait and hope.&rdquo; <br /> &mdash;Alexandre Dumas',
        // July 2
        '&ldquo;If you count all your assets you always show a profit.&rdquo; <br /> &mdash;Wilson Mizner'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // August 1
        '&ldquo;The heart forgets its sorrow and ache.&rdquo; <br /> &mdash;James Russell Lowell',
        // July 2
        '&ldquo;The words of kindness are more healing to a drooping heart than balm or honey.&rdquo; <br /> &mdash;Sarah Fielding'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // August 1
        '&ldquo;All art is autobiographical. The pearl is the oyster&rsquo;s autobiography.&rdquo; <br /> &mdash;Federico Fellini',
        // July 2
        '&ldquo;Our individual lives cannot, generally, be works of art unless the social order is also.&rdquo; <br /> &mdash;Charles Horton Cooley'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})