interface CountdownUnitProps {
  value: number;
  label: string;
}

export function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-28 h-28 flex items-center justify-center border border-white/20 shadow-lg">
        <span className="text-5xl font-light text-white">{value}</span>
      </div>
      <span className="text-white/90 mt-3 font-light tracking-wider uppercase text-sm">{label}</span>
    </div>
  );
}