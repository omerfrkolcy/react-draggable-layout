import { useContext, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { ThemeContext } from '../App';
import ThemeToggle from './ThemeToggle';
import Helpers from '../utils/Helpers';

const ReactGridLayout = WidthProvider(Responsive);

const DraggableLayout = () => {
  const skillsGrid = [
    'react',
    'nextjs',
    'vue',
    'node.js',
    'laravel',
    'typescript',
    'javascript',
    'vite',
    'tailwind',
    'npm',
    'php',
    'bootstrap',
    'aws',
    'docker',
    'firebase',
    'pinia',
    'redis',
    'redux',
    'shopify',
    'wordpress',
  ];

  const { isDarkMode, theme, toggleTheme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const layout = Helpers.generateLayout(skillsGrid, 6);

  return (
    <div className={theme}>
      <div className='bg-white text-blue-900 dark:bg-gray-900 dark:text-white dark:opacity-90 w-full h-screen fixed overflow-scroll p-5'>
        <div>
          <div className='flex justify-center items-center'>
            <button
              className='p-3 m-3 text-sm rounded-full shadow-md shadow-cyan-800'
              onClick={() => setIsEnabled(!isEnabled)}
            >
              {`Click here to ${isEnabled ? 'lock current layout' : 'use drag & drop functionality'} !`}
            </button>
            <ThemeToggle checked={isDarkMode} onChange={toggleTheme} />
          </div>
        </div>
        <ReactGridLayout
          className='react-drag relative max-w-5xl m-auto'
          cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
          layouts={{
            lg: layout,
            md: layout,
            sm: layout,
            xs: layout,
            xxs: layout,
          }}
          maxRows={4}
          rowHeight={16}
          compactType='horizontal'
          verticalCompact={true}
          useCSSTransforms={false}
          mounted
          margin={[32, 24]}
          isDraggable={isEnabled}
        >
          {skillsGrid.map((item) => (
            <div
              key={item}
              className={`${
                isEnabled ? 'animate-shake hover:shadow-custom-light dark:hover:shadow-custom-dark cursor-pointer' : ''
              } flex flex-col justify-center items-center rounded-full shadow-md shadow-cyan-800`}
            >
              <div className='flex justify-center items-center'>
                <img src={`/stack/${item}.svg`} width={48} height={60} alt={item} />
              </div>
              <div className='text-center text-xs'>
                <span className='capitalize'>{item}</span>
              </div>
            </div>
          ))}
        </ReactGridLayout>
      </div>
    </div>
  );
};

export default DraggableLayout;
