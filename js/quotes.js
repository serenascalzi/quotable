$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // November 1
        '&ldquo;Silent gratitude isn&rsquo;t much use to anyone.&rdquo; <br /> &mdash;Gertrude Stein',
        // November 2
        '&ldquo;The most wasted of all days is one without laughter.&rdquo; <br /> &mdash;e. e. cummings',
        // November 3
        '&ldquo;A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.&rdquo; <br /> &mdash;George Bernard Shaw',
        // November 4
        '&ldquo;The only courage that matters is the kind that gets you from one moment to the next.&rdquo; <br /> &mdash;Mignon McLaughlin',
        // November 5
        '&ldquo;You always admire what you really don&rsquo;t understand.&rdquo; <br /> &mdash;Blaise Pascal',
        // November 6
        '&ldquo;Freedom is nothing but a chance to be better.&rdquo; <br /> &mdash;Albert Camus',
        // November 7
        '&ldquo;Voters don&rsquo;t decide issues, they decide who will decide issues.&rdquo; <br /> &mdash;George Will',
        // November 8
        '&ldquo;Never reach out your hand unless you&rsquo;re willing to extend an arm.&rdquo; <br /> &mdash;Pope Paul VI',
        // November 9
        '&ldquo;True originality consists not in a new manner but in a new vision.&rdquo; <br /> &mdash;Edith Wharton',
        // November 10
        '&ldquo;God cannot alter the past, though historians can.&rdquo; <br /> &mdash;Samuel Butler',
        // November 11
        '&ldquo;We relish news of our heroes, forgetting that we are extraordinary to somebody too.&rdquo; <br /> &mdash;Helen Hayes'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // November 1
        '&ldquo;We don&rsquo;t believe in rheumatism and true love until after the first attack.&rdquo; <br /> &mdash;Marie von Ebner-Eschenbach',
        // November 2
        '&ldquo;If you would be loved, love, and be loveable.&rdquo; <br /> &mdash;Benjamin Franklin',
        // November 3
        '&ldquo;Love is what you&rsquo;ve been through with somebody.&rdquo; <br /> &mdash;James Thurber',
        // November 4
        '&ldquo;Well-ordered self-love is right and natural.&rdquo; <br /> &mdash;Thomas Aquinas',
        // November 5
        '&ldquo;One must not trifle with love.&rdquo; <br /> &mdash;Alfred de Musset',
        // November 6
        '&ldquo;All the beautiful sentiments in the world weigh less than a single lovely action.&rdquo; <br /> &mdash;James Russell Lowell',
        // November 7
        '&ldquo;More than kisses, letters mingle souls.&rdquo; <br /> &mdash;John Donne',
        // November 8
        '&ldquo;Love is a hole in the heart.&rdquo; <br /> &mdash;Ben Hecht',
        // November 9
        '&ldquo;Love is the ultimate expression of the will to live.&rdquo; <br /> &mdash;Tom Wolfe',
        // November 10
        '&ldquo;Each moment of a happy lover&rsquo;s hour is worth an age of dull and common life.&rdquo; <br /> &mdash;Aphra Behn',
        // November 11
        '&ldquo;Unable are the loved to die, for love is immortality.&rdquo; <br /> &mdash;Emily Dickinson'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // November 1
        '&ldquo;In the future, everyone will be famous for 15 minutes.&rdquo; <br /> &mdash;Andy Warhol',
        // November 2
        '&ldquo;What art offers is space &ndash; a certain breathing room for the spirit.&rdquo; <br /> &mdash;John Updike',
        // November 3
        '&ldquo;Art is dangerous. It is one of the attractions: when it ceases to be dangerous you don&rsquo;t want it.&rdquo; <br /> &mdash;Duke Ellington',
        // November 4
        '&ldquo;Art is a step from what is obvious and well-known toward what is arcane and concealed.&rdquo; <br /> &mdash;Khalil Gibran',
        // November 5
        '&ldquo;Art attracts us only by what it reveals of our most secret self.&rdquo; <br /> &mdash;Alfred North Whitehead',
        // November 6
        '&ldquo;Every production of an artist should be the expression of an adventure of his soul.&rdquo; <br /> &mdash;W. Somerset Maugham',
        // November 7
        '&ldquo;I think you can leave the arts, superior or inferior, to the conscience of mankind.&rdquo; <br /> &mdash;William Butler Yeats',
        // November 8
        '&ldquo;Love of beauty is taste. The creation of beauty is art.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        // November 9
        '&ldquo;Nature scarcely ever gives us the very best; for that we must have recourse to art.&rdquo; <br /> &mdash;Baltasar Gracian',
        // November 10
        '&ldquo;I continue to get further away from the usual painter&rsquo;s tools such as easel, palette, brushes, etc.&rdquo; <br /> &mdash;Jackson Pollock',
        // November 11
        '&ldquo;The best thing commercially, which is the worst artistically, by and large, is the most successful.&rdquo; <br /> &mdash;Orson Welles'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})