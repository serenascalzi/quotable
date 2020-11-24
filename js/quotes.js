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
        '&ldquo;We relish news of our heroes, forgetting that we are extraordinary to somebody too.&rdquo; <br /> &mdash;Helen Hayes',
        // November 12
        '&ldquo;It is better to rust out than wear out.&rdquo; <br /> &mdash;Edwin Markham',
        // November 13
        '&ldquo;Faith is the strength by which a shattered world shall emerge into the light.&rdquo; <br /> &mdash;Helen Keller',
        // November 14
        '&ldquo;The best way to make your dreams come true is to wake up.&rdquo; <br /> &mdash;Paul Valery',
        // November 15
        '&ldquo;Hindsight is always twenty-twenty.&rdquo; <br /> &mdash;Billy Wilder',
        // November 16
        '&ldquo;The undertaking of a new action brings new strength.&rdquo; <br /> &mdash;Richard L. Evans',
        // November 17
        '&ldquo;If you do not conquer self, you will be conquered by self.&rdquo; <br /> &mdash;Napoleon Hill',
        // November 18
        '&ldquo;Start with what is right rather than what is acceptable.&rdquo; <br /> &mdash;Franz Kafka',
        // November 19
        '&ldquo;Laughter is the sun that drives winter from the human face.&rdquo; <br /> &mdash;Victor Hugo',
        // November 20
        '&ldquo;Change is the end result of all true learning.&rdquo; <br /> &mdash;Leo Buscaglia'
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
        '&ldquo;Unable are the loved to die, for love is immortality.&rdquo; <br /> &mdash;Emily Dickinson',
        // November 12
        '&ldquo;Fortune and love favor the brave.&rdquo; <br /> &mdash;Ovid',
        // November 13
        '&ldquo;To say &lsquo;I love you&rsquo; one must first be able to say the &lsquo;I.&rsquo;&rdquo; <br /> &mdash;Ayn Rand',
        // November 14
        '&ldquo;The ear is the avenue to the heart.&rdquo; <br /> &mdash;Voltaire',
        // November 15
        '&ldquo;Tell me who admires and loves you, and I will tell you who you are.&rdquo; <br /> &mdash;Antoine de Saint-Exupery',
        // November 16
        '&ldquo;Only love interests me, and I am only in contact with things that revolve around love.&rdquo; <br /> &mdash;Marc Chagall',
        // November 17
        '&ldquo;But surely for everything you have to love you have to pay some price.&rdquo; <br /> &mdash;Agatha Christie',
        // November 18
        '&ldquo;Love him and let him love you. Do you think anything else under heaven really matters?&rdquo; <br /> &mdash;James Baldwin',
        // November 19
        '&ldquo;Love is the difficult realization that something other than oneself is real.&rdquo; <br /> &mdash;Iris Murdoch',
        // November 20
        '&ldquo;A loving heart is the truest wisdom.&rdquo; <br /> &mdash;Charles Dickens'
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
        '&ldquo;The best thing commercially, which is the worst artistically, by and large, is the most successful.&rdquo; <br /> &mdash;Orson Welles',
        // November 12
        '&ldquo;An artist is not paid for his labor but for his vision.&rdquo; <br /> &mdash;James Whistler',
        // November 13
        '&ldquo;Beauty in art is often nothing but ugliness subdued.&rdquo; <br /> &mdash;Jean Rostand',
        // November 14
        '&ldquo;Simplicity and repose are the qualities that measure the true value of any work of art.&rdquo; <br /> &mdash;Frank Lloyd Wright',
        // November 15
        '&ldquo;If it can be written, or thought, it can be filmed.&rdquo; <br /> &mdash;Stanley Kubrick',
        // November 16
        '&ldquo;Art in Nature is rhythmic and has a horror of constraint.&rdquo; <br /> &mdash;Robert Delaunay',
        // November 17
        '&ldquo;Those who do not want to imitate anything, produce nothing.&rdquo; <br /> &mdash;Salvador Dali',
        // November 18
        '&ldquo;I realize that every picture isn&rsquo;t a work of art.&rdquo; <br /> &mdash;Conrad Hall',
        // November 19
        '&ldquo;Art depends on luck and talent.&rdquo; <br /> &mdash;Francis Ford Coppola',
        // November 20
        '&ldquo;Good art is art that allows you to enter it from a variety of angles and to emerge with a variety of views.&rdquo; <br /> &mdash;Mary Schmich'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})