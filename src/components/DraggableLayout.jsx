import { useContext, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { ThemeContext } from '../App';
import ThemeToggle from './ThemeToggle';
import { generateLayout } from '../utils/Helpers';

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
        <div className='max-w-5xl'>
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
            className='select-none w-full relative'
            cols={{ lg: 8, md: 7, sm: 6, xs: 4, xxs: 3 }}
            layouts={{
              lg: generateLayout(skillsGrid, 8),
              md: generateLayout(skillsGrid, 7),
              sm: generateLayout(skillsGrid, 6),
              xs: generateLayout(skillsGrid, 4),
              xxs: generateLayout(skillsGrid, 3),
            }}
            useCSSTransforms
            rowHeight={8}
            margin={[48, 16]}
            isDraggable={isEnabled}
          >
            {skillsGrid.map((item) => (
              <div
                key={item}
                className={`${
                  isEnabled ? 'ease-linear duration-100 shadow-custom-light dark:shadow-custom-dark cursor-pointer' : ''
                } flex flex-col justify-center items-center rounded-full shadow-cyan-800`}
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
    </div>
  );
};

export default DraggableLayout;
