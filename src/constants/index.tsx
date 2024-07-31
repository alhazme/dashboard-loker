import { EnumValues } from "zod";
import { benefitType } from "./types";

export const JOBTYPES: EnumValues = ['Full-Time', 'Part-Time', 'Remote', 'Internship'];
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

export const JOB_APPLICANT_COLUMNS: string[] = ['Name', 'Applied Date']

export const JOB_APPLICANT_DATA = [
  {
    name: "Fariz",
    appliedDate: "15 Aug 2023"
  }
]