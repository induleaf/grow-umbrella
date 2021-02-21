import React from 'react';
import '../federated-types/components.d';
import loadable from '@loadable/component';

const overviewList = loadable(() => import('growUmbrellaRemote/overviewList'), { ssr: false });

const Overview = loadable(() => import('growUmbrellaRemote/Overview'), { ssr: false });

const Header = (props: any): React.ReactElement => {
  type OvrviewListFunction = (name: string) => any[] | null;

  const getList = overviewList as OvrviewListFunction;

  const { title } = props;
  return (
    <div
      style={{
        backgroundColor: 'darkred',
        color: 'white',
        width: '100%',
        padding: '1em',
      }}
    >
      <h1>{title}</h1>
      <Overview list={getList('Bulb')} />
      {/* getList not able to call the getList function */}
    </div>
  );
};

export default Header;
