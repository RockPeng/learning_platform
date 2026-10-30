const bars: (number | null)[] = [
  72, 106, 128, 154, 104, 78, null, null, 64, 82, 118, 152, 108, 72, 132, 112,
];

export function ChartDecoration() {
  return (
    <div className="vertex-chart-decoration" aria-hidden="true">
      {bars.map((height, index) =>
        height === null ? (
          <span className="vertex-chart-decoration__spacer" key={`spacer-${index}`} />
        ) : (
          <span
            className="vertex-chart-decoration__bar"
            key={`${index}-${height}`}
            style={{ height: `${height}px` }}
          />
        ),
      )}
    </div>
  );
}
