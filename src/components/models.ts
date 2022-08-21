import * as url from 'url';

export interface Ad {
  adId: number;
  title: string;
  brand: string;
  model: string;
  url: string;
  image: string;
  city: string;
  price: number;
  mileage: number;
  power: number;
  horsePower: number;
  year: number;
  fuelType: string;
  doornum: string;
  gearBox: string;
}

export interface Option {
  label: string | number;
  value: string | number;
}

export interface BrandOption {
  label: string;
  value: string;
  models: Option[];
}

export const defaultBrandOptions = [
  {
    label: 'Toyota',
    value: 'Toyota',
    models: [
      {
        label: 'Yaris',
        value: 'Yaris',
      },
      {
        label: 'Auris',
        value: 'Auris',
      },
    ],
  },
  {
    label: 'Renault',
    value: 'Renault',
    models: [
      {
        label: 'Clio',
        value: 'Clio',
      },
    ],
  },
  {
    label: 'Honda',
    value: 'Honda',
    models: [
      {
        label: 'Civic',
        value: 'Civic',
      },
    ],
  },
];

export const defaultFuelTypeOptions = [
  {
    label: 'Benzin',
    value: 'Benzin',
  },
  {
    label: 'Dizel',
    value: 'Dizel',
  },
  {
    label: 'Benzin + Gas (TNG)',
    value: 'Benzin + Gas (TNG)',
  },
  {
    label: 'Benzin + Metan (CNG)',
    value: 'Benzin + Metan (CNG)',
  },
  {
    label: 'Električni pogon',
    value: 'Električni pogon',
  },
  {
    label: 'Hibridni pogon',
    value: 'Hibridni pogon',
  },
];

export const defaultGearBoxOptions = [
  {
    label: 'Manuelni 4 brzine',
    value: 'Manuelni 4 brzine',
  },
  {
    label: 'Manuelni 5 brzina',
    value: 'Manuelni 5 brzina',
  },
  {
    label: 'Manuelni 6 brzina',
    value: 'Manuelni 6 brzina',
  },
  {
    label: 'Automatski / poluautomatski',
    value: 'Automatski / poluautomatski',
  },
];

export const defaultDoorNumOptions = [
  {
    label: '2/3 vrata',
    value: '2/3 vrata',
  },
  {
    label: '4/5 vrata',
    value: '4/5 vrata',
  },
];

export const defaultPowerOptions = [
  {
    label: '25kW (34KS)',
    value: 25,
  },
  {
    label: '35kW (48KS)',
    value: 35,
  },
  {
    label: '44kW (60KS)',
    value: 44,
  },
  {
    label: '55kW (75KS)',
    value: 55,
  },
  {
    label: '66kW (90KS)',
    value: 66,
  },
  {
    label: '74kW (101KS)',
    value: 74,
  },
  {
    label: '80kW (109KS)',
    value: 80,
  },
  {
    label: '85kW (116KS)',
    value: 85,
  },
  {
    label: '96kW (131KS)',
    value: 96,
  },
  {
    label: '110kW (150KS)',
    value: 110,
  },
  {
    label: '125kW (170KS)',
    value: 125,
  },
  {
    label: '147kW (200KS)',
    value: 147,
  },
  {
    label: '184kW (250KS)',
    value: 184,
  },
  {
    label: '222kW (302KS)',
    value: 222,
  },
  {
    label: '262kW (356KS)',
    value: 262,
  },
  {
    label: '294kW (402KS)',
    value: 294,
  },
  {
    label: '333kW (453KS)',
    value: 333,
  },
];
