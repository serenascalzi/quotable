$(document).ready(function() {
    // '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

    let januaryArray = [
        '&ldquo;An intellectual is a man who doesn&rsquo;t know how to park a bike.&rdquo; <br /> &mdash;Spiro T. Agnew',
        '&ldquo;Prediction is very difficult, especially if it&rsquo;s about the future.&rdquo; <br /> &mdash;Niels Bohr',
        '&ldquo;Unemployment is capitalism&rsquo;s way of getting you to plant a garden.&rdquo; <br /> &mdash;Orson Scott Card',
        '&ldquo;I buy expensive suits. They just look cheap on me.&rdquo; <br /> &mdash;Warren Buffett',
        '&ldquo;Expert: a man who makes three correct guesses consecutively.&rdquo; <br /> &mdash;Laurence J. Peter',
        '&ldquo;Television is chewing gum for the eyes.&rdquo; <br /> &mdash;Frank Lloyd Wright',
        '&ldquo;There are three things you can do in a baseball game. You can win, or you can lose, or it can rain.&rdquo; <br /> &mdash;Casey Stengel',
        '&ldquo;Quote me as saying I was mis-quoted.&rdquo; <br /> &mdash;Groucho Marx',
        '&ldquo;It is to be observed that &lsquo;angling&rsquo; is the name given to fishing by people who can&rsquo;t fish.&rdquo; <br /> &mdash;Stephen Leacock',
        '&ldquo;Pair up in threes.&rdquo; <br /> &mdash;Yogi Berra',
        '&ldquo;A child of five would understand this. Send someone to fetch a child of five.&rdquo; <br /> &mdash;Groucho Marx',
        '&ldquo;We&rsquo;re overpaying him, but he&rsquo;s worth it.&rdquo; <br /> &mdash;Samuel Goldwyn',
        '&ldquo;Marriage is not just spiritual communion, it is also remembering to take out the trash.&rdquo; <br /> &mdash;Joyce Brothers',
        '&ldquo;The first condition of understanding a foreign country is to smell it.&rdquo; <br /> &mdash;Rudyard Kipling',
        '&ldquo;I sometimes think that God in creating man somewhat overestimated his ability.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;The only thing wrong with immortality is that it tends to go on forever.&rdquo; <br /> &mdash;Herb Caen',
        '&ldquo;Big girls need big diamonds.&rdquo; <br /> &mdash;Elizabeth Taylor',
        '&ldquo;It has yet to be proven that intelligence has any survival value.&rdquo; <br /> &mdash;Arthur C. Clarke',
        '&ldquo;A professor is someone who talks in someone else&rsquo;s sleep.&rdquo; <br /> &mdash;W. H. Auden',
        '&ldquo;If Stupidity got us into this mess, then why can&rsquo;t it get us out?&rdquo; <br /> &mdash;Will Rogers',
        '&ldquo;I busted a mirror and got seven years bad luck, but my lawyer thinks he can get me five.&rdquo; <br /> &mdash;Steven Wright',
        '&ldquo;I do not fear computers. I fear the lack of them.&rdquo; <br /> &mdash;Isaac Asimov',
        '&ldquo;In comic strips, the person on the left always speaks first.&rdquo; <br /> &mdash;George Carlin',
        '&ldquo;Only the mediocre are always at their best.&rdquo; <br /> &mdash;Jean Giraudoux',
        '&ldquo;Never have more children than you have car windows.&rdquo; <br /> &mdash;Erma Bombeck',
        '&ldquo;I improve on misquotation.&rdquo; <br /> &mdash;Cary Grant',
        '&ldquo;Space isn&rsquo;t remote at all. It&rsquo;s only an hour&rsquo;s drive away if your car could go straight upwards.&rdquo; <br /> &mdash;Fred Hoyle',
        '&ldquo;The older I grow the more I distrust the familiar doctrine that age brings wisdom.&rdquo; <br /> &mdash;H. L. Mencken',
        '&ldquo;Never wear anything that panics the cat.&rdquo; <br /> &mdash;P. J. O&rsquo;Rourke',
        '&ldquo;My life needs editing.&rdquo; <br /> &mdash;Mort Sahl'
    ]

    let februaryArray = [
        // February Quotes
        // February 29
        '&ldquo;What does it mean to pre-board? Do you get on before you get on?&rdquo; <br /> &mdash;George Carlin'
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

    let funnyQuote = monthArray[dayOfMonth - 1]

    let funny = `<h3>${funnyQuote}</h3>`
    
    $('#funny').html(funny)
})