import { Drawer } from '@/libs';
import { useState } from 'react';

export const DrawerExamplePage = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);
  return (
    <div className="w-screen h-screen m-auto border border-red-700">
      <Drawer open={left} direction={'left'}>
        <div>Hello world111</div>
        <button
          className="px-3 py-2 border rounded bg-teal-500 text-gray-50 cursor-pointer"
          onClick={() => setLeft(false)}
        >
          close
        </button>
      </Drawer>
      <Drawer open={right} direction={'right'}>
        <div>Hello world111</div>
        <button
          className="px-3 py-2 border rounded bg-teal-500 text-gray-50 cursor-pointer"
          onClick={() => setRight(false)}
        >
          close
        </button>
      </Drawer>
      <Drawer open={top} direction={'top'}>
        <div>Hello world111</div>
        <button
          className="px-3 py-2 border rounded bg-teal-500 text-gray-50 cursor-pointer"
          onClick={() => setTop(false)}
        >
          close
        </button>
      </Drawer>
      <Drawer open={bottom} direction={'bottom'}>
        <div>Hello world111</div>
        <button
          className="px-3 py-2 border rounded bg-teal-500 text-gray-50 cursor-pointer"
          onClick={() => setBottom(false)}
        >
          close
        </button>
      </Drawer>

      <div className="m-auto w-full h-full flex items-center justify-center">
        <button
          className="px-3 py-2 border rounded bg-teal-500 text-gray-50 cursor-pointer"
          onClick={() => setLeft(true)}
        >
          open left
        </button>
        <button
          className="px-3 py-2 border rounded bg-teal-500 text-gray-50 cursor-pointer"
          onClick={() => setRight(true)}
        >
          open right
        </button>
        <button
          className="px-3 py-2 border rounded bg-teal-500 text-gray-50 cursor-pointer"
          onClick={() => setTop(true)}
        >
          open top
        </button>
        <button
          className="px-3 py-2 border rounded bg-teal-500 text-gray-50 cursor-pointer"
          onClick={() => setBottom(true)}
        >
          open bottom
        </button>
      </div>
    </div>
  );
};
