const TableSkeleton = ({ rows = 5, cols = 4 }) => {
  return (
    <div className="mt-5 space-y-3">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="grid items-center p-4 bg-green-100 rounded-xl animate-pulse"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`
          }}
        >
          {Array.from({ length: cols }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="h-4 mx-2 bg-green-200 rounded"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;