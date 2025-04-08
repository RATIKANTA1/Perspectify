// src/types.ts

// 🧾 Shared enums/types
export type TransactionType = "INCOME" | "EXPENSE";
export type AccountType = "CURRENT" | "SAVINGS";
export type RecurringInterval = "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";

// 🧾 Transaction
export type SerializedTransaction = {
  id: string;
  userId: string;
  accountId: string;
  type: TransactionType;
  amount: number;
  date: string;
  description?: string;
  category: string;
  isRecurring?: boolean;
  recurringInterval?: RecurringInterval | null;
};

// 🏦 Account
export type SerializedAccount = {
  id: string;
  userId: string;
  name: string;
  balance: number;
  isDefault: boolean;
  type: AccountType;
};

// 📂 Category
export interface Category {
  id: string;
  name: string;
  type: TransactionType;
  color: string;
  icon: string;
  subcategories?: string[];
}

// 🎨 Default categories
export const defaultCategories: Category[] = [
  // INCOME
  { id: "salary", name: "Salary", type: "INCOME", color: "#22c55e", icon: "Wallet" },
  { id: "freelance", name: "Freelance", type: "INCOME", color: "#06b6d4", icon: "Laptop" },
  { id: "investments", name: "Investments", type: "INCOME", color: "#6366f1", icon: "TrendingUp" },
  { id: "business", name: "Business", type: "INCOME", color: "#ec4899", icon: "Building" },
  { id: "rental", name: "Rental", type: "INCOME", color: "#f59e0b", icon: "Home" },
  { id: "other-income", name: "Other Income", type: "INCOME", color: "#64748b", icon: "Plus" },

  // EXPENSE
  {
    id: "housing",
    name: "Housing",
    type: "EXPENSE",
    color: "#ef4444",
    icon: "Home",
    subcategories: ["Rent", "Mortgage", "Property Tax", "Maintenance"],
  },
  {
    id: "transportation",
    name: "Transportation",
    type: "EXPENSE",
    color: "#f97316",
    icon: "Car",
    subcategories: ["Fuel", "Public Transport", "Maintenance", "Parking"],
  },
  { id: "groceries", name: "Groceries", type: "EXPENSE", color: "#84cc16", icon: "Shopping" },
  {
    id: "utilities",
    name: "Utilities",
    type: "EXPENSE",
    color: "#06b6d4",
    icon: "Zap",
    subcategories: ["Electricity", "Water", "Gas", "Internet", "Phone"],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    type: "EXPENSE",
    color: "#8b5cf6",
    icon: "Film",
    subcategories: ["Movies", "Games", "Streaming Services"],
  },
  { id: "food", name: "Food", type: "EXPENSE", color: "#f43f5e", icon: "UtensilsCrossed" },
  {
    id: "shopping",
    name: "Shopping",
    type: "EXPENSE",
    color: "#ec4899",
    icon: "ShoppingBag",
    subcategories: ["Clothing", "Electronics", "Home Goods"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    type: "EXPENSE",
    color: "#14b8a6",
    icon: "HeartPulse",
    subcategories: ["Medical", "Dental", "Pharmacy", "Insurance"],
  },
  {
    id: "education",
    name: "Education",
    type: "EXPENSE",
    color: "#6366f1",
    icon: "GraduationCap",
    subcategories: ["Tuition", "Books", "Courses"],
  },
  {
    id: "personal",
    name: "Personal Care",
    type: "EXPENSE",
    color: "#d946ef",
    icon: "Smile",
    subcategories: ["Haircut", "Gym", "Beauty"],
  },
  { id: "travel", name: "Travel", type: "EXPENSE", color: "#0ea5e9", icon: "Plane" },
  {
    id: "insurance",
    name: "Insurance",
    type: "EXPENSE",
    color: "#64748b",
    icon: "Shield",
    subcategories: ["Life", "Home", "Vehicle"],
  },
  { id: "gifts", name: "Gifts & Donations", type: "EXPENSE", color: "#f472b6", icon: "Gift" },
  {
    id: "bills",
    name: "Bills & Fees",
    type: "EXPENSE",
    color: "#fb7185",
    icon: "Receipt",
    subcategories: ["Bank Fees", "Late Fees", "Service Charges"],
  },
  { id: "other-expense", name: "Other Expenses", type: "EXPENSE", color: "#94a3b8", icon: "MoreHorizontal" },
];

// 🟡 Category color map
export const categoryColors: Record<string, string> = defaultCategories.reduce((acc, category) => {
  acc[category.id] = category.color;
  return acc;
}, {} as Record<string, string>);
