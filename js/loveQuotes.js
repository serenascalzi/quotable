$(document).ready(function() {
    let januaryArray = [
        '&ldquo;The giving of love is an education in itself.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        '&ldquo;Dear Lord, I&rsquo;m so grateful I&rsquo;m still loved.&rdquo; <br /> &mdash;Vivien Leigh',
        '&ldquo;Love means to commit yourself without guarantee.&rdquo; <br /> &mdash;Anne Campbell',
        '&ldquo;Oh, love will make a dog howl in rhyme.&rdquo; <br /> &mdash;Francis Beaumont',
        '&ldquo;Love is when you meet someone who tells you something new about yourself.&rdquo; <br /> &mdash;Andre Breton',
        '&ldquo;When we are in love we often doubt that which we most believe.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        '&ldquo;If fear is the great enemy of intimacy, love is its true friend.&rdquo; <br /> &mdash;Henri Nouwen',
        '&ldquo;The only abnormality is the incapacity to love.&rdquo; <br /> &mdash;Anais Nin',
        '&ldquo;Love is like the measles; we all have to go through it.&rdquo; <br /> &mdash;Jerome K. Jerome',
        '&ldquo;I can live without money, but I cannot live without love.&rdquo; <br /> &mdash;Judy Garland',
        '&ldquo;The inner reality of love can be recognized only by love.&rdquo; <br /> &mdash;Hans Urs von Balthasar',
        '&ldquo;Lovers have a right to betray you&hellip;friends don&rsquo;t.&rdquo; <br /> &mdash;Judy Holliday',
        '&ldquo;Love is when he gives you a piece of your soul, that you never knew was missing.&rdquo; <br /> &mdash;Torquato Tasso',
        '&ldquo;If there&rsquo;s delight in love, &rsquo;Tis when I see that heart, which others bleed for, bleed for me.&rdquo; <br /> &mdash;William Congreve',
        '&ldquo;We cease loving ourselves if no one loves us.&rdquo; <br /> &mdash;Madame de Stael',
        '&ldquo;To love and win is the best thing. To love and lose, the next best.&rdquo; <br /> &mdash;William Makepeace Thackeray',
        '&ldquo;Looking back, I have this to regret, that too often when I loved, I did not say so.&rdquo; <br /> &mdash;Ray Stannard Baker',
        '&ldquo;At the center of non-violence stands the principle of love.&rdquo; <br /> &mdash;Martin Luther King, Jr.',
        '&ldquo;Age does not protect you from love. But love, to some extent, protects you from age.&rdquo; <br /> &mdash;Jeanne Moreau',
        '&ldquo;Love is space and time measured by the heart.&rdquo; <br /> &mdash;Marcel Proust',
        '&ldquo;The only love affair I have ever had was with music.&rdquo; <br /> &mdash;Maurice Ravel',
        '&ldquo;To fear love is to fear life, and those who fear life are already three parts dead.&rdquo; <br /> &mdash;Bertrand Russell',
        '&ldquo;Marriage may be the closest thing to Heaven or Hell any of us will know on this earth.&rdquo; <br /> &mdash;Edwin Louis Cole',
        '&ldquo;A kiss that is never tasted, is forever and ever wasted.&rdquo; <br /> &mdash;Billie Holiday',
        '&ldquo;Loved. You can&rsquo;t use it in the past tense. Death does not stop that love at all.&rdquo; <br /> &mdash;Ken Kesey',
        '&ldquo;Who is wise in love, love most, say least.&rdquo; <br /> &mdash;Alfred Lord Tennyson',
        '&ldquo;In every man&rsquo;s heart there is a secret nerve that answers to the vibrations of beauty.&rdquo; <br /> &mdash;Christopher Morley',
        '&ldquo;When we lose one we love, our bitterest tears are called forth by the memory of hours when we loved not enough.&rdquo; <br /> &mdash;Maurice Maeterlinck',
        '&ldquo;At the touch of love everyone becomes a poet.&rdquo; <br /> &mdash;Plato',
        '&ldquo;Accustom yourself continually to make many acts of love, for they enkindle and melt the soul.&rdquo; <br /> &mdash;Saint Teresa of Avila',
        '&ldquo;I was adored once too.&rdquo; <br /> &mdash;William Shakespeare'
    ]

    let februaryArray = [
        '&ldquo;Love implies anger. The man who is angered by nothing cares about nothing.&rdquo; <br /> &mdash;Edward Abbey',
        '&ldquo;I wonder what fool it was that first invented kissing.&rdquo; <br /> &mdash;Jonathan Swift',
        '&ldquo;Gestures, in love, are incomparably more attractive, effective and valuable than words.&rdquo; <br /> &mdash;Francois Rabelais',
        '&ldquo;Love is a better teacher than duty.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;My little dog &ndash; a heartbeat at my feet.&rdquo; <br /> &mdash;Edith Wharton',
        '&ldquo;Love in its essence is spiritual fire.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        '&ldquo;Woe to the man whose heart has not learned while young to hope, to love &ndash; and to put its trust in life.&rdquo; <br /> &mdash;Joseph Conrad',
        '&ldquo;Only do what your heart tells you.&rdquo; <br /> &mdash;Princess Diana',
        '&ldquo;True love is quiescent, except in the nascent moments of true humility.&rdquo; <br /> &mdash;Bryant H. McGill',
        '&ldquo;Love is metaphysical gravity.&rdquo; <br /> &mdash;R. Buckminster Fuller',
        '&ldquo;Love is always being given where it is not required.&rdquo; <br /> &mdash;E. M. Forster',
        '&ldquo;Love shall be our token; love be yours and love be mine.&rdquo; <br /> &mdash;Christina Rossetti',
        '&ldquo;To love one that is great, is almost to be great one&rsquo;s self.&rdquo; <br /> &mdash;Samuel Johnson',
        '&ldquo;Whatever our souls are made of, his and mine are the same.&rdquo; <br /> &mdash;Emily Bronte',
        '&ldquo;The love that lasts longest is the love that is never returned.&rdquo; <br /> &mdash;W. Somerset Maugham',
        '&ldquo;I am in you and you in me, mutual in divine love.&rdquo; <br /> &mdash;William Blake',
        '&ldquo;Because of a great love, one is courageous.&rdquo; <br /> &mdash;Lao Tzu',
        '&ldquo;To fail to love is not to exist at all.&rdquo; <br /> &mdash;Mark Van Doren',
        '&ldquo;So the lover must struggle for words.&rdquo; <br /> &mdash;T. S. Eliot',
        '&ldquo;Love is a sacred reserve of energy; it is like the blood of spiritual evolution.&rdquo; <br /> &mdash;Pierre Teilhard de Chardin',
        '&ldquo;First love is only a little foolishness and a lot of curiosity.&rdquo; <br /> &mdash;George Bernard Shaw',
        '&ldquo;Love takes up where knowledge leaves off.&rdquo; <br /> &mdash;Thomas Aquinas',
        '&ldquo;A kiss is a rosy dot over the &lsquo;i&rsquo; of loving.&rdquo; <br /> &mdash;Cyrano de Bergerac',
        '&ldquo;The sound of a kiss is not so loud as that of a cannon, but its echo lasts a great deal longer.&rdquo; <br /> &mdash;Oliver Wendell Holmes, Sr.',
        '&ldquo;One forgives to the degree that one loves.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        '&ldquo;Love possesses not nor will it be possessed, for love is sufficient unto love.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;I think you have to pay for love with bitter tears.&rdquo; <br /> &mdash;Edith Piaf',
        '&ldquo;Try as you will, you cannot annihilate that eternal relic of the human heart, love.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;Love is the flower you&rsquo;ve got to let grow.&rdquo; <br /> &mdash;John Lennon'
    ]

    let marchArray = [
        '&ldquo;People who throw kisses are hopelessly lazy.&rdquo; <br /> &mdash;Bob Hope',
        '&ldquo;Who, being loved, is poor?&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;We waste time looking for the perfect lover, instead of creating the perfect love.&rdquo; <br /> &mdash;Tom Robbins',
        '&ldquo;It is not a lack of love, but a lack of friendship that makes unhappy marriages.&rdquo; <br /> &mdash;Friedrich Nietzsche',
        '&ldquo;The love we give away is the only love we keep.&rdquo; <br /> &mdash;Elbert Hubbard',
        '&ldquo;Hatred does not cease by hatred, but only by love; this is the eternal rule.&rdquo; <br /> &mdash;Buddha',
        '&ldquo;Love can do much, but duty more.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;The more I think about it, the more I realize there is nothing more artistic than to love others.&rdquo; <br /> &mdash;Vincent Van Gogh',
        '&ldquo;The sea hath fish for every man.&rdquo; <br /> &mdash;William Camden',
        '&ldquo;Do you have to have a reason for loving?&rdquo; <br /> &mdash;Brigitte Bardot',
        '&ldquo;Love is a friendship set to music.&rdquo; <br /> &mdash;Joseph Campbell',
        '&ldquo;A so-called happy marriage corresponds to love as a correct poem to an improvised song.&rdquo; <br /> &mdash;Karl Wilhelm Friedrich Schlegel',
        '&ldquo;Be brave, young lovers, and follow your star.&rdquo; <br /> &mdash;Oscar Hammerstein II',
        '&ldquo;The world is not comprehensible, but it is embraceable: through the embracing of one of its beings.&rdquo; <br /> &mdash;Martin Buber',
        '&ldquo;We all become great explorers during our first few days in a new city, or a new love affair.&rdquo; <br /> &mdash;Mignon McLaughlin',
        '&ldquo;He who loves with purity considers not the gift of the lover, but the love of the giver.&rdquo; <br /> &mdash;Thomas a Kempis',
        '&ldquo;Love is never defeated, and I could add, the history of Ireland proves it.&rdquo; <br /> &mdash;Pope John Paul II',
        '&ldquo;One is loved because one is loved. No reason is needed for loving.&rdquo; <br /> &mdash;Paulo Coelho',
        '&ldquo;Love is all, it gives all, and it takes all.&rdquo; <br /> &mdash;Soren Kierkegaard',
        '&ldquo;The pleasures of love are always in proportion to our fears.&rdquo; <br /> &mdash;Stendhal',
        '&ldquo;Any time not spent on love is wasted.&rdquo; <br /> &mdash;Torquato Tasso',
        '&ldquo;To love for the sake of being loved is human, but to love for the sake of loving is angelic.&rdquo; <br /> &mdash;Alphonse de Lamartine',
        '&ldquo;Passion is momentary; love is enduring.&rdquo; <br /> &mdash;John Wooden',
        '&ldquo;You reclaim your power by loving what you were once taught to hate.&rdquo; <br /> &mdash;Bryant H. McGill',
        '&ldquo;A heart is not judged by how much you love, but by how much you are loved by others.&rdquo; <br /> &mdash;Frank Morgan',
        '&ldquo;Give a little love to a child, and you get a great deal back.&rdquo; <br /> &mdash;John Ruskin',
        '&ldquo;We must seek the loving-kindness of God in all the breadth and open-air of common life.&rdquo; <br /> &mdash;George A. Smith',
        '&ldquo;Never let a fool kiss you, or a kiss fool you.&rdquo; <br /> &mdash;Joey Adams',
        '&ldquo;Love is the power to see similarity in the dissimilar.&rdquo; <br /> &mdash;Theodor W. Adorno',
        '&ldquo;Love is more pleasant than marriage for the same reason that novels are more amusing than history.&rdquo; <br /> &mdash;Nicolas Chamfort',
        '&ldquo;Love is supreme and unconditional; like is nice but limited.&rdquo; <br /> &mdash;Duke Ellington'
    ]

    let aprilArray = [
        '&ldquo;It is best to love wisely, no doubt; but to love foolishly is better than not to be able to love at all.&rdquo; <br /> &mdash;William Makepeace Thackeray',
        '&ldquo;This love is silent.&rdquo; <br /> &mdash;T. S. Eliot',
        '&ldquo;We always love those who admire us, but we do not always love those whom we admire.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        '&ldquo;Heaven grant us patience with a man in love.&rdquo; <br /> &mdash;Rudyard Kipling',
        '&ldquo;There is room in the smallest cottage for a happy loving pair.&rdquo; <br /> &mdash;Friedrich Schiller',
        '&ldquo;Nobody has ever measured, not even poets, how much the heart can hold.&rdquo; <br /> &mdash;Zelda Fitzgerald',
        '&ldquo;Nothing we do, however virtuous, can be accomplished alone; therefore we are saved by love.&rdquo; <br /> &mdash;Reinhold Niebuhr',
        '&ldquo;Don&rsquo;t threaten me with love, baby. Let&rsquo;s just go walking in the rain.&rdquo; <br /> &mdash;Billie Holiday',
        '&ldquo;We are afraid to care too much, for fear that the other person does not care at all.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        '&ldquo;A man is already halfway in love with any woman who listens to him.&rdquo; <br /> &mdash;Brendan Behan',
        '&ldquo;Love sought is good, but given unsought, is better.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;The mouth obeys poorly when the heart murmurs.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;Love thou the rose, yet leave it on its stem.&rdquo; <br /> &mdash;Edward G. Bulwer-Lytton',
        '&ldquo;The greatest pleasure of life is love.&rdquo; <br /> &mdash;Euripides',
        '&ldquo;A true lover always feels in debt to the one he loves.&rdquo; <br /> &mdash;Ralph W. Sockman',
        '&ldquo;Come live in my heart, and pay no rent.&rdquo; <br /> &mdash;Samuel Lover',
        '&ldquo;What the world really needs is more love and less paper work.&rdquo; <br /> &mdash;Pearl Bailey',
        '&ldquo;The best proof of love is trust.&rdquo; <br /> &mdash;Joyce Brothers',
        '&ldquo;When love is not madness, it is not love.&rdquo; <br /> &mdash;Pedro Calderon de la Barca',
        '&ldquo;A baby is born with a need to be loved &ndash; and never outgrows it.&rdquo; <br /> &mdash;Frank A. Clark',
        '&ldquo;I really do believe that God is love, one of deep affection and grace and forgiveness and inspiration.&rdquo; <br /> &mdash;William P. Young',
        '&ldquo;Absence sharpens love, presence strengthens it.&rdquo; <br /> &mdash;Thomas Fuller',
        '&ldquo;Politics is such a torment that I advise everyone I love not to mix with it.&rdquo; <br /> &mdash;Thomas Jefferson',
        '&ldquo;There is a wisdom of the head, and a wisdom of the heart.&rdquo; <br /> &mdash;Charles Dickens',
        '&ldquo;Love, like a chicken salad or restaurant hash, must be taken with blind faith or it loses its flavor.&rdquo; <br /> &mdash;Helen Rowland',
        '&ldquo;Love is a gross exaggeration of the difference between one person and everybody else.&rdquo; <br /> &mdash;George Bernard Shaw',
        '&ldquo;I argue thee that love is life. And life hath immortality.&rdquo; <br /> &mdash;Emily Dickinson',
        '&ldquo;When we are in love we seem to ourselves quite different from what we were before.&rdquo; <br /> &mdash;Blaise Pascal',
        '&ldquo;Love is the beauty of the soul.&rdquo; <br /> &mdash;Saint Augustine',
        '&ldquo;Faith is love taking the form of aspiration.&rdquo; <br /> &mdash;William Ellery Channing'
    ]

    let mayArray = [
        '&ldquo;Morning without you is a dwindled dawn.&rdquo; <br /> &mdash;Emily Dickinson',
        '&ldquo;Life without love is like a tree without blossoms or fruit.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;Joy is prayer; joy is strength: joy is love; joy is a net of love by which you can catch souls.&rdquo; <br /> &mdash;Mother Teresa',
        '&ldquo;Follow love and it will flee, flee love and it will follow thee.&rdquo; <br /> &mdash;John Gay',
        '&ldquo;Each time you love, love as deeply as if it were forever.&rdquo; <br /> &mdash;Audre Lorde',
        '&ldquo;Care is a state in which something does matter; it is the source of human tenderness.&rdquo; <br /> &mdash;Rollo May',
        '&ldquo;Love consists in this, that two solitudes protect and touch and greet each other.&rdquo; <br /> &mdash;Rainer Maria Rilke',
        '&ldquo;Love is friendship set on fire.&rdquo; <br /> &mdash;Jeremy Taylor',
        '&ldquo;There is a woman at the beginning of all great things.&rdquo; <br /> &mdash;Alphonse de Lamartine',
        '&ldquo;Your words are my food, your breath my wine. You are everything to me.&rdquo; <br /> &mdash;Sarah Bernhardt',
        '&ldquo;Love begins by taking care of the closest ones &ndash; the ones at home.&rdquo; <br /> &mdash;Mother Teresa',
        '&ldquo;Jealousy contains more of self-love than of love.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        '&ldquo;The most important thing a father can do for his children is to love their mother.&rdquo; <br /> &mdash;Theodore Hesburgh',
        '&ldquo;It is impossible to repent of love. The sin of love does not exist.&rdquo; <br /> &mdash;Muriel Spark',
        '&ldquo;There is only one real deprivation&hellip; and that is not to be able to give one&rsquo;s gifts to those one loves most.&rdquo; <br /> &mdash;May Sarton',
        '&ldquo;Love is an energy which exists of itself. It is its own value.&rdquo; <br /> &mdash;Thornton Wilder',
        '&ldquo;Love and dignity cannot share the same abode.&rdquo; <br /> &mdash;Ovid',
        '&ldquo;Now a soft kiss &ndash; Aye, by that kiss, I vow an endless bliss.&rdquo; <br /> &mdash;John Keats',
        '&ldquo;Hell, madam, is to love no longer.&rdquo; <br /> &mdash;Georges Bernanos',
        '&ldquo;It is impossible to love and to be wise.&rdquo; <br /> &mdash;Francis Bacon',
        '&ldquo;Love is the outreach of self toward completion.&rdquo; <br /> &mdash;Ralph W. Sockman',
        '&ldquo;What is love? It is the morning and the evening star.&rdquo; <br /> &mdash;Sinclair Lewis',
        '&ldquo;The fate of love is that it always seems too little or too much.&rdquo; <br /> &mdash;Amelia Barr',
        '&ldquo;The love of our private friends is the only preparatory exercise for the love of all men.&rdquo; <br /> &mdash;John Henry Newman',
        '&ldquo;Say what you will, &rsquo;tis better to be left than never to have been loved.&rdquo; <br /> &mdash;William Congreve',
        '&ldquo;When love is at its best, one loves so much that he cannot forget.&rdquo; <br /> &mdash;Helen Hunt Jackson',
        '&ldquo;One does not fall in love; one grows into love, and love grows in him.&rdquo; <br /> &mdash;Karl A. Menninger',
        '&ldquo;It is love, not reason, that is stronger than death.&rdquo; <br /> &mdash;Thomas Mann',
        '&ldquo;If you don&rsquo;t love me, it does not matter, anyway I can love for both of us.&rdquo; <br /> &mdash;Stendhal',
        '&ldquo;A pair of powerful spectacles has sometimes sufficed to cure a person in love.&rdquo; <br /> &mdash;Friedrich Nietzsche',
        '&ldquo;Love alone could waken love.&rdquo; <br /> &mdash;Pearl S. Buck'
    ]

    let juneArray = [
        '&ldquo;When a woman is talking to you, listen to what she says with her eyes.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;Life in abundance comes only through great love.&rdquo; <br /> &mdash;Elbert Hubbard',
        '&ldquo;Love unlocks doors and opens windows that weren&rsquo;t even there before.&rdquo; <br /> &mdash;Mignon McLaughlin',
        '&ldquo;Give me love and work &ndash; these two only.&rdquo; <br /> &mdash;William Morris',
        '&ldquo;To have felt too much is to end in feeling nothing.&rdquo; <br /> &mdash;Dorothy Thompson',
        '&ldquo;Love and desire are the spirit&rsquo;s wings to great deeds.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;Love is energy of life.&rdquo; <br /> &mdash;Robert Browning',
        '&ldquo;Love is a fruit in season at all times, and within reach of every hand.&rdquo; <br /> &mdash;Mother Teresa',
        '&ldquo;I don&rsquo;t know that love changes. People change. Circumstances change.&rdquo; <br /> &mdash;Nicholas Sparks',
        '&ldquo;Love can be unselfish, in the sense of being benevolent and generous, without being selfless.&rdquo; <br /> &mdash;Mortimer Adler',
        '&ldquo;But I will never stop helping and loving people the way Jesus said to.&rdquo; <br /> &mdash;Michael Jackson',
        '&ldquo;Imagination is at the root of much that passes for love.&rdquo; <br /> &mdash;Gilbert Parker',
        '&ldquo;Love is the poetry of the senses.&rdquo; <br /> &mdash;Honore de Balzac',
        '&ldquo;Choose your love, Love your choice.&rdquo; <br /> &mdash;Thomas S. Monson',
        '&ldquo;I think my mom put it best. She said, &lsquo;Little girls soften their daddy&rsquo;s hearts.&rsquo;&rdquo; <br /> &mdash;Paul Walker',
        '&ldquo;We looked up to our father. He still is much greater than us.&rdquo; <br /> &mdash;Wynton Marsalis',
        '&ldquo;Son, brother, father, lover, friend. There is room in the heart for all the affections, as there is room in heaven for all the stars.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;Love and compassion are necessities, not luxuries. Without them humanity cannot survive.&rdquo; <br /> &mdash;Dalai Lama',
        '&ldquo;Life is like an onion. You peel it off one layer at a time, and sometimes you weep.&rdquo; <br /> &mdash;Carl Sandburg',
        '&ldquo;That man is a success who has lived well, laughed often and loved much.&rdquo; <br /> &mdash;Robert Louis Stevenson',
        '&ldquo;Being in love is the only transcendent experience.&rdquo; <br /> &mdash;Armistead Maupin',
        '&ldquo;What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.&rdquo; <br /> &mdash;Helen Keller',
        '&ldquo;In love, the one who runs away is the winner.&rdquo; <br /> &mdash;Henri Matisse',
        '&ldquo;Love looks through a telescope; envy, through a microscope.&rdquo; <br /> &mdash;Josh Billings',
        '&ldquo;Love is the attempt to form a friendship inspired by beauty.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        '&ldquo;Friendship is certainly the finest balm for the pangs of disappointed love.&rdquo; <br /> &mdash;Jane Austen',
        '&ldquo;Romance is tempestuous. Love is calm.&rdquo; <br /> &mdash;Mason Cooley',
        '&ldquo;It is very easy to love alone.&rdquo; <br /> &mdash;Gertrude Stein',
        '&ldquo;All love is vanquished by a succeeding love.&rdquo; <br /> &mdash;Ovid',
        '&ldquo;Great thoughts come from the heart.&rdquo; <br /> &mdash;Luc de Clapiers'
    ]

    let julyArray = [
        '&ldquo;If it were not for hopes, the heart would break.&rdquo; <br /> &mdash;Thomas Fuller',
        '&ldquo;They do not love that do not show their love.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;To love abundantly is to live abundantly, and to love forever is to live forever.&rdquo; <br /> &mdash;Henry Drummond',
        '&ldquo;He who loves, flies, runs, and rejoices; he is free and nothing holds him back.&rdquo; <br /> &mdash;Henri Matisse',
        '&ldquo;Love does not dominate; it cultivates.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;If you find someone you love in your life, then hang on to that love.&rdquo; <br /> &mdash;Princess Diana',
        '&ldquo;In love there are two things &ndash; bodies and words.&rdquo; <br /> &mdash;Joyce Carol Oates',
        '&ldquo;The heart that has truly loved never forgets, But as truly loves on to the close.&rdquo; <br /> &mdash;Thomas Moore',
        '&ldquo;Love without conversation is impossible.&rdquo; <br /> &mdash;Mortimer Adler',
        '&ldquo;Love comes unseen; we only see it go.&rdquo; <br /> &mdash;Henry Austin Dobson',
        '&ldquo;In matters of the heart, nothing is true except the improbable.&rdquo; <br /> &mdash;Madame de Stael',
        '&ldquo;To be able to say how much love, is love but little.&rdquo; <br /> &mdash;Petrarch',
        '&ldquo;Happiness grows at our own firesides, and is not to be picked in strangers&rsquo; gardens.&rdquo; <br /> &mdash;Douglas William Jerrold',
        '&ldquo;He is not a lover who does not love forever.&rdquo; <br /> &mdash;Euripides',
        '&ldquo;To love another person is to see the face of God.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;We are never so defensless against suffering as when we love.&rdquo; <br /> &mdash;Sigmund Freud',
        '&ldquo;If this be not love, it is madness, and then it is pardonable.&rdquo; <br /> &mdash;William Congreve',
        '&ldquo;Love has no errors, for all errors are the want for love.&rdquo; <br /> &mdash;William Law',
        '&ldquo;Don&rsquo;t brood. Get on with living and loving. You don&rsquo;t have forever.&rdquo; <br /> &mdash;Leo Buscaglia',
        '&ldquo;There is always something left to love. And if you ain&rsquo;t learned that, you ain&rsquo;t learned nothing.&rdquo; <br /> &mdash;Lorraine Hansberry',
        '&ldquo;The hunger for love is much more difficult to remove than the hunger for bread.&rdquo; <br /> &mdash;Mother Teresa',
        '&ldquo;Nobody loves a woman because she is handsome or ugly, stupid or intelligent. We love because we love.&rdquo; <br /> &mdash;Honore de Balzac',
        '&ldquo;There is no love that is not an echo.&rdquo; <br /> &mdash;Theodor W. Adorno',
        '&ldquo;The eyes those silent tongues of love.&rdquo; <br /> &mdash;Miguel de Cervantes',
        '&ldquo;Love is moral even without legal marriage, but marriage is immoral without love.&rdquo; <br /> &mdash;Ellen Key',
        '&ldquo;Ultimately love is everything.&rdquo; <br /> &mdash;M. Scott Peck',
        '&ldquo;Loving once and only once is possible &ndash; anything is possible.&rdquo; <br /> &mdash;Nicholas Sparks',
        '&ldquo;People protect what they love.&rdquo; <br /> &mdash;Jacques Yves Cousteau',
        '&ldquo;Love is a tyrant sparing none.&rdquo; <br /> &mdash;Pierre Corneille',
        '&ldquo;Absences are a good influence in love and keep it bright and delicate.&rdquo; <br /> &mdash;Robert Louis Stevenson',
        '&ldquo;I feel that there is nothing more truly artistic than to love people.&rdquo; <br /> &mdash;Vincent Van Gogh'
    ]

    let augustArray = [
        '&ldquo;The heart forgets its sorrow and ache.&rdquo; <br /> &mdash;James Russell Lowell',
        '&ldquo;The words of kindness are more healing to a drooping heart than balm or honey.&rdquo; <br /> &mdash;Sarah Fielding',
        '&ldquo;Marriages, like careers, need constant nurturing&hellip; the secret of having it all is loving it all.&rdquo; <br /> &mdash;Joyce Brothers',
        '&ldquo;It is better to have loved and lost than never to have lost at all.&rdquo; <br /> &mdash;Samuel Butler',
        '&ldquo;Blessed are the hearts that can bend; they shall never be broken.&rdquo; <br /> &mdash;Albert Camus',
        '&ldquo;There is no limit to the power of loving.&rdquo; <br /> &mdash;John Morton',
        '&ldquo;We love even when our love is not requited.&rdquo; <br /> &mdash;Mortimer Adler',
        '&ldquo;Love is not only something you feel, it is something you do.&rdquo; <br /> &mdash;David Wilkerson',
        '&ldquo;Death and love are the two wings that bear the good man to heaven.&rdquo; <br /> &mdash;Michelangelo',
        '&ldquo;Love is suffering. One side always loves more.&rdquo; <br /> &mdash;Catherine Deneuve',
        '&ldquo;He wants you all to Himself to put His loving, divine arms around you.&rdquo; <br /> &mdash;Charles Stanley',
        '&ldquo;Love never dies of starvation, but often of indigestion.&rdquo; <br /> &mdash;Ninon de L&rsquo;Enclos',
        '&ldquo;An ideal wife is any woman who has an ideal husband.&rdquo; <br /> &mdash;Booth Tarkington',
        '&ldquo;We may give without loving, but we cannot love without giving.&rdquo; <br /> &mdash;Bernard Meltzer',
        '&ldquo;Love means to love that which is unlovable; or it is no virtue at all.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        '&ldquo;One is very crazy when in love.&rdquo; <br /> &mdash;Sigmund Freud',
        '&ldquo;Love is a great beautifier.&rdquo; <br /> &mdash;Louisa May Alcott',
        '&ldquo;The crime of loving is forgetting.&rdquo; <br /> &mdash;Maurice Chevalier',
        '&ldquo;All that I am, or hope to be, I owe to my angel mother.&rdquo; <br /> &mdash;Abraham Lincoln',
        '&ldquo;It is difficult to know at what moment love begins; it is less difficult to know that it has begun.&rdquo; <br /> &mdash;Henry Wadsworth Longfellow',
        '&ldquo;Paradise was made for tender hearts; hell, for loveless hearts.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;Choose a wife rather by your ear than your eye.&rdquo; <br /> &mdash;Thomas Fuller',
        '&ldquo;Love demands infinitely less than friendship.&rdquo; <br /> &mdash;George Jean Nathan',
        '&ldquo;It is sad not to love, but it is much sadder not to be able to love.&rdquo; <br /> &mdash;Miguel de Unamuno',
        '&ldquo;I&rsquo;ve had an exciting time; I married for love and got a little money along with it.&rdquo; <br /> &mdash;Rose Kennedy',
        '&ldquo;The heart of another is a dark forest, always, no matter how close it has been to one&rsquo;s own.&rdquo; <br /> &mdash;Willa Cather',
        '&ldquo;The first time you marry for love, the second for money, and the third for companionship.&rdquo; <br /> &mdash;Jackie Kennedy',
        '&ldquo;Words may be false and full of art; Sighs are the natural language of the heart.&rdquo; <br /> &mdash;Thomas Shadwell',
        '&ldquo;To love rightly is to love what is orderly and beautiful in an educated and disciplined way.&rdquo; <br /> &mdash;Plato',
        '&ldquo;It is easier to love humanity as a whole than to love one&rsquo;s neighbor.&rdquo; <br /> &mdash;Eric Hoffer',
        '&ldquo;The love of liberty is the love of others; the love of power is the love of ourselves.&rdquo; <br /> &mdash;William Hazlitt'
    ]

    let septemberArray = [
        '&ldquo;All love shifts and changes. I don&rsquo;t know if you can be wholeheartedly in love all the time.&rdquo; <br /> &mdash;Julie Andrews',
        '&ldquo;I think it is all a matter of love: the more you love a memory, the stronger and stranger it is.&rdquo; <br /> &mdash;Vladimir Nabokov',
        '&ldquo;Love is like an hourglass, with the heart filling up as the brain empties.&rdquo; <br /> &mdash;Jules Renard',
        '&ldquo;Ultimately, we wish the joy of perfect union with the person we love.&rdquo; <br /> &mdash;Mortimer Adler',
        '&ldquo;To good and true love fear is forever affixed.&rdquo; <br /> &mdash;Francois Rabelais',
        '&ldquo;It is not love that should be depicted as blind, but self-love.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;A family can develop only with a loving woman as its center.&rdquo; <br /> &mdash;Karl Wilhelm Friedrich Schlegel',
        '&ldquo;Lovers who love truly do not write down their happiness.&rdquo; <br /> &mdash;Anatole France',
        '&ldquo;Life is best when you are in love.&rdquo; <br /> &mdash;Michael Moriarty',
        '&ldquo;A very small degree of hope is sufficient to cause the birth of love.&rdquo; <br /> &mdash;Stendhal',
        '&ldquo;Love&rsquo;s greatest gift is its ability to make everything it touches sacred.&rdquo; <br /> &mdash;Barbara De Angelis',
        '&ldquo;A successful marriage is an edifice that must be rebuilt every day.&rdquo; <br /> &mdash;Andre Maurois',
        '&ldquo;Love is my religion &ndash; I could die for it.&rdquo; <br /> &mdash;John Keats',
        '&ldquo;A coward is incapable of exhibiting love; it is the prerogative of the brave.&rdquo; <br /> &mdash;Mahatma Gandhi',
        '&ldquo;O, thou art fairer than the evening air clad in the beauty of a thousand stars.&rdquo; <br /> &mdash;Christopher Marlowe',
        '&ldquo;Love prefers twilight to daylight.&rdquo; <br /> &mdash;Oliver Wendell Holmes, Sr.',
        '&ldquo;The sweetest noise on earth, a woman&rsquo;s tongue; A string which hath no discord.&rdquo; <br /> &mdash;Bryan Procter',
        '&ldquo;A poem begins as a lump in the throat, a sense of wrong, a homesickness, a lovesickness.&rdquo; <br /> &mdash;Robert Frost',
        '&ldquo;To a father growing old nothing is dearer than a daughter.&rdquo; <br /> &mdash;Euripides',
        '&ldquo;A woman can be anything the man who loves her would have her be.&rdquo; <br /> &mdash;James M. Barrie',
        '&ldquo;We love but once, for once only are we perfectly equipped for loving.&rdquo; <br /> &mdash;Cyril Connolly',
        '&ldquo;The man as he converses is the lover; silent, he is the husband.&rdquo; <br /> &mdash;Honore de Balzac',
        '&ldquo;Happy is the man whom the Muses love: sweet speech flows from his mouth.&rdquo; <br /> &mdash;Hesiod',
        '&ldquo;But what do we know of the heart nearest to our own? What do we know of our own heart?&rdquo; <br /> &mdash;Amelia Barr',
        '&ldquo;Love in the real world means saying you&rsquo;re sorry 10 times a day.&rdquo; <br /> &mdash;Kathie Lee Gifford',
        '&ldquo;Love is blind.&rdquo; <br /> &mdash;Geoffrey Chaucer',
        '&ldquo;It is an extra dividend when you like the girl you&rsquo;ve fallen in love with.&rdquo; <br /> &mdash;Clark Gable',
        '&ldquo;The love of heaven makes one heavenly.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;Knowledge is love and light and vision.&rdquo; <br /> &mdash;Helen Keller',
        '&ldquo;Love means not ever having to say you&rsquo;re sorry.&rdquo; <br /> &mdash;Erich Segal'
    ]

    let octoberArray = [
        '&ldquo;Never a lip is curved with pain that can&rsquo;t be kissed into smiles again.&rdquo; <br /> &mdash;Bret Harte',
        '&ldquo;Once a woman has forgiven her man, she must not reheat his sins for breakfast.&rdquo; <br /> &mdash;Marlene Dietrich',
        '&ldquo;I long for the raised voice, the howl of rage or love.&rdquo; <br /> &mdash;Leslie Fiedler',
        '&ldquo;Love is the best thing in the world, and the thing that lives the longest.&rdquo; <br /> &mdash;Henry Van Dyke',
        '&ldquo;Love grows more tremendously full, swift, poignant, as the years multiply.&rdquo; <br /> &mdash;Zane Grey',
        '&ldquo;But love&rsquo;s a malady without a cure.&rdquo; <br /> &mdash;John Dryden',
        '&ldquo;There is more pleasure in loving than in being beloved.&rdquo; <br /> &mdash;Thomas Fuller',
        '&ldquo;Bid me to love, and I will give a loving heart to thee.&rdquo; <br /> &mdash;Robert Herrick',
        '&ldquo;Love is an act of endless forgiveness, a tender look which becomes a habit.&rdquo; <br /> &mdash;Peter Ustinov',
        '&ldquo;A man is given the choice between loving women and understanding them.&rdquo; <br /> &mdash;Ninon de L&rsquo;Enclos',
        '&ldquo;To love is to act.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;When you say you are in love with humanity, you are well satisfied with yourself.&rdquo; <br /> &mdash;Luigi Pirandello',
        '&ldquo;Marrying for love may be a bit risky, but it is so honest that God can&rsquo;t help but smile on it.&rdquo; <br /> &mdash;Josh Billings',
        '&ldquo;Only the broken-hearted know the truth about love.&rdquo; <br /> &mdash;Mason Cooley',
        '&ldquo;Love is too young to know what conscience is.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;True love cannot be found where it does not exist, nor can it be denied where it does.&rdquo; <br /> &mdash;Torquato Tasso',
        '&ldquo;People happy in love have an air of intensity.&rdquo; <br /> &mdash;Stendhal',
        '&ldquo;The gain is not the having of children; it is the discovery of love and how to be loving.&rdquo; <br /> &mdash;Polly Berrien Berends',
        '&ldquo;If any person wish to be idle, let them fall in love.&rdquo; <br /> &mdash;Ovid',
        '&ldquo;Who so loves believes the impossible.&rdquo; <br /> &mdash;Elizabeth Barrett Browning',
        '&ldquo;Love has a tide!&rdquo; <br /> &mdash;Helen Hunt Jackson',
        '&ldquo;Love will find a way through paths where wolves fear to prey.&rdquo; <br /> &mdash;Lord Byron',
        '&ldquo;Love and fear. Everything the father of a family says must inspire one or the other.&rdquo; <br /> &mdash;Joseph Joubert',
        '&ldquo;Love is a mutual self-giving which ends in self-recovery.&rdquo; <br /> &mdash;Fulton J. Sheen',
        '&ldquo;Sometimes love is stronger than a man&rsquo;s convictions.&rdquo; <br /> &mdash;Isaac Bashevis Singer',
        '&ldquo;I never knew how to worship until I knew how to love.&rdquo; <br /> &mdash;Henry Ward Beecher',
        '&ldquo;In the game of love, the losers are more celebrated than the winners.&rdquo; <br /> &mdash;Mason Cooley',
        '&ldquo;To live is like to love &ndash; all reason is against it, and all healthy instinct for it.&rdquo; <br /> &mdash;Samuel Butler',
        '&ldquo;And the heart that is soonest awake to the flowers is always the first to be touch&rsquo;d by the thorns.&rdquo; <br /> &mdash;Thomas Moore',
        '&ldquo;Beauty is the lover&rsquo;s gift.&rdquo; <br /> &mdash;William Congreve',
        '&ldquo;Self-love is the source of all our other loves.&rdquo; <br /> &mdash;Pierre Corneille'
    ]

    let novemberArray = [
        '&ldquo;We don&rsquo;t believe in rheumatism and true love until after the first attack.&rdquo; <br /> &mdash;Marie von Ebner-Eschenbach',
        '&ldquo;If you would be loved, love, and be loveable.&rdquo; <br /> &mdash;Benjamin Franklin',
        '&ldquo;Love is what you&rsquo;ve been through with somebody.&rdquo; <br /> &mdash;James Thurber',
        '&ldquo;Well-ordered self-love is right and natural.&rdquo; <br /> &mdash;Thomas Aquinas',
        '&ldquo;One must not trifle with love.&rdquo; <br /> &mdash;Alfred de Musset',
        '&ldquo;All the beautiful sentiments in the world weigh less than a single lovely action.&rdquo; <br /> &mdash;James Russell Lowell',
        '&ldquo;More than kisses, letters mingle souls.&rdquo; <br /> &mdash;John Donne',
        '&ldquo;Love is a hole in the heart.&rdquo; <br /> &mdash;Ben Hecht',
        '&ldquo;Love is the ultimate expression of the will to live.&rdquo; <br /> &mdash;Tom Wolfe',
        '&ldquo;Each moment of a happy lover&rsquo;s hour is worth an age of dull and common life.&rdquo; <br /> &mdash;Aphra Behn',
        '&ldquo;Unable are the loved to die, for love is immortality.&rdquo; <br /> &mdash;Emily Dickinson',
        '&ldquo;Fortune and love favor the brave.&rdquo; <br /> &mdash;Ovid',
        '&ldquo;To say &lsquo;I love you&rsquo; one must first be able to say the &lsquo;I.&rsquo;&rdquo; <br /> &mdash;Ayn Rand',
        '&ldquo;The ear is the avenue to the heart.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;Tell me who admires and loves you, and I will tell you who you are.&rdquo; <br /> &mdash;Antoine de Saint-Exupery',
        '&ldquo;Only love interests me, and I am only in contact with things that revolve around love.&rdquo; <br /> &mdash;Marc Chagall',
        '&ldquo;But surely for everything you have to love you have to pay some price.&rdquo; <br /> &mdash;Agatha Christie',
        '&ldquo;Love him and let him love you. Do you think anything else under heaven really matters?&rdquo; <br /> &mdash;James Baldwin',
        '&ldquo;Love is the difficult realization that something other than oneself is real.&rdquo; <br /> &mdash;Iris Murdoch',
        '&ldquo;A loving heart is the truest wisdom.&rdquo; <br /> &mdash;Charles Dickens',
        '&ldquo;Courage is like love; it must have hope for nourishment.&rdquo; <br /> &mdash;Napoleon Bonaparte',
        '&ldquo;Familiar acts are beautiful through love.&rdquo; <br /> &mdash;Percy Bysshe Shelley',
        '&ldquo;There are more people who wish to be loved than there are who are willing to love.&rdquo; <br /> &mdash;Nicolas Chamfort',
        '&ldquo;In short I will part with anything for you but you.&rdquo; <br /> &mdash;Mary Wortley Montagu',
        '&ldquo;My heart is like a singing bird.&rdquo; <br /> &mdash;Christina Rossetti',
        '&ldquo;Thanksgiving is a time of togetherness and gratitude.&rdquo; <br /> &mdash;Nigel Hamilton',
        '&ldquo;Love is, above all, the gift of oneself.&rdquo; <br /> &mdash;Jean Anouilh',
        '&ldquo;Love is all we have, the only way that each can help the other.&rdquo; <br /> &mdash;Euripides',
        '&ldquo;To witness two lovers is a spectacle for the gods.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;The one thing we can never get enough of is love. And the one thing we never give enough is love.&rdquo; <br /> &mdash;Henry Miller'
    ]

    let decemberArray = [
        '&ldquo;It&rsquo;s important for us to latch onto the people that we love.&rdquo; <br /> &mdash;Connie Stevens',
        '&ldquo;Our first and last love is self-love.&rdquo; <br /> &mdash;Christian Nestell Bovee',
        '&ldquo;Happiness is like a kiss. You must share it to enjoy it.&rdquo; <br /> &mdash;Bernard Meltzer',
        '&ldquo;Girls we love for what they are; young men for what they promise to be.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;Who ever loved that loved not at first sight?&rdquo; <br /> &mdash;Christopher Marlowe',
        '&ldquo;If I get married, I want to be very married.&rdquo; <br /> &mdash;Audrey Hepburn',
        '&ldquo;Kindness in women, not their beauteous looks, shall win my love.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;You, yourself, as much as anybody in the entire universe, deserve your love and affection.&rdquo; <br /> &mdash;Buddha',
        '&ldquo;There is no disguise which can hide love for long where it exists, or simulate it where it does not.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        '&ldquo;Down on your knees, and thank heaven, fasting, for a good man&rsquo;s love.&rdquo; <br /> &mdash;Euripides',
        '&ldquo;No one has ever loved anyone the way everyone wants to be loved.&rdquo; <br /> &mdash;Mignon McLaughlin',
        '&ldquo;Love is not altogether a delirium, yet it has many points in common therewith.&rdquo; <br /> &mdash;Thomas Carlyle',
        '&ldquo;Love is a smoke made with the fume of sighs.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;Who would give a law to lovers? Love is unto itself a higher law.&rdquo; <br /> &mdash;Boethius',
        '&ldquo;A good husband makes a good wife.&rdquo; <br /> &mdash;John Florio',
        '&ldquo;What a man takes in by contemplation, that he pours out in love.&rdquo; <br /> &mdash;Meister Eckhart',
        '&ldquo;We are all born for love. It is the principle of existence, and its only end.&rdquo; <br /> &mdash;Benjamin Disraeli',
        '&ldquo;No matter how love-sick a woman is, she shouldn&rsquo;t take the first pill that comes along.&rdquo; <br /> &mdash;Joyce Brothers',
        '&ldquo;As love without esteem is capricious and volatile; esteem without love is languid and cold.&rdquo; <br /> &mdash;Jonathan Swift',
        '&ldquo;A man&rsquo;s kiss is his signature.&rdquo; <br /> &mdash;Mae West',
        '&ldquo;Every gift which is given, even though it be small, is in reality great, if it is given with affection.&rdquo; <br /> &mdash;Pindar',
        '&ldquo;What love we&rsquo;ve given, we&rsquo;ll have forever. What love we fail to give, will be lost for all eternity.&rdquo; <br /> &mdash;Leo Buscaglia',
        '&ldquo;Let no one who loves be unhappy, even love unreturned has its rainbow.&rdquo; <br /> &mdash;James M. Barrie',
        '&ldquo;There is no surprise more magical than the surprise of being loved: It is God&rsquo;s finger on man&rsquo;s shoulder.&rdquo; <br /> &mdash;Charles Morgan',
        '&ldquo;As the Father has loved me, so have I loved you.&rdquo; <br /> &mdash;Jesus Christ',
        '&ldquo;Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.&rdquo; <br /> &mdash;Lao Tzu',
        '&ldquo;Accept what people offer. Drink their milkshakes. Take their love.&rdquo; <br /> &mdash;Wally Lamb',
        '&ldquo;Faith makes all things possible&hellip; love makes all things easy.&rdquo; <br /> &mdash;Dwight L. Moody',
        '&ldquo;Love keeps the cold out better than a cloak.&rdquo; <br /> &mdash;Henry Wadsworth Longfellow',
        '&ldquo;They invented hugs to let people know you love them without saying anything.&rdquo; <br /> &mdash;Bil Keane',
        '&ldquo;With our love, we could save the world.&rdquo; <br /> &mdash;George Harrison'
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

    let loveQuote = monthArray[dayOfMonth - 1]

    let love = `<h3>${loveQuote}</h3>`

    $('#love').html(love)
})
