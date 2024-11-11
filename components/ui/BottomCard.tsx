const BottomCard = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-center rounded-sm bg-primary-700 text-xs font-medium text-white-50 shadow-[0_0_12px_1px] shadow-primary-700/50">
        V2
      </div>
      <div className="flex flex-col text-xs">
        <span className="text-gray-500 dark:text-gray-400">
          10 days until launch
        </span>
        <span className="dark:text-white font-medium text-black">
          More coming soon
        </span>
      </div>
    </div>
  );
};

export default BottomCard;
