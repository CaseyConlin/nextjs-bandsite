export type eventType = {
  eventStartDate: string;
  eventEndDate: string;
  title: string;
  address: string;
  venue: string;
  ticketCost?: string;
  ticketLink?: string;
  info: string[];
  imgSrc: string;
  added?: string;
};

export const events = [
  {
    eventStartDate: "2024-07-20T17:30",
    eventEndDate: "2024-07-20T19:00",
    title: "Rosendale Street Festival 2024",
    address: "434 Main Street",
    venue: "Cafe Stage",
    town: "Rosendale",
    ticketCost: undefined,
    state: "NY",
    zip: "12472",
    country: "US",
    ticketLink: "https://www.rosendalestreetfestival.org/",
    info: [
      "We're back at the Rosendale Street Fest (again!) and excited to play with over 70 of the best bands in the Hudson Valley. Come check us out on the Cafe Stage with Mark Brown on guitar and vocals, Ken McGloin on guitar, Mark Murphy on bass, Dean Sharp on drums, and the versatile talents of Dean Jones",
    ],
    imgSrc: "streetfest.webp",
    added: "2024-06-01",
  },
  {
    eventStartDate: "2024-09-21T16:00",
    eventEndDate: "2024-09-21T18:30",
    title: "Muisic at Willow Kiln Park",
    address: "5 Hardenburgh Lane",
    venue: "Willow Kiln Park",
    town: "Rosendale",
    ticketCost: undefined,
    state: "NY",
    zip: "12472",
    country: "US",
    ticketLink: "https://www.rosendaleheartsoul.org/event/joppenbergh-jam/",
    info: [
      "Join us for an unforgettable evening of music at scenic Willow Kiln Park in Rosendale, where we'll be playing with Ken Mcgloin, Mark Murphy and Dean Jones.",
    ],
    imgSrc: "JoppenberghJAM24.png",
    added: "2024-06-01",
  },
  {
    eventStartDate: "2024-11-14T19:00",
    eventEndDate: "2024-11-14T21:00",
    title: "Homer Alaska House Concert",
    address: "Homer Alaska",
    venue: "Homer Alaska House",
    town: "Homer",
    ticketCost: undefined,
    state: "AK",
    zip: "99603",
    country: "US",
    ticketLink: "mailto:mark@unclebuckle.com",
    info: [
      "We're excited to be playing a house concert in Homer Alaska. If you're in the area, come join us for a great evening of music. Contact Mark at mark@unclebuckle.com for more info.",
    ],
    imgSrc: "512px-Homer,_Alaska_Aerial.jpg",
    added: "2024-06-01",
  },
];
