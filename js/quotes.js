$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // May 1
        '&ldquo;Forgiveness is a funny thing. It warms the heart and cools the sting.&rdquo; <br /> &mdash;William Arthur Ward',
        // May 2
        '&ldquo;I hear, I know. I see, I remember. I do, I understand.&rdquo; <br /> &mdash;Confucius',
        // May 3
        '&ldquo;When I pray, coincidences happen, and when I don&rsquo;t, they don&rsquo;t.&rdquo; <br /> &mdash;William Temple',
        // May 4
        '&ldquo;More law, less justice.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        // May 5
        '&ldquo;Even death is not to be feared by one who has lived wisely.&rdquo; <br /> &mdash;Buddha',
        // May 6
        '&ldquo;It would not be possible to praise nurses too highly.&rdquo; <br /> &mdash;Stephen Ambrose'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // May 1
        '&ldquo;Morning without you is a dwindled dawn.&rdquo; <br /> &mdash;Emily Dickinson',
        // May 2
        '&ldquo;Life without love is like a tree without blossoms or fruit.&rdquo; <br /> &mdash;Khalil Gibran',
        // May 3
        '&ldquo;Joy is prayer; joy is strength: joy is love; joy is a net of love by which you can catch souls.&rdquo; <br /> &mdash;Mother Teresa',
        // May 4
        '&ldquo;Follow love and it will flee, flee love and it will follow thee.&rdquo; <br /> &mdash;John Gay',
        // May 5
        '&ldquo;Each time you love, love as deeply as if it were forever.&rdquo; <br /> &mdash;Audre Lorde',
        // May 6
        '&ldquo;Care is a state in which something does matter; it is the source of human tenderness.&rdquo; <br /> &mdash;Rollo May'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // May 1
        '&ldquo;Art is a marriage of the conscious and the unconscious.&rdquo; <br /> &mdash;Jean Cocteau',
        // May 2
        '&ldquo;Art is either plagiarism or revolution.&rdquo; <br /> &mdash;Paul Gauguin',
        // May 3
        '&ldquo;Art is nature speeded up and God slowed down.&rdquo; <br /> &mdash;Malcolm de Chazal',
        // May 4
        '&ldquo;When that shutter clicks, anything else that can be done afterward is not worth consideration.&rdquo; <br /> &mdash;Edward Steichen',
        // May 5
        '&ldquo;Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse.&rdquo; <br /> &mdash;Winston Churchill',
        // May 6
        '&ldquo;Draw your pleasure, paint your pleasure, and express your pleasure strongly.&rdquo; <br /> &mdash;Pierre Bonnard'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})