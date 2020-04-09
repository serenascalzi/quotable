$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // April 1
        '&ldquo;Here cometh April again, and as far as I can see the world hath more fools in it than ever.&rdquo; <br /> &mdash;Charles Lamb',
        // April 2
        '&ldquo;Worry never robs tomorrow of its sorrow, it only saps today of its joy.&rdquo; <br /> &mdash;Leo Buscaglia',
        // April 3
        '&ldquo;The wisdom of the wise and the experience of the ages are perpetuated by quotations.&rdquo; <br /> &mdash;Benjamin Disraeli',
        // March 4
        '&ldquo;A pure hand needs no glove to cover it.&rdquo; <br /> &mdash;Nathaniel Hawthorne',
        // March 5
        '&ldquo;They always say time changes things, but you actually have to change them yourself.&rdquo; <br /> &mdash;Andy Warhol',
        // March 6
        '&ldquo;The most effective way to do it, is to do it.&rdquo; <br /> &mdash;Amelia Earhart',
        // March 7
        '&ldquo;If you can&rsquo;t feed a hundred people, then feed just one.&rdquo; <br /> &mdash;Mother Teresa',
        // March 8
        '&ldquo;The present time has one advantage over every other &ndash; it is our own.&rdquo; <br /> &mdash;Charles Caleb Colton',
        // March 9
        '&ldquo;Life is but thought.&rdquo; <br /> &mdash;Sara Teasdale'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // April 1
        '&ldquo;It is best to love wisely, no doubt; but to love foolishly is better than not to be able to love at all.&rdquo; <br /> &mdash;William Makepeace Thackeray',
        // April 2
        '&ldquo;This love is silent.&rdquo; <br /> &mdash;T. S. Eliot',
        // April 3
        '&ldquo;We always love those who admire us, but we do not always love those whom we admire.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        // March 4
        '&ldquo;Heaven grant us patience with a man in love.&rdquo; <br /> &mdash;Rudyard Kipling',
        // March 5
        '&ldquo;There is room in the smallest cottage for a happy loving pair.&rdquo; <br /> &mdash;Friedrich Schiller',
        // March 6
        '&ldquo;Nobody has ever measured, not even poets, how much the heart can hold.&rdquo; <br /> &mdash;Zelda Fitzgerald',
        // March 7
        '&ldquo;Nothing we do, however virtuous, can be accomplished alone; therefore we are saved by love.&rdquo; <br /> &mdash;Reinhold Niebuhr',
        // March 8
        '&ldquo;Don&rsquo;t threaten me with love, baby. Let&rsquo;s just go walking in the rain.&rdquo; <br /> &mdash;Billie Holiday',
        // March 9
        '&ldquo;We are afraid to care too much, for fear that the other person does not care at all.&rdquo; <br /> &mdash;Eleanor Roosevelt'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // April 1
        '&ldquo;The people who make art their business are mostly imposters.&rdquo; <br /> &mdash;Pablo Picasso',
        // April 2
        '&ldquo;That&rsquo;s the motivation of an artist &ndash; to seek attention of some kind.&rdquo; <br /> &mdash;James Taylor',
        // April 3
        '&ldquo;Irresponsibility is part of the pleasure of all art; it is the part the schools cannot recognize.&rdquo; <br /> &mdash;James Joyce',
        // March 4
        '&ldquo;Wherever art appears, life disappears.&rdquo; <br /> &mdash;Robert Motherwell',
        // March 5
        '&ldquo;Art is one thing that can go on mattering once it has stopped hurting.&rdquo; <br /> &mdash;Elizabeth Bowen',
        // March 6
        '&ldquo;The basis of art is truth, both in matter and in mode.&rdquo; <br /> &mdash;Flannery O&rsquo;Connor',
        // March 7
        '&ldquo;A great artist is a great man in a great child.&rdquo; <br /> &mdash;Victor Hugo',
        // March 8
        '&ldquo;Art is not living. It is the use of living.&rdquo; <br /> &mdash;Audre Lorde',
        // March 9
        '&ldquo;Great art picks up where nature ends.&rdquo; <br /> &mdash;Marc Chagall'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})