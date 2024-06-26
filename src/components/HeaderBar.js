import { Nav, Typography } from '@douyinfe/semi-ui';
import { IconTag } from '@douyinfe/semi-icons-lab';
import {
  IconGithubLogo,
  IconMoon,
  IconSun,
} from '@douyinfe/semi-icons';
import { useSetTheme, useTheme } from '../context/Theme';

const HeaderBar = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Nav
        mode='horizontal'
        header={
          {
            text: '令牌查询',
            logo: (
              <div style={{ width: '100%', height: '100%' }}>
                < IconTag size='large' />
              </div>
            )
          }
        }
        footer={
          <>
            {theme === 'dark' ? (
              <IconSun
                size="large"
                style={{ cursor: 'pointer', marginRight: '10px', color: 'var(--semi-color-text-2)' }}
                onClick={() => setTheme(false)}
              />
            ) : (
              <IconMoon
                size="large"
                style={{ cursor: 'pointer', marginRight: '10px', color: 'var(--semi-color-text-2)' }}
                onClick={() => setTheme(true)}
              />
            )}
            {process.env.REACT_APP_SHOW_ICONGITHUB === "true" && (
              <IconGithubLogo
                size="large"
                style={{ cursor: 'pointer', marginRight: '10px', color: 'var(--semi-color-text-2)' }}
                onClick={() => window.open('https://github.com/Calcium-Ion/neko-api-key-tool', '_blank')}
              />
            )}
          </>
        }
      />
    </div>
  );
};

export default HeaderBar;
