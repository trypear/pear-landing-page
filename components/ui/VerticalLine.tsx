const VerticalLine = ({ className }: any) => {
  return (
    <div className="flex justify-center">
      <div
        className={className}
        style={{
          boxShadow: "0 0 1px #00705a, 0 0 1px #00705a",
          animation: "lineGrow 0.1s ease-out forwards",
          transformOrigin: "center",
        }}
      />
      <style jsx>{`
        @keyframes lineGrow {
          0% {
            transform: scaleY(0);
            opacity: 0.3;
            color: #00705a;
          }
          100% {
            transform: scaleY(1);
            opacity: 0.4;
            color: #00705a;
          }
        }
      `}</style>
    </div>
  );
};

export default VerticalLine;
