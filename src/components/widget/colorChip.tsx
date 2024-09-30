import { Tooltip } from "@mui/material";

export default function ColorChip({
  active,
  tooltip,
  color,
  onClick,
}: {
  active: boolean;
  color: string;
  tooltip: string;
  onClick: (active: boolean) => void;
}) {
  return (
    <Tooltip title={tooltip}>
      <div
        onClick={() => {onClick(true)}}
        className={`p-4 rounded-full cursor-pointer ${
          active ? "outline-2" : "outline-0"
        } outline-black outline-none hover:outline-2 hover:outline-black hover:outline-none active:outline-4 active:outline-black active:outline-none transition-all`}
        style={{ backgroundColor: color }}
      ></div>
    </Tooltip>
  );
}
