interface Meta {
  url: string;
  size: string;
  time: string;
}

export function MetaData(details: Meta) {
  return (
    <p>
      url: {details.url}, size: {details.size}, time: {details.time}
    </p>
  );
}
