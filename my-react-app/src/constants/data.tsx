let count: number = 4;
const increaseId = (): number => {
  count = count+1;
  return count;
};

export type dummy = {
  id: number;
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
};

export const defaultData: dummy[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for product XYZ",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000",
  },
  {
    id: 2,
    jobRequest: "Update press kit for company redesign",
    submitted: "15-01-2024",
    status: "Need to start",
    submitter: "irfan khan",
    url: "www.irfan.com",
    assigned: "jack Choudhury",
    priority: "High",
    dueDate: "30-02-2024",
    estValue: "3,200,000",
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app update",
    submitted: "25-12-2024",
    status: "Complete",
    submitter: "emily red",
    url: "www.aishapatel.com",
    assigned: "tom wrong",
    priority: "Low",
    dueDate: "20-11-2024",
    estValue: "1,200,000",
  },
  {
    id: 4,
    jobRequest: "Prepare financial report for Q4",
    submitted: "18-11-2024",
    status: "Blocked",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Low",
    dueDate: "20-11-2024",
    estValue: "7,200,000",
  },
  {
    id: increaseId(),
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: increaseId(),
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: increaseId(),
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: increaseId(),
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: increaseId(),
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: increaseId(),
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
];
