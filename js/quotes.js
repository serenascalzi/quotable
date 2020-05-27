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
        '&ldquo;Necessity dispenseth with decorum.&rdquo; <br /> &mdash;Thomas Carlyle',
        // May 12
        '&ldquo;He who angers you conquers you.&rdquo; <br /> &mdash;Elizabeth Kenny',
        // May 13
        '&ldquo;Everything popular is wrong.&rdquo; <br /> &mdash;Oscar Wilde',
        // May 14
        '&ldquo;Real happiness is cheap enough, yet how dearly we pay for its counterfeit.&rdquo; <br /> &mdash;Hosea Ballou',
        // May 15
        '&ldquo;It is not the mountain we conquer but ourselves.&rdquo; <br /> &mdash;Edmund Hillary',
        // May 16
        '&ldquo;Words are often seen hunting for an idea, but ideas are never seen hunting for words.&rdquo; <br /> &mdash;Josh Billings',
        // May 17
        '&ldquo;Trouble shared is trouble halved.&rdquo; <br /> &mdash;Lee Iacocca',
        // May 18
        '&ldquo;If you can&rsquo;t stand the heat, get out of the kitchen.&rdquo; <br /> &mdash;Harry S. Truman',
        // May 19
        '&ldquo;Nothing makes one feel so strong as a call for help.&rdquo; <br /> &mdash;Pope Paul VI',
        // May 20
        '&ldquo;Fear is the mother of foresight.&rdquo; <br /> &mdash;Thomas Hardy',
        // May 21
        '&ldquo;We are all gifted. That is our inheritance.&rdquo; <br /> &mdash;Ethel Waters',
        // May 22
        '&ldquo;It&rsquo;s easy to make a buck. It&rsquo;s a lot tougher to make a difference.&rdquo; <br /> &mdash;Tom Brokaw',
        // May 23
        '&ldquo;Time is but the stream I go a-fishing in.&rdquo; <br /> &mdash;Henry David Thoreau',
        // May 24
        '&ldquo;Either move or be moved.&rdquo; <br /> &mdash;Ezra Pound',
        // May 25
        '&ldquo;You must be the change you wish to see in the world.&rdquo; <br /> &mdash;Mahatma Gandhi',
        // May 26
        '&ldquo;Courage is fear holding on a minute longer.&rdquo; <br /> &mdash;George S. Patton',
        // May 27
        '&ldquo;A friend may well be reckoned the masterpiece of nature.&rdquo; <br /> &mdash;Ralph Waldo Emerson'
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
        '&ldquo;Love begins by taking care of the closest ones &ndash; the ones at home.&rdquo; <br /> &mdash;Mother Teresa',
        // May 12
        '&ldquo;Jealousy contains more of self-love than of love.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        // May 13
        '&ldquo;The most important thing a father can do for his children is to love their mother.&rdquo; <br /> &mdash;Theodore Hesburgh',
        // May 14
        '&ldquo;It is impossible to repent of love. The sin of love does not exist.&rdquo; <br /> &mdash;Muriel Spark',
        // May 15
        '&ldquo;There is only one real deprivation&hellip; and that is not to be able to give one&rsquo;s gifts to those one loves most.&rdquo; <br /> &mdash;May Sarton',
        // May 16
        '&ldquo;Love is an energy which exists of itself. It is its own value.&rdquo; <br /> &mdash;Thornton Wilder',
        // May 17
        '&ldquo;Love and dignity cannot share the same abode.&rdquo; <br /> &mdash;Ovid',
        // May 18
        '&ldquo;Now a soft kiss &ndash; Aye, by that kiss, I vow an endless bliss.&rdquo; <br /> &mdash;John Keats',
        // May 19
        '&ldquo;Hell, madam, is to love no longer.&rdquo; <br /> &mdash;Georges Bernanos',
        // May 20
        '&ldquo;It is impossible to love and to be wise.&rdquo; <br /> &mdash;Francis Bacon',
        // May 21
        '&ldquo;Love is the outreach of self toward completion.&rdquo; <br /> &mdash;Ralph W. Sockman',
        // May 22
        '&ldquo;What is love? It is the morning and the evening star.&rdquo; <br /> &mdash;Sinclair Lewis',
        // May 23
        '&ldquo;The fate of love is that it always seems too little or too much.&rdquo; <br /> &mdash;Amelia Barr',
        // May 24
        '&ldquo;The love of our private friends is the only preparatory exercise for the love of all men.&rdquo; <br /> &mdash;John Henry Newman',
        // May 25
        '&ldquo;Say what you will, &rsquo;tis better to be left than never to have been loved.&rdquo; <br /> &mdash;William Congreve',
        // May 26
        '&ldquo;When love is at its best, one loves so much that he cannot forget.&rdquo; <br /> &mdash;Helen Hunt Jackson',
        // May 27
        '&ldquo;One does not fall in love; one grows into love, and love grows in him.&rdquo; <br /> &mdash;Karl A. Menninger'
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
        '&ldquo;To create one&rsquo;s world in any of the arts takes courage.&rdquo; <br /> &mdash;Georgia O&rsquo;Keeffe',
        // May 12
        '&ldquo;I like to pretend that my art has nothing to do with me.&rdquo; <br /> &mdash;Roy Lichtenstein',
        // May 13
        '&ldquo;The temple of art is built in words.&rdquo; <br /> &mdash;Josiah Gilbert Holland',
        // May 14
        '&ldquo;If we could but paint with the hand what we see with the eye.&rdquo; <br /> &mdash;Honore de Balzac',
        // May 15
        '&ldquo;Architecture is the art of how to waste space.&rdquo; <br /> &mdash;Philip Johnson',
        // May 16
        '&ldquo;Anything simple always interests me.&rdquo; <br /> &mdash;David Hockney',
        // May 17
        '&ldquo;Painting and writing are solitary arts.&rdquo; <br /> &mdash;Conrad Hall',
        // May 18
        '&ldquo;Art is not a study of positive reality, it is the seeking for ideal truth.&rdquo; <br /> &mdash;John Ruskin',
        // May 19
        '&ldquo;Impressionism is the newspaper of the soul.&rdquo; <br /> &mdash;Henri Matisse',
        // May 20
        '&ldquo;What I wanted to do was to paint sunlight on the side of a house.&rdquo; <br /> &mdash;Edward Hopper',
        // May 21
        '&ldquo;Art is like a border of flowers along the course of civilization.&rdquo; <br /> &mdash;Lincoln Steffens',
        // May 22
        '&ldquo;Art is the symbol of the two noblest human efforts: to construct and to refrain from destruction.&rdquo; <br /> &mdash;Evelyn Waugh',
        // May 23
        '&ldquo;The counterfeit and counterpart of Nature is reproduced in art.&rdquo; <br /> &mdash;Henry Wadsworth Longfellow',
        // May 24
        '&ldquo;Every artist dips his brush in his own soul, and paints his own nature into his pictures.&rdquo; <br /> &mdash;Henry Ward Beecher',
        // May 25
        '&ldquo;The defining function of the artist is to cherish consciousness.&rdquo; <br /> &mdash;Max Eastman',
        // May 26
        '&ldquo;Painting, n.: The art of protecting flat surfaces from the weather, and exposing them to the critic.&rdquo; <br /> &mdash;Ambrose Bierce',
        // May 27
        '&ldquo;Time and memory are true artists; they remould reality nearer to the heart&rsquo;s desire.&rdquo; <br /> &mdash;John Dewey'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})