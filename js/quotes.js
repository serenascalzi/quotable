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
        '&ldquo;I am still learning.&rdquo; <br /> &mdash;Michelangelo',
        // February 8
        '&ldquo;Curiosity will conquer fear even more than bravery will.&rdquo; <br /> &mdash;James Stephens',
        // February 9
        '&ldquo;Words are but the signs of ideas.&rdquo; <br /> &mdash;Samuel Johnson',
        // February 10
        '&ldquo;Be faithful to that which exists within yourself.&rdquo; <br /> &mdash;Andre Gide',
        // February 11
        '&ldquo;Man is so made that when anything fires his soul, impossibilities vanish.&rdquo; <br /> &mdash;Jean de La Fontaine',
        // February 12
        '&ldquo;Just as a candle cannot burn without fire, men cannot live without a spiritual life.&rdquo; <br /> &mdash;Buddha',
        // February 13
        '&ldquo;The only way to discover the limits of the possible is to go beyond them into the impossible.&rdquo; <br /> &mdash;Arthur C. Clarke',
        // February 14
        '&ldquo;Love the giver more than the gift.&rdquo; <br /> &mdash;Brigham Young',
        // February 15
        '&ldquo;Friendship is Love without his wings!&rdquo; <br /> &mdash;Lord Byron'
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
        '&ldquo;Woe to the man whose heart has not learned while young to hope, to love &ndash; and to put its trust in life.&rdquo; <br /> &mdash;Joseph Conrad',
        // February 8
        '&ldquo;Only do what your heart tells you.&rdquo; <br /> &mdash;Princess Diana',
        // February 9
        '&ldquo;True love is quiescent, except in the nascent moments of true humility.&rdquo; <br /> &mdash;Bryant H. McGill',
        // February 10
        '&ldquo;Love is metaphysical gravity.&rdquo; <br /> &mdash;R. Buckminster Fuller',
        // February 11
        '&ldquo;Love is always being given where it is not required.&rdquo; <br /> &mdash;E. M. Forster',
        // February 12
        '&ldquo;Love shall be our token; love be yours and love be mine.&rdquo; <br /> &mdash;Christina Rossetti',
        // February 13
        '&ldquo;To love one that is great, is almost to be great one&rsquo;s self.&rdquo; <br /> &mdash;Samuel Johnson',
        // February 14
        '&ldquo;Whatever our souls are made of, his and mine are the same.&rdquo; <br /> &mdash;Emily Bronte',
        // February 15
        '&ldquo;The love that lasts longest is the love that is never returned.&rdquo; <br /> &mdash;W. Somerset Maugham'
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
        '&ldquo;The excellency of every art is its intensity, capable of making all disagreeable evaporate.&rdquo; <br /> &mdash;John Keats',
        // February 8
        '&ldquo;Just as the bird sings or the butterfly soars, because it is his natural characteristic, so the artist works.&rdquo; <br /> &mdash;Alma Gluck',
        // February 9
        '&ldquo;An empty canvas is a living wonder... far lovelier than certain pictures.&rdquo; <br /> &mdash;Wassily Kandinsky',
        // February 10
        '&ldquo;What is art but a way of seeing?&rdquo; <br /> &mdash;Saul Bellow',
        // February 11
        '&ldquo;Art consists of limitation. The most beautiful part of every picture is the frame.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        // February 12
        '&ldquo;Things are beautiful if you love them.&rdquo; <br /> &mdash;Jean Anouilh',
        // February 13
        '&ldquo;It&rsquo;s a moment that I&rsquo;m after, a fleeting moment, but not a frozen moment.&rdquo; <br /> &mdash;Andrew Wyeth',
        // February 14
        '&ldquo;Only through art can we emerge from ourselves and know what another person sees.&rdquo; <br /> &mdash;Marcel Proust',
        // February 15
        '&ldquo;You begin with the possibilities of the material.&rdquo; <br /> &mdash;Robert Rauschenberg'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})