import type { TeamContent } from '../types';

// The team, shown on Chi siamo, Contatti and the homepage strip, and in the JSON-LD.
// Photos: public/team/<id>.webp and public/team/<id>.jpg, 400 x 400. If a file is missing, set photo to '' to show initials.
const team: TeamContent = {
  founder: 'david-wadsworth',
  line: 'SCOVO nasce a Milano. Lo costruiscono product e marketing manager con esperienza nel settore industriale: conosciamo il modo in cui comprano le PMI B2B, perché è il nostro mondo.',
  linkedinLabel: 'Profilo LinkedIn di {name}',
  people: [
    {
      id: 'david-wadsworth',
      name: 'David Wadsworth',
      initials: 'DW',
      role: 'Fondatore',
      email: 'david@scovo.io',
      linkedin: 'https://www.linkedin.com/in/david-wadsworth-8102801a',
      photo: '/team/david-wadsworth',
      alt: 'David Wadsworth, fondatore di SCOVO',
    },
    {
      id: 'nicoletta-fava',
      name: 'Nicoletta Fava',
      initials: 'NF',
      role: "Account Manager per l'Italia",
      email: 'nicoletta@loscovo.it',
      linkedin: 'https://www.linkedin.com/in/nicoletta-maria-fava/',
      photo: '/team/nicoletta-fava',
      alt: "Nicoletta Fava, Account Manager per l'Italia",
    },
  ],
};

export default team;
