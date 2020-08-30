$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // August 1
        '&ldquo;All human wisdom is summed up in two words; wait and hope.&rdquo; <br /> &mdash;Alexandre Dumas',
        // August 2
        '&ldquo;If you count all your assets you always show a profit.&rdquo; <br /> &mdash;Wilson Mizner',
        // August 3
        '&ldquo;I have no methods; all I do is accept people as they are.&rdquo; <br /> &mdash;Joan Rivers',
        // August 4
        '&ldquo;I am prepared for the worst, but hope for the best.&rdquo; <br /> &mdash;Benjamin Disraeli',
        // August 5
        '&ldquo;Dreams will get you nowhere, a good kick in the pants will take you a long way.&rdquo; <br /> &mdash;Baltasar Gracian',
        // August 6
        '&ldquo;To advise is not to compel.&rdquo; <br /> &mdash;Anton Chekhov',
        // August 7
        '&ldquo;Never find fault with the absent.&rdquo; <br /> &mdash;Alexander Pope',
        // August 8
        '&ldquo;All wealth is the product of labor.&rdquo; <br /> &mdash;John Locke',
        // August 9
        '&ldquo;Walk while ye have the light, lest darkness come upon you.&rdquo; <br /> &mdash;John Ruskin',
        // August 10
        '&ldquo;Success &ndash; keeping your mind awake and your desire asleep.&rdquo; <br /> &mdash;Walter Scott',
        // August 11
        '&ldquo;Without labor nothing prospers.&rdquo; <br /> &mdash;Sophocles',
        // August 12
        '&ldquo;Only the educated are free.&rdquo; <br /> &mdash;Epictetus',
        // August 13
        '&ldquo;Liberty, when it begins to take root, is a plant of rapid growth.&rdquo; <br /> &mdash;George Washington',
        // August 14
        '&ldquo;The greatest remedy for anger is delay.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        // August 15
        '&ldquo;Ambition is but avarice on stilts, and masked.&rdquo; <br /> &mdash;Walter Savage Landor',
        // August 16
        '&ldquo;If fear is cultivated it will become stronger, if faith is cultivated it will achieve mastery.&rdquo; <br /> &mdash;John Paul Jones',
        // August 17
        '&ldquo;Hitch your wagon to a star.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        // August 18
        '&ldquo;Honor is not the exclusive property of any political party.&rdquo; <br /> &mdash;Herbert Hoover',
        // August 19
        '&ldquo;Free speech carries with it some freedom to listen.&rdquo; <br /> &mdash;Warren E. Burger',
        // August 20
        '&ldquo;Life is far too important a thing ever to talk seriously about.&rdquo; <br /> &mdash;Oscar Wilde',
        // August 21
        '&ldquo;I think and think for months and years. Ninety-nine times, the conclusion is false. The hundredth time I am right.&rdquo; <br /> &mdash;Albert Einstein',
        // August 22
        '&ldquo;Knowledge comes, but wisdom lingers.&rdquo; <br /> &mdash;Alfred Lord Tennyson',
        // August 23
        '&ldquo;I always entertain great hopes.&rdquo; <br /> &mdash;Robert Frost',
        // August 24
        '&ldquo;Lend yourself to others, but give yourself to yourself.&rdquo; <br /> &mdash;Michel de Montaigne',
        // August 25
        '&ldquo;Let us be grateful to the mirror for revealing to us our appearance only.&rdquo; <br /> &mdash;Samuel Butler',
        // August 26
        '&ldquo;Hope is such a bait, it covers any hook.&rdquo; <br /> &mdash;Oliver Goldsmith',
        // August 27
        '&ldquo;Freedom is not enough.&rdquo; <br /> &mdash;Lyndon B. Johnson',
        // August 28
        '&ldquo;The aim of education is the knowledge, not of facts, but of values.&rdquo; <br /> &mdash;William Inge',
        // August 29
        '&ldquo;A great deal of intelligence can be invested in ignorance when the need for illusion is deep.&rdquo; <br /> &mdash;Saul Bellow',
        // August 30
        '&ldquo;It is not so much our friends&rsquo; help that helps us, as the confidence of their help.&rdquo; <br /> &mdash;Epicurus'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // August 1
        '&ldquo;The heart forgets its sorrow and ache.&rdquo; <br /> &mdash;James Russell Lowell',
        // August 2
        '&ldquo;The words of kindness are more healing to a drooping heart than balm or honey.&rdquo; <br /> &mdash;Sarah Fielding',
        // August 3
        '&ldquo;Marriages, like careers, need constant nurturing&hellip; the secret of having it all is loving it all.&rdquo; <br /> &mdash;Joyce Brothers',
        // August 4
        '&ldquo;It is better to have loved and lost than never to have lost at all.&rdquo; <br /> &mdash;Samuel Butler',
        // August 5
        '&ldquo;Blessed are the hearts that can bend; they shall never be broken.&rdquo; <br /> &mdash;Albert Camus',
        // August 6
        '&ldquo;There is no limit to the power of loving.&rdquo; <br /> &mdash;John Morton',
        // August 7
        '&ldquo;We love even when our love is not requited.&rdquo; <br /> &mdash;Mortimer Adler',
        // August 8
        '&ldquo;Love is not only something you feel, it is something you do.&rdquo; <br /> &mdash;David Wilkerson',
        // August 9
        '&ldquo;Death and love are the two wings that bear the good man to heaven.&rdquo; <br /> &mdash;Michelangelo',
        // August 10
        '&ldquo;Love is suffering. One side always loves more.&rdquo; <br /> &mdash;Catherine Deneuve',
        // August 11
        '&ldquo;He wants you all to Himself to put His loving, divine arms around you.&rdquo; <br /> &mdash;Charles Stanley',
        // August 12
        '&ldquo;Love never dies of starvation, but often of indigestion.&rdquo; <br /> &mdash;Ninon de L&rsquo;Enclos',
        // August 13
        '&ldquo;An ideal wife is any woman who has an ideal husband.&rdquo; <br /> &mdash;Booth Tarkington',
        // August 14
        '&ldquo;We may give without loving, but we cannot love without giving.&rdquo; <br /> &mdash;Bernard Meltzer',
        // August 15
        '&ldquo;Love means to love that which is unlovable; or it is no virtue at all.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        // August 16
        '&ldquo;One is very crazy when in love.&rdquo; <br /> &mdash;Sigmund Freud',
        // August 17
        '&ldquo;Love is a great beautifier.&rdquo; <br /> &mdash;Louisa May Alcott',
        // August 18
        '&ldquo;The crime of loving is forgetting.&rdquo; <br /> &mdash;Maurice Chevalier',
        // August 19
        '&ldquo;All that I am, or hope to be, I owe to my angel mother.&rdquo; <br /> &mdash;Abraham Lincoln',
        // August 20
        '&ldquo;It is difficult to know at what moment love begins; it is less difficult to know that it has begun.&rdquo; <br /> &mdash;Henry Wadsworth Longfellow',
        // August 21
        '&ldquo;Paradise was made for tender hearts; hell, for loveless hearts.&rdquo; <br /> &mdash;Voltaire',
        // August 22
        '&ldquo;Choose a wife rather by your ear than your eye.&rdquo; <br /> &mdash;Thomas Fuller',
        // August 23
        '&ldquo;Love demands infinitely less than friendship.&rdquo; <br /> &mdash;George Jean Nathan',
        // August 24
        '&ldquo;It is sad not to love, but it is much sadder not to be able to love.&rdquo; <br /> &mdash;Miguel de Unamuno',
        // August 25
        '&ldquo;I&rsquo;ve had an exciting time; I married for love and got a little money along with it.&rdquo; <br /> &mdash;Rose Kennedy',
        // August 26
        '&ldquo;The heart of another is a dark forest, always, no matter how close it has been to one&rsquo;s own.&rdquo; <br /> &mdash;Willa Cather',
        // August 27
        '&ldquo;The first time you marry for love, the second for money, and the third for companionship.&rdquo; <br /> &mdash;Jackie Kennedy',
        // August 28
        '&ldquo;Words may be false and full of art; Sighs are the natural language of the heart.&rdquo; <br /> &mdash;Thomas Shadwell',
        // August 29
        '&ldquo;To love rightly is to love what is orderly and beautiful in an educated and disciplined way.&rdquo; <br /> &mdash;Plato',
        // August 30
        '&ldquo;It is easier to love humanity as a whole than to love one&rsquo;s neighbor.&rdquo; <br /> &mdash;Eric Hoffer'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // August 1
        '&ldquo;All art is autobiographical. The pearl is the oyster&rsquo;s autobiography.&rdquo; <br /> &mdash;Federico Fellini',
        // August 2
        '&ldquo;Our individual lives cannot, generally, be works of art unless the social order is also.&rdquo; <br /> &mdash;Charles Horton Cooley',
        // August 3
        '&ldquo;Form follows function.&rdquo; <br /> &mdash;Louis Sullivan',
        // August 4
        '&ldquo;To make us feel small in the right way is a function of art; men can only make us feel small in the wrong way.&rdquo; <br /> &mdash;E. M. Forster',
        // August 5
        '&ldquo;A great artist is always before his time or behind it.&rdquo; <br /> &mdash;George Edward Moore',
        // August 6
        '&ldquo;There is nothing worse than a sharp image of a fuzzy concept.&rdquo; <br /> &mdash;Ansel Adams',
        // August 7
        '&ldquo;The photograph itself doesn&rsquo;t interest me. I want only to capture a minute part of reality.&rdquo; <br /> &mdash;Henri Cartier-Bresson',
        // August 8
        '&ldquo;Simplicity is the ultimate sophistication.&rdquo; <br /> &mdash;Jeff Rich',
        // August 9
        '&ldquo;A good artist should be isolated. If he isn&rsquo;t isolated, something is wrong.&rdquo; <br /> &mdash;Orson Welles',
        // August 10
        '&ldquo;Painting is a nail to which I fasten my ideas.&rdquo; <br /> &mdash;Georges Braque',
        // August 11
        '&ldquo;Drawing is the honesty of the art. There is no possibility of cheating. It is either good or bad.&rdquo; <br /> &mdash;Salvador Dali',
        // August 12
        '&ldquo;That&rsquo;s why people listen to music or look at paintings. To get in touch with that wholeness.&rdquo; <br /> &mdash;Corita Kent',
        // August 13
        '&ldquo;The cultured man is an artist, an artist in humanity.&rdquo; <br /> &mdash;Ashley Montagu',
        // August 14
        '&ldquo;Art is man&rsquo;s expression of his joy in labor.&rdquo; <br /> &mdash;Henry Kissinger',
        // August 15
        '&ldquo;Art distills sensations and embodies it with enhanced meaning.&rdquo; <br /> &mdash;Miguel de Unamuno',
        // August 16
        '&ldquo;Religion and art spring from the same root and are close kin. Economics and art are strangers.&rdquo; <br /> &mdash;Nathaniel Hawthorne',
        // August 17
        '&ldquo;Treat a work of art like a prince. Let it speak to you first.&rdquo; <br /> &mdash;Arthur Schopenhauer',
        // August 18
        '&ldquo;I never called my work an &lsquo;art&rsquo;. It&rsquo;s part of show business, the business of building entertainment.&rdquo; <br /> &mdash;Walt Disney',
        // August 19
        '&ldquo;Every good painter paints what he is.&rdquo; <br /> &mdash;Jackson Pollock',
        // August 20
        '&ldquo;I shut my eyes in order to see.&rdquo; <br /> &mdash;Paul Gauguin',
        // August 21
        '&ldquo;The mediator of the inexpressible is the work of art.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        // August 22
        '&ldquo;Man lives by imagination.&rdquo; <br /> &mdash;Havelock Ellis',
        // August 23
        '&ldquo;The best artists know what to leave out.&rdquo; <br /> &mdash;Charles de Lint',
        // August 24
        '&ldquo;So vast is art, so narrow human wit.&rdquo; <br /> &mdash;Alexander Pope',
        // August 25
        '&ldquo;Art is not what you see, but what you make others see.&rdquo; <br /> &mdash;Edgar Degas',
        // August 26
        '&ldquo;The vitality of a new movement in Art must be gauged by the fury it arouses.&rdquo; <br /> &mdash;Logan Pearsall Smith',
        // August 27
        '&ldquo;The waking mind is the least serviceable in the arts.&rdquo; <br /> &mdash;Henry Miller',
        // August 28
        '&ldquo;Only an artist can interpret the meaning of life.&rdquo; <br /> &mdash;Novalis',
        // August 29
        '&ldquo;We have art in order not to die of the truth.&rdquo; <br /> &mdash;Friedrich Nietzsche',
        // August 30
        '&ldquo;Sculpture is the best comment that a painter can make on painting.&rdquo; <br /> &mdash;Pablo Picasso'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})