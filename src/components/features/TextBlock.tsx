import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/api';

interface TextBlockProps {
  headline?: string;
  text?: any[];
}

const TextBlock = ({ headline, text }: TextBlockProps) => {
  return (
    <div className="bw-text-block">
      {headline && <h2>{headline}</h2>}
      {text && (
        <PortableText
          value={text}
          components={{
            types: {
              image: ({ value }) => (
                <img
                  src={urlFor(value)}
                  className={`bw-float-image ${value.float === 'left' ? 'float-left mr-4' : value.float === 'right' ? 'float-right ml-4' : ''}`}
                />
              ),
            },
          }}
        />
      )}
    </div>
  );
};

export default TextBlock;
