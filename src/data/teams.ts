/*

Record:
me@csral.dev: removed subdivision field from each entry as no information regarding this was provided.
              Check commit: 4f469dc for previous entries which includes subdivision

*/

type SubdivisionEntries = 'CS & AI' | 'Mechanical' | 'Science' | 'Media' | 'EC & EE';
type RoleEntries = 'Team Lead' | 'Technical Lead' | 'Administrative Lead' | 'Project Manager' | 'Member' | 'Mentor';

interface TeamEntry {
  name: string;
  subdivision?: SubdivisionEntries;
  role: RoleEntries;
}

const teams : Record<string, TeamEntry[]> = {
  Mechanical: [
    {
      name: 'Tejasvi Maligi',
      role: 'Member'
    },
    {
      name: 'Korivi Susruth Achinthya',
      role: 'Member'
    },

    {
      name: 'Vishal Reddy B',
      role: 'Member'
    },

    {
      name: 'T Sathwik Reddy',
      role: 'Member'
    },

    {
      name: 'K UDAY VIKAS',
      role: 'Member'
    },

    {
      name: 'Roydon Vilber Rodrigues',
      role: 'Project Manager',
      subdivision: 'Mechanical',
    },
    {
      name: 'Naga Vaishnavi',
      role: 'Project Manager',
      subdivision: 'Mechanical',
    },
  ],

  Electrical: [
    {
      name: 'Deekshita Perala',
      role: 'Member'
    },

    {
      name: 'Maanasha Ravichandran',
      role: 'Member'
    },

    {
      name: 'Jhansi',
      role: 'Member'
    },

    {
      name: 'Ashish',
      role: 'Member'
    },

    {
      name: 'Haasini',
      role: 'Member'
    },

    {
      name: 'Sri Lekha K',
      role: 'Member'
    },

    {
      name: 'Nithilan RameshKumar',
      role: 'Member'
    },

    {
      name: 'Shainehaa VT',
      role: 'Project Manager',
      subdivision: 'EC & EE',
    },

    {
      name: 'S.J. Yatish',
      role: 'Project Manager',
      subdivision: 'EC & EE',
    },
  ],

  'CS and AI': [

    {
      name: 'C. Harshith Reddy',
      role: 'Member'
    },

    {
      name: 'Satya Srinivas Paladugu',
      role: 'Member'
    },

    {
      name: 'Manasvini Kandikonda',
      role: 'Member'
    },

    {
      name: 'Shaurya Pandey',
      role: 'Member'
    },

    {
      name: 'K Deepti',
      role: 'Member'
    },

    {
      name: 'G Akhileshwar Reddy',
      role: 'Member'
    },

    {
      name: 'Chirayu Nilesh Chaudhari',
      role: 'Member'
    },

    {
      name: 'Niyatee Santosh Gamre',
      role: 'Member'
    },

    {
      name: 'Manya Kumar',
      role: 'Member'
    },

    {
      name: 'Gokul Krishna M',
      role: 'Project Manager',
      subdivision: 'CS & AI',
    },

    {
      name: 'Jahnavi S',
      role: 'Project Manager',
      subdivision: 'CS & AI',
    },

  ],
  
  Media: [
    {
      name: 'Kokkalla Akshaya',
      role: 'Member'
    },
    {
      name: 'Janya Billa',
      role: 'Member'
    },
  ],

  Science: [
    {
      name: 'Hanish',
      role: 'Member'
    },
    {
      name: 'Roselina',
      role: 'Member'
    },
    {
      name: 'roshni',
      role: 'Member'
    },
    {
      name: 'H.S Tarun',
      role: 'Member'
    },

    {
      name: 'Rtamanyu',
      role: 'Member'
    },

    {
      name: 'Babitha',
      role: 'Member'
    },

    {
      name: 'G Akhileshwar Reddy',
      role: 'Member'
    },

    {
      name: 'Kalyani Deepu Narayanan',
      role: 'Member'
    },

    {
      name: 'Harshil Reddy',
      role: 'Project Manager',
      subdivision: 'Science',
    },

    {
      name: 'Prithvi S',
      role: 'Project Manager',
      subdivision: 'Science',
    }

  ],

  Mentors: [
    {
      name: 'Dr. Kiran Kumar',
      role: 'Mentor',
    },
  ],

  TeamLead: [
    {
      name: 'Shrivardhan',
      role: 'Administrative Lead',
    },

    {
      name: 'Ekansh',
      role: 'Technical Lead',
    },

    {
      name: 'Chaturya',
      role: 'Team Lead',
      subdivision: 'CS & AI'
    },
    {
      name: 'Lohitashwa Talamanchi',
      role: 'Team Lead',
      subdivision: 'Science',
    },

    {
      name: 'Prakhar',
      role: 'Team Lead',
      subdivision: 'EC & EE',
    },

    {
      name: 'M Nikhil',
      role: 'Team Lead',
      subdivision: 'Mechanical',
    },

    {
      name: 'Pragathi L',
      role: 'Team Lead',
      subdivision: 'Media',
    },
  ],
};

export default teams;
