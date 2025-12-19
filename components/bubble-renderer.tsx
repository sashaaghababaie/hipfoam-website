export default function BubbleRenderer({
  spacingX,
  spacingY,
}: {
  spacingX: number;
  spacingY: number;
}) {
  const rows = Array.from({ length: 12 });
  const cols = Array.from({ length: 14 });
  return (
    <div className="absolute flex h-full w-full justify-center overflow-hidden">
      <div
        style={
          {
            "--spacing-x": `${spacingX}px`,
            "--spacing-y": `${spacingY}px`,
            "--speed": "9s",
          } as React.CSSProperties
        }
        className="relative left-22 flex h-full w-full rotate-45 flex-col items-center"
      >
        {rows.map((_, row) => (
          <div
            key={row}
            className={`isometric-row ${row % 2 ? "even" : "odd"}`}
          >
            {cols.map((_, col) => (
              <div key={col} className="iso-cell text-white">
                <div className="rounded-full border-[0.5px] border-slate-600">
                  <div
                    style={{ width: spacingX / 1.2, height: spacingY / 1.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
