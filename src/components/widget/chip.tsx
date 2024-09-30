export default function Chip({
  enabled,
  children,
  onClick,
}: {
  enabled: boolean;
  children: JSX.Element | JSX.Element[] | string;
  onClick: (enabled: boolean) => void;
}) {
  return (
    <div
      onClick={() => {
        onClick(true);
      }}
      className={`${
        enabled
          ? "bg-black text-white"
          : "bg-gray-300 text-black hover:bg-gray-200 active:bg-gray-300 select-none"
      } rounded-full flex items-center gap-4 transition-all px-8 py-2 cursor-pointer`}
    >
      {children}
    </div>
  );
}
