import '../styles/colors-and-type.scss';
import '../styles/card.scss';

function HoodStatus({
  date,
  res,
  active,
}: {
  date: string;
  res: number;
  active: boolean;
}) {
  return (
    <div className="bw-hood-stats grid grid-cols-3 place-items-center text-[13px] text-[var(--fg-muted)]">
      <div className="grid items-center w-full p-[5px] text-center">
        <div className="text-[11px] font-bold leading-[1.5] tracking-[1.98px] uppercase">
          residents
        </div>
        <div className="font-semibold leading-[1.5]">{res}</div>
      </div>
      <div className="w-full p-[5px] border-l-[1px] border-r-[1px] border-[var(--bw-burnt)] text-center">
        <div className="text-[11px] font-bold leading-[1.5] tracking-[1.98px] uppercase">
          {active ? 'broke ground' : 'breaking ground'}
        </div>
        <div className="font-semibold leading-[1.5]">
          {date !== '' ? date : 'soon'}
        </div>
      </div>
      <div className="w-full p-[5px] text-center">
        <div className="text-[11px] font-bold leading-[1.5] tracking-[1.98px] uppercase">
          utilities {active ? `on` : `off`}
        </div>
        <div className="font-semibold leading-[1.5]">
          <span className="bw-porch-dot" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default HoodStatus;
