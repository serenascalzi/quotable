$(document).ready(function() {
    // Month Day
	// '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

	// Random Varied Quote
	let variedArray = [
        // April 1
        '&ldquo;Here cometh April again, and as far as I can see the world hath more fools in it than ever.&rdquo; <br /> &mdash;Charles Lamb',
        // April 2
        '&ldquo;Worry never robs tomorrow of its sorrow, it only saps today of its joy.&rdquo; <br /> &mdash;Leo Buscaglia',
        // April 3
        '&ldquo;The wisdom of the wise and the experience of the ages are perpetuated by quotations.&rdquo; <br /> &mdash;Benjamin Disraeli',
        // April 4
        '&ldquo;A pure hand needs no glove to cover it.&rdquo; <br /> &mdash;Nathaniel Hawthorne',
        // April 5
        '&ldquo;They always say time changes things, but you actually have to change them yourself.&rdquo; <br /> &mdash;Andy Warhol',
        // April 6
        '&ldquo;The most effective way to do it, is to do it.&rdquo; <br /> &mdash;Amelia Earhart',
        // April 7
        '&ldquo;If you can&rsquo;t feed a hundred people, then feed just one.&rdquo; <br /> &mdash;Mother Teresa',
        // April 8
        '&ldquo;The present time has one advantage over every other &ndash; it is our own.&rdquo; <br /> &mdash;Charles Caleb Colton',
        // April 9
        '&ldquo;Life is but thought.&rdquo; <br /> &mdash;Sara Teasdale',
        // April 10
        '&ldquo;Every charitable act is a stepping stone toward heaven.&rdquo; <br /> &mdash;Henry Ward Beecher',
        // April 11
        '&ldquo;Progress lies not in enhancing what is, but in advancing toward what will be.&rdquo; <br /> &mdash;Khalil Gibran',
        // April 12
        '&ldquo;We are no longer happy so soon as we wish to be happier.&rdquo; <br /> &mdash;Walter Savage Landor',
        // April 13
        '&ldquo;All the art of living lies in a fine mingling of letting go and holding on.&rdquo; <br /> &mdash;Havelock Ellis',
        // April 14
        '&ldquo;The boisterous sea of liberty is never without a wave.&rdquo; <br /> &mdash;Thomas Jefferson',
        // April 15
        '&ldquo;We have a system that increasingly taxes work and subsidizes nonwork.&rdquo; <br /> &mdash;Milton Friedman',
        // April 16
        '&ldquo;Never retreat. Never explain. Get it done and let them howl.&rdquo; <br /> &mdash;Benjamin Jowett',
        // April 17
        '&ldquo;The mystery of government is not how Washington works but how to make it stop.&rdquo; <br /> &mdash;P. J. O&rsquo;Rourke',
        // April 18
        '&ldquo;A penny saved is a penny earned.&rdquo; <br /> &mdash;Benjamin Franklin',
        // April 19
        '&ldquo;Experience is simply the name we give our mistakes.&rdquo; <br /> &mdash;Oscar Wilde',
        // April 20
        '&ldquo;It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tomorrow.&rdquo; <br /> &mdash;Robert H. Goddard',
        // April 21
        '&ldquo;Easter is meant to be a symbol of hope, renewal, and new life.&rdquo; <br /> &mdash;Janine di Giovanni',
        // April 22
        '&ldquo;This is the most joyful day that ever I saw in my pilgrimage on earth.&rdquo; <br /> &mdash;Donald Cargill',
        // April 23
        '&ldquo;It is better to know some of the questions than all of the answers.&rdquo; <br /> &mdash;James Thurber',
        // April 24
        '&ldquo;Sweet mercy is nobility&rsquo;s true badge.&rdquo; <br /> &mdash;William Shakespeare',
        // April 25
        '&ldquo;Honest disagreement is often a good sign of progress.&rdquo; <br /> &mdash;Mahatma Gandhi',
        // April 26
        '&ldquo;He has achieved success who has worked well, laughed often, and loved much.&rdquo; <br /> &mdash;Elbert Hubbard',
        // April 27
        '&ldquo;Perfection itself is imperfection.&rdquo; <br /> &mdash;Vladimir Horowitz',
        // April 28
        '&ldquo;How little do they see what really is, who frame their hasty judgment upon that which seems.&rdquo; <br /> &mdash;Daniel Webster',
        // April 29
        '&ldquo;I imagine that yes is the only living thing.&rdquo; <br /> &mdash;e. e. cummings',
        // April 30
        '&ldquo;People seldom refuse help, if one offers it in the right way.&rdquo; <br /> &mdash;A. C. Benson'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)

    // Random Love Quote
    let loveArray = [
        // April 1
        '&ldquo;It is best to love wisely, no doubt; but to love foolishly is better than not to be able to love at all.&rdquo; <br /> &mdash;William Makepeace Thackeray',
        // April 2
        '&ldquo;This love is silent.&rdquo; <br /> &mdash;T. S. Eliot',
        // April 3
        '&ldquo;We always love those who admire us, but we do not always love those whom we admire.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        // April 4
        '&ldquo;Heaven grant us patience with a man in love.&rdquo; <br /> &mdash;Rudyard Kipling',
        // April 5
        '&ldquo;There is room in the smallest cottage for a happy loving pair.&rdquo; <br /> &mdash;Friedrich Schiller',
        // April 6
        '&ldquo;Nobody has ever measured, not even poets, how much the heart can hold.&rdquo; <br /> &mdash;Zelda Fitzgerald',
        // April 7
        '&ldquo;Nothing we do, however virtuous, can be accomplished alone; therefore we are saved by love.&rdquo; <br /> &mdash;Reinhold Niebuhr',
        // April 8
        '&ldquo;Don&rsquo;t threaten me with love, baby. Let&rsquo;s just go walking in the rain.&rdquo; <br /> &mdash;Billie Holiday',
        // April 9
        '&ldquo;We are afraid to care too much, for fear that the other person does not care at all.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        // April 10
        '&ldquo;A man is already halfway in love with any woman who listens to him.&rdquo; <br /> &mdash;Brendan Behan',
        // April 11
        '&ldquo;Love sought is good, but given unsought, is better.&rdquo; <br /> &mdash;William Shakespeare',
        // April 12
        '&ldquo;The mouth obeys poorly when the heart murmurs.&rdquo; <br /> &mdash;Voltaire',
        // April 13
        '&ldquo;Love thou the rose, yet leave it on its stem.&rdquo; <br /> &mdash;Edward G. Bulwer-Lytton',
        // April 14
        '&ldquo;The greatest pleasure of life is love.&rdquo; <br /> &mdash;Euripides',
        // April 15
        '&ldquo;A true lover always feels in debt to the one he loves.&rdquo; <br /> &mdash;Ralph W. Sockman',
        // April 16
        '&ldquo;Come live in my heart, and pay no rent.&rdquo; <br /> &mdash;Samuel Lover',
        // April 17
        '&ldquo;What the world really needs is more love and less paper work.&rdquo; <br /> &mdash;Pearl Bailey',
        // April 18
        '&ldquo;The best proof of love is trust.&rdquo; <br /> &mdash;Joyce Brothers',
        // April 19
        '&ldquo;When love is not madness, it is not love.&rdquo; <br /> &mdash;Pedro Calderon de la Barca',
        // April 20
        '&ldquo;A baby is born with a need to be loved &ndash; and never outgrows it.&rdquo; <br /> &mdash;Frank A. Clark',
        // April 21
        '&ldquo;I really do believe that God is love, one of deep affection and grace and forgiveness and inspiration.&rdquo; <br /> &mdash;William P. Young',
        // April 22
        '&ldquo;Absence sharpens love, presence strengthens it.&rdquo; <br /> &mdash;Thomas Fuller',
        // April 23
        '&ldquo;Politics is such a torment that I advise everyone I love not to mix with it.&rdquo; <br /> &mdash;Thomas Jefferson',
        // April 24
        '&ldquo;There is a wisdom of the head, and a wisdom of the heart.&rdquo; <br /> &mdash;Charles Dickens',
        // April 25
        '&ldquo;Love, like a chicken salad or restaurant hash, must be taken with blind faith or it loses its flavor.&rdquo; <br /> &mdash;Helen Rowland',
        // April 26
        '&ldquo;Love is a gross exaggeration of the difference between one person and everybody else.&rdquo; <br /> &mdash;George Bernard Shaw',
        // April 27
        '&ldquo;I argue thee that love is life. And life hath immortality.&rdquo; <br /> &mdash;Emily Dickinson',
        // April 28
        '&ldquo;When we are in love we seem to ourselves quite different from what we were before.&rdquo; <br /> &mdash;Blaise Pascal',
        // April 29
        '&ldquo;Love is the beauty of the soul.&rdquo; <br /> &mdash;Saint Augustine',
        // April 30
        '&ldquo;Faith is love taking the form of aspiration.&rdquo; <br /> &mdash;William Ellery Channing'
    ]

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)

    // Random Art Quote
    let artArray = [
        // April 1
        '&ldquo;The people who make art their business are mostly imposters.&rdquo; <br /> &mdash;Pablo Picasso',
        // April 2
        '&ldquo;That&rsquo;s the motivation of an artist &ndash; to seek attention of some kind.&rdquo; <br /> &mdash;James Taylor',
        // April 3
        '&ldquo;Irresponsibility is part of the pleasure of all art; it is the part the schools cannot recognize.&rdquo; <br /> &mdash;James Joyce',
        // April 4
        '&ldquo;Wherever art appears, life disappears.&rdquo; <br /> &mdash;Robert Motherwell',
        // April 5
        '&ldquo;Art is one thing that can go on mattering once it has stopped hurting.&rdquo; <br /> &mdash;Elizabeth Bowen',
        // April 6
        '&ldquo;The basis of art is truth, both in matter and in mode.&rdquo; <br /> &mdash;Flannery O&rsquo;Connor',
        // April 7
        '&ldquo;A great artist is a great man in a great child.&rdquo; <br /> &mdash;Victor Hugo',
        // April 8
        '&ldquo;Art is not living. It is the use of living.&rdquo; <br /> &mdash;Audre Lorde',
        // April 9
        '&ldquo;Great art picks up where nature ends.&rdquo; <br /> &mdash;Marc Chagall',
        // April 10
        '&ldquo;I don&rsquo;t paint things. I only paint the difference between things.&rdquo; <br /> &mdash;Henri Matisse',
        // April 11
        '&ldquo;My hand is the extension of the thinking process &ndash; the creative process.&rdquo; <br /> &mdash;Tadao Ando',
        // April 12
        '&ldquo;Every portrait that is painted with feeling is a portrait of the artist, not of the sitter.&rdquo; <br /> &mdash;Oscar Wilde',
        // April 13
        '&ldquo;Life is short, the art long.&rdquo; <br /> &mdash;Hippocrates',
        // April 14
        '&ldquo;If a building becomes architecture, then it is art.&rdquo; <br /> &mdash;Arne Jacobsen',
        // April 15
        '&ldquo;The first money I ever earned was for drawing stone tools.&rdquo; <br /> &mdash;Mary Leakey',
        // April 16
        '&ldquo;The man who never in his mind and thoughts travel&rsquo;d to heaven is no artist.&rdquo; <br /> &mdash;William Blake',
        // April 17
        '&ldquo;A work of art is a world in itself reflecting senses and emotions of the artist&rsquo;s world.&rdquo; <br /> &mdash;Hans Hofmann',
        // April 18
        '&ldquo;Many excellent cooks are spoilt by going into the arts.&rdquo; <br /> &mdash;Paul Gauguin',
        // April 19
        '&ldquo;The essence of all art is to have pleasure in giving pleasure.&rdquo; <br /> &mdash;Dale Carnegie',
        // April 20
        '&ldquo;To send light into the darkness of men&rsquo;s hearts &ndash; such is the duty of the artist.&rdquo; <br /> &mdash;Robert Schumann',
        // April 21
        '&ldquo;Be brave enough to live life creatively. The creative place where no one else has ever been.&rdquo; <br /> &mdash;Alan Alda',
        // April 22
        '&ldquo;I believe only in art and failure.&rdquo; <br /> &mdash;Jane Rule',
        // April 23
        '&ldquo;There is only one valuable thing in art: the thing you cannot explain.&rdquo; <br /> &mdash;Georges Braque',
        // April 24
        '&ldquo;Art ought never to be considered except in its relations with its ideal beauty.&rdquo; <br /> &mdash;Alfred de Vigny',
        // April 25
        '&ldquo;Art resides in the quality of doing, process is not magic.&rdquo; <br /> &mdash;Charles Eames',
        // April 26
        '&ldquo;Art does not reproduce what we see; rather, it makes us see.&rdquo; <br /> &mdash;Paul Klee',
        // April 27
        '&ldquo;It is not sufficient to see and to know the beauty of a work. We must feel and be affected by it.&rdquo; <br /> &mdash;Voltaire',
        // April 28
        '&ldquo;Painting is by nature a luminous language.&rdquo; <br /> &mdash;Robert Delaunay',
        // April 29
        '&ldquo;Art is the objectification of feeling.&rdquo; <br /> &mdash;Herman Melville',
        // April 30
        '&ldquo;The precision of naming takes away from the uniqueness of seeing.&rdquo; <br /> &mdash;Pierre Bonnard'
    ]

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})