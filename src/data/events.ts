export type eventType = {
  eventStartDate: string;
  eventEndDate: string;
  title: string;
  address: string;
  venue: string;
  ticketCost?: string;
  ticketLink: string;
  info: string[];
  imgSrc: string;
  added?: string;
};

export const events = [
  {
    eventStartDate: "2024-07-20T19:00",
    eventEndDate: "2024-07-20T20:00",
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
];
