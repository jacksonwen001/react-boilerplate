import { Accordion } from '@/libs/components/accordion/Accordion';
import { Pane } from '@/libs/components/accordion/Pane';

export const AccordionPage = () => {
  return (
    <Accordion className="w-1/2 m-auto mt-10">
      <Pane title={'accordion #1'} className="bg-gray-200">
        <div>ssss</div>
      </Pane>
      <Pane title={'accordion #2'}>
        <div>ssss</div>
      </Pane>
      <Pane title={'accordion #3'}>
        <div>ssss</div>
      </Pane>
      <Pane title={'accordion #4'}>
        <div>ssss</div>
      </Pane>
    </Accordion>
  );
};
