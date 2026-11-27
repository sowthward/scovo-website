import type { TeamContent } from '../types';

// The team, shown on About, Contact and the homepage strip, and in the JSON-LD.
// Photos: public/team/<id>.webp and public/team/<id>.jpg, 400 x 400. If a file is missing, set photo to '' to show initials.
const team: TeamContent = {
  founder: 'david-wadsworth',
  line: 'SCOVO is built in Milan by product and marketing managers from the industrial sector. We know how B2B SMEs buy, because it is our world.',
  linkedinLabel: "{name}'s LinkedIn profile",
  people: [
    {
      id: 'david-wadsworth',
      name: 'David Wadsworth',
      initials: 'DW',
      role: 'Founder',
      email: 'david@scovo.io',
      linkedin: 'https://www.linkedin.com/in/david-wadsworth-8102801a',
      photo: '/team/david-wadsworth',
      alt: 'David Wadsworth, founder of SCOVO',
    },
    {
      id: 'nicoletta-fava',
      name: 'Nicoletta Fava',
      initials: 'NF',
      role: 'Account Manager, Italy',
      email: 'nicoletta@loscovo.it',
      linkedin: 'https://www.linkedin.com/in/nicoletta-maria-fava/',
      photo: '/team/nicoletta-fava',
      alt: 'Nicoletta Fava, Account Manager, Italy',
    },
  ],
};

export default team;
