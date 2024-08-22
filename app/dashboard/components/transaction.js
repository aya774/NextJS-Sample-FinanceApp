import Separator from "@/app/components/separator";
import TransactionItem from "@/app/components/transaction-items";
import TransactionSummaryItem from "@/app/components/transaction-summary-item";

const groupAndSumTransactionsByDate = (transactions) => {
    const grouped = {};
    for (const transaction of transactions) {
        const date = transaction.created_at.split('T')[0]; 
        if (!grouped[date]) {
            grouped[date] = { transactions: [], amount: 0 };
        }
        grouped[date].transactions.push(transaction);
        const amount = transaction.type === "Expense" ? -transaction.amount : transaction.amount;
        grouped[date].amount += amount;
    }
    return grouped;
};

export default async function TransactionList() {
    const res = await fetch('http://localhost:3100/transactions');
    const transactions = await res.json();
    

    const grouped = groupAndSumTransactionsByDate(transactions);

    return (
        <div className="space-y-8">
            {Object.entries(grouped) 
            .map(([date, { transactions, amount }]) => (
                <div key={date}>
                    <TransactionSummaryItem date={date} amount={amount} />
                   <Separator/>
                    <section className="space-y-4">
                        {transactions.map(transaction => 
                            <div key={transaction.id}>
                                <TransactionItem {...transaction} />
                            </div>
                        )}
                    </section>
                    <p>Total Amount: {amount}</p>
                </div>
            ))}
        </div>
    );
}
