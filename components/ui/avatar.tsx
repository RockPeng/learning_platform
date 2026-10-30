type AvatarProps = {
  initials: string;
  label: string;
};

export function Avatar({ initials, label }: AvatarProps) {
  return (
    <span className="vertex-avatar" role="img" aria-label={label}>
      {initials}
    </span>
  );
}
