$(document).ready(function() {
    // '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

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
        // February 29
        '&ldquo;The stars that have most glory have no rest.&rdquo; <br /> &mdash;Samuel Daniel'
    ]

    let marchArray = [
        // March Quotes
    ]

    let aprilArray = [
        // April Quotes
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