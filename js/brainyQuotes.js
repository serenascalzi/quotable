$(document).ready(function() {
    let januaryArray = [
        '&ldquo;Hope smiles from the threshold of the year to come, whispering, &lsquo;It will be happier.&rsquo;&rdquo; <br /> &mdash;Alfred Lord Tennyson',
        '&ldquo;You must do the things you think you cannot do.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        '&ldquo;To succeed in your mission, you must have single-minded devotion to your goal.&rdquo; <br /> &mdash;A. P. J. Abdul Kalam',
        '&ldquo;It&rsquo;s easier to resist at the beginning than at the end.&rdquo; <br /> &mdash;Leonardo da Vinci',
        '&ldquo;I love you &ndash; I am at rest with you &ndash; I have come home.&rdquo; <br /> &mdash;Dorothy L. Sayers',
        '&ldquo;If you do not change direction, you may end up where you are heading.&rdquo; <br /> &mdash;Lao Tzu',
        '&ldquo;The opportunity is often lost by deliberating.&rdquo; <br /> &mdash;Publilius Syrus',
        '&ldquo;Common sense is not so common.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;A lie can travel half way around the world while the truth is putting on its shoes.&rdquo; <br /> &mdash;Charles Spurgeon',
        '&ldquo;To live happily is an inward power of the soul.&rdquo; <br /> &mdash;Marcus Aurelius',
        '&ldquo;To a smart girl men are no problem &ndash; they&rsquo;re the answer.&rdquo; <br /> &mdash;Zsa Zsa Gabor',
        '&ldquo;Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.&rdquo; <br /> &mdash;Washington Irving',
        '&ldquo;Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.&rdquo; <br /> &mdash;Francis of Assisi',
        '&ldquo;Facts are stubborn, but statistics are more pliable.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;Love dies only when growth stops.&rdquo; <br /> &mdash;Pearl S. Buck',
        '&ldquo;A happy life is one spent in learning, earning, and yearning.&rdquo; <br /> &mdash;Lillian Gish',
        '&ldquo;But what is happiness except the simple harmony between a man and the life he leads?&rdquo; <br /> &mdash;Albert Camus',
        '&ldquo;I am no bird; and no net ensnares me; I am a free human being with an independent will.&rdquo; <br /> &mdash;Charlotte Bronte',
        '&ldquo;We would accomplish many more things if we did not think of them as impossible.&rdquo; <br /> &mdash;Vince Lombardi',
        '&ldquo;A thousand words will not leave so deep an impression as one deed.&rdquo; <br /> &mdash;Henrik Ibsen',
        '&ldquo;Life&rsquo;s most persistent and urgent question is, &lsquo;What are you doing for others?&rsquo;&rdquo; <br /> &mdash;Martin Luther King, Jr.',
        '&ldquo;It&rsquo;s not what happens to you, but how you react to it that matters.&rdquo; <br /> &mdash;Epictetus',
        '&ldquo;This is what I learned: that everybody is talented, original and has something important to say.&rdquo; <br /> &mdash;Brenda Ueland',
        '&ldquo;A man who has not passed through the inferno of his passions has never overcome them.&rdquo; <br /> &mdash;Carl Jung',
        '&ldquo;If the only prayer you ever say in your entire life is thank you, it will be enough.&rdquo; <br /> &mdash;Meister Eckhart',
        '&ldquo;The secret of my influence has always been that it remained secret.&rdquo; <br /> &mdash;Salvador Dali',
        '&ldquo;A work of art is above all an adventure of the mind.&rdquo; <br /> &mdash;Eugene Ionesco',
        '&ldquo;Before anything else, preparation is the key to success.&rdquo; <br /> &mdash;Alexander Graham Bell',
        '&ldquo;Every man dies. Not every man really lives.&rdquo; <br /> &mdash;William Wallace',
        '&ldquo;People don&rsquo;t notice whether it&rsquo;s winter or summer when they&rsquo;re happy.&rdquo; <br /> &mdash;Anton Chekhov',
        '&ldquo;Neither blame or praise yourself.&rdquo; <br /> &mdash;Plutarch'
    ]

    let februaryArray = [
        '&ldquo;Advice is like snow &ndash; the softer it falls, the longer it dwells upon, and the deeper it sinks into the mind.&rdquo; <br /> &mdash;Samuel Taylor Coleridge',
        '&ldquo;Never bend your head. Always hold it high. Look the world straight in the eye.&rdquo; <br /> &mdash;Helen Keller',
        '&ldquo;Wisdom is oftentimes nearer when we stoop than when we soar.&rdquo; <br /> &mdash;William Wordsworth',
        '&ldquo;The roots of all goodness lie in the soil of appreciation for goodness.&rdquo; <br /> &mdash;Dalai Lama',
        '&ldquo;What we really are matters more than what other people think of us.&rdquo; <br /> &mdash;Jawaharlal Nehru',
        '&ldquo;There are years that ask questions and years that answer.&rdquo; <br /> &mdash;Zora Neale Hurston',
        '&ldquo;Expect problems and eat them for breakfast.&rdquo; <br /> &mdash;Alfred A. Montapert',
        '&ldquo;The sole meaning of life is to serve humanity.&rdquo; <br /> &mdash;Leo Tolstoy',
        '&ldquo;Everything that irritates us about others can lead us to an understanding of ourselves.&rdquo; <br /> &mdash;Carl Jung',
        '&ldquo;Life lived for tomorrow will always be just a day away from being realized.&rdquo; <br /> &mdash;Leo Buscaglia',
        '&ldquo;Treasure your relationships, not your possessions.&rdquo; <br /> &mdash;Anthony J. D&rsquo;Angelo',
        '&ldquo;It is the dim haze of mystery that adds enchantment to pursuit.&rdquo; <br /> &mdash;Antoine Rivarol',
        '&ldquo;There is no instinct like that of the heart.&rdquo; <br /> &mdash;Lord Byron',
        '&ldquo;If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.&rdquo; <br /> &mdash;A. A. Milne',
        '&ldquo;Home is any four walls that enclose the right person.&rdquo; <br /> &mdash;Helen Rowland',
        '&ldquo;One word frees us of all the weight and pain in life. That word is love.&rdquo; <br /> &mdash;Sophocles',
        '&ldquo;Do exactly what you would do if you felt most secure.&rdquo; <br /> &mdash;Meister Eckhart',
        '&ldquo;Blessed are the young for they shall inherit the national debt.&rdquo; <br /> &mdash;Herbert Hoover',
        '&ldquo;There is a thin line that separates laughter and pain, comedy and tragedy, humor and hurt.&rdquo; <br /> &mdash;Erma Bombeck',
        '&ldquo;The wish for healing has always been half of health.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        '&ldquo;To the mind that is still, the whole universe surrenders.&rdquo; <br /> &mdash;Lao Tzu',
        '&ldquo;The time you enjoy wasting is not wasted time.&rdquo; <br /> &mdash;Bertrand Russell',
        '&ldquo;If you can&rsquo;t describe what you are doing as a process, you don&rsquo;t know what you&rsquo;re doing.&rdquo; <br /> &mdash;W. Edwards Deming',
        '&ldquo;The eternal quest of the individual human being is to shatter his loneliness.&rdquo; <br /> &mdash;Norman Cousins',
        '&ldquo;I believe in being an innovator.&rdquo; <br /> &mdash;Walt Disney',
        '&ldquo;Great dancers are not great because of their technique, they are great because of their passion.&rdquo; <br /> &mdash;Martha Graham',
        '&ldquo;I believe that every human mind feels pleasure in doing good to another.&rdquo; <br /> &mdash;Thomas Jefferson',
        '&ldquo;Perfection is attained by slow degrees; it requires the hand of time.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;The purpose of life is a life of purpose.&rdquo; <br /> &mdash;Robert Byrne'
    ]

    let marchArray = [
        '&ldquo;When one paints an ideal, one does not need to limit one&rsquo;s imagination.&rdquo; <br /> &mdash;Ellen Key',
        '&ldquo;Let there be work, bread, water and salt for all.&rdquo; <br /> &mdash;Nelson Mandela',
        '&ldquo;The richest love is that which submits to the arbitration of time.&rdquo; <br /> &mdash;Lawrence Durrell',
        '&ldquo;Don&rsquo;t grieve. Anything you lose comes round in another form.&rdquo; <br /> &mdash;Rumi',
        '&ldquo;It is easier to prevent bad habits than to break them.&rdquo; <br /> &mdash;Benjamin Franklin',
        '&ldquo;No one can figure out your worth but you.&rdquo; <br /> &mdash;Pearl Bailey',
        '&ldquo;Life is given to us, we earn it by giving it.&rdquo; <br /> &mdash;Rabindranath Tagore',
        '&ldquo;Tomorrow is only found in the calendar of fools.&rdquo; <br /> &mdash;Og Mandino',
        '&ldquo;Respect is what we owe; love, what we give.&rdquo; <br /> &mdash;Philip James Bailey',
        '&ldquo;Surprise is the greatest gift which life can grant us.&rdquo; <br /> &mdash;Boris Pasternak',
        '&ldquo;One who deceives will always find those who allow themselves to be deceived.&rdquo; <br /> &mdash;Niccolo Machiavelli',
        '&ldquo;Fortune favors the prepared mind.&rdquo; <br /> &mdash;Louis Pasteur',
        '&ldquo;My religion is very simple. My religion is kindness.&rdquo; <br /> &mdash;Dalai Lama',
        '&ldquo;A will finds a way.&rdquo; <br /> &mdash;Orison Swett Marden',
        '&ldquo;Love takes off masks that we fear we cannot live without and know we cannot live within.&rdquo; <br /> &mdash;James Baldwin',
        '&ldquo;Try to keep your soul young and quivering right up to old age.&rdquo; <br /> &mdash;George Sand',
        '&ldquo;Be true to your work, your word, and your friend.&rdquo; <br /> &mdash;John Boyle O&rsquo;Reilly',
        '&ldquo;Who has a harder fight than he who is striving to overcome himself.&rdquo; <br /> &mdash;Thomas a Kempis',
        '&ldquo;It&rsquo;s hard to be humble, when you&rsquo;re as great as I am.&rdquo; <br /> &mdash;Muhammad Ali',
        '&ldquo;Most people have the will to win, few have the will to prepare to win.&rdquo; <br /> &mdash;Bobby Knight',
        '&ldquo;You exist only in what you do.&rdquo; <br /> &mdash;Federico Fellini',
        '&ldquo;Success is the sum of small efforts &ndash; repeated day in and day out.&rdquo; <br /> &mdash;Robert Collier',
        '&ldquo;Truth is strong, and sometime or other will prevail.&rdquo; <br /> &mdash;Mary Astell',
        '&ldquo;Idealism increases in direct proportion to one&rsquo;s distance from the problem.&rdquo; <br /> &mdash;John Galsworthy',
        '&ldquo;Don&rsquo;t cry because it&rsquo;s over. Smile because it happened.&rdquo; <br /> &mdash;Dr. Seuss',
        '&ldquo;Anyone who has never made a mistake has never tried anything new.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;Avoid popularity; it has many snares, and no real benefit.&rdquo; <br /> &mdash;William Penn',
        '&ldquo;Of all possessions a friend is the most precious.&rdquo; <br /> &mdash;Herodotus',
        '&ldquo;Where there is great love, there are always wishes.&rdquo; <br /> &mdash;Willa Cather',
        '&ldquo;We have all the light we need, we just need to put it in practice.&rdquo; <br /> &mdash;Albert Pike',
        '&ldquo;O, wind, if winter comes, can spring be far behind?&rdquo; <br /> &mdash;Percy Bysshe Shelley'
    ]

    let aprilArray = [
        '&ldquo;Wise men speak because they have something to say; Fools because they have to say something.&rdquo; <br /> &mdash;Plato',
        '&ldquo;Success is never final, failure is never fatal. It&rsquo;s courage that counts.&rdquo; <br /> &mdash;John Wooden',
        '&ldquo;The only sure weapon against bad ideas is better ideas.&rdquo; <br /> &mdash;Alfred Whitney Griswold',
        '&ldquo;If you&rsquo;re going through hell, keep going.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;There is always room at the top.&rdquo; <br /> &mdash;Daniel Webster',
        '&ldquo;One way to get the most out of life is to look upon it as an adventure.&rdquo; <br /> &mdash;William Feather',
        '&ldquo;Let us put our minds together and see what life we can make for our children.&rdquo; <br /> &mdash;Sitting Bull',
        '&ldquo;We are going to have peace even if we have to fight for it.&rdquo; <br /> &mdash;Dwight D. Eisenhower',
        '&ldquo;Find something you&rsquo;re passionate about and keep tremendously interested in it.&rdquo; <br /> &mdash;Julia Child',
        '&ldquo;Cherish all your happy moments; they make a fine cushion for old age.&rdquo; <br /> &mdash;Booth Tarkington',
        '&ldquo;All change is not growth, as all movement is not forward.&rdquo; <br /> &mdash;Ellen Glasgow',
        '&ldquo;God loves each of us as if there were only one of us.&rdquo; <br /> &mdash;Saint Augustine',
        '&ldquo;The glow of one warm thought is to me worth more than money.&rdquo; <br /> &mdash;Thomas Jefferson',
        '&ldquo;Innovation distinguishes between a leader and a follower.&rdquo; <br /> &mdash;Steve Jobs',
        '&ldquo;In this world nothing can be said to be certain, except death and taxes.&rdquo; <br /> &mdash;Benjamin Franklin',
        '&ldquo;A people free to choose will always choose peace.&rdquo; <br /> &mdash;Ronald Reagan',
        '&ldquo;The hardest thing to understand in the world is the income tax.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;Better remain silent, better not even think, if you are not prepared to act.&rdquo; <br /> &mdash;Annie Besant',
        '&ldquo;No matter what people tell you, words and ideas can change the world.&rdquo; <br /> &mdash;Robin Williams',
        '&ldquo;Perfection is the child of time.&rdquo; <br /> &mdash;Joseph Hall',
        '&ldquo;A rebirth out of spiritual adversity causes us to become new creatures.&rdquo; <br /> &mdash;James E. Faust',
        '&ldquo;Try to be like the turtle &ndash; at ease in your own shell.&rdquo; <br /> &mdash;Bill Copeland',
        '&ldquo;Either I will find a way, or I will make one.&rdquo; <br /> &mdash;Philip Sidney',
        '&ldquo;What is a soul? It&rsquo;s like electricity &ndash; we don&rsquo;t really know what it is, but it&rsquo;s a force that can light a room.&rdquo; <br /> &mdash;Ray Charles',
        '&ldquo;We must not allow other people&rsquo;s limited perceptions to define us.&rdquo; <br /> &mdash;Virginia Satir',
        '&ldquo;Nobody who ever gave his best regretted it.&rdquo; <br /> &mdash;George Halas',
        '&ldquo;Ten people who speak make more noise than ten thousand who are silent.&rdquo; <br /> &mdash;Napoleon Bonaparte',
        '&ldquo;There is always one moment in childhood when the door opens and lets the future in.&rdquo; <br /> &mdash;Graham Greene',
        '&ldquo;You can&rsquo;t wait for inspiration. You have to go after it with a club.&rdquo; <br /> &mdash;Jack London',
        '&ldquo;People change and forget to tell each other.&rdquo; <br /> &mdash;Lillian Hellman'
    ]

    let mayArray = [
        '&ldquo;Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.&rdquo; <br /> &mdash;William Blake',
        '&ldquo;Change your life today. Don&rsquo;t gamble on the future, act now, without delay.&rdquo; <br /> &mdash;Simone de Beauvoir',
        '&ldquo;Reading is to the mind what exercise is to the body.&rdquo; <br /> &mdash;Joseph Addison',
        '&ldquo;Your own mind is a sacred enclosure into which nothing harmful can enter except by your permission.&rdquo; <br /> &mdash;Arnold Bennett',
        '&ldquo;Friends are the siblings God never gave us.&rdquo; <br /> &mdash;Mencius',
        '&ldquo;Problems are not the problem; coping is the problem.&rdquo; <br /> &mdash;Virginia Satir',
        '&ldquo;What would life be if we had no courage to attempt anything?&rdquo; <br /> &mdash;Vincent Van Gogh',
        '&ldquo;It is amazing what you can accomplish if you do not care who gets the credit.&rdquo; <br /> &mdash;Harry S. Truman',
        '&ldquo;An effort made for the happiness of others lifts above ourselves.&rdquo; <br /> &mdash;Lydia M. Child',
        '&ldquo;Mother is the name for God in the lips and hearts of little children.&rdquo; <br /> &mdash;William Makepeace Thackeray',
        '&ldquo;I want to do with you what spring does with cherry trees.&rdquo; <br /> &mdash;Pablo Neruda',
        '&ldquo;Tears of joy are like the summer rain drops pierced by sunbeams.&rdquo; <br /> &mdash;Hosea Ballou',
        '&ldquo;The sun, the earth, love, friends, our very breath are parts of the banquet.&rdquo; <br /> &mdash;Rebecca Harding Davis',
        '&ldquo;If you do not think about your future, you cannot have one.&rdquo; <br /> &mdash;John Galsworthy',
        '&ldquo;Have patience. All things are difficult before they become easy.&rdquo; <br /> &mdash;Saadi',
        '&ldquo;Silence is the sleep that nourishes wisdom.&rdquo; <br /> &mdash;Francis Bacon',
        '&ldquo;Remember upon the conduct of each depends the fate of all.&rdquo; <br /> &mdash;Alexander the Great',
        '&ldquo;Nothing can be done except little by little.&rdquo; <br /> &mdash;Charles Baudelaire',
        '&ldquo;Courage is fire, and bullying is smoke.&rdquo; <br /> &mdash;Benjamin Disraeli',
        '&ldquo;There is no influence like the influence of habit.&rdquo; <br /> &mdash;Gilbert Parker',
        '&ldquo;Rough diamonds may sometimes be mistaken for worthless pebbles.&rdquo; <br /> &mdash;Thomas Browne',
        '&ldquo;Challenging the meaning of life is the truest expression of the state of being human.&rdquo; <br /> &mdash;Viktor E. Frankl',
        '&ldquo;Judge a man by his questions rather than his answers.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;Without craftsmanship, inspiration is a mere reed shaken in the wind.&rdquo; <br /> &mdash;Johannes Brahms',
        '&ldquo;The life of the dead is placed in the memory of the living.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        '&ldquo;Appearances are a glimpse of the unseen.&rdquo; <br /> &mdash;Anaxagoras',
        '&ldquo;Unless we remember we cannot understand.&rdquo; <br /> &mdash;E. M. Forster',
        '&ldquo;My fellow Americans, ask not what your country can do for you, ask what you can do for your country.&rdquo; <br /> &mdash;John F. Kennedy',
        '&ldquo;My motto is: Contented with little, yet wishing for more.&rdquo; <br /> &mdash;Charles Lamb',
        '&ldquo;Give light and people will find the way.&rdquo; <br /> &mdash;Ella Baker',
        '&ldquo;Gratitude is the fairest blossom which springs from the soul.&rdquo; <br /> &mdash;Henry Ward Beecher'
    ]

    let juneArray = [
        '&ldquo;Be not simply good &ndash; be good for something.&rdquo; <br /> &mdash;Henry David Thoreau',
        '&ldquo;Zeal is a volcano, the peak of which the grass of indecisiveness does not grow.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;A friend is one who knows you and loves you just the same.&rdquo; <br /> &mdash;Elbert Hubbard',
        '&ldquo;The greater our knowledge increases the more our ignorance unfolds.&rdquo; <br /> &mdash;John F. Kennedy',
        '&ldquo;Principles have no real force except when one is well-fed.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;Hope is the only bee that makes honey without flowers.&rdquo; <br /> &mdash;Robert Green Ingersoll',
        '&ldquo;There are no shortcuts in evolution.&rdquo; <br /> &mdash;Louis D. Brandeis',
        '&ldquo;Immorality: the morality of those who are having a better time.&rdquo; <br /> &mdash;H. L. Mencken',
        '&ldquo;Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.&rdquo; <br /> &mdash;Samuel Smiles',
        '&ldquo;No amount of experimentation can ever prove me right; a single experiment can prove me wrong.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;You cannot shake hands with a clenched fist.&rdquo; <br /> &mdash;Indira Gandhi',
        '&ldquo;Parents were invented to make children happy by giving them something to ignore.&rdquo; <br /> &mdash;Ogden Nash',
        '&ldquo;I have never in my life learned anything from any man who agreed with me.&rdquo; <br /> &mdash;Dudley Field Malone',
        '&ldquo;Formula for success: rise early, work hard, strike oil.&rdquo; <br /> &mdash;J. Paul Getty',
        '&ldquo;Childhood is a short season.&rdquo; <br /> &mdash;Helen Hayes',
        '&ldquo;I have a Father&rsquo;s Day every day.&rdquo; <br /> &mdash;Dennis Banks',
        '&ldquo;It doesn&rsquo;t matter who my father was; it matters who I remember he was.&rdquo; <br /> &mdash;Anne Sexton',
        '&ldquo;We cannot live only for ourselves. A thousand fibers connect us with our fellow men.&rdquo; <br /> &mdash;Herman Melville',
        '&ldquo;Many a trip continues long after movement in time and space have ceased.&rdquo; <br /> &mdash;John Steinbeck',
        '&ldquo;He who knows that enough is enough will always have enough.&rdquo; <br /> &mdash;Lao Tzu',
        '&ldquo;There are two ways of spreading light: to be the candle or the mirror that reflects it.&rdquo; <br /> &mdash;Edith Wharton',
        '&ldquo;Hope is being able to see that there is light despite all of the darkness.&rdquo; <br /> &mdash;Desmond Tutu',
        '&ldquo;To find out what one is fitted to do, and to secure an opportunity to do it, is the key to happiness.&rdquo; <br /> &mdash;John Dewey',
        '&ldquo;A photograph is a secret about a secret. The more it tells you the less you know.&rdquo; <br /> &mdash;Diane Arbus',
        '&ldquo;Education is the movement from darkness to light.&rdquo; <br /> &mdash;Allan Bloom',
        '&ldquo;Don&rsquo;t forget to love yourself.&rdquo; <br /> &mdash;Soren Kierkegaard',
        '&ldquo;We aim above the mark to hit the mark.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;The home is the chief school of human virtues.&rdquo; <br /> &mdash;William Ellery Channing',
        '&ldquo;Progress was all right. Only it went on too long.&rdquo; <br /> &mdash;James Thurber',
        '&ldquo;Love cures people &ndash; both the ones who give it and the ones who receive it.&rdquo; <br /> &mdash;Karl A. Menninger'
    ]

    let julyArray = [
        '&ldquo;The best way to cheer yourself up is to try to cheer somebody else up.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;It has been my experience that folks who have no vices have very few virtues.&rdquo; <br /> &mdash;Abraham Lincoln',
        '&ldquo;Give me liberty or give me death.&rdquo; <br /> &mdash;Patrick Henry',
        '&ldquo;Independence is happiness.&rdquo; <br /> &mdash;Susan B. Anthony',
        '&ldquo;Courage is knowing what not to fear.&rdquo; <br /> &mdash;Plato',
        '&ldquo;Laws are like sausages, it is better not to see them being made.&rdquo; <br /> &mdash;Otto von Bismarck',
        '&ldquo;Travel becomes a strategy for accumulating photographs.&rdquo; <br /> &mdash;Susan Sontag',
        '&ldquo;Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.&rdquo; <br /> &mdash;Lao Tzu',
        '&ldquo;People only see what they are prepared to see.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;He is happiest, be he king or peasant, who finds peace in his home.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;You are remembered for the rules you break.&rdquo; <br /> &mdash;Douglas MacArthur',
        '&ldquo;The traveler sees what he sees, the tourist sees what he has come to see.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        '&ldquo;We first make our habits, and then our habits make us.&rdquo; <br /> &mdash;John Dryden',
        '&ldquo;History is a vast early warning system.&rdquo; <br /> &mdash;Norman Cousins',
        '&ldquo;I have no money, no resources, no hopes. I am the happiest man alive.&rdquo; <br /> &mdash;Henry Miller',
        '&ldquo;Faith is the bird that feels the light when the dawn is still dark.&rdquo; <br /> &mdash;Rabindranath Tagore',
        '&ldquo;Life consists not in holding good cards but in playing those you hold well.&rdquo; <br /> &mdash;Josh Billings',
        '&ldquo;Nothing great in the world has ever been accomplished without passion.&rdquo; <br /> &mdash;Georg Wilhelm Friedrich Hegel',
        '&ldquo;Better keep yourself clean and bright; you are the window through which you must see the world.&rdquo; <br /> &mdash;George Bernard Shaw',
        '&ldquo;Real knowledge is to know the extent of one&rsquo;s ignorance.&rdquo; <br /> &mdash;Confucius',
        '&ldquo;Less is only more where more is no good.&rdquo; <br /> &mdash;Frank Lloyd Wright',
        '&ldquo;Maybe this world is another planet&rsquo;s hell.&rdquo; <br /> &mdash;Aldous Huxley',
        '&ldquo;Consistency is the last refuge of the unimaginative.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;We live in a rainbow of chaos.&rdquo; <br /> &mdash;Paul Cezanne',
        '&ldquo;Laughter is the closest distance between two people.&rdquo; <br /> &mdash;Victor Borge',
        '&ldquo;Diplomacy is the art of saying &lsquo;Nice doggie&rsquo; until you can find a rock.&rdquo; <br /> &mdash;Will Rogers',
        '&ldquo;The unexamined life is not worth living.&rdquo; <br /> &mdash;Socrates',
        '&ldquo;Freedom is never given; it is won.&rdquo; <br /> &mdash;A. Philip Randolph',
        '&ldquo;Only two things are infinite, the universe and human stupidity, and I&rsquo;m not sure about the former.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;All animals are equal, but some animals are more equal than others.&rdquo; <br /> &mdash;George Orwell',
        '&ldquo;Forgiveness is the key to action and freedom.&rdquo; <br /> &mdash;Hannah Arendt'
    ]

    let augustArray = [
        '&ldquo;A single sunbeam is enough to drive away many shadows.&rdquo; <br /> &mdash;Francis of Assisi',
        '&ldquo;Hope is patience with the lamp lit.&rdquo; <br /> &mdash;Tertullian',
        '&ldquo;If we open a quarrel between past and present, we shall find that we have lost the future.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;A somebody was once a nobody who wanted to and did.&rdquo; <br /> &mdash;John Burroughs',
        '&ldquo;When ambition ends, happiness begins.&rdquo; <br /> &mdash;Thomas Merton',
        '&ldquo;Ideologies separate us. Dreams and anguish bring us together.&rdquo; <br /> &mdash;Eugene Ionesco',
        '&ldquo;We boil at different degrees.&rdquo; <br /> &mdash;Clint Eastwood',
        '&ldquo;When one must, one can.&rdquo; <br /> &mdash;Charlotte Whitton',
        '&ldquo;If we have no peace, it is because we have forgotten that we belong to each other.&rdquo; <br /> &mdash;Mother Teresa',
        '&ldquo;No legacy is so rich as honesty.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;Act as if what you do makes a difference. It does.&rdquo; <br /> &mdash;William James',
        '&ldquo;Don&rsquo;t judge each day by the harvest you reap but by the seeds that you plant.&rdquo; <br /> &mdash;Robert Louis Stevenson',
        '&ldquo;If you want others to be happy, practice compassion. If you want to be happy, practice compassion.&rdquo; <br /> &mdash;Dalai Lama',
        '&ldquo;Happiness is a direction, not a place.&rdquo; <br /> &mdash;Sydney J. Harris',
        '&ldquo;Happiness is not a goal; it is a by-product.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        '&ldquo;The question isn&rsquo;t who is going to let me; it&rsquo;s who is going to stop me.&rdquo; <br /> &mdash;Ayn Rand',
        '&ldquo;It&rsquo;s the friends you can call up at 4 a.m. that matter.&rdquo; <br /> &mdash;Marlene Dietrich',
        '&ldquo;The most I can do for my friend is simply be his friend.&rdquo; <br /> &mdash;Henry David Thoreau',
        '&ldquo;I&rsquo;d rather have roses on my table than diamonds on my neck.&rdquo; <br /> &mdash;Emma Goldman',
        '&ldquo;Nobody ever drowned in his own sweat.&rdquo; <br /> &mdash;Ann Landers',
        '&ldquo;Never apologize for showing feeling. When you do so, you apologize for the truth.&rdquo; <br /> &mdash;Benjamin Disraeli',
        '&ldquo;It is amazing how complete is the delusion that beauty is goodness.&rdquo; <br /> &mdash;Leo Tolstoy',
        '&ldquo;People are not disturbed by things, but by the view they take of them.&rdquo; <br /> &mdash;Epictetus',
        '&ldquo;I have never met a man so ignorant that I couldn&rsquo;t learn something from him.&rdquo; <br /> &mdash;Galileo Galilei',
        '&ldquo;I don&rsquo;t think of all the misery but of the beauty that still remains.&rdquo; <br /> &mdash;Anne Frank',
        '&ldquo;The best way out is always through.&rdquo; <br /> &mdash;Robert Frost',
        '&ldquo;I have the simplest tastes. I am always satisfied with the best.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;To see things in the seed, that is genius.&rdquo; <br /> &mdash;Lao Tzu',
        '&ldquo;Thinking: the talking of the soul with itself.&rdquo; <br /> &mdash;Plato',
        '&ldquo;Good questions outrank easy answers.&rdquo; <br /> &mdash;Paul Samuelson',
        '&ldquo;Any sufficiently advanced technology is indistinguishable from magic.&rdquo; <br /> &mdash;Arthur C. Clarke'
    ]

    let septemberArray = [
        '&ldquo;A person who won&rsquo;t read has no advantage over one who can&rsquo;t read.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;We cannot change anything until we accept it. Condemnation does not liberate, it oppresses.&rdquo; <br /> &mdash;Carl Jung',
        '&ldquo;You are the bows from which your children as living arrows are sent forth.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;I may not have gone where I intended to go, but I think I have ended up where I intended to be.&rdquo; <br /> &mdash;Douglas Adams',
        '&ldquo;Though we travel the world over to find the beautiful, we must carry it with us or we find it not.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;It is not in the stars to hold our destiny but in ourselves.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;Opportunity is missed by most people because it is dressed in overalls and looks like work.&rdquo; <br /> &mdash;Thomas A. Edison',
        '&ldquo;Beware the fury of a patient man.&rdquo; <br /> &mdash;John Dryden',
        '&ldquo;Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.&rdquo; <br /> &mdash;Archimedes',
        '&ldquo;The past cannot be cured.&rdquo; <br /> &mdash;Elizabeth I',
        '&ldquo;Live as brave men; and if fortune is adverse, front its blows with brave hearts.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        '&ldquo;The object of the superior man is truth.&rdquo; <br /> &mdash;Confucius',
        '&ldquo;If you can&rsquo;t convince them, confuse them.&rdquo; <br /> &mdash;Harry S. Truman',
        '&ldquo;The secret of business is to know something that nobody else knows.&rdquo; <br /> &mdash;Aristotle Onassis',
        '&ldquo;Nobody made a greater mistake than he who did nothing because he could do only a little.&rdquo; <br /> &mdash;Edmund Burke',
        '&ldquo;The best and most beautiful things in the world cannot be seen of even touched &ndash; they must be felt with the heart.&rdquo; <br /> &mdash;Helen Keller',
        '&ldquo;Rather fail with honor than succeed by fraud.&rdquo; <br /> &mdash;Sophocles',
        '&ldquo;Everything that is made beautiful and fair and lovely is made for the eye of one who sees.&rdquo; <br /> &mdash;Rumi',
        '&ldquo;You can find peace amidst the storms that threaten you.&rdquo; <br /> &mdash;Joseph B. Wirthlin',
        '&ldquo;Let us always meet each other with smile, for the smile is the beginning of love.&rdquo; <br /> &mdash;Mother Teresa',
        '&ldquo;Give me the luxuries of life and I will willingly do without the necessities.&rdquo; <br /> &mdash;Frank Lloyd Wright',
        '&ldquo;With the new day comes new strength and new thoughts.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        '&ldquo;I often quote myself. It adds spice to my conversation.&rdquo; <br /> &mdash;George Bernard Shaw',
        '&ldquo;The science of today is the technology of tomorrow.&rdquo; <br /> &mdash;Edward Teller',
        '&ldquo;I believe things cannot make themselves impossible.&rdquo; <br /> &mdash;Stephen Hawking',
        '&ldquo;The past always looks better than it was. It&rsquo;s only pleasant because it isn&rsquo;t here.&rdquo; <br /> &mdash;Finley Peter Dunne',
        '&ldquo;A person&rsquo;s a person, no matter how small.&rdquo; <br /> &mdash;Dr. Seuss',
        '&ldquo;There are people who have money and people who are rich.&rdquo; <br /> &mdash;Coco Chanel',
        '&ldquo;Success seems to be largely a matter of hanging on after others have let go.&rdquo; <br /> &mdash;William Feather',
        '&ldquo;A champion is someone who gets up when he can&rsquo;t.&rdquo; <br /> &mdash;Jack Dempsey'
    ]

    let octoberArray = [
        '&ldquo;Two roads diverged in a wood and I &ndash; I took the one less traveled by, and that has made all the difference.&rdquo; <br /> &mdash;Robert Frost',
        '&ldquo;Just because something doesn&rsquo;t do what you planned it to do doesn&rsquo;t mean it&rsquo;s useless.&rdquo; <br /> &mdash;Thomas A. Edison',
        '&ldquo;Happiness is not something ready made. It comes from your own actions.&rdquo; <br /> &mdash;Dalai Lama',
        '&ldquo;The greatest use of a life is to spend it on something that will outlast it.&rdquo; <br /> &mdash;William James',
        '&ldquo;If opportunity doesn&rsquo;t knock, build a door.&rdquo; <br /> &mdash;Milton Berle',
        '&ldquo;Every story I create, creates me. I write to create myself.&rdquo; <br /> &mdash;Octavia E. Butler',
        '&ldquo;The soul that is within me no man can degrade.&rdquo; <br /> &mdash;Frederick Douglass',
        '&ldquo;Love is the only force capable of transforming an enemy into a friend.&rdquo; <br /> &mdash;Martin Luther King, Jr.',
        '&ldquo;Following the light of the sun, we left the Old World.&rdquo; <br /> &mdash;Christopher Columbus',
        '&ldquo;The world is round so that friendship may encircle it.&rdquo; <br /> &mdash;Pierre Teilhard de Chardin',
        '&ldquo;The smallest deed is better than the greatest intention.&rdquo; <br /> &mdash;John Burroughs',
        '&ldquo;Kind words do not cost much. Yet they accomplish much.&rdquo; <br /> &mdash;Blaise Pascal',
        '&ldquo;Greatness is a road leading towards the unknown.&rdquo; <br /> &mdash;Charles de Gaulle',
        '&ldquo;But he that dares not grasp the thorn should never crave the rose.&rdquo; <br /> &mdash;Anne Bronte',
        '&ldquo;I know not age, nor weariness nor defeat.&rdquo; <br /> &mdash;Rose Kennedy',
        '&ldquo;Life is the art of drawing without an eraser.&rdquo; <br /> &mdash;John W. Gardner',
        '&ldquo;Where there is no vision, there is no hope.&rdquo; <br /> &mdash;George Washington Carver',
        '&ldquo;I can, therefore I am.&rdquo; <br /> &mdash;Simone Weil',
        '&ldquo;Time is money.&rdquo; <br /> &mdash;Benjamin Franklin',
        '&ldquo;Writing, to me, is simply thinking through my fingers.&rdquo; <br /> &mdash;Isaac Asimov',
        '&ldquo;The reward for work well done is the opportunity to do more.&rdquo; <br /> &mdash;Jonas Salk',
        '&ldquo;There is nothing permanent except change.&rdquo; <br /> &mdash;Heraclitus',
        '&ldquo;Quality is everyone&rsquo;s responsibility.&rdquo; <br /> &mdash;W. Edwards Deming',
        '&ldquo;Out of difficulties grow miracles.&rdquo; <br /> &mdash;Jean de la Bruyere',
        '&ldquo;We loved with a love that was more than love.&rdquo; <br /> &mdash;Edgar Allan Poe',
        '&ldquo;Where is all the knowledge we lost with information?&rdquo; <br /> &mdash;T. S. Eliot',
        '&ldquo;A promise must never be broken.&rdquo; <br /> &mdash;Alexander Hamilton',
        '&ldquo;Research is creating new knowledge.&rdquo; <br /> &mdash;Neil Armstrong',
        '&ldquo;Despite everything, I believe that people are really good at heart.&rdquo; <br /> &mdash;Anne Frank',
        '&ldquo;The dog that trots about finds a bone.&rdquo; <br /> &mdash;Golda Meir',
        '&ldquo;We don&rsquo;t see things as they are, we see them as we are.&rdquo; <br /> &mdash;Anais Nin'
    ]

    let novemberArray = [
        '&ldquo;You don&rsquo;t take a photograph, you make it.&rdquo; <br /> &mdash;Ansel Adams',
        '&ldquo;It&rsquo;s not what you pay a man, but what he costs you that counts.&rdquo; <br /> &mdash;Will Rogers',
        '&ldquo;It takes an endless amount of history to make even a little tradition.&rdquo; <br /> &mdash;Henry James',
        '&ldquo;I want to put a ding in the universe.&rdquo; <br /> &mdash;Steve Jobs',
        '&ldquo;I don&rsquo;t want to be interesting. I want to be good.&rdquo; <br /> &mdash;Ludwig Mies van der Rohe',
        '&ldquo;A leader is one who knows the way, goes the way, and shows the way.&rdquo; <br /> &mdash;John C. Maxwell',
        '&ldquo;Bad officials are the ones elected by good citizens who do not vote.&rdquo; <br /> &mdash;George Jean Nathan',
        '&ldquo;It is not enough to have a good mind; the main thing is to use it well.&rdquo; <br /> &mdash;Rene Descartes',
        '&ldquo;Trust yourself, you know more than you think you do.&rdquo; <br /> &mdash;Benjamin Spock',
        '&ldquo;Reject your sense of injury and the injury itself disappears.&rdquo; <br /> &mdash;Marcus Aurelius',
        '&ldquo;In war the heroes always outnumber the soldiers ten to one.&rdquo; <br /> &mdash;H. L. Mencken',
        '&ldquo;The way to get things done is not to mind who gets the credit for doing them.&rdquo; <br /> &mdash;Benjamin Jowett',
        '&ldquo;It is the mark of an educated mind to be able to entertain a thought without accepting it.&rdquo; <br /> &mdash;Aristotle',
        '&ldquo;Real riches are the riches possessed inside.&rdquo; <br /> &mdash;B. C. Forbes',
        '&ldquo;It&rsquo;s kind of fun to do the impossible.&rdquo; <br /> &mdash;Walt Disney',
        '&ldquo;Immature love says &lsquo;I love you because I need you.&rsquo; Mature love says &lsquo;I need you because I love you.&rsquo;&rdquo; <br /> &mdash;Erich Fromm',
        '&ldquo;The tigers of wrath are wiser than the horses of instruction.&rdquo; <br /> &mdash;William Blake',
        '&ldquo;If I can stop one heart from breaking, I shall not live in vain.&rdquo; <br /> &mdash;Emily Dickinson',
        '&ldquo;Wise sayings often fall on barren ground, but a kind word is never thrown away.&rdquo; <br /> &mdash;Arthur Helps',
        '&ldquo;We choose our joys and sorrows long before we experience them.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;The future belongs to those who believe in the beauty of their dreams.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        '&ldquo;Where there is love there is life.&rdquo; <br /> &mdash;Mahatma Gandhi',
        '&ldquo;One that would have the fruit must climb the tree.&rdquo; <br /> &mdash;Thomas Fuller',
        '&ldquo;No man is an island, entire of itself; every man is a piece of the continent.&rdquo; <br /> &mdash;John Donne',
        '&ldquo;In three words I can sum up everything I&rsquo;ve learned about life: it goes on.&rdquo; <br /> &mdash;Robert Frost',
        '&ldquo;I am grateful for what I am and have. My thanksgiving is perpetual.&rdquo; <br /> &mdash;Henry David Thoreau',
        '&ldquo;Treasure the love you receive above all. It will survive long after your good health has vanished.&rdquo; <br /> &mdash;Og Mandino',
        '&ldquo;You don&rsquo;t choose your family. They are God&rsquo;s gift to you, as you are to them.&rdquo; <br /> &mdash;Desmond Tutu',
        '&ldquo;Never believe that a few caring people can&rsquo;t change the world. For, indeed, that&rsquo;s all who ever have.&rdquo; <br /> &mdash;Margaret Mead',
        '&ldquo;Do what you can, with what you have, where you are.&rdquo; <br /> &mdash;Theodore Roosevelt'
    ]

    let decemberArray = [
        '&ldquo;Soul meets soul on lovers&rsquo; lips.&rdquo; <br /> &mdash;Percy Bysshe Shelley',
        '&ldquo;Conflict cannot survive without your participation.&rdquo; <br /> &mdash;Wayne Dyer',
        '&ldquo;Whenever you do a thing, act as if all the world were watching.&rdquo; <br /> &mdash;Thomas Jefferson',
        '&ldquo;Failure will never overtake me if my determination to succeed is strong enough.&rdquo; <br /> &mdash;Og Mandino',
        '&ldquo;Civilization began the first time an angry person cast a word instead of a rock.&rdquo; <br /> &mdash;Sigmund Freud',
        '&ldquo;Leadership is influence.&rdquo; <br /> &mdash;John C. Maxwell',
        '&ldquo;Love has no age, no limit; and no death.&rdquo; <br /> &mdash;John Galsworthy',
        '&ldquo;I&rsquo;ve never dropped anyone I believed in.&rdquo; <br /> &mdash;Marilyn Monroe',
        '&ldquo;There is nothing new in the world except the history you do not know.&rdquo; <br /> &mdash;Harry S. Truman',
        '&ldquo;We are most alive when we&rsquo;re in love.&rdquo; <br /> &mdash;John Updike',
        '&ldquo;Not knowing anything is the sweetest life.&rdquo; <br /> &mdash;Sophocles',
        '&ldquo;Order and simplification are the first steps toward the mastery of a subject.&rdquo; <br /> &mdash;Thomas Mann',
        '&ldquo;Love may be or it may not, but where it is, it ought to reveal itself in its immensity.&rdquo; <br /> &mdash;Honore de Balzac',
        '&ldquo;There are no secrets that time does not reveal.&rdquo; <br /> &mdash;Jean Racine',
        '&ldquo;Nothing can have value without being an object of utility.&rdquo; <br /> &mdash;Karl Marx',
        '&ldquo;People fall forward to success.&rdquo; <br /> &mdash;Mary Kay Ash',
        '&ldquo;From a small seed a mighty trunk may grow.&rdquo; <br /> &mdash;Aeschylus',
        '&ldquo;Vanity working on a weak head, produces every sort of mischief.&rdquo; <br /> &mdash;Jane Austen',
        '&ldquo;In life, as in chess, forethought wins.&rdquo; <br /> &mdash;Charles Buxton',
        '&ldquo;Forgiveness is the final form of love.&rdquo; <br /> &mdash;Reinhold Niebuhr',
        '&ldquo;Things are not quite so simple always as black and white.&rdquo; <br /> &mdash;Doris Lessing',
        '&ldquo;Be faithful in small things because it is in them that your strength lies.&rdquo; <br /> &mdash;Mother Teresa',
        '&ldquo;Wonder is the feeling of the philosopher, and philosophy begins in wonder.&rdquo; <br /> &mdash;Plato',
        '&ldquo;For it is in giving that we receive.&rdquo; <br /> &mdash;Francis of Assisi',
        '&ldquo;Christmas is the day that holds all time together.&rdquo; <br /> &mdash;Alexander Smith',
        '&ldquo;&rsquo;Tis not enough to help the feeble up, but to support them after.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;The great thing about getting older is that you don&rsquo;t lose all the other ages you&rsquo;ve been.&rdquo; <br /> &mdash;Madeleine L&rsquo;Engle',
        '&ldquo;Great minds have purposes; others have wishes.&rdquo; <br /> &mdash;Washington Irving',
        '&ldquo;Sincerity is the way to heaven.&rdquo; <br /> &mdash;Mencius',
        '&ldquo;The limits of the possible can only be defined by going beyond them into the impossible.&rdquo; <br /> &mdash;Arthur C. Clarke',
        '&ldquo;And now we welcome the new year. Full of things that have never been.&rdquo; <br /> &mdash;Rainer Maria Rilke'
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

    let brainyQuote = monthArray[dayOfMonth - 1]

    let brainy = `<h3>${brainyQuote}</h3>`
    
    $('#brainy').html(brainy)

    let year = date.getFullYear()

    let copyright = `<p>&copy; ${year} Serena Scalzi</p>`

    $('#copyright').html(copyright)
})