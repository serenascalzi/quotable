$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // July 1
        '&ldquo;Words are but pictures of our thoughts.&rdquo; <br /> &mdash;John Dryden',
        // July 2
        '&ldquo;The very essence of instinct is that it&rsquo;s followed independently of reason.&rdquo; <br /> &mdash;Charles Darwin',
        // July 3
        '&ldquo;Freedom means the opportunity to be what we never thought we would be.&rdquo; <br /> &mdash;Daniel J. Boorstin',
        // July 4
        '&ldquo;What then is freedom? The power to live as one wishes.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        // July 5
        '&ldquo;We must build dikes of courage to hold back the flood of fear.&rdquo; <br /> &mdash;Martin Luther King, Jr.',
        // July 6
        '&ldquo;The return we reap from generous actions is not always evident.&rdquo; <br /> &mdash;Francesco Guicciardini',
        // July 7
        '&ldquo;When one burns one&rsquo;s bridges, what a very nice fire it makes.&rdquo; <br /> &mdash;Dylan Thomas',
        // July 8
        '&ldquo;Imagination and fiction make up more than three quarters of our real life.&rdquo; <br /> &mdash;Simone Weil',
        // July 9
        '&ldquo;My father always used to say that when you die, if you&rsquo;ve got five real friends, then you&rsquo;ve had a great life.&rdquo; <br /> &mdash;Lee Iacocca',
        // July 10
        '&ldquo;Adventure is worthwhile.&rdquo; <br /> &mdash;Aesop',
        // July 11
        '&ldquo;The pen is the tongue of the mind.&rdquo; <br /> &mdash;Horace',
        // July 12
        '&ldquo;We have, I fear, confused power with greatness.&rdquo; <br /> &mdash;Stewart Udall',
        // July 13
        '&ldquo;There are many men of principle in both parties in America, but there is no party of principle.&rdquo; <br /> &mdash;Alexis de Tocqueville',
        // July 14
        '&ldquo;People are trapped in history and history is trapped in them.&rdquo; <br /> &mdash;James Baldwin',
        // July 15
        '&ldquo;He who is brave is free.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        // July 16
        '&ldquo;Hold yourself responsible for a higher standard than anybody expects of you. Never excuse yourself.&rdquo; <br /> &mdash;Henry Ward Beecher'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // July 1
        '&ldquo;If it were not for hopes, the heart would break.&rdquo; <br /> &mdash;Thomas Fuller',
        // July 2
        '&ldquo;They do not love that do not show their love.&rdquo; <br /> &mdash;William Shakespeare',
        // July 3
        '&ldquo;To love abundantly is to live abundantly, and to love forever is to live forever.&rdquo; <br /> &mdash;Henry Drummond',
        // July 4
        '&ldquo;He who loves, flies, runs, and rejoices; he is free and nothing holds him back.&rdquo; <br /> &mdash;Henri Matisse',
        // July 5
        '&ldquo;Love does not dominate; it cultivates.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        // July 6
        '&ldquo;If you find someone you love in your life, then hang on to that love.&rdquo; <br /> &mdash;Princess Diana',
        // July 7
        '&ldquo;In love there are two things &ndash; bodies and words.&rdquo; <br /> &mdash;Joyce Carol Oates',
        // July 8
        '&ldquo;The heart that has truly loved never forgets, But as truly loves on to the close.&rdquo; <br /> &mdash;Thomas Moore',
        // July 9
        '&ldquo;Love without conversation is impossible.&rdquo; <br /> &mdash;Mortimer Adler',
        // July 10
        '&ldquo;Love comes unseen; we only see it go.&rdquo; <br /> &mdash;Henry Austin Dobson',
        // July 11
        '&ldquo;In matters of the heart, nothing is true except the improbable.&rdquo; <br /> &mdash;Madame de Stael',
        // July 12
        '&ldquo;To be able to say how much love, is love but little.&rdquo; <br /> &mdash;Petrarch',
        // July 13
        '&ldquo;Happiness grows at our own firesides, and is not to be picked in strangers&rsquo; gardens.&rdquo; <br /> &mdash;Douglas William Jerrold',
        // July 14
        '&ldquo;He is not a lover who does not love forever.&rdquo; <br /> &mdash;Euripides',
        // July 15
        '&ldquo;To love another person is to see the face of God.&rdquo; <br /> &mdash;Victor Hugo',
        // July 16
        '&ldquo;We are never so defensless against suffering as when we love.&rdquo; <br /> &mdash;Sigmund Freud'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // July 1
        '&ldquo;I choose a block of marble and chop off whatever I don&rsquo;t need.&rdquo; <br /> &mdash;Auguste Rodin',
        // July 2
        '&ldquo;A work of art that contains theories is like an object on which the price tag has been left.&rdquo; <br /> &mdash;Alexander Pope',
        // July 3
        '&ldquo;To draw you must close your eyes and sing.&rdquo; <br /> &mdash;Pablo Picasso',
        // July 4
        '&ldquo;The work of art is a scream of freedom.&rdquo; <br /> &mdash;Christo',
        // July 5
        '&ldquo;Art teaches nothing, except the significance of life.&rdquo; <br /> &mdash;Michael Korda',
        // July 6
        '&ldquo;The principle of art is to pause, not bypass.&rdquo; <br /> &mdash;Jerzy Kosinski',
        // July 7
        '&ldquo;Artists themselves are not confined, but their output is.&rdquo; <br /> &mdash;Robert Smithson',
        // July 8
        '&ldquo;To change your phrase somewhat, I know that I like an art where disparate elements form an entity.&rdquo; <br /> &mdash;James Schuyler',
        // July 9
        '&ldquo;Many artists and scholars have pointed out that ultimately art depends on human nature.&rdquo; <br /> &mdash;Steven Pinker',
        // July 10
        '&ldquo;What marks the artist is his power to shape the material of pain we all have.&rdquo; <br /> &mdash;Lionel Trilling',
        // July 11
        '&ldquo;Art, in itself, is an attempt to bring order out of chaos.&rdquo; <br /> &mdash;Stephen Sondheim',
        // July 12
        '&ldquo;Art never seems to make me peaceful or pure.&rdquo; <br /> &mdash;Willem de Kooning',
        // July 13
        '&ldquo;Every art expression is rooted fundamentally in the personality and temperament of the artist.&rdquo; <br /> &mdash;Hans Hofmann',
        // July 14
        '&ldquo;I start a picture and I finish it.&rdquo; <br /> &mdash;Jean-Michel Basquiat',
        // July 15
        '&ldquo;When artists make art, they shouldn&rsquo;t question whether it is permissible to do one thing or another.&rdquo; <br /> &mdash;Sol LeWitt',
        // July 16
        '&ldquo;The most seductive thing about art is the personality of the artist himself.&rdquo; <br /> &mdash;Paul Cezanne'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})