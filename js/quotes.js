$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // August 1
        '&ldquo;All human wisdom is summed up in two words; wait and hope.&rdquo; <br /> &mdash;Alexandre Dumas',
        // August 2
        '&ldquo;If you count all your assets you always show a profit.&rdquo; <br /> &mdash;Wilson Mizner',
        // August 3
        '&ldquo;I have no methods; all I do is accept people as they are.&rdquo; <br /> &mdash;Joan Rivers',
        // August 4
        '&ldquo;I am prepared for the worst, but hope for the best.&rdquo; <br /> &mdash;Benjamin Disraeli',
        // August 5
        '&ldquo;Dreams will get you nowhere, a good kick in the pants will take you a long way.&rdquo; <br /> &mdash;Baltasar Gracian',
        // August 6
        '&ldquo;To advise is not to compel.&rdquo; <br /> &mdash;Anton Chekhov',
        // August 7
        '&ldquo;Never find fault with the absent.&rdquo; <br /> &mdash;Alexander Pope',
        // August 8
        '&ldquo;All wealth is the product of labor.&rdquo; <br /> &mdash;John Locke',
        // August 9
        '&ldquo;Walk while ye have the light, lest darkness come upon you.&rdquo; <br /> &mdash;John Ruskin',
        // August 10
        '&ldquo;Success &ndash; keeping your mind awake and your desire asleep.&rdquo; <br /> &mdash;Walter Scott',
        // August 11
        '&ldquo;Without labor nothing prospers.&rdquo; <br /> &mdash;Sophocles',
        // August 12
        '&ldquo;Only the educated are free.&rdquo; <br /> &mdash;Epictetus',
        // August 13
        '&ldquo;Liberty, when it begins to take root, is a plant of rapid growth.&rdquo; <br /> &mdash;George Washington',
        // August 14
        '&ldquo;The greatest remedy for anger is delay.&rdquo; <br /> &mdash;Lucius Annaeus Seneca'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // August 1
        '&ldquo;The heart forgets its sorrow and ache.&rdquo; <br /> &mdash;James Russell Lowell',
        // August 2
        '&ldquo;The words of kindness are more healing to a drooping heart than balm or honey.&rdquo; <br /> &mdash;Sarah Fielding',
        // August 3
        '&ldquo;Marriages, like careers, need constant nurturing&hellip; the secret of having it all is loving it all.&rdquo; <br /> &mdash;Joyce Brothers',
        // August 4
        '&ldquo;It is better to have loved and lost than never to have lost at all.&rdquo; <br /> &mdash;Samuel Butler',
        // August 5
        '&ldquo;Blessed are the hearts that can bend; they shall never be broken.&rdquo; <br /> &mdash;Albert Camus',
        // August 6
        '&ldquo;There is no limit to the power of loving.&rdquo; <br /> &mdash;John Morton',
        // August 7
        '&ldquo;We love even when our love is not requited.&rdquo; <br /> &mdash;Mortimer Adler',
        // August 8
        '&ldquo;Love is not only something you feel, it is something you do.&rdquo; <br /> &mdash;David Wilkerson',
        // August 9
        '&ldquo;Death and love are the two wings that bear the good man to heaven.&rdquo; <br /> &mdash;Michelangelo',
        // August 10
        '&ldquo;Love is suffering. One side always loves more.&rdquo; <br /> &mdash;Catherine Deneuve',
        // August 11
        '&ldquo;He wants you all to Himself to put His loving, divine arms around you.&rdquo; <br /> &mdash;Charles Stanley',
        // August 12
        '&ldquo;Love never dies of starvation, but often of indigestion.&rdquo; <br /> &mdash;Ninon de L&rsquo;Enclos',
        // August 13
        '&ldquo;An ideal wife is any woman who has an ideal husband.&rdquo; <br /> &mdash;Booth Tarkington',
        // August 14
        '&ldquo;We may give without loving, but we cannot love without giving.&rdquo; <br /> &mdash;Bernard Meltzer'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // August 1
        '&ldquo;All art is autobiographical. The pearl is the oyster&rsquo;s autobiography.&rdquo; <br /> &mdash;Federico Fellini',
        // August 2
        '&ldquo;Our individual lives cannot, generally, be works of art unless the social order is also.&rdquo; <br /> &mdash;Charles Horton Cooley',
        // August 3
        '&ldquo;Form follows function.&rdquo; <br /> &mdash;Louis Sullivan',
        // August 4
        '&ldquo;To make us feel small in the right way is a function of art; men can only make us feel small in the wrong way.&rdquo; <br /> &mdash;E. M. Forster',
        // August 5
        '&ldquo;A great artist is always before his time or behind it.&rdquo; <br /> &mdash;George Edward Moore',
        // August 6
        '&ldquo;There is nothing worse than a sharp image of a fuzzy concept.&rdquo; <br /> &mdash;Ansel Adams',
        // August 7
        '&ldquo;The photograph itself doesn&rsquo;t interest me. I want only to capture a minute part of reality.&rdquo; <br /> &mdash;Henri Cartier-Bresson',
        // August 8
        '&ldquo;Simplicity is the ultimate sophistication.&rdquo; <br /> &mdash;Jeff Rich',
        // August 9
        '&ldquo;A good artist should be isolated. If he isn&rsquo;t isolated, something is wrong.&rdquo; <br /> &mdash;Orson Welles',
        // August 10
        '&ldquo;Painting is a nail to which I fasten my ideas.&rdquo; <br /> &mdash;Georges Braque',
        // August 11
        '&ldquo;Drawing is the honesty of the art. There is no possibility of cheating. It is either good or bad.&rdquo; <br /> &mdash;Salvador Dali',
        // August 12
        '&ldquo;That&rsquo;s why people listen to music or look at paintings. To get in touch with that wholeness.&rdquo; <br /> &mdash;Corita Kent',
        // August 13
        '&ldquo;The cultured man is an artist, an artist in humanity.&rdquo; <br /> &mdash;Ashley Montagu',
        // August 14
        '&ldquo;Art is man&rsquo;s expression of his joy in labor.&rdquo; <br /> &mdash;Henry Kissinger'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})