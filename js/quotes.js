$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // September 1
        '&ldquo;Only the wisest and stupidest of men never change.&rdquo; <br /> &mdash;Confucius',
        // September 2
        '&ldquo;Between saying and doing, many a pair of shoes is worn out.&rdquo; <br /> &mdash;Iris Murdoch',
        // September 3
        '&ldquo;Leap, and the net will appear.&rdquo; <br /> &mdash;John Burroughs'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // September 1
        '&ldquo;All love shifts and changes. I don&rsquo;t know if you can be wholeheartedly in love all the time.&rdquo; <br /> &mdash;Julie Andrews',
        // September 2
        '&ldquo;I think it is all a matter of love: the more you love a memory, the stronger and stranger it is.&rdquo; <br /> &mdash;Vladimir Nabokov',
        // September 3
        '&ldquo;Love is like an hourglass, with the heart filling up as the brain empties.&rdquo; <br /> &mdash;Jules Renard'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // September 1
        '&ldquo;A good photograph is knowing where to stand.&rdquo; <br /> &mdash;Ansel Adams',
        // September 2
        '&ldquo;Never buy four C-plus paintings when you can buy one A.&rdquo; <br /> &mdash;Walter Annenberg',
        // September 3
        '&ldquo;Pictures must not be too picturesque.&rdquo; <br /> &mdash;Ralph Waldo Emerson'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})