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
        '&ldquo;Hold yourself responsible for a higher standard than anybody expects of you. Never excuse yourself.&rdquo; <br /> &mdash;Henry Ward Beecher',
        // July 17
        '&ldquo;Patience is the companion of wisdom.&rdquo; <br /> &mdash;Saint Augustine',
        // July 18
        '&ldquo;Metaphors have a way of holding the most truth in the least space.&rdquo; <br /> &mdash;Orson Scott Card',
        // July 19
        '&ldquo;When in doubt, don&rsquo;t.&rdquo; <br /> &mdash;Benjamin Franklin',
        // July 20
        '&ldquo;We all have ability. The difference is how we use it.&rdquo; <br /> &mdash;Charlotte Whitton',
        // July 21
        '&ldquo;The more sand that has escaped from the hourglass of our life, the clearer we should see through it.&rdquo; <br /> &mdash;Jean Paul',
        // July 22
        '&ldquo;The buried talent is the sunken rock on which most lives strike and founder.&rdquo; <br /> &mdash;Frederick William Faber',
        // July 23
        '&ldquo;Blessed is the man, who having nothing to say, abstains from giving wordy evidence of the fact.&rdquo; <br /> &mdash;George Eliot',
        // July 24
        '&ldquo;You have succeeded in life when all you really want is only what you really need.&rdquo; <br /> &mdash;Vernon Howard',
        // July 25
        '&ldquo;Hope is but the dream of those who wake.&rdquo; <br /> &mdash;Matthew Prior',
        // July 26
        '&ldquo;I never think of the future &ndash; it comes soon enough.&rdquo; <br /> &mdash;Albert Einstein',
        // July 27
        '&ldquo;Laziness may appear attractive, but work gives satisfaction.&rdquo; <br /> &mdash;Anne Frank',
        // July 28
        '&ldquo;With the past, I have nothing to do; nor with the future. I live now.&rdquo; <br /> &mdash;Ralph Waldo Emerson'
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
        '&ldquo;We are never so defensless against suffering as when we love.&rdquo; <br /> &mdash;Sigmund Freud',
        // July 17
        '&ldquo;If this be not love, it is madness, and then it is pardonable.&rdquo; <br /> &mdash;William Congreve',
        // July 18
        '&ldquo;Love has no errors, for all errors are the want for love.&rdquo; <br /> &mdash;William Law',
        // July 19
        '&ldquo;Don&rsquo;t brood. Get on with living and loving. You don&rsquo;t have forever.&rdquo; <br /> &mdash;Leo Buscaglia',
        // July 20
        '&ldquo;There is always something left to love. And if you ain&rsquo;t learned that, you ain&rsquo;t learned nothing.&rdquo; <br /> &mdash;Lorraine Hansberry',
        // July 21
        '&ldquo;The hunger for love is much more difficult to remove than the hunger for bread.&rdquo; <br /> &mdash;Mother Teresa',
        // July 22
        '&ldquo;Nobody loves a woman because she is handsome or ugly, stupid or intelligent. We love because we love.&rdquo; <br /> &mdash;Honore de Balzac',
        // July 23
        '&ldquo;There is no love that is not an echo.&rdquo; <br /> &mdash;Theodor W. Adorno',
        // July 24
        '&ldquo;The eyes those silent tongues of love.&rdquo; <br /> &mdash;Miguel de Cervantes',
        // July 25
        '&ldquo;Love is moral even without legal marriage, but marriage is immoral without love.&rdquo; <br /> &mdash;Ellen Key',
        // July 26
        '&ldquo;Ultimately love is everything.&rdquo; <br /> &mdash;M. Scott Peck',
        // July 27
        '&ldquo;Loving once and only once is possible &ndash; anything is possible.&rdquo; <br /> &mdash;Nicholas Sparks',
        // July 28
        '&ldquo;People protect what they love.&rdquo; <br /> &mdash;Jacques Yves Cousteau'
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
        '&ldquo;The most seductive thing about art is the personality of the artist himself.&rdquo; <br /> &mdash;Paul Cezanne',
        // July 17
        '&ldquo;An artist&rsquo;s career always begins tomorrow.&rdquo; <br /> &mdash;James Whistler',
        // July 18
        '&ldquo;I do not literally paint that table, but the emotion it produces upon me.&rdquo; <br /> &mdash;Henri Matisse',
        // July 19
        '&ldquo;The business of art is to reveal the relation between man and his environment.&rdquo; <br /> &mdash;D. H. Lawrence',
        // July 20
        '&ldquo;I am not strong on perfection.&rdquo; <br /> &mdash;Jasper Johns',
        // July 21
        '&ldquo;One must always draw, draw with the eyes, when one cannot draw with a pencil.&rdquo; <br /> &mdash;Balthus',
        // July 22
        '&ldquo;A mere copier of nature can never produce anything great.&rdquo; <br /> &mdash;Joshua Reynolds',
        // July 23
        '&ldquo;In reality art is always for everyone and for no one.&rdquo; <br /> &mdash;Eugenio Montale',
        // July 24
        '&ldquo;Art cannot be modern. Art is primordially eternal.&rdquo; <br /> &mdash;Egon Schiele',
        // July 25
        '&ldquo;Entertainment and art are not isolated.&rdquo; <br /> &mdash;Martin Kippenberger',
        // July 26
        '&ldquo;I don&rsquo;t like to sell my finest pieces.&rdquo; <br /> &mdash;Beatrice Wood',
        // July 27
        '&ldquo;Every song is like a painting.&rdquo; <br /> &mdash;Dick Dale',
        // July 28
        '&ldquo;Art is too serious to be taken seriously.&rdquo; <br /> &mdash;Ad Reinhardt'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})