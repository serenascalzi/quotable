$(document).ready(function() {
    // '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

    let marchArray = [
        '&ldquo;Make crime pay. Become a lawyer.&rdquo; <br /> &mdash;Will Rogers',
        '&ldquo;A man who has never made a woman angry is a failure in life.&rdquo; <br /> &mdash;Christopher Morley',
        '&ldquo;I&rsquo;ve got to keep breathing. It&rsquo;ll be my worst business mistake if I don&rsquo;t.&rdquo; <br /> &mdash;Steve Martin',
        '&ldquo;The safe way to double your money is to fold it over once and put it in your pocket.&rdquo; <br /> &mdash;Kin Hubbard',
        '&ldquo;The chief obstacle to the progress of the human race is the human race.&rdquo; <br /> &mdash;Don Marquis',
        '&ldquo;Genius is more often found in a cracked pot than in a whole one.&rdquo; <br /> &mdash;E. B. White',
        '&ldquo;I don&rsquo;t try to describe the future. I try to prevent it.&rdquo; <br /> &mdash;Ray Bradbury',
        '&ldquo;I write to discover what I think. After all, the bars aren&rsquo;t open that early.&rdquo; <br /> &mdash;Daniel J. Boorstin',
        '&ldquo;By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.&rdquo; <br /> &mdash;Robert Frost',
        '&ldquo;There cannot be a crisis next week. My schedule is already full.&rdquo; <br /> &mdash;Henry Kissinger',
        '&ldquo;There are nights when the wolves are silent and only the moon howls.&rdquo; <br /> &mdash;George Carlin'
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
        '&ldquo;My life needs editing.&rdquo; <br /> &mdash;Mort Sahl',
        '&ldquo;For your information, I would like to ask a question.&rdquo; <br /> &mdash;Samuel Goldwyn'
    ]

    let februaryArray = [
        '&ldquo;We are all born mad. Some remain so.&rdquo; <br /> &mdash;Samuel Beckett',
        '&ldquo;I don&rsquo;t believe it. Prove it to me and I still won&rsquo;t believe it.&rdquo; <br /> &mdash;Douglas Adams',
        '&ldquo;As for our majority&hellip; one is enough.&rdquo; <br /> &mdash;Benjamin Disraeli',
        '&ldquo;I didn&rsquo;t attend the funeral, but I sent a nice letter saying I approved of it.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;This suspense is terrible. I hope it will last.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;To be or not to be. That&rsquo;s not really a question.&rdquo; <br /> &mdash;Jean-Luc Godard',
        '&ldquo;Common sense is the collection of prejudices acquired by age eighteen.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;Spaghetti can be eaten most successfully if you inhale it like a vacuum cleaner.&rdquo; <br /> &mdash;Sophia Loren',
        '&ldquo;Nothing is as obnoxious as other people&rsquo;s luck.&rdquo; <br /> &mdash;F. Scott Fitzgerald',
        '&ldquo;I was sleeping the other night, alone, thanks to the exterminator.&rdquo; <br /> &mdash;Emo Philips',
        '&ldquo;At my age flowers scare me.&rdquo; <br /> &mdash;George Burns',
        '&ldquo;If you&rsquo;re going to do something tonight that you&rsquo;ll be sorry for tomorrow morning, sleep late.&rdquo; <br /> &mdash;Henny Youngman',
        '&ldquo;I&rsquo;ve been on so many blind dates, I should get a free dog.&rdquo; <br /> &mdash;Wendy Liebman',
        '&ldquo;If love is the answer, could you please rephrase the question?&rdquo; <br /> &mdash;Lily Tomlin',
        '&ldquo;A good film is when the price of the dinner, the theatre admission and the babysitter were worth it.&rdquo; <br /> &mdash;Alfred Hitchcock',
        '&ldquo;There&rsquo;s only one way to have a happy marriage and as soon as I learn what it is I&rsquo;ll get married again.&rdquo; <br /> &mdash;Clint Eastwood',
        '&ldquo;I am a kind of paranoid in reverse. I suspect people of plotting to make me happy.&rdquo; <br /> &mdash;J. D. Salinger',
        '&ldquo;Age is something that doesn&rsquo;t matter, unless you are a cheese.&rdquo; <br /> &mdash;Luis Bunuel',
        '&ldquo;One-fifth of the people are against everything all the time.&rdquo; <br /> &mdash;Robert Kennedy',
        '&ldquo;Every man has his follies &ndash; and often they are the most interesting thing he has got.&rdquo; <br /> &mdash;Josh Billings',
        '&ldquo;Everybody knows how to raise children, except the people who have them.&rdquo; <br /> &mdash;P. J. O&rsquo;Rourke',
        '&ldquo;An optimist is a fellow who believes a housefly is looking for a way to get out.&rdquo; <br /> &mdash;George Jean Nathan',
        '&ldquo;Candy is dandy but liquor is quicker.&rdquo; <br /> &mdash;Ogden Nash',
        '&ldquo;I want my children to have all the things I couldn&rsquo;t afford. Then I want to move in with them.&rdquo; <br /> &mdash;Phyllis Diller',
        '&ldquo;If two wrongs don&rsquo;t make a right, try three.&rdquo; <br /> &mdash;Laurence J. Peter',
        '&ldquo;Weather forecast for tonight: dark.&rdquo; <br /> &mdash;George Carlin',
        '&ldquo;Never get a mime talking. He won&rsquo;t stop.&rdquo; <br /> &mdash;Marcel Marceau',
        '&ldquo;It&rsquo;s time for the human race to enter the solar system.&rdquo; <br /> &mdash;Dan Quayle',
        '&ldquo;What does it mean to pre-board? Do you get on before you get on?&rdquo; <br /> &mdash;George Carlin'
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