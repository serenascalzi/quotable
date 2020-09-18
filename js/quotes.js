$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // September 1
        '&ldquo;Only the wisest and stupidest of men never change.&rdquo; <br /> &mdash;Confucius',
        // September 2
        '&ldquo;Between saying and doing, many a pair of shoes is worn out.&rdquo; <br /> &mdash;Iris Murdoch',
        // September 3
        '&ldquo;Leap, and the net will appear.&rdquo; <br /> &mdash;John Burroughs',
        // September 4
        '&ldquo;I just invent, then wait until man comes around to needing what I&rsquo;ve invented.&rdquo; <br /> &mdash;R. Buckminster Fuller',
        // September 5
        '&ldquo;What happens is not as important as how you react to what happens.&rdquo; <br /> &mdash;Ellen Glasgow',
        // September 6
        '&ldquo;The aim of life is to live, and to live means to be aware, joyously, drunkenly, serenely, divinely aware.&rdquo; <br /> &mdash;Henry Miller',
        // September 7
        '&ldquo;The end of labor is to gain leisure.&rdquo; <br /> &mdash;Aristotle',
        // September 8
        '&ldquo;I&rsquo;ve never known any trouble than an hour&rsquo;s reading didn&rsquo;t assuage.&rdquo; <br /> &mdash;Arthur Schopenhauer',
        // September 9
        '&ldquo;Obstacles are things a person sees when he takes his eyes off his goal.&rdquo; <br /> &mdash;E. Joseph Cossman',
        // September 10
        '&ldquo;One fails forward toward success.&rdquo; <br /> &mdash;Charles Kettering',
        // September 11
        '&ldquo;One cannot and must not try to erase the past merely because it does not fit the present.&rdquo; <br /> &mdash;Golda Meir',
        // September 12
        '&ldquo;Living in dreams of yesterday, we find ourselves still dreaming of impossible future conquests.&rdquo; <br /> &mdash;Charles Lindbergh',
        // September 13
        '&ldquo;Big words seldom accompany good deeds.&rdquo; <br /> &mdash;Charlotte Whitton',
        // September 14
        '&ldquo;It is easy to sit up and take notice, What is difficult is getting up and taking action.&rdquo; <br /> &mdash;Honore de Balzac',
        // September 15
        '&ldquo;More business is lost every year through neglect than through any other cause.&rdquo; <br /> &mdash;Rose Kennedy',
        // September 16
        '&ldquo;If you are lucky enough to find a way of life you love, you have to find the courage to live it.&rdquo; <br /> &mdash;John Irving',
        // September 17
        '&ldquo;Sooner or later, those who win are those who think they can.&rdquo; <br /> &mdash;Paul Tournier',
        // September 18
        '&ldquo;If moderation is a fault, then indifference is a crime.&rdquo; <br /> &mdash;Jack Kerouac'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // September 1
        '&ldquo;All love shifts and changes. I don&rsquo;t know if you can be wholeheartedly in love all the time.&rdquo; <br /> &mdash;Julie Andrews',
        // September 2
        '&ldquo;I think it is all a matter of love: the more you love a memory, the stronger and stranger it is.&rdquo; <br /> &mdash;Vladimir Nabokov',
        // September 3
        '&ldquo;Love is like an hourglass, with the heart filling up as the brain empties.&rdquo; <br /> &mdash;Jules Renard',
        // September 4
        '&ldquo;Ultimately, we wish the joy of perfect union with the person we love.&rdquo; <br /> &mdash;Mortimer Adler',
        // September 5
        '&ldquo;To good and true love fear is forever affixed.&rdquo; <br /> &mdash;Francois Rabelais',
        // September 6
        '&ldquo;It is not love that should be depicted as blind, but self-love.&rdquo; <br /> &mdash;Voltaire',
        // September 7
        '&ldquo;A family can develop only with a loving woman as its center.&rdquo; <br /> &mdash;Karl Wilhelm Friedrich Schlegel',
        // September 8
        '&ldquo;Lovers who love truly do not write down their happiness.&rdquo; <br /> &mdash;Anatole France',
        // September 9
        '&ldquo;Life is best when you are in love.&rdquo; <br /> &mdash;Michael Moriarty',
        // September 10
        '&ldquo;A very small degree of hope is sufficient to cause the birth of love.&rdquo; <br /> &mdash;Stendhal',
        // September 11
        '&ldquo;Love&rsquo;s greatest gift is its ability to make everything it touches sacred.&rdquo; <br /> &mdash;Barbara De Angelis',
        // September 12
        '&ldquo;A successful marriage is an edifice that must be rebuilt every day.&rdquo; <br /> &mdash;Andre Maurois',
        // September 13
        '&ldquo;Love is my religion &ndash; I could die for it.&rdquo; <br /> &mdash;John Keats',
        // September 14
        '&ldquo;A coward is incapable of exhibiting love; it is the prerogative of the brave.&rdquo; <br /> &mdash;Mahatma Gandhi',
        // September 15
        '&ldquo;O, thou art fairer than the evening air clad in the beauty of a thousand stars.&rdquo; <br /> &mdash;Christopher Marlowe',
        // September 16
        '&ldquo;Love prefers twilight to daylight.&rdquo; <br /> &mdash;Oliver Wendell Holmes, Sr.',
        // September 17
        '&ldquo;The sweetest noise on earth, a woman&rsquo;s tongue; A string which hath no discord.&rdquo; <br /> &mdash;Bryan Procter',
        // September 18
        '&ldquo;A poem begins as a lump in the throat, a sense of wrong, a homesickness, a lovesickness.&rdquo; <br /> &mdash;Robert Frost'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // September 1
        '&ldquo;A good photograph is knowing where to stand.&rdquo; <br /> &mdash;Ansel Adams',
        // September 2
        '&ldquo;Never buy four C-plus paintings when you can buy one A.&rdquo; <br /> &mdash;Walter Annenberg',
        // September 3
        '&ldquo;Pictures must not be too picturesque.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        // September 4
        '&ldquo;Art is the proper task of life.&rdquo; <br /> &mdash;Friedrich Nietzsche',
        // September 5
        '&ldquo;Less is more.&rdquo; <br /> &mdash;Ludwig Mies van der Rohe',
        // September 6
        '&ldquo;A film is a petrified fountain of thought.&rdquo; <br /> &mdash;Jean Cocteau',
        // September 7
        '&ldquo;My imagination can picture no fairer happiness than to continue living for art.&rdquo; <br /> &mdash;Clara Schumann',
        // September 8
        '&ldquo;Color is my day-long obsession, joy and torment.&rdquo; <br /> &mdash;Claude Monet',
        // September 9
        '&ldquo;Of all lies, art is the least untrue.&rdquo; <br /> &mdash;Gustave Flaubert',
        // September 10
        '&ldquo;To make pictures big is to make them more powerful.&rdquo; <br /> &mdash;Robert Mapplethorpe',
        // September 11
        '&ldquo;Life imitates art far more than art imitates Life.&rdquo; <br /> &mdash;Oscar Wilde',
        // September 12
        '&ldquo;Good painting is the kind that looks like sculpture.&rdquo; <br /> &mdash;Michelangelo',
        // September 13
        '&ldquo;I refuse to confide and don&rsquo;t like it when people write about art.&rdquo; <br /> &mdash;Balthus',
        // September 14
        '&ldquo;And I have exposed myself to art so that my work has something beyond just the usual potter.&rdquo; <br /> &mdash;Beatrice Wood',
        // September 15
        '&ldquo;To the artist there is never anything ugly in nature.&rdquo; <br /> &mdash;Auguste Rodin',
        // September 16
        '&ldquo;Recognizing the need is the primary condition for design.&rdquo; <br /> &mdash;Charles Eames',
        // September 17
        '&ldquo;In art, the obvious is a sin.&rdquo; <br /> &mdash;Edward Dmytryk',
        // September 18
        '&ldquo;I dream of painting and then I paint my dream.&rdquo; <br /> &mdash;Vincent Van Gogh'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})