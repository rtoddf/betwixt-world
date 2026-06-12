import type { PortableTextBlock } from '@portabletext/react';
import GridSimple from './GridSimple';
import TextBlock from '../features/TextBlock/TextBlock';

interface Component {
  _type: string;
  _key: string;
  headline?: string;
  text?: unknown[];
}

export interface Slot {
  _key: string;
  columnCount: 'one' | 'two' | 'three' | 'four' | 'five';
  hide?: boolean;
  components?: Component[];
}

interface PageBuilderProps {
  slots: Slot[];
}

const renderComponent = (component: Component, columnCount: string) => {
  switch (component._type) {
    case 'textBlock':
      return (
        <TextBlock
          headline={component.headline}
          text={component.text as PortableTextBlock[]}
          columnCount={columnCount}
        />
      );
    default:
      return null;
  }
};

const PageBuilder = ({ slots }: PageBuilderProps) => {
  return (
    <div className="bw-page-builder">
      {slots.map((slot) => (
        <GridSimple
          key={slot._key}
          columnCount={slot.columnCount}
          hide={slot.hide}
        >
          {slot.components?.map((component) => (
            <div key={component._key}>
              {renderComponent(component, slot.columnCount)}
            </div>
          ))}
        </GridSimple>
      ))}
    </div>
  );
};

export default PageBuilder;
