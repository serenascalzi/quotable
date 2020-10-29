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
        '&ldquo;The absence of alternatives clears the mind marvelously.&rdquo; <br /> &mdash;Henry Kissinger',
        // October 16
        '&ldquo;With renunciation life begins.&rdquo; <br /> &mdash;Amelia Barr',
        // October 17
        '&ldquo;They&rsquo;re only truly great who are truly good.&rdquo; <br /> &mdash;George Chapman',
        // October 18
        '&ldquo;To be free is to have achieved your life.&rdquo; <br /> &mdash;Tennessee Williams',
        // October 19
        '&ldquo;When all else is lost, the future still remains.&rdquo; <br /> &mdash;Christian Nestell Bovee',
        // October 20
        '&ldquo;Nine-tenths of wisdom is being wise in time.&rdquo; <br /> &mdash;Theodore Roosevelt',
        // October 21
        '&ldquo;If the world seems cold to you, kindle fires to warm it.&rdquo; <br /> &mdash;Lucy Larcom',
        // October 22
        '&ldquo;Of all human activities, man&rsquo;s listening to God is the supreme act of his reasoning and will.&rdquo; <br /> &mdash;Pope Paul VI',
        // October 23
        '&ldquo;All wish to possess knowledge, but few, comparatively speaking, are willing to pay the price.&rdquo; <br /> &mdash;Juvenal',
        // October 24
        '&ldquo;The human race has one really effective weapon, and that is laughter.&rdquo; <br /> &mdash;Mark Twain',
        // October 25
        '&ldquo;The less we deserve good fortune, the more we hope for it.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        // October 26
        '&ldquo;There&rsquo;s a difference between a philosophy and a bumper sticker.&rdquo; <br /> &mdash;Charles M. Schulz',
        // October 27
        '&ldquo;Everything in the world may be endured except continual prosperity.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        // October 28
        '&ldquo;Humanity is acquiring all the right technology for all the wrong reasons.&rdquo; <br /> &mdash;R. Buckminster Fuller',
        // October 29
        '&ldquo;I think; therefore I am.&rdquo; <br /> &mdash;Rene Descartes'
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
        '&ldquo;Love is too young to know what conscience is.&rdquo; <br /> &mdash;William Shakespeare',
        // October 16
        '&ldquo;True love cannot be found where it does not exist, nor can it be denied where it does.&rdquo; <br /> &mdash;Torquato Tasso',
        // October 17
        '&ldquo;People happy in love have an air of intensity.&rdquo; <br /> &mdash;Stendhal',
        // October 18
        '&ldquo;The gain is not the having of children; it is the discovery of love and how to be loving.&rdquo; <br /> &mdash;Polly Berrien Berends',
        // October 19
        '&ldquo;If any person wish to be idle, let them fall in love.&rdquo; <br /> &mdash;Ovid',
        // October 20
        '&ldquo;Who so loves believes the impossible.&rdquo; <br /> &mdash;Elizabeth Barrett Browning',
        // October 21
        '&ldquo;Love has a tide!&rdquo; <br /> &mdash;Helen Hunt Jackson',
        // October 22
        '&ldquo;Love will find a way through paths where wolves fear to prey.&rdquo; <br /> &mdash;Lord Byron',
        // October 23
        '&ldquo;Love and fear. Everything the father of a family says must inspire one or the other.&rdquo; <br /> &mdash;Joseph Joubert',
        // October 24
        '&ldquo;Love is a mutual self-giving which ends in self-recovery.&rdquo; <br /> &mdash;Fulton J. Sheen',
        // October 25
        '&ldquo;Sometimes love is stronger than a man&rsquo;s convictions.&rdquo; <br /> &mdash;Isaac Bashevis Singer',
        // October 26
        '&ldquo;I never knew how to worship until I knew how to love.&rdquo; <br /> &mdash;Henry Ward Beecher',
        // October 27
        '&ldquo;In the game of love, the losers are more celebrated than the winners.&rdquo; <br /> &mdash;Mason Cooley',
        // October 28
        '&ldquo;To live is like to love &ndash; all reason is against it, and all healthy instinct for it.&rdquo; <br /> &mdash;Samuel Butler',
        // October 29
        '&ldquo;And the heart that is soonest awake to the flowers is always the first to be touch&rsquo;d by the thorns.&rdquo; <br /> &mdash;Thomas Moore'
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
        '&ldquo;The enemy of art is the absence of limitations.&rdquo; <br /> &mdash;Orson Welles',
        // October 16
        '&ldquo;To imagine is everything, to know is nothing at all.&rdquo; <br /> &mdash;Anatole France',
        // October 17
        '&ldquo;Insight is the first condition of Art.&rdquo; <br /> &mdash;George Henry Lewes',
        // October 18
        '&ldquo;Love the art in yourself and not yourself in the art.&rdquo; <br /> &mdash;Constantin Stanislavski',
        // October 19
        '&ldquo;Art is not a thing; it is a way.&rdquo; <br /> &mdash;Elbert Hubbard',
        // October 20
        '&ldquo;Art is the daughter of freedom.&rdquo; <br /> &mdash;Friedrich Schiller',
        // October 21
        '&ldquo;In art, the hand can never execute anything higher than the heart can imagine.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        // October 22
        '&ldquo;My eyes were made to erase all that is ugly.&rdquo; <br /> &mdash;Raoul Dufy',
        // October 23
        '&ldquo;Work on the accent, it will enliven the whole.&rdquo; <br /> &mdash;Pierre Bonnard',
        // October 24
        '&ldquo;Painting is easy when you don&rsquo;t know how, but very difficult when you do.&rdquo; <br /> &mdash;Edgar Degas',
        // October 25
        '&ldquo;My painting does not come from the easel.&rdquo; <br /> &mdash;Jackson Pollock',
        // October 26
        '&ldquo;Any authentic work of art must start an argument between the artist and his audience.&rdquo; <br /> &mdash;Rebecca West',
        // October 27
        '&ldquo;Vision is the true creative rhythm.&rdquo; <br /> &mdash;Robert Delaunay',
        // October 28
        '&ldquo;Mournful and yet grand is the destiny of the artist.&rdquo; <br /> &mdash;Franz Liszt',
        // October 29
        '&ldquo;It is not in life, but in art that self-fulfillment is to be found.&rdquo; <br /> &mdash;Wilson Mizner'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})