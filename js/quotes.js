$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // February 1
        '&ldquo;Every failure is a step to success.&rdquo; <br /> &mdash;William Whewell',
        // February 2
        '&ldquo;Kites rise highest against the wind &ndash; not with it.&rdquo; <br /> &mdash;Winston Churchill',
        // February 3
        '&ldquo;When your work speaks for itself, don&rsquo;t interrupt.&rdquo; <br /> &mdash;Henry J. Kaiser',
        // February 4
        '&ldquo;You may delay, but time will not.&rdquo; <br /> &mdash;Benjamin Franklin',
        // February 5
        '&ldquo;Dreams are necessary to life.&rdquo; <br /> &mdash;Anais Nin',
        // February 6
        '&ldquo;What sculpture is to a block of marble, education is to the soul.&rdquo; <br /> &mdash;Joseph Addison',
        // February 7
        '&ldquo;I am still learning.&rdquo; <br /> &mdash;Michelangelo'
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
        '&ldquo;I wonder what fool it was that first invented kissing.&rdquo; <br /> &mdash;Jonathan Swift',
        // February 3
        '&ldquo;Gestures, in love, are incomparably more attractive, effective and valuable than words.&rdquo; <br /> &mdash;Francois Rabelais',
        // February 4
        '&ldquo;Love is a better teacher than duty.&rdquo; <br /> &mdash;Albert Einstein',
        // February 5
        '&ldquo;My little dog &ndash; a heartbeat at my feet.&rdquo; <br /> &mdash;Edith Wharton',
        // February 6
        '&ldquo;Love in its essence is spiritual fire.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        // February 7
        '&ldquo;Woe to the man whose heart has not learned while young to hope, to love &ndash; and to put its trust in life.&rdquo; <br /> &mdash;Joseph Conrad'
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
        '&ldquo;I cry out for order and find it only in art.&rdquo; <br /> &mdash;Helen Hayes',
        // February 3
        '&ldquo;Fiction reveals truths that reality obscures.&rdquo; <br /> &mdash;Jessamyn West',
        // February 4
        '&ldquo;Art washes away from the soul the dust of everyday life.&rdquo; <br /> &mdash;Pablo Picasso',
        // February 5
        '&ldquo;Culture is the arts elevated to a set of beliefs.&rdquo; <br /> &mdash;Thomas Wolfe',
        // February 6
        '&ldquo;An artist cannot fail; it is a success to be one.&rdquo; <br /> &mdash;Charles Horton Cooley',
        // February 7
        '&ldquo;The excellency of every art is its intensity, capable of making all disagreeable evaporate.&rdquo; <br /> &mdash;John Keats'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})