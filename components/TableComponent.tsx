import React from "react";

interface TableComponentProps {
  title: string;
  description: string;
  columns: string[];
  rows: Array<{ [key: string]: string | number }>;
  searchQuery: string;
  selectable?: boolean;
  onEdit?: (row: { [key: string]: string | number }) => void;
  onDelete?: (index: number) => void;
}

// Map tên cột thành tên khóa trong dữ liệu
const columnKeyMap: { [key: string]: string } = {
  Date: "date",
  ID: "id",
  Hospital: "hospital",
  Country: "country",
  "Hospital Phone": "phone",
  Symptom: "symptom",
  Duration: "duration",
  "1st Preferred Date/Times": "preferredDate1",
  "2nd Preferred Date/Times": "preferredDate2",
  Insurance: "insurance",
  Status: "status",
};

// Function to get the color class based on status
const getStatusClass = (status: string) => {
  switch (status) {
    case "Approved":
      return "text-green-600 dark:text-green-400 font-semibold";
    case "Rejected":
      return "text-red-600 dark:text-red-400 font-semibold";
    case "Waiting":
      return "text-yellow-600 dark:text-yellow-400 font-semibold";
    default:
      return "text-gray-600 dark:text-gray-400";
  }
};

export default function TableComponent({
  columns,
  rows,
  searchQuery,
  onEdit,
  onDelete,
}: TableComponentProps) {
  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left text-sm">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="border px-4 py-2 dark:border-gray-700">
                {col}
              </th>
            ))}
            <th className="border px-4 py-2 dark:border-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b dark:border-gray-700">
              {columns.map((col, colIndex) => {
                const colKey = columnKeyMap[col] || col.toLowerCase().replace(/ /g, "");

                return (
                  <td key={colIndex} className="px-4 py-2">
                    {colKey === "hospital" && typeof row[colKey] === "string" ? (
                      <a
                        href={`https://example.com/${row[colKey]}`}
                        className="text-blue-500 dark:text-blue-400 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {row[colKey]}
                      </a>
                    ) : colKey === "status" ? (
                      // Apply status color based on status value
                      <span className={getStatusClass(row[colKey] as string)}>
                        {row[colKey]}
                      </span>
                    ) : (
                      row[colKey] || "-"
                    )}
                  </td>
                );
              })}
              <td className="px-4 py-2">
                {row["status"] === "Waiting" ? (
                  <button
                    onClick={() => onEdit && onEdit(row)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Detail
                  </button>
                ) : row["status"] === "Rejected" || row["status"] === "Approved" ? (
                  <button
                    onClick={() => onDelete && onDelete(rowIndex)}
                    className="bg-blue-500 text-white px-2 py-1 rounded "
                  >
                    Update
                  </button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
