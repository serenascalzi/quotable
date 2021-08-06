$(document).ready(function() {
    // '&ldquo;Quote&rdquo; <br /> &mdash;Attribution'

    let augustArray = [
        '&ldquo;I have tried to know absolutely nothing about a great many things, and I have succeeded fairly well.&rdquo; <br /> &mdash;Robert Benchley',
        '&ldquo;I don&rsquo;t deserve this award, but I have arthritis and I don&rsquo;t deserve that either.&rdquo; <br /> &mdash;Jack Benny',
        '&ldquo;Tell us your phobias and we will tell you what you are afraid of.&rdquo; <br /> &mdash;Robert Benchley',
        '&ldquo;A door is what a dog is perpetually on the wrong side of.&rdquo; <br /> &mdash;Ogden Nash',
        '&ldquo;Always make the audience suffer as much as possible.&rdquo; <br /> &mdash;Alfred Hitchcock'
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
        '&ldquo;There are nights when the wolves are silent and only the moon howls.&rdquo; <br /> &mdash;George Carlin',
        '&ldquo;A woman is like a tea bag &ndash; you can&rsquo;t tell how strong she is until you put her in hot water.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        '&ldquo;The better I get to know men, the more I find myself loving dogs.&rdquo; <br /> &mdash;Charles de Gaulle',
        '&ldquo;Ask five economists and you&rsquo;ll get five different answers &ndash; six if one went to Harvard.&rdquo; <br /> &mdash;Edgar Fiedler',
        '&ldquo;Camping is nature&rsquo;s way of promoting the motel business.&rdquo; <br /> &mdash;Dave Barry',
        '&ldquo;I can speak Esperanto like a native.&rdquo; <br /> &mdash;Spike Milligan',
        '&ldquo;If it was raining soup, the Irish would go out with forks.&rdquo; <br /> &mdash;Brendan Behan',
        '&ldquo;If government were a product, selling it would be illegal.&rdquo; <br /> &mdash;P. J. O&rsquo;Rourke',
        '&ldquo;Don&rsquo;t stay in bed, unless you can make money in bed.&rdquo; <br /> &mdash;George Burns',
        '&ldquo;I believe in luck: how else can you explain the success of those you dislike?&rdquo; <br /> &mdash;Jean Cocteau',
        '&ldquo;We have deep depth.&rdquo; <br /> &mdash;Yogi Berra',
        '&ldquo;I was a vegetarian until I started leaning toward the sunlight.&rdquo; <br /> &mdash;Rita Rudner',
        '&ldquo;Bachelors know more about women than married men; if they didn&rsquo;t they&rsquo;d be married too.&rdquo; <br /> &mdash;H. L. Mencken',
        '&ldquo;Lead us not into temptation. Just tell us where it is; we&rsquo;ll find it.&rdquo; <br /> &mdash;Sam Levenson',
        '&ldquo;Hell hath no fury like a bureaucrat scorned.&rdquo; <br /> &mdash;Milton Friedman',
        '&ldquo;Middle age is when a guy keeps turning off lights for economical rather than romantic reasons.&rdquo; <br /> &mdash;Lillian Gordy Carter',
        '&ldquo;Gambling: The sure way of getting nothing for something.&rdquo; <br /> &mdash;Wilson Mizner',
        '&ldquo;Never put off till tomorrow what you can do the day after tomorrow.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;Originality is the art of concealing your source.&rdquo; <br /> &mdash;Franklin P. Jones',
        '&ldquo;Never floss with a stranger.&rdquo; <br /> &mdash;Joan Rivers',
        '&ldquo;America is a land of taxation that was founded to avoid taxation.&rdquo; <br /> &mdash;Laurence J. Peter'
    ]

    let aprilArray = [
        '&ldquo;When I was about ten years old, I gave my teacher an April Fool&rsquo;s sandwich, which had a dead goldfish in it.&rdquo; <br /> &mdash;Alan Alda',
        '&ldquo;In heaven, all the interesting people are missing.&rdquo; <br /> &mdash;Friedrich Nietzsche',
        '&ldquo;I&rsquo;ve sometimes thought of marrying &ndash; and then I&rsquo;ve thought again.&rdquo; <br /> &mdash;Noel Coward',
        '&ldquo;A word to the wise is infuriating.&rdquo; <br /> &mdash;Hunter S. Thompson',
        '&ldquo;Housework can&rsquo;t kill you, but why take a chance?&rdquo; <br /> &mdash;Phyllis Diller',
        '&ldquo;I bought some instant water one time but I didn&rsquo;t know what to add to it.&rdquo; <br /> &mdash;Steven Wright',
        '&ldquo;Everything in life is somewhere else, and you get there in a car.&rdquo; <br /> &mdash;E. B. White',
        '&ldquo;If a cluttered desk is the sign of a cluttered mind, what is the significance of a clean desk?&rdquo; <br /> &mdash;Laurence J. Peter',
        '&ldquo;I believe in rules. Sure I do. If there weren&rsquo;t any rules, how could you break them?&rdquo; <br /> &mdash;Leo Durocher',
        '&ldquo;Forty for you, sixty for me. And equal partners we will be.&rdquo; <br /> &mdash;Joan Rivers',
        '&ldquo;I used to jog but the ice cubes kept falling out of my glass.&rdquo; <br /> &mdash;David Lee Roth',
        '&ldquo;French is the language that turns dirt into romance.&rdquo; <br /> &mdash;Stephen King',
        '&ldquo;To catch a husband is an art; to hold him is a job.&rdquo; <br /> &mdash;Simone de Beauvoir',
        '&ldquo;What I like to drink most is wine that belongs to others.&rdquo; <br /> &mdash;Diogenes',
        '&ldquo;I&rsquo;m spending a year dead for tax reasons.&rdquo; <br /> &mdash;Douglas Adams',
        '&ldquo;You don&rsquo;t pay taxes &ndash; they take taxes.&rdquo; <br /> &mdash;Chris Rock',
        '&ldquo;In politics stupidity is not a handicap.&rdquo; <br /> &mdash;Napoleon Bonaparte',
        '&ldquo;It ain&rsquo;t the heat, it&rsquo;s the humility.&rdquo; <br /> &mdash;Yogi Berra',
        '&ldquo;People everywhere confuse what they read in newspapers with news.&rdquo; <br /> &mdash;A. J. Liebling',
        '&ldquo;You can learn many things from children. How much patience you have, for instance.&rdquo; <br /> &mdash;Franklin P. Jones',
        '&ldquo;My mom used to say that Greek Easter was later because then you get stuff cheaper.&rdquo; <br /> &mdash;Amy Sedaris',
        '&ldquo;Give me a couple of years, and I&rsquo;ll make that actress an overnight success.&rdquo; <br /> &mdash;Samuel Goldwyn',
        '&ldquo;I have a mind to join a club and beat you over the head with it.&rdquo; <br /> &mdash;Groucho Marx',
        '&ldquo;Communism is like one big phone company.&rdquo; <br /> &mdash;Lenny Bruce',
        '&ldquo;Instant gratification takes too long.&rdquo; <br /> &mdash;Carrie Fisher',
        '&ldquo;Every dogma has its day.&rdquo; <br /> &mdash;Anthony Burgess',
        '&ldquo;There&rsquo;s a great power in words, if you don&rsquo;t hitch too many of them together.&rdquo; <br /> &mdash;Josh Billings',
        '&ldquo;They didn&rsquo;t want it good, they wanted it Wednesday.&rdquo; <br /> &mdash;Robert A. Heinlein',
        '&ldquo;For every complex problem there is an answer that is clear, simple, and wrong.&rdquo; <br /> &mdash;H. L. Mencken',
        '&ldquo;Age is not important unless you&rsquo;re a cheese.&rdquo; <br /> &mdash;Helen Hayes'
    ]

    let mayArray = [
        '&ldquo;The one thing I do not want to be called is First Lady. It sounds like a saddle horse.&rdquo; <br /> &mdash;Jackie Kennedy',
        '&ldquo;Women who seek to be equal with men lack ambition.&rdquo; <br /> &mdash;Timothy Leary',
        '&ldquo;Some people drink from the fountain of knowledge, others just gargle.&rdquo; <br /> &mdash;Robert Anthony',
        '&ldquo;The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.&rdquo; <br /> &mdash;Mark Russell',
        '&ldquo;When you&rsquo;re eight years old nothing is your business.&rdquo; <br /> &mdash;Lenny Bruce',
        '&ldquo;Life is a zoo in a jungle.&rdquo; <br /> &mdash;Peter De Vries',
        '&ldquo;I have a wonderful make-up crew. They&rsquo;re the same people restoring the Statue of Liberty.&rdquo; <br /> &mdash;Bob Hope',
        '&ldquo;You want a friend in Washington? Get a dog.&rdquo; <br /> &mdash;Harry S. Truman',
        '&ldquo;A lot of people are afraid of heights. Not me, I&rsquo;m afraid of widths.&rdquo; <br /> &mdash;Steven Wright',
        '&ldquo;If evolution really works, how come mothers only have two hands?&rdquo; <br /> &mdash;Milton Berle',
        '&ldquo;The best way to keep one&rsquo;s word is not to give it.&rdquo; <br /> &mdash;Napoleon Bonaparte',
        '&ldquo;Punctuality is the virtue of the bored.&rdquo; <br /> &mdash;Evelyn Waugh',
        '&ldquo;My most brilliant achievement was my ability to be able to persuade my wife to marry me.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;Because of their size, parents may be difficult to discipline properly.&rdquo; <br /> &mdash;P. J. O&rsquo;Rourke',
        '&ldquo;Once, during Prohibition, I was forced to live for days on nothing but food and water.&rdquo; <br /> &mdash;W. C. Fields',
        '&ldquo;He was like a cock who thought the sun had risen to hear him crow.&rdquo; <br /> &mdash;George Eliot',
        '&ldquo;If you ask me anything I don&rsquo;t know, I&rsquo;m not going to answer.&rdquo; <br /> &mdash;Yogi Berra',
        '&ldquo;The avoidance of taxes is the only intellectual pursuit that still carries any reward.&rdquo; <br /> &mdash;John Maynard Keynes',
        '&ldquo;You can lead a man to Congress, but you can&rsquo;t make him think.&rdquo; <br /> &mdash;Milton Berle',
        '&ldquo;When a man opens a car door for his wife, it&rsquo;s either a new car or a new wife.&rdquo; <br /> &mdash;Prince Philip',
        '&ldquo;I am at heart a gentleman.&rdquo; <br /> &mdash;Marlene Dietrich',
        '&ldquo;When in doubt tell the truth.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;Yield to temptation. It may not pass your way again.&rdquo; <br /> &mdash;Robert A. Heinlein',
        '&ldquo;We are here and it is now. Further than that, all human knowledge is moonshine.&rdquo; <br /> &mdash;H. L. Mencken',
        '&ldquo;Macho does not prove mucho.&rdquo; <br /> &mdash;Zsa Zsa Gabor',
        '&ldquo;Fashions have done more harm than revolutions.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;I have a memory like an elephant. I remember every elephant I&rsquo;ve ever met.&rdquo; <br /> &mdash;Herb Caen',
        '&ldquo;Be thankful we&rsquo;re not getting all the government we&rsquo;re paying for.&rdquo; <br /> &mdash;Will Rogers',
        '&ldquo;A sure cure for seasickness is to sit under a tree.&rdquo; <br /> &mdash;Spike Milligan',
        '&ldquo;What after all, is a halo? It&rsquo;s only one more thing to keep clean.&rdquo; <br /> &mdash;Christopher Fry',
        '&ldquo;She got her looks from her father. He&rsquo;s a plastic surgeon.&rdquo; <br /> &mdash;Groucho Marx'
    ]

    let juneArray = [
        '&ldquo;I have the body of an eighteen year old. I keep it in the fridge.&rdquo; <br /> &mdash;Spike Milligan',
        '&ldquo;Middle age is when your age starts to show around your middle.&rdquo; <br /> &mdash;Bob Hope',
        '&ldquo;I never knew whether to pity or congratulate a man on coming to his senses.&rdquo; <br /> &mdash;William Makepeace Thackeray',
        '&ldquo;Nobody understands anyone 18, including those who are 18.&rdquo; <br /> &mdash;Jim Bishop',
        '&ldquo;Prejudice is a great time saver. You can form opinions without having to get the facts.&rdquo; <br /> &mdash;E. B. White',
        '&ldquo;If you must have motivation, think of your paycheck on Friday.&rdquo; <br /> &mdash;Noel Coward',
        '&ldquo;That money talks, I&rsquo;ll not deny, I heard it once: It said, &lsquo;Goodbye&rsquo;.&rdquo; <br /> &mdash;Richard Armour',
        '&ldquo;Everybody talks about the weather, but nobody does anything about it.&rdquo; <br /> &mdash;Charles Dudley Warner',
        '&ldquo;Anytime you see a turtle up on top of a fence post, you know he had some help.&rdquo; <br /> &mdash;Unknown',
        '&ldquo;We all pay for life with death, so everything in between should be free.&rdquo; <br /> &mdash;Bill Hicks',
        '&ldquo;My fake plants died because I did not pretend to water them.&rdquo; <br /> &mdash;Mitch Hedberg',
        '&ldquo;Any kid will run any errand for you, if you ask at bedtime.&rdquo; <br /> &mdash;Red Skelton',
        '&ldquo;A psychiatrist asks a lot of expensive questions your wife asks for nothing.&rdquo; <br /> &mdash;Joey Adams',
        '&ldquo;In the Halls of Justice the only justice is in the halls.&rdquo; <br /> &mdash;Lenny Bruce',
        '&ldquo;When my mother had to get dinner for 8 she&rsquo;d just make enough for 16 and only serve half.&rdquo; <br /> &mdash;Gracie Allen',
        '&ldquo;Dad taught me everything I know. Unfortunately, he didn&rsquo;t teach me everything he knows.&rdquo; <br /> &mdash;Al Unser',
        '&ldquo;The secrets of success are a good wife and a steady job. My wife told me.&rdquo; <br /> &mdash;Howard Nemerov',
        '&ldquo;Guilt: the gift that keeps on giving.&rdquo; <br /> &mdash;Erma Bombeck',
        '&ldquo;No one appreciates the very special genius of your conversation as the dog does.&rdquo; <br /> &mdash;Christopher Morley',
        '&ldquo;I love Mickey Mouse more than any woman I have ever known.&rdquo; <br /> &mdash;Walt Disney',
        '&ldquo;To know one&rsquo;s self is wisdom, but not to know one&rsquo;s neighbors is genius.&rdquo; <br /> &mdash;Minna Antrim',
        '&ldquo;If you don&rsquo;t think every day is a good day, just try missing one.&rdquo; <br /> &mdash;Cavett Robert',
        '&ldquo;The husband who decides to surprise his wife is often very much surprised himself.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;Always live in the ugliest house on the street &ndash; then you don&rsquo;t have to look at it.&rdquo; <br /> &mdash;David Hockney',
        '&ldquo;A crown is merely a hat that lets the rain in.&rdquo; <br /> &mdash;Frederick the Great',
        '&ldquo;Cure for an obsession: get another one.&rdquo; <br /> &mdash;Mason Cooley',
        '&ldquo;I&rsquo;m a holy man minus the holiness.&rdquo; <br /> &mdash;E. M. Forster',
        '&ldquo;Why don&rsquo;t you get a haircut? You look like a chrysanthemum.&rdquo; <br /> &mdash;P. G. Wodehouse',
        '&ldquo;If you steal from one author it&rsquo;s plagiarism; if you steal from many it&rsquo;s research.&rdquo; <br /> &mdash;Wilson Mizner',
        '&ldquo;Science may never come up with a better office communication system than the coffee break.&rdquo; <br /> &mdash;Earl Wilson'
    ]

    let julyArray = [
        '&ldquo;For NASA, space is still a high priority.&rdquo; <br /> &mdash;Dan Quayle',
        '&ldquo;Fortune knocks but once, but misfortune has much more patience.&rdquo; <br /> &mdash;Laurence J. Peter',
        '&ldquo;If it weren&rsquo;t for Philo T. Farnsworth, inventor of television, we&rsquo;d still be eating frozen radio dinners.&rdquo; <br /> &mdash;Johnny Carson',
        '&ldquo;If I have to lay an egg for my country, I&rsquo;ll do it.&rdquo; <br /> &mdash;Bob Hope',
        '&ldquo;I like long walks, especially when they are taken by people who annoy me.&rdquo; <br /> &mdash;Fred Allen',
        '&ldquo;A loafer always has the correct time.&rdquo; <br /> &mdash;Kin Hubbard',
        '&ldquo;A jury is composed of twelve men of average ignorance.&rdquo; <br /> &mdash;Herbert Spencer',
        '&ldquo;I have never been hurt by what I have not said.&rdquo; <br /> &mdash;Calvin Coolidge',
        '&ldquo;I have made good judgments in the past. I have made good judgments in the future.&rdquo; <br /> &mdash;Dan Quayle',
        '&ldquo;I never saw a lawyer yet who would admit he was making money.&rdquo; <br /> &mdash;Mary Roberts Rinehart',
        '&ldquo;Education is a progressive discovery of our own ignorance.&rdquo; <br /> &mdash;Will Durant',
        '&ldquo;Never eat spinach just before going on the air.&rdquo; <br /> &mdash;Dan Rather',
        '&ldquo;I did not have three thousand pairs of shoes, I had one thousand and sixty.&rdquo; <br /> &mdash;Imelda Marcos',
        '&ldquo;Cabbage: a familiar kitchen-garden vegetable about as large and wise as a man&rsquo;s head.&rdquo; <br /> &mdash;Ambrose Bierce',
        '&ldquo;Insanity is hereditary; you get it from your children.&rdquo; <br /> &mdash;Sam Levenson',
        '&ldquo;When all is lost, ask the I.R.S. &ndash; they&rsquo;ll find something.&rdquo; <br /> &mdash;Douglas Horton',
        '&ldquo;A man always has two reasons for doing anything: a good reason and the real reason.&rdquo; <br /> &mdash;J. P. Morgan',
        '&ldquo;The other night I ate at a real nice family restaurant. Every table had an argument going.&rdquo; <br /> &mdash;George Carlin',
        '&ldquo;I have had more trouble with myself than with any other man.&rdquo; <br /> &mdash;Dwight L. Moody',
        '&ldquo;Never trust anything that can think for itself if you can&rsquo;t see where it keeps its brain.&rdquo; <br /> &mdash;J. K. Rowling',
        '&ldquo;If you think it&rsquo;s hard to meet new people, try picking up the wrong golf ball.&rdquo; <br /> &mdash;Jack Lemmon',
        '&ldquo;I drink to make other people interesting.&rdquo; <br /> &mdash;George Jean Nathan',
        '&ldquo;This stammer got me a home in Beverly Hills, and I&rsquo;m not about to screw with it now.&rdquo; <br /> &mdash;Bob Newhart',
        '&ldquo;Every cloud has its silver lining but it is sometimes a little difficult to get it to the mint.&rdquo; <br /> &mdash;Don Marquis',
        '&ldquo;Freedom of the press is guaranteed only to those who own one.&rdquo; <br /> &mdash;A. J. Liebling',
        '&ldquo;I am not a member of any organized political party. I am a Democrat.&rdquo; <br /> &mdash;Will Rogers',
        '&ldquo;Cats are intended to teach us that not everything in nature has a function.&rdquo; <br /> &mdash;Garrison Keillor',
        '&ldquo;Monkeys are superior to men in this: when a monkey looks into a mirror, he sees a monkey.&rdquo; <br /> &mdash;Malcolm de Chazal',
        '&ldquo;The only athletic sport I ever mastered was backgammon.&rdquo; <br /> &mdash;Douglas William Jerrold',
        '&ldquo;Burt Reynolds once asked me out. I was in his room.&rdquo; <br /> &mdash;Phyllis Diller',
        '&ldquo;I am a Ford, not a Lincoln.&rdquo; <br /> &mdash;Gerald R. Ford'
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