import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import Technology from './Technology';
import { AuthContext } from '../contexts/AuthContext';

const set1 = [
  'Service mesh',
  'Dark mode interfaces',
  'Scrum',
  'Kanban',
  'Fix forward',
  'Change freezes',
  'Test plans',
  'Zero bug policy',
];

const set2 = ['.Net/C#', 'Knockout', 'jQuery', 'React'];

const Layout = ({ Techs }) => {
  return (
    <div className="overflow-x-auto w-full flex justify-center">
      <form>
        <table className="table w-1/2">
          <thead>
            <tr>
              <th></th>
              <th>Meh</th>
              <th>Hold</th>
              <th>Assess</th>
              <th>Trial</th>
              <th>Adopt</th>
            </tr>
          </thead>
          <tbody>
            {Techs.map((i, k) => {
              return <Technology key={k} technology={i} />;
            })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Meh</th>
              <th>Hold</th>
              <th>Assess</th>
              <th>Trial</th>
              <th>Adopt</th>
            </tr>
          </tfoot>
        </table>
      </form>
    </div>
  );
};

const Table = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const fetchData = () => {
    axios.get('/.netlify/functions/getData').then((res) => {
      setData(res.data[0]);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {data ? (
          <span>
            userid: {data.userid} - this means mongodb + netlify functions are
            working
          </span>
        ) : null}{' '}
        <br></br>
        {user ? (
          <span>
            hey, {user.email} - this means netlify identity is working
          </span>
        ) : null}
      </div>
      <Layout Techs={set1} />
      <Layout Techs={set2} />
    </>
  );
};

export default Table;
