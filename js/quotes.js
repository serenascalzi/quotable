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
        '&ldquo;A good laugh is sunshine in the house.&rdquo; <br /> &mdash;William Makepeace Thackeray',
        // March 10
        '&ldquo;Never in the field of human conflict was so much owed by so many to so few.&rdquo; <br /> &mdash;Winston Churchill',
        // March 11
        '&ldquo;At times I think and at times I am.&rdquo; <br /> &mdash;Paul Valery',
        // March 12
        '&ldquo;Courage is the ladder on which all the other virtues mount.&rdquo; <br /> &mdash;Clare Boothe Luce',
        // March 13
        '&ldquo;To live is to think.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        // March 14
        '&ldquo;Every burden is a blessing.&rdquo; <br /> &mdash;Walt Kelly',
        // March 15
        '&ldquo;The secret of happiness is something to do.&rdquo; <br /> &mdash;John Burroughs',
        // March 16
        '&ldquo;The true art of memory is the art of attention.&rdquo; <br /> &mdash;Samuel Johnson',
        // March 17
        '&ldquo;Think where man&rsquo;s glory most begins and ends, and say my glory was I had such friends.&rdquo; <br /> &mdash;William Butler Yeats',
        // March 18
        '&ldquo;Peace and justice are two sides of the same coin.&rdquo; <br /> &mdash;Dwight D. Eisenhower',
        // March 19
        '&ldquo;Plodding wins the race.&rdquo; <br /> &mdash;Aesop',
        // March 20
        '&ldquo;To hold a pen is to be at war.&rdquo; <br /> &mdash;Voltaire',
        // March 21
        '&ldquo;Pennies do not come from heaven. They have to be earned here on earth.&rdquo; <br /> &mdash;Margaret Thatcher'
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
        '&ldquo;The sea hath fish for every man.&rdquo; <br /> &mdash;William Camden',
        // March 10
        '&ldquo;Do you have to have a reason for loving?&rdquo; <br /> &mdash;Brigitte Bardot',
        // March 11
        '&ldquo;Love is a friendship set to music.&rdquo; <br /> &mdash;Joseph Campbell',
        // March 12
        '&ldquo;A so-called happy marriage corresponds to love as a correct poem to an improvised song.&rdquo; <br /> &mdash;Karl Wilhelm Friedrich Schlegel',
        // March 13
        '&ldquo;Be brave, young lovers, and follow your star.&rdquo; <br /> &mdash;Oscar Hammerstein II',
        // March 14
        '&ldquo;The world is not comprehensible, but it is embraceable: through the embracing of one of its beings.&rdquo; <br /> &mdash;Martin Buber',
        // March 15
        '&ldquo;We all become great explorers during our first few days in a new city, or a new love affair.&rdquo; <br /> &mdash;Mignon McLaughlin',
        // March 16
        '&ldquo;He who loves with purity considers not the gift of the lover, but the love of the giver.&rdquo; <br /> &mdash;Thomas a Kempis',
        // March 17
        '&ldquo;Love is never defeated, and I could add, the history of Ireland proves it.&rdquo; <br /> &mdash;Pope John Paul II',
        // March 18
        '&ldquo;One is loved because one is loved. No reason is needed for loving.&rdquo; <br /> &mdash;Paulo Coelho',
        // March 19
        '&ldquo;Love is all, it gives all, and it takes all.&rdquo; <br /> &mdash;Soren Kierkegaard',
        // March 20
        '&ldquo;The pleasures of love are always in proportion to our fears.&rdquo; <br /> &mdash;Stendhal',
        // March 21
        '&ldquo;Any time not spent on love is wasted.&rdquo; <br /> &mdash;Torquato Tasso'
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
        '&ldquo;Creativity takes courage.&rdquo; <br /> &mdash;Henri Matisse',
        // March 10
        '&ldquo;Minimalism wasn&rsquo;t a real idea &ndash; it ended before it started.&rdquo; <br /> &mdash;Sol LeWitt',
        // March 11
        '&ldquo;Art is the final cunning of the human soul which would rather do anything than face the gods.&rdquo; <br /> &mdash;Iris Murdoch',
        // March 12
        '&ldquo;To curb the machine and limit art to handicraft is a denial of opportunity.&rdquo; <br /> &mdash;Lewis Mumford',
        // March 13
        '&ldquo;What I didn&rsquo;t know was I was deeply attracted to the big space.&rdquo; <br /> &mdash;David Hockney',
        // March 14
        '&ldquo;Life beats down and crushes the soul and art reminds you that you have one.&rdquo; <br /> &mdash;Stella Adler',
        // March 15
        '&ldquo;I don&rsquo;t believe in art. I believe in artists.&rdquo; <br /> &mdash;Marcel Duchamp',
        // March 16
        '&ldquo;No great art has even been made without the artist having known danger.&rdquo; <br /> &mdash;Rainer Maria Rilke',
        // March 17
        '&ldquo;No heirloom of humankind captures the past as do art and language.&rdquo; <br /> &mdash;Theodore Bikel',
        // March 18
        '&ldquo;To paint is a possessing rather than a picturing.&rdquo; <br /> &mdash;Philip Guston',
        // March 19
        '&ldquo;Painting is the passage from the chaos of the emotions to the order of the possible.&rdquo; <br /> &mdash;Balthus',
        // March 20
        '&ldquo;There is nothing new in art except talent.&rdquo; <br /> &mdash;Anton Chekhov',
        // March 21
        '&ldquo;There is a role and function for beauty in our time.&rdquo; <br /> &mdash;Tadao Ando'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})