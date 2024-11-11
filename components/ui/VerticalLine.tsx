const VerticalLine = ({ className }: any) => {
  return (
    <div className="flex justify-center">
      <div
        className={className}
        style={{
          boxShadow: "0 0 2px #00705a, 0 0 2px #00705a",
          animation: "lineGrow 0.5s ease-in-out forwards",
          transformOrigin: "center",
        }}
      />
      <style jsx>{`
        @keyframes lineGrow {
          0% {
            transform: scaleY(0);
            opacity: 0.2;
            color: #00705a;
          }
          100% {
            transform: scaleY(1);
            opacity: 0.6;
            color: #00705a;
          }
        }
      `}</style>
    </div>
  );
};

export default VerticalLine;
