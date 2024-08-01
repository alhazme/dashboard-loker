import { EnumValues } from "zod";
import { benefitType } from "./types";

export type optionType = {
  id: string,
  label: string
}

export const JOBTYPES: EnumValues = [
  'Full-Time',
  'Part-Time',
  'Remote',
  'Internship'
];

export const BENEFITS: benefitType[] = [
	{
		benefit: "Full Healthcare",
		description: "We believe in thriving communities and that starts with our team being happy and healthy.",
	},
	{
		benefit: "Unlimited Vacation",
		description: "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
	},
	{
		benefit: "Skill Development",
		description: "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
	},
];

export const JOB_LISTING_COLUMNS: string[] = [
  'Roles', 'Status', 'Date Posted', 'Due Date', 'Job Type', 'Applicants', 'Needs'
]
export const JOB_LISTING_DATA = [
  {
    roles: 'Software Engineer',
    status: 'Live',
    datePosted: '12 Aug 2023',
    dueDate: '12 Sep 2023',
    jobType: 'Full-Time',
    applicants: 1,
    needs: 10
  }
]

export const JOB_APPLICANT_COLUMNS: string[] = [
  'Name',
  'Applied Date'
]

export const JOB_APPLICANT_DATA = [
  {
    name: "Fariz",
    appliedDate: "15 Aug 2023"
  }
]

export const LOCATION_OPTIONS: optionType[] = [
  {
    id: 'Indonesia',
    label: 'Indonesia'
  },
  {
    id: 'Malaysia',
    label: 'Malaysia'
  },
  {
    id: 'Singapura',
    label: 'Singapura'
  },
  {
    id: 'Thailand',
    label: 'Thailand'
  }
]

export const EMPLOYEE_OPTIONS: optionType[] = [
  {
    id: '1-50',
    label: '1-50'
  },
  {
    id: '51-150',
    label: '51-150'
  },
  {
    id: '151-250',
    label: '151-250'
  },
  {
    id: '251-500',
    label: '251-500'
  },
  {
    id: '501-1000',
    label: '501-1000'
  },
  {
    id: '1000-above',
    label: '1000 - Above'
  }
]

export const INDUSTRY_OPTIONS: optionType[] = [
  {
    id: 'media',
    label: 'Media'
  },
  {
    id: 'technology',
    label: 'Technology'
  }
]
