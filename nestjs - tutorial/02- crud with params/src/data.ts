export enum ReportType {
  INCOME = "income",
  EXPENSE = "expense",
}

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
export const data: Data = {
  report: [
    {
      id: "1",
      source: "salary",
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: "2",
      source: "web",
      amount: 7000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },

    {
      id: "3",
      source: "backend",
      amount: 7200,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
