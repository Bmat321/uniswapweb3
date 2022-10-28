import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "6q8v3tz1",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skcQmxzeCX4AN9kbjPAQhRWz93Ufq4uCqab9ymO5fVjZoglo4aSaeZXk1QiWBsLw3JaIzDcolkIw0iJGy6U9FuAFJCnl5AtCpOkdX7NWja8HwIgRlHyFPiqaCg7g0WJTJmSTDlVzfN46FdcLFiPlZDpOInC5XFtymKKsTk3gt86VELCmuGOo",
  useCdn: false,
});
