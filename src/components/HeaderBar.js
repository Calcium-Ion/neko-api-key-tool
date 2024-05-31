
import { Nav, Typography } from '@douyinfe/semi-ui';
import { IconTag } from '@douyinfe/semi-icons-lab';

const HeaderBar = () => {

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
          <Typography.Text link={{ href: 'https://github.com/Calcium-Ion/neko-api-key-tool' }}>Copyright © 2024 NewAPI. All Rights Reserved.</Typography.Text>
        }
      />
    </div>
  );
};

export default HeaderBar;
