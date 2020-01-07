$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
		// January 1
        '&ldquo;I think in terms of the day&rsquo;s resolutions, not the years&rsquo;.&rdquo; <br /> &mdash;Henry Moore',
        // January 2
        '&ldquo;The sweetest of all sounds is praise.&rdquo; <br /> &mdash;Xenophon',
        // January 3
        '&ldquo;We must be willing to let go of the life we have planned, so as to have the life that is waiting for us.&rdquo; <br /> &mdash;E. M. Forster',
        // January 4
        '&ldquo;If youth knew; if age could.&rdquo; <br /> &mdash;Sigmund Freud',
        // January 5
        '&ldquo;The art of being happy lies in the power of extracting happiness from common things.&rdquo; <br /> &mdash;Henry Ward Beecher',
        // January 6
        '&ldquo;There is nothing which we receive with so much reluctance as advice.&rdquo; <br /> &mdash;Joseph Addison',
        // January 7
        '&ldquo;Believe and act as if it were impossible to fail.&rdquo; <br /> &mdash;Charles Kettering'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
		// January 1
        '&ldquo;The giving of love is an education in itself.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        // January 2
        '&ldquo;Dear Lord, I&rsquo;m so grateful I&rsquo;m still loved.&rdquo; <br /> &mdash;Vivien Leigh',
        // January 3
        '&ldquo;Love means to commit yourself without guarantee.&rdquo; <br /> &mdash;Anne Campbell',
        // January 4
        '&ldquo;Oh, love will make a dog howl in rhyme.&rdquo; <br /> &mdash;Francis Beaumont',
        // January 5
        '&ldquo;Love is when you meet someone who tells you something new about yourself.&rdquo; <br /> &mdash;Andre Breton',
        // January 6
        '&ldquo;When we are in love we often doubt that which we most believe.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        // January 7
        '&ldquo;If fear is the great enemy of intimacy, love is its true friend.&rdquo; <br /> &mdash;Henri Nouwen'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
		// January 1
        '&ldquo;I make pictures and someone comes in and calls it art.&rdquo; <br /> &mdash;Willem de Kooning',
        // January 2
        '&ldquo;I think it is in collaboration that the nature of art is revealed.&rdquo; <br /> &mdash;Steve Lacy',
        // January 3
        '&ldquo;Art is the only way to run away without leaving home.&rdquo; <br /> &mdash;Twyla Tharp',
        // January 4
        '&ldquo;Art is science made clear.&rdquo; <br /> &mdash;Wilson Mizner',
        // January 5
        '&ldquo;Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.&rdquo; <br /> &mdash;Scott Adams',
        // January 6
        '&ldquo;I&rsquo;m not that obsessed with making representations of ugliness. Everything I&rsquo;ve seen is beautiful.&rdquo; <br /> &mdash;Otto Dix',
        // January 7
        '&ldquo;Advertising is the greatest art form of the 20th century.&rdquo; <br /> &mdash;Marshall McLuhan'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})