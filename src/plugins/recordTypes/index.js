import concept from './concept';
import organization from './organization';
import person from './person';

export default [
  concept,
  organization,
  person,
  () => ({
    recordTypes: {
      citation: {
        vocabularies: {
          worldcat: {
            disabled: true,
          },
        },
      },
      concept: {
        vocabularies: {
          material: {
            disabled: true,
          },
          activity: {
            disabled: true,
          },
        },
      },
      organization: {
        vocabularies: {
          ulan: {
            disabled: true,
          },
        },
      },
      location: {
        vocabularies: {
          offsite: {
            disabled: true,
          },
        },
      },
      person: {
        vocabularies: {
          ulan: {
            disabled: true,
          },
        },
      },
      place: {
        vocabularies: {
          tgn: {
            disabled: true,
          },
        },
      },
      work: {
        vocabularies: {
          cona: {
            disabled: true,
          },
        },
      },
    },
  }),
];
