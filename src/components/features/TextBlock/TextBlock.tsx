import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/api';
import './textblock.css';

interface TextBlockProps {
  headline?: string;
  text?: unknown[];
  columnCount: string;
}

const TextBlock = ({ headline, text, columnCount }: TextBlockProps) => {
  console.log('columnCount: ', columnCount);

  return (
    <div className="bw-text-block">
      {headline && <h3 className={`${columnCount}-slot`}>{headline}</h3>}
      {text && (
        <PortableText
          value={text}
          components={{
            types: {
              image: ({ value }) => (
                <img
                  src={urlFor(value)}
                  className={`w-[300px] bw-float-image ${value.float === 'left' ? 'float-left mr-4' : value.float === 'right' ? 'float-right ml-4' : ''}`}
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
