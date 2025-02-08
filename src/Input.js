export function Input({ location, setLocation }) {
  return (
    <input
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      placeholder="Search your location"
    ></input>
  );
}
