const TableSkeleton = ({ rows = 5, cols = 4 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="animate-pulse bg-green-100 rounded-lg flex justify-between w-full"
        >
          {Array.from({ length: cols }).map((_, colIndex) => (
            <td
              key={colIndex}
              className="p-5 w-[160px]"
            >
              <div className="h-4 w-full bg-green-200 rounded"></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableSkeleton;