const TableSkeleton = ({ rows = 5, columns = 5 }) => {
  return (
    <div className="w-full overflow-x-auto border border-gray-300 rounded-md">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {[...Array(columns)].map((_, i) => (
              <th
                key={i}
                className="p-3 bg-gray-100 border border-gray-300"
              >
                <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td
                  key={colIndex}
                  className="p-3 border border-gray-300"
                >
                  <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;