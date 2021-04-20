$(document).ready(function() {
    // '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

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
        '&ldquo;I have always wanted a bunny and I&rsquo;ll always have a rabbit the rest of my life.&rdquo; <br /> &mdash;Amy Sedaris'
    ]

    let mayArray = [
        // May Quotes
    ]

    let juneArray = [
        // June Quotes
    ]

    let julyArray = [
        // July Quotes
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