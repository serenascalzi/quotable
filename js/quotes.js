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
        '&ldquo;I have noticed that nothing I never said ever did me any harm.&rdquo; <br /> &mdash;Calvin Coolidge',
        // October 6
        '&ldquo;Our deeds determine us, as much as we determine our deeds.&rdquo; <br /> &mdash;George Eliot',
        // October 7
        '&ldquo;Are right and wrong convertible terms, dependant upon popular opinion?&rdquo; <br /> &mdash;William Lloyd Garrison',
        // October 8
        '&ldquo;Zeal will do more than knowledge.&rdquo; <br /> &mdash;William Hazlitt',
        // October 9
        '&ldquo;I have come to believe that this is a mighty continent which was hitherto unknown.&rdquo; <br /> &mdash;Christopher Columbus',
        // October 10
        '&ldquo;To give without any reward, or any notice, has a special quality of its own.&rdquo; <br /> &mdash;Anne Morrow Lindbergh',
        // October 11
        '&ldquo;To err is human; to forgive, divine.&rdquo; <br /> &mdash;Alexander Pope',
        // October 12
        '&ldquo;The finest steel has to go through the hottest fire.&rdquo; <br /> &mdash;Richard M. Nixon',
        // October 13
        '&ldquo;Change before you have to.&rdquo; <br /> &mdash;Jack Welch',
        // October 14
        '&ldquo;The actions of men are the best interpreters of their thoughts.&rdquo; <br /> &mdash;James Joyce',
        // October 15
        '&ldquo;The absence of alternatives clears the mind marvelously.&rdquo; <br /> &mdash;Henry Kissinger'
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
        '&ldquo;Love grows more tremendously full, swift, poignant, as the years multiply.&rdquo; <br /> &mdash;Zane Grey',
        // October 6
        '&ldquo;But love&rsquo;s a malady without a cure.&rdquo; <br /> &mdash;John Dryden',
        // October 7
        '&ldquo;There is more pleasure in loving than in being beloved.&rdquo; <br /> &mdash;Thomas Fuller',
        // October 8
        '&ldquo;Bid me to love, and I will give a loving heart to thee.&rdquo; <br /> &mdash;Robert Herrick',
        // October 9
        '&ldquo;Love is an act of endless forgiveness, a tender look which becomes a habit.&rdquo; <br /> &mdash;Peter Ustinov',
        // October 10
        '&ldquo;A man is given the choice between loving women and understanding them.&rdquo; <br /> &mdash;Ninon de L&rsquo;Enclos',
        // October 11
        '&ldquo;To love is to act.&rdquo; <br /> &mdash;Victor Hugo',
        // October 12
        '&ldquo;When you say you are in love with humanity, you are well satisfied with yourself.&rdquo; <br /> &mdash;Luigi Pirandello',
        // October 13
        '&ldquo;Marrying for love may be a bit risky, but it is so honest that God can&rsquo;t help but smile on it.&rdquo; <br /> &mdash;Josh Billings',
        // October 14
        '&ldquo;Only the broken-hearted know the truth about love.&rdquo; <br /> &mdash;Mason Cooley',
        // October 15
        '&ldquo;Love is too young to know what conscience is.&rdquo; <br /> &mdash;William Shakespeare'
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
        '&ldquo;Through a painting we can see the whole world.&rdquo; <br /> &mdash;Hans Hofmann',
        // October 6
        '&ldquo;One must be a living man and a posthumous artist.&rdquo; <br /> &mdash;Jean Cocteau',
        // October 7
        '&ldquo;All good things which exist are the fruits of originality.&rdquo; <br /> &mdash;John Stuart Mill',
        // October 8
        '&ldquo;I prefer drawing to talking. Drawing is faster, and leaves less room for lies.&rdquo; <br /> &mdash;Le Corbusier',
        // October 9
        '&ldquo;Nothing makes me so happy as to observe nature and to paint what I see.&rdquo; <br /> &mdash;Henri Rousseau',
        // October 10
        '&ldquo;Art is the most beautiful of all lies.&rdquo; <br /> &mdash;Claude Debussy',
        // October 11
        '&ldquo;Art doesn&rsquo;t transform. It just plain forms.&rdquo; <br /> &mdash;Roy Lichtenstein',
        // October 12
        '&ldquo;I don&rsquo;t want life to imitate art. I want life to be art.&rdquo; <br /> &mdash;Ernst Fischer',
        // October 13
        '&ldquo;Art is born of humiliation.&rdquo; <br /> &mdash;W. H. Auden',
        // October 14
        '&ldquo;Where the spirit does not work with the hand, there is no art.&rdquo; <br /> &mdash;Leonardo da Vinci',
        // October 15
        '&ldquo;The enemy of art is the absence of limitations.&rdquo; <br /> &mdash;Orson Welles'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})