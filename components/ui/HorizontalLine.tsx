const HorizontalLine = ({ className }: any) => {
  return (
    <div className="flex justify-center">
      <div
        className={className}
        style={{
          boxShadow: "0 0 5px #00705a, 0 0 5px #00705a",
          animation: "lineGrow 0.5s ease-in-out forwards",
          transformOrigin: "center",
        }}
      />
      <style jsx>{`
        @keyframes lineGrow {
          0% {
            transform: scaleX(0);
            opacity: 0;
            color: #00705a;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
            color: #00705a;
          }
        }
      `}</style>
    </div>
  );
};

export default HorizontalLine;
