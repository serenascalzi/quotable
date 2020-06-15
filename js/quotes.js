$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // June 1
        '&ldquo;Things start out as hopes and end up as habits.&rdquo; <br /> &mdash;Lillian Hellman',
        // June 2
        '&ldquo;If you want a thing done well, do it yourself.&rdquo; <br /> &mdash;Napoleon Bonaparte',
        // June 3
        '&ldquo;Success is getting what you want. Happiness is wanting what you get.&rdquo; <br /> &mdash;Dale Carnegie',
        // June 4
        '&ldquo;Because things are the way they are, things will not stay the way they are.&rdquo; <br /> &mdash;Bertolt Brecht',
        // June 5
        '&ldquo;Our happiness depends on wisdom all the way.&rdquo; <br /> &mdash;Sophocles',
        // June 6
        '&ldquo;Life appears to me too short to be spent in nursing animosity, or registering wrongs.&rdquo; <br /> &mdash;Charlotte Bronte',
        // June 7
        '&ldquo;Well done is better than well said.&rdquo; <br /> &mdash;Benjamin Franklin',
        // June 8
        '&ldquo;The backbone of surprise is fusing speed with secrecy.&rdquo; <br /> &mdash;Carl von Clausewitz',
        // June 9
        '&ldquo;Life is a long lesson in humility.&rdquo; <br /> &mdash;James M. Barrie',
        // June 10
        '&ldquo;Never deprive someone of hope; it might be all they have.&rdquo; <br /> &mdash;H. Jackson Brown, Jr.',
        // June 11
        '&ldquo;A true friend never gets in your way unless you happen to be going down.&rdquo; <br /> &mdash;Arnold H. Glasow',
        // June 12
        '&ldquo;Each day is the scholar of yesterday.&rdquo; <br /> &mdash;Publilius Syrus',
        // June 13
        '&ldquo;The hardest arithmetic to master is that which enables us to count our blessings.&rdquo; <br /> &mdash;Eric Hoffer',
        // June 14
        '&ldquo;Genius ain&rsquo;t anything more than elegant common sense.&rdquo; <br /> &mdash;Josh Billings',
        // June 15
        '&ldquo;It is during our darkest moments that we must focus to see the light.&rdquo; <br /> &mdash;Aristotle'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // June 1
        '&ldquo;When a woman is talking to you, listen to what she says with her eyes.&rdquo; <br /> &mdash;Victor Hugo',
        // June 2
        '&ldquo;Life in abundance comes only through great love.&rdquo; <br /> &mdash;Elbert Hubbard',
        // June 3
        '&ldquo;Love unlocks doors and opens windows that weren&rsquo;t even there before.&rdquo; <br /> &mdash;Mignon McLaughlin',
        // June 4
        '&ldquo;Give me love and work &ndash; these two only.&rdquo; <br /> &mdash;William Morris',
        // June 5
        '&ldquo;To have felt too much is to end in feeling nothing.&rdquo; <br /> &mdash;Dorothy Thompson',
        // June 6
        '&ldquo;Love and desire are the spirit&rsquo;s wings to great deeds.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        // June 7
        '&ldquo;Love is energy of life.&rdquo; <br /> &mdash;Robert Browning',
        // June 8
        '&ldquo;Love is a fruit in season at all times, and within reach of every hand.&rdquo; <br /> &mdash;Mother Teresa',
        // June 9
        '&ldquo;I don&rsquo;t know that love changes. People change. Circumstances change.&rdquo; <br /> &mdash;Nicholas Sparks',
        // June 10
        '&ldquo;Love can be unselfish, in the sense of being benevolent and generous, without being selfless.&rdquo; <br /> &mdash;Mortimer Adler',
        // June 11
        '&ldquo;But I will never stop helping and loving people the way Jesus said to.&rdquo; <br /> &mdash;Michael Jackson',
        // June 12
        '&ldquo;Imagination is at the root of much that passes for love.&rdquo; <br /> &mdash;Gilbert Parker',
        // June 13
        '&ldquo;Love is the poetry of the senses.&rdquo; <br /> &mdash;Honore de Balzac',
        // June 14
        '&ldquo;Choose your love, Love your choice.&rdquo; <br /> &mdash;Thomas S. Monson',
        // June 15
        '&ldquo;I think my mom put it best. She said, &lsquo;Little girls soften their daddy&rsquo;s hearts.&rsquo;&rdquo; <br /> &mdash;Paul Walker'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // June 1
        '&ldquo;Ads are the cave art of the twentieth century.&rdquo; <br /> &mdash;Marshall McLuhan',
        // June 2
        '&ldquo;An artist never really finishes his work, he merely abandons it.&rdquo; <br /> &mdash;Paul Valery',
        // June 3
        '&ldquo;Every artist writes his own autobiography.&rdquo; <br /> &mdash;Havelock Ellis',
        // June 4
        '&ldquo;Art is the desire of a man to express himself, to record the reactions of his personality to the world he lives in.&rdquo; <br /> &mdash;Amy Lowell',
        // June 5
        '&ldquo;An artist is a dreamer consenting to dream of the actual world.&rdquo; <br /> &mdash;George Santayana',
        // June 6
        '&ldquo;There are always two people in every picture: the photographer and the viewer.&rdquo; <br /> &mdash;Ansel Adams',
        // June 7
        '&ldquo;Are you really sure that a floor can&rsquo;t also be a ceiling?&rdquo; <br /> &mdash;M. C. Escher',
        // June 8
        '&ldquo;Art is not a handicraft, it is the transmission of feeling the artist has experienced.&rdquo; <br /> &mdash;Leo Tolstoy',
        // June 9
        '&ldquo;A guilty conscience needs to confess. A work of art is a confession.&rdquo; <br /> &mdash;Albert Camus',
        // June 10
        '&ldquo;Art is the signature of civilizations.&rdquo; <br /> &mdash;Beverly Sills',
        // June 11
        '&ldquo;The highest art is always the most religious, and the greatest artist is always a devout person.&rdquo; <br /> &mdash;Abraham Lincoln',
        // June 12
        '&ldquo;An artist must be a reactionary. He has to stand out against the tenor of the age and not go flopping along.&rdquo; <br /> &mdash;Andre Maurois',
        // June 13
        '&ldquo;Art is the most intense mode of individualism that the world has known.&rdquo; <br /> &mdash;Oscar Wilde',
        // June 14
        '&ldquo;Space is the breath of art.&rdquo; <br /> &mdash;Frank Lloyd Wright',
        // June 15
        '&ldquo;The man who has no imagination has no wings.&rdquo; <br /> &mdash;Muhammad Ali'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})