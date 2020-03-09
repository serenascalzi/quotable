$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // March 1
        '&ldquo;Everything&rsquo;s got a moral, if only you can find it.&rdquo; <br /> &mdash;Lewis Carroll',
        // March 2
        '&ldquo;The whole secret of life is to be interested in one thing profoundly and in a thousand things well.&rdquo; <br /> &mdash;Horace Walpole',
        // March 3
        '&ldquo;Everything has been figured out, expect how to live.&rdquo; <br /> &mdash;Jean-Paul Sartre',
        // March 4
        '&ldquo;The more refined and subtle our minds, the more vulnerable they are.&rdquo; <br /> &mdash;Paul Tournier',
        // March 5
        '&ldquo;When you doubt, abstain.&rdquo; <br /> &mdash;Ambrose Bierce',
        // March 6
        '&ldquo;The art of writing is the art of discovering what you believe.&rdquo; <br /> &mdash;Gustave Flaubert',
        // March 7
        '&ldquo;Prosperity tries the fortunate, adversity the great.&rdquo; <br /> &mdash;Rose Kennedy',
        // March 8
        '&ldquo;What is called genius is the abundance of life and health.&rdquo; <br /> &mdash;Henry David Thoreau',
        // March 9
        '&ldquo;A good laugh is sunshine in the house.&rdquo; <br /> &mdash;William Makepeace Thackeray'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // March 1
        '&ldquo;People who throw kisses are hopelessly lazy.&rdquo; <br /> &mdash;Bob Hope',
        // March 2
        '&ldquo;Who, being loved, is poor?&rdquo; <br /> &mdash;Oscar Wilde',
        // March 3
        '&ldquo;We waste time looking for the perfect lover, instead of creating the perfect love.&rdquo; <br /> &mdash;Tom Robbins',
        // March 4
        '&ldquo;It is not a lack of love, but a lack of friendship that makes unhappy marriages.&rdquo; <br /> &mdash;Friedrich Nietzsche',
        // March 5
        '&ldquo;The love we give away is the only love we keep.&rdquo; <br /> &mdash;Elbert Hubbard',
        // March 6
        '&ldquo;Hatred does not cease by hatred, but only by love; this is the eternal rule.&rdquo; <br /> &mdash;Buddha',
        // March 7
        '&ldquo;Love can do much, but duty more.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        // March 8
        '&ldquo;The more I think about it, the more I realize there is nothing more artistic than to love others.&rdquo; <br /> &mdash;Vincent Van Gogh',
        // March 9
        '&ldquo;The sea hath fish for every man.&rdquo; <br /> &mdash;William Camden'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // March 1
        '&ldquo;Every picture shows a spot with which the artist has fallen in love.&rdquo; <br /> &mdash;Alfred Sisley',
        // March 2
        '&ldquo;An empty canvas is full.&rdquo; <br /> &mdash;Robert Rauschenberg',
        // March 3
        '&ldquo;Rationalism is the enemy of art, though necessary as a basis for architecture.&rdquo; <br /> &mdash;Arthur Erickson',
        // March 4
        '&ldquo;A great artist can paint a great picture on a small canvas.&rdquo; <br /> &mdash;Charles Dudley Warner',
        // March 5
        '&ldquo;Photograph: a picture painted by the sun without instruction in art.&rdquo; <br /> &mdash;Ambrose Bierce',
        // March 6
        '&ldquo;A man paints with his brains and not with his hands.&rdquo; <br /> &mdash;Michelangelo',
        // March 7
        '&ldquo;Filmmaking can be a fine art.&rdquo; <br /> &mdash;Terri Windling',
        // March 8
        '&ldquo;The philistine provides the best definition of art. Anything that makes him rage is first class.&rdquo; <br /> &mdash;Louis Dudek',
        // March 9
        '&ldquo;Creativity takes courage.&rdquo; <br /> &mdash;Henri Matisse'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})