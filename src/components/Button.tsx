import { Link } from 'react-router';

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
        <span className="inline-block">{text}</span>
      </button>
    </Link>
  );
}

export default Button;
