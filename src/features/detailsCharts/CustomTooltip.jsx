const CustomTooltip = ({ payload }) => {
  return (
    <div className="custom-tooltip bg-white border border-gray-200 px-3 py-2 text-sm text-gray-800 font-medium shadow-md rounded-lg">
      <p className="label">{`${payload[0]?.payload?.name}: ${payload[0]?.payload?.value}`}</p>
    </div>
  );
};

export default CustomTooltip;
