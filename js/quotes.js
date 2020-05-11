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
        '&ldquo;It would not be possible to praise nurses too highly.&rdquo; <br /> &mdash;Stephen Ambrose',
        // May 7
        '&ldquo;The Soul is the voice of the body&rsquo;s interests.&rdquo; <br /> &mdash;George Santayana',
        // May 8
        '&ldquo;All great achievements require time.&rdquo; <br /> &mdash;Maya Angelou',
        // May 9
        '&ldquo;Glory is fleeting, but obscurity is forever.&rdquo; <br /> &mdash;Napoleon Bonaparte',
        // May 10
        '&ldquo;The love of a mother is the veil of a softer light between the heart and the heavenly Father.&rdquo; <br /> &mdash;Samuel Taylor Coleridge',
        // May 11
        '&ldquo;Necessity dispenseth with decorum.&rdquo; <br /> &mdash;Thomas Carlyle'
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
        '&ldquo;Care is a state in which something does matter; it is the source of human tenderness.&rdquo; <br /> &mdash;Rollo May',
        // May 7
        '&ldquo;Love consists in this, that two solitudes protect and touch and greet each other.&rdquo; <br /> &mdash;Rainer Maria Rilke',
        // May 8
        '&ldquo;Love is friendship set on fire.&rdquo; <br /> &mdash;Jeremy Taylor',
        // May 9
        '&ldquo;Your words are my food, your breath my wine. You are everything to me.&rdquo; <br /> &mdash;Sarah Bernhardt',
        // May 10
        '&ldquo;There is a woman at the beginning of all great things.&rdquo; <br /> &mdash;Alphonse de Lamartine',
        // May 11
        '&ldquo;Love begins by taking care of the closest ones &ndash; the ones at home.&rdquo; <br /> &mdash;Mother Teresa'
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
        '&ldquo;Draw your pleasure, paint your pleasure, and express your pleasure strongly.&rdquo; <br /> &mdash;Pierre Bonnard',
        // May 7
        '&ldquo;Imagination is the eye of the soul.&rdquo; <br /> &mdash;Joseph Joubert',
        // May 8
        '&ldquo;Art is parasitic on life, just as criticism is parasitic on art.&rdquo; <br /> &mdash;Harry S. Truman',
        // May 9
        '&ldquo;Great art is never produced for its own sake. It is too difficult to be worth the effort.&rdquo; <br /> &mdash;Robert Quillen',
        // May 10
        '&ldquo;I owe much to mother. She had an expert&rsquo;s understanding, but also approached art emotionally.&rdquo; <br /> &mdash;David Rockefeller',
        // May 11
        '&ldquo;To create one&rsquo;s world in any of the arts takes courage.&rdquo; <br /> &mdash;Georgia O&rsquo;Keeffe'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})