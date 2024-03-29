$(document).ready(function() {
    let januaryArray = [
        '&ldquo;I make pictures and someone comes in and calls it art.&rdquo; <br /> &mdash;Willem de Kooning',
        '&ldquo;I think it is in collaboration that the nature of art is revealed.&rdquo; <br /> &mdash;Steve Lacy',
        '&ldquo;Art is the only way to run away without leaving home.&rdquo; <br /> &mdash;Twyla Tharp',
        '&ldquo;Art is science made clear.&rdquo; <br /> &mdash;Wilson Mizner',
        '&ldquo;Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.&rdquo; <br /> &mdash;Scott Adams',
        '&ldquo;I&rsquo;m not that obsessed with making representations of ugliness. Everything I&rsquo;ve seen is beautiful.&rdquo; <br /> &mdash;Otto Dix',
        '&ldquo;Advertising is the greatest art form of the 20th century.&rdquo; <br /> &mdash;Marshall McLuhan',
        '&ldquo;Fine art is that in which the hand, the head, and the heart of man go together.&rdquo; <br /> &mdash;John Ruskin',
        '&ldquo;An original artist is unable to copy. So he has only to copy in order to be original.&rdquo; <br /> &mdash;Jean Cocteau',
        '&ldquo;The modern work of art, as I have said, is a symbol.&rdquo; <br /> &mdash;Herbert Read',
        '&ldquo;If you know somethin&rsquo; well, you can always paint it but people would be better off buyin&rsquo; chickens.&rdquo; <br /> &mdash;Grandma Moses',
        '&ldquo;It may be that the deep necessity of art is the examination of self-deception.&rdquo; <br /> &mdash;Robert Motherwell',
        '&ldquo;It is only an auctioneer who can equally and impartially admire all schools of art.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;Art is the stored honey of the human soul, gathered on wings of misery and travail.&rdquo; <br /> &mdash;Theodore Dreiser',
        '&ldquo;Art is the triumph over chaos.&rdquo; <br /> &mdash;John Cheever',
        '&ldquo;I&rsquo;m afraid that if you look at a thing long enough, it loses all of its meaning.&rdquo; <br /> &mdash;Andy Warhol',
        '&ldquo;Artists who seek perfection in everything are those who cannot attain it in anything.&rdquo; <br /> &mdash;Gustave Flaubert',
        '&ldquo;Art, like morality, consists in drawing the line somewhere.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        '&ldquo;Most works of art, like most wines, ought to be consumed in the district of their fabrication.&rdquo; <br /> &mdash;Simone Weil',
        '&ldquo;If I didn&rsquo;t choose art, I would have become an astronomer.&rdquo; <br /> &mdash;Peter Max',
        '&ldquo;The artist belongs to his work, not the work to the artist.&rdquo; <br /> &mdash;Novalis',
        '&ldquo;An artist is he for whom the goal and center of life is to form his mind.&rdquo; <br /> &mdash;Karl Wilhelm Friedrich Schlegel',
        '&ldquo;In art the best is good enough.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;All art is a struggle to be, in a particular sort of way, virtuous.&rdquo; <br /> &mdash;Iris Murdoch',
        '&ldquo;Artists are, above all, men who want to become inhuman.&rdquo; <br /> &mdash;Guillaume Apollinaire',
        '&ldquo;I decided that if I could paint that flower in a huge scale, you could not ignore its beauty.&rdquo; <br /> &mdash;Georgia O&rsquo;Keeffe',
        '&ldquo;I really believe there are things nobody would see if I didn&rsquo;t photograph them.&rdquo; <br /> &mdash;Diane Arbus',
        '&ldquo;The great artist is a slave to his ideals.&rdquo; <br /> &mdash;Christian Nestell Bovee',
        '&ldquo;Art is a collaboration between God and the artist, and the less the artist does the better.&rdquo; <br /> &mdash;Andre Gide',
        '&ldquo;It is the addition of strangeness to beauty that constitutes the romantic character in art.&rdquo; <br /> &mdash;Walter Hagen',
        '&ldquo;Art is Art. Everything else is everything else.&rdquo; <br /> &mdash;Ad Reinhardt'
    ]

    let februaryArray = [
        '&ldquo;The rule in the art world is: you cater to the masses or you kowtow to the elite; you can&rsquo;t have both.&rdquo; <br /> &mdash;Ben Hecht',
        '&ldquo;I cry out for order and find it only in art.&rdquo; <br /> &mdash;Helen Hayes',
        '&ldquo;Fiction reveals truths that reality obscures.&rdquo; <br /> &mdash;Jessamyn West',
        '&ldquo;Art washes away from the soul the dust of everyday life.&rdquo; <br /> &mdash;Pablo Picasso',
        '&ldquo;Culture is the arts elevated to a set of beliefs.&rdquo; <br /> &mdash;Thomas Wolfe',
        '&ldquo;An artist cannot fail; it is a success to be one.&rdquo; <br /> &mdash;Charles Horton Cooley',
        '&ldquo;The excellency of every art is its intensity, capable of making all disagreeable evaporate.&rdquo; <br /> &mdash;John Keats',
        '&ldquo;Just as the bird sings or the butterfly soars, because it is his natural characteristic, so the artist works.&rdquo; <br /> &mdash;Alma Gluck',
        '&ldquo;An empty canvas is a living wonder&hellip; far lovelier than certain pictures.&rdquo; <br /> &mdash;Wassily Kandinsky',
        '&ldquo;What is art but a way of seeing?&rdquo; <br /> &mdash;Saul Bellow',
        '&ldquo;Art consists of limitation. The most beautiful part of every picture is the frame.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        '&ldquo;Things are beautiful if you love them.&rdquo; <br /> &mdash;Jean Anouilh',
        '&ldquo;It&rsquo;s a moment that I&rsquo;m after, a fleeting moment, but not a frozen moment.&rdquo; <br /> &mdash;Andrew Wyeth',
        '&ldquo;Only through art can we emerge from ourselves and know what another person sees.&rdquo; <br /> &mdash;Marcel Proust',
        '&ldquo;You begin with the possibilities of the material.&rdquo; <br /> &mdash;Robert Rauschenberg',
        '&ldquo;The artist must bow to the monster of his own imagination.&rdquo; <br /> &mdash;Richard Wright',
        '&ldquo;A photograph is usually looked at &ndash; seldom looked into.&rdquo; <br /> &mdash;Ansel Adams',
        '&ldquo;Art is the unceasing effort to compete with the beauty of flowers &ndash; and never succeeding.&rdquo; <br /> &mdash;Gian Carlo Menotti',
        '&ldquo;I am an artist&hellip; I am here to live out loud.&rdquo; <br /> &mdash;Emile Zola',
        '&ldquo;Impressionism; it is the birth of Light in painting.&rdquo; <br /> &mdash;Robert Delaunay',
        '&ldquo;Paint the essential character of things.&rdquo; <br /> &mdash;Camille Pissarro',
        '&ldquo;When I draw something, the brain and the hands work together.&rdquo; <br /> &mdash;Tadao Ando',
        '&ldquo;I have no fear of making changes, destroying the image, etc., because the painting has a life of its own.&rdquo; <br /> &mdash;Jackson Pollock',
        '&ldquo;I will preach with my brush.&rdquo; <br /> &mdash;Henry Ossawa Tanner',
        '&ldquo;I put my heart and my soul into my work, and have lost my mind in the process.&rdquo; <br /> &mdash;Vincent Van Gogh',
        '&ldquo;With color one obtains an energy that seems to stem from witchcraft.&rdquo; <br /> &mdash;Henri Matisse',
        '&ldquo;I paint as if I were Rothschild.&rdquo; <br /> &mdash;Paul Cezanne',
        '&ldquo;Painting is a source of endless pleasure, but also of great anguish.&rdquo; <br /> &mdash;Balthus',
        '&ldquo;Don&rsquo;t pay any attention to what they write about you. Just measure it in inches.&rdquo; <br /> &mdash;Andy Warhol'
    ]

    let marchArray = [
        '&ldquo;Every picture shows a spot with which the artist has fallen in love.&rdquo; <br /> &mdash;Alfred Sisley',
        '&ldquo;An empty canvas is full.&rdquo; <br /> &mdash;Robert Rauschenberg',
        '&ldquo;Rationalism is the enemy of art, though necessary as a basis for architecture.&rdquo; <br /> &mdash;Arthur Erickson',
        '&ldquo;A great artist can paint a great picture on a small canvas.&rdquo; <br /> &mdash;Charles Dudley Warner',
        '&ldquo;Photograph: a picture painted by the sun without instruction in art.&rdquo; <br /> &mdash;Ambrose Bierce',
        '&ldquo;A man paints with his brains and not with his hands.&rdquo; <br /> &mdash;Michelangelo',
        '&ldquo;Filmmaking can be a fine art.&rdquo; <br /> &mdash;Terri Windling',
        '&ldquo;The philistine provides the best definition of art. Anything that makes him rage is first class.&rdquo; <br /> &mdash;Louis Dudek',
        '&ldquo;Creativity takes courage.&rdquo; <br /> &mdash;Henri Matisse',
        '&ldquo;Minimalism wasn&rsquo;t a real idea &ndash; it ended before it started.&rdquo; <br /> &mdash;Sol LeWitt',
        '&ldquo;Art is the final cunning of the human soul which would rather do anything than face the gods.&rdquo; <br /> &mdash;Iris Murdoch',
        '&ldquo;To curb the machine and limit art to handicraft is a denial of opportunity.&rdquo; <br /> &mdash;Lewis Mumford',
        '&ldquo;What I didn&rsquo;t know was I was deeply attracted to the big space.&rdquo; <br /> &mdash;David Hockney',
        '&ldquo;Life beats down and crushes the soul and art reminds you that you have one.&rdquo; <br /> &mdash;Stella Adler',
        '&ldquo;I don&rsquo;t believe in art. I believe in artists.&rdquo; <br /> &mdash;Marcel Duchamp',
        '&ldquo;No great art has even been made without the artist having known danger.&rdquo; <br /> &mdash;Rainer Maria Rilke',
        '&ldquo;No heirloom of humankind captures the past as do art and language.&rdquo; <br /> &mdash;Theodore Bikel',
        '&ldquo;To paint is a possessing rather than a picturing.&rdquo; <br /> &mdash;Philip Guston',
        '&ldquo;Painting is the passage from the chaos of the emotions to the order of the possible.&rdquo; <br /> &mdash;Balthus',
        '&ldquo;There is nothing new in art except talent.&rdquo; <br /> &mdash;Anton Chekhov',
        '&ldquo;There is a role and function for beauty in our time.&rdquo; <br /> &mdash;Tadao Ando',
        '&ldquo;Rules and models destroy genius and art.&rdquo; <br /> &mdash;William Hazlitt',
        '&ldquo;A drawing is simply a line going for a walk.&rdquo; <br /> &mdash;Paul Klee',
        '&ldquo;I hope to live all my life for my art, without abandoning my principles one iota.&rdquo; <br /> &mdash;Gustave Courbet',
        '&ldquo;Photography is a major force in explaining man to man.&rdquo; <br /> &mdash;Edward Steichen',
        '&ldquo;I never paint dreams or nightmares. I paint my own reality.&rdquo; <br /> &mdash;Frida Kahlo',
        '&ldquo;Painting from nature is not copying the object; it is realizing one&rsquo;s sensations.&rdquo; <br /> &mdash;Paul Cezanne',
        '&ldquo;Art must take reality by surprise.&rdquo; <br /> &mdash;Francoise Sagan',
        '&ldquo;Artistic temperament is the disease that afflicts amateurs.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        '&ldquo;The artist vocation is to send light into the human heart.&rdquo; <br /> &mdash;George Sand',
        '&ldquo;From now on, I&rsquo;ll connect the dots my own way.&rdquo; <br /> &mdash;Bill Watterson'
    ]

    let aprilArray = [
        '&ldquo;The people who make art their business are mostly imposters.&rdquo; <br /> &mdash;Pablo Picasso',
        '&ldquo;That&rsquo;s the motivation of an artist &ndash; to seek attention of some kind.&rdquo; <br /> &mdash;James Taylor',
        '&ldquo;Irresponsibility is part of the pleasure of all art; it is the part the schools cannot recognize.&rdquo; <br /> &mdash;James Joyce',
        '&ldquo;Wherever art appears, life disappears.&rdquo; <br /> &mdash;Robert Motherwell',
        '&ldquo;Art is one thing that can go on mattering once it has stopped hurting.&rdquo; <br /> &mdash;Elizabeth Bowen',
        '&ldquo;The basis of art is truth, both in matter and in mode.&rdquo; <br /> &mdash;Flannery O&rsquo;Connor',
        '&ldquo;A great artist is a great man in a great child.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;Art is not living. It is the use of living.&rdquo; <br /> &mdash;Audre Lorde',
        '&ldquo;Great art picks up where nature ends.&rdquo; <br /> &mdash;Marc Chagall',
        '&ldquo;I don&rsquo;t paint things. I only paint the difference between things.&rdquo; <br /> &mdash;Henri Matisse',
        '&ldquo;My hand is the extension of the thinking process &ndash; the creative process.&rdquo; <br /> &mdash;Tadao Ando',
        '&ldquo;Every portrait that is painted with feeling is a portrait of the artist, not of the sitter.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;Life is short, the art long.&rdquo; <br /> &mdash;Hippocrates',
        '&ldquo;If a building becomes architecture, then it is art.&rdquo; <br /> &mdash;Arne Jacobsen',
        '&ldquo;The first money I ever earned was for drawing stone tools.&rdquo; <br /> &mdash;Mary Leakey',
        '&ldquo;The man who never in his mind and thoughts travel&rsquo;d to heaven is no artist.&rdquo; <br /> &mdash;William Blake',
        '&ldquo;A work of art is a world in itself reflecting senses and emotions of the artist&rsquo;s world.&rdquo; <br /> &mdash;Hans Hofmann',
        '&ldquo;Many excellent cooks are spoilt by going into the arts.&rdquo; <br /> &mdash;Paul Gauguin',
        '&ldquo;The essence of all art is to have pleasure in giving pleasure.&rdquo; <br /> &mdash;Dale Carnegie',
        '&ldquo;To send light into the darkness of men&rsquo;s hearts &ndash; such is the duty of the artist.&rdquo; <br /> &mdash;Robert Schumann',
        '&ldquo;Be brave enough to live life creatively. The creative place where no one else has ever been.&rdquo; <br /> &mdash;Alan Alda',
        '&ldquo;I believe only in art and failure.&rdquo; <br /> &mdash;Jane Rule',
        '&ldquo;There is only one valuable thing in art: the thing you cannot explain.&rdquo; <br /> &mdash;Georges Braque',
        '&ldquo;Art ought never to be considered except in its relations with its ideal beauty.&rdquo; <br /> &mdash;Alfred de Vigny',
        '&ldquo;Art resides in the quality of doing, process is not magic.&rdquo; <br /> &mdash;Charles Eames',
        '&ldquo;Art does not reproduce what we see; rather, it makes us see.&rdquo; <br /> &mdash;Paul Klee',
        '&ldquo;It is not sufficient to see and to know the beauty of a work. We must feel and be affected by it.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;Painting is by nature a luminous language.&rdquo; <br /> &mdash;Robert Delaunay',
        '&ldquo;Art is the objectification of feeling.&rdquo; <br /> &mdash;Herman Melville',
        '&ldquo;The precision of naming takes away from the uniqueness of seeing.&rdquo; <br /> &mdash;Pierre Bonnard'
    ]

    let mayArray = [
        '&ldquo;Art is a marriage of the conscious and the unconscious.&rdquo; <br /> &mdash;Jean Cocteau',
        '&ldquo;Art is either plagiarism or revolution.&rdquo; <br /> &mdash;Paul Gauguin',
        '&ldquo;Art is nature speeded up and God slowed down.&rdquo; <br /> &mdash;Malcolm de Chazal',
        '&ldquo;When that shutter clicks, anything else that can be done afterward is not worth consideration.&rdquo; <br /> &mdash;Edward Steichen',
        '&ldquo;Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;Draw your pleasure, paint your pleasure, and express your pleasure strongly.&rdquo; <br /> &mdash;Pierre Bonnard',
        '&ldquo;Imagination is the eye of the soul.&rdquo; <br /> &mdash;Joseph Joubert',
        '&ldquo;Art is parasitic on life, just as criticism is parasitic on art.&rdquo; <br /> &mdash;Harry S. Truman',
        '&ldquo;I owe much to mother. She had an expert&rsquo;s understanding, but also approached art emotionally.&rdquo; <br /> &mdash;David Rockefeller',
        '&ldquo;Great art is never produced for its own sake. It is too difficult to be worth the effort.&rdquo; <br /> &mdash;Robert Quillen',
        '&ldquo;To create one&rsquo;s world in any of the arts takes courage.&rdquo; <br /> &mdash;Georgia O&rsquo;Keeffe',
        '&ldquo;I like to pretend that my art has nothing to do with me.&rdquo; <br /> &mdash;Roy Lichtenstein',
        '&ldquo;The temple of art is built in words.&rdquo; <br /> &mdash;Josiah Gilbert Holland',
        '&ldquo;If we could but paint with the hand what we see with the eye.&rdquo; <br /> &mdash;Honore de Balzac',
        '&ldquo;Architecture is the art of how to waste space.&rdquo; <br /> &mdash;Philip Johnson',
        '&ldquo;Anything simple always interests me.&rdquo; <br /> &mdash;David Hockney',
        '&ldquo;Painting and writing are solitary arts.&rdquo; <br /> &mdash;Conrad Hall',
        '&ldquo;Art is not a study of positive reality, it is the seeking for ideal truth.&rdquo; <br /> &mdash;John Ruskin',
        '&ldquo;Impressionism is the newspaper of the soul.&rdquo; <br /> &mdash;Henri Matisse',
        '&ldquo;What I wanted to do was to paint sunlight on the side of a house.&rdquo; <br /> &mdash;Edward Hopper',
        '&ldquo;Art is like a border of flowers along the course of civilization.&rdquo; <br /> &mdash;Lincoln Steffens',
        '&ldquo;Art is the symbol of the two noblest human efforts: to construct and to refrain from destruction.&rdquo; <br /> &mdash;Evelyn Waugh',
        '&ldquo;The counterfeit and counterpart of Nature is reproduced in art.&rdquo; <br /> &mdash;Henry Wadsworth Longfellow',
        '&ldquo;Every artist dips his brush in his own soul, and paints his own nature into his pictures.&rdquo; <br /> &mdash;Henry Ward Beecher',
        '&ldquo;The defining function of the artist is to cherish consciousness.&rdquo; <br /> &mdash;Max Eastman',
        '&ldquo;Painting, n.: The art of protecting flat surfaces from the weather, and exposing them to the critic.&rdquo; <br /> &mdash;Ambrose Bierce',
        '&ldquo;Time and memory are true artists; they remould reality nearer to the heart&rsquo;s desire.&rdquo; <br /> &mdash;John Dewey',
        '&ldquo;I paint with shapes.&rdquo; <br /> &mdash;Alexander Calder',
        '&ldquo;Art is anything you can get away with.&rdquo; <br /> &mdash;Marshall McLuhan',
        '&ldquo;Not everybody trusts paintings but people believe photographs.&rdquo; <br /> &mdash;Ansel Adams',
        '&ldquo;The perfection of art is to conceal art.&rdquo; <br /> &mdash;Quintilian'
    ]

    let juneArray = [
        '&ldquo;Ads are the cave art of the twentieth century.&rdquo; <br /> &mdash;Marshall McLuhan',
        '&ldquo;An artist never really finishes his work, he merely abandons it.&rdquo; <br /> &mdash;Paul Valery',
        '&ldquo;Every artist writes his own autobiography.&rdquo; <br /> &mdash;Havelock Ellis',
        '&ldquo;Art is the desire of a man to express himself, to record the reactions of his personality to the world he lives in.&rdquo; <br /> &mdash;Amy Lowell',
        '&ldquo;An artist is a dreamer consenting to dream of the actual world.&rdquo; <br /> &mdash;George Santayana',
        '&ldquo;There are always two people in every picture: the photographer and the viewer.&rdquo; <br /> &mdash;Ansel Adams',
        '&ldquo;Are you really sure that a floor can&rsquo;t also be a ceiling?&rdquo; <br /> &mdash;M. C. Escher',
        '&ldquo;Art is not a handicraft, it is the transmission of feeling the artist has experienced.&rdquo; <br /> &mdash;Leo Tolstoy',
        '&ldquo;A guilty conscience needs to confess. A work of art is a confession.&rdquo; <br /> &mdash;Albert Camus',
        '&ldquo;Art is the signature of civilizations.&rdquo; <br /> &mdash;Beverly Sills',
        '&ldquo;The highest art is always the most religious, and the greatest artist is always a devout person.&rdquo; <br /> &mdash;Abraham Lincoln',
        '&ldquo;An artist must be a reactionary. He has to stand out against the tenor of the age and not go flopping along.&rdquo; <br /> &mdash;Andre Maurois',
        '&ldquo;Art is the most intense mode of individualism that the world has known.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;Space is the breath of art.&rdquo; <br /> &mdash;Frank Lloyd Wright',
        '&ldquo;The man who has no imagination has no wings.&rdquo; <br /> &mdash;Muhammad Ali',
        '&ldquo;Art hurts. Art urges voyages &ndash; and it is easier to stay at home.&rdquo; <br /> &mdash;Gwendolyn Brooks',
        '&ldquo;Illusion is the first of all pleasures.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;Art is making something out of nothing and selling it.&rdquo; <br /> &mdash;Frank Zappa',
        '&ldquo;Interpretation is the revenge of the intellectual upon art.&rdquo; <br /> &mdash;Susan Sontag',
        '&ldquo;To find a form that accommodates the mess, that is the task of the artist now.&rdquo; <br /> &mdash;Samuel Beckett',
        '&ldquo;A picture is a poem without words.&rdquo; <br /> &mdash;Horace',
        '&ldquo;Art! Who comprehends her? With whom can one consult concerning this great goddess?&rdquo; <br /> &mdash;Ludwig van Beethoven',
        '&ldquo;Great artists have no country.&rdquo; <br /> &mdash;Alfred de Musset',
        '&ldquo;Art is pattern informed by sensibility.&rdquo; <br /> &mdash;Herbert Read',
        '&ldquo;A room hung with pictures is a room hung with thoughts.&rdquo; <br /> &mdash;Joshua Reynolds',
        '&ldquo;I rarely draw what I see. I draw what I feel in my body.&rdquo; <br /> &mdash;Barbara Hepworth',
        '&ldquo;Be careful that you do not write or paint anything that is not your own, that you don&rsquo;t know in your own soul.&rdquo; <br /> &mdash;Emily Carr',
        '&ldquo;You cannot possibly invent painting all by yourself.&rdquo; <br /> &mdash;Pierre Bonnard',
        '&ldquo;The expression of beauty is in direct ratio to the power of conception the artist has acquired.&rdquo; <br /> &mdash;Gustave Courbet',
        '&ldquo;The worse my drawings were, the more beautiful did the originals appear.&rdquo; <br /> &mdash;John James Audubon'
    ]

    let julyArray = [
        '&ldquo;I choose a block of marble and chop off whatever I don&rsquo;t need.&rdquo; <br /> &mdash;Auguste Rodin',
        '&ldquo;A work of art that contains theories is like an object on which the price tag has been left.&rdquo; <br /> &mdash;Alexander Pope',
        '&ldquo;To draw you must close your eyes and sing.&rdquo; <br /> &mdash;Pablo Picasso',
        '&ldquo;The work of art is a scream of freedom.&rdquo; <br /> &mdash;Christo',
        '&ldquo;Art teaches nothing, except the significance of life.&rdquo; <br /> &mdash;Michael Korda',
        '&ldquo;The principle of art is to pause, not bypass.&rdquo; <br /> &mdash;Jerzy Kosinski',
        '&ldquo;Artists themselves are not confined, but their output is.&rdquo; <br /> &mdash;Robert Smithson',
        '&ldquo;To change your phrase somewhat, I know that I like an art where disparate elements form an entity.&rdquo; <br /> &mdash;James Schuyler',
        '&ldquo;Many artists and scholars have pointed out that ultimately art depends on human nature.&rdquo; <br /> &mdash;Steven Pinker',
        '&ldquo;What marks the artist is his power to shape the material of pain we all have.&rdquo; <br /> &mdash;Lionel Trilling',
        '&ldquo;Art, in itself, is an attempt to bring order out of chaos.&rdquo; <br /> &mdash;Stephen Sondheim',
        '&ldquo;Art never seems to make me peaceful or pure.&rdquo; <br /> &mdash;Willem de Kooning',
        '&ldquo;Every art expression is rooted fundamentally in the personality and temperament of the artist.&rdquo; <br /> &mdash;Hans Hofmann',
        '&ldquo;I start a picture and I finish it.&rdquo; <br /> &mdash;Jean-Michel Basquiat',
        '&ldquo;When artists make art, they shouldn&rsquo;t question whether it is permissible to do one thing or another.&rdquo; <br /> &mdash;Sol LeWitt',
        '&ldquo;The most seductive thing about art is the personality of the artist himself.&rdquo; <br /> &mdash;Paul Cezanne',
        '&ldquo;An artist&rsquo;s career always begins tomorrow.&rdquo; <br /> &mdash;James Whistler',
        '&ldquo;I do not literally paint that table, but the emotion it produces upon me.&rdquo; <br /> &mdash;Henri Matisse',
        '&ldquo;The business of art is to reveal the relation between man and his environment.&rdquo; <br /> &mdash;D. H. Lawrence',
        '&ldquo;I am not strong on perfection.&rdquo; <br /> &mdash;Jasper Johns',
        '&ldquo;One must always draw, draw with the eyes, when one cannot draw with a pencil.&rdquo; <br /> &mdash;Balthus',
        '&ldquo;A mere copier of nature can never produce anything great.&rdquo; <br /> &mdash;Joshua Reynolds',
        '&ldquo;In reality art is always for everyone and for no one.&rdquo; <br /> &mdash;Eugenio Montale',
        '&ldquo;Art cannot be modern. Art is primordially eternal.&rdquo; <br /> &mdash;Egon Schiele',
        '&ldquo;Entertainment and art are not isolated.&rdquo; <br /> &mdash;Martin Kippenberger',
        '&ldquo;I don&rsquo;t like to sell my finest pieces.&rdquo; <br /> &mdash;Beatrice Wood',
        '&ldquo;Every song is like a painting.&rdquo; <br /> &mdash;Dick Dale',
        '&ldquo;Art is too serious to be taken seriously.&rdquo; <br /> &mdash;Ad Reinhardt',
        '&ldquo;Every great inspiration is but an experiment &ndash; though every experiment we know, is not a great inspiration.&rdquo; <br /> &mdash;Charles Ives',
        '&ldquo;Painting is self-discovery. Every good artist paints what he is.&rdquo; <br /> &mdash;Jackson Pollock',
        '&ldquo;A portrait is a painting with something wrong with the mouth.&rdquo; <br /> &mdash;John Singer Sargent'
    ]

    let augustArray = [
        '&ldquo;All art is autobiographical. The pearl is the oyster&rsquo;s autobiography.&rdquo; <br /> &mdash;Federico Fellini',
        '&ldquo;Our individual lives cannot, generally, be works of art unless the social order is also.&rdquo; <br /> &mdash;Charles Horton Cooley',
        '&ldquo;Form follows function.&rdquo; <br /> &mdash;Louis Sullivan',
        '&ldquo;To make us feel small in the right way is a function of art; men can only make us feel small in the wrong way.&rdquo; <br /> &mdash;E. M. Forster',
        '&ldquo;A great artist is always before his time or behind it.&rdquo; <br /> &mdash;George Edward Moore',
        '&ldquo;There is nothing worse than a sharp image of a fuzzy concept.&rdquo; <br /> &mdash;Ansel Adams',
        '&ldquo;The photograph itself doesn&rsquo;t interest me. I want only to capture a minute part of reality.&rdquo; <br /> &mdash;Henri Cartier-Bresson',
        '&ldquo;Simplicity is the ultimate sophistication.&rdquo; <br /> &mdash;Jeff Rich',
        '&ldquo;A good artist should be isolated. If he isn&rsquo;t isolated, something is wrong.&rdquo; <br /> &mdash;Orson Welles',
        '&ldquo;Painting is a nail to which I fasten my ideas.&rdquo; <br /> &mdash;Georges Braque',
        '&ldquo;Drawing is the honesty of the art. There is no possibility of cheating. It is either good or bad.&rdquo; <br /> &mdash;Salvador Dali',
        '&ldquo;That&rsquo;s why people listen to music or look at paintings. To get in touch with that wholeness.&rdquo; <br /> &mdash;Corita Kent',
        '&ldquo;The cultured man is an artist, an artist in humanity.&rdquo; <br /> &mdash;Ashley Montagu',
        '&ldquo;Art is man&rsquo;s expression of his joy in labor.&rdquo; <br /> &mdash;Henry Kissinger',
        '&ldquo;Art distills sensations and embodies it with enhanced meaning.&rdquo; <br /> &mdash;Miguel de Unamuno',
        '&ldquo;Religion and art spring from the same root and are close kin. Economics and art are strangers.&rdquo; <br /> &mdash;Nathaniel Hawthorne',
        '&ldquo;Treat a work of art like a prince. Let it speak to you first.&rdquo; <br /> &mdash;Arthur Schopenhauer',
        '&ldquo;I never called my work an &lsquo;art&rsquo;. It&rsquo;s part of show business, the business of building entertainment.&rdquo; <br /> &mdash;Walt Disney',
        '&ldquo;Every good painter paints what he is.&rdquo; <br /> &mdash;Jackson Pollock',
        '&ldquo;I shut my eyes in order to see.&rdquo; <br /> &mdash;Paul Gauguin',
        '&ldquo;The mediator of the inexpressible is the work of art.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;Man lives by imagination.&rdquo; <br /> &mdash;Havelock Ellis',
        '&ldquo;The best artists know what to leave out.&rdquo; <br /> &mdash;Charles de Lint',
        '&ldquo;So vast is art, so narrow human wit.&rdquo; <br /> &mdash;Alexander Pope',
        '&ldquo;Art is not what you see, but what you make others see.&rdquo; <br /> &mdash;Edgar Degas',
        '&ldquo;The vitality of a new movement in Art must be gauged by the fury it arouses.&rdquo; <br /> &mdash;Logan Pearsall Smith',
        '&ldquo;The waking mind is the least serviceable in the arts.&rdquo; <br /> &mdash;Henry Miller',
        '&ldquo;Only an artist can interpret the meaning of life.&rdquo; <br /> &mdash;Novalis',
        '&ldquo;We have art in order not to die of the truth.&rdquo; <br /> &mdash;Friedrich Nietzsche',
        '&ldquo;Sculpture is the best comment that a painter can make on painting.&rdquo; <br /> &mdash;Pablo Picasso',
        '&ldquo;Art has to move you and design does not, unless it&rsquo;s a good design for a bus.&rdquo; <br /> &mdash;David Hockney'
    ]

    let septemberArray = [
        '&ldquo;A good photograph is knowing where to stand.&rdquo; <br /> &mdash;Ansel Adams',
        '&ldquo;Never buy four C-plus paintings when you can buy one A.&rdquo; <br /> &mdash;Walter Annenberg',
        '&ldquo;Pictures must not be too picturesque.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;Art is the proper task of life.&rdquo; <br /> &mdash;Friedrich Nietzsche',
        '&ldquo;Less is more.&rdquo; <br /> &mdash;Ludwig Mies van der Rohe',
        '&ldquo;A film is a petrified fountain of thought.&rdquo; <br /> &mdash;Jean Cocteau',
        '&ldquo;My imagination can picture no fairer happiness than to continue living for art.&rdquo; <br /> &mdash;Clara Schumann',
        '&ldquo;Color is my day-long obsession, joy and torment.&rdquo; <br /> &mdash;Claude Monet',
        '&ldquo;Of all lies, art is the least untrue.&rdquo; <br /> &mdash;Gustave Flaubert',
        '&ldquo;To make pictures big is to make them more powerful.&rdquo; <br /> &mdash;Robert Mapplethorpe',
        '&ldquo;Life imitates art far more than art imitates Life.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;Good painting is the kind that looks like sculpture.&rdquo; <br /> &mdash;Michelangelo',
        '&ldquo;I refuse to confide and don&rsquo;t like it when people write about art.&rdquo; <br /> &mdash;Balthus',
        '&ldquo;And I have exposed myself to art so that my work has something beyond just the usual potter.&rdquo; <br /> &mdash;Beatrice Wood',
        '&ldquo;To the artist there is never anything ugly in nature.&rdquo; <br /> &mdash;Auguste Rodin',
        '&ldquo;Recognizing the need is the primary condition for design.&rdquo; <br /> &mdash;Charles Eames',
        '&ldquo;In art, the obvious is a sin.&rdquo; <br /> &mdash;Edward Dmytryk',
        '&ldquo;I dream of painting and then I paint my dream.&rdquo; <br /> &mdash;Vincent Van Gogh',
        '&ldquo;Light in Nature creates the movement of colors.&rdquo; <br /> &mdash;Robert Delaunay',
        '&ldquo;One&rsquo;s art goes as far and as deep as one&rsquo;s love goes.&rdquo; <br /> &mdash;Andrew Wyeth',
        '&ldquo;A painting that is well composed is half finished.&rdquo; <br /> &mdash;Pierre Bonnard',
        '&ldquo;The principles of true art is not to portray, but to evoke.&rdquo; <br /> &mdash;Jerzy Kosinski',
        '&ldquo;My love of fine art increased &ndash; the more of it I saw, the more of it I wanted to see.&rdquo; <br /> &mdash;J. Paul Getty',
        '&ldquo;The artist is nothing without the gift, but the gift is nothing without work.&rdquo; <br /> &mdash;Emile Zola',
        '&ldquo;If you could say it in words there would be no reason to paint.&rdquo; <br /> &mdash;Edward Hopper',
        '&ldquo;I paint self-portraits because I am so often alone, because I am the person I know best.&rdquo; <br /> &mdash;Frida Kahlo',
        '&ldquo;Art is the right hand of Nature. The latter has only given us being, the former has made us men.&rdquo; <br /> &mdash;Friedrich Schiller',
        '&ldquo;Personality is everything in art and poetry.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;Some painters transform the sun into a yellow spot, others transform a yellow spot into the sun.&rdquo; <br /> &mdash;Pablo Picasso',
        '&ldquo;Art enables us to find ourselves and lose ourselves at the same time.&rdquo; <br /> &mdash;Thomas Merton'
    ]

    let octoberArray = [
        '&ldquo;Without art, the crudeness of reality would make the world unbearable.&rdquo; <br /> &mdash;George Bernard Shaw',
        '&ldquo;When I have a camera in my hand, I know no fear.&rdquo; <br /> &mdash;Alfred Eisenstaedt',
        '&ldquo;Colors, like features, follow the changes of the emotions.&rdquo; <br /> &mdash;Pablo Picasso',
        '&ldquo;The greatness of art is not to find what is common but what is unique.&rdquo; <br /> &mdash;Isaac Bashevis Singer',
        '&ldquo;Through a painting we can see the whole world.&rdquo; <br /> &mdash;Hans Hofmann',
        '&ldquo;One must be a living man and a posthumous artist.&rdquo; <br /> &mdash;Jean Cocteau',
        '&ldquo;All good things which exist are the fruits of originality.&rdquo; <br /> &mdash;John Stuart Mill',
        '&ldquo;I prefer drawing to talking. Drawing is faster, and leaves less room for lies.&rdquo; <br /> &mdash;Le Corbusier',
        '&ldquo;Nothing makes me so happy as to observe nature and to paint what I see.&rdquo; <br /> &mdash;Henri Rousseau',
        '&ldquo;Art is the most beautiful of all lies.&rdquo; <br /> &mdash;Claude Debussy',
        '&ldquo;Art doesn&rsquo;t transform. It just plain forms.&rdquo; <br /> &mdash;Roy Lichtenstein',
        '&ldquo;I don&rsquo;t want life to imitate art. I want life to be art.&rdquo; <br /> &mdash;Ernst Fischer',
        '&ldquo;Art is born of humiliation.&rdquo; <br /> &mdash;W. H. Auden',
        '&ldquo;Where the spirit does not work with the hand, there is no art.&rdquo; <br /> &mdash;Leonardo da Vinci',
        '&ldquo;The enemy of art is the absence of limitations.&rdquo; <br /> &mdash;Orson Welles',
        '&ldquo;To imagine is everything, to know is nothing at all.&rdquo; <br /> &mdash;Anatole France',
        '&ldquo;Insight is the first condition of Art.&rdquo; <br /> &mdash;George Henry Lewes',
        '&ldquo;Love the art in yourself and not yourself in the art.&rdquo; <br /> &mdash;Constantin Stanislavski',
        '&ldquo;Art is not a thing; it is a way.&rdquo; <br /> &mdash;Elbert Hubbard',
        '&ldquo;Art is the daughter of freedom.&rdquo; <br /> &mdash;Friedrich Schiller',
        '&ldquo;In art, the hand can never execute anything higher than the heart can imagine.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;My eyes were made to erase all that is ugly.&rdquo; <br /> &mdash;Raoul Dufy',
        '&ldquo;Work on the accent, it will enliven the whole.&rdquo; <br /> &mdash;Pierre Bonnard',
        '&ldquo;Painting is easy when you don&rsquo;t know how, but very difficult when you do.&rdquo; <br /> &mdash;Edgar Degas',
        '&ldquo;My painting does not come from the easel.&rdquo; <br /> &mdash;Jackson Pollock',
        '&ldquo;Any authentic work of art must start an argument between the artist and his audience.&rdquo; <br /> &mdash;Rebecca West',
        '&ldquo;Vision is the true creative rhythm.&rdquo; <br /> &mdash;Robert Delaunay',
        '&ldquo;Mournful and yet grand is the destiny of the artist.&rdquo; <br /> &mdash;Franz Liszt',
        '&ldquo;It is not in life, but in art that self-fulfillment is to be found.&rdquo; <br /> &mdash;Wilson Mizner',
        '&ldquo;An art book is a museum without walls.&rdquo; <br /> &mdash;Andre Malraux',
        '&ldquo;The mission of art is to represent nature not to imitate her.&rdquo; <br /> &mdash;William Morris Hunt'
    ]

    let novemberArray = [
        '&ldquo;In the future, everyone will be famous for 15 minutes.&rdquo; <br /> &mdash;Andy Warhol',
        '&ldquo;What art offers is space &ndash; a certain breathing room for the spirit.&rdquo; <br /> &mdash;John Updike',
        '&ldquo;Art is dangerous. It is one of the attractions: when it ceases to be dangerous you don&rsquo;t want it.&rdquo; <br /> &mdash;Duke Ellington',
        '&ldquo;Art is a step from what is obvious and well-known toward what is arcane and concealed.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;Art attracts us only by what it reveals of our most secret self.&rdquo; <br /> &mdash;Alfred North Whitehead',
        '&ldquo;Every production of an artist should be the expression of an adventure of his soul.&rdquo; <br /> &mdash;W. Somerset Maugham',
        '&ldquo;I think you can leave the arts, superior or inferior, to the conscience of mankind.&rdquo; <br /> &mdash;William Butler Yeats',
        '&ldquo;Love of beauty is taste. The creation of beauty is art.&rdquo; <br /> &mdash;Ralph Waldo Emerson',
        '&ldquo;Nature scarcely ever gives us the very best; for that we must have recourse to art.&rdquo; <br /> &mdash;Baltasar Gracian',
        '&ldquo;I continue to get further away from the usual painter&rsquo;s tools such as easel, palette, brushes, etc.&rdquo; <br /> &mdash;Jackson Pollock',
        '&ldquo;The best thing commercially, which is the worst artistically, by and large, is the most successful.&rdquo; <br /> &mdash;Orson Welles',
        '&ldquo;An artist is not paid for his labor but for his vision.&rdquo; <br /> &mdash;James Whistler',
        '&ldquo;Beauty in art is often nothing but ugliness subdued.&rdquo; <br /> &mdash;Jean Rostand',
        '&ldquo;Simplicity and repose are the qualities that measure the true value of any work of art.&rdquo; <br /> &mdash;Frank Lloyd Wright',
        '&ldquo;If it can be written, or thought, it can be filmed.&rdquo; <br /> &mdash;Stanley Kubrick',
        '&ldquo;Art in Nature is rhythmic and has a horror of constraint.&rdquo; <br /> &mdash;Robert Delaunay',
        '&ldquo;Those who do not want to imitate anything, produce nothing.&rdquo; <br /> &mdash;Salvador Dali',
        '&ldquo;I realize that every picture isn&rsquo;t a work of art.&rdquo; <br /> &mdash;Conrad Hall',
        '&ldquo;Art depends on luck and talent.&rdquo; <br /> &mdash;Francis Ford Coppola',
        '&ldquo;Good art is art that allows you to enter it from a variety of angles and to emerge with a variety of views.&rdquo; <br /> &mdash;Mary Schmich',
        '&ldquo;Great artists suffer for the people.&rdquo; <br /> &mdash;Marvin Gaye',
        '&ldquo;Art requires philosophy, just as philosophy requires art. Otherwise, what would become of beauty?&rdquo; <br /> &mdash;Paul Gauguin',
        '&ldquo;All children are artists. The problem is how to remain an artist once he grows up.&rdquo; <br /> &mdash;Pablo Picasso',
        '&ldquo;Even a true artist does not always produce art.&rdquo; <br /> &mdash;Carroll O&rsquo;Connor',
        '&ldquo;The essence of all beautiful art, all great art, is gratitude.&rdquo; <br /> &mdash;Friedrich Nietzsche',
        '&ldquo;The portrait of my parents is a complicated one, but lovingly drawn.&rdquo; <br /> &mdash;Joyce Maynard',
        '&ldquo;Every painting is a voyage into a sacred harbour.&rdquo; <br /> &mdash;Giotto di Bondone',
        '&ldquo;I decided on the spot that I would be an artist, and I assure you, it was no ordinary artist I had in mind.&rdquo; <br /> &mdash;Henry Ossawa Tanner',
        '&ldquo;In life, as in art, the beautiful moves in curves.&rdquo; <br /> &mdash;Edward G. Bulwer-Lytton',
        '&ldquo;I decided to start anew, to strip away what I had been taught.&rdquo; <br /> &mdash;Georgia O&rsquo;Keeffe'
    ]

    let decemberArray = [
        '&ldquo;Classic art was the art of necessity: modern romantic art bears the stamp of caprice and chance.&rdquo; <br /> &mdash;Max Eastman',
        '&ldquo;I never know what I&rsquo;m going to put on the canvas. The canvas paints itself. I&rsquo;m just the middleman.&rdquo; <br /> &mdash;Peter Max',
        '&ldquo;Good design doesn&rsquo;t date.&rdquo; <br /> &mdash;Harry Seidler',
        '&ldquo;The sensitive artist knows that a bitter wind is blowing.&rdquo; <br /> &mdash;Herbert Read',
        '&ldquo;If technique is of no interest to a writer, I doubt that the writer is an artist.&rdquo; <br /> &mdash;Marianne Moore',
        '&ldquo;A work of art which did not begin in emotion is not art.&rdquo; <br /> &mdash;Paul Cezanne',
        '&ldquo;You can&rsquo;t depend on your eyes when your imagination is out of focus.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;There is no prejudice that the work of art does not finally overcome.&rdquo; <br /> &mdash;Andre Gide',
        '&ldquo;One can&rsquo;t paint New York as it is, but rather as it is felt.&rdquo; <br /> &mdash;Georgia O&rsquo;Keeffe',
        '&ldquo;My paintings are not about what is seen. They are about what is known forever in the mind.&rdquo; <br /> &mdash;Agnes Martin',
        '&ldquo;The art of art, the glory of expression and the sunshine of the light of letters, is simplicity.&rdquo; <br /> &mdash;Walt Whitman',
        '&ldquo;I think about my work every minute of the day.&rdquo; <br /> &mdash;Jeff Koons',
        '&ldquo;A sculptor is a person who is interested in the shape of things, a poet in words, a musician by sounds.&rdquo; <br /> &mdash;Henry Moore',
        '&ldquo;The goal of art was the vital expression of self.&rdquo; <br /> &mdash;Alfred Stieglitz',
        '&ldquo;I work in whatever medium likes me at the moment.&rdquo; <br /> &mdash;Marc Chagall',
        '&ldquo;Most artists like to think of themselves as rugged individualists, as independent characters.&rdquo; <br /> &mdash;Jack Levine',
        '&ldquo;Great art is as irrational as great music. It is mad with its own loveliness.&rdquo; <br /> &mdash;George Jean Nathan',
        '&ldquo;Art is like baby shoes. When you coat them with gold, they can no longer be worn.&rdquo; <br /> &mdash;John Updike',
        '&ldquo;Painting completed my life.&rdquo; <br /> &mdash;Frida Kahlo',
        '&ldquo;The works must be conceived with fire in the soul but executed with clinical coolness.&rdquo; <br /> &mdash;Joan Miro',
        '&ldquo;Lesser artists borrow, great artists steal.&rdquo; <br /> &mdash;Igor Stravinsky',
        '&ldquo;A good painting to me has always been like a friend. It keeps me company, comforts and inspires.&rdquo; <br /> &mdash;Hedy Lamarr',
        '&ldquo;Every act of creation is first an act of destruction.&rdquo; <br /> &mdash;Pablo Picasso',
        '&ldquo;From its brilliancy everything is illuminated.&rdquo; <br /> &mdash;Guru Nanak',
        '&ldquo;The true work of art is but a shadow of the divine perfection.&rdquo; <br /> &mdash;Michelangelo',
        '&ldquo;True art is characterized by an irresistible urge in the creative artist.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;Life obliges me to do something, so I paint.&rdquo; <br /> &mdash;Rene Magritte',
        '&ldquo;Art is much less important than life, but what a poor life without it.&rdquo; <br /> &mdash;Robert Motherwell',
        '&ldquo;Architecture is the will of an epoch translated into space.&rdquo; <br /> &mdash;Ludwig Mies van der Rohe',
        '&ldquo;It is through art, and through art only, that we can realise our perfection.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;The job of the artist is always to deepen the mystery.&rdquo; <br /> &mdash;Francis Bacon'
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

    let artQuote = monthArray[dayOfMonth - 1]

    let art = `<h3>${artQuote}</h3>`

    $('#art').html(art)
})
