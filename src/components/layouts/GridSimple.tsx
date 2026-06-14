interface GridSimpleProps {
  columnCount: 'one' | 'two' | 'three' | 'four' | 'five';
  hide?: boolean;
  children: React.ReactNode;
}

const columnClasses: Record<string, string> = {
  one: 'grid grid-cols-1',
  two: 'grid grid-cols-1 md:grid-cols-2',
  three: 'grid grid-cols-1 md:grid-cols-3',
  four: 'grid grid-cols-1 md:grid-cols-4',
  five: 'grid grid-cols-1 md:grid-cols-5',
};

const GridSimple = ({ columnCount, hide, children }: GridSimpleProps) => {
  if (hide) return null;

  return (
    <div className={`${columnClasses[columnCount]} gap-[20px]`}>{children}</div>
  );
};

export default GridSimple;
