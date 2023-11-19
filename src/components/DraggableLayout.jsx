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

  return (
    <div className={theme}>
      <div className='bg-white text-blue-900 dark:bg-gray-900 dark:text-white dark:opacity-90 w-full h-screen fixed overflow-scroll p-5'>
        <div>
          <div className='flex justify-center items-center'>
            <button
              className='p-3 m-3 text-sm rounded-full shadow-sm shadow-cyan-800'
              onClick={() => setIsEnabled(!isEnabled)}
            >
              {`Click here to ${isEnabled ? 'lock current layout' : 'use drag & drop functionality'} !`}
            </button>
            <ThemeToggle checked={isDarkMode} onChange={toggleTheme} />
          </div>
        </div>
        <ReactGridLayout
          className='react-drag relative max-w-5xl m-auto'
          cols={{ lg: 8, md: 7, sm: 6, xs: 4, xxs: 3 }}
          layouts={{
            lg: Helpers.generateLayout(skillsGrid, 8),
            md: Helpers.generateLayout(skillsGrid, 7),
            sm: Helpers.generateLayout(skillsGrid, 6),
            xs: Helpers.generateLayout(skillsGrid, 4),
            xxs: Helpers.generateLayout(skillsGrid, 3),
          }}
          rowHeight={12}
          useCSSTransforms={false}
          mounted
          margin={[48, 12]}
          isDraggable={isEnabled}
        >
          {skillsGrid.map((item) => (
            <div
              key={item}
              className={`${
                isEnabled
                  ? 'animate-shake ease-linear duration-100 hover:shadow-custom-light dark:hover:shadow-custom-dark cursor-pointer'
                  : ''
              } flex flex-col justify-center items-center rounded-full shadow-md shadow-cyan-800`}
            >
              <div className='flex justify-center items-center'>
                <img src={`/stack/${item}.svg`} width={32} height={48} alt={item} />
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
