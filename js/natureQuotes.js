$(document).ready(function() {
    // '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

    let julyArray = [
        '&ldquo;Pity the meek, for they shall inherit the earth.&rdquo; <br /> &mdash;Don Marquis'
    ]

    let augustArray = [
        // August Quotes
    ]

    let septemberArray = [
        // September Quotes
    ]

    let octoberArray = [
        // October Quotes
    ]

    let novemberArray = [
        // November Quotes
    ]

    let decemberArray = [
        // December Quotes
    ]

    let januaryArray = [
        '&ldquo;I believe that if one always looked at the skies, one would end up with wings.&rdquo; <br /> &mdash;Gustave Flaubert',
        '&ldquo;It is a matter of shame that in the morning the birds should be awake earlier than you.&rdquo; <br /> &mdash;Abu Bakr',
        '&ldquo;Even in winter an isolated patch of snow has a special quality.&rdquo; <br /> &mdash;Andy Goldsworthy',
        '&ldquo;The least movement is of importance to all nature. The entire ocean is affected by a pebble.&rdquo; <br /> &mdash;Blaise Pascal',
        '&ldquo;I perhaps owe having become a painter to flowers.&rdquo; <br /> &mdash;Claude Monet',
        '&ldquo;I did not become a vegetarian for my health, I did it for the health of the chickens.&rdquo; <br /> &mdash;Isaac Bashevis Singer',
        '&ldquo;My boy, one small breeze doesn&rsquo;t make a wind storm.&rdquo; <br /> &mdash;John McGraw',
        '&ldquo;If people think nature is their friend, then they sure don&rsquo;t need an enemy.&rdquo; <br /> &mdash;Kurt Vonnegut',
        '&ldquo;The fall of dropping water wears away the Stone.&rdquo; <br /> &mdash;Lucretius',
        '&ldquo;We won&rsquo;t have a society if we destroy the environment.&rdquo; <br /> &mdash;Margaret Mead',
        '&ldquo;Sunlight is painting.&rdquo; <br /> &mdash;Nathaniel Hawthorne',
        '&ldquo;The rose and the thorn, and sorrow and gladness are linked together.&rdquo; <br /> &mdash;Saadi',
        '&ldquo;Nature reserves the right to inflict upon her children the most terrifying jests.&rdquo; <br /> &mdash;Thornton Wilder',
        '&ldquo;The earth has received the embrace of the sun and we shall see the results of that love.&rdquo; <br /> &mdash;Sitting Bull',
        '&ldquo;There is nothing in a caterpillar that tells you it&rsquo;s going to be a butterfly.&rdquo; <br /> &mdash;R. Buckminster Fuller',
        '&ldquo;Truth makes on the ocean of nature no one track of light; every eye, looking on, finds its own.&rdquo; <br /> &mdash;Edward G. Bulwer-Lytton',
        '&ldquo;The ocean is a mighty harmonist.&rdquo; <br /> &mdash;William Wordsworth',
        '&ldquo;Bad weather always looks worse through a window.&rdquo; <br /> &mdash;Tom Lehrer',
        '&ldquo;If the Sun and Moon should ever doubt, they&rsquo;d immediately go out.&rdquo; <br /> &mdash;William Blake',
        '&ldquo;The day, water, sun, moon, night &ndash; I do not have to purchase these things with money.&rdquo; <br /> &mdash;Plautus',
        '&ldquo;Men stumble over pebbles, never over mountains.&rdquo; <br /> &mdash;Marilyn French',
        '&ldquo;That which is not good for the bee-hive cannot be good for the bees.&rdquo; <br /> &mdash;Marcus Aurelius',
        '&ldquo;For greed all nature is too little.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        '&ldquo;How glorious a greeting the sun gives the mountains!&rdquo; <br /> &mdash;John Muir',
        '&ldquo;He could not die when trees were green, for he loved the time too well.&rdquo; <br /> &mdash;John Clare',
        '&ldquo;Nature is wont to hide herself.&rdquo; <br /> &mdash;Heraclitus',
        '&ldquo;Nothing is more beautiful than the loveliness of the woods before sunrise.&rdquo; <br /> &mdash;George Washington Carver',
        '&ldquo;Gray skies are just clouds passing over.&rdquo; <br /> &mdash;Duke Ellington',
        '&ldquo;The universe seems neither benign nor hostile, merely indifferent.&rdquo; <br /> &mdash;Carl Sagan',
        '&ldquo;What makes the desert beautiful is that somewhere it hides a well.&rdquo; <br /> &mdash;Antoine de Saint-Exupery',
        '&ldquo;All are but parts of one stupendous whole, Whose body Nature is, and God the soul.&rdquo; <br /> &mdash;Alexander Pope'
    ]

    let februaryArray = [
        '&ldquo;The only Zen you can find on the tops of mountains is the Zen you bring up there.&rdquo; <br /> &mdash;Robert M. Pirsig',
        '&ldquo;Nature soaks every evil with either fear or shame.&rdquo; <br /> &mdash;Tertullian',
        '&ldquo;Simplicity is natures first step, and the last of art.&rdquo; <br /> &mdash;Philip James Bailey',
        '&ldquo;If you cut down a forest, it doesn&rsquo;t matter how many sawmills you have if there are no more trees.&rdquo; <br /> &mdash;Susan George',
        '&ldquo;Waters are distilled out of Herbs, Flowers, Fruits, and Roots.&rdquo; <br /> &mdash;Nicholas Culpeper',
        '&ldquo;Land really is the best art.&rdquo; <br /> &mdash;Andy Warhol',
        '&ldquo;The most important thing about Spaceship Earth &ndash; an instruction book didn&rsquo;t come with it.&rdquo; <br /> &mdash;R. Buckminster Fuller',
        '&ldquo;Sorrows are like thunderclouds, in the distance they look black, over our heads scarcely gray.&rdquo; <br /> &mdash;Jean Paul',
        '&ldquo;There&rsquo;s no night without stars.&rdquo; <br /> &mdash;Andre Norton',
        '&ldquo;Nature always wears the colors of the spirit.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;The longer one is alone, the easier it is to hear the song of the earth.&rdquo; <br /> &mdash;Robert Anton Wilson',
        '&ldquo;A garden must combine the poetic and the mysterious with a feeling of serenity and joy.&rdquo; <br /> &mdash;Luis Barragan',
        '&ldquo;Sunsets are so beautiful that they almost seem as if we were looking through the gates of Heaven.&rdquo; <br /> &mdash;John Lubbock',
        '&ldquo;The sky lovingly smiles on the earth and her children.&rdquo; <br /> &mdash;Henry Morton Stanley',
        '&ldquo;The sky broke like an egg into full sunset and the water caught fire.&rdquo; <br /> &mdash;Pamela Hansford Johnson',
        '&ldquo;During all these years there existed within me a tendency to follow Nature in her walks.&rdquo; <br /> &mdash;John James Audubon',
        '&ldquo;The sky is filled with stars, invisible by day.&rdquo; <br /> &mdash;Henry Wadsworth Longfellow',
        '&ldquo;Solitary trees, if they grow at all, grow strong.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;For the mind disturbed, the still beauty of dawn is nature&rsquo;s finest balm.&rdquo; <br /> &mdash;Edwin Way Teale',
        '&ldquo;The Lord grant we may all be tillers of the soil.&rdquo; <br /> &mdash;Nikolai Gogol',
        '&ldquo;Eagles commonly fly alone. They are crows, daws, and starlings that flock together.&rdquo; <br /> &mdash;John Webster',
        '&ldquo;The world is always in movement.&rdquo; <br /> &mdash;V. S. Naipaul',
        '&ldquo;Land is the secure ground of home, the sea is like life, the outside, the unknown.&rdquo; <br /> &mdash;Stephen Gardiner',
        '&ldquo;They are ill discoverers that think there is no land, when they can see nothing but sea.&rdquo; <br /> &mdash;Francis Bacon',
        '&ldquo;Twilight drops her curtain down, and pins it with a star.&rdquo; <br /> &mdash;Lucy Maud Montgomery',
        '&ldquo;Consider what each soil will bear, and what each refuses.&rdquo; <br /> &mdash;Virgil',
        '&ldquo;The Sun, Moon and Stars are there to guide us.&rdquo; <br /> &mdash;Dennis Banks',
        '&ldquo;Self-defence is Nature&rsquo;s eldest law.&rdquo; <br /> &mdash;John Dryden',
        '&ldquo;The stars that have most glory have no rest.&rdquo; <br /> &mdash;Samuel Daniel'
    ]

    let marchArray = [
        '&ldquo;In the depth of winter I finally learned that there was in me an invincible summer.&rdquo; <br /> &mdash;Albert Camus',
        '&ldquo;It appears to be a law that you cannot have a deep sympathy with both man and nature.&rdquo; <br /> &mdash;Henry David Thoreau',
        '&ldquo;The poetry of the earth is never dead.&rdquo; <br /> &mdash;John Keats',
        '&ldquo;Big doesn&rsquo;t necessarily mean better. Sunflowers aren&rsquo;t better than violets.&rdquo; <br /> &mdash;Edna Ferber',
        '&ldquo;I believe a leaf of grass is no less than the journey-work of the stars.&rdquo; <br /> &mdash;Walt Whitman',
        '&ldquo;One touch of nature makes the whole world kin.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;Look deep into nature, and then you will understand everything better.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;Rebellion without truth is like spring in a bleak, arid desert.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;This continent, an open palm spread frank before the sky.&rdquo; <br /> &mdash;James Agee',
        '&ldquo;The best place to find God is in a garden. You can dig for him there.&rdquo; <br /> &mdash;George Bernard Shaw',
        '&ldquo;Sound is the vocabulary of nature.&rdquo; <br /> &mdash;Pierre Schaeffer',
        '&ldquo;I believe in God, only I spell it Nature.&rdquo; <br /> &mdash;Frank Lloyd Wright',
        '&ldquo;The flower is the poetry of reproduction. It is an example of the eternal seductiveness of life.&rdquo; <br /> &mdash;Jean Giraudoux',
        '&ldquo;Blue thou art, intensely blue; Flower, whence came thy dazzling hue?&rdquo; <br /> &mdash;James Montgomery',
        '&ldquo;A forest bird never wants a cage.&rdquo; <br /> &mdash;Henrik Ibsen',
        '&ldquo;What nature delivers to us is never stale. Because what nature creates has eternity in it.&rdquo; <br /> &mdash;Isaac Bashevis Singer',
        '&ldquo;All theory, dear friend, is gray, but the golden tree of life springs ever green.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;Words, like nature, half reveal and half conceal the soul within.&rdquo; <br /> &mdash;Alfred Lord Tennyson',
        '&ldquo;We must return to nature and nature&rsquo;s god.&rdquo; <br /> &mdash;Luther Burbank',
        '&ldquo;As the twig is bent the tree inclines.&rdquo; <br /> &mdash;Virgil',
        '&ldquo;Oaths are but words, and words are but wind.&rdquo; <br /> &mdash;Samuel Butler',
        '&ldquo;I believe I can even yet remember when I saw the stars for the first time.&rdquo; <br /> &mdash;Max Muller',
        '&ldquo;Art will never be able to exist without nature.&rdquo; <br /> &mdash;Pierre Bonnard',
        '&ldquo;The stars don&rsquo;t look bigger, but they do look brighter.&rdquo; <br /> &mdash;Sally Ride',
        '&ldquo;Strangely enough, they have a mind to till the soil, and the love of possessions is a disease in them.&rdquo; <br /> &mdash;Sitting Bull',
        '&ldquo;The continued existence of wildlife and wilderness is important to the quality of life of humans.&rdquo; <br /> &mdash;Jim Fowler',
        '&ldquo;I learn something every time I go into the mountains.&rdquo; <br /> &mdash;Michael Kennedy',
        '&ldquo;Water and air, the two essential fluids on which all life depends, have become global garbage cans.&rdquo; <br /> &mdash;Jacques Yves Cousteau',
        '&ldquo;Miracles are not contrary to nature, but only contrary to what we know about nature.&rdquo; <br /> &mdash;Saint Augustine',
        '&ldquo;The very winds whispered in soothing accents, and maternal Nature bade me weep no more.&rdquo; <br /> &mdash;Mary Shelley',
        '&ldquo;We are learning, too, that the love of beauty is one of Nature&rsquo;s greatest healers.&rdquo; <br /> &mdash;Ellsworth Huntington'
    ]

    let aprilArray = [
        '&ldquo;It is not only fine feathers that make fine birds.&rdquo; <br /> &mdash;Aesop',
        '&ldquo;What would be ugly in a garden constitutes beauty in a mountain.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;Set your course by the stars, not by the lights of every passing ship.&rdquo; <br /> &mdash;Omar N. Bradley',
        '&ldquo;With the coming of spring, I am calm again.&rdquo; <br /> &mdash;Gustav Mahler',
        '&ldquo;The sea complains upon a thousand shores.&rdquo; <br /> &mdash;Alexander Smith',
        '&ldquo;The best thing one can do when it&rsquo;s raining is to let it rain.&rdquo; <br /> &mdash;Henry Wadsworth Longfellow',
        '&ldquo;Heaven is under our feet as well as over our heads.&rdquo; <br /> &mdash;Henry David Thoreau',
        '&ldquo;The fulness of the godhead dwelt in every blade of grass.&rdquo; <br /> &mdash;Elias Hicks',
        '&ldquo;Great men are like eagles, and build their nest on some lofty solitude.&rdquo; <br /> &mdash;Arthur Schopenhauer',
        '&ldquo;A hen is only an egg&rsquo;s way of making another egg.&rdquo; <br /> &mdash;Samuel Butler',
        '&ldquo;God writes the Gospel not in the Bible alone, but also on trees, and in the flowers and clouds and stars.&rdquo; <br /> &mdash;Martin Luther',
        '&ldquo;To destroy is still the strongest instinct in nature.&rdquo; <br /> &mdash;Max Beerbohm',
        '&ldquo;If people sat outside and looked at the stars each night, I&rsquo;ll bet they&rsquo;d live a lot differently.&rdquo; <br /> &mdash;Bill Watterson',
        '&ldquo;We are an impossibility in an impossible universe.&rdquo; <br /> &mdash;Ray Bradbury',
        '&ldquo;No occupation is so delightful to me as the culture of the earth, and no culture comparable to that of the garden.&rdquo; <br /> &mdash;Thomas Jefferson',
        '&ldquo;Conservation is a state of harmony between men and land.&rdquo; <br /> &mdash;Aldo Leopold',
        '&ldquo;Nature is often hidden, sometimes overcome, seldom extinguished.&rdquo; <br /> &mdash;Francis Bacon',
        '&ldquo;There are no lines in nature, only areas of colour, one against another.&rdquo; <br /> &mdash;Edouard Manet',
        '&ldquo;God, I can push the grass apart and lay my finger on Thy heart.&rdquo; <br /> &mdash;Edna St. Vincent Millay',
        '&ldquo;I have always wanted a bunny and I&rsquo;ll always have a rabbit the rest of my life.&rdquo; <br /> &mdash;Amy Sedaris',
        '&ldquo;I&rsquo;ve always regarded nature as the clothing of God.&rdquo; <br /> &mdash;Alan Hovhaness',
        '&ldquo;Scenery is fine &ndash; but human nature is finer.&rdquo; <br /> &mdash;John Keats',
        '&ldquo;The sun, too, shines into cesspools and is not polluted.&rdquo; <br /> &mdash;Diogenes',
        '&ldquo;In the world of words, the imagination is one of the forces of nature.&rdquo; <br /> &mdash;Wallace Stevens',
        '&ldquo;Nature does not hurry, yet everything is accomplished.&rdquo; <br /> &mdash;Lao Tzu',
        '&ldquo;Let every dawn be to you as the beginning of life, and every setting sun be to you as its close.&rdquo; <br /> &mdash;John Ruskin',
        '&ldquo;The fairest thing in nature, a flower, still has its roots in earth and manure.&rdquo; <br /> &mdash;D. H. Lawrence',
        '&ldquo;He who does not become familiar with nature through love will never know her.&rdquo; <br /> &mdash;Karl Wilhelm Friedrich Schlegel',
        '&ldquo;Buildings, too, are children of Earth and Sun.&rdquo; <br /> &mdash;Frank Lloyd Wright',
        '&ldquo;Life is a great sunrise. I do not see why death should not be an even greater one.&rdquo; <br /> &mdash;Vladimir Nabokov'
    ]

    let mayArray = [
        '&ldquo;You can cut all the flowers but you cannot keep spring from coming.&rdquo; <br /> &mdash;Pablo Neruda',
        '&ldquo;Self-preservation is the first law of nature.&rdquo; <br /> &mdash;Samuel Butler',
        '&ldquo;Human judges can show mercy. But against the laws of nature, there is no appeal.&rdquo; <br /> &mdash;Arthur C. Clarke',
        '&ldquo;The earth is the very quintessence of the human condition.&rdquo; <br /> &mdash;Hannah Arendt',
        '&ldquo;The supernatural is the natural not yet understood.&rdquo; <br /> &mdash;Elbert Hubbard',
        '&ldquo;&lsquo;Healing,&rsquo; Papa would tell me, &lsquo;is not a science, but the intuitive art of wooing nature.&rsquo;&rdquo; <br /> &mdash;W. H. Auden',
        '&ldquo;If your knees aren&rsquo;t green by the end of the day, you ought to seriously re-examine your life.&rdquo; <br /> &mdash;Bill Watterson',
        '&ldquo;Earth is a flower and it&rsquo;s pollinating.&rdquo; <br /> &mdash;Neil Young',
        '&ldquo;In all things of nature there is something of the marvelous.&rdquo; <br /> &mdash;Aristotle',
        '&ldquo;Adopt the pace of nature: her secret is patience.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;The violets in the mountains have broken the rocks.&rdquo; <br /> &mdash;Tennessee Williams',
        '&ldquo;Night comes to the desert all at once, as if someone turned off the light.&rdquo; <br /> &mdash;Joyce Carol Oates',
        '&ldquo;In search of my mother&rsquo;s garden, I found my own.&rdquo; <br /> &mdash;Alice Walker',
        '&ldquo;Use plants to bring life.&rdquo; <br /> &mdash;Douglas Wilson',
        '&ldquo;Shadow owes its birth to light.&rdquo; <br /> &mdash;John Gay',
        '&ldquo;A good garden may have some weeds.&rdquo; <br /> &mdash;Thomas Fuller',
        '&ldquo;Literature and butterflies are the two sweetest passions known to man.&rdquo; <br /> &mdash;Vladimir Nabokov',
        '&ldquo;Nature is not human hearted.&rdquo; <br /> &mdash;Lao Tzu',
        '&ldquo;Sweet April showers do spring May flowers.&rdquo; <br /> &mdash;Thomas Tusser',
        '&ldquo;The foot feels the foot when it feels the ground.&rdquo; <br /> &mdash;Buddha',
        '&ldquo;Nature is inside art as its content, not outside as its model.&rdquo; <br /> &mdash;Marilyn French',
        '&ldquo;Spring beckons! All things to the call respond; the trees are leaving and cashiers abscond.&rdquo; <br /> &mdash;Ambrose Bierce',
        '&ldquo;Nature uses as little as possible of anything.&rdquo; <br /> &mdash;Johannes Kepler',
        '&ldquo;There were no temples or shrines among us save those of nature.&rdquo; <br /> &mdash;Charles Eastman',
        '&ldquo;Nature never makes any blunders, when she makes a fool she means it.&rdquo; <br /> &mdash;Archibald Alexander',
        '&ldquo;Nothing leads to good that is not natural.&rdquo; <br /> &mdash;Friedrich Schiller',
        '&ldquo;My soul can find no staircase to Heaven unless it be through Earth&rsquo;s loveliness.&rdquo; <br /> &mdash;Michelangelo',
        '&ldquo;Life comes from the earth and life returns to the earth.&rdquo; <br /> &mdash;Zhuangzi',
        '&ldquo;One could not pluck a flower without troubling a star.&rdquo; <br /> &mdash;Loren Eiseley',
        '&ldquo;Don&rsquo;t pray when it rains if you don&rsquo;t pray when the sun shines.&rdquo; <br /> &mdash;Satchel Paige',
        '&ldquo;Flowers are happy things.&rdquo; <br /> &mdash;P. G. Wodehouse'
    ]

    let juneArray = [
        '&ldquo;All things are artificial, for nature is the art of God.&rdquo; <br /> &mdash;Thomas Browne',
        '&ldquo;A morning-glory at my window satisfies me more than the metaphysics of books.&rdquo; <br /> &mdash;Walt Whitman',
        '&ldquo;The eye of a human being is a microscope, which makes the world seem bigger than it really is.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;In the presence of eternity, the mountains are as transient as the clouds.&rdquo; <br /> &mdash;Robert Green Ingersoll',
        '&ldquo;Never does nature say one thing and wisdom another.&rdquo; <br /> &mdash;Juvenal',
        '&ldquo;Swans sing before they die &ndash; &lsquo;twere no bad thing should certain persons die before they sing.&rdquo; <br /> &mdash;Samuel Taylor Coleridge',
        '&ldquo;Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby.&rdquo; <br /> &mdash;Langston Hughes',
        '&ldquo;If the path be beautiful, let us not ask where it leads.&rdquo; <br /> &mdash;Anatole France',
        '&ldquo;Plans to protect air and water, wilderness and wildlife are in fact plans to protect man.&rdquo; <br /> &mdash;Stewart Udall',
        '&ldquo;You cannot step into the same river twice.&rdquo; <br /> &mdash;Heraclitus',
        '&ldquo;I am following Nature without being able to grasp her, I perhaps owe having become a painter to flowers.&rdquo; <br /> &mdash;Claude Monet',
        '&ldquo;Poetry is the synthesis of hyacinths and biscuits.&rdquo; <br /> &mdash;Carl Sandburg',
        '&ldquo;How strange that nature does not knock, and yet does not intrude!&rdquo; <br /> &mdash;Emily Dickinson',
        '&ldquo;The groves were God&rsquo;s first temples.&rdquo; <br /> &mdash;William Cullen Bryant',
        '&ldquo;Great things are done when men and mountains meet.&rdquo; <br /> &mdash;William Blake',
        '&ldquo;My father considered a walk among the mountains as the equivalent of churchgoing.&rdquo; <br /> &mdash;Aldous Huxley',
        '&ldquo;The sky is the part of creation in which nature has done for the sake of pleasing man.&rdquo; <br /> &mdash;John Ruskin',
        '&ldquo;The lake and the mountains have become my landscape, my real world.&rdquo; <br /> &mdash;Georges Simenon',
        '&ldquo;There are no passengers on spaceship earth. We are all crew.&rdquo; <br /> &mdash;Marshall McLuhan',
        '&ldquo;What a man needs in gardening is a cast-iron back, with a hinge in it.&rdquo; <br /> &mdash;Charles Dudley Warner',
        '&ldquo;Study nature, love nature, stay close to nature. It will never fail you.&rdquo; <br /> &mdash;Frank Lloyd Wright',
        '&ldquo;I only ask to be free. The butterflies are free.&rdquo; <br /> &mdash;Charles Dickens',
        '&ldquo;If I had to choose a religion, the sun as the universal giver of life would be my god.&rdquo; <br /> &mdash;Napoleon Bonaparte',
        '&ldquo;Heaven lent you a soul, Earth will lend a grave.&rdquo; <br /> &mdash;Christian Nestell Bovee',
        '&ldquo;And out of darkness came the hands that reach thro&rsquo; nature, moulding men.&rdquo; <br /> &mdash;Alfred Lord Tennyson',
        '&ldquo;Fishes live in the sea, as men do a-land; the great ones eat up the little ones.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;If you would know strength and patience, welcome the company of trees.&rdquo; <br /> &mdash;Hal Borland',
        '&ldquo;The temple bell stops but I still hear the sound coming out of the flowers.&rdquo; <br /> &mdash;Matsuo Basho',
        '&ldquo;Flowers are the sweetest things God ever made and forgot to put a soul into.&rdquo; <br /> &mdash;Henry Ward Beecher',
        '&ldquo;Won&rsquo;t you come into the garden? I would like my roses to see you.&rdquo; <br /> &mdash;Richard Brinsley Sheridan'
    ]

    let date = new Date()

    let month = date.getMonth()

    let monthArray = []

    if (month === 0) {
        monthArray = januaryArray
    } else if (month === 1) {
        monthArray = februaryArray
    } else if (month === 2) {
        monthArray = marchArray
    } else if (month === 3) {
        monthArray = aprilArray
    } else if (month === 4) {
        monthArray = mayArray
    } else if (month === 5) {
        monthArray = juneArray
    } else if (month === 6) {
        monthArray = julyArray
    } else if (month === 7) {
        monthArray = augustArray
    } else if (month === 8) {
        monthArray = septemberArray
    } else if (month === 9) {
        monthArray = octoberArray
    } else if (month === 10) {
        monthArray = novemberArray
    } else if (month === 11) {
        monthArray = decemberArray
    }

    let dayOfMonth = date.getDate()

    let natureQuote = monthArray[dayOfMonth - 1]

    let nature = `<h3>${natureQuote}</h3>`
    
    $('#nature').html(nature)
})