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
      <div className='bg-white text-blue-900 dark:bg-gray-900 dark:text-white dark:opacity-90 w-full h-screen p-5'>
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
          className='relative'
          cols={{ lg: 16, md: 12, sm: 10, xs: 8, xxs: 6 }}
          layouts={{
            lg: Helpers.generateLayout(skillsGrid, 8),
            md: Helpers.generateLayout(skillsGrid, 6),
            sm: Helpers.generateLayout(skillsGrid, 5),
            xs: Helpers.generateLayout(skillsGrid, 4),
            xxs: Helpers.generateLayout(skillsGrid, 3),
          }}
          rowHeight={24}
          compactType='vertical'
          verticalCompact={true}
          useCSSTransforms={false}
          mounted={true}
          margin={[24, 16]}
          isDraggable={isEnabled}
        >
          {skillsGrid.map((item) => (
            <div
              key={item}
              className={`${
                isEnabled ? 'animate-shake hover:shadow-custom-light dark:hover:shadow-custom-dark cursor-pointer' : ''
              } flex flex-col justify-center items-center rounded-full shadow-md shadow-cyan-800`}
            >
              <div className='w-12 h-16 flex justify-center items-center'>
                <img src={`/stack/${item}.svg`} width={50} height={80} alt={item} />
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
