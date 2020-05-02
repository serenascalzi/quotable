$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // May 1
        '&ldquo;Forgiveness is a funny thing. It warms the heart and cools the sting.&rdquo; <br /> &mdash;William Arthur Ward',
        // May 2
        '&ldquo;I hear, I know. I see, I remember. I do, I understand.&rdquo; <br /> &mdash;Confucius'
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
        '&ldquo;Life without love is like a tree without blossoms or fruit.&rdquo; <br /> &mdash;Khalil Gibran'
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
        '&ldquo;Art is either plagiarism or revolution.&rdquo; <br /> &mdash;Paul Gauguin'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})