const TableSkeleton = ({ rows = 1, cols = 5 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="animate-pulse bg-[#befeb2] w-full flex gap-10 items-center justify-between mt-5 "
        >
          {Array.from({ length: cols }).map((_, colIndex) => (
            <td
              key={colIndex}
              className="px-4 py-3 w-[150px] "
            >
              <div className="w-full h-4 bg-green-300 rounded" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableSkeleton;
