export type eventType = {
  eventDate: string;
  title: string;
  address: string;
  venue: string;
  ticketCost?: string;
  ticketLink: string;
  info: string[];
  imgSrc: string;
};

export const events = [
  {
    eventDate: "2024-07-20T10:00",
    title: "Rosendale Street Festival 2024",
    address: "434 Main Street",
    venue: "Cafe Stage",
    ticketLink: "https://www.rosendalestreetfestival.org/",
    info: [
      "We're back at the Rosendale Street Fest (again!) and excited to play with over 70 of the best bands in the Hudson Valley.",
    ],
    imgSrc: "streetfest.webp",
  },
  {
    eventDate: "2024-07-21T11:30",
    title: "Rosendale Street Festival 20241",
    address: "434 Main Street",
    venue: "Cafe Stage",
    ticketLink: "https://www.rosendalestreetfestival.org/",
    ticketCost: "20",
    info: [
      "We're back at the Rosendale Street Fest (again!) and excited to play with over 70 of the best bands in the Hudson Valley.",
    ],
    imgSrc: "streetfest.webp",
  },
  {
    eventDate: "2022-07-21T18:00",
    title: "Rosendale Street Festival 2022",
    address: "434 Main Street",
    venue: "Cafe Stage",
    ticketCost: "10",
    ticketLink: "https://www.rosendalestreetfestival.org/",
    info: [
      "We're back at the Rosendale Street Fest (again!) and excited to play with over 70 of the best bands in the Hudson Valley.",
    ],
    imgSrc: "eventimage.webp",
  },
];
