export function MovieInfo({ emoji, children }) {
  return (
    <p>
      <span>{emoji}</span>
      <span>{children}</span>
    </p>
  );
}
