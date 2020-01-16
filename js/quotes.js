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
        '&ldquo;Believe and act as if it were impossible to fail.&rdquo; <br /> &mdash;Charles Kettering',
        // January 8
        '&ldquo;Defeat may serve as well as victory to shake the soul and let the glory out.&rdquo; <br /> &mdash;Edwin Markham',
        // January 9
        '&ldquo;The person who can bring the spirit of laughter into a room is indeed blessed.&rdquo; <br /> &mdash;Bennett Cerf',
        // January 10
        '&ldquo;Our character is what we do when we think no one is looking.&rdquo; <br /> &mdash;H. Jackson Brown, Jr.',
        // January 11
        '&ldquo;We cannot put off living until we are ready.&rdquo; <br /> &mdash;Jose Ortega y Gasset',
        // January 12
        '&ldquo;Millions saw the apple fall, but Newton was the one who asked why.&rdquo; <br /> &mdash;Bernard Baruch',
        // January 13
        '&ldquo;Anger cannot be dishonest.&rdquo; <br /> &mdash;Marcus Aurelius',
        // January 14
        '&ldquo;If you find it in your heart to care for somebody else, you will have succeeded.&rdquo; <br /> &mdash;Maya Angelou',
        // January 15
        '&ldquo;Wherever there is a human being, there is an opportunity for a kindness.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        // January 16
        '&ldquo;The price of greatness is responsibility.&rdquo; <br /> &mdash;Winston Churchill'
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
        '&ldquo;If fear is the great enemy of intimacy, love is its true friend.&rdquo; <br /> &mdash;Henri Nouwen',
        // January 8
        '&ldquo;The only abnormality is the incapacity to love.&rdquo; <br /> &mdash;Anais Nin',
        // January 9
        '&ldquo;Love is like the measles; we all have to go through it.&rdquo; <br /> &mdash;Jerome K. Jerome',
        // January 10
        '&ldquo;I can live without money, but I cannot live without love.&rdquo; <br /> &mdash;Judy Garland',
        // January 11
        '&ldquo;The inner reality of love can be recognized only by love.&rdquo; <br /> &mdash;Hans Urs von Balthasar',
        // January 12
        '&ldquo;Lovers have a right to betray you&hellip;friends don&rsquo;t.&rdquo; <br /> &mdash;Judy Holliday',
        // January 13
        '&ldquo;Love is when he gives you a piece of your soul, that you never knew was missing.&rdquo; <br /> &mdash;Torquato Tasso',
        // January 14
        '&ldquo;If there&rsquo;s delight in love, &rsquo;Tis when I see that heart, which others bleed for, bleed for me.&rdquo; <br /> &mdash;William Congreve',
        // January 15
        '&ldquo;We cease loving ourselves if no one loves us.&rdquo; <br /> &mdash;Madame de Stael',
        // January 16
        '&ldquo;To love and win is the best thing. To love and lose, the next best.&rdquo; <br /> &mdash;William Makepeace Thackeray'
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
        '&ldquo;Advertising is the greatest art form of the 20th century.&rdquo; <br /> &mdash;Marshall McLuhan',
        // January 8
        '&ldquo;Fine art is that in which the hand, the head, and the heart of man go together.&rdquo; <br /> &mdash;John Ruskin',
        // January 9
        '&ldquo;An original artist is unable to copy. So he has only to copy in order to be original.&rdquo; <br /> &mdash;Jean Cocteau',
        // January 10
        '&ldquo;The modern work of art, as I have said, is a symbol.&rdquo; <br /> &mdash;Herbert Read',
        // January 11
        '&ldquo;If you know somethin&rsquo; well, you can always paint it but people would be better off buyin&rsquo; chickens.&rdquo; <br /> &mdash;Grandma Moses',
        // January 12
        '&ldquo;It may be that the deep necessity of art is the examination of self-deception.&rdquo; <br /> &mdash;Robert Motherwell',
        // January 13
        '&ldquo;It is only an auctioneer who can equally and impartially admire all schools of art.&rdquo; <br /> &mdash;Oscar Wilde',
        // January 14
        '&ldquo;Art is the stored honey of the human soul, gathered on wings of misery and travail.&rdquo; <br /> &mdash;Theodore Dreiser',
        // January 15
        '&ldquo;Art is the triumph over chaos.&rdquo; <br /> &mdash;John Cheever',
        // January 16
        '&ldquo;I&rsquo;m afraid that if you look at a thing long enough, it loses all of its meaning.&rdquo; <br /> &mdash;Andy Warhol'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})