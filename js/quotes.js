$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // February 1
        '&ldquo;Every failure is a step to success.&rdquo; <br /> &mdash;William Whewell',
        // February 2
        '&ldquo;Kites rise highest against the wind &ndash; not with it.&rdquo; <br /> &mdash;Winston Churchill',
        // February 3
        '&ldquo;When your work speaks for itself, don&rsquo;t interrupt.&rdquo; <br /> &mdash;Henry J. Kaiser',
        // February 4
        '&ldquo;You may delay, but time will not.&rdquo; <br /> &mdash;Benjamin Franklin',
        // February 5
        '&ldquo;Dreams are necessary to life.&rdquo; <br /> &mdash;Anais Nin',
        // February 6
        '&ldquo;What sculpture is to a block of marble, education is to the soul.&rdquo; <br /> &mdash;Joseph Addison',
        // February 7
        '&ldquo;I am still learning.&rdquo; <br /> &mdash;Michelangelo',
        // February 8
        '&ldquo;Curiosity will conquer fear even more than bravery will.&rdquo; <br /> &mdash;James Stephens',
        // February 9
        '&ldquo;Words are but the signs of ideas.&rdquo; <br /> &mdash;Samuel Johnson',
        // February 10
        '&ldquo;Be faithful to that which exists within yourself.&rdquo; <br /> &mdash;Andre Gide',
        // February 11
        '&ldquo;Man is so made that when anything fires his soul, impossibilities vanish.&rdquo; <br /> &mdash;Jean de La Fontaine',
        // February 12
        '&ldquo;Just as a candle cannot burn without fire, men cannot live without a spiritual life.&rdquo; <br /> &mdash;Buddha',
        // February 13
        '&ldquo;The only way to discover the limits of the possible is to go beyond them into the impossible.&rdquo; <br /> &mdash;Arthur C. Clarke',
        // February 14
        '&ldquo;Love the giver more than the gift.&rdquo; <br /> &mdash;Brigham Young',
        // February 15
        '&ldquo;Friendship is Love without his wings!&rdquo; <br /> &mdash;Lord Byron',
        // February 16
        '&ldquo;It&rsquo;s always too early to quit.&rdquo; <br /> &mdash;Norman Vincent Peale',
        // February 17
        '&ldquo;A man is but the product of his thoughts what he thinks, he becomes.&rdquo; <br /> &mdash;Mahatma Gandhi',
        // February 18
        '&ldquo;There are many ways of going forward, but only one way of standing still.&rdquo; <br /> &mdash;Franklin D. Roosevelt',
        // February 19
        '&ldquo;Little minds are tamed and subdued by misfortune; but great minds rise above them.&rdquo; <br /> &mdash;Washington Irving',
        // February 20
        '&ldquo;I didn&rsquo;t think; I experimented.&rdquo; <br /> &mdash;Anthony Burgess',
        // February 21
        '&ldquo;Ideas shape the course of history.&rdquo; <br /> &mdash;John Maynard Keynes',
        // February 22
        '&ldquo;Reason is God&rsquo;s crowning gift to man.&rdquo; <br /> &mdash;Sophocles',
        // February 23
        '&ldquo;The world of reality has its limits; the world of imagination is boundless.&rdquo; <br /> &mdash;Jean-Jacques Rousseau',
        // February 24
        '&ldquo;It is the fight alone that pleases us, not the victory.&rdquo; <br /> &mdash;Blaise Pascal',
        // February 25
        '&ldquo;They can conquer who believe they can.&rdquo; <br /> &mdash;Virgil',
        // February 26
        '&ldquo;A cloudy day is no match for a sunny disposition.&rdquo; <br /> &mdash;William Arthur Ward',
        // February 27
        '&ldquo;Time passes irrevocably.&rdquo; <br /> &mdash;Virgil',
        // February 28
        '&ldquo;You can never plan the future by the past.&rdquo; <br /> &mdash;Edmund Burke'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // February 1
        '&ldquo;Love implies anger. The man who is angered by nothing cares about nothing.&rdquo; <br /> &mdash;Edward Abbey',
        // February 2
        '&ldquo;I wonder what fool it was that first invented kissing.&rdquo; <br /> &mdash;Jonathan Swift',
        // February 3
        '&ldquo;Gestures, in love, are incomparably more attractive, effective and valuable than words.&rdquo; <br /> &mdash;Francois Rabelais',
        // February 4
        '&ldquo;Love is a better teacher than duty.&rdquo; <br /> &mdash;Albert Einstein',
        // February 5
        '&ldquo;My little dog &ndash; a heartbeat at my feet.&rdquo; <br /> &mdash;Edith Wharton',
        // February 6
        '&ldquo;Love in its essence is spiritual fire.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        // February 7
        '&ldquo;Woe to the man whose heart has not learned while young to hope, to love &ndash; and to put its trust in life.&rdquo; <br /> &mdash;Joseph Conrad',
        // February 8
        '&ldquo;Only do what your heart tells you.&rdquo; <br /> &mdash;Princess Diana',
        // February 9
        '&ldquo;True love is quiescent, except in the nascent moments of true humility.&rdquo; <br /> &mdash;Bryant H. McGill',
        // February 10
        '&ldquo;Love is metaphysical gravity.&rdquo; <br /> &mdash;R. Buckminster Fuller',
        // February 11
        '&ldquo;Love is always being given where it is not required.&rdquo; <br /> &mdash;E. M. Forster',
        // February 12
        '&ldquo;Love shall be our token; love be yours and love be mine.&rdquo; <br /> &mdash;Christina Rossetti',
        // February 13
        '&ldquo;To love one that is great, is almost to be great one&rsquo;s self.&rdquo; <br /> &mdash;Samuel Johnson',
        // February 14
        '&ldquo;Whatever our souls are made of, his and mine are the same.&rdquo; <br /> &mdash;Emily Bronte',
        // February 15
        '&ldquo;The love that lasts longest is the love that is never returned.&rdquo; <br /> &mdash;W. Somerset Maugham',
        // February 16
        '&ldquo;I am in you and you in me, mutual in divine love.&rdquo; <br /> &mdash;William Blake',
        // February 17
        '&ldquo;Because of a great love, one is courageous.&rdquo; <br /> &mdash;Lao Tzu',
        // February 18
        '&ldquo;To fail to love is not to exist at all.&rdquo; <br /> &mdash;Mark Van Doren',
        // February 19
        '&ldquo;So the lover must struggle for words.&rdquo; <br /> &mdash;T. S. Eliot',
        // February 20
        '&ldquo;Love is a sacred reserve of energy; it is like the blood of spiritual evolution.&rdquo; <br /> &mdash;Pierre Teilhard de Chardin',
        // February 21
        '&ldquo;First love is only a little foolishness and a lot of curiosity.&rdquo; <br /> &mdash;George Bernard Shaw',
        // February 22
        '&ldquo;Love takes up where knowledge leaves off.&rdquo; <br /> &mdash;Thomas Aquinas',
        // February 23
        '&ldquo;A kiss is a rosy dot over the &lsquo;i&rsquo; of loving.&rdquo; <br /> &mdash;Cyrano de Bergerac',
        // February 24
        '&ldquo;The sound of a kiss is not so loud as that of a cannon, but its echo lasts a great deal longer.&rdquo; <br /> &mdash;Oliver Wendell Holmes, Sr.',
        // February 25
        '&ldquo;One forgives to the degree that one loves.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        // February 26
        '&ldquo;Love possesses not nor will it be possessed, for love is sufficient unto love.&rdquo; <br /> &mdash;Khalil Gibran',
        // February 27
        '&ldquo;I think you have to pay for love with bitter tears.&rdquo; <br /> &mdash;Edith Piaf',
        // February 28
        '&ldquo;Try as you will, you cannot annihilate that eternal relic of the human heart, love.&rdquo; <br /> &mdash;Victor Hugo'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // February 1
        '&ldquo;The rule in the art world is: you cater to the masses or you kowtow to the elite; you can&rsquo;t have both.&rdquo; <br /> &mdash;Ben Hecht',
        // February 2
        '&ldquo;I cry out for order and find it only in art.&rdquo; <br /> &mdash;Helen Hayes',
        // February 3
        '&ldquo;Fiction reveals truths that reality obscures.&rdquo; <br /> &mdash;Jessamyn West',
        // February 4
        '&ldquo;Art washes away from the soul the dust of everyday life.&rdquo; <br /> &mdash;Pablo Picasso',
        // February 5
        '&ldquo;Culture is the arts elevated to a set of beliefs.&rdquo; <br /> &mdash;Thomas Wolfe',
        // February 6
        '&ldquo;An artist cannot fail; it is a success to be one.&rdquo; <br /> &mdash;Charles Horton Cooley',
        // February 7
        '&ldquo;The excellency of every art is its intensity, capable of making all disagreeable evaporate.&rdquo; <br /> &mdash;John Keats',
        // February 8
        '&ldquo;Just as the bird sings or the butterfly soars, because it is his natural characteristic, so the artist works.&rdquo; <br /> &mdash;Alma Gluck',
        // February 9
        '&ldquo;An empty canvas is a living wonder... far lovelier than certain pictures.&rdquo; <br /> &mdash;Wassily Kandinsky',
        // February 10
        '&ldquo;What is art but a way of seeing?&rdquo; <br /> &mdash;Saul Bellow',
        // February 11
        '&ldquo;Art consists of limitation. The most beautiful part of every picture is the frame.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        // February 12
        '&ldquo;Things are beautiful if you love them.&rdquo; <br /> &mdash;Jean Anouilh',
        // February 13
        '&ldquo;It&rsquo;s a moment that I&rsquo;m after, a fleeting moment, but not a frozen moment.&rdquo; <br /> &mdash;Andrew Wyeth',
        // February 14
        '&ldquo;Only through art can we emerge from ourselves and know what another person sees.&rdquo; <br /> &mdash;Marcel Proust',
        // February 15
        '&ldquo;You begin with the possibilities of the material.&rdquo; <br /> &mdash;Robert Rauschenberg',
        // February 16
        '&ldquo;The artist must bow to the monster of his own imagination.&rdquo; <br /> &mdash;Richard Wright',
        // February 17
        '&ldquo;A photograph is usually looked at &ndash; seldom looked into.&rdquo; <br /> &mdash;Ansel Adams',
        // February 18
        '&ldquo;Art is the unceasing effort to compete with the beauty of flowers &ndash; and never succeeding.&rdquo; <br /> &mdash;Gian Carlo Menotti',
        // February 19
        '&ldquo;I am an artist... I am here to live out loud.&rdquo; <br /> &mdash;Emile Zola',
        // February 20
        '&ldquo;Impressionism; it is the birth of Light in painting.&rdquo; <br /> &mdash;Robert Delaunay',
        // February 21
        '&ldquo;Paint the essential character of things.&rdquo; <br /> &mdash;Camille Pissarro',
        // February 22
        '&ldquo;When I draw something, the brain and the hands work together.&rdquo; <br /> &mdash;Tadao Ando',
        // February 23
        '&ldquo;I have no fear of making changes, destroying the image, etc., because the painting has a life of its own.&rdquo; <br /> &mdash;Jackson Pollock',
        // February 24
        '&ldquo;I will preach with my brush.&rdquo; <br /> &mdash;Henry Ossawa Tanner',
        // February 25
        '&ldquo;I put my heart and my soul into my work, and have lost my mind in the process.&rdquo; <br /> &mdash;Vincent Van Gogh',
        // February 26
        '&ldquo;With color one obtains an energy that seems to stem from witchcraft.&rdquo; <br /> &mdash;Henri Matisse',
        // February 27
        '&ldquo;I paint as if I were Rothschild.&rdquo; <br /> &mdash;Paul Cezanne',
        // February 28
        '&ldquo;Painting is a source of endless pleasure, but also of great anguish.&rdquo; <br /> &mdash;Balthus'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})