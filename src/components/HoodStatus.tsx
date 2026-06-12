import { TODAY } from '@/helperFunctions/dateHelpers';
import '../styles/colors-and-type.scss';

const MONTH_SEASON: Record<string, string> = {
  '12': 'Winter',
  '01': 'Winter',
  '02': 'Winter',
  '03': 'Spring',
  '04': 'Spring',
  '05': 'Spring',
  '06': 'Summer',
  '07': 'Summer',
  '08': 'Summer',
  '09': 'Fall',
  '10': 'Fall',
  '11': 'Fall',
};

function HoodStatus({
  date,
  res,
  isPreview,
  active,
}: {
  date: string;
  res: number;
  isPreview: boolean;
  active: boolean;
}) {
  const getSeason = (d: string) => {
    const [year, month] = d.split('-');
    return `${MONTH_SEASON[month] ?? 'Unknown'} ${year}`;
  };

  const isLive = isPreview || (!!date && date <= TODAY);
  console.log(isLive);

  return (
    <div className="bw-hood-stats grid grid-cols-3 place-items-center font-(family-name:--font-body) text-[13px] text-[var(--fg-muted)]">
      <div className="grid items-center w-full p-[5px] text-center">
        <div className="text-[11px] font-bold leading-[1.5] tracking-[1.98px] uppercase">
          residents
        </div>
        <div className="font-semibold leading-[1.5]">
          {active && res !== 0 ? res : '0'}
        </div>
      </div>
      <div className="w-full p-[5px] border-l-[1px] border-r-[1px] border-[var(--bw-burnt)] text-center">
        <div className="text-[11px] font-bold leading-[1.5] tracking-[1.98px] uppercase">
          {active && res !== 0 ? 'broke ground' : 'breaking ground'}
        </div>
        <div className="font-semibold leading-[1.5]">
          {date !== '' && active && res !== 0 ? getSeason(date) : 'soon'}
        </div>
      </div>
      <div className="w-full p-[5px] text-center">
        <div className="text-[11px] font-bold leading-[1.5] tracking-[1.98px] uppercase">
          utilities {active && res !== 0 ? `on` : `off`}
        </div>
        <div className="font-semibold leading-[1.5]">
          <span
            className={`bw-porch-dot ${active && res !== 0 ? 'on' : ''}`}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export default HoodStatus;
