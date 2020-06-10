import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.hompage.introduce';

export default defineMessages({
  what: {
    id: `${scope}.what`,
    defaultMessage: "What's on ",
  },
  today: {
    id: `${scope}.today`,
    defaultMessage: 'Today',
  },
  atMV: {
    id: `${scope}.atMV`,
    defaultMessage: 'at Moviezone Cinema & Theatres!',
  },
  all: {
    id: `${scope}.all`,
    defaultMessage: 'All reserved seating  - Choose your exact seat!',
  },
  discover: {
    id: `${scope}.discover`,
    defaultMessage: 'Discover now!',
  },
  currentMovie: {
    id: `${scope}.currentMovie`,
    defaultMessage: 'Now Showing',
  },
  upcomingMovie: {
    id: `${scope}.upcomingMovie`,
    defaultMessage: 'Comming Soon',
  },
  buyTicket: {
    id: `${scope}.buyTicket`,
    defaultMessage: 'Buy ticket',
  },
});
