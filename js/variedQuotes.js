$(document).ready(function() {
    let januaryArray = [
        '&ldquo;I think in terms of the day&rsquo;s resolutions, not the years&rsquo;.&rdquo; <br /> &mdash;Henry Moore',
        '&ldquo;The sweetest of all sounds is praise.&rdquo; <br /> &mdash;Xenophon',
        '&ldquo;We must be willing to let go of the life we have planned, so as to have the life that is waiting for us.&rdquo; <br /> &mdash;E. M. Forster',
        '&ldquo;If youth knew; if age could.&rdquo; <br /> &mdash;Sigmund Freud',
        '&ldquo;The art of being happy lies in the power of extracting happiness from common things.&rdquo; <br /> &mdash;Henry Ward Beecher',
        '&ldquo;There is nothing which we receive with so much reluctance as advice.&rdquo; <br /> &mdash;Joseph Addison',
        '&ldquo;Believe and act as if it were impossible to fail.&rdquo; <br /> &mdash;Charles Kettering',
        '&ldquo;Defeat may serve as well as victory to shake the soul and let the glory out.&rdquo; <br /> &mdash;Edwin Markham',
        '&ldquo;The person who can bring the spirit of laughter into a room is indeed blessed.&rdquo; <br /> &mdash;Bennett Cerf',
        '&ldquo;Our character is what we do when we think no one is looking.&rdquo; <br /> &mdash;H. Jackson Brown, Jr.',
        '&ldquo;We cannot put off living until we are ready.&rdquo; <br /> &mdash;Jose Ortega y Gasset',
        '&ldquo;Millions saw the apple fall, but Newton was the one who asked why.&rdquo; <br /> &mdash;Bernard Baruch',
        '&ldquo;Anger cannot be dishonest.&rdquo; <br /> &mdash;Marcus Aurelius',
        '&ldquo;If you find it in your heart to care for somebody else, you will have succeeded.&rdquo; <br /> &mdash;Maya Angelou',
        '&ldquo;Wherever there is a human being, there is an opportunity for a kindness.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        '&ldquo;The price of greatness is responsibility.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;Thousands of geniuses live and die undiscovered &ndash; either by themselves or by others.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;We are not makers of history. We are made by history.&rdquo; <br /> &mdash;Martin Luther King, Jr.',
        '&ldquo;A certain amount of opposition is a great help to a man. Kites rise against, not with, the wind.&rdquo; <br /> &mdash;Lewis Mumford',
        '&ldquo;Failure is success if we learn from it.&rdquo; <br /> &mdash;Malcolm Forbes',
        '&ldquo;There are those who give with joy, and that joy is their reward.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;And that&rsquo;s the way it is.&rdquo; <br /> &mdash;Walter Cronkite',
        '&ldquo;It&rsquo;s better to be a lion for a day than a sheep all your life.&rdquo; <br /> &mdash;Elizabeth Kenny',
        '&ldquo;Don&rsquo;t think, just do.&rdquo; <br /> &mdash;Horace',
        '&ldquo;It is not how old you are, but how you are old.&rdquo; <br /> &mdash;Jules Renard',
        '&ldquo;Without wearing any mask we are conscious of, we have a special face for each friend.&rdquo; <br /> &mdash;Oliver Wendell Holmes, Sr.',
        '&ldquo;Our entire life &ndash; consists ultimately in accepting ourselves as we are.&rdquo; <br /> &mdash;Jean Anouilh',
        '&ldquo;Peace is its own reward.&rdquo; <br /> &mdash;Mahatma Gandhi',
        '&ldquo;Music is moonlight in the gloomy night of life.&rdquo; <br /> &mdash;Jean Paul',
        '&ldquo;A man who gives his children habits of industry provides for them better than by giving them fortune.&rdquo; <br /> &mdash;Richard Whately',
        '&ldquo;We must make the best of those ills which cannot be avoided.&rdquo; <br /> &mdash;Clarence Day'
    ]

    let februaryArray = [
        '&ldquo;Every failure is a step to success.&rdquo; <br /> &mdash;William Whewell',
        '&ldquo;Kites rise highest against the wind &ndash; not with it.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;When your work speaks for itself, don&rsquo;t interrupt.&rdquo; <br /> &mdash;Henry J. Kaiser',
        '&ldquo;You may delay, but time will not.&rdquo; <br /> &mdash;Benjamin Franklin',
        '&ldquo;Dreams are necessary to life.&rdquo; <br /> &mdash;Anais Nin',
        '&ldquo;What sculpture is to a block of marble, education is to the soul.&rdquo; <br /> &mdash;Joseph Addison',
        '&ldquo;I am still learning.&rdquo; <br /> &mdash;Michelangelo',
        '&ldquo;Curiosity will conquer fear even more than bravery will.&rdquo; <br /> &mdash;James Stephens',
        '&ldquo;Words are but the signs of ideas.&rdquo; <br /> &mdash;Samuel Johnson',
        '&ldquo;Be faithful to that which exists within yourself.&rdquo; <br /> &mdash;Andre Gide',
        '&ldquo;Man is so made that when anything fires his soul, impossibilities vanish.&rdquo; <br /> &mdash;Jean de La Fontaine',
        '&ldquo;Just as a candle cannot burn without fire, men cannot live without a spiritual life.&rdquo; <br /> &mdash;Buddha',
        '&ldquo;The only way to discover the limits of the possible is to go beyond them into the impossible.&rdquo; <br /> &mdash;Arthur C. Clarke',
        '&ldquo;Love the giver more than the gift.&rdquo; <br /> &mdash;Brigham Young',
        '&ldquo;Friendship is Love without his wings!&rdquo; <br /> &mdash;Lord Byron',
        '&ldquo;It&rsquo;s always too early to quit.&rdquo; <br /> &mdash;Norman Vincent Peale',
        '&ldquo;A man is but the product of his thoughts what he thinks, he becomes.&rdquo; <br /> &mdash;Mahatma Gandhi',
        '&ldquo;There are many ways of going forward, but only one way of standing still.&rdquo; <br /> &mdash;Franklin D. Roosevelt',
        '&ldquo;Little minds are tamed and subdued by misfortune; but great minds rise above them.&rdquo; <br /> &mdash;Washington Irving',
        '&ldquo;I didn&rsquo;t think; I experimented.&rdquo; <br /> &mdash;Anthony Burgess',
        '&ldquo;Ideas shape the course of history.&rdquo; <br /> &mdash;John Maynard Keynes',
        '&ldquo;Reason is God&rsquo;s crowning gift to man.&rdquo; <br /> &mdash;Sophocles',
        '&ldquo;The world of reality has its limits; the world of imagination is boundless.&rdquo; <br /> &mdash;Jean-Jacques Rousseau',
        '&ldquo;It is the fight alone that pleases us, not the victory.&rdquo; <br /> &mdash;Blaise Pascal',
        '&ldquo;They can conquer who believe they can.&rdquo; <br /> &mdash;Virgil',
        '&ldquo;A cloudy day is no match for a sunny disposition.&rdquo; <br /> &mdash;William Arthur Ward',
        '&ldquo;Time passes irrevocably.&rdquo; <br /> &mdash;Virgil',
        '&ldquo;You can never plan the future by the past.&rdquo; <br /> &mdash;Edmund Burke',
        '&ldquo;You grow up the day you have the first real laugh at yourself.&rdquo; <br /> &mdash;Ethel Barrymore'
    ]

    let marchArray = [
        '&ldquo;Everything&rsquo;s got a moral, if only you can find it.&rdquo; <br /> &mdash;Lewis Carroll',
        '&ldquo;The whole secret of life is to be interested in one thing profoundly and in a thousand things well.&rdquo; <br /> &mdash;Horace Walpole',
        '&ldquo;Everything has been figured out, expect how to live.&rdquo; <br /> &mdash;Jean-Paul Sartre',
        '&ldquo;The more refined and subtle our minds, the more vulnerable they are.&rdquo; <br /> &mdash;Paul Tournier',
        '&ldquo;When you doubt, abstain.&rdquo; <br /> &mdash;Ambrose Bierce',
        '&ldquo;The art of writing is the art of discovering what you believe.&rdquo; <br /> &mdash;Gustave Flaubert',
        '&ldquo;Prosperity tries the fortunate, adversity the great.&rdquo; <br /> &mdash;Rose Kennedy',
        '&ldquo;What is called genius is the abundance of life and health.&rdquo; <br /> &mdash;Henry David Thoreau',
        '&ldquo;A good laugh is sunshine in the house.&rdquo; <br /> &mdash;William Makepeace Thackeray',
        '&ldquo;Never in the field of human conflict was so much owed by so many to so few.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;At times I think and at times I am.&rdquo; <br /> &mdash;Paul Valery',
        '&ldquo;Courage is the ladder on which all the other virtues mount.&rdquo; <br /> &mdash;Clare Boothe Luce',
        '&ldquo;To live is to think.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        '&ldquo;Every burden is a blessing.&rdquo; <br /> &mdash;Walt Kelly',
        '&ldquo;The secret of happiness is something to do.&rdquo; <br /> &mdash;John Burroughs',
        '&ldquo;The true art of memory is the art of attention.&rdquo; <br /> &mdash;Samuel Johnson',
        '&ldquo;Think where man&rsquo;s glory most begins and ends, and say my glory was I had such friends.&rdquo; <br /> &mdash;William Butler Yeats',
        '&ldquo;Peace and justice are two sides of the same coin.&rdquo; <br /> &mdash;Dwight D. Eisenhower',
        '&ldquo;Plodding wins the race.&rdquo; <br /> &mdash;Aesop',
        '&ldquo;To hold a pen is to be at war.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;Pennies do not come from heaven. They have to be earned here on earth.&rdquo; <br /> &mdash;Margaret Thatcher',
        '&ldquo;In fair weather prepare for foul.&rdquo; <br /> &mdash;Thomas Fuller',
        '&ldquo;The man who is swimming against the stream knows the strength of it.&rdquo; <br /> &mdash;Woodrow Wilson',
        '&ldquo;There is nothing like a dream to create the future.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;Never forget the three powerful resources you always have available to you: love, prayer, and forgiveness.&rdquo; <br /> &mdash;H. Jackson Brown, Jr.',
        '&ldquo;Silence is the mother of truth.&rdquo; <br /> &mdash;Benjamin Disraeli',
        '&ldquo;The best way to keep your friends is not to give them away.&rdquo; <br /> &mdash;Wilson Mizner',
        '&ldquo;Everything that is beautiful and noble is the product of reason and calculation.&rdquo; <br /> &mdash;Charles Baudelaire',
        '&ldquo;The more things change, the more they are the same.&rdquo; <br /> &mdash;Alphonse Karr',
        '&ldquo;Words are, of course, the most powerful drug used by mankind.&rdquo; <br /> &mdash;Rudyard Kipling',
        '&ldquo;Tact is the ability to describe others as they see themselves.&rdquo; <br /> &mdash;Abraham Lincoln'
    ]

    let aprilArray = [
        '&ldquo;Here cometh April again, and as far as I can see the world hath more fools in it than ever.&rdquo; <br /> &mdash;Charles Lamb',
        '&ldquo;Worry never robs tomorrow of its sorrow, it only saps today of its joy.&rdquo; <br /> &mdash;Leo Buscaglia',
        '&ldquo;The wisdom of the wise and the experience of the ages are perpetuated by quotations.&rdquo; <br /> &mdash;Benjamin Disraeli',
        '&ldquo;A pure hand needs no glove to cover it.&rdquo; <br /> &mdash;Nathaniel Hawthorne',
        '&ldquo;They always say time changes things, but you actually have to change them yourself.&rdquo; <br /> &mdash;Andy Warhol',
        '&ldquo;The most effective way to do it, is to do it.&rdquo; <br /> &mdash;Amelia Earhart',
        '&ldquo;If you can&rsquo;t feed a hundred people, then feed just one.&rdquo; <br /> &mdash;Mother Teresa',
        '&ldquo;The present time has one advantage over every other &ndash; it is our own.&rdquo; <br /> &mdash;Charles Caleb Colton',
        '&ldquo;Life is but thought.&rdquo; <br /> &mdash;Sara Teasdale',
        '&ldquo;Every charitable act is a stepping stone toward heaven.&rdquo; <br /> &mdash;Henry Ward Beecher',
        '&ldquo;Progress lies not in enhancing what is, but in advancing toward what will be.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;We are no longer happy so soon as we wish to be happier.&rdquo; <br /> &mdash;Walter Savage Landor',
        '&ldquo;All the art of living lies in a fine mingling of letting go and holding on.&rdquo; <br /> &mdash;Havelock Ellis',
        '&ldquo;The boisterous sea of liberty is never without a wave.&rdquo; <br /> &mdash;Thomas Jefferson',
        '&ldquo;We have a system that increasingly taxes work and subsidizes nonwork.&rdquo; <br /> &mdash;Milton Friedman',
        '&ldquo;Never retreat. Never explain. Get it done and let them howl.&rdquo; <br /> &mdash;Benjamin Jowett',
        '&ldquo;The mystery of government is not how Washington works but how to make it stop.&rdquo; <br /> &mdash;P. J. O&rsquo;Rourke',
        '&ldquo;A penny saved is a penny earned.&rdquo; <br /> &mdash;Benjamin Franklin',
        '&ldquo;Experience is simply the name we give our mistakes.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tomorrow.&rdquo; <br /> &mdash;Robert H. Goddard',
        '&ldquo;Easter is meant to be a symbol of hope, renewal, and new life.&rdquo; <br /> &mdash;Janine di Giovanni',
        '&ldquo;This is the most joyful day that ever I saw in my pilgrimage on earth.&rdquo; <br /> &mdash;Donald Cargill',
        '&ldquo;It is better to know some of the questions than all of the answers.&rdquo; <br /> &mdash;James Thurber',
        '&ldquo;Sweet mercy is nobility&rsquo;s true badge.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;Honest disagreement is often a good sign of progress.&rdquo; <br /> &mdash;Mahatma Gandhi',
        '&ldquo;He has achieved success who has worked well, laughed often, and loved much.&rdquo; <br /> &mdash;Elbert Hubbard',
        '&ldquo;Perfection itself is imperfection.&rdquo; <br /> &mdash;Vladimir Horowitz',
        '&ldquo;How little do they see what really is, who frame their hasty judgment upon that which seems.&rdquo; <br /> &mdash;Daniel Webster',
        '&ldquo;I imagine that yes is the only living thing.&rdquo; <br /> &mdash;e. e. cummings',
        '&ldquo;People seldom refuse help, if one offers it in the right way.&rdquo; <br /> &mdash;A. C. Benson'
    ]

    let mayArray = [
        '&ldquo;Forgiveness is a funny thing. It warms the heart and cools the sting.&rdquo; <br /> &mdash;William Arthur Ward',
        '&ldquo;I hear, I know. I see, I remember. I do, I understand.&rdquo; <br /> &mdash;Confucius',
        '&ldquo;When I pray, coincidences happen, and when I don&rsquo;t, they don&rsquo;t.&rdquo; <br /> &mdash;William Temple',
        '&ldquo;More law, less justice.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        '&ldquo;Even death is not to be feared by one who has lived wisely.&rdquo; <br /> &mdash;Buddha',
        '&ldquo;It would not be possible to praise nurses too highly.&rdquo; <br /> &mdash;Stephen Ambrose',
        '&ldquo;The Soul is the voice of the body&rsquo;s interests.&rdquo; <br /> &mdash;George Santayana',
        '&ldquo;All great achievements require time.&rdquo; <br /> &mdash;Maya Angelou',
        '&ldquo;The love of a mother is the veil of a softer light between the heart and the heavenly Father.&rdquo; <br /> &mdash;Samuel Taylor Coleridge',
        '&ldquo;Glory is fleeting, but obscurity is forever.&rdquo; <br /> &mdash;Napoleon Bonaparte',
        '&ldquo;Necessity dispenseth with decorum.&rdquo; <br /> &mdash;Thomas Carlyle',
        '&ldquo;He who angers you conquers you.&rdquo; <br /> &mdash;Elizabeth Kenny',
        '&ldquo;Everything popular is wrong.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;Real happiness is cheap enough, yet how dearly we pay for its counterfeit.&rdquo; <br /> &mdash;Hosea Ballou',
        '&ldquo;It is not the mountain we conquer but ourselves.&rdquo; <br /> &mdash;Edmund Hillary',
        '&ldquo;Words are often seen hunting for an idea, but ideas are never seen hunting for words.&rdquo; <br /> &mdash;Josh Billings',
        '&ldquo;Trouble shared is trouble halved.&rdquo; <br /> &mdash;Lee Iacocca',
        '&ldquo;If you can&rsquo;t stand the heat, get out of the kitchen.&rdquo; <br /> &mdash;Harry S. Truman',
        '&ldquo;Nothing makes one feel so strong as a call for help.&rdquo; <br /> &mdash;Pope Paul VI',
        '&ldquo;Fear is the mother of foresight.&rdquo; <br /> &mdash;Thomas Hardy',
        '&ldquo;We are all gifted. That is our inheritance.&rdquo; <br /> &mdash;Ethel Waters',
        '&ldquo;It&rsquo;s easy to make a buck. It&rsquo;s a lot tougher to make a difference.&rdquo; <br /> &mdash;Tom Brokaw',
        '&ldquo;Time is but the stream I go a-fishing in.&rdquo; <br /> &mdash;Henry David Thoreau',
        '&ldquo;Either move or be moved.&rdquo; <br /> &mdash;Ezra Pound',
        '&ldquo;You must be the change you wish to see in the world.&rdquo; <br /> &mdash;Mahatma Gandhi',
        '&ldquo;Courage is fear holding on a minute longer.&rdquo; <br /> &mdash;George S. Patton',
        '&ldquo;A friend may well be reckoned the masterpiece of nature.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;The most satisfying thing in life is to have been able to give a large part of one&rsquo;s self to others.&rdquo; <br /> &mdash;Pierre Teilhard de Chardin',
        '&ldquo;It is an ironic habit of human beings to run faster when we have lost our way.&rdquo; <br /> &mdash;Rollo May',
        '&ldquo;Hope is independent of the apparatus of logic.&rdquo; <br /> &mdash;Norman Cousins',
        '&ldquo;As America celebrates Memorial Day, we pay tribute to those who have given their lives in our nation&rsquo;s wars.&rdquo; <br /> &mdash;John M. McHugh'
    ]

    let juneArray = [
        '&ldquo;Things start out as hopes and end up as habits.&rdquo; <br /> &mdash;Lillian Hellman',
        '&ldquo;If you want a thing done well, do it yourself.&rdquo; <br /> &mdash;Napoleon Bonaparte',
        '&ldquo;Success is getting what you want. Happiness is wanting what you get.&rdquo; <br /> &mdash;Dale Carnegie',
        '&ldquo;Because things are the way they are, things will not stay the way they are.&rdquo; <br /> &mdash;Bertolt Brecht',
        '&ldquo;Our happiness depends on wisdom all the way.&rdquo; <br /> &mdash;Sophocles',
        '&ldquo;Life appears to me too short to be spent in nursing animosity, or registering wrongs.&rdquo; <br /> &mdash;Charlotte Bronte',
        '&ldquo;Well done is better than well said.&rdquo; <br /> &mdash;Benjamin Franklin',
        '&ldquo;The backbone of surprise is fusing speed with secrecy.&rdquo; <br /> &mdash;Carl von Clausewitz',
        '&ldquo;Life is a long lesson in humility.&rdquo; <br /> &mdash;James M. Barrie',
        '&ldquo;Never deprive someone of hope; it might be all they have.&rdquo; <br /> &mdash;H. Jackson Brown, Jr.',
        '&ldquo;A true friend never gets in your way unless you happen to be going down.&rdquo; <br /> &mdash;Arnold H. Glasow',
        '&ldquo;Each day is the scholar of yesterday.&rdquo; <br /> &mdash;Publilius Syrus',
        '&ldquo;The hardest arithmetic to master is that which enables us to count our blessings.&rdquo; <br /> &mdash;Eric Hoffer',
        '&ldquo;Genius ain&rsquo;t anything more than elegant common sense.&rdquo; <br /> &mdash;Josh Billings',
        '&ldquo;It is during our darkest moments that we must focus to see the light.&rdquo; <br /> &mdash;Aristotle',
        '&ldquo;I&rsquo;m a father; that&rsquo;s what matters most. Nothing matters more.&rdquo; <br /> &mdash;Gordon Brown',
        '&ldquo;Man &ndash; a being in search of meaning.&rdquo; <br /> &mdash;Plato',
        '&ldquo;Cheerfulness is the best promoter of health and is as friendly to the mind as to the body.&rdquo; <br /> &mdash;Joseph Addison',
        '&ldquo;A person will sometimes devote all his life to the development of one part of his body &ndash; the wishbone.&rdquo; <br /> &mdash;Robert Frost',
        '&ldquo;It is a wise father that knows his own child.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;A man is what he thinks about all day long.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;Every man has his own destiny: the only imperative is to follow it, to accept it, no matter where it leads him.&rdquo; <br /> &mdash;Henry Miller',
        '&ldquo;That which does not kill us makes us stronger.&rdquo; <br /> &mdash;Friedrich Nietzsche',
        '&ldquo;Many of life&rsquo;s failures are people who did not realize how close they were to success when they gave up.&rdquo; <br /> &mdash;Thomas A. Edison',
        '&ldquo;To affect the quality of the day, that is the highest of arts.&rdquo; <br /> &mdash;Henry David Thoreau',
        '&ldquo;Work is much more fun than fun.&rdquo; <br /> &mdash;Noel Coward',
        '&ldquo;Life ought to be a struggle of desire toward adventures whose nobility will fertilize the soul.&rdquo; <br /> &mdash;Rebecca West',
        '&ldquo;Our knowledge is a little island in a great ocean of nonknowledge.&rdquo; <br /> &mdash;Isaac Bashevis Singer',
        '&ldquo;Doubt is the father of invention.&rdquo; <br /> &mdash;Ambrose Bierce',
        '&ldquo;There are glimpses of heaven to us in every act, or thought, or word, that raises us above ourselves.&rdquo; <br /> &mdash;Robert Quillen'
    ]

    let julyArray = [
        '&ldquo;Words are but pictures of our thoughts.&rdquo; <br /> &mdash;John Dryden',
        '&ldquo;The very essence of instinct is that it&rsquo;s followed independently of reason.&rdquo; <br /> &mdash;Charles Darwin',
        '&ldquo;Freedom means the opportunity to be what we never thought we would be.&rdquo; <br /> &mdash;Daniel J. Boorstin',
        '&ldquo;What then is freedom? The power to live as one wishes.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        '&ldquo;We must build dikes of courage to hold back the flood of fear.&rdquo; <br /> &mdash;Martin Luther King, Jr.',
        '&ldquo;The return we reap from generous actions is not always evident.&rdquo; <br /> &mdash;Francesco Guicciardini',
        '&ldquo;When one burns one&rsquo;s bridges, what a very nice fire it makes.&rdquo; <br /> &mdash;Dylan Thomas',
        '&ldquo;Imagination and fiction make up more than three quarters of our real life.&rdquo; <br /> &mdash;Simone Weil',
        '&ldquo;My father always used to say that when you die, if you&rsquo;ve got five real friends, then you&rsquo;ve had a great life.&rdquo; <br /> &mdash;Lee Iacocca',
        '&ldquo;Adventure is worthwhile.&rdquo; <br /> &mdash;Aesop',
        '&ldquo;The pen is the tongue of the mind.&rdquo; <br /> &mdash;Horace',
        '&ldquo;We have, I fear, confused power with greatness.&rdquo; <br /> &mdash;Stewart Udall',
        '&ldquo;There are many men of principle in both parties in America, but there is no party of principle.&rdquo; <br /> &mdash;Alexis de Tocqueville',
        '&ldquo;People are trapped in history and history is trapped in them.&rdquo; <br /> &mdash;James Baldwin',
        '&ldquo;He who is brave is free.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        '&ldquo;Hold yourself responsible for a higher standard than anybody expects of you. Never excuse yourself.&rdquo; <br /> &mdash;Henry Ward Beecher',
        '&ldquo;Patience is the companion of wisdom.&rdquo; <br /> &mdash;Saint Augustine',
        '&ldquo;Metaphors have a way of holding the most truth in the least space.&rdquo; <br /> &mdash;Orson Scott Card',
        '&ldquo;When in doubt, don&rsquo;t.&rdquo; <br /> &mdash;Benjamin Franklin',
        '&ldquo;We all have ability. The difference is how we use it.&rdquo; <br /> &mdash;Charlotte Whitton',
        '&ldquo;The more sand that has escaped from the hourglass of our life, the clearer we should see through it.&rdquo; <br /> &mdash;Jean Paul',
        '&ldquo;The buried talent is the sunken rock on which most lives strike and founder.&rdquo; <br /> &mdash;Frederick William Faber',
        '&ldquo;Blessed is the man, who having nothing to say, abstains from giving wordy evidence of the fact.&rdquo; <br /> &mdash;George Eliot',
        '&ldquo;You have succeeded in life when all you really want is only what you really need.&rdquo; <br /> &mdash;Vernon Howard',
        '&ldquo;Hope is but the dream of those who wake.&rdquo; <br /> &mdash;Matthew Prior',
        '&ldquo;I never think of the future &ndash; it comes soon enough.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;Laziness may appear attractive, but work gives satisfaction.&rdquo; <br /> &mdash;Anne Frank',
        '&ldquo;With the past, I have nothing to do; nor with the future. I live now.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;This is the precept by which I have lived: Prepare for the worst; expect the best; and take what comes.&rdquo; <br /> &mdash;Hannah Arendt',
        '&ldquo;You will never win if you never begin.&rdquo; <br /> &mdash;Helen Rowland',
        '&ldquo;Of all duties, prayer certainly is the sweetest and most easy.&rdquo; <br /> &mdash;Laurence Sterne'
    ]

    let augustArray = [
        '&ldquo;All human wisdom is summed up in two words; wait and hope.&rdquo; <br /> &mdash;Alexandre Dumas',
        '&ldquo;If you count all your assets you always show a profit.&rdquo; <br /> &mdash;Wilson Mizner',
        '&ldquo;I have no methods; all I do is accept people as they are.&rdquo; <br /> &mdash;Joan Rivers',
        '&ldquo;I am prepared for the worst, but hope for the best.&rdquo; <br /> &mdash;Benjamin Disraeli',
        '&ldquo;Dreams will get you nowhere, a good kick in the pants will take you a long way.&rdquo; <br /> &mdash;Baltasar Gracian',
        '&ldquo;To advise is not to compel.&rdquo; <br /> &mdash;Anton Chekhov',
        '&ldquo;Never find fault with the absent.&rdquo; <br /> &mdash;Alexander Pope',
        '&ldquo;All wealth is the product of labor.&rdquo; <br /> &mdash;John Locke',
        '&ldquo;Walk while ye have the light, lest darkness come upon you.&rdquo; <br /> &mdash;John Ruskin',
        '&ldquo;Success &ndash; keeping your mind awake and your desire asleep.&rdquo; <br /> &mdash;Walter Scott',
        '&ldquo;Without labor nothing prospers.&rdquo; <br /> &mdash;Sophocles',
        '&ldquo;Only the educated are free.&rdquo; <br /> &mdash;Epictetus',
        '&ldquo;Liberty, when it begins to take root, is a plant of rapid growth.&rdquo; <br /> &mdash;George Washington',
        '&ldquo;The greatest remedy for anger is delay.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        '&ldquo;Ambition is but avarice on stilts, and masked.&rdquo; <br /> &mdash;Walter Savage Landor',
        '&ldquo;If fear is cultivated it will become stronger, if faith is cultivated it will achieve mastery.&rdquo; <br /> &mdash;John Paul Jones',
        '&ldquo;Hitch your wagon to a star.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;Honor is not the exclusive property of any political party.&rdquo; <br /> &mdash;Herbert Hoover',
        '&ldquo;Free speech carries with it some freedom to listen.&rdquo; <br /> &mdash;Warren E. Burger',
        '&ldquo;Life is far too important a thing ever to talk seriously about.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;I think and think for months and years. Ninety-nine times, the conclusion is false. The hundredth time I am right.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;Knowledge comes, but wisdom lingers.&rdquo; <br /> &mdash;Alfred Lord Tennyson',
        '&ldquo;I always entertain great hopes.&rdquo; <br /> &mdash;Robert Frost',
        '&ldquo;Lend yourself to others, but give yourself to yourself.&rdquo; <br /> &mdash;Michel de Montaigne',
        '&ldquo;Let us be grateful to the mirror for revealing to us our appearance only.&rdquo; <br /> &mdash;Samuel Butler',
        '&ldquo;Hope is such a bait, it covers any hook.&rdquo; <br /> &mdash;Oliver Goldsmith',
        '&ldquo;Freedom is not enough.&rdquo; <br /> &mdash;Lyndon B. Johnson',
        '&ldquo;The aim of education is the knowledge, not of facts, but of values.&rdquo; <br /> &mdash;William Inge',
        '&ldquo;A great deal of intelligence can be invested in ignorance when the need for illusion is deep.&rdquo; <br /> &mdash;Saul Bellow',
        '&ldquo;It is not so much our friends&rsquo; help that helps us, as the confidence of their help.&rdquo; <br /> &mdash;Epicurus',
        '&ldquo;Experience is one thing you can&rsquo;t get for nothing.&rdquo; <br /> &mdash;Oscar Wilde'
    ]

    let septemberArray = [
        '&ldquo;Only the wisest and stupidest of men never change.&rdquo; <br /> &mdash;Confucius',
        '&ldquo;Between saying and doing, many a pair of shoes is worn out.&rdquo; <br /> &mdash;Iris Murdoch',
        '&ldquo;Leap, and the net will appear.&rdquo; <br /> &mdash;John Burroughs',
        '&ldquo;I just invent, then wait until man comes around to needing what I&rsquo;ve invented.&rdquo; <br /> &mdash;R. Buckminster Fuller',
        '&ldquo;What happens is not as important as how you react to what happens.&rdquo; <br /> &mdash;Ellen Glasgow',
        '&ldquo;The end of labor is to gain leisure.&rdquo; <br /> &mdash;Aristotle',
        '&ldquo;The aim of life is to live, and to live means to be aware, joyously, drunkenly, serenely, divinely aware.&rdquo; <br /> &mdash;Henry Miller',
        '&ldquo;I&rsquo;ve never known any trouble than an hour&rsquo;s reading didn&rsquo;t assuage.&rdquo; <br /> &mdash;Arthur Schopenhauer',
        '&ldquo;Obstacles are things a person sees when he takes his eyes off his goal.&rdquo; <br /> &mdash;E. Joseph Cossman',
        '&ldquo;One fails forward toward success.&rdquo; <br /> &mdash;Charles Kettering',
        '&ldquo;One cannot and must not try to erase the past merely because it does not fit the present.&rdquo; <br /> &mdash;Golda Meir',
        '&ldquo;Living in dreams of yesterday, we find ourselves still dreaming of impossible future conquests.&rdquo; <br /> &mdash;Charles Lindbergh',
        '&ldquo;Big words seldom accompany good deeds.&rdquo; <br /> &mdash;Charlotte Whitton',
        '&ldquo;It is easy to sit up and take notice, What is difficult is getting up and taking action.&rdquo; <br /> &mdash;Honore de Balzac',
        '&ldquo;More business is lost every year through neglect than through any other cause.&rdquo; <br /> &mdash;Rose Kennedy',
        '&ldquo;If you are lucky enough to find a way of life you love, you have to find the courage to live it.&rdquo; <br /> &mdash;John Irving',
        '&ldquo;Sooner or later, those who win are those who think they can.&rdquo; <br /> &mdash;Paul Tournier',
        '&ldquo;If moderation is a fault, then indifference is a crime.&rdquo; <br /> &mdash;Jack Kerouac',
        '&ldquo;I am a part of everything that I have read.&rdquo; <br /> &mdash;Theodore Roosevelt',
        '&ldquo;To begin, begin.&rdquo; <br /> &mdash;William Wordsworth',
        '&ldquo;Applause is a receipt, not a bill.&rdquo; <br /> &mdash;Dale Carnegie',
        '&ldquo;Care and diligence bring luck.&rdquo; <br /> &mdash;Thomas Fuller',
        '&ldquo;The essential conditions of everything you do must be choice, love, passion.&rdquo; <br /> &mdash;Nadia Boulanger',
        '&ldquo;Quick decisions are unsafe decisions.&rdquo; <br /> &mdash;Sophocles',
        '&ldquo;Life is an adventure in forgiveness.&rdquo; <br /> &mdash;Norman Cousins',
        '&ldquo;Let your mind alone, and see what happens.&rdquo; <br /> &mdash;Virgil Thomson',
        '&ldquo;The young man knows the rules, but the old man knows the exceptions.&rdquo; <br /> &mdash;Oliver Wendell Holmes, Sr.',
        '&ldquo;I would define, in brief, the poetry of words as the rhythmical creation of Beauty.&rdquo; <br /> &mdash;Edgar Allan Poe',
        '&ldquo;The hardest thing is to take less when you can get more.&rdquo; <br /> &mdash;Kin Hubbard',
        '&ldquo;Life without liberty is like a body without spirit.&rdquo; <br /> &mdash;Khalil Gibran'
    ]

    let octoberArray = [
        '&ldquo;Effort only fully releases its reward after a person refuses to quit.&rdquo; <br /> &mdash;Napoleon Hill',
        '&ldquo;It is not length of life, but depth of life.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;Personally I&rsquo;m always ready to learn, although I do not always like being taught.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;Fortune befriends the bold.&rdquo; <br /> &mdash;Emily Dickinson',
        '&ldquo;I have noticed that nothing I never said ever did me any harm.&rdquo; <br /> &mdash;Calvin Coolidge',
        '&ldquo;Our deeds determine us, as much as we determine our deeds.&rdquo; <br /> &mdash;George Eliot',
        '&ldquo;Are right and wrong convertible terms, dependant upon popular opinion?&rdquo; <br /> &mdash;William Lloyd Garrison',
        '&ldquo;Zeal will do more than knowledge.&rdquo; <br /> &mdash;William Hazlitt',
        '&ldquo;I have come to believe that this is a mighty continent which was hitherto unknown.&rdquo; <br /> &mdash;Christopher Columbus',
        '&ldquo;To give without any reward, or any notice, has a special quality of its own.&rdquo; <br /> &mdash;Anne Morrow Lindbergh',
        '&ldquo;To err is human; to forgive, divine.&rdquo; <br /> &mdash;Alexander Pope',
        '&ldquo;The finest steel has to go through the hottest fire.&rdquo; <br /> &mdash;Richard M. Nixon',
        '&ldquo;Change before you have to.&rdquo; <br /> &mdash;Jack Welch',
        '&ldquo;The actions of men are the best interpreters of their thoughts.&rdquo; <br /> &mdash;James Joyce',
        '&ldquo;The absence of alternatives clears the mind marvelously.&rdquo; <br /> &mdash;Henry Kissinger',
        '&ldquo;With renunciation life begins.&rdquo; <br /> &mdash;Amelia Barr',
        '&ldquo;They&rsquo;re only truly great who are truly good.&rdquo; <br /> &mdash;George Chapman',
        '&ldquo;To be free is to have achieved your life.&rdquo; <br /> &mdash;Tennessee Williams',
        '&ldquo;When all else is lost, the future still remains.&rdquo; <br /> &mdash;Christian Nestell Bovee',
        '&ldquo;Nine-tenths of wisdom is being wise in time.&rdquo; <br /> &mdash;Theodore Roosevelt',
        '&ldquo;If the world seems cold to you, kindle fires to warm it.&rdquo; <br /> &mdash;Lucy Larcom',
        '&ldquo;Of all human activities, man&rsquo;s listening to God is the supreme act of his reasoning and will.&rdquo; <br /> &mdash;Pope Paul VI',
        '&ldquo;All wish to possess knowledge, but few, comparatively speaking, are willing to pay the price.&rdquo; <br /> &mdash;Juvenal',
        '&ldquo;The human race has one really effective weapon, and that is laughter.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;The less we deserve good fortune, the more we hope for it.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        '&ldquo;There&rsquo;s a difference between a philosophy and a bumper sticker.&rdquo; <br /> &mdash;Charles M. Schulz',
        '&ldquo;Everything in the world may be endured except continual prosperity.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;Humanity is acquiring all the right technology for all the wrong reasons.&rdquo; <br /> &mdash;R. Buckminster Fuller',
        '&ldquo;I think; therefore I am.&rdquo; <br /> &mdash;Rene Descartes',
        '&ldquo;A smile is a curve that sets everything straight.&rdquo; <br /> &mdash;Phyllis Diller',
        '&ldquo;Another belief of mine; that everyone else my age is an adult, whereas I am merely in disguise.&rdquo; <br /> &mdash;Margaret Atwood'
    ]

    let novemberArray = [
        '&ldquo;Silent gratitude isn&rsquo;t much use to anyone.&rdquo; <br /> &mdash;Gertrude Stein',
        '&ldquo;The most wasted of all days is one without laughter.&rdquo; <br /> &mdash;e. e. cummings',
        '&ldquo;A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.&rdquo; <br /> &mdash;George Bernard Shaw',
        '&ldquo;The only courage that matters is the kind that gets you from one moment to the next.&rdquo; <br /> &mdash;Mignon McLaughlin',
        '&ldquo;You always admire what you really don&rsquo;t understand.&rdquo; <br /> &mdash;Blaise Pascal',
        '&ldquo;Freedom is nothing but a chance to be better.&rdquo; <br /> &mdash;Albert Camus',
        '&ldquo;Voters don&rsquo;t decide issues, they decide who will decide issues.&rdquo; <br /> &mdash;George Will',
        '&ldquo;Never reach out your hand unless you&rsquo;re willing to extend an arm.&rdquo; <br /> &mdash;Pope Paul VI',
        '&ldquo;True originality consists not in a new manner but in a new vision.&rdquo; <br /> &mdash;Edith Wharton',
        '&ldquo;God cannot alter the past, though historians can.&rdquo; <br /> &mdash;Samuel Butler',
        '&ldquo;We relish news of our heroes, forgetting that we are extraordinary to somebody too.&rdquo; <br /> &mdash;Helen Hayes',
        '&ldquo;It is better to rust out than wear out.&rdquo; <br /> &mdash;Edwin Markham',
        '&ldquo;Faith is the strength by which a shattered world shall emerge into the light.&rdquo; <br /> &mdash;Helen Keller',
        '&ldquo;The best way to make your dreams come true is to wake up.&rdquo; <br /> &mdash;Paul Valery',
        '&ldquo;Hindsight is always twenty-twenty.&rdquo; <br /> &mdash;Billy Wilder',
        '&ldquo;The undertaking of a new action brings new strength.&rdquo; <br /> &mdash;Richard L. Evans',
        '&ldquo;If you do not conquer self, you will be conquered by self.&rdquo; <br /> &mdash;Napoleon Hill',
        '&ldquo;Start with what is right rather than what is acceptable.&rdquo; <br /> &mdash;Franz Kafka',
        '&ldquo;Laughter is the sun that drives winter from the human face.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;Change is the end result of all true learning.&rdquo; <br /> &mdash;Leo Buscaglia',
        '&ldquo;Begin to be now what you will be hereafter.&rdquo; <br /> &mdash;William James',
        '&ldquo;Who covets more is evermore a slave.&rdquo; <br /> &mdash;Robert Herrick',
        '&ldquo;Good friends, good books and a sleepy conscience: this is the ideal life.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;The thermometer of success is merely the jealousy of the malcontents.&rdquo; <br /> &mdash;Salvador Dali',
        '&ldquo;There is one day that is ours. Thanksgiving Day is the one day that is purely American.&rdquo; <br /> &mdash;O. Henry',
        '&ldquo;Laughter is the sensation of feeling good all over and showing it principally in one place.&rdquo; <br /> &mdash;Josh Billings',
        '&ldquo;The great advantage about telling the truth is that nobody ever believes it.&rdquo; <br /> &mdash;Dorothy L. Sayers',
        '&ldquo;Feeling gratitude and not expressing it is like wrapping a present and not giving it.&rdquo; <br /> &mdash;William Arthur Ward',
        '&ldquo;A good beginning makes a good end.&rdquo; <br /> &mdash;Louis L&rsquo;Amour',
        '&ldquo;Those who do not remember the past are condemned to repeat it.&rdquo; <br /> &mdash;George Santayana'
    ]

    let decemberArray = [
        '&ldquo;Courage is found in unlikely places.&rdquo; <br /> &mdash;J. R. R. Tolkien',
        '&ldquo;No man was ever wise by chance.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        '&ldquo;When one teaches, two learn.&rdquo; <br /> &mdash;Robert Half',
        '&ldquo;We shall never know all the good that a simple smile can do.&rdquo; <br /> &mdash;Mother Teresa',
        '&ldquo;The first wealth is health.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;Eloquence is a painting of the thoughts.&rdquo; <br /> &mdash;Blaise Pascal',
        '&ldquo;The most worth-while thing is to try to put happiness into the lives of others.&rdquo; <br /> &mdash;Robert Baden-Powell',
        '&ldquo;I want to live my life, not record it.&rdquo; <br /> &mdash;Jackie Kennedy',
        '&ldquo;Wisdom outweighs any wealth.&rdquo; <br /> &mdash;Sophocles',
        '&ldquo;Some things are so unexpected that no one is prepared for them.&rdquo; <br /> &mdash;Leo Rosten',
        '&ldquo;God gives the nuts, but he does not crack them.&rdquo; <br /> &mdash;Franz Kafka',
        '&ldquo;Syllables govern the world.&rdquo; <br /> &mdash;George Bernard Shaw',
        '&ldquo;Home is the nicest word there is.&rdquo; <br /> &mdash;Laura Ingalls Wilder',
        '&ldquo;There&rsquo;s a world of difference between truth and facts. Facts can obscure the truth.&rdquo; <br /> &mdash;Maya Angelou',
        '&ldquo;The whole point of getting things done is knowing what to leave undone.&rdquo; <br /> &mdash;Oswald Chambers',
        '&ldquo;It is the set of the sails, not the direction of the wind that determines which way we will go.&rdquo; <br /> &mdash;Jim Rohn',
        '&ldquo;Forgive many things in others; nothing in yourself.&rdquo; <br /> &mdash;Ausonius',
        '&ldquo;Few men have virtue to withstand the highest bidder.&rdquo; <br /> &mdash;George Washington',
        '&ldquo;We grow small trying to be great.&rdquo; <br /> &mdash;E. Stanley Jones',
        '&ldquo;No one has a greater asset for his business than a man&rsquo;s pride in his work.&rdquo; <br /> &mdash;Hosea Ballou',
        '&ldquo;Dream in a pragmatic way.&rdquo; <br /> &mdash;Aldous Huxley',
        '&ldquo;If you&rsquo;re alive, there&rsquo;s a purpose for your life.&rdquo; <br /> &mdash;Rick Warren',
        '&ldquo;There&rsquo;s no use doing a kindness if you do it a day too late.&rdquo; <br /> &mdash;Charles Kingsley',
        '&ldquo;Maybe Christmas, the Grinch thought, doesn&rsquo;t come from a store.&rdquo; <br /> &mdash;Dr. Seuss',
        '&ldquo;I will honor Christmas in my heart, and try to keep it all the year.&rdquo; <br /> &mdash;Charles Dickens',
        '&ldquo;Cherish your human connections: your relationships with friends and family.&rdquo; <br /> &mdash;Joseph Brodsky',
        '&ldquo;One faces the future with one&rsquo;s past.&rdquo; <br /> &mdash;Pearl S. Buck',
        '&ldquo;The less you talk, the more you&rsquo;re listened to.&rdquo; <br /> &mdash;Pauline Phillips',
        '&ldquo;We pass through this world but once.&rdquo; <br /> &mdash;Stephen Jay Gould',
        '&ldquo;Every man regards his own life as the New Year&rsquo;s Eve of time.&rdquo; <br /> &mdash;Jean Paul',
        '&ldquo;Be at war with your vices, at peace with your neighbors, and let every new year find you a better man.&rdquo; <br /> &mdash;Benjamin Franklin'
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

    let variedQuote = monthArray[dayOfMonth - 1]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)
})
