const CustomTooltip = ({ payload }) => {
  return (
    <div className="custom-tooltip bg-gray-100 p-2 text-gray-800 font-medium shadow rounded-xl">
      <p className="label">{`${payload[0]?.payload?.name}: ${payload[0]?.payload?.value}`}</p>
    </div>
  );
};

export default CustomTooltip;
