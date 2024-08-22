import BaseTrend from "@/app/components/trend";

export default function Trend({ type, range, amounts }) {
  // Simulating what would have been fetched from Supabase
  // Ensure `amounts` is passed as a prop when using this component

  if (!amounts) {
    throw new Error("No trend data provided");
  }

  return (
    <BaseTrend 
      type={type} 
      amount={amounts.current_amount} 
      prevAmount={amounts.previous_amount} 
    />
  );
}
