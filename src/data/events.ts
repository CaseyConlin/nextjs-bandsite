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
    eventStartDate: "2024-07-20T10:00",
    eventEndDate: "2024-07-20T12:00",
    title: "Rosendale Street Festival 2024",
    address: "434 Main Street",
    venue: "Cafe Stage",
    town: "Rosendale",
    state: "NY",
    zip: "12472",
    country: "US",
    ticketLink: "https://www.rosendalestreetfestival.org/",
    info: [
      "We're back at the Rosendale Street Fest (again!) and excited to play with over 70 of the best bands in the Hudson Valley.",
    ],
    imgSrc: "streetfest.webp",
  },
  {
    eventStartDate: "2024-07-21T11:30",
    eventEndDate: "2024-07-21T13:30",
    title: "Rosendale Street Festival 20241",
    venue: "Cafe Stage",
    ticketLink: "https://www.rosendalestreetfestival.org/",
    address: "434 Main Street",
    town: "Rosendale",
    state: "NY",
    zip: "12472",
    country: "US",
    ticketCost: "20",
    info: [
      "We're back at the Rosendale Street Fest (again!) and excited to play with over 70 of the best bands in the Hudson Valley.",
    ],
    imgSrc: "streetfest.webp",
    added: "2024-04-10T00:00",
  },
  {
    eventStartDate: "2022-07-21T18:00",
    eventEndDate: "2022-07-21T20:00",
    title: "Rosendale Street Festival 2022",
    address: "434 Main Street",
    venue: "Cafe Stage",
    town: "Rosendale",
    state: "NY",
    zip: "12472",
    country: "US",
    ticketCost: "10",
    ticketLink: "https://www.rosendalestreetfestival.org/",
    info: [
      "We're back at the Rosendale Street Fest (again!) and excited to play with over 70 of the best bands in the Hudson Valley.",
    ],
    imgSrc: "eventimage.webp",
  },
];
