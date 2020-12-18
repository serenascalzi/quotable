$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // December 1
        '&ldquo;Courage is found in unlikely places.&rdquo; <br /> &mdash;J. R. R. Tolkien',
        // December 2
        '&ldquo;No man was ever wise by chance.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        // December 3
        '&ldquo;When one teaches, two learn.&rdquo; <br /> &mdash;Robert Half',
        // December 4
        '&ldquo;We shall never know all the good that a simple smile can do.&rdquo; <br /> &mdash;Mother Teresa',
        // December 5
        '&ldquo;The first wealth is health.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        // December 6
        '&ldquo;Eloquence is a painting of the thoughts.&rdquo; <br /> &mdash;Blaise Pascal',
        // December 7
        '&ldquo;The most worth-while thing is to try to put happiness into the lives of others.&rdquo; <br /> &mdash;Robert Baden-Powell',
        // December 8
        '&ldquo;I want to live my life, not record it.&rdquo; <br /> &mdash;Jackie Kennedy',
        // December 9
        '&ldquo;God gives the nuts, but he does not crack them.&rdquo; <br /> &mdash;Franz Kafka',
        // December 10
        '&ldquo;Some things are so unexpected that no one is prepared for them.&rdquo; <br /> &mdash;Leo Rosten',
        // December 11
        '&ldquo;Wisdom outweighs any wealth.&rdquo; <br /> &mdash;Sophocles',
        // December 12
        '&ldquo;Syllables govern the world.&rdquo; <br /> &mdash;George Bernard Shaw',
        // December 13
        '&ldquo;Home is the nicest word there is.&rdquo; <br /> &mdash;Laura Ingalls Wilder',
        // December 14
        '&ldquo;There&rsquo;s a world of difference between truth and facts. Facts can obscure the truth.&rdquo; <br /> &mdash;Maya Angelou',
        // December 15
        '&ldquo;The whole point of getting things done is knowing what to leave undone.&rdquo; <br /> &mdash;Oswald Chambers',
        // December 16
        '&ldquo;It is the set of the sails, not the direction of the wind that determines which way we will go.&rdquo; <br /> &mdash;Jim Rohn',
        // December 17
        '&ldquo;Forgive many things in others; nothing in yourself.&rdquo; <br /> &mdash;Ausonius',
        // December 18
        '&ldquo;Few men have virtue to withstand the highest bidder.&rdquo; <br /> &mdash;George Washington'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // December 1
        '&ldquo;It&rsquo;s important for us to latch onto the people that we love.&rdquo; <br /> &mdash;Connie Stevens',
        // December 2
        '&ldquo;Our first and last love is self-love.&rdquo; <br /> &mdash;Christian Nestell Bovee',
        // December 3
        '&ldquo;Happiness is like a kiss. You must share it to enjoy it.&rdquo; <br /> &mdash;Bernard Meltzer',
        // December 4
        '&ldquo;Girls we love for what they are; young men for what they promise to be.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        // December 5
        '&ldquo;Who ever loved that loved not at first sight?&rdquo; <br /> &mdash;Christopher Marlowe',
        // December 6
        '&ldquo;If I get married, I want to be very married.&rdquo; <br /> &mdash;Audrey Hepburn',
        // December 7
        '&ldquo;Kindness in women, not their beauteous looks, shall win my love.&rdquo; <br /> &mdash;William Shakespeare',
        // December 8
        '&ldquo;You, yourself, as much as anybody in the entire universe, deserve your love and affection.&rdquo; <br /> &mdash;Buddha',
        // December 9
        '&ldquo;There is no disguise which can hide love for long where it exists, or simulate it where it does not.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        // December 10
        '&ldquo;Down on your knees, and thank heaven, fasting, for a good man&rsquo;s love.&rdquo; <br /> &mdash;Euripides',
        // December 11
        '&ldquo;No one has ever loved anyone the way everyone wants to be loved.&rdquo; <br /> &mdash;Mignon McLaughlin',
        // December 12
        '&ldquo;Love is not altogether a delirium, yet it has many points in common therewith.&rdquo; <br /> &mdash;Thomas Carlyle',
        // December 13
        '&ldquo;Love is a smoke made with the fume of sighs.&rdquo; <br /> &mdash;William Shakespeare',
        // December 14
        '&ldquo;Who would give a law to lovers? Love is unto itself a higher law.&rdquo; <br /> &mdash;Boethius',
        // December 15
        '&ldquo;A good husband makes a good wife.&rdquo; <br /> &mdash;John Florio',
        // December 16
        '&ldquo;What a man takes in by contemplation, that he pours out in love.&rdquo; <br /> &mdash;Meister Eckhart',
        // December 17
        '&ldquo;We are all born for love. It is the principle of existence, and its only end.&rdquo; <br /> &mdash;Benjamin Disraeli',
        // December 18
        '&ldquo;No matter how love-sick a woman is, she shouldn&rsquo;t take the first pill that comes along.&rdquo; <br /> &mdash;Joyce Brothers'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // December 1
        '&ldquo;Classic art was the art of necessity: modern romantic art bears the stamp of caprice and chance.&rdquo; <br /> &mdash;Max Eastman',
        // December 2
        '&ldquo;I never know what I&rsquo;m going to put on the canvas. The canvas paints itself. I&rsquo;m just the middleman.&rdquo; <br /> &mdash;Peter Max',
        // December 3
        '&ldquo;Good design doesn&rsquo;t date.&rdquo; <br /> &mdash;Harry Seidler',
        // December 4
        '&ldquo;The sensitive artist knows that a bitter wind is blowing.&rdquo; <br /> &mdash;Herbert Read',
        // December 5
        '&ldquo;If technique is of no interest to a writer, I doubt that the writer is an artist.&rdquo; <br /> &mdash;Marianne Moore',
        // December 6
        '&ldquo;A work of art which did not begin in emotion is not art.&rdquo; <br /> &mdash;Paul Cezanne',
        // December 7
        '&ldquo;You can&rsquo;t depend on your eyes when your imagination is out of focus.&rdquo; <br /> &mdash;Mark Twain',
        // December 8
        '&ldquo;There is no prejudice that the work of art does not finally overcome.&rdquo; <br /> &mdash;Andre Gide',
        // December 9
        '&ldquo;One can&rsquo;t paint New York as it is, but rather as it is felt.&rdquo; <br /> &mdash;Georgia O&rsquo;Keeffe',
        // December 10
        '&ldquo;My paintings are not about what is seen. They are about what is known forever in the mind.&rdquo; <br /> &mdash;Agnes Martin',
        // December 11
        '&ldquo;The art of art, the glory of expression and the sunshine of the light of letters, is simplicity.&rdquo; <br /> &mdash;Walt Whitman',
        // December 12
        '&ldquo;I think about my work every minute of the day.&rdquo; <br /> &mdash;Jeff Koons',
        // December 13
        '&ldquo;A sculptor is a person who is interested in the shape of things, a poet in words, a musician by sounds.&rdquo; <br /> &mdash;Henry Moore',
        // December 14
        '&ldquo;The goal of art was the vital expression of self.&rdquo; <br /> &mdash;Alfred Stieglitz',
        // December 15
        '&ldquo;I work in whatever medium likes me at the moment.&rdquo; <br /> &mdash;Marc Chagall',
        // December 16
        '&ldquo;Most artists like to think of themselves as rugged individualists, as independent characters.&rdquo; <br /> &mdash;Jack Levine',
        // December 17
        '&ldquo;Great art is as irrational as great music. It is mad with its own loveliness.&rdquo; <br /> &mdash;George Jean Nathan',
        // December 18
        '&ldquo;Art is like baby shoes. When you coat them with gold, they can no longer be worn.&rdquo; <br /> &mdash;John Updike'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})