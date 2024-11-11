const MovingBorder = ({ BoxName }: any, className?: string) => {
  return (
    <div className="relative top-5 flex overflow-hidden">
      <div className={className}>
        {/* Container with relative positioning */}
        {BoxName}

        {/* Animated borders using pseudo-elements */}
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          {/* Top border */}
          <span className="animation-delay-1s absolute left-0 top-0 h-px w-full animate-[moveRight_2s_linear_infinite] rounded-lg bg-[#00705A]" />
          <span className="absolute right-0 top-0 h-full w-px animate-[moveDown_2s_linear_infinite] rounded-lg bg-[#00705A] [animation-delay:1.5s]" />
          <span className="absolute bottom-0 right-0 h-px w-full animate-[moveLeft_2s_linear_infinite] rounded-lg bg-[#00705A] [animation-delay:1s]" />
          <span className="absolute bottom-0 left-0 h-full w-px animate-[moveUp_2s_linear_infinite] rounded-lg bg-[#00705A] [animation-delay:1.5s]" />
        </span>
      </div>

      {/* Keyframe animations defined in style tag */}
      <style jsx>{`
        @keyframes moveRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes moveDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes moveLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes moveUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default MovingBorder;
