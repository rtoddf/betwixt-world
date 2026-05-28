import { Link } from 'react-router';
import '../styles/styles.scss';

function Button({
  slug,
  pretext,
  text,
}: {
  slug: string;
  pretext: string;
  text: string;
}) {
  return (
    <Link to={slug}>
      <button type="button" className="bw-btn bw-btn-primary">
        {pretext !== '' ? pretext : ''}
        <span className="hidden md:inline-block">{text}</span>
      </button>
    </Link>
  );
}

export default Button;
