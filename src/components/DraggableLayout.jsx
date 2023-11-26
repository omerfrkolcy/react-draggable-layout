import { useContext, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { ThemeContext } from '../App';
import ThemeToggle from './ThemeToggle';
import { generateLayout } from '../utils/Helpers';

const ReactGridLayout = WidthProvider(Responsive);

const DraggableLayout = () => {
  const skillsGrid = [
    'React.js',
    'Next.js',
    'Vue.js',
    'Node.js',
    'Laravel',
    'TypeScript',
    'JavaScript',
    'Vite',
    'Tailwind',
    'npm',
    'PHP',
    'Bootstrap',
    'AWS',
    'Docker',
    'Firebase',
    'Pinia',
    'Redis',
    'Redux',
    'Redux-Observable',
    'Redux-Saga',
    'CSS',
  ];

  const { isDarkMode, theme, toggleTheme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className={`${theme} flex flex-col justify-center items-center`}>
      <div className='text-blue-900 bg-gradient-to-b from-gray-300 to-white dark:text-white dark:from-gray-900 dark:to-gray-800 w-full min-h-screen p-5'>
        <div className='m-auto'>
          <div className='flex justify-center items-center'>
            <button
              className='p-3 m-3 text-xs rounded-full shadow-sm shadow-cyan-800'
              onClick={() => setIsEnabled(!isEnabled)}
            >
              {`Click here to ${isEnabled ? 'lock current layout' : 'use drag & drop functionality'} !`}
            </button>
            <ThemeToggle checked={isDarkMode} onChange={toggleTheme} />
          </div>
        </div>
        <ReactGridLayout
          className='select-none max-w-6xl relative m-auto'
          cols={{ lg: 8, md: 7, sm: 5, xs: 3, xxs: 2 }}
          layouts={{
            lg: generateLayout(skillsGrid, 8),
            md: generateLayout(skillsGrid, 7),
            sm: generateLayout(skillsGrid, 5),
            xs: generateLayout(skillsGrid, 3),
            xxs: generateLayout(skillsGrid, 2),
          }}
          useCSSTransforms
          rowHeight={8}
          margin={[48, 24]}
          isDraggable={isEnabled}
        >
          {skillsGrid.map((item) => (
            <div
              key={item}
              className={`${
                isEnabled ? 'ease-linear duration-100 cursor-pointer shadow-cyan-800' : ''
              } flex flex-col justify-center items-center rounded-full shadow-lg`}
            >
              <div className='flex justify-center items-center'>
                <img src={`/stack/${item.toLowerCase()}.svg`} width={32} height={48} alt={item} />
              </div>
              <div className='text-center text-xs'>
                <span>{item}</span>
              </div>
            </div>
          ))}
        </ReactGridLayout>
      </div>
    </div>
  );
};

export default DraggableLayout;
