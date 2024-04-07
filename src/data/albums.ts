export type albumType = {
  slug: string;
  title: string;
  description: string[];
  image: string;
};
export const albums = [
  {
    slug: "happyhour",
    title: "Happy Hour",
    description: ["testHH", "testHH"],
    image: "markbrownhappyhourcover.webp",
  },
  {
    slug: "skinandbones",
    title: "Skin & Bones",
    description: [
      "Mark Brown’s long-awaited new CD, Skin and Bone, is finally here. And skin and bone it is, as it rips off the veneer of happy faces and genteel manners—forget easy living—and reveals the pain, longing, and despair you feel sometimes, be it for a lifeless tractor, a gal who just ain’t gonna be there, or just because the moon makes a face at you. Herein lies an artistic dilemma: if you only sing about happy things, you run out of material real quick.",
    ],
    image: "skinandbonealbum.webp",
  },
  {
    slug: "unclebuckle",
    title: "Uncle Buckle",
    description: [
      "When you first listen to Mark Brown, you might find yourself wondering where he’s been and why it took him so long to get here. Combining a sharp eye with a sly sense of humor reminiscent of John Prine, Mark makes songs that hail from everywhere, incorporating ballads, cowboy songs, jigs, sideshow melodies, and field hollers. His songs give voice to craftsmen, broken-hearted mechanics, heavy equipment operators, squatters and girls with their dirt bikes. Like many of his characters, he’s been around: after growing up in Maryland, Mark’s done some farming, worked as a mechanic, spent years as a commercial fisherman in the northern Pacific and worked as a carpenter in the northeastern US. These experiences have influenced his music the way an oak cask influences good whiskey.",
      "Mark got his first Johnny Cash record when he was 6 years old, and wore it out in short order. A farrier took him to his first Tom Waits show in 1975, and that set fire to the barn, flipped the car in the ditch, and started Mark on his own musical career. Mark has been writing, playing and performing for the last 15 years – writing interesting, carefully crafted songs that maintain a soulful integrity while never taking themselves too seriously. After years of solo work, Mark is currently working with his band, Uncle Buckle. Backing up Mark is pedal-steel player extraordinaire Fooch Fischetti, bassist John Hughes, and the versatile Dean Jones on everything else. When the band begins to play the room fills with dust, tarpaper shacks and decrepit farm machinery. Mark also does occasional solo tours around Ireland, where his singing and songwriting skills are drawing Noticia_Text.",
    ],
    image: "unclebucklealbum.webp",
  },
];
