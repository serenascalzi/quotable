$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // October 1
        '&ldquo;Effort only fully releases its reward after a person refuses to quit.&rdquo; <br /> &mdash;Napoleon Hill',
        // October 2
        '&ldquo;It is not length of life, but depth of life.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        // October 3
        '&ldquo;Personally I&rsquo;m always ready to learn, although I do not always like being taught.&rdquo; <br /> &mdash;Winston Churchill',
        // October 4
        '&ldquo;Fortune befriends the bold.&rdquo; <br /> &mdash;Emily Dickinson',
        // October 5
        '&ldquo;I have noticed that nothing I never said ever did me any harm.&rdquo; <br /> &mdash;Calvin Coolidge'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // October 1
        '&ldquo;Never a lip is curved with pain that can&rsquo;t be kissed into smiles again.&rdquo; <br /> &mdash;Bret Harte',
        // October 2
        '&ldquo;Once a woman has forgiven her man, she must not reheat his sins for breakfast.&rdquo; <br /> &mdash;Marlene Dietrich',
        // October 3
        '&ldquo;I long for the raised voice, the howl of rage or love.&rdquo; <br /> &mdash;Leslie Fiedler',
        // October 4
        '&ldquo;Love is the best thing in the world, and the thing that lives the longest.&rdquo; <br /> &mdash;Henry Van Dyke',
        // October 5
        '&ldquo;Love grows more tremendously full, swift, poignant, as the years multiply.&rdquo; <br /> &mdash;Zane Grey'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // October 1
        '&ldquo;Without art, the crudeness of reality would make the world unbearable.&rdquo; <br /> &mdash;George Bernard Shaw',
        // October 2
        '&ldquo;When I have a camera in my hand, I know no fear.&rdquo; <br /> &mdash;Alfred Eisenstaedt',
        // October 3
        '&ldquo;Colors, like features, follow the changes of the emotions.&rdquo; <br /> &mdash;Pablo Picasso',
        // October 4
        '&ldquo;The greatness of art is not to find what is common but what is unique.&rdquo; <br /> &mdash;Isaac Bashevis Singer',
        // October 5
        '&ldquo;Through a painting we can see the whole world.&rdquo; <br /> &mdash;Hans Hofmann'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})