export type albumType = {
  slug: string;
  title: string;
  description: string[];
  image: string;
  links?: {
    appleMusicLink?: string;
    amazonMusicLink?: string;
    spotifyLink?: string;
    pandoraLink?: string;
    cdLink?: string;
  };
  metaDescription: string;
};

export const albums = [
  {
    slug: "happyhour",
    title: "Happy Hour",
    description: [
      "From a dance party at your local Stewart's to a short and dusted road trip, Mark Brown's latest release hits like that favorite home-cooked meal you’ve been missing for the past few years. Reuniting longtime and newfound friends, Happy Hour brings power and energy wrapped in big bass and drums and slide guitars that’ll take you by surprise along with the sweet sounds of acoustic guitars and accordion all tied together with Mark’s honest lyrics which he serves up as lead vocalist moving smoothly from gritty to melodic as you’ve come to expect.",
    ],
    image: "markbrownhappyhourcover.webp",
    metaDescription:
      "Mark Brown's Happy Hour album is a journey over country roads, blending folk melodies with honest lyrics capturing the essence of Americana.",
  },

  {
    slug: "skinandbones",
    title: "Skin & Bones",
    description: [
      "Mark Brown’s long-awaited new CD, Skin and Bone, is finally here. And skin and bone it is, as it rips off the veneer of happy faces and genteel manners—forget easy living—and reveals the pain, longing, and despair you feel sometimes, be it for a lifeless tractor, a gal who just ain’t gonna be there, or just because the moon makes a face at you. Herein lies an artistic dilemma: if you only sing about happy things, you run out of material real quick.",
    ],
    image: "skinandbonealbum.webp",
    links: {
      appleMusicLink:
        "https://music.apple.com/ag/album/skin-and-bones/1007716996",
      amazonMusicLink:
        "https://www.amazon.com/Skin-Bones-Mark-Brown/dp/B00ZV480DO",
      spotifyLink: "https://open.spotify.com/album/3dpQp6REq0OvjJjKBUzhzT",
      pandoraLink:
        "https://www.pandora.com/artist/mark-brown/skin-and-bones/ALcmX7h6hdcxmVK",
      cdLink: "https://www.amazon.com/dp/B017AEZ2GU/ref=dm_rwp_pur_lnd_albm_fr",
    },
    metaDescription:
      "Mark Brown's Skin & Bones album is a hauntingly beautiful blend of Americana, weaving tales of love, loss, and redemption with raw acoustic melodies.",
  },
  {
    slug: "unclebuckle",
    title: "Uncle Buckle",
    description: [
      "When you first listen to Mark Brown, you might find yourself wondering where he’s been and why it took him so long to get here. Combining a sharp eye with a sly sense of humor reminiscent of John Prine, Mark makes songs that hail from everywhere, incorporating ballads, cowboy songs, jigs, sideshow melodies, and field hollers. His songs give voice to craftsmen, broken-hearted mechanics, heavy equipment operators, squatters and girls with their dirt bikes. Like many of his characters, he’s been around: after growing up in Maryland, Mark’s done some farming, worked as a mechanic, spent years as a commercial fisherman in the northern Pacific and worked as a carpenter in the northeastern US. These experiences have influenced his music the way an oak cask influences good whiskey.",
      "Mark got his first Johnny Cash record when he was 6 years old, and wore it out in short order. A farrier took him to his first Tom Waits show in 1975, and that set fire to the barn, flipped the car in the ditch, and started Mark on his own musical career. Mark has been writing, playing and performing for the last 15 years – writing interesting, carefully crafted songs that maintain a soulful integrity while never taking themselves too seriously. After years of solo work, Mark is currently working with his band, Uncle Buckle. Backing up Mark is pedal-steel player extraordinaire Fooch Fischetti, bassist John Hughes, and the versatile Dean Jones on everything else. When the band begins to play the room fills with dust, tarpaper shacks and decrepit farm machinery. Mark also does occasional solo tours around Ireland, where his singing and songwriting skills are drawing Noticia_Text.",
    ],
    image: "unclebucklealbum.webp",
    links: {
      appleMusicLink: "https://music.apple.com/us/album/uncle-buckle/195623163",
      amazonMusicLink:
        "https://www.amazon.com/Uncle-Buckle-Mark-Brown/dp/B0016QA3GI",
      spotifyLink: "https://open.spotify.com/album/0UFbKN0AsYXIKkmPM1rOl2",
      pandoraLink:
        "https://www.pandora.com/artist/mark-brown/uncle-buckle/ALfPK7fqKmdZ7p2",
      cdLink:
        "https://www.amazon.com/Uncle-Buckle-Mark-Brown/dp/B000FTKU60/ref=sr_1_1?crid=EHDEKPQB9I1C&dib=eyJ2IjoiMSJ9.5y8RGAqw3TrYYEjVg8lgbPlG-ieHM3YnzE2oOV8cXyQwBAamToZ6VbeZHjSmu2rHGcjxfMB7B2gxk3tqJsy8Fw.83ZIU1lmga0XFx53xVrCBQ3AYI7_qcnKX-nNkrTavlE&dib_tag=se&keywords=uncle+buckle&qid=1712696525&s=music&sprefix=uncle+buckle%2Cpopular%2C103&sr=1-1",
    },
    metaDescription:
      "Mark Brown's Uncle Buckle album is raw Americana spirit infused with gritty storytelling, echoing the timeless sounds of country, blues, and folk.",
  },
];
