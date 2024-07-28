export type albumReviewType = {
  id: string;
  slug: string;
  title: string;
  link?: string;
  subtitle?: string;
  reviewText: string[];
  reviewer: string;
  reviewerLink?: string;
  reviewerImageSrc?: string;
  album: string;
};

export const reviews = [
  {
    id: "2224",
    slug: "2224",
    title: "Mark Brown",
    link: "https://www.altcountry.nl/blog/2024/07/mark-brown-2/",
    reviewText: [
      "Nine years ago we pointed out in the Skin & Bone review that Mark Brown's music consists of many shades of brown. And that that definitely fits with roots music. We compared the voice of the singer-songwriter from Maryland with Greg Brown. Happy Hour's Americana (self-published) has a broader color palette. Because what about the disco that resonates in Scratch? Above all, it makes it clear that the American is quite stubborn and wants to go his own way. In terms of sound, think of Johnny Dowd, also someone who is contrary by nature. Due to his hoarse singing voice, Davenport can be compared to Malcolm Holcombe, who died in March of this year. The choir on the title track goes a bit off the rails; not so bad, because Brown doesn't want to seem too serious. According to him, that does not fit with Americana. So don't be surprised if Happy Hour seems to take different paths on some songs. Gasoline Hands sounds like new wave from the Caribbean. And the organ and guitar (almost highlife) on Acetone would not be out of place on a Talking Heads record. On The Ridge there is a guitar solo with those loose strings that sounds a bit south of the border.",
    ],
    reviewer: "Alt Country NL",
    reviewerLink: "https://www.altcountry.nl/blog/",
    album: "happyHour",
    reviewerImageSrc: "altcountrynl.webp",
  },
  {
    id: "2225",
    slug: "2225",
    title: "Happy Hour Review",
    reviewText: [
      "Happy Hour is the third album from Americana singer-songwriter Mark Brown and his band, UNCLE BUCKLE. Inspired by Johnny Cash and Tom Waits, Mark writes very individual songs in the country genre which sound very jolly until you dig a bit deeper to where the Waitsian darkness lies. 'Happy Hour' is anything but and is really where the gloves come off.",
    ],
    reviewer: "Print Review",
    album: "happyHour",
  },
  {
    id: "2226",
    slug: "2226",
    title: "MARK BROWN - HAPPY HOUR",
    link: "https://www.fatea-records.co.uk/magazine/reviews/MarkBrown/",
    reviewText: [
      "Frontman with Uncle Buckle, this is Brown's third album and, accompanied by friends old and new on guitars, bass, drums, keys, banjo and pedal steel, one that brings some interesting whimsy and colours to the basic Americana template. As such it opens with 'Scratch', channelling a Talking Heads disco beat on a song that's actually anything to do with an itch but about revealing the numbers on a lottery ticket ('Where do you scratch, I scratch by the register/where do you scratch, I like to scratch on the steering wheel of my car …where do you scratch, I like to wait till I get home'), though in his case never coming up lucky ('I'm the one who could never win the lottery').",
      "'Davenport', as all furniture buffs will know, is a couch large enough to lie down upon. The song, however, with its gravelly vocals and bubbling banjo backing, is a bluesy number about the Mason-Dixon line that, using the back yard as a location, separates the two different worlds of the north and the south ('now up here in the northeast we have a different set of rules for what you might leave laying out in the yard and what our friends down south might choose/now nobody is going to say a thing and nobody's going to mind if you've got a snow machine carcass busted snowplow even a target deer is fine… but a davenport looks best in the yard below the Mason Dixon line').",
      "A pedal-steel flavoured honky tonk cabaret waltzer, 'Inertia' is about what it says on the label ('when the inertia sets in, its hard just the breathing I can't play or sing, I'm all broken strings/the ten thousand things are piled right there on my counter/The weight of the day won't go away, if there is light somewhere it's just in the way/I try hard to stand an invisible hand is holding me down right here where I lay'). Which leads to the title track, not the Ted Hawkins or Housemartins hit but a scuttling along number with yelping inspired by a conversation about bathrobes and who wore them married to a story about someone's mother living in a compound in rural Ohio, imaging her smoking in the driveway and ending up in another song about lives in stasis ('There was this girl she had her way with me/stole my guitar picks stole my heart/turns out she's the one that had the remedy and she already had a dog/I told her that she need not be lonely that lonesome was a bullshit place to be/I told her that I knew about this better place while lonesome crawled all over me … Mom's lighting up another cigarette and Dad has disappeared beneath the car/it's six and Ma ain't out of her bathrobe yet and it looks like we're staying where we are/and we're missing happy hour at the bar goddamn the solenoid on that car').",
      "Set to a Kristofferson chug, 'Long Time' is about meeting up with old friends and sharing old times and experiences, switching to a Latin rhythmic sway for 'Gasoline Hands' which opens with the line 'everybody that I know they've got one thing that they won't let show and it's not because they like to hide it's like honesty was suicide' and would seem to be how dirty little secrets can screw you up ('Bill lost his will Wayne went insane Warren turned his life around and he did it with cocaine') and how you can never really wash the smell away, nicely encapsulated in Katie Mullins singing the catchy refrain 'get your gasoline hands off of me'.",
      "Then, Mullins on harmonies, the strummed folksy 'Broken Glass' is in the tried and tested tradition of accepting love as it comes ('The bed and table the tippy little chair they're all washed in moonlight it tumbles down the stairs/the stars are frozen bits of broken glass scattered pieces of what couldn't last/She's passed out in the car now but waking up soon and if the sun can't get her up I know what to do… I found her blankets I found her hand and I found that loves just love it's not to understand').",
      "Metaphorically inspired by the solvent often used in fibreglass work, so volatile you can almost watch it evaporate, 'Acetone' is another off the wall love song with a sad undercurrent ('She seemed fine at first but when we left her all alone/she disappeared like acetone into the very air I breath') while anchored by jazzy Tom Waits double bass and skittering drum, 'Deer Cut and Wrapped' is probably the only song you'll ever hear about cutting up deer for freezing, the title coming from a sign stencilled on a van.",
      "A waltzer, this one with accordion, 'Napanoch' is named for a small town where the Catskill mountains and the Shawangunk mountains nearly meet, once busy but fallen into decline after the railroad disappeared, the song about being metaphorically shipwrecked, ('there's not a thing for me, my shoes and hopes washed out to sea/I'm just getting by on the memories of the place that I used to call home'), feeling homesick and needing to go to a place to feel whole again ('I've got to get back to the things I miss/ old 209 and the cars on it and the white Shawangunk conglomerate/ it's then that I'll know I'm back home/I'd trade this place and everything here that I got if it could just could just get me back to Napanoch'). Trivia fans might like to know that Shawangunk is a town in southwestern Ulster County, New York that takes its name from its largest stream, the Shawangunk Kill, and Vernooy Kill is a falls area near New York, kill being an abbreviation of killitje, the Dutch word for creek.",
      "Sounding like John Prine filtered through a Johnny Cash lens, the scurrying drums and pedal steel upbeat, 'God Bless Me Jesus' is a vignette about a young woman, a young man and a dog that's blind in one eye and basically both a whimsical and heartfelt benediction ('God bless her Jesus won't you God bless her Elvis God bless young women who don't distress us/God bless the people who die in their beds, the way you hang up the phone when the line goes dead'.",
      "Another waltzer, this with more of an Eastern European feel and accordion, 'The Ridge' refers to Pendleton county in the northeastern panhandle West Virginia with its ancient, steep mountains and, inspired by finding barbed wire, the jawbone of a sheep and a fossilized dinosaur on one of the ridges, is about the process of time. Sounding like it might have been written by Ewan MacColl, 'PCP' is a 51 second song recalls the first kiss of a girl he's not seen or heard from in 45 years, the album ending with 'The Unanswered Prayer', a slow Prine-like swayer inspired by seeking woman in a car focused on pulling out into the traffic and thinking how happy and lucky she must be only for her to subsequently fall apart in tears, sobbing with her head on the steering wheel, a reminder that people's lives are not always as perfect as they might appear. Raise a glass, this is a happy hour well spent.",
      "Mike Davies",
    ],
    reviewer: "Fatea Magazine",
    reviewerLink: "https://www.fatea-records.co.uk/magazine/",
    album: "happyHour",
    reviewerImageSrc: "fatealogo.webp",
  },
  {
    id: "2227",
    slug: "2227",
    title: "MARK BROWN - HAPPY HOUR",
    link: "https://maximumvolumemusic.com/release-week-round-up-5th-july-mark-brown-thunder-horse-duel-ruts-d-c/",
    reviewText: [
      "'Where do you scratch? That’s the kind of thing a guy should do alone'. Well, quite. And if nothing else that line - on 'Scratch' the opening track here - rather sums up the unconventional approach of Mark Brown.",
      "Growing up with Johnny Cash, he saw Tom Waits almost 50 years ago and that pivotal moment evidently colours his music to this day.",
      "After the quasi-disco of the opener, then there’s some quasi-bluegrass on “Davenport” and the truth is, nothing on “Happy Hour” is quite anything. The title track takes you through his childhood, in a raucous, near-punk fashion,  and the excellent band that joins him album on number three is to the fore with the double bass on “Deer Cut And Wrapped”.",
      "His love of Cash is best shown on the classic country strum of “God Bless Me Jesus”, and if “PCP” is a rather odd little thing, then “The Unanswered Prayer” ends things a little more conventionally, albeit with the lyrical flourish of his heroes.",
      "Rating 8/10",
    ],
    reviewer: "Maximum Volume Music",
    reviewerLink: "https://maximumvolumemusic.com/",
    album: "happyHour",
  },
  {
    id: "2228",
    slug: "2228",
    title: "MARK BROWN - HAPPY HOUR",
    link: "https://rootstime.be/index.html?https://rootstime.be/CD%20REVIEUW/2024/JUL1/CD10.html",
    reviewText: [
      "Anyone who has been involved in this segment of contemporary music for a while may know Mark Brown under his own name or as the frontman of the band Uncle Buckle. For those who are completely new: this Happy Hour is Mark's third album under his own name and what he brings to it is vintage Mark Brown: Americana à la Tom Waits, with an almost equally harsh abrasive voice and an observational ability that allows him to to sing about the things that take place in dark recesses, that form the core of small hamlets and special communities and that see special characters come to life.",
      "Brown brings these subjects to life through simple but sophisticated instrumentation, where guitar, bass, drums, banjo and keys rule and where the backing vocals are as essential as the frontman's voice. With every now and then a hint of Johnny Cash-meets-Kinky Friedman-and-John-Prine mixed through the lyrics - I'm now thinking of songs like Acetone or Deer Cut and Wrapped - Mark really emphasizes his work as a fine songwriter, although you can actually say something about each of the songs. How people lose themselves in endlessly purchasing lottery tickets, for example. This is what opener Scratch is about, while Inertia tries to express how idleness can come to dominate people's lives, even if they don't want it to.",
      "Long Time is about his addiction to rock climbing in his younger years, which is actually an exercise in fine nostalgia and the title song, with only one chord, is a particularly successful exercise in expressing the lethargy and boredom that can lead to Didn't even get dressed in time to get to the pub in time to experience the Happy Hour. The song on this particularly nice album, in my opinion, is Gasoline Hands, with a completely absurd text about what people have to hide when their hands emit the smell of gasoline. Brown himself says about this song that he assumes that the song knows what it is about, unlike the writer. So himself. Now, if you ever want to hear beautiful songs about broken love, I can wholeheartedly recommend Broken Glass. If Harry Dean Stanton hadn't already died, someone should have delivered this song to him so he could sing the final version. Anyone who can make up a song like Acetone and use that solvent to describe the evaporation of love, such a person can break a pot with me, just as I cannot listen to Unanswered Prayer without sympathizing with the young woman about whom this song goes.",
      "Let that perhaps be my modest summary of this fine album: Mark Brown is a gifted songwriter and anyone who listens to him is inevitably touched. Not everyone is given something like that. Mark Brown urgently needs to be discovered!",
      "(Dani Heyvaert)",
    ],
    reviewer: "ROOTSTIME.BE",
    reviewerLink:
      "https://rootstime.be/index.html?https://rootstime.be/CD%20REVIEUW/2024/JUL1/CD10.html",
    album: "happyHour",
  },
  {
    id: "2229",
    slug: "2229",
    title: "MARK BROWN, HAPPY HOUR",
    link: "https://www.realrootscafe.com/2024/07/05/mark-brown-happy-hour/",
    reviewText: [
      "No less than fourteen songs on this long player by Mark Brown. The American takes thirty-eight minutes and ten seconds. Old school country that could be linked to a row of names. However, this review is not about musicians who have influenced this singer-songwriter, who is hardly known in the Netherlands, but about an idiosyncratic talent who is slowly but surely building a unique oeuvre.",
      "Mark Brown makes his debut with the release of the album Uncle Buckle. He has gained experience, played a lot and gathers a group of friends who make country music where the scratches are audible. With Skin & Bones in 2015, Brown broke through to a larger audience. He scores compliments and stars and the names Johnny Cash and Tom Waits are also mentioned on this album. Indeed, a wonderful but fitting combination. Brown sings about the good and bad things in life all with an underlying sense of mischievousness (Americana-UK) and singer-songwriters like Mark Brown are rare, CDs of the scope and style of Skin & Bones are even rarer (Country Music People)",
      "Happy Hour contains fourteen songs. 'Scratch' is a song about scratching, but above all a composition about movement and survival. Where do you scratch? Brown asks. He puts life into perspective and thus scratches it to a tangible surface. Brown likes to question the people who think they want to decide everything. 'Inertia' starts with a slow guitar, the gritty voice delivers a text that the audience will listen to in every room. 'Happy Hour' is about life as Brown wants to live it and not about spending the last hour of the afternoon drinking. And again he doesn't take life too seriously and mainly enjoys everyday events. While the crowd cheers over another beer, Brown shrugs. The loyal fans are now singing along to the songs.",
      "Closing track 'The Unanswered Prayer' is the story of a woman who dies in an accident. She hits her head on the steering wheel and gets lost in the clouds on the way to heaven. It is an everyday story, beautifully told by Brown. Details add color to the journey of the deceased woman. She gets lost up in the clouds. It is not wise to wait for the next release from Mark Brown. Enjoying Happy Hour is much better advice. No stars are given at Real Roots Café, but Brown would without a doubt score a maximum. Great record! (Independent)",
    ],
    reviewer: "Real Roots Cafe",
    reviewerLink: "https://www.realrootscafe.com/",
    reviewerImageSrc: "realroots.webp",

    album: "happyHour",
  },
  {
    id: "2232",
    slug: "2232",
    title: "MARK BROWN: HAPPY HOUR",
    link: "https://www.keysandchords.com/album-review-blog/mark-brown-happy-hour",
    reviewText: [
      "When you first listen to Mark Brown, you might find yourself wondering where he’s been and why it took him so long to get here. Combining a sharp eye with a sly sense of humor reminiscent of John Prine, Mark makes songs that hail from everywhere, incorporating ballads, cowboy songs, jigs, sideshow melodies, and field hollers. His songs give voice to craftsmen, broken-hearted mechanics, heavy equipment operators, squatters and girls with their dirt bikes. Like many of his characters, Mark’s been around: after growing up in Maryland, he’s done some farming, worked as a mechanic, spent years as a commercial fisherman in the northern Pacific and worked as a carpenter in the northeastern US. These experiences have influenced his music the way an oak cask influences good whiskey. In his latest album ‘Happy Hour’, Mark's distinctive voice is accompanied by his band of longtime friends: Ken McGloin joining in on guitar, Mark Murphy on bass, Dean Sharp on drums and the versatile talents of Dean Jones.",
    ],
    reviewer: "PARIS-MOVE",
    reviewerLink: "https://www.paris-move.com/",
    album: "happyHour",
  },
  {
    id: "2231",
    slug: "2231",
    title: "MARK BROWN – HAPPY HOUR",
    link: "https://www.paris-move.com/reviews/mark-brown-happy-hour/",
    reviewText: [
      "For only his third album in an already busy life, singer-songwriter and guitarist Mark Brown delivers 14 new compositions, most of them drawn from the substantive marrow of experience. To the tongue-in-cheek humor of John Prine and the nasal and scratchy tone of Willie Nelson (as well as the hackneyed phlegm of Johnny Cash), he allows himself to add the iconoclastic truculence of our no less late Arno Hintjens. Thus the opening “Scratch” (in which he has the nerve to integrate disco sauces) and the chaotic “Davenport” (where the facetious drumming of the man named Dean Sharp leads us to think that it could be the same D-Sharpe who was active more than forty years ago with Jonathan Richman). These transgressions settled, our man returns as if nothing had happened to a few obsolete honky-waltzes as desired, in the spirit of the Kinks' “Muswell Hillbillies” (“Inertia” and “Napanoch”, with respectively pedal-steel and accordion supporting). The titular track melts down on us like the disheveled “Mojo Working” that J.J. Cale once revisited (to which “Deer Cut And Wrapped”, “The Ridge” and “God Bless Me Jesus” are also related), but this time in choral versions bar. Good-natured country nonetheless regains its rights with “Long Time”, but our man never stays still for long, as evidenced by the sinuous rumba “Gasoline Hands” (with the mutinous choruses of Katie Mullins and the organ facetious by Dean Jones). The stripped-down “Broken Glass” sounds like the distant cousin of Tom Waits from “Closing Time”, while the falsely cheerful “Acetone” evokes a Leonard Cohen in a festive mood (we're not kidding, it seems that in private he was to twist), and that “The Unanswered Prayer” concluded between Calvin Russell and Johnny Dowd. An astonishing record in more than one way: imagine Jean-Pierre Bacri accompanied by the cream of the Nashville studios…",
      "Philip Verhaege",
    ],
    reviewer: "Keys & Chords",
    reviewerLink: "http://www.keysandchords.com/",
    reviewerImageSrc: "kandc.webp",
    album: "happyHour",
  },
  {
    id: "2189",
    slug: "2189",
    title: "Skin & Bone Review",
    link: "http://www.puremzine.com/mark-brown-skin-and-bone/",
    subtitle:
      "The following review of Skin & Bones is from Pure M Magazine “Ireland’s Music, Art and Culture Magazine”",
    reviewText: [
      "Americana artist Mark Brown’s affinity with song-writing was originally inspired by an introduction to the work of Johnny Cash when he was just six years old. It was then that the seeds were sewn of a career that now spans more than a quarter of a century. The Maryland native recently returned to the studio to record Skin and Bone; his first full length outing since 2005.",
      "The album features a fast and fervent beginning in the form of the upbeat melody and intriguing instrumental elements of “See You Next Time”. There’s an odd electronic edge to the music of “Trouble” afterwards as it resounds behind a delicate duet. The outcome is an unusual but not altogether objectionable fusion of classic country and contemporary electro-pop.",
      "“Smashed” is an extremely energetic anthem that dances delightedly through vibrant vocals and a bustling beat. “Cried in Your Bed” succeeds it as a slow and stirring serenade that floats upon lightly delivered lamenting lyrics. “Creosote” creeps out of its predecessor’s wake into a solemn harmony that echoes out urgently. The instrumentation stays sedate, resulting in a song that’s slow and psychedelic.",
      "The quick and catchy “Hatchet Man” captivates with its enthusiastic guitars, while its vigorous vocals excite before “Hurt” brings about a much more mournful mood. The warm refrain and affecting instrumentation of “When the Time Comes” take over next and trot tranquilly together to forge a relaxing yet weighty rhythm. “Pony” strips down when it’s done, being attired with nothing but a simple acoustic riff and a tormented, heartfelt harmony.",
      "The vivid vocals of “Icy Bob” give birth to an incredibly cutting endeavour that’s quite chilling. “Sleep Little Angel” follows to sooth the senses with its gentle melody and soft symphonic sound ahead of “When Your Sister Comes”. This restrained but characterful creation paves the way to the distorted introduction of “Spaceship”, which prefaces a hushed harmony that drifts delicately towards a touching terminus entitled “Granny”.",
      "Mark Brown has crafted an accessible assemblage of Americana anthems that rest relatively easy on the ears.",
    ],
    reviewer: "PureMZine",
    reviewerLink: "https://puremzine.com/",
    reviewerImageSrc: "purem.webp",
    album: "skinAndBones",
  },
  {
    id: "2208",
    slug: "2208",
    title: "Skin & Bone Review",
    subtitle: "A Country Diamond in the Rough",
    link: "https://rockingmagpie.wordpress.com/cd-reviews-2015/mark-brown-skin-bone/",
    reviewText: [
      "I guess that Mark Brown is one of those guys that you and I have seen countless times over the years in bars and clubs, and wondered why they weren’t a huge star. A singer-songwriter who has worked countless manual jobs and been on the road performing his own work for nigh on 25 years; Mark Brown appears to have only recorded one album prior to this; but that may not be true as apart from his website (and that’s sketchy) there is next to no info about him on the internet; which I found quite refreshing.",
      "Skin & Bone opens with the delightfully quirky Country song See You Next Time. Timeless and classy; Brown uses a subtle melody to support his warm and slightly raspy voice; while Mike Meranda uses his banjo as a lead guitar. The cutesy chorus annoyed me at first but I found myself repeating it in normal conversation a couple of days later.",
      "While he has a voice like a young and sexy Willie Nelson; there’s more than a hint of mid-period Cash to songs like Smashed and Hatchet Man among others; with Smashed being the best song Johnny Cash never sung. Seriously; if you hear that song on the radio you will swear it is a lost Cash song.",
      "There’s even a song called Hurt included; which isn’t the one Cash reinvented; but just as well-crafted and hits a similar point square on the crown. It’s possibly/probably my favourite song here; and that’s quite an accolade.",
      "Mark Brown is no simple copiest; the Cash ‘thing’ is probably because he has immersed himself in the Man in Black’s works over the years. This album is pure 100% Mark Brown, as the simply beautiful Sleep Little Angel prove. There’s nothing new in the theme of a father watching his child sleep; but the way Brown constructs everything and delivers it with a smile in his voice is excellence personified.",
      "Another cracker is Cried in Your Bed, which must have been written on a stopover in Bakersfield, as it has that ‘feel’ about it from start to finish and the story will bring tears to a glass eye.",
      "There’s even a Handsome Family inspired piece of American Gothic slid in halfway through; with some of the spookiest pedal-steel you will ever hear on Icy Bob. I’m pleased I’ve been listening to it on sunny days – not sure I’d want to hear it while a Winter storm raged outside.",
      "Still using the Classic Country singer-songwriter template Brown closes the album with Granny; a love song dedicated to the memory of the woman who raised him.",
      "I’m not keen on the twee Pony; but that’s a small price to pay when you have songs the quality of the rest on Skin &amp; Bone. Who knows; if there’s any justice in the world Skin &amp; Bone could make Mark Brown an over-night success after 25 hard worn years.",
    ],
    reviewer: "The Rocking Magpie",
    reviewerLink: "https://rockingmagpie.wordpress.com/",
    reviewerImageSrc: "rockmagpie.webp",
    album: "skinAndBones",
  },
  {
    id: "2094",
    slug: "2094",
    title: "Review of Skin & Bone",
    reviewText: [
      "Mark Brown’s long-awaited new CD, Skin and Bone, is finally here. And skin and bone it is, as it rips off the veneer of happy faces and genteel manners—forget easy living—and reveals the pain, longing, and despair you feel sometimes, be it for a lifeless tractor, a gal who just ain’t gonna be there, or just because the moon makes a face at you. Herein lies an artistic dilemma: if you only sing about happy things, you run out of material real quick.",
      "Track 1, “See You Next Time,” launches straight into a catalog of equipment failure—a broken down spreader, pants that don’t fit so well, knuckles and dirt—and makes repeated references to a posthole digger, that essential tool of rural farm life. And it’s all moved along by some haunted Dust Bowl banjo pickin’ from Mike Merenda.",
      "We segue directly into “Trouble,”—“and my old friend despair is usually there”—a jaunty, romantic tune, almost carefree, but for the dysfunctional relationship of the couple it depicts, as they cause each other a mountain of trouble, colliding with financial ruin, “but neither of us could afford a bus, or a ticket to be with you.” All of it served up in Mark’s scratchy baritone reminiscent of Mr. Cash.",
      "The third track features a rollicking, cowboy polka about a guy who “don’t want to get smashed,” though he manages to in general. Check cashed, our blue-collar hero gets liquor and takes a nip or two in the parking lot. Kind of makes you want to join him. Somehow, Mark makes drinking and a picnic at the gravel pit hygienic and desirable. And don’t miss the classic modulation near the end of it.",
      "“Cried in Your Bed,” sounds like a rediscovered Hank Williams gem, and floats along on the subtle, smart, floral pedal steel work of Guy “Fooch” Fischetti; he’s right up there with Ms. Cashdollar. Yup, real men do cry in bed, over girls, over boys, children, ponies, and the sheer, one-way cliff of good old existentialism.",
      "“Creosote,” track 5, offers a more desolate work place opportunity than “See You Next Time.” An industrial site somewhere south of purgatory, you paint fence with poison, trying not to get it on your skin. But you do, and it burns like many of the songs do on this CD. They get under your skin, into your bones, and yes, they burn, they do their job.",
      "Two guys you want to steer clear of are “Hatchet Man,” who has a secret trapped inside and won’t reveal it (know anyone like him?) and “Icy Bob,” who’d sooner slit your throat—tracks 6 and 10. Each is a violent super hero in his own right, Bob the more menacing of the two; both are irresistible. The descending guitar line on “Hatchet Man” is delivered by Ken McGloin, the celebrated, consummate side and front man. “Icy Bob” slides in with something of a horror detective theme that grows to fruition with a stunningly eerie saw solo by Wayne Monteclavo, innovative artist, band leader, and raconteur.",
      "Both “Hurt,” and “When Your Sister Comes,” tracks 7 and 12, express smoldering sensual longing, the adoration of the female form and the not-so-subtle communication that sometimes goes with it. Mark’s lyrics are straightforward constructions, but often achieve poetic stature with lines like (from “Hurt”) “Those tangerines underneath your shirt / that makes me hurt.” And “I wouldn’t wash a glass if it touched your mouth / that makes me hurt.” “When Your Sister Comes” could be an aria for a more refined Stanley Kowalski, and is an edgy ballad of almost uncontrollable desire, not so foreign to our species.",
      "The anthem-like “When the Time Comes” reminds you of the younger Van Morrison, embellished with a soulful, bluesy guitar statement by Ken McGloin. Another poignant misconnection, relationships our dealt out and picked up like cards on a table—love, the ultimate game of chance. “When the Time Comes” is brave, but fateful: “I know you won’t stand in line with me.” Sometimes it’s just too much to ask for.",
      "The next gal who gets away is the one who loves the “Pony,” track 9. No accounting for what passes for attraction in the dating pool these days. The guy is beaten out by a skinny, boney, blue-eyed pony.",
      "Lilting, island easy, and all so lovely, “Sleep Little Angel,” is something only a daddy could have penned: “Just call my name / I’ll dream of you.” It brings to mind John Lennon’s “Beautiful Boy.” Guy “Fooch” Fischetti raises the ante with a delicate celestial scarf he ties around the song with his pedal steel, from which flower petals fall. A gift, a turning from darker themes, is what Mark bestows on that one.",
      "If you think of it, a “Spaceship,” track lucky 13, and a trombone have a lot in common, the trombone being the perfect instrument for interstellar travel. It is perhaps the roundness of the sound, the ever-so-mellow tone Dean Jones draws from it, perhaps an unintentional tribute to Jack Teagarden. Dean Jones is the Grammy-winning producer who has masterfully brought this record to life, into the public domain where it belongs. He’s added sparse brush strokes and flourishes along the way, which can be described as accurate, utilitarian, just what the doctor ordered, but truly, there are flashes of brilliance.",
      "Finally, the poet / songwriter laments about his “Granny,” track 14, “she’d write me here / if she could hold a pen / but she lies down beneath the ground in the dress she’s buried in.” A tribute to a strong woman who must have been a bearing wall in his life. She seems to call to him from the other side: a man who struggles. Even “the codfish know I don’t have the luck I had,” but he takes strength from his “Granny” from a call box out west. So strong a bond with this woman whose image he carries with him, a wrenching memorial of enduring love, and perhaps the only right words to finish this record, “I’m still led by the ghost of her / and I wear her like my clothes.” That…feels.",
      "So, here they are, fourteen of them, mined hard from unforgiving ground, plucked from a swirling night sky, drawn up from a deep personal well. In the end it’s about the voice. A roughed-up cabin floor of a voice. A voice of hardship, full of ruts and shakes, kicking up emotion in every line of every cut. Do we know the people in these songs, these tales? Maybe you don’t want to, but they move around in our souls and leave scars. Mark Brown knows them and made their portraits, stark, and black and white.",
      "Go on and listen. Then... Drop your heart into a blender, a splash of Jack Daniels, …then drink up.",
    ],
    reviewer: "Mark Morganstern",
    album: "skinAndBones",
  },

  {
    id: "2177",
    slug: "2177",
    reviewText: [
      "MarkBrown is a new name to me and Skin & Bone is his second self-released album due out in September. Fourteen tracks all written by the singer-songwriter who pours a lot of feeling into his songs, the album was excellently produced by Grammy Award-winning Dean Jones with just a handful of guest musicians. The result is a very intimate album that makes you feel Brown is just telling you his personal stories. The backing is beautifully balanced and sensitive leaving the vocals crystal clear on every track. I can never understand why producers don't give priority to clear vocals on folk and country atoums. To be fair it is usualy more folk than country that falls into this trap.",
      "Mark Brown is a fine songwriter inviting comparisons to John Prine and several other greats. I would love to see him live so perhaps this latest album will help pave the way for a visit to these shores.",
    ],
    title: "Review of Skin & Bone",
    reviewer: "The Irish Post",
    reviewerLink: "https://www.irishpost.com/",
    album: "skinAndBones",
  },

  {
    id: "2186",
    slug: "2186",
    title: "Skin & Bone Review",
    link: "http://www.keysandchords.com/album-review-blog/mark-brown-skin-and-bone",
    reviewText: [
      "The following Skin and Bone review is translated from Dutch for the Belgium site http://www.keysandchords.com/",
      "Mark Brown grew up in Maryland, where he was 6 years his first album of Johnny Cash was present. In 1975, a fellow blacksmith took him to a concert by Tom Waits and this was immediately initiated for Mark to make his first steps in music. Meanwhile, Mark, say 15 years musically active and worked in agriculture, as a mechanic, fisherman and carpenter in the Northeast of America. Both Cash and Waits have left a huge impression on Mark and this is evident in the 14 own ballads and country songs on this disc. Songs that were made both lyrically and musically artisan, and which should therefore be taken seriously. Seriously though, does not mean that there is no humor is present. Often humor which is hidden somewhere in a corner of the song cunning. The dark side of Waits and the relative calm of the older Cash Making Skin & Bone a mysterious no ordinary album. The toolbox contains guitar, bass and drums, occasionally trombone, ukulele, fiddle, banjo and pedal steel, which is the special character of Brown's compositions reinforced.",
      "In the delightful 'Smashed' seems Browns voice intonation and even a bit like the 'man in black', while 'Cried In Your Bed' emotional Waits exposes him.",
      "It's a mystery why Brown is not better known. Probably has something to do with it is not always present commercial character in his music, but the status of cult artist is definitely him like a glove. 'Skin And Bone' is certainly not a 'skin and bones' but a somewhat mysterious but expertly crafted album.",
      "Who a 'Cash meets Waits' visible, will be with 'Skin And Bone' by Mark Brown, on a drizzly evening with a glass of wine, soon discover the sun behind the clouds.",
    ],
    reviewer: "Keys & Chords",
    reviewerLink: "http://www.keysandchords.com/",
    reviewerImageSrc: "kandc.webp",
    album: "skinAndBones",
  },

  {
    id: "2199",
    slug: "2199",
    title: "Mark Brown, 'Skin & Bone' (Self-Released)",
    link: "http://www.gloucestershireecho.co.uk/Kevin-Bryan-s-record-reviews/story-27579281-detail/story.html#ixzz3j6w2dAzr",
    reviewText: [
      "Mark Brown may not be a household name just yet, but this Maryland native's rare ability to distill the essence of the human condition via a few well chosen words has already prompted comparisons with the likes of Tom Waits, Jonathan Richman and seventies acoustic icon John Prine of 'Sam Stone' and 'Hello in There' fame. Mark's songs are peopled with colourful characters doing their level best to cope with the less appealing aspects of the fabled American dream, and newcomers to his beguiling approach to music-making would be well advised to lend an ear to fine tracks such as 'See You Next Time,' 'When The Time Comes'  or the touching closer, 'Granny.'",
    ],
    reviewer: "Gloucestershire Echo in the UK",
    reviewerLink: "www.gloucestershireecho.co.uk",
    album: "skinAndBones",
  },

  {
    id: "2207",
    slug: "2207",
    title: "MARK BROWN SKIN & BONE",
    subtitle: "by Matthew Boulte",
    reviewText: [
      "Mark Brown is a Maryland native whose life reads like a Guy Clark story song; he’s worked on fishing rigs in the Pacific and been a carpenter for a time in the north east United States, amongst many other things. His life experience shines through in this mature and insightful record that is equally matched in its sonic landscape. Produced by Grammy Award winning Dean Jones, the album readily wears its old school country outlaw sensibilities, akin to Johnny Cash, but also pushes arrangements into newer and arguably more exciting territory. Songs like ‘Trouble’ exemplify this approach and provide catchy hooks while Brown sings about the good and bad things in life, all with an underlying sense of mischievousness. “Trouble comes cheap” he sings.",
    ],
    reviewer: "Americana UK",
    reviewerLink: "https://americana-uk.com/",
    reviewerImageSrc: "AUK-logo.webp",

    album: "skinAndBones",
  },

  {
    id: "2230",
    slug: "2230",
    title: "Skin & Bone Review",
    subtitle: "Four star review from R2 Magazine - Simon Hughes",
    reviewText: [
      "An intriguing character, Mark Brown has certainly been around. Since growing up in Maryland he’s spent time farming, working as a mechanic, commercial fishing in the northern Pacific and working as a carpenter in the north-eastern United States. ‘See you Next Time’ opens an album of fourteen eclectic, rough and humorous songs that sound like they’ve been hauled out of a wooden cabin, given a stiff drink and let loose on a wary community. ‘Smashed’ tells the tale of a man fighting, unsuccessfully, to avoid getting drunk again.",
      "Typically with Brown, he has a lot of fun along the way. ‘When the Time Comes’ is a bellyful of soul, with gorgeous Hammond organ accompaniment. The humorous ballad ‘Pony’ tells a tale of unrequited love, where our hero loses out to a milky eyed, skinny pony. (‘I love a girl, but she loves a pony/ I want this girl, but she loves him only’.)",
      "Skin & Bone is produced by Grammy Award-winning Dean Jones and features Ken McGloin on Guitar, John Parker on bass, Dean Sharp on Drums, Guy ‘Fooch’ Fichetti on pedal steel and Jones on everything else, with a few guest appearances thrown in for good measure. It’s pitched somewhere between Johnny Cash, Nick Cave and Tom Waits, with a refreshing dose of raw honesty and sly humor. Pour a drink, pull up a chair and treat yourself.",
    ],
    reviewer: "R2 Magazine",
    album: "skinAndBones",
    reviewerImageSrc: "rnrlogo.webp",
  },
];
