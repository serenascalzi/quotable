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
        '&ldquo;Dreams will get you nowhere, a good kick in the pants will take you a long way.&rdquo; <br /> &mdash;Baltasar Gracian'
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
        '&ldquo;Blessed are the hearts that can bend; they shall never be broken.&rdquo; <br /> &mdash;Albert Camus'
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
        '&ldquo;A great artist is always before his time or behind it.&rdquo; <br /> &mdash;George Edward Moore'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})