import { useMemo } from "react";
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import useFormat from "../hooks/use-format";

function Trend({ type, amount, prevAmount }) {
    const colorClasses = {
        "Income": "text-green-700",
        "Expense": "text-red-700",
        "Investment": "text-indigo-700",
        "Saving": "text-yellow-700"
    };

    const calcPercentageChange = (amount, prevAmount) => {
        if (!prevAmount || !amount) return 0;
        return ((amount - prevAmount) / prevAmount) * 100;
    }

    const percentageChange = useMemo(
        () => calcPercentageChange(amount, prevAmount),
        [amount, prevAmount]
    );
    const formattedAmount = useFormat(amount);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className={`font-semibold text-lg ${colorClasses[type]}`}>{type}</div>

            <div className="text-3xl font-semibold text-black mb-2">
                {formattedAmount}
            </div>

            <div className="flex items-center space-x-2 text-base">
                {percentageChange <= 0 ? (
                    <ArrowDownLeft className="text-red-500" size={24} />
                ) : (
                    <ArrowUpRight className="text-green-500" size={24} />
                )}
                <div className="text-gray-700">{percentageChange.toFixed(2)}% vs last period</div>
            </div>
        </div>
    );
}

export default Trend;
