const Logo = ({ size = 40 }: { size?: number }) => {
  return (
    <div className="flex items-center space-x-3">
      <div 
        className="rounded-full relative overflow-hidden"
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B2E3E] via-[#A52A40] to-[#FFD700]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/30"></div>
      </div>
      <span 
        className="font-bold bg-gradient-to-r from-[#8B2E3E] via-[#A52A40] to-[#FFD700] bg-clip-text text-transparent"
        style={{ fontSize: size * 0.6 }}
      >
        EliteBank
      </span>
    </div>
  );
};

export default Logo;
