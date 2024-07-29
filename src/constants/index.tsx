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